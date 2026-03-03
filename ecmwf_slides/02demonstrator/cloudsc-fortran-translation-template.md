# Reusable Template: Translating dwarf-cloudsc Fortran Kernel to [TARGET_LANGUAGE]

## Initial Prompt for New Session

I need you to translate the CLOUDSC cloud microphysics kernel from Fortran to [TARGET_LANGUAGE].

## Source Code Location

### Primary Source (Fortran)
- Fortran kernel: `src/cloudsc_fortran/cloudsc.F90` (2879 lines, single subroutine)
- Fortran entry point: `src/cloudsc_fortran/dwarf_cloudsc.F90`
- Fortran driver: `src/cloudsc_fortran/cloudsc_driver_mod.F90`

### Shared Modules (Fortran)
- Constants: `src/common/module/yomcst.F90`, `yoethf.F90`, `yoecldp.F90`
- Data replication: `src/common/module/expand_mod.F90`
- Validation: `src/common/module/validate_mod.F90`
- I/O: `src/common/module/file_io_mod.F90`, `hdf5_file_mod.F90`
- Kind parameters: `src/common/module/parkind1.F90`

### Secondary Reference (C — for cross-checking)
- C kernel: `src/cloudsc_c/cloudsc/cloudsc_c.c` (2587 lines)
- C constants: `src/cloudsc_c/cloudsc/yomcst_c.h`, `yoethf_c.h`, `yoecldp_c.h`
- C I/O: `src/cloudsc_c/cloudsc/load_state.c`
- C validation: `src/cloudsc_c/cloudsc/cloudsc_validate.c`

### HDF5 Data
- Input: `config-files/input.h5`
- Reference: `config-files/reference.h5`

## Target Structure (mirror Fortran)
Create `src/cloudsc_[target]/` with:
- `kernel.[ext]` — monolithic kernel function (matches `cloudsc.F90`)
- `io.[ext]` — HDF5 loading (matches `file_io_mod.F90` / `hdf5_file_mod.F90`)
- `validation.[ext]` — error computation (matches `validate_mod.F90`)
- `constants.[ext]` — physical/thermodynamic constants (`yomcst.F90`, `yoethf.F90`)
- `cloud_parameters.[ext]` — YRECLDP parameters (~88 floats + ~17 ints from `yoecldp.F90`)
- `driver.[ext]` — CLI entry point (matches `dwarf_cloudsc.F90` + `cloudsc_driver_mod.F90`)

## Critical Translation Rules

### 1. I/O: HDF5 Key Names Are Case-Sensitive
The HDF5 file has MIXED-CASE keys for 7 YRECLDP parameters:
- `YRECLDP_RCL_KKAac` (not `YRECLDP_RCL_KKAAC`)
- `YRECLDP_RCL_KKBac` (not `YRECLDP_RCL_KKBAC`)
- `YRECLDP_RCL_KKAau` (not `YRECLDP_RCL_KKAAU`)
- `YRECLDP_RCL_KKBauq` (not `YRECLDP_RCL_KKBAUQ`)
- `YRECLDP_RCL_KKBaun` (not `YRECLDP_RCL_KKBAUN`)
- `YRECLDP_RCL_KK_cloud_num_sea` (not uppercase)
- `YRECLDP_RCL_KK_cloud_num_land` (not uppercase)

**SOLUTION**: Iterate actual HDF5 keys instead of constructing key names. Example:
```python
for key in f.keys():
    if key.startswith("YRECLDP_"):
        attr = key[len("YRECLDP_"):].lower()
        # ... load value
```

### 2. Indexing: Fortran Uses 1-Based Natively
Unlike C, Fortran uses natural 1-based indexing:
- Species indices: `NCLDQL=1, NCLDQI=2, NCLDQR=3, NCLDQS=4, NCLDQV=5`
- Level loop: `DO JK=NCLDTOP,KLEV` (1-based, inclusive on both ends)
- Column loop: `DO JL=KIDIA,KFDIA` (typically 1 to KLON)

**For 0-based target languages** (Python, C++, etc.):
- Subtract 1 from all Fortran indices: `NCLDQL=0, NCLDQI=1, NCLDQR=2, NCLDQS=3, NCLDQV=4`
- Level loop: `for jk in range(ncldtop-1, klev)` or `for(jk=ncldtop-1; jk<klev; jk++)`
- `ncldtop`: Fortran starts at `NCLDTOP`, 0-based target starts at `ncldtop - 1`

**For 1-based target languages** (Julia, MATLAB, R):
- Direct translation — no index conversion needed

### 3. Array Shapes: Fortran Is Column-Major
Fortran stores arrays in column-major order with the first index varying fastest:
- 2D fields: `(KLON, KLEV)` — column is first dim, level is second
- 3D fields: `(KLON, KLEV, NCLV)` — column, level, species
- PAPH/flux fields: `(KLON, KLEV+1)`

**For row-major languages** (C, Python/NumPy, etc.):
- Transpose to `(KLEV, KLON)`, `(NCLV, KLEV, KLON)`, etc.
- Or keep Fortran order and use column-major layout (e.g., NumPy `order='F'`)

**HDF5 storage**: Data in HDF5 is stored row-major, so when loading into Fortran-order arrays, dimensions appear reversed.

### 4. Constants Are Module Variables
Fortran accesses constants via `USE` statements, not struct fields:
```fortran
USE YOMCST,  ONLY : RG, RD, RCPD, RETV, RLVTT, RLSTT, RLMLT, RTT, RV
USE YOETHF,  ONLY : R2ES, R3LES, R3IES, R4LES, R4IES, R5LES, R5IES, ...
USE YOECLDP, ONLY : YRECLDP   ! TYPE(TECLDP), contains ~105 parameters
```
In your target language, these can be module-level globals, a constants namespace, or a struct — whatever is idiomatic.

### 5. Local Arrays Are Stack-Allocated VLAs
Fortran uses automatic (stack-allocated) local arrays:
```fortran
REAL(KIND=JPRB) :: ZLCOND1(KLON)
REAL(KIND=JPRB) :: ZQX(KLON, KLEV, NCLV)
REAL(KIND=JPRB) :: ZSOLQA(KLON, NCLV, NCLV)
```
In your target language, allocate these appropriately (stack, heap, or arena).

### 6. Assignment vs Accumulation Bug Pattern
Watch for places where Fortran uses `=` (assignment) but translation might use `+=` (accumulation):
```fortran
! cloudsc.F90 — ASSIGNMENT, not +=
ZSOLAC(JL) = (1.0_JPRB - ZA(JL,JK)) * ZFACI
```
If your target language uses conditional logic like `x += where(mask, val, 0)`, this becomes accumulation. Use conditional assignment instead:
```python
zsolac = np.where(mask, (1.0 - za[jk]) * zfaci, zsolac)  # Correct
# NOT: zsolac += np.where(mask, ..., 0.0)  # Wrong - accumulates
```

### 7. Condensation Iteration: Sign in ZDQS Calculation
Fortran code (around line 1271, section 3.4):
```fortran
! After 2 Newton iterations for condensation
ZDQS(JL) = ZQSMIX(JL,JK) - ZQOLD(JL)
```
The iteration modifies `ZQSMIX` in-place twice, then restores it.
If using temporary variables instead of in-place modification:
```python
zdqs = zqsmix_temp - zcond1 - zqold  # Correct (subtract zcond1)
# NOT: zdqs = zqsmix_temp + zcond1 - zqold  # Wrong sign
```

### 8. Species Arrays
```fortran
! Fortran (1-indexed, from cloudsc.F90 lines ~330-345)
IPHASE(NCLDQL) = 1  ! liquid phase
IPHASE(NCLDQI) = 2  ! ice phase
IPHASE(NCLDQR) = 1  ! rain = liquid phase
IPHASE(NCLDQS) = 2  ! snow = ice phase
IPHASE(NCLDQV) = 0  ! vapour

IMELT(NCLDQI)  = NCLDQL  ! ice melts to liquid
IMELT(NCLDQS)  = NCLDQR  ! snow melts to rain

LLFALL(NCLDQR) = .TRUE.  ! rain falls
LLFALL(NCLDQS) = .TRUE.  ! snow falls
```
Target (0-indexed):
```python
IPHASE = [1, 2, 1, 2, 0]  # liquid, ice, rain(liquid), snow(ice), vapour
IMELT  = [0, 0, 0, 0, 0]  # only ice->liquid, snow->rain
IMELT[1] = 0  # NCLDQI(0-indexed) melts to NCLDQL(0-indexed)
LLFALL = [False, False, True, True, False]
```
**Careful**: `IMELT(JM)` in Fortran gives a 1-indexed result. In 0-indexed target, adjust accordingly.

## Incremental Verification Strategy

### Phase 1: I/O Verification (before writing kernel)
1. Implement `io.[ext]` to load from `input.h5`
2. Verify all field shapes match expected:
   - 2D fields: `(100, 137)` in Fortran order `(KLON, KLEV)` for klon=100, klev=137
   - PAPH: `(100, 138)` in Fortran order
   - PCLV: `(100, 137, 5)` in Fortran order
3. **Critical**: Verify all 110 YRECLDP parameters loaded (not 103 due to case mismatch)
   ```
   # Print and verify these 7 are non-zero:
   rcl_kkaac, rcl_kkbac, rcl_kkaau, rcl_kkbauq, rcl_kkbaun,
   rcl_kk_cloud_num_sea, rcl_kk_cloud_num_land
   ```
4. Implement `load_reference` for `reference.h5` (21 output fields)

### Phase 2: Validation Framework
1. Implement `validation.[ext]` matching Fortran's error computation (`validate_mod.F90`)
2. Test: validate reference against itself → all zeros
3. Test: validate slightly perturbed reference → small errors reported

### Phase 3: Kernel Translation (section by section)
Translate in this order, validating after each major section:

| Order | Fortran Lines | Section | What to Check |
|-------|---------------|---------|---------------|
| 1 | 143-554 | Declarations + setup | Shapes, kinds correct |
| 2 | 555-661 | 0. Constants + switches | IWARMRAIN, IEVAPRAIN, IEVAPSNOW, IDEPICE |
| 3 | 662-817 | 1. Initial values | ZQX, ZTP1, ZAP, ZLIQ/ZICE initialized |
| 4 | 818-860 | 2. Constants + parameters | ZTRPAUS, single-level resets |
| 5 | 864-990 | 3.0 Initialize loop vars | ZQXFG, ZCORQSLIQ, ZCORQSICE, ZQX0 |
| 6 | 991-1096 | 3.1 Ice supersaturation | ZSUPSAT, ZSOLQA updates |
| 7 | 1097-1225 | 3.2-3.3 Detrainment + subsidence | ZSOLAC, ZCONVSRCE, ZSOLQA |
| 8 | 1226-1507 | 3.4 Erosion + condensation | ZDQS, ZLCOND1, ZLCOND2 |
| 9 | 1508-1703 | 3.7 Ice deposition | ZDEPOS values |
| 10 | 1714-1792 | 4.2 Sedimentation + precip cover | ZCOVPTOT, ZFALLSINK |
| 11 | 1793-1936 | 4.3 Autoconversion (snow + warm) | ZRAINAUT, ZSNOWAUT |
| 12 | 1937-1989 | Riming | ZSOLQA riming terms |
| 13 | 1990-2120 | 4.4 Melting + freezing | Species transfers |
| 14 | 2121-2449 | 4.5 Rain/snow evaporation | ZDPEVAP values |
| 15 | 2450-2698 | 5.0 Solver (5×5 LU) | ZQXN output |
| 16 | 2699-2790 | 6+8 Tendencies + flux diagnostics | Final outputs |

### Phase 4: Full Validation
Run: `[target_runner] --ngptot 100`
Expected output for all 21 fields:
```
MaxRelErr-% < 2.3e-14  (i.e., < 10 * machine epsilon for float64)
```

Fields that should be exactly zero error (no floating-point differences):
- PLUDE, PRAINFRAC_TOPRFZ, PFCQLNG, PFCQNNG, PFCQRNG, PFCQSNG, PFSQLTUR, PFSQITUR, PFPLSL, PFHPSL

Fields that may have tiny floating-point differences:
- PCOVPTOT, PFSQLF, PFSQIF, PFSQRF, PFSQSF, PFPLSN, PFHPSN, TENDENCY_LOC%*

### Phase 5: Single-Thread Scaling Benchmark
After validation passes, benchmark single-threaded performance at increasing problem sizes to compare against Fortran.

**How to run** (Fortran reference): `docs/run_single_thread_scaling.sh`
**Plot script**: `docs/plot_single_thread_scaling.py`
**Data**: `docs/single_thread_scaling_data.csv`

Reference values (cols/s, OMP_NUM_THREADS=1):

| | 10 | 100 | 400 | 800 | 1.6k | 3.2k | 6.4k | 12.8k | 25.6k |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| **Fortran** | 5,365 | 18,064 | 19,952 | 20,321 | 20,653 | 20,788 | 21,020 | 21,081 | 21,019 |
| **C** | 4,874 | 12,057 | 15,437 | 15,921 | 15,996 | 16,001 | 16,043 | 16,174 | 16,253 |

**What to look for**:
- Throughput should increase with problem size and plateau around ngptot >= 800 (cache warmth)
- At plateau, Fortran achieves ~21,000 cols/s — this is the target to match or approach
- C is ~1.3x slower than Fortran at steady state; if your implementation is slower than C, investigate

**Example benchmark command**:
```bash
OMP_NUM_THREADS=1 ./bin/dwarf-cloudsc-[target] 1 100 100    # ngptot=100
OMP_NUM_THREADS=1 ./bin/dwarf-cloudsc-[target] 1 25600 25600 # ngptot=25600
```

### Phase 6: Weak Scaling Benchmark
Proportional work per thread (800 columns/thread). Tests parallel efficiency.

**How to run**: `docs/run_weak_scaling.sh`
**Plot script**: `docs/plot_weak_scaling.py`
**Data**: `docs/weak_scaling_data.csv`

Reference values (cols/s, 800 cols/thread):

| | 1T | 2T | 4T | 8T | 16T | 32T |
|---|---:|---:|---:|---:|---:|---:|
| **Fortran** | 16,487 | 33,115 | 68,165 | 133,192 | 218,520 | 317,434 |
| **C** | 12,997 | 26,092 | 55,269 | 111,018 | 176,359 | 258,476 |

**What to look for**:
- Near-linear scaling up to ~8 threads (ideal: 2x threads → 2x throughput)
- Efficiency typically drops at higher thread counts due to NUMA/memory bandwidth
- Fortran achieves ~317k cols/s at 32 threads — compare your implementation's scaling curve

**Example benchmark command**:
```bash
OMP_NUM_THREADS=4 ./bin/dwarf-cloudsc-[target] 4 3200 800   # 4 threads, 800 cols/thread
OMP_NUM_THREADS=32 ./bin/dwarf-cloudsc-[target] 32 25600 800 # 32 threads
```

### Phase 7: Strong Scaling Benchmark
Fixed problem size (ngptot=32,000), increasing threads. Tests overhead and load balancing.

**How to run**: `docs/run_strong_scaling.sh`
**Plot script**: `docs/plot_strong_scaling.py`
**Data**: `docs/strong_scaling_data.csv`

Reference values (cols/s, ngptot=32,000 fixed):

| | 1T | 2T | 4T | 8T | 16T | 32T |
|---|---:|---:|---:|---:|---:|---:|
| **Fortran** | 17,242 | 34,398 | 72,884 | 146,554 | 227,564 | 319,972 |
| **C** | 13,260 | 26,318 | 57,718 | 114,944 | 188,524 | 265,556 |

**What to look for**:
- Near-linear scaling up to ~8 threads (ideal: 2x threads → 2x throughput)
- At 32 threads, Fortran achieves ~320k cols/s — a good upper-bound reference
- Strong scaling efficiency = (T1 × N) / TN; ideal is 1.0, >0.8 is good

**Example benchmark command**:
```bash
OMP_NUM_THREADS=8 ./bin/dwarf-cloudsc-[target] 8 32000 4000   # 8 threads, 4000 cols/thread
OMP_NUM_THREADS=32 ./bin/dwarf-cloudsc-[target] 32 32000 1000 # 32 threads, 1000 cols/thread
```

### Phase 8: GPU Throughput Benchmark (for GPU translations)
For GPU-targeted translations (CUDA, OpenACC, OpenMP offload, SYCL, etc.), measure throughput at increasing problem sizes to verify the implementation scales and utilizes the device effectively.

**Test sizes**: 10,000 / 50,000 / 100,000 / 200,000 columns

**Example benchmark commands**:
```bash
./bin/dwarf-cloudsc-[target]-gpu 1 10000 10000
./bin/dwarf-cloudsc-[target]-gpu 1 50000 50000
./bin/dwarf-cloudsc-[target]-gpu 1 100000 100000
./bin/dwarf-cloudsc-[target]-gpu 1 200000 200000
```

**What to look for**:
- Throughput should increase significantly from 10k to 100k as GPU occupancy improves
- At 100k+ columns the GPU should be well-saturated; throughput may plateau or grow slowly
- If throughput does not increase from 10k to 50k, suspect kernel launch overhead or excessive device-host transfers
- Watch for OOM at larger sizes — reduce batch size or check memory allocation patterns

## Common Debugging Patterns

### If validation fails with ~0.5%-10% errors:
1. **Check I/O first**: Are all YRECLDP parameters loaded? Especially the 7 mixed-case KK parameters.
2. **Check autoconversion**: If liquid is too high and snow too low, KK parameters are likely zero.

### If specific field fails:
- `TENDENCY_LOC%CLD` high error → Check solver section (5.0) or species transfer matrices (ZSOLQA, ZSOLQB)
- `PCOVPTOT` error → Check precipitation cover overlap (lines ~1758-1792)
- `PFPLSN/PFHPSN` error → Check snow flux accumulation in tendencies section

### Debugging technique:
Create a script to back-calculate ZQXN from tendencies and compare against reference:
```python
# From tendency_loc_cld and pclv, recover what zqxn should be
zqxn_recovered = pclv + tendency_loc_cld * ptsphy
# Compare against reference to find which species diverges
```

## Output Format (for log comparison with Fortran/C)

Match Fortran validation output format exactly:
```
     NUMOMP=1, NGPTOT=100, NPROMA=100, NGPBLKS=1
             Variable Dim             MinValue             MaxValue            AbsMaxErr         AvgAbsErr/GP          MaxRelErr-%
                PLUDE 2D1  0.0000000000000e+00  1.0267201089823e-04  0.0000000000000e+00  0.0000000000000e+00  0.0000000000000e+00
       TENDENCY_LOC%T 2D1  ...
```

Key format rules:
- Field names: UPPERCASE, use `%` for tendencies (`TENDENCY_LOC%T`)
- Dim column: `2D1`/`2D2`/`2D3` (2D + error_type_code)
- Numbers: 13 decimal places, scientific notation

## Files to Reference During Translation

### Primary Sources (use these)
1. **Fortran kernel**: `src/cloudsc_fortran/cloudsc.F90` — the authoritative source
2. **Fortran driver**: `src/cloudsc_fortran/cloudsc_driver_mod.F90` — parallel dispatch + timing
3. **Fortran entry**: `src/cloudsc_fortran/dwarf_cloudsc.F90` — CLI argument parsing
4. **Shared constants**: `src/common/module/yomcst.F90`, `yoethf.F90`, `yoecldp.F90`
5. **Shared I/O**: `src/common/module/file_io_mod.F90`, `hdf5_file_mod.F90`
6. **Shared validation**: `src/common/module/validate_mod.F90`

### Secondary References (for cross-checking)
7. **C kernel**: `src/cloudsc_c/cloudsc/cloudsc_c.c` — useful for verifying logic in a different style
8. **Validated Python port**: `src/cloudsc_numpy/` — working implementation for comparison

---

## Quick Start Checklist

- [ ] Implement I/O with case-insensitive YRECLDP key handling
- [ ] Verify all 7 KK parameters load as non-zero
- [ ] Implement validation framework
- [ ] Test validation with reference vs reference = zero
- [ ] Translate kernel section by section (16 sections, see Phase 3)
- [ ] Run full validation: all 21 fields < 10*eps
- [ ] Match Fortran log output format for diff comparison
- [ ] Single-thread scaling: compare against Fortran ~21k cols/s plateau
- [ ] Weak scaling: verify near-linear scaling, compare against Fortran
- [ ] Strong scaling: verify efficiency at 32 threads, compare against Fortran
- [ ] GPU (if applicable): throughput at 10k/50k/100k/200k columns
