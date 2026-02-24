import{o as ie,e as _e,k as ve,z as Ce,b as Se,w as Le,d as Pe,g as T,v as Re,x as Ae,T as X}from"./modules/vue-CoEReDeK.js";import{_ as Te,K as oe,al as Ie}from"./index-DNgVCi0l.js";import{I as Fe}from"./default-CxDFQu5c.js";import"./modules/shiki-dWneNDnB.js";import"./ScholarlyHeader.vue_vue_type_script_setup_true_lang-BAbqk7Ew.js";import"./useFontSizeStyles-CeZIBkDH.js";import"./useAutoFontSize-DuE63Yr4.js";const De=`---
layout: default
title: Development challenges for climate (weather) models
subtitle: FESOM2
density: compact
clicks: 1
---

- Community is evolving towards __km-scale resolution climate simulations__ to address uncertainty and granularity in climate predictions. 
  - in this paradigm optimizing computation and memory, for instance supporting reduced precisions is key to enabling.

- __Rapidly evolving HPC hardware__ (CPUs, GPUs, heterogeneous systems), driven by ML and energy efficiency needs.
   - requiring supporting different hardware specific backends (ACC, openMP, HIP, CUDA...) and branching source code, that is hard for development. 

- Higher resolution simulations demand efficient I/O and storage: scalable, flexible solutions including cloud storage and streaming data.
   - Needs tighter system integration and with external tools. 

- Growing number of model components and use cases (e.g, impact models).
   - this creates a heavy development and maintenance burden on developers.


- User demand for modern, browser-driven workflows, interactive visualization, and reusable diagnostics.
   - these are often in Python, Web-frameworks. 

- __Fragmented fortran compiler development__ and often at reduced priority from hardware vendors.
   - some compilers haven't even implemented 2018 standards, some mordern compilers like Clang don't have stable fortran ports yet.
- __Shrinking pool of Fortran developers__ makes recruiting new developers challenging.

- __Competition from cost-effective ML-based model surrogates__ makes it harder to justify physics based climate model development costs at some centers.


<style>
.slidev-layout { font-size: 0.75rem; line-height: 1.4; }
.slidev-layout li { margin: 0.55em 0; }
</style>



<!--
AWI is in a unique position as the home of FESOM, a comprehensive ocean and sea-ice model.
Preserving FESOM's legacy and ensuring its continued development is important for the climate science community. like wise others like MITGCM.
-->

---
layout: default
title: Future development pathways
subtitle: An overview
density: compact
---

- __Business as usual__: continue developing fortran based model 
   - Adapting to backend requirements and pathways to conduct efficient HR simulations like mixed precision. 
   - Hope is that compilers and hardware backends will converge in future. 
- __Migrate to C++__: OpenMP, Kokkos promise unified source code.
   - C++ has better compiler support and system integration.    
   - C++/Kokkos: MPAS, ICON-Atmosphere.
   - C++/Kokkos: Unifies OpenMP, CUDA, HIP for cpus, differnt gpu vendors.
   - With C++ we give away scientist friendly array and kernels. 
- __Migrage to a very high level programming language__: Python, Julia, gt4py, etc.
   - Uses JIT compilation of kernels.
   - Python-Jax: VEROS, VERIS
   - Python-Gt4py: ICON-C atmosphere, IFS-FV dycore-PMAP, PACE. 
   - Julia: Oceananigans.
   - Python-Numba, Pytorch, Codeon, Mojo other options.
- __Explore ML-surrogates__: hybrid-ML-Physics models and Foundation models. 
   - Require large training data.
   - For climate even complex.

---
layout: statement
title: Future development pathways
---


While all approaches are promising in their own right, and yet none have demonstrated to replace comprehensive climate models — or even comprehensive component models like ocean–sea-ice models — let alone tested on different grids configurations. Each pathway is a (based on a belief) a long term commitment, needs extensive exploration, involves a churn of developer skills which is not feasible for every modeling center.  



<!--
These problems are common to many centers using Fortran — some have chosen to migrate to other frameworks. Below are notable mentions.

Unstructured, flexible triangular meshes pose unique challenges for compute kernels — solutions here are largely uncharted. In the list, large modeling centers with significant resources are pursuing C++/Kokkos. Others are exploring alternative frameworks, mostly on structured grids.

C++ is not inherently scientific-computing friendly — it is made viable for this purpose by the Kokkos library (backed by Sandia National Labs / US DOE). Key challenges with C++ include manual memory management and the lack of native multi-dimensional array indexing that Fortran provides naturally.
-->


---
layout: image-right
image: /aieditorcartoon.png
ratio: "3:1"
fit: contain
title: Meanwhile AI-agentic is revolutioning software development
subtitle: An Opportunity?
---

__AI code editors are agentic systems__:  Modern AI code editors are not just large language models (LLM) embedded in an IDE; they function as autonomous agents that combine an LLM with tool access (e.g., file system, terminal tools, linters, version control) and operate in an iterative loop of planning, executing and validating. This tool-enabled feedback allows them to carry out multi-step development tasks—such as implementing features, fixing bugs, or refactoring code—rather than simply generating one-off responses to prompts.

<v-click>

<Block type="info" title="An Opportunity?">
AI code editors are revolutionizing software development and are causing disruption — clearly demonstrating for rapid prototyping of new software, reducing repetative work, lowering entry barriers and reshaping productivity. Current evaluation benchmarks (SWE-bench) do not target use with large codebase architectectues such as climate models, use with Fortran and generating performant scalable code.
</Block>

</v-click>

<v-click>
<Block type="danger" title="Evaluate">

Can we use it to translate Fortran based climate model code (as DSL) to different programming languages listed in development pathways and evaluate them?
</Block>
</v-click>`,Ee=`# Reusable Template: Translating dwarf-cloudsc Fortran Kernel to [TARGET_LANGUAGE]

## Initial Prompt for New Session

I need you to translate the CLOUDSC cloud microphysics kernel from Fortran to [TARGET_LANGUAGE].

## Source Code Location

### Primary Source (Fortran)
- Fortran kernel: \`src/cloudsc_fortran/cloudsc.F90\` (2879 lines, single subroutine)
- Fortran entry point: \`src/cloudsc_fortran/dwarf_cloudsc.F90\`
- Fortran driver: \`src/cloudsc_fortran/cloudsc_driver_mod.F90\`

### Shared Modules (Fortran)
- Constants: \`src/common/module/yomcst.F90\`, \`yoethf.F90\`, \`yoecldp.F90\`
- Data replication: \`src/common/module/expand_mod.F90\`
- Validation: \`src/common/module/validate_mod.F90\`
- I/O: \`src/common/module/file_io_mod.F90\`, \`hdf5_file_mod.F90\`
- Kind parameters: \`src/common/module/parkind1.F90\`

### Secondary Reference (C — for cross-checking)
- C kernel: \`src/cloudsc_c/cloudsc/cloudsc_c.c\` (2587 lines)
- C constants: \`src/cloudsc_c/cloudsc/yomcst_c.h\`, \`yoethf_c.h\`, \`yoecldp_c.h\`
- C I/O: \`src/cloudsc_c/cloudsc/load_state.c\`
- C validation: \`src/cloudsc_c/cloudsc/cloudsc_validate.c\`

### HDF5 Data
- Input: \`config-files/input.h5\`
- Reference: \`config-files/reference.h5\`

## Target Structure (mirror Fortran)
Create \`src/cloudsc_[target]/\` with:
- \`kernel.[ext]\` — monolithic kernel function (matches \`cloudsc.F90\`)
- \`io.[ext]\` — HDF5 loading (matches \`file_io_mod.F90\` / \`hdf5_file_mod.F90\`)
- \`validation.[ext]\` — error computation (matches \`validate_mod.F90\`)
- \`constants.[ext]\` — physical/thermodynamic constants (\`yomcst.F90\`, \`yoethf.F90\`)
- \`cloud_parameters.[ext]\` — YRECLDP parameters (~88 floats + ~17 ints from \`yoecldp.F90\`)
- \`driver.[ext]\` — CLI entry point (matches \`dwarf_cloudsc.F90\` + \`cloudsc_driver_mod.F90\`)

## Critical Translation Rules

### 1. I/O: HDF5 Key Names Are Case-Sensitive
The HDF5 file has MIXED-CASE keys for 7 YRECLDP parameters:
- \`YRECLDP_RCL_KKAac\` (not \`YRECLDP_RCL_KKAAC\`)
- \`YRECLDP_RCL_KKBac\` (not \`YRECLDP_RCL_KKBAC\`)
- \`YRECLDP_RCL_KKAau\` (not \`YRECLDP_RCL_KKAAU\`)
- \`YRECLDP_RCL_KKBauq\` (not \`YRECLDP_RCL_KKBAUQ\`)
- \`YRECLDP_RCL_KKBaun\` (not \`YRECLDP_RCL_KKBAUN\`)
- \`YRECLDP_RCL_KK_cloud_num_sea\` (not uppercase)
- \`YRECLDP_RCL_KK_cloud_num_land\` (not uppercase)

**SOLUTION**: Iterate actual HDF5 keys instead of constructing key names. Example:
\`\`\`python
for key in f.keys():
    if key.startswith("YRECLDP_"):
        attr = key[len("YRECLDP_"):].lower()
        # ... load value
\`\`\`

### 2. Indexing: Fortran Uses 1-Based Natively
Unlike C, Fortran uses natural 1-based indexing:
- Species indices: \`NCLDQL=1, NCLDQI=2, NCLDQR=3, NCLDQS=4, NCLDQV=5\`
- Level loop: \`DO JK=NCLDTOP,KLEV\` (1-based, inclusive on both ends)
- Column loop: \`DO JL=KIDIA,KFDIA\` (typically 1 to KLON)

**For 0-based target languages** (Python, C++, etc.):
- Subtract 1 from all Fortran indices: \`NCLDQL=0, NCLDQI=1, NCLDQR=2, NCLDQS=3, NCLDQV=4\`
- Level loop: \`for jk in range(ncldtop-1, klev)\` or \`for(jk=ncldtop-1; jk<klev; jk++)\`
- \`ncldtop\`: Fortran starts at \`NCLDTOP\`, 0-based target starts at \`ncldtop - 1\`

**For 1-based target languages** (Julia, MATLAB, R):
- Direct translation — no index conversion needed

### 3. Array Shapes: Fortran Is Column-Major
Fortran stores arrays in column-major order with the first index varying fastest:
- 2D fields: \`(KLON, KLEV)\` — column is first dim, level is second
- 3D fields: \`(KLON, KLEV, NCLV)\` — column, level, species
- PAPH/flux fields: \`(KLON, KLEV+1)\`

**For row-major languages** (C, Python/NumPy, etc.):
- Transpose to \`(KLEV, KLON)\`, \`(NCLV, KLEV, KLON)\`, etc.
- Or keep Fortran order and use column-major layout (e.g., NumPy \`order='F'\`)

**HDF5 storage**: Data in HDF5 is stored row-major, so when loading into Fortran-order arrays, dimensions appear reversed.

### 4. Constants Are Module Variables
Fortran accesses constants via \`USE\` statements, not struct fields:
\`\`\`fortran
USE YOMCST,  ONLY : RG, RD, RCPD, RETV, RLVTT, RLSTT, RLMLT, RTT, RV
USE YOETHF,  ONLY : R2ES, R3LES, R3IES, R4LES, R4IES, R5LES, R5IES, ...
USE YOECLDP, ONLY : YRECLDP   ! TYPE(TECLDP), contains ~105 parameters
\`\`\`
In your target language, these can be module-level globals, a constants namespace, or a struct — whatever is idiomatic.

### 5. Local Arrays Are Stack-Allocated VLAs
Fortran uses automatic (stack-allocated) local arrays:
\`\`\`fortran
REAL(KIND=JPRB) :: ZLCOND1(KLON)
REAL(KIND=JPRB) :: ZQX(KLON, KLEV, NCLV)
REAL(KIND=JPRB) :: ZSOLQA(KLON, NCLV, NCLV)
\`\`\`
In your target language, allocate these appropriately (stack, heap, or arena).

### 6. Assignment vs Accumulation Bug Pattern
Watch for places where Fortran uses \`=\` (assignment) but translation might use \`+=\` (accumulation):
\`\`\`fortran
! cloudsc.F90 — ASSIGNMENT, not +=
ZSOLAC(JL) = (1.0_JPRB - ZA(JL,JK)) * ZFACI
\`\`\`
If your target language uses conditional logic like \`x += where(mask, val, 0)\`, this becomes accumulation. Use conditional assignment instead:
\`\`\`python
zsolac = np.where(mask, (1.0 - za[jk]) * zfaci, zsolac)  # Correct
# NOT: zsolac += np.where(mask, ..., 0.0)  # Wrong - accumulates
\`\`\`

### 7. Condensation Iteration: Sign in ZDQS Calculation
Fortran code (around line 1271, section 3.4):
\`\`\`fortran
! After 2 Newton iterations for condensation
ZDQS(JL) = ZQSMIX(JL,JK) - ZQOLD(JL)
\`\`\`
The iteration modifies \`ZQSMIX\` in-place twice, then restores it.
If using temporary variables instead of in-place modification:
\`\`\`python
zdqs = zqsmix_temp - zcond1 - zqold  # Correct (subtract zcond1)
# NOT: zdqs = zqsmix_temp + zcond1 - zqold  # Wrong sign
\`\`\`

### 8. Species Arrays
\`\`\`fortran
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
\`\`\`
Target (0-indexed):
\`\`\`python
IPHASE = [1, 2, 1, 2, 0]  # liquid, ice, rain(liquid), snow(ice), vapour
IMELT  = [0, 0, 0, 0, 0]  # only ice->liquid, snow->rain
IMELT[1] = 0  # NCLDQI(0-indexed) melts to NCLDQL(0-indexed)
LLFALL = [False, False, True, True, False]
\`\`\`
**Careful**: \`IMELT(JM)\` in Fortran gives a 1-indexed result. In 0-indexed target, adjust accordingly.

## Incremental Verification Strategy

### Phase 1: I/O Verification (before writing kernel)
1. Implement \`io.[ext]\` to load from \`input.h5\`
2. Verify all field shapes match expected:
   - 2D fields: \`(100, 137)\` in Fortran order \`(KLON, KLEV)\` for klon=100, klev=137
   - PAPH: \`(100, 138)\` in Fortran order
   - PCLV: \`(100, 137, 5)\` in Fortran order
3. **Critical**: Verify all 110 YRECLDP parameters loaded (not 103 due to case mismatch)
   \`\`\`
   # Print and verify these 7 are non-zero:
   rcl_kkaac, rcl_kkbac, rcl_kkaau, rcl_kkbauq, rcl_kkbaun,
   rcl_kk_cloud_num_sea, rcl_kk_cloud_num_land
   \`\`\`
4. Implement \`load_reference\` for \`reference.h5\` (21 output fields)

### Phase 2: Validation Framework
1. Implement \`validation.[ext]\` matching Fortran's error computation (\`validate_mod.F90\`)
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
Run: \`[target_runner] --ngptot 100\`
Expected output for all 21 fields:
\`\`\`
MaxRelErr-% < 2.3e-14  (i.e., < 10 * machine epsilon for float64)
\`\`\`

Fields that should be exactly zero error (no floating-point differences):
- PLUDE, PRAINFRAC_TOPRFZ, PFCQLNG, PFCQNNG, PFCQRNG, PFCQSNG, PFSQLTUR, PFSQITUR, PFPLSL, PFHPSL

Fields that may have tiny floating-point differences:
- PCOVPTOT, PFSQLF, PFSQIF, PFSQRF, PFSQSF, PFPLSN, PFHPSN, TENDENCY_LOC%*

### Phase 5: Single-Thread Scaling Benchmark
After validation passes, benchmark single-threaded performance at increasing problem sizes to compare against Fortran.

**How to run** (Fortran reference): \`docs/run_single_thread_scaling.sh\`
**Plot script**: \`docs/plot_single_thread_scaling.py\`
**Data**: \`docs/single_thread_scaling_data.csv\`

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
\`\`\`bash
OMP_NUM_THREADS=1 ./bin/dwarf-cloudsc-[target] 1 100 100    # ngptot=100
OMP_NUM_THREADS=1 ./bin/dwarf-cloudsc-[target] 1 25600 25600 # ngptot=25600
\`\`\`

### Phase 6: Weak Scaling Benchmark
Proportional work per thread (800 columns/thread). Tests parallel efficiency.

**How to run**: \`docs/run_weak_scaling.sh\`
**Plot script**: \`docs/plot_weak_scaling.py\`
**Data**: \`docs/weak_scaling_data.csv\`

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
\`\`\`bash
OMP_NUM_THREADS=4 ./bin/dwarf-cloudsc-[target] 4 3200 800   # 4 threads, 800 cols/thread
OMP_NUM_THREADS=32 ./bin/dwarf-cloudsc-[target] 32 25600 800 # 32 threads
\`\`\`

### Phase 7: Strong Scaling Benchmark
Fixed problem size (ngptot=32,000), increasing threads. Tests overhead and load balancing.

**How to run**: \`docs/run_strong_scaling.sh\`
**Plot script**: \`docs/plot_strong_scaling.py\`
**Data**: \`docs/strong_scaling_data.csv\`

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
\`\`\`bash
OMP_NUM_THREADS=8 ./bin/dwarf-cloudsc-[target] 8 32000 4000   # 8 threads, 4000 cols/thread
OMP_NUM_THREADS=32 ./bin/dwarf-cloudsc-[target] 32 32000 1000 # 32 threads, 1000 cols/thread
\`\`\`

### Phase 8: GPU Throughput Benchmark (for GPU translations)
For GPU-targeted translations (CUDA, OpenACC, OpenMP offload, SYCL, etc.), measure throughput at increasing problem sizes to verify the implementation scales and utilizes the device effectively.

**Test sizes**: 10,000 / 50,000 / 100,000 / 200,000 columns

**Example benchmark commands**:
\`\`\`bash
./bin/dwarf-cloudsc-[target]-gpu 1 10000 10000
./bin/dwarf-cloudsc-[target]-gpu 1 50000 50000
./bin/dwarf-cloudsc-[target]-gpu 1 100000 100000
./bin/dwarf-cloudsc-[target]-gpu 1 200000 200000
\`\`\`

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
- \`TENDENCY_LOC%CLD\` high error → Check solver section (5.0) or species transfer matrices (ZSOLQA, ZSOLQB)
- \`PCOVPTOT\` error → Check precipitation cover overlap (lines ~1758-1792)
- \`PFPLSN/PFHPSN\` error → Check snow flux accumulation in tendencies section

### Debugging technique:
Create a script to back-calculate ZQXN from tendencies and compare against reference:
\`\`\`python
# From tendency_loc_cld and pclv, recover what zqxn should be
zqxn_recovered = pclv + tendency_loc_cld * ptsphy
# Compare against reference to find which species diverges
\`\`\`

## Output Format (for log comparison with Fortran/C)

Match Fortran validation output format exactly:
\`\`\`
     NUMOMP=1, NGPTOT=100, NPROMA=100, NGPBLKS=1
             Variable Dim             MinValue             MaxValue            AbsMaxErr         AvgAbsErr/GP          MaxRelErr-%
                PLUDE 2D1  0.0000000000000e+00  1.0267201089823e-04  0.0000000000000e+00  0.0000000000000e+00  0.0000000000000e+00
       TENDENCY_LOC%T 2D1  ...
\`\`\`

Key format rules:
- Field names: UPPERCASE, use \`%\` for tendencies (\`TENDENCY_LOC%T\`)
- Dim column: \`2D1\`/\`2D2\`/\`2D3\` (2D + error_type_code)
- Numbers: 13 decimal places, scientific notation

## Files to Reference During Translation

### Primary Sources (use these)
1. **Fortran kernel**: \`src/cloudsc_fortran/cloudsc.F90\` — the authoritative source
2. **Fortran driver**: \`src/cloudsc_fortran/cloudsc_driver_mod.F90\` — parallel dispatch + timing
3. **Fortran entry**: \`src/cloudsc_fortran/dwarf_cloudsc.F90\` — CLI argument parsing
4. **Shared constants**: \`src/common/module/yomcst.F90\`, \`yoethf.F90\`, \`yoecldp.F90\`
5. **Shared I/O**: \`src/common/module/file_io_mod.F90\`, \`hdf5_file_mod.F90\`
6. **Shared validation**: \`src/common/module/validate_mod.F90\`

### Secondary References (for cross-checking)
7. **C kernel**: \`src/cloudsc_c/cloudsc/cloudsc_c.c\` — useful for verifying logic in a different style
8. **Validated Python port**: \`src/cloudsc_numpy/\` — working implementation for comparison

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
`,ze=`---
layout: section
---

# Demonstrator

---
layout: two-cols
title: Demonstrator
subtitle: AI augmented code translation of a climate model Dwarf.
ratio: '3:1'
---

<Block type="info" title="A Dwarf">
A Dwarf of a climate model is a functional, isolated component of a climate model (advection, parametrizations, etc.) that can run independently of the full model configuration.
- Useful to perform idealized experiments, develop alternative implementations and importantly to facilitate tangible  code translations and performance optimization strategies.
</Block>


<Block type="warning" title="IFS-cloud microphysics Dwarf: Why?">

__Column physics parametrization__ scheme for cloud and precipitation processes in the IFS, described by prognostic
equations for cloud liquid water, ice, (LS) rain, (LS) snow and (LS) fractional cloud cover.

__A mature-realistic dwarf with multiple reference implementations__ for CPU and GPU backends and frameworks: Fortran, OpenACC, CUDA, C etc. 
![source version tree](./source_tree.png)


__Cleanly isolated compute kernel, mostly functional__. General archetype for column physics parametrization: nested loops with inner serial vertical dimention loop, outer loop over multiple grid columns, matrix solver (LU decomposition), 2 Newton-Raphson iterations. 

</Block>
::right::

<v-click>
<img src="./cloudsc_flow_diagram.png" style="height:45vh; width:120%; object-fit:fill;" />
</v-click>


<!--
Cloud microphysics solves the evolution of cloud and precipitation hydrometeors — water vapor, cloud liquid, cloud ice, rain, snow, and graupel — through processes such as condensation, evaporation, autoconversion, accretion, sedimentation, and ice nucleation.

The equations govern mass and number concentration tendencies for each species, coupled through source/sink terms.

The computational structure involves nested loops: an outer loop over horizontal grid columns and an inner loop over vertical levels, with microphysics computed column-by-column. The image on the right shows the version tree of available implementations.

dwarf provides reference implementation and performance benchmarks.
Question is can we use AI to translate to different backends. here is the prompt.
-->

---
layout: two-cols
title: Dwarf
subtitle: Inputs and Outputs
ratio: '2:1'

---

![INPUTS](./input_2d_fields.png)

![VALIDATION](./reference_2d_fields.png)

::right::
- Clean hdf5 based inputs and outputs for 100 columns
- Can we replicated for more sizes (ngptot)
- Useful for scaling and validation tests. 
---
layout: default
title: Translation Prompt Template
subtitle: Reusable prompt for AI-assisted Fortran kernel translation
---

<ScrollableMarkdown src="02demonstrator/cloudsc-fortran-translation-template.md" maxHeight="520px" fontSize="0.5em" />

- Used preprocessed code cloudsc_fortran src as Fortran reference, and  C as secondary reference.
- Made a copy with only Fortran and C implementations to prevent accedental reference implementation leaks to LLM.
- Template evolved iteratively from first CPU translations. 
---
layout: two-cols
title: AI-Code Translation Benchmarks
subtitle: CPUs, single thread
ratio: '3:1'
---

<img src="./single_thread_scaling_a1.png" style="width:75%;" />

- Single thread benchmark is important because it measures efficiency of a port to use vectorization on CPU archetectures w.r ro reference FOrtran and C. 
- Most lower level implementations scale (including Rust) but Fortran standsout. 
- For Python based implementations: numba is promissing, Jax uses too much memory and OOMs. 

::right::

The metric Throughput (cols/s) = NGPTOT / wall_time. 

Desirable to have increase or constant for increased sizes for non interacting column physics.
---
layout: two-cols
title: AI-Code Translation Benchmarks
subtitle: CPU, multithreading (OMP)
---

![CLOUDSC Kernel — Strong Scaling](./strong_scaling_a.png)

- Strong scaling: fixed problem size (ngptot=32000) evaluate speedup as we increase threads.
- Expect linear increase in throughput: faster as we add more threads.
- All implementations scale to about 8 threads (possibly hardware dependent).

::right::

![CLOUDSC Kernel — Weak Scaling](./weak_scaling_a.png)
- Weak scaling: increase problem size linearly with threads (ngptot=800 for 1 thread) 
- Expect linear increase in throughput: same throughput for same load on a thread.
- Rust used internal threading (rayon) others used openmp for threading. 
---
layout: two-cols
title: AI-Code Translation Benchmarks
subtitle: GPU
---

![CLOUDSC Kernel — GPU Scaling Comparison](./gpu_all_scaling.png)

- Fortran reference \`cloudsc_gpu\` has ~11 reference implementations using openACC that use SCC kernel.
- SCC: single column coalased makes sure that each GPU thread gets one column, massively parallel.  This is unlike CPU kernels where each cpu-thread processes NPROMA number of columns. 
- Select top 2 performing fortran SCC kernels as reference.

::right::
- Surprisingly fortran SCC kernels tuned for massive parallism dont scale.
- C++/Kokkos that used nproma style kernel, more columns for a gpu thread, scales much better.
- Not enough compute intensity per thread for this dwarf.
- Clearly Microphysics Dwarf is memory bound.
- Jax designed for massively problems also doesn't scale and OOMs out. Test with SCC like kernel.

---
layout: default
title: Demonstrator
subtitle: Summary and Outlook
---

- AI editors are generally able to handle Fortran and multi-file sources with after preprocessing and refactoring (more later).

- Well capable to port to different frameworks that are scalable, performance milage may vary.

- Among the alternative unified source frameworks C++ with kokkos seems to be most mature, numba is promising, and jax is intruging.
 
- Would be useful to evaluate ability to Fortran source to Fortran for different hardware backends.

- Evaluate againt other dwarfs that have more compute intensity (radiation) and exchanges among columns like advection.

- Explore more unified source frameworks like atlas and mojo. 

- Would be nice to evaluate which language can serve as better base language implementation (DSL). 

- Develop benchmarks specific to climate modeling or scientific computing problems targetting LLMs and Frameworks simulaneously. IFS-Cloud-Microphysics Dwarf is a good starting point. 

- Test with different compilers, some may generate better optimizations.`,Ne=`---
layout: section
---

# Future perspectives for Climate models in age of AI.

--- 
layout: center
title: Future perspectives for Climate models in age of AI.
subtitle: What?
---

<Block type="info" title="Enable AI code editing"> 
How do we best leverage AI-editing abilities for sustainable development plans of climate models.   
</Block>

Agentic code editing is here to stay and its adavantages are hard to ignore. 

Dwarf-demonstrator was a specific use case to translate to other languages, scope of use cases is more broad. 

__How to guide?__     

---
layout: default
title: Making a Climate model AI editor ready
subtitle: Build system
---

__Use CMake build system__: LLMs understand cmake very well, saves lot of tool calls.  
   - make all dependencies auto installable: cmake modules to auto fetch and install dependencies.
   - support default build with gnu compilers: LLMs can figure options for debugging across versions.
   - use cmake standard package discovery where possible: \`FindCUDA\` 
   - don't over engineer build system, prefer use cmake-presets, toolchains to build.
   - atleast one model configuration with all inputs included with the model.  


<v-click>
<Block type="warning" title="Key Metric"> 

AI editor is able to build model and run with simple prompt given path: local or remote url.
</Block>

</v-click>

<v-click>

__Add pre-processor target__: A biggest hack  
   - LLMs understand code from static code, as such includes which and ifdefs branches hinder its abilities.  
   - this is relavent for other programming languages which use them C/C++. 
</v-click>

<v-click>

<Block type="warning" title="Key Metric"> 
AI editor should be able to generate a static call graph and data flow graph with a simple prompt.

</Block>
</v-click>

---
layout: default
title: Making a Climate model AI editor ready
subtitle: Refactoring 
---

- reduce dependencies minimal build even no mpi or np=1, serial makes debugging easy. 
- refactor to have modular core (state) and components. each component has clean compute kernel and have simillar signatures.
- prefer shallow code architecture. 
- Avoid use of nested derived types: \`state%tendency%t\`. 
- Avoid changing (dynamic) model state inside subroutines with \`use module\`. Prefer all inputs and outputs in subroutine signature and mark intents.
- Minimize use of preprocessor definitions, especially for model components. Compile all components and control via namelist.       
- Components should be testable independently for different sizes: Dwarfs
  - each test case has a driver and inputs. usable at different resolutions.
  - for advection one can use idealized tests over sphere or cartesian. 
- refactor to have clear entry points for external components,  use plugin framework if possible. 

---
layout: default
title: Making a Climate model AI editor ready
subtitle: Summary and Outlook
---

- Automate build system to be able to build and test using a single prompt given the path. 
    - prefer cmake and its features
- Refactor source to modular components with shallow driver depth consistent compute kernels.
    - standardize tests for components (dwarfs) with reference inputs and outputs that are scalable.
    - idealized configurations as dwarfs. 
- Embrace source control automations (git precommit hooks, CI) to guardrail againt quality. 
- Maintain design documents for AI editors, to guide agentic coding. 
- preferably embrace opensource development (preferably github) and documentation at SEO optimized host.


- Test on other climate model sources. 
- Develop tools to parse fortran model better, asts and ASR.

`,Me='# CLAUDE.md\n\nThis file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.\n\n## Project Overview\n\nA Slidev presentation titled "AI-Enabled Pathways for Rapid Climate Model Development" by Suvarchal K. Cheedela (AWI), using the `slidev-theme-scholarly` theme.\n\n## Commands\n\n- `npm run dev` — Start dev server (live preview at localhost:3030)\n- `npm run build` — Build static SPA to `dist/` (for GitHub Pages deployment)\n- `npm run export` — Export slides to PDF\n\n## Architecture\n\n- **`slides.md`** — Master document. Contains the title/cover slide frontmatter (theme, authors, themeConfig) and `src:` references to section markdown files. All theme-level config lives here.\n- **`01introduction/`, `02...`, etc.** — Numbered directories, each containing a `slides.md` with that section\'s slides. Images for a section live directly in its directory alongside the markdown (no nested `images/` subfolder).\n- Sections are included in the master via `src: ./01introduction/slides.md` directives.\n\n## Theme: slidev-theme-scholarly\n\nDocs: https://scholarly-docs.jxpeng.dev/en/ | Demo: https://scholarly.jxpeng.dev/\n\n### Key Layouts\n\n- `cover` — Title slide (uses `authors` from global frontmatter)\n- `section` — Chapter dividers (props: `sectionMode: \'dark\'|\'light\'`)\n- `default` — Standard slide (props: `title`, `subtitle`, `density`)\n- `figure` — Image with caption (props: `src`, `caption`, `label`, `height`, `fit`)\n- `two-cols` — Two columns with `::left::`/`::right::` slots (props: `ratio`, `gap`)\n- `image-left`/`image-right` — Image + text (props: `image`, `ratio`, `fit`)\n- `quote`, `fact`, `focus`, `statement` — Emphasis layouts\n- `references` — Bibliography slide (use `[[bibliography]]` marker)\n- `end` — Closing slide (props: `email`, `website`, `qrcode`)\n\n### Components\n\n- `<Cite author="Smith" year="2024">` — Inline citation\n- `<Block type="info" title="Note">` — Beamer-style colored box\n- `<Theorem type="theorem" title="...">` — Math theorem/lemma blocks\n- `:::block{type="info"}` / `:::theorem{}` — Markdown directive syntax alternatives\n\n### Citations\n\nUse `@citekey` in markdown text for inline citations. Place a `references.bib` file at project root. Use `layout: references` with `[[bibliography]]` for the bibliography slide.\n\n### Color Themes\n\nSet via `themeConfig.colorTheme`: `classic-blue` (default), `oxford-burgundy`, `cambridge-green`, `princeton-orange`, `yale-blue`, `monochrome`, `warm-sepia`, `nordic-blue`, `high-contrast`.\n\n## Image Handling\n\nImages for each section are stored directly in that section\'s directory (e.g., `01introduction/figure.png`). For Slidev to serve them, either:\n- Place copies/symlinks in `public/` and reference as `/filename.png`\n- Or use Vite-resolvable relative imports in custom components\n\n## Deployment\n\nThe `dist/` output from `npm run build` is intended for GitHub Pages hosting.\n\n\n## other instructions \nwhen git commiting please don\'t include co authorship.\n',Oe=`---
theme: scholarly
title: "AI-Enabled Pathways for Rapid Climate Model Development"
authors:
  - name: Suvarchal K. Cheedela
    institution: Alfred Wegener Institute
    email: suvarchal.cheedela@awi.de
footerMiddle: AWI  24-02-2026
themeConfig:
  colorTheme: classic-blue
---

<!-- Title alternatives:
1. AI-Augmented Climate Model Development: Future Perspectives with FESOM
2. Future Perspectives on AI-Augmented Climate Model Development and FESOM
3. Accelerating Climate Model Development with AI: Future Perspectives for FESOM
4. AI-Augmented Climate Model Development — Future Perspectives from FESOM
-->

# AI-Enabled Pathways for Rapid Climate Model Development

---
src: ./01introduction/slides.md
---

---
src: ./02demonstrator/slides.md
---
---
src: ./03guide/slides.md
---
`;function U(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var C=U();function le(r){C=r}var _={exec:()=>null};function p(r,e=""){let n=typeof r=="string"?r:r.source,s={replace:(t,i)=>{let a=typeof i=="string"?i:i.source;return a=a.replace(k.caret,"$1"),n=n.replace(t,a),s},getRegex:()=>new RegExp(n,e)};return s}var $e=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),k={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:r=>new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:r=>new RegExp(`^ {0,${Math.min(3,r-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:r=>new RegExp(`^ {0,${Math.min(3,r-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:r=>new RegExp(`^ {0,${Math.min(3,r-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:r=>new RegExp(`^ {0,${Math.min(3,r-1)}}#`),htmlBeginRegex:r=>new RegExp(`^ {0,${Math.min(3,r-1)}}<(?:[a-z].*>|!--)`,"i"),blockquoteBeginRegex:r=>new RegExp(`^ {0,${Math.min(3,r-1)}}>`)},Be=/^(?:[ \t]*(?:\n|$))+/,Ue=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Ke=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,A=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Qe=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,K=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,ce=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,ue=p(ce).replace(/bull/g,K).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),qe=p(ce).replace(/bull/g,K).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Q=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Ze=/^[^\n]+/,q=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,He=p(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",q).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Ve=p(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,K).getRegex(),z="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Z=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Ge=p("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Z).replace("tag",z).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),pe=p(Q).replace("hr",A).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",z).getRegex(),je=p(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",pe).getRegex(),H={blockquote:je,code:Ue,def:He,fences:Ke,heading:Qe,hr:A,html:Ge,lheading:ue,list:Ve,newline:Be,paragraph:pe,table:_,text:Ze},ee=p("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",A).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",z).getRegex(),We={...H,lheading:qe,table:ee,paragraph:p(Q).replace("hr",A).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",ee).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",z).getRegex()},Ye={...H,html:p(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Z).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:_,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:p(Q).replace("hr",A).replace("heading",` *#{1,6} *[^
]`).replace("lheading",ue).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Je=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Xe=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,he=/^( {2,}|\\)\n(?!\s*$)/,et=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,N=/[\p{P}\p{S}]/u,V=/[\s\p{P}\p{S}]/u,de=/[^\s\p{P}\p{S}]/u,tt=p(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,V).getRegex(),ge=/(?!~)[\p{P}\p{S}]/u,nt=/(?!~)[\s\p{P}\p{S}]/u,rt=/(?:[^\s\p{P}\p{S}]|~)/u,me=/(?![*_])[\p{P}\p{S}]/u,st=/(?![*_])[\s\p{P}\p{S}]/u,at=/(?:[^\s\p{P}\p{S}]|[*_])/u,it=p(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",$e?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),fe=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,ot=p(fe,"u").replace(/punct/g,N).getRegex(),lt=p(fe,"u").replace(/punct/g,ge).getRegex(),ke="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",ct=p(ke,"gu").replace(/notPunctSpace/g,de).replace(/punctSpace/g,V).replace(/punct/g,N).getRegex(),ut=p(ke,"gu").replace(/notPunctSpace/g,rt).replace(/punctSpace/g,nt).replace(/punct/g,ge).getRegex(),pt=p("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,de).replace(/punctSpace/g,V).replace(/punct/g,N).getRegex(),ht=p(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,me).getRegex(),dt="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",gt=p(dt,"gu").replace(/notPunctSpace/g,at).replace(/punctSpace/g,st).replace(/punct/g,me).getRegex(),mt=p(/\\(punct)/,"gu").replace(/punct/g,N).getRegex(),ft=p(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),kt=p(Z).replace("(?:-->|$)","-->").getRegex(),bt=p("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",kt).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),F=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,wt=p(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",F).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),be=p(/^!?\[(label)\]\[(ref)\]/).replace("label",F).replace("ref",q).getRegex(),we=p(/^!?\[(ref)\](?:\[\])?/).replace("ref",q).getRegex(),yt=p("reflink|nolink(?!\\()","g").replace("reflink",be).replace("nolink",we).getRegex(),te=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,G={_backpedal:_,anyPunctuation:mt,autolink:ft,blockSkip:it,br:he,code:Xe,del:_,delLDelim:_,delRDelim:_,emStrongLDelim:ot,emStrongRDelimAst:ct,emStrongRDelimUnd:pt,escape:Je,link:wt,nolink:we,punctuation:tt,reflink:be,reflinkSearch:yt,tag:bt,text:et,url:_},xt={...G,link:p(/^!?\[(label)\]\((.*?)\)/).replace("label",F).getRegex(),reflink:p(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",F).getRegex()},O={...G,emStrongRDelimAst:ut,emStrongLDelim:lt,delLDelim:ht,delRDelim:gt,url:p(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",te).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:p(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",te).getRegex()},_t={...O,br:p(he).replace("{2,}","*").getRegex(),text:p(O.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},I={normal:H,gfm:We,pedantic:Ye},L={normal:G,gfm:O,breaks:_t,pedantic:xt},vt={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ne=r=>vt[r];function y(r,e){if(e){if(k.escapeTest.test(r))return r.replace(k.escapeReplace,ne)}else if(k.escapeTestNoEncode.test(r))return r.replace(k.escapeReplaceNoEncode,ne);return r}function re(r){try{r=encodeURI(r).replace(k.percentDecode,"%")}catch{return null}return r}function se(r,e){let n=r.replace(k.findPipe,(i,a,l)=>{let o=!1,u=a;for(;--u>=0&&l[u]==="\\";)o=!o;return o?"|":" |"}),s=n.split(k.splitPipe),t=0;if(s[0].trim()||s.shift(),s.length>0&&!s.at(-1)?.trim()&&s.pop(),e)if(s.length>e)s.splice(e);else for(;s.length<e;)s.push("");for(;t<s.length;t++)s[t]=s[t].trim().replace(k.slashPipe,"|");return s}function P(r,e,n){let s=r.length;if(s===0)return"";let t=0;for(;t<s&&r.charAt(s-t-1)===e;)t++;return r.slice(0,s-t)}function Ct(r,e){if(r.indexOf(e[1])===-1)return-1;let n=0;for(let s=0;s<r.length;s++)if(r[s]==="\\")s++;else if(r[s]===e[0])n++;else if(r[s]===e[1]&&(n--,n<0))return s;return n>0?-2:-1}function St(r,e=0){let n=e,s="";for(let t of r)if(t==="	"){let i=4-n%4;s+=" ".repeat(i),n+=i}else s+=t,n++;return s}function ae(r,e,n,s,t){let i=e.href,a=e.title||null,l=r[1].replace(t.other.outputLinkReplace,"$1");s.state.inLink=!0;let o={type:r[0].charAt(0)==="!"?"image":"link",raw:n,href:i,title:a,text:l,tokens:s.inlineTokens(l)};return s.state.inLink=!1,o}function Lt(r,e,n){let s=r.match(n.other.indentCodeCompensation);if(s===null)return e;let t=s[1];return e.split(`
`).map(i=>{let a=i.match(n.other.beginningSpace);if(a===null)return i;let[l]=a;return l.length>=t.length?i.slice(t.length):i}).join(`
`)}var D=class{options;rules;lexer;constructor(r){this.options=r||C}space(r){let e=this.rules.block.newline.exec(r);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(r){let e=this.rules.block.code.exec(r);if(e){let n=e[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?n:P(n,`
`)}}}fences(r){let e=this.rules.block.fences.exec(r);if(e){let n=e[0],s=Lt(n,e[3]||"",this.rules);return{type:"code",raw:n,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:s}}}heading(r){let e=this.rules.block.heading.exec(r);if(e){let n=e[2].trim();if(this.rules.other.endingHash.test(n)){let s=P(n,"#");(this.options.pedantic||!s||this.rules.other.endingSpaceChar.test(s))&&(n=s.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(r){let e=this.rules.block.hr.exec(r);if(e)return{type:"hr",raw:P(e[0],`
`)}}blockquote(r){let e=this.rules.block.blockquote.exec(r);if(e){let n=P(e[0],`
`).split(`
`),s="",t="",i=[];for(;n.length>0;){let a=!1,l=[],o;for(o=0;o<n.length;o++)if(this.rules.other.blockquoteStart.test(n[o]))l.push(n[o]),a=!0;else if(!a)l.push(n[o]);else break;n=n.slice(o);let u=l.join(`
`),c=u.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");s=s?`${s}
${u}`:u,t=t?`${t}
${c}`:c;let d=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(c,i,!0),this.lexer.state.top=d,n.length===0)break;let h=i.at(-1);if(h?.type==="code")break;if(h?.type==="blockquote"){let f=h,m=f.raw+`
`+n.join(`
`),x=this.blockquote(m);i[i.length-1]=x,s=s.substring(0,s.length-f.raw.length)+x.raw,t=t.substring(0,t.length-f.text.length)+x.text;break}else if(h?.type==="list"){let f=h,m=f.raw+`
`+n.join(`
`),x=this.list(m);i[i.length-1]=x,s=s.substring(0,s.length-h.raw.length)+x.raw,t=t.substring(0,t.length-f.raw.length)+x.raw,n=m.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:s,tokens:i,text:t}}}list(r){let e=this.rules.block.list.exec(r);if(e){let n=e[1].trim(),s=n.length>1,t={type:"list",raw:"",ordered:s,start:s?+n.slice(0,-1):"",loose:!1,items:[]};n=s?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=s?n:"[*+-]");let i=this.rules.other.listItemRegex(n),a=!1;for(;r;){let o=!1,u="",c="";if(!(e=i.exec(r))||this.rules.block.hr.test(r))break;u=e[0],r=r.substring(u.length);let d=St(e[2].split(`
`,1)[0],e[1].length),h=r.split(`
`,1)[0],f=!d.trim(),m=0;if(this.options.pedantic?(m=2,c=d.trimStart()):f?m=e[1].length+1:(m=d.search(this.rules.other.nonSpaceChar),m=m>4?1:m,c=d.slice(m),m+=e[1].length),f&&this.rules.other.blankLine.test(h)&&(u+=h+`
`,r=r.substring(h.length+1),o=!0),!o){let x=this.rules.other.nextBulletRegex(m),W=this.rules.other.hrRegex(m),Y=this.rules.other.fencesBeginRegex(m),J=this.rules.other.headingBeginRegex(m),ye=this.rules.other.htmlBeginRegex(m),xe=this.rules.other.blockquoteBeginRegex(m);for(;r;){let M=r.split(`
`,1)[0],S;if(h=M,this.options.pedantic?(h=h.replace(this.rules.other.listReplaceNesting,"  "),S=h):S=h.replace(this.rules.other.tabCharGlobal,"    "),Y.test(h)||J.test(h)||ye.test(h)||xe.test(h)||x.test(h)||W.test(h))break;if(S.search(this.rules.other.nonSpaceChar)>=m||!h.trim())c+=`
`+S.slice(m);else{if(f||d.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||Y.test(d)||J.test(d)||W.test(d))break;c+=`
`+h}f=!h.trim(),u+=M+`
`,r=r.substring(M.length+1),d=S.slice(m)}}t.loose||(a?t.loose=!0:this.rules.other.doubleBlankLine.test(u)&&(a=!0)),t.items.push({type:"list_item",raw:u,task:!!this.options.gfm&&this.rules.other.listIsTask.test(c),loose:!1,text:c,tokens:[]}),t.raw+=u}let l=t.items.at(-1);if(l)l.raw=l.raw.trimEnd(),l.text=l.text.trimEnd();else return;t.raw=t.raw.trimEnd();for(let o of t.items){if(this.lexer.state.top=!1,o.tokens=this.lexer.blockTokens(o.text,[]),o.task){if(o.text=o.text.replace(this.rules.other.listReplaceTask,""),o.tokens[0]?.type==="text"||o.tokens[0]?.type==="paragraph"){o.tokens[0].raw=o.tokens[0].raw.replace(this.rules.other.listReplaceTask,""),o.tokens[0].text=o.tokens[0].text.replace(this.rules.other.listReplaceTask,"");for(let c=this.lexer.inlineQueue.length-1;c>=0;c--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[c].src)){this.lexer.inlineQueue[c].src=this.lexer.inlineQueue[c].src.replace(this.rules.other.listReplaceTask,"");break}}let u=this.rules.other.listTaskCheckbox.exec(o.raw);if(u){let c={type:"checkbox",raw:u[0]+" ",checked:u[0]!=="[ ]"};o.checked=c.checked,t.loose?o.tokens[0]&&["paragraph","text"].includes(o.tokens[0].type)&&"tokens"in o.tokens[0]&&o.tokens[0].tokens?(o.tokens[0].raw=c.raw+o.tokens[0].raw,o.tokens[0].text=c.raw+o.tokens[0].text,o.tokens[0].tokens.unshift(c)):o.tokens.unshift({type:"paragraph",raw:c.raw,text:c.raw,tokens:[c]}):o.tokens.unshift(c)}}if(!t.loose){let u=o.tokens.filter(d=>d.type==="space"),c=u.length>0&&u.some(d=>this.rules.other.anyLine.test(d.raw));t.loose=c}}if(t.loose)for(let o of t.items){o.loose=!0;for(let u of o.tokens)u.type==="text"&&(u.type="paragraph")}return t}}html(r){let e=this.rules.block.html.exec(r);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(r){let e=this.rules.block.def.exec(r);if(e){let n=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),s=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",t=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:n,raw:e[0],href:s,title:t}}}table(r){let e=this.rules.block.table.exec(r);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let n=se(e[1]),s=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),t=e[3]?.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],i={type:"table",raw:e[0],header:[],align:[],rows:[]};if(n.length===s.length){for(let a of s)this.rules.other.tableAlignRight.test(a)?i.align.push("right"):this.rules.other.tableAlignCenter.test(a)?i.align.push("center"):this.rules.other.tableAlignLeft.test(a)?i.align.push("left"):i.align.push(null);for(let a=0;a<n.length;a++)i.header.push({text:n[a],tokens:this.lexer.inline(n[a]),header:!0,align:i.align[a]});for(let a of t)i.rows.push(se(a,i.header.length).map((l,o)=>({text:l,tokens:this.lexer.inline(l),header:!1,align:i.align[o]})));return i}}lheading(r){let e=this.rules.block.lheading.exec(r);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(r){let e=this.rules.block.paragraph.exec(r);if(e){let n=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:n,tokens:this.lexer.inline(n)}}}text(r){let e=this.rules.block.text.exec(r);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(r){let e=this.rules.inline.escape.exec(r);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(r){let e=this.rules.inline.tag.exec(r);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(r){let e=this.rules.inline.link.exec(r);if(e){let n=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(n)){if(!this.rules.other.endAngleBracket.test(n))return;let i=P(n.slice(0,-1),"\\");if((n.length-i.length)%2===0)return}else{let i=Ct(e[2],"()");if(i===-2)return;if(i>-1){let a=(e[0].indexOf("!")===0?5:4)+e[1].length+i;e[2]=e[2].substring(0,i),e[0]=e[0].substring(0,a).trim(),e[3]=""}}let s=e[2],t="";if(this.options.pedantic){let i=this.rules.other.pedanticHrefTitle.exec(s);i&&(s=i[1],t=i[3])}else t=e[3]?e[3].slice(1,-1):"";return s=s.trim(),this.rules.other.startAngleBracket.test(s)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(n)?s=s.slice(1):s=s.slice(1,-1)),ae(e,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:t&&t.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(r,e){let n;if((n=this.rules.inline.reflink.exec(r))||(n=this.rules.inline.nolink.exec(r))){let s=(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," "),t=e[s.toLowerCase()];if(!t){let i=n[0].charAt(0);return{type:"text",raw:i,text:i}}return ae(n,t,n[0],this.lexer,this.rules)}}emStrong(r,e,n=""){let s=this.rules.inline.emStrongLDelim.exec(r);if(!(!s||s[3]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(s[1]||s[2])||!n||this.rules.inline.punctuation.exec(n))){let t=[...s[0]].length-1,i,a,l=t,o=0,u=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(u.lastIndex=0,e=e.slice(-1*r.length+t);(s=u.exec(e))!=null;){if(i=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!i)continue;if(a=[...i].length,s[3]||s[4]){l+=a;continue}else if((s[5]||s[6])&&t%3&&!((t+a)%3)){o+=a;continue}if(l-=a,l>0)continue;a=Math.min(a,a+l+o);let c=[...s[0]][0].length,d=r.slice(0,t+s.index+c+a);if(Math.min(t,a)%2){let f=d.slice(1,-1);return{type:"em",raw:d,text:f,tokens:this.lexer.inlineTokens(f)}}let h=d.slice(2,-2);return{type:"strong",raw:d,text:h,tokens:this.lexer.inlineTokens(h)}}}}codespan(r){let e=this.rules.inline.code.exec(r);if(e){let n=e[2].replace(this.rules.other.newLineCharGlobal," "),s=this.rules.other.nonSpaceChar.test(n),t=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return s&&t&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:e[0],text:n}}}br(r){let e=this.rules.inline.br.exec(r);if(e)return{type:"br",raw:e[0]}}del(r,e,n=""){let s=this.rules.inline.delLDelim.exec(r);if(s&&(!s[1]||!n||this.rules.inline.punctuation.exec(n))){let t=[...s[0]].length-1,i,a,l=t,o=this.rules.inline.delRDelim;for(o.lastIndex=0,e=e.slice(-1*r.length+t);(s=o.exec(e))!=null;){if(i=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!i||(a=[...i].length,a!==t))continue;if(s[3]||s[4]){l+=a;continue}if(l-=a,l>0)continue;a=Math.min(a,a+l);let u=[...s[0]][0].length,c=r.slice(0,t+s.index+u+a),d=c.slice(t,-t);return{type:"del",raw:c,text:d,tokens:this.lexer.inlineTokens(d)}}}}autolink(r){let e=this.rules.inline.autolink.exec(r);if(e){let n,s;return e[2]==="@"?(n=e[1],s="mailto:"+n):(n=e[1],s=n),{type:"link",raw:e[0],text:n,href:s,tokens:[{type:"text",raw:n,text:n}]}}}url(r){let e;if(e=this.rules.inline.url.exec(r)){let n,s;if(e[2]==="@")n=e[0],s="mailto:"+n;else{let t;do t=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])?.[0]??"";while(t!==e[0]);n=e[0],e[1]==="www."?s="http://"+e[0]:s=e[0]}return{type:"link",raw:e[0],text:n,href:s,tokens:[{type:"text",raw:n,text:n}]}}}inlineText(r){let e=this.rules.inline.text.exec(r);if(e){let n=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:n}}}},b=class ${tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||C,this.options.tokenizer=this.options.tokenizer||new D,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let n={other:k,block:I.normal,inline:L.normal};this.options.pedantic?(n.block=I.pedantic,n.inline=L.pedantic):this.options.gfm&&(n.block=I.gfm,this.options.breaks?n.inline=L.breaks:n.inline=L.gfm),this.tokenizer.rules=n}static get rules(){return{block:I,inline:L}}static lex(e,n){return new $(n).lex(e)}static lexInline(e,n){return new $(n).inlineTokens(e)}lex(e){e=e.replace(k.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){let s=this.inlineQueue[n];this.inlineTokens(s.src,s.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,n=[],s=!1){for(this.options.pedantic&&(e=e.replace(k.tabCharGlobal,"    ").replace(k.spaceLine,""));e;){let t;if(this.options.extensions?.block?.some(a=>(t=a.call({lexer:this},e,n))?(e=e.substring(t.raw.length),n.push(t),!0):!1))continue;if(t=this.tokenizer.space(e)){e=e.substring(t.raw.length);let a=n.at(-1);t.raw.length===1&&a!==void 0?a.raw+=`
`:n.push(t);continue}if(t=this.tokenizer.code(e)){e=e.substring(t.raw.length);let a=n.at(-1);a?.type==="paragraph"||a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+t.raw,a.text+=`
`+t.text,this.inlineQueue.at(-1).src=a.text):n.push(t);continue}if(t=this.tokenizer.fences(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.heading(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.hr(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.blockquote(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.list(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.html(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.def(e)){e=e.substring(t.raw.length);let a=n.at(-1);a?.type==="paragraph"||a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+t.raw,a.text+=`
`+t.raw,this.inlineQueue.at(-1).src=a.text):this.tokens.links[t.tag]||(this.tokens.links[t.tag]={href:t.href,title:t.title},n.push(t));continue}if(t=this.tokenizer.table(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.lheading(e)){e=e.substring(t.raw.length),n.push(t);continue}let i=e;if(this.options.extensions?.startBlock){let a=1/0,l=e.slice(1),o;this.options.extensions.startBlock.forEach(u=>{o=u.call({lexer:this},l),typeof o=="number"&&o>=0&&(a=Math.min(a,o))}),a<1/0&&a>=0&&(i=e.substring(0,a+1))}if(this.state.top&&(t=this.tokenizer.paragraph(i))){let a=n.at(-1);s&&a?.type==="paragraph"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+t.raw,a.text+=`
`+t.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):n.push(t),s=i.length!==e.length,e=e.substring(t.raw.length);continue}if(t=this.tokenizer.text(e)){e=e.substring(t.raw.length);let a=n.at(-1);a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+t.raw,a.text+=`
`+t.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):n.push(t);continue}if(e){let a="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(a);break}else throw new Error(a)}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){let s=e,t=null;if(this.tokens.links){let o=Object.keys(this.tokens.links);if(o.length>0)for(;(t=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null;)o.includes(t[0].slice(t[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,t.index)+"["+"a".repeat(t[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(t=this.tokenizer.rules.inline.anyPunctuation.exec(s))!=null;)s=s.slice(0,t.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let i;for(;(t=this.tokenizer.rules.inline.blockSkip.exec(s))!=null;)i=t[2]?t[2].length:0,s=s.slice(0,t.index+i)+"["+"a".repeat(t[0].length-i-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);s=this.options.hooks?.emStrongMask?.call({lexer:this},s)??s;let a=!1,l="";for(;e;){a||(l=""),a=!1;let o;if(this.options.extensions?.inline?.some(c=>(o=c.call({lexer:this},e,n))?(e=e.substring(o.raw.length),n.push(o),!0):!1))continue;if(o=this.tokenizer.escape(e)){e=e.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.tag(e)){e=e.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.link(e)){e=e.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(o.raw.length);let c=n.at(-1);o.type==="text"&&c?.type==="text"?(c.raw+=o.raw,c.text+=o.text):n.push(o);continue}if(o=this.tokenizer.emStrong(e,s,l)){e=e.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.codespan(e)){e=e.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.br(e)){e=e.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.del(e,s,l)){e=e.substring(o.raw.length),n.push(o);continue}if(o=this.tokenizer.autolink(e)){e=e.substring(o.raw.length),n.push(o);continue}if(!this.state.inLink&&(o=this.tokenizer.url(e))){e=e.substring(o.raw.length),n.push(o);continue}let u=e;if(this.options.extensions?.startInline){let c=1/0,d=e.slice(1),h;this.options.extensions.startInline.forEach(f=>{h=f.call({lexer:this},d),typeof h=="number"&&h>=0&&(c=Math.min(c,h))}),c<1/0&&c>=0&&(u=e.substring(0,c+1))}if(o=this.tokenizer.inlineText(u)){e=e.substring(o.raw.length),o.raw.slice(-1)!=="_"&&(l=o.raw.slice(-1)),a=!0;let c=n.at(-1);c?.type==="text"?(c.raw+=o.raw,c.text+=o.text):n.push(o);continue}if(e){let c="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return n}},E=class{options;parser;constructor(r){this.options=r||C}space(r){return""}code({text:r,lang:e,escaped:n}){let s=(e||"").match(k.notSpaceStart)?.[0],t=r.replace(k.endingNewline,"")+`
`;return s?'<pre><code class="language-'+y(s)+'">'+(n?t:y(t,!0))+`</code></pre>
`:"<pre><code>"+(n?t:y(t,!0))+`</code></pre>
`}blockquote({tokens:r}){return`<blockquote>
${this.parser.parse(r)}</blockquote>
`}html({text:r}){return r}def(r){return""}heading({tokens:r,depth:e}){return`<h${e}>${this.parser.parseInline(r)}</h${e}>
`}hr(r){return`<hr>
`}list(r){let e=r.ordered,n=r.start,s="";for(let a=0;a<r.items.length;a++){let l=r.items[a];s+=this.listitem(l)}let t=e?"ol":"ul",i=e&&n!==1?' start="'+n+'"':"";return"<"+t+i+`>
`+s+"</"+t+`>
`}listitem(r){return`<li>${this.parser.parse(r.tokens)}</li>
`}checkbox({checked:r}){return"<input "+(r?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:r}){return`<p>${this.parser.parseInline(r)}</p>
`}table(r){let e="",n="";for(let t=0;t<r.header.length;t++)n+=this.tablecell(r.header[t]);e+=this.tablerow({text:n});let s="";for(let t=0;t<r.rows.length;t++){let i=r.rows[t];n="";for(let a=0;a<i.length;a++)n+=this.tablecell(i[a]);s+=this.tablerow({text:n})}return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+s+`</table>
`}tablerow({text:r}){return`<tr>
${r}</tr>
`}tablecell(r){let e=this.parser.parseInline(r.tokens),n=r.header?"th":"td";return(r.align?`<${n} align="${r.align}">`:`<${n}>`)+e+`</${n}>
`}strong({tokens:r}){return`<strong>${this.parser.parseInline(r)}</strong>`}em({tokens:r}){return`<em>${this.parser.parseInline(r)}</em>`}codespan({text:r}){return`<code>${y(r,!0)}</code>`}br(r){return"<br>"}del({tokens:r}){return`<del>${this.parser.parseInline(r)}</del>`}link({href:r,title:e,tokens:n}){let s=this.parser.parseInline(n),t=re(r);if(t===null)return s;r=t;let i='<a href="'+r+'"';return e&&(i+=' title="'+y(e)+'"'),i+=">"+s+"</a>",i}image({href:r,title:e,text:n,tokens:s}){s&&(n=this.parser.parseInline(s,this.parser.textRenderer));let t=re(r);if(t===null)return y(n);r=t;let i=`<img src="${r}" alt="${y(n)}"`;return e&&(i+=` title="${y(e)}"`),i+=">",i}text(r){return"tokens"in r&&r.tokens?this.parser.parseInline(r.tokens):"escaped"in r&&r.escaped?r.text:y(r.text)}},j=class{strong({text:r}){return r}em({text:r}){return r}codespan({text:r}){return r}del({text:r}){return r}html({text:r}){return r}text({text:r}){return r}link({text:r}){return""+r}image({text:r}){return""+r}br(){return""}checkbox({raw:r}){return r}},w=class B{options;renderer;textRenderer;constructor(e){this.options=e||C,this.options.renderer=this.options.renderer||new E,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new j}static parse(e,n){return new B(n).parse(e)}static parseInline(e,n){return new B(n).parseInline(e)}parse(e){let n="";for(let s=0;s<e.length;s++){let t=e[s];if(this.options.extensions?.renderers?.[t.type]){let a=t,l=this.options.extensions.renderers[a.type].call({parser:this},a);if(l!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(a.type)){n+=l||"";continue}}let i=t;switch(i.type){case"space":{n+=this.renderer.space(i);break}case"hr":{n+=this.renderer.hr(i);break}case"heading":{n+=this.renderer.heading(i);break}case"code":{n+=this.renderer.code(i);break}case"table":{n+=this.renderer.table(i);break}case"blockquote":{n+=this.renderer.blockquote(i);break}case"list":{n+=this.renderer.list(i);break}case"checkbox":{n+=this.renderer.checkbox(i);break}case"html":{n+=this.renderer.html(i);break}case"def":{n+=this.renderer.def(i);break}case"paragraph":{n+=this.renderer.paragraph(i);break}case"text":{n+=this.renderer.text(i);break}default:{let a='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw new Error(a)}}}return n}parseInline(e,n=this.renderer){let s="";for(let t=0;t<e.length;t++){let i=e[t];if(this.options.extensions?.renderers?.[i.type]){let l=this.options.extensions.renderers[i.type].call({parser:this},i);if(l!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(i.type)){s+=l||"";continue}}let a=i;switch(a.type){case"escape":{s+=n.text(a);break}case"html":{s+=n.html(a);break}case"link":{s+=n.link(a);break}case"image":{s+=n.image(a);break}case"checkbox":{s+=n.checkbox(a);break}case"strong":{s+=n.strong(a);break}case"em":{s+=n.em(a);break}case"codespan":{s+=n.codespan(a);break}case"br":{s+=n.br(a);break}case"del":{s+=n.del(a);break}case"text":{s+=n.text(a);break}default:{let l='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return s}},R=class{options;block;constructor(r){this.options=r||C}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(r){return r}postprocess(r){return r}processAllTokens(r){return r}emStrongMask(r){return r}provideLexer(){return this.block?b.lex:b.lexInline}provideParser(){return this.block?w.parse:w.parseInline}},Pt=class{defaults=U();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=w;Renderer=E;TextRenderer=j;Lexer=b;Tokenizer=D;Hooks=R;constructor(...r){this.use(...r)}walkTokens(r,e){let n=[];for(let s of r)switch(n=n.concat(e.call(this,s)),s.type){case"table":{let t=s;for(let i of t.header)n=n.concat(this.walkTokens(i.tokens,e));for(let i of t.rows)for(let a of i)n=n.concat(this.walkTokens(a.tokens,e));break}case"list":{let t=s;n=n.concat(this.walkTokens(t.items,e));break}default:{let t=s;this.defaults.extensions?.childTokens?.[t.type]?this.defaults.extensions.childTokens[t.type].forEach(i=>{let a=t[i].flat(1/0);n=n.concat(this.walkTokens(a,e))}):t.tokens&&(n=n.concat(this.walkTokens(t.tokens,e)))}}return n}use(...r){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return r.forEach(n=>{let s={...n};if(s.async=this.defaults.async||s.async||!1,n.extensions&&(n.extensions.forEach(t=>{if(!t.name)throw new Error("extension name required");if("renderer"in t){let i=e.renderers[t.name];i?e.renderers[t.name]=function(...a){let l=t.renderer.apply(this,a);return l===!1&&(l=i.apply(this,a)),l}:e.renderers[t.name]=t.renderer}if("tokenizer"in t){if(!t.level||t.level!=="block"&&t.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let i=e[t.level];i?i.unshift(t.tokenizer):e[t.level]=[t.tokenizer],t.start&&(t.level==="block"?e.startBlock?e.startBlock.push(t.start):e.startBlock=[t.start]:t.level==="inline"&&(e.startInline?e.startInline.push(t.start):e.startInline=[t.start]))}"childTokens"in t&&t.childTokens&&(e.childTokens[t.name]=t.childTokens)}),s.extensions=e),n.renderer){let t=this.defaults.renderer||new E(this.defaults);for(let i in n.renderer){if(!(i in t))throw new Error(`renderer '${i}' does not exist`);if(["options","parser"].includes(i))continue;let a=i,l=n.renderer[a],o=t[a];t[a]=(...u)=>{let c=l.apply(t,u);return c===!1&&(c=o.apply(t,u)),c||""}}s.renderer=t}if(n.tokenizer){let t=this.defaults.tokenizer||new D(this.defaults);for(let i in n.tokenizer){if(!(i in t))throw new Error(`tokenizer '${i}' does not exist`);if(["options","rules","lexer"].includes(i))continue;let a=i,l=n.tokenizer[a],o=t[a];t[a]=(...u)=>{let c=l.apply(t,u);return c===!1&&(c=o.apply(t,u)),c}}s.tokenizer=t}if(n.hooks){let t=this.defaults.hooks||new R;for(let i in n.hooks){if(!(i in t))throw new Error(`hook '${i}' does not exist`);if(["options","block"].includes(i))continue;let a=i,l=n.hooks[a],o=t[a];R.passThroughHooks.has(i)?t[a]=u=>{if(this.defaults.async&&R.passThroughHooksRespectAsync.has(i))return(async()=>{let d=await l.call(t,u);return o.call(t,d)})();let c=l.call(t,u);return o.call(t,c)}:t[a]=(...u)=>{if(this.defaults.async)return(async()=>{let d=await l.apply(t,u);return d===!1&&(d=await o.apply(t,u)),d})();let c=l.apply(t,u);return c===!1&&(c=o.apply(t,u)),c}}s.hooks=t}if(n.walkTokens){let t=this.defaults.walkTokens,i=n.walkTokens;s.walkTokens=function(a){let l=[];return l.push(i.call(this,a)),t&&(l=l.concat(t.call(this,a))),l}}this.defaults={...this.defaults,...s}}),this}setOptions(r){return this.defaults={...this.defaults,...r},this}lexer(r,e){return b.lex(r,e??this.defaults)}parser(r,e){return w.parse(r,e??this.defaults)}parseMarkdown(r){return(e,n)=>{let s={...n},t={...this.defaults,...s},i=this.onError(!!t.silent,!!t.async);if(this.defaults.async===!0&&s.async===!1)return i(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return i(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return i(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(t.hooks&&(t.hooks.options=t,t.hooks.block=r),t.async)return(async()=>{let a=t.hooks?await t.hooks.preprocess(e):e,l=await(t.hooks?await t.hooks.provideLexer():r?b.lex:b.lexInline)(a,t),o=t.hooks?await t.hooks.processAllTokens(l):l;t.walkTokens&&await Promise.all(this.walkTokens(o,t.walkTokens));let u=await(t.hooks?await t.hooks.provideParser():r?w.parse:w.parseInline)(o,t);return t.hooks?await t.hooks.postprocess(u):u})().catch(i);try{t.hooks&&(e=t.hooks.preprocess(e));let a=(t.hooks?t.hooks.provideLexer():r?b.lex:b.lexInline)(e,t);t.hooks&&(a=t.hooks.processAllTokens(a)),t.walkTokens&&this.walkTokens(a,t.walkTokens);let l=(t.hooks?t.hooks.provideParser():r?w.parse:w.parseInline)(a,t);return t.hooks&&(l=t.hooks.postprocess(l)),l}catch(a){return i(a)}}}onError(r,e){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,r){let s="<p>An error occurred:</p><pre>"+y(n.message+"",!0)+"</pre>";return e?Promise.resolve(s):s}if(e)return Promise.reject(n);throw n}}},v=new Pt;function g(r,e){return v.parse(r,e)}g.options=g.setOptions=function(r){return v.setOptions(r),g.defaults=v.defaults,le(g.defaults),g};g.getDefaults=U;g.defaults=C;g.use=function(...r){return v.use(...r),g.defaults=v.defaults,le(g.defaults),g};g.walkTokens=function(r,e){return v.walkTokens(r,e)};g.parseInline=v.parseInline;g.Parser=w;g.parser=w.parse;g.Renderer=E;g.TextRenderer=j;g.Lexer=b;g.lexer=b.lex;g.Tokenizer=D;g.Hooks=R;g.parse=g;g.options;g.setOptions;g.use;g.walkTokens;g.parseInline;var Rt=g;w.parse;b.lex;const At=["innerHTML"],Tt={__name:"ScrollableMarkdown",props:{src:{type:String,required:!0},maxHeight:{type:String,default:"420px"},fontSize:{type:String,default:"0.5em"}},setup(r){oe();const e=Object.assign({"../01introduction/slides.md":De,"../02demonstrator/cloudsc-fortran-translation-template.md":Ee,"../02demonstrator/slides.md":ze,"../03guide/slides.md":Ne,"../CLAUDE.md":Me,"../slides.md":Oe}),n=r,s=Ce(()=>{const t=n.src.startsWith("../")?n.src:`../${n.src}`,i=e[t];return i?Rt(i):`<p style="color:red">File not found: ${n.src}</p>`});return(t,i)=>(ie(),_e("div",{class:"scrollable-md",style:ve({maxHeight:n.maxHeight,fontSize:n.fontSize}),innerHTML:s.value},null,12,At))}},It=Te(Tt,[["__scopeId","data-v-383a4a61"]]),$t={__name:"slides.md__slidev_9",setup(r){const{$clicksContext:e,$frontmatter:n}=oe();return e.setup(),(s,t)=>{const i=It;return ie(),Se(Fe,Re(Ae(X(Ie)(X(n),8))),{default:Le(()=>[Pe(i,{src:"02demonstrator/cloudsc-fortran-translation-template.md",maxHeight:"520px",fontSize:"0.5em"}),t[0]||(t[0]=T("ul",null,[T("li",null,"Used preprocessed code cloudsc_fortran src as Fortran reference, and C as secondary reference."),T("li",null,"Made a copy with only Fortran and C implementations to prevent accedental reference implementation leaks to LLM."),T("li",null,"Template evolved iteratively from first CPU translations.")],-1))]),_:1},16)}}};export{$t as default};
