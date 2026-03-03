import{o as ce,e as Se,k as Le,z as Pe,b as Re,w as L,d as P,g as x,ag as B,v as Ae,x as Te,T as te}from"./modules/vue-CirAeI5h.js";import{_ as Ie,K as pe,al as Fe}from"./index-DeRVCaEG.js";import{_ as De}from"./slidev/VClick-b99xp9IE.js";import{I as Ee}from"./default-BYmWdL0k.js";import"./modules/shiki-DdEcfdEW.js";import"./slidev/VClicks-C0tdSnhn.js";import"./ScholarlyHeader.vue_vue_type_script_setup_true_lang-CxWY6Qju.js";import"./useFontSizeStyles-D5uNHCW7.js";import"./useAutoFontSize-BCwsT_eI.js";const ze=`---
layout: default
title: Development Challenges for Climate (Weather) Models
subtitle: High-Resolution Simulations under Hardware Constraints in the Exascale Era
density: compact
---


<v-clicks>

- **Transition to km-scale climate simulations** 

  → Reduce uncertainity and increase granularity.

  → Extreme scalability and memory efficiency; critical optimizations, reduced precision. 

- **Rapid evolution of heterogeneous HPC architectures**  
  
  → CPUs + GPUs: Nvidia, AMD, ARM, INTEL

  → CUDA/HIP/OpenMP/OpenACC etc backends: code branching, maintainance risk.  

- **I/O scaling challenges**  

  → Parallel I/O, Filesystems, streaming workflows, cloud-tier storage integration
  
  → Tighter system integration.   

</v-clicks>

---
layout: default
title: Development challenges for Climate (Weather) models
subtitle: Software Engineering & Ecosystem Strain
density: compact
---

<v-clicks>

- **Increasing model components and impact-model integration**  
  → Rising complexity, interface overhead, maintenance cost  

- **Demand for interactive, browser-native workflows**  
  →  Web frameworks, Python-based diagnostics, reproducible pipelines  

- **Fragmented Fortran compiler landscape**  
  → Incomplete F2018 support; coarrays - limited vendor prioritization  
  → Open Fortran LLVM compilers not yet mature unlike for C/C++: Clang/Flang  

- **Shrinking pool of Fortran developers**  
  → Recruitment and long-term sustainability risks  

</v-clicks>

---
layout: default
title: Development challenges for Climate (Weather) models
subtitle: Strategic Competetion
density: compact
---

- **Emergence of ML-based surrogates**

  → Hybrid ML-parametrizations, Foundation models 

  → Shifting cost-performance expectations for physics-based models at some modeling centers.


<div class="pt-20 text-center">

<h1 class="text-primary text-4xl font-bold leading-snug">
What are potential future development pathways for Fortran-based climate models?
</h1>

</div>

---
layout: two-cols
title: Future Development Pathways
subtitle: Overview
density: compact
---

<v-clicks>

<Block type="default" title="Business as Usual (Fortran)" compact>

Continue Fortran-based development and preserve legacy.

Optimize for HR simulation needs and emerging HPC hardware.

Increased maintainance and developper effort: hitting structurally unsustainable limits

Rely on future compiler, backend framework convergence.

</Block>

<Block type="info" title="Migrate to C++" compact>

Unified source code for hardware backends promise with Kokkos library, possibly OpenMP. 

Stronger compiler & system tool integration support

Examples: MPAS, ICON-Atmosphere

Trade-off: Less scientist-friendly syntax, code complexity unknown.

</Block>

</v-clicks>

::right::

<v-clicks>

<Block type="success" title="High-Level Languages" compact>

JIT-compilation as way to ensure performance and unified source.

Examples: Python, Julia, DSLs (Gt4Py)

JAX: VEROS, VERIS; Gt4Py: ICON-C, IFS-FV, PACE

Julia: Oceananigans

Numba / PyTorch / Mojo/ Codeon other options.

Differentiable, integration with analysis and visualization pipelines.   

</Block>

<Block type="warning" title="ML-Based Surrogates" compact>

Hybrid ML–Physics models and Foundation models.

High training cost; outputs; retraining.  

Greater complexity for climate timescales.

Still need reference Physics based model.
</Block>

</v-clicks>

---
layout: center
title: Future Development Pathways
---

<div class="text-xl leading-relaxed text-left max-w-2xl mx-auto">

<span class="text-green-600 font-semibold">All options are promising.</span>

Yet none have demonstrated as replacement of comprehensive climate models — or even full component models — across grids and configurations.

<span class="text-red-600 font-semibold">Each pathway is a long-term strategic commitment and a strategic gamble</span>

It requires deep exploration, significant developer retraining, and institutional capacity that <span class="text-primary font-bold">not every modeling center can absorb.</span>

</div>


<!--
These problems are common to many centers using Fortran — some have chosen to migrate to other frameworks. Below are notable mentions.

Unstructured, flexible triangular meshes pose unique challenges for compute kernels — solutions here are largely uncharted. In the list, large modeling centers with significant resources are pursuing C++/Kokkos. Others are exploring alternative frameworks, mostly on structured grids.

C++ is not inherently scientific-computing friendly — it is made viable for this purpose by the Kokkos library (backed by Sandia National Labs / US DOE). Key challenges with C++ include manual memory management and the lack of native multi-dimensional array indexing that Fortran provides naturally.
-->


---
layout: default
title: Meanwhile AI-agentic is revolutioning software development
subtitle: An Opportunity?
density: compact
---

<div class="grid grid-cols-2 gap-2">
<div class="text-sm">

__AI Code Editors as Agentic Systems__

Unlike standalone LLMs that generate code from prompts,  
modern, agentic AI code editors operate as autonomous agents:

- LLM + tool access (filesystem, terminal, linters, VCS)  
- Iterative plan → execute → validate loop  

</div>
<div class="flex items-center">
<img src="/aieditorcartoon.png" class="w-full" />
</div>
</div>

<div class="grid grid-cols-2 gap-4 mt-2">
<div>
<v-click>

<Block type="info" title="An Opportunity?" compact>

Agentic AI systems are reshaping software development:

- Rapid prototyping
- Reduced repetitive work
- Lowered entry barriers
- Productivity gains

</Block>

</v-click>
</div>
<div>
<v-click>

<Block type="warning" title="But..." compact>

Benchmarks (e.g., SWE-bench) do not evaluate:

- Large scientific codebases
- Fortran-based code systems
- Generating performance-critical, scalable HPC code

</Block>

</v-click>
</div>
</div>

---
layout: center
title: Agentic AI code editors for Climate modelling
---


<div class="text-center px-12">

<h2 class="text-primary !text-2xl font-bold !leading-relaxed">
Can AI become a meta-tool for architectural exploration of development pathways for climate models? If so they should generate scalable, performant code translations of existing codebase.
</h2>

</div>`,Me=`# Reusable Template: Translating dwarf-cloudsc Fortran Kernel to [TARGET_LANGUAGE]

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
`,Ne=`---
layout: center
---

# Demonstrator

---
layout: default
title: Demonstrator
subtitle: AI Augmented Code Translation of a climate Model Dwarf
---


<div class="flex justify-center">
<img src="./climate_model_dwarf.png" class="h-70" />
</div>

A **dwarf** is a self-contained, functional kernel extracted from a full climate model
(e.g., advection, radiation, cloud microphysics, sea-ice).

- Runs independently of full model infrastructure with a simplified driver (main)
- Preserves numerical structure and algorithmic complexity  
- Enables controlled experimentation  with fixed inputs and validation outputs

**Purpose**
- Idealized experiments
- Explore alternative implementations  
- Performance and portability studies  

---
layout: two-cols
title: Demonstrator
subtitle: IFS-cloud Microphysics Dwarf
density: compact
---

<v-click>

<Block type="default" title="Column Physics Parametrization" compact>

Scheme for cloud and precipitation processes in the IFS, described by prognostic equations for cloud liquid water, ice, (LS) rain, (LS) snow and (LS) fractional cloud cover.

</Block>

</v-click>

<v-click>

<Block type="info" title="Mature Dwarf with Multiple Implementations" compact>

CPU and GPU backends, programming languages and optimizations: Fortran, OpenACC, CUDA, C etc.

<img src="./image.png" class="h-70" />

</Block>

</v-click>

::right::

<v-click>

<Block type="success" title="Cleanly Isolated Compute Kernel" compact>

General archetype for column physics parametrization: nested loops with inner serial vertical dimension loop, outer loop over multiple grid columns, matrix solver (LU decomposition), 2 Newton-Raphson iterations.

</Block>

</v-click>

<v-click>

<Block type="warning" title="Reference Inputs & Validation Outputs" compact>

- HDF5 based inputs and outputs for 100 columns
- Can be replicated for more sizes (ngptot)
- Useful for scaling and validation tests

</Block>

</v-click>

<v-click>
<div class="text-xs opacity-60 mt-2">

Thanks to ECMWF devs — https://github.com/ecmwf-ifs/dwarf-p-cloudsc and Nils Wedi.

</div>
</v-click>

---
layout: default
title: Demonstrator
subtitle: CPU compute kernel architecture
density: compact
---

<div class="grid grid-cols-5 gap-4">
<div class="col-span-2">

<div class="bg-gray-800 text-green-400 p-3 rounded-lg text-xs font-mono leading-relaxed">
main()<br>
&nbsp;└─► cloudsc_driver(nthreads, ncols, nproma)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─► <span class="text-yellow-300">#pragma omp parallel for</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FOR b = 0 TO nblocks-1: <span class="text-gray-500">← BLOCK (parallel)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─► cloudsc_c(kidia, kfdia, ...)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─► FOR jk = ncldtop TO klev: <span class="text-gray-500">← LEVEL (seq)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─► FOR jl = kidia TO kfdia: <span class="text-gray-500">← COL (vec)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─► physics(jl, jk)
</div>

</div>
<div class="col-span-3 flex items-center">

<v-click>
<img src="./cloudsc_flow_diagram.svg" class="w-full h-full object-contain" />
</v-click>

</div>
</div>



<!--
Cloud microphysics solves the evolution of cloud and precipitation hydrometeors — water vapor, cloud liquid, cloud ice, rain, snow, and graupel — through processes such as condensation, evaporation, autoconversion, accretion, sedimentation, and ice nucleation.

The equations govern mass and number concentration tendencies for each species, coupled through source/sink terms.

The computational structure involves nested loops: an outer loop over horizontal grid columns and an inner loop over vertical levels, with microphysics computed column-by-column. The image on the right shows the version tree of available implementations.

dwarf provides reference implementation and performance benchmarks.
Question is can we use AI to translate to different backends. here is the prompt.
-->
 
---
layout: default
title: Translation Prompt Template
subtitle: Reusable prompt for AI-assisted Fortran kernel translation
---

<v-click>

- Translate to different programming languages in future development pathways and evaluate performance and scaling. 
</v-click>

<v-click>

- Used preprocessed code of \`cloudsc_fortran\` as Fortran reference, and \`cloudsc_c\` C as secondary reference.
</v-click>

<v-click>

- Made a copy with only Fortran and C implementations to prevent accedental reference implementation leaks to LLM.
</v-click>

<v-click>

<ScrollableMarkdown src="02demonstrator/cloudsc-fortran-translation-template.md" maxHeight="320px" fontSize="0.8em" />
</v-click>

<v-click>

- Template evolved iteratively from first CPU translations. 
</v-click>
---
layout: two-cols
title: AI-Code Translation Benchmarks
subtitle: CPU, single thread
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
subtitle: CPU, multithreading (OMP, native threading)
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
- SCC: single column coalased makes sure that each GPU thread gets one column, massively parallel.  This is unlike CPU kernels where each cpu-thread uses NPROMA number of columns in serial loop for vectorization. 
- Selected top 2 performing fortran SCC kernels as reference.

::right::
- Surprisingly fortran SCC kernels tuned for massive parallism dont scale.
- C++/Kokkos that used nproma style kernel, more columns for a gpu thread, scales much better.
- Not enough compute intensity per thread for this dwarf.
- Clearly Microphysics Dwarf is memory bound.
- Jax designed for massively problems also doesn't scale and OOMs out. Test with SCC like kernel.

---
layout: default
title: Demonstrator
subtitle: Summary
---

- AI editors can port Fortran to C++, Rust, Python Frameworks and restructure Kernels.

- A self-sufficient Dwarf is powerful and breakthrough enabler.

- Performance is competative in many cases. 

- Among the alternative unified source frameworks: C++ with kokkos seems to be most mature, numba is promising, and jax is intruging.

- GPU scaling suggests Micro Physics Dwarf is low compute intensity and memory bound: other dwarfs like radiation?

- Good value in exploring atlas as backend as it can be used with different Frameworks and grids.
 
- Would be useful to evaluate ability to port Fortran to Fortran for different hardware backends.
 

<Block type="success" title="" compact>

AI editors can generate scalable, performant scientific kernels today -- not perfect but real. **Question is how do we structure our model to allow AI to help and not can AI do this**

</Block>`,Oe=`--- 
layout: center
title: Future perspectives for Climate models in age of AI.
subtitle: How to enable AI assisted climate model development
---

<Block type="info" title="Enable AI code editing"> 
How do we best leverage AI-editing abilities for sustainable development plans of climate models - how to make them AI-code ready. 
</Block>

<br><br><br>
Dwarf-demonstrator was a specific use case to translate to other languages, how to enable for a model wide development. 

__Cheatsheet?__     

---
layout: default
title: Making a Climate model AI editor ready
subtitle: Build system
---

__Use CMake build system__: LLMs understand cmake very well, saves lot of tool calls.  
   - make all dependencies auto installable: cmake modules to auto fetch and install dependencies.
   - support default build with gnu compilers: LLMs can figure options for debugging across versions.
   - use cmake standard package discovery where possible: \`FindCUDA\` 
   - don't over engineer build system, prefer use cmake-presets, toolchains to build. Remember some custom build systems were designed to over come past limitations of build systems which may not be valid now.
   - atleast one model configuration with all inputs included with the model.  


<v-click>
<Block type="warning" title="Key Metric"> 

AI editor is able to build model and run with simple prompt given path: local or remote url.
</Block>

</v-click>

<v-click>

__Add pre-processor target__: A biggest hack  
   - LLMs understand code from static code, as such includes and CPP macros hinder its abilities.  
   - This is relavent not just for Fortran bit also for other programming languages which use them C/C++. 
</v-click>

<v-click>

<Block type="warning" title="Key Metric"> 

AI editor should be able to generate a static call graph and data flow graph with a simple prompt.

</Block>
</v-click>

---
layout: default
title: Making a Climate model AI editor ready
subtitle: Refactoring and Testing
---

<v-clicks>

- Enable serial builds and runs, makes debugging easy for LLMs. 
- Refactor to have modular core (state) and components (advection, diffusion, ..). Each component has clean compute kernel and have simillar call signatures.
- Prefer shallow code architecture. 
- Avoid use of nested derived types: \`state%tendency%t\`. 
- Avoid changing (dynamic) model state inside subroutines with \`use module\`. Prefer all inputs and outputs in subroutine signature and mark intents: functional style.
- Deligent use of preprocessor MACROS, especially for model components: avoid same names for different subroutines
- Preferably compile all components and controls via namelist.       
- Refactor to have clear entry points for external components,  use plugin framework if possible.
</v-clicks>
---
layout: default
title: Making a Climate model AI editor ready
subtitle: Refactoring and Testing
density: compact
fontsize: 16px
---

<div class="grid grid-cols-3 gap-4">
<div class="col-span-2">

<v-click>

- Dwarfs are enabler for agentic code editing and making incremental changes. 

</v-click>

<v-click>

- Dwarf is also important to overcome context-size limitations of LLMs.

</v-click>

<v-click>

- Use Dwarfs as standard test suite.

- Each Dwarf has atleast one driver and a build system that uses core and relavent src component of Dwarf.
    - Independent inputs, scalable, usable at different resolutions.
    - For dynamical core, validation test could be conservation, error norms over idealized tests.

</v-click>

<v-click>

<Block type="warning" title="Key Metric" compact>

AI editor should be able to benchmark Dwarfs for scaling, translate code to other languages, or restructure compute kernels.

</Block>

</v-click>

</div>
<div>

<div class="bg-gray-800 text-green-400 p-2 rounded-lg text-xs font-mono leading-relaxed">
src/<br>
├── core/<br>
├── utils/<br>
├── advection/<br>
├── radiation/<br>
└── .../
</div>

<div class="bg-gray-800 text-green-400 p-2 rounded-lg text-xs font-mono leading-relaxed mt-2">
tests/<br>
├── advection/<br>
│&nbsp;&nbsp;&nbsp;├── CMakeLists.txt<br>
│&nbsp;&nbsp;&nbsp;├── inputs/<br>
│&nbsp;&nbsp;&nbsp;└── advection_driver.F90<br>
├── radiation/<br>
│&nbsp;&nbsp;&nbsp;├── CMakeLists.txt<br>
│&nbsp;&nbsp;&nbsp;├── inputs/<br>
│&nbsp;&nbsp;&nbsp;└── radiation_driver.F90<br>
└── .../
</div>

<div class="bg-gray-800 text-blue-300 p-1 rounded-lg text-xs font-mono leading-relaxed mt-2">
<span class="text-gray-500"># CMakeLists.txt Advection Dwarf</span><br>
add_executable(advection_driver<br>
&nbsp;&nbsp;advection_driver.F90)<br>
target_link_libraries(advection_driver<br>
&nbsp;&nbsp;core<br>
&nbsp;&nbsp;utils<br>
&nbsp;&nbsp;advection)
</div>

</div>
</div>

---
layout: two-cols
title: Making a Climate Model AI-Editor Ready
subtitle: Version Control, Automation & Documentation
density: compact
---

<v-click>

<Block type="default" title="Repository & Version Control" compact>

- Use **Git** (worktrees for multi-agent development)
- Clean \`.gitignore\` and repository structure
- Prefer public hosting (e.g., GitHub)

</Block>

</v-click>

<v-click>

<Block type="info" title="Quality Guardrails" compact>

- **Pre-commit hooks**: linting, formatting, static analysis
- Enforce **test coverage** and regression checks
- Protect against uncontrolled large-scale refactoring

</Block>

</v-click>

::right::

<v-click>

<Block type="success" title="Continuous Integration (CI)" compact>

- Automated testing across **multiple compilers** (containerized)
- Detect memory errors, vulnerabilities, security issues
- Performance regression testing as part of CI
- Future: AI-assisted CI for complexity analysis

</Block>

</v-click>

<v-click>

<Block type="warning" title="Documentation & Design Clarity" compact>

- Clear **design documents** (architecture, kernels, data flow)
- README as structured entry point
- Documentation hosted with good discoverability
- Cleanup Bash scripts

</Block>

</v-click>

---
layout: default
title: Making a Climate model AI editor ready
subtitle: Summary 
---

<v-clicks>

- Automate build system to be able to build and test using a single prompt given the path. 
    - Prefer cmake and its features
- Incrementally refactor source to modular components with shallow driver depth and consistent compute kernels.
    - standardize tests for components (dwarfs) with reference inputs and outputs that are scalable.
    - idealized configurations as dwarfs. 
- Clean up needless bash scripts (LLMs can do them better).
- Embrace source control automations (git precommit hooks, CI) to guardrail againt quality. 
- Maintain design documents for AI editors, to guide agentic coding. 
- Preferably embrace opensource development (preferably github) and documentation at SEO optimized host.

- Develop agentic tools to parse Fortran better, LSP.
</v-clicks>`,$e=`---
layout: center
---

# Future

---
layout: default
title: The Evolving Role of Climate Model Developers and Scientists
subtitle: From Code Writers to Architects of Discovery
density: compact
---

<v-clicks>

- **Changing expectations**: AI shifts the role from low-level coding to higher-level design, architecture and scientific judgement.

- **Broader scope**: With AI handling routine implementations, developers and scientists can tackle larger, more ambitious projects.

- **Experience as leverage**: Domain expertise becomes the key differentiator — experience matters in prompting and guiding AI effectively.

</v-clicks>

<v-click>

<video src="/eurus_demonstration.mp4" controls class="mt-4 rounded-lg mx-auto" style="max-height: 45vh;" />

<div class="text-xs opacity-60 text-center mt-1">

https://github.com/CliDyn/Eurus — *Dmitry Pantiukhin, Ivan Kuznetsov, Nikolay Koldunov

</div>

</v-click>
`,Be='# CLAUDE.md\n\nThis file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.\n\n## Project Overview\n\nA Slidev presentation titled "AI-Enabled Pathways for Rapid Climate Model Development" by Suvarchal K. Cheedela (AWI), using the `slidev-theme-scholarly` theme.\n\n## Commands\n\n- `npm run dev` — Start dev server (live preview at localhost:3030)\n- `npm run build` — Build static SPA to `dist/` (for GitHub Pages deployment)\n- `npm run export` — Export slides to PDF\n\n## Architecture\n\n- **`slides.md`** — Master document. Contains the title/cover slide frontmatter (theme, authors, themeConfig) and `src:` references to section markdown files. All theme-level config lives here.\n- **`01introduction/`, `02...`, etc.** — Numbered directories, each containing a `slides.md` with that section\'s slides. Images for a section live directly in its directory alongside the markdown (no nested `images/` subfolder).\n- Sections are included in the master via `src: ./01introduction/slides.md` directives.\n\n## Theme: slidev-theme-scholarly\n\nDocs: https://scholarly-docs.jxpeng.dev/en/ | Demo: https://scholarly.jxpeng.dev/\n\n### Key Layouts\n\n- `cover` — Title slide (uses `authors` from global frontmatter)\n- `section` — Chapter dividers (props: `sectionMode: \'dark\'|\'light\'`)\n- `default` — Standard slide (props: `title`, `subtitle`, `density`)\n- `figure` — Image with caption (props: `src`, `caption`, `label`, `height`, `fit`)\n- `two-cols` — Two columns with `::left::`/`::right::` slots (props: `ratio`, `gap`)\n- `image-left`/`image-right` — Image + text (props: `image`, `ratio`, `fit`)\n- `quote`, `fact`, `focus`, `statement` — Emphasis layouts\n- `references` — Bibliography slide (use `[[bibliography]]` marker)\n- `end` — Closing slide (props: `email`, `website`, `qrcode`)\n\n### Components\n\n- `<Cite author="Smith" year="2024">` — Inline citation\n- `<Block type="info" title="Note">` — Beamer-style colored box\n- `<Theorem type="theorem" title="...">` — Math theorem/lemma blocks\n- `:::block{type="info"}` / `:::theorem{}` — Markdown directive syntax alternatives\n\n### Citations\n\nUse `@citekey` in markdown text for inline citations. Place a `references.bib` file at project root. Use `layout: references` with `[[bibliography]]` for the bibliography slide.\n\n### Color Themes\n\nSet via `themeConfig.colorTheme`: `classic-blue` (default), `oxford-burgundy`, `cambridge-green`, `princeton-orange`, `yale-blue`, `monochrome`, `warm-sepia`, `nordic-blue`, `high-contrast`.\n\n## Image Handling\n\nImages for each section are stored directly in that section\'s directory (e.g., `01introduction/figure.png`). For Slidev to serve them, either:\n- Place copies/symlinks in `public/` and reference as `/filename.png`\n- Or use Vite-resolvable relative imports in custom components\n\n## Deployment\n\nThe `dist/` output from `npm run build` is intended for GitHub Pages hosting.\n\n\n## other instructions \nwhen git commiting please don\'t include co authorship.\n',Ke=`---
theme: scholarly
title: "AI-Enabled Pathways for Rapid Climate Model Development"
authors:
  - name: Suvarchal K. Cheedela
    institution: Alfred Wegener Institute
    email: suvarchal.cheedela@awi.de
footerMiddle: ECMWF  26-02-2026
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

<div class="absolute bottom-8 left-8 right-8 flex justify-between items-center">
  <img src="/awilogo_transp.png" class="h-16" />
  <span class="text-xs opacity-60">*Thanks to Thomas Jung</span>
  <img src="/WarmWorld_transp.png" class="h-24" />
</div>

---
src: ./01introduction/slides.md
---

---
src: ./02demonstrator/slides.md
---
---
src: ./03guide/slides.md
---
---
src: ./04future/slides.md
---
`;function H(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var S=H();function ue(r){S=r}var C={exec:()=>null};function u(r,e=""){let t=typeof r=="string"?r:r.source,s={replace:(n,i)=>{let a=typeof i=="string"?i:i.source;return a=a.replace(k.caret,"$1"),t=t.replace(n,a),s},getRegex:()=>new RegExp(t,e)};return s}var Ue=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),k={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:r=>new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:r=>new RegExp(`^ {0,${Math.min(3,r-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:r=>new RegExp(`^ {0,${Math.min(3,r-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:r=>new RegExp(`^ {0,${Math.min(3,r-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:r=>new RegExp(`^ {0,${Math.min(3,r-1)}}#`),htmlBeginRegex:r=>new RegExp(`^ {0,${Math.min(3,r-1)}}<(?:[a-z].*>|!--)`,"i"),blockquoteBeginRegex:r=>new RegExp(`^ {0,${Math.min(3,r-1)}}>`)},Qe=/^(?:[ \t]*(?:\n|$))+/,He=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Ze=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,F=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,qe=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Z=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,de=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,he=u(de).replace(/bull/g,Z).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Ve=u(de).replace(/bull/g,Z).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),q=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Ge=/^[^\n]+/,V=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,je=u(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",V).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),We=u(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Z).getRegex(),N="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",G=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Ye=u("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",G).replace("tag",N).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),me=u(q).replace("hr",F).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",N).getRegex(),Je=u(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",me).getRegex(),j={blockquote:Je,code:He,def:je,fences:Ze,heading:qe,hr:F,html:Ye,lheading:he,list:We,newline:Qe,paragraph:me,table:C,text:Ge},re=u("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",F).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",N).getRegex(),Xe={...j,lheading:Ve,table:re,paragraph:u(q).replace("hr",F).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",re).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",N).getRegex()},en={...j,html:u(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",G).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:C,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:u(q).replace("hr",F).replace("heading",` *#{1,6} *[^
]`).replace("lheading",he).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},nn=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,tn=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,ge=/^( {2,}|\\)\n(?!\s*$)/,rn=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,O=/[\p{P}\p{S}]/u,W=/[\s\p{P}\p{S}]/u,fe=/[^\s\p{P}\p{S}]/u,sn=u(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,W).getRegex(),ke=/(?!~)[\p{P}\p{S}]/u,an=/(?!~)[\s\p{P}\p{S}]/u,on=/(?:[^\s\p{P}\p{S}]|~)/u,be=/(?![*_])[\p{P}\p{S}]/u,ln=/(?![*_])[\s\p{P}\p{S}]/u,cn=/(?:[^\s\p{P}\p{S}]|[*_])/u,pn=u(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",Ue?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),ye=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,un=u(ye,"u").replace(/punct/g,O).getRegex(),dn=u(ye,"u").replace(/punct/g,ke).getRegex(),xe="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",hn=u(xe,"gu").replace(/notPunctSpace/g,fe).replace(/punctSpace/g,W).replace(/punct/g,O).getRegex(),mn=u(xe,"gu").replace(/notPunctSpace/g,on).replace(/punctSpace/g,an).replace(/punct/g,ke).getRegex(),gn=u("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,fe).replace(/punctSpace/g,W).replace(/punct/g,O).getRegex(),fn=u(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,be).getRegex(),kn="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",bn=u(kn,"gu").replace(/notPunctSpace/g,cn).replace(/punctSpace/g,ln).replace(/punct/g,be).getRegex(),yn=u(/\\(punct)/,"gu").replace(/punct/g,O).getRegex(),xn=u(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),wn=u(G).replace("(?:-->|$)","-->").getRegex(),vn=u("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",wn).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),E=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,Cn=u(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",E).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),we=u(/^!?\[(label)\]\[(ref)\]/).replace("label",E).replace("ref",V).getRegex(),ve=u(/^!?\[(ref)\](?:\[\])?/).replace("ref",V).getRegex(),_n=u("reflink|nolink(?!\\()","g").replace("reflink",we).replace("nolink",ve).getRegex(),se=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,Y={_backpedal:C,anyPunctuation:yn,autolink:xn,blockSkip:pn,br:ge,code:tn,del:C,delLDelim:C,delRDelim:C,emStrongLDelim:un,emStrongRDelimAst:hn,emStrongRDelimUnd:gn,escape:nn,link:Cn,nolink:ve,punctuation:sn,reflink:we,reflinkSearch:_n,tag:vn,text:rn,url:C},Sn={...Y,link:u(/^!?\[(label)\]\((.*?)\)/).replace("label",E).getRegex(),reflink:u(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",E).getRegex()},K={...Y,emStrongRDelimAst:mn,emStrongLDelim:dn,delLDelim:fn,delRDelim:bn,url:u(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",se).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:u(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",se).getRegex()},Ln={...K,br:u(ge).replace("{2,}","*").getRegex(),text:u(K.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},D={normal:j,gfm:Xe,pedantic:en},A={normal:Y,gfm:K,breaks:Ln,pedantic:Sn},Pn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ae=r=>Pn[r];function w(r,e){if(e){if(k.escapeTest.test(r))return r.replace(k.escapeReplace,ae)}else if(k.escapeTestNoEncode.test(r))return r.replace(k.escapeReplaceNoEncode,ae);return r}function ie(r){try{r=encodeURI(r).replace(k.percentDecode,"%")}catch{return null}return r}function oe(r,e){let t=r.replace(k.findPipe,(i,a,l)=>{let o=!1,p=a;for(;--p>=0&&l[p]==="\\";)o=!o;return o?"|":" |"}),s=t.split(k.splitPipe),n=0;if(s[0].trim()||s.shift(),s.length>0&&!s.at(-1)?.trim()&&s.pop(),e)if(s.length>e)s.splice(e);else for(;s.length<e;)s.push("");for(;n<s.length;n++)s[n]=s[n].trim().replace(k.slashPipe,"|");return s}function T(r,e,t){let s=r.length;if(s===0)return"";let n=0;for(;n<s&&r.charAt(s-n-1)===e;)n++;return r.slice(0,s-n)}function Rn(r,e){if(r.indexOf(e[1])===-1)return-1;let t=0;for(let s=0;s<r.length;s++)if(r[s]==="\\")s++;else if(r[s]===e[0])t++;else if(r[s]===e[1]&&(t--,t<0))return s;return t>0?-2:-1}function An(r,e=0){let t=e,s="";for(let n of r)if(n==="	"){let i=4-t%4;s+=" ".repeat(i),t+=i}else s+=n,t++;return s}function le(r,e,t,s,n){let i=e.href,a=e.title||null,l=r[1].replace(n.other.outputLinkReplace,"$1");s.state.inLink=!0;let o={type:r[0].charAt(0)==="!"?"image":"link",raw:t,href:i,title:a,text:l,tokens:s.inlineTokens(l)};return s.state.inLink=!1,o}function Tn(r,e,t){let s=r.match(t.other.indentCodeCompensation);if(s===null)return e;let n=s[1];return e.split(`
`).map(i=>{let a=i.match(t.other.beginningSpace);if(a===null)return i;let[l]=a;return l.length>=n.length?i.slice(n.length):i}).join(`
`)}var z=class{options;rules;lexer;constructor(r){this.options=r||S}space(r){let e=this.rules.block.newline.exec(r);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(r){let e=this.rules.block.code.exec(r);if(e){let t=e[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?t:T(t,`
`)}}}fences(r){let e=this.rules.block.fences.exec(r);if(e){let t=e[0],s=Tn(t,e[3]||"",this.rules);return{type:"code",raw:t,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:s}}}heading(r){let e=this.rules.block.heading.exec(r);if(e){let t=e[2].trim();if(this.rules.other.endingHash.test(t)){let s=T(t,"#");(this.options.pedantic||!s||this.rules.other.endingSpaceChar.test(s))&&(t=s.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:t,tokens:this.lexer.inline(t)}}}hr(r){let e=this.rules.block.hr.exec(r);if(e)return{type:"hr",raw:T(e[0],`
`)}}blockquote(r){let e=this.rules.block.blockquote.exec(r);if(e){let t=T(e[0],`
`).split(`
`),s="",n="",i=[];for(;t.length>0;){let a=!1,l=[],o;for(o=0;o<t.length;o++)if(this.rules.other.blockquoteStart.test(t[o]))l.push(t[o]),a=!0;else if(!a)l.push(t[o]);else break;t=t.slice(o);let p=l.join(`
`),c=p.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");s=s?`${s}
${p}`:p,n=n?`${n}
${c}`:c;let h=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(c,i,!0),this.lexer.state.top=h,t.length===0)break;let d=i.at(-1);if(d?.type==="code")break;if(d?.type==="blockquote"){let f=d,g=f.raw+`
`+t.join(`
`),v=this.blockquote(g);i[i.length-1]=v,s=s.substring(0,s.length-f.raw.length)+v.raw,n=n.substring(0,n.length-f.text.length)+v.text;break}else if(d?.type==="list"){let f=d,g=f.raw+`
`+t.join(`
`),v=this.list(g);i[i.length-1]=v,s=s.substring(0,s.length-d.raw.length)+v.raw,n=n.substring(0,n.length-f.raw.length)+v.raw,t=g.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:s,tokens:i,text:n}}}list(r){let e=this.rules.block.list.exec(r);if(e){let t=e[1].trim(),s=t.length>1,n={type:"list",raw:"",ordered:s,start:s?+t.slice(0,-1):"",loose:!1,items:[]};t=s?`\\d{1,9}\\${t.slice(-1)}`:`\\${t}`,this.options.pedantic&&(t=s?t:"[*+-]");let i=this.rules.other.listItemRegex(t),a=!1;for(;r;){let o=!1,p="",c="";if(!(e=i.exec(r))||this.rules.block.hr.test(r))break;p=e[0],r=r.substring(p.length);let h=An(e[2].split(`
`,1)[0],e[1].length),d=r.split(`
`,1)[0],f=!h.trim(),g=0;if(this.options.pedantic?(g=2,c=h.trimStart()):f?g=e[1].length+1:(g=h.search(this.rules.other.nonSpaceChar),g=g>4?1:g,c=h.slice(g),g+=e[1].length),f&&this.rules.other.blankLine.test(d)&&(p+=d+`
`,r=r.substring(d.length+1),o=!0),!o){let v=this.rules.other.nextBulletRegex(g),X=this.rules.other.hrRegex(g),ee=this.rules.other.fencesBeginRegex(g),ne=this.rules.other.headingBeginRegex(g),Ce=this.rules.other.htmlBeginRegex(g),_e=this.rules.other.blockquoteBeginRegex(g);for(;r;){let $=r.split(`
`,1)[0],R;if(d=$,this.options.pedantic?(d=d.replace(this.rules.other.listReplaceNesting,"  "),R=d):R=d.replace(this.rules.other.tabCharGlobal,"    "),ee.test(d)||ne.test(d)||Ce.test(d)||_e.test(d)||v.test(d)||X.test(d))break;if(R.search(this.rules.other.nonSpaceChar)>=g||!d.trim())c+=`
`+R.slice(g);else{if(f||h.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||ee.test(h)||ne.test(h)||X.test(h))break;c+=`
`+d}f=!d.trim(),p+=$+`
`,r=r.substring($.length+1),h=R.slice(g)}}n.loose||(a?n.loose=!0:this.rules.other.doubleBlankLine.test(p)&&(a=!0)),n.items.push({type:"list_item",raw:p,task:!!this.options.gfm&&this.rules.other.listIsTask.test(c),loose:!1,text:c,tokens:[]}),n.raw+=p}let l=n.items.at(-1);if(l)l.raw=l.raw.trimEnd(),l.text=l.text.trimEnd();else return;n.raw=n.raw.trimEnd();for(let o of n.items){if(this.lexer.state.top=!1,o.tokens=this.lexer.blockTokens(o.text,[]),o.task){if(o.text=o.text.replace(this.rules.other.listReplaceTask,""),o.tokens[0]?.type==="text"||o.tokens[0]?.type==="paragraph"){o.tokens[0].raw=o.tokens[0].raw.replace(this.rules.other.listReplaceTask,""),o.tokens[0].text=o.tokens[0].text.replace(this.rules.other.listReplaceTask,"");for(let c=this.lexer.inlineQueue.length-1;c>=0;c--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[c].src)){this.lexer.inlineQueue[c].src=this.lexer.inlineQueue[c].src.replace(this.rules.other.listReplaceTask,"");break}}let p=this.rules.other.listTaskCheckbox.exec(o.raw);if(p){let c={type:"checkbox",raw:p[0]+" ",checked:p[0]!=="[ ]"};o.checked=c.checked,n.loose?o.tokens[0]&&["paragraph","text"].includes(o.tokens[0].type)&&"tokens"in o.tokens[0]&&o.tokens[0].tokens?(o.tokens[0].raw=c.raw+o.tokens[0].raw,o.tokens[0].text=c.raw+o.tokens[0].text,o.tokens[0].tokens.unshift(c)):o.tokens.unshift({type:"paragraph",raw:c.raw,text:c.raw,tokens:[c]}):o.tokens.unshift(c)}}if(!n.loose){let p=o.tokens.filter(h=>h.type==="space"),c=p.length>0&&p.some(h=>this.rules.other.anyLine.test(h.raw));n.loose=c}}if(n.loose)for(let o of n.items){o.loose=!0;for(let p of o.tokens)p.type==="text"&&(p.type="paragraph")}return n}}html(r){let e=this.rules.block.html.exec(r);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(r){let e=this.rules.block.def.exec(r);if(e){let t=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),s=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",n=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:t,raw:e[0],href:s,title:n}}}table(r){let e=this.rules.block.table.exec(r);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let t=oe(e[1]),s=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),n=e[3]?.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],i={type:"table",raw:e[0],header:[],align:[],rows:[]};if(t.length===s.length){for(let a of s)this.rules.other.tableAlignRight.test(a)?i.align.push("right"):this.rules.other.tableAlignCenter.test(a)?i.align.push("center"):this.rules.other.tableAlignLeft.test(a)?i.align.push("left"):i.align.push(null);for(let a=0;a<t.length;a++)i.header.push({text:t[a],tokens:this.lexer.inline(t[a]),header:!0,align:i.align[a]});for(let a of n)i.rows.push(oe(a,i.header.length).map((l,o)=>({text:l,tokens:this.lexer.inline(l),header:!1,align:i.align[o]})));return i}}lheading(r){let e=this.rules.block.lheading.exec(r);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(r){let e=this.rules.block.paragraph.exec(r);if(e){let t=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:t,tokens:this.lexer.inline(t)}}}text(r){let e=this.rules.block.text.exec(r);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(r){let e=this.rules.inline.escape.exec(r);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(r){let e=this.rules.inline.tag.exec(r);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(r){let e=this.rules.inline.link.exec(r);if(e){let t=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(t)){if(!this.rules.other.endAngleBracket.test(t))return;let i=T(t.slice(0,-1),"\\");if((t.length-i.length)%2===0)return}else{let i=Rn(e[2],"()");if(i===-2)return;if(i>-1){let a=(e[0].indexOf("!")===0?5:4)+e[1].length+i;e[2]=e[2].substring(0,i),e[0]=e[0].substring(0,a).trim(),e[3]=""}}let s=e[2],n="";if(this.options.pedantic){let i=this.rules.other.pedanticHrefTitle.exec(s);i&&(s=i[1],n=i[3])}else n=e[3]?e[3].slice(1,-1):"";return s=s.trim(),this.rules.other.startAngleBracket.test(s)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(t)?s=s.slice(1):s=s.slice(1,-1)),le(e,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:n&&n.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(r,e){let t;if((t=this.rules.inline.reflink.exec(r))||(t=this.rules.inline.nolink.exec(r))){let s=(t[2]||t[1]).replace(this.rules.other.multipleSpaceGlobal," "),n=e[s.toLowerCase()];if(!n){let i=t[0].charAt(0);return{type:"text",raw:i,text:i}}return le(t,n,t[0],this.lexer,this.rules)}}emStrong(r,e,t=""){let s=this.rules.inline.emStrongLDelim.exec(r);if(!(!s||s[3]&&t.match(this.rules.other.unicodeAlphaNumeric))&&(!(s[1]||s[2])||!t||this.rules.inline.punctuation.exec(t))){let n=[...s[0]].length-1,i,a,l=n,o=0,p=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(p.lastIndex=0,e=e.slice(-1*r.length+n);(s=p.exec(e))!=null;){if(i=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!i)continue;if(a=[...i].length,s[3]||s[4]){l+=a;continue}else if((s[5]||s[6])&&n%3&&!((n+a)%3)){o+=a;continue}if(l-=a,l>0)continue;a=Math.min(a,a+l+o);let c=[...s[0]][0].length,h=r.slice(0,n+s.index+c+a);if(Math.min(n,a)%2){let f=h.slice(1,-1);return{type:"em",raw:h,text:f,tokens:this.lexer.inlineTokens(f)}}let d=h.slice(2,-2);return{type:"strong",raw:h,text:d,tokens:this.lexer.inlineTokens(d)}}}}codespan(r){let e=this.rules.inline.code.exec(r);if(e){let t=e[2].replace(this.rules.other.newLineCharGlobal," "),s=this.rules.other.nonSpaceChar.test(t),n=this.rules.other.startingSpaceChar.test(t)&&this.rules.other.endingSpaceChar.test(t);return s&&n&&(t=t.substring(1,t.length-1)),{type:"codespan",raw:e[0],text:t}}}br(r){let e=this.rules.inline.br.exec(r);if(e)return{type:"br",raw:e[0]}}del(r,e,t=""){let s=this.rules.inline.delLDelim.exec(r);if(s&&(!s[1]||!t||this.rules.inline.punctuation.exec(t))){let n=[...s[0]].length-1,i,a,l=n,o=this.rules.inline.delRDelim;for(o.lastIndex=0,e=e.slice(-1*r.length+n);(s=o.exec(e))!=null;){if(i=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!i||(a=[...i].length,a!==n))continue;if(s[3]||s[4]){l+=a;continue}if(l-=a,l>0)continue;a=Math.min(a,a+l);let p=[...s[0]][0].length,c=r.slice(0,n+s.index+p+a),h=c.slice(n,-n);return{type:"del",raw:c,text:h,tokens:this.lexer.inlineTokens(h)}}}}autolink(r){let e=this.rules.inline.autolink.exec(r);if(e){let t,s;return e[2]==="@"?(t=e[1],s="mailto:"+t):(t=e[1],s=t),{type:"link",raw:e[0],text:t,href:s,tokens:[{type:"text",raw:t,text:t}]}}}url(r){let e;if(e=this.rules.inline.url.exec(r)){let t,s;if(e[2]==="@")t=e[0],s="mailto:"+t;else{let n;do n=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])?.[0]??"";while(n!==e[0]);t=e[0],e[1]==="www."?s="http://"+e[0]:s=e[0]}return{type:"link",raw:e[0],text:t,href:s,tokens:[{type:"text",raw:t,text:t}]}}}inlineText(r){let e=this.rules.inline.text.exec(r);if(e){let t=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:t}}}},b=class U{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||S,this.options.tokenizer=this.options.tokenizer||new z,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:k,block:D.normal,inline:A.normal};this.options.pedantic?(t.block=D.pedantic,t.inline=A.pedantic):this.options.gfm&&(t.block=D.gfm,this.options.breaks?t.inline=A.breaks:t.inline=A.gfm),this.tokenizer.rules=t}static get rules(){return{block:D,inline:A}}static lex(e,t){return new U(t).lex(e)}static lexInline(e,t){return new U(t).inlineTokens(e)}lex(e){e=e.replace(k.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){let s=this.inlineQueue[t];this.inlineTokens(s.src,s.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],s=!1){for(this.options.pedantic&&(e=e.replace(k.tabCharGlobal,"    ").replace(k.spaceLine,""));e;){let n;if(this.options.extensions?.block?.some(a=>(n=a.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))continue;if(n=this.tokenizer.space(e)){e=e.substring(n.raw.length);let a=t.at(-1);n.raw.length===1&&a!==void 0?a.raw+=`
`:t.push(n);continue}if(n=this.tokenizer.code(e)){e=e.substring(n.raw.length);let a=t.at(-1);a?.type==="paragraph"||a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+n.raw,a.text+=`
`+n.text,this.inlineQueue.at(-1).src=a.text):t.push(n);continue}if(n=this.tokenizer.fences(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.heading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.hr(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.blockquote(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.list(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.html(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.def(e)){e=e.substring(n.raw.length);let a=t.at(-1);a?.type==="paragraph"||a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+n.raw,a.text+=`
`+n.raw,this.inlineQueue.at(-1).src=a.text):this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title},t.push(n));continue}if(n=this.tokenizer.table(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.lheading(e)){e=e.substring(n.raw.length),t.push(n);continue}let i=e;if(this.options.extensions?.startBlock){let a=1/0,l=e.slice(1),o;this.options.extensions.startBlock.forEach(p=>{o=p.call({lexer:this},l),typeof o=="number"&&o>=0&&(a=Math.min(a,o))}),a<1/0&&a>=0&&(i=e.substring(0,a+1))}if(this.state.top&&(n=this.tokenizer.paragraph(i))){let a=t.at(-1);s&&a?.type==="paragraph"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+n.raw,a.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):t.push(n),s=i.length!==e.length,e=e.substring(n.raw.length);continue}if(n=this.tokenizer.text(e)){e=e.substring(n.raw.length);let a=t.at(-1);a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+n.raw,a.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):t.push(n);continue}if(e){let a="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(a);break}else throw new Error(a)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let s=e,n=null;if(this.tokens.links){let o=Object.keys(this.tokens.links);if(o.length>0)for(;(n=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null;)o.includes(n[0].slice(n[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,n.index)+"["+"a".repeat(n[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(n=this.tokenizer.rules.inline.anyPunctuation.exec(s))!=null;)s=s.slice(0,n.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let i;for(;(n=this.tokenizer.rules.inline.blockSkip.exec(s))!=null;)i=n[2]?n[2].length:0,s=s.slice(0,n.index+i)+"["+"a".repeat(n[0].length-i-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);s=this.options.hooks?.emStrongMask?.call({lexer:this},s)??s;let a=!1,l="";for(;e;){a||(l=""),a=!1;let o;if(this.options.extensions?.inline?.some(c=>(o=c.call({lexer:this},e,t))?(e=e.substring(o.raw.length),t.push(o),!0):!1))continue;if(o=this.tokenizer.escape(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.tag(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.link(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(o.raw.length);let c=t.at(-1);o.type==="text"&&c?.type==="text"?(c.raw+=o.raw,c.text+=o.text):t.push(o);continue}if(o=this.tokenizer.emStrong(e,s,l)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.codespan(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.br(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.del(e,s,l)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.autolink(e)){e=e.substring(o.raw.length),t.push(o);continue}if(!this.state.inLink&&(o=this.tokenizer.url(e))){e=e.substring(o.raw.length),t.push(o);continue}let p=e;if(this.options.extensions?.startInline){let c=1/0,h=e.slice(1),d;this.options.extensions.startInline.forEach(f=>{d=f.call({lexer:this},h),typeof d=="number"&&d>=0&&(c=Math.min(c,d))}),c<1/0&&c>=0&&(p=e.substring(0,c+1))}if(o=this.tokenizer.inlineText(p)){e=e.substring(o.raw.length),o.raw.slice(-1)!=="_"&&(l=o.raw.slice(-1)),a=!0;let c=t.at(-1);c?.type==="text"?(c.raw+=o.raw,c.text+=o.text):t.push(o);continue}if(e){let c="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return t}},M=class{options;parser;constructor(r){this.options=r||S}space(r){return""}code({text:r,lang:e,escaped:t}){let s=(e||"").match(k.notSpaceStart)?.[0],n=r.replace(k.endingNewline,"")+`
`;return s?'<pre><code class="language-'+w(s)+'">'+(t?n:w(n,!0))+`</code></pre>
`:"<pre><code>"+(t?n:w(n,!0))+`</code></pre>
`}blockquote({tokens:r}){return`<blockquote>
${this.parser.parse(r)}</blockquote>
`}html({text:r}){return r}def(r){return""}heading({tokens:r,depth:e}){return`<h${e}>${this.parser.parseInline(r)}</h${e}>
`}hr(r){return`<hr>
`}list(r){let e=r.ordered,t=r.start,s="";for(let a=0;a<r.items.length;a++){let l=r.items[a];s+=this.listitem(l)}let n=e?"ol":"ul",i=e&&t!==1?' start="'+t+'"':"";return"<"+n+i+`>
`+s+"</"+n+`>
`}listitem(r){return`<li>${this.parser.parse(r.tokens)}</li>
`}checkbox({checked:r}){return"<input "+(r?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:r}){return`<p>${this.parser.parseInline(r)}</p>
`}table(r){let e="",t="";for(let n=0;n<r.header.length;n++)t+=this.tablecell(r.header[n]);e+=this.tablerow({text:t});let s="";for(let n=0;n<r.rows.length;n++){let i=r.rows[n];t="";for(let a=0;a<i.length;a++)t+=this.tablecell(i[a]);s+=this.tablerow({text:t})}return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+s+`</table>
`}tablerow({text:r}){return`<tr>
${r}</tr>
`}tablecell(r){let e=this.parser.parseInline(r.tokens),t=r.header?"th":"td";return(r.align?`<${t} align="${r.align}">`:`<${t}>`)+e+`</${t}>
`}strong({tokens:r}){return`<strong>${this.parser.parseInline(r)}</strong>`}em({tokens:r}){return`<em>${this.parser.parseInline(r)}</em>`}codespan({text:r}){return`<code>${w(r,!0)}</code>`}br(r){return"<br>"}del({tokens:r}){return`<del>${this.parser.parseInline(r)}</del>`}link({href:r,title:e,tokens:t}){let s=this.parser.parseInline(t),n=ie(r);if(n===null)return s;r=n;let i='<a href="'+r+'"';return e&&(i+=' title="'+w(e)+'"'),i+=">"+s+"</a>",i}image({href:r,title:e,text:t,tokens:s}){s&&(t=this.parser.parseInline(s,this.parser.textRenderer));let n=ie(r);if(n===null)return w(t);r=n;let i=`<img src="${r}" alt="${w(t)}"`;return e&&(i+=` title="${w(e)}"`),i+=">",i}text(r){return"tokens"in r&&r.tokens?this.parser.parseInline(r.tokens):"escaped"in r&&r.escaped?r.text:w(r.text)}},J=class{strong({text:r}){return r}em({text:r}){return r}codespan({text:r}){return r}del({text:r}){return r}html({text:r}){return r}text({text:r}){return r}link({text:r}){return""+r}image({text:r}){return""+r}br(){return""}checkbox({raw:r}){return r}},y=class Q{options;renderer;textRenderer;constructor(e){this.options=e||S,this.options.renderer=this.options.renderer||new M,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new J}static parse(e,t){return new Q(t).parse(e)}static parseInline(e,t){return new Q(t).parseInline(e)}parse(e){let t="";for(let s=0;s<e.length;s++){let n=e[s];if(this.options.extensions?.renderers?.[n.type]){let a=n,l=this.options.extensions.renderers[a.type].call({parser:this},a);if(l!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(a.type)){t+=l||"";continue}}let i=n;switch(i.type){case"space":{t+=this.renderer.space(i);break}case"hr":{t+=this.renderer.hr(i);break}case"heading":{t+=this.renderer.heading(i);break}case"code":{t+=this.renderer.code(i);break}case"table":{t+=this.renderer.table(i);break}case"blockquote":{t+=this.renderer.blockquote(i);break}case"list":{t+=this.renderer.list(i);break}case"checkbox":{t+=this.renderer.checkbox(i);break}case"html":{t+=this.renderer.html(i);break}case"def":{t+=this.renderer.def(i);break}case"paragraph":{t+=this.renderer.paragraph(i);break}case"text":{t+=this.renderer.text(i);break}default:{let a='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw new Error(a)}}}return t}parseInline(e,t=this.renderer){let s="";for(let n=0;n<e.length;n++){let i=e[n];if(this.options.extensions?.renderers?.[i.type]){let l=this.options.extensions.renderers[i.type].call({parser:this},i);if(l!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(i.type)){s+=l||"";continue}}let a=i;switch(a.type){case"escape":{s+=t.text(a);break}case"html":{s+=t.html(a);break}case"link":{s+=t.link(a);break}case"image":{s+=t.image(a);break}case"checkbox":{s+=t.checkbox(a);break}case"strong":{s+=t.strong(a);break}case"em":{s+=t.em(a);break}case"codespan":{s+=t.codespan(a);break}case"br":{s+=t.br(a);break}case"del":{s+=t.del(a);break}case"text":{s+=t.text(a);break}default:{let l='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return s}},I=class{options;block;constructor(r){this.options=r||S}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(r){return r}postprocess(r){return r}processAllTokens(r){return r}emStrongMask(r){return r}provideLexer(){return this.block?b.lex:b.lexInline}provideParser(){return this.block?y.parse:y.parseInline}},In=class{defaults=H();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=y;Renderer=M;TextRenderer=J;Lexer=b;Tokenizer=z;Hooks=I;constructor(...r){this.use(...r)}walkTokens(r,e){let t=[];for(let s of r)switch(t=t.concat(e.call(this,s)),s.type){case"table":{let n=s;for(let i of n.header)t=t.concat(this.walkTokens(i.tokens,e));for(let i of n.rows)for(let a of i)t=t.concat(this.walkTokens(a.tokens,e));break}case"list":{let n=s;t=t.concat(this.walkTokens(n.items,e));break}default:{let n=s;this.defaults.extensions?.childTokens?.[n.type]?this.defaults.extensions.childTokens[n.type].forEach(i=>{let a=n[i].flat(1/0);t=t.concat(this.walkTokens(a,e))}):n.tokens&&(t=t.concat(this.walkTokens(n.tokens,e)))}}return t}use(...r){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return r.forEach(t=>{let s={...t};if(s.async=this.defaults.async||s.async||!1,t.extensions&&(t.extensions.forEach(n=>{if(!n.name)throw new Error("extension name required");if("renderer"in n){let i=e.renderers[n.name];i?e.renderers[n.name]=function(...a){let l=n.renderer.apply(this,a);return l===!1&&(l=i.apply(this,a)),l}:e.renderers[n.name]=n.renderer}if("tokenizer"in n){if(!n.level||n.level!=="block"&&n.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let i=e[n.level];i?i.unshift(n.tokenizer):e[n.level]=[n.tokenizer],n.start&&(n.level==="block"?e.startBlock?e.startBlock.push(n.start):e.startBlock=[n.start]:n.level==="inline"&&(e.startInline?e.startInline.push(n.start):e.startInline=[n.start]))}"childTokens"in n&&n.childTokens&&(e.childTokens[n.name]=n.childTokens)}),s.extensions=e),t.renderer){let n=this.defaults.renderer||new M(this.defaults);for(let i in t.renderer){if(!(i in n))throw new Error(`renderer '${i}' does not exist`);if(["options","parser"].includes(i))continue;let a=i,l=t.renderer[a],o=n[a];n[a]=(...p)=>{let c=l.apply(n,p);return c===!1&&(c=o.apply(n,p)),c||""}}s.renderer=n}if(t.tokenizer){let n=this.defaults.tokenizer||new z(this.defaults);for(let i in t.tokenizer){if(!(i in n))throw new Error(`tokenizer '${i}' does not exist`);if(["options","rules","lexer"].includes(i))continue;let a=i,l=t.tokenizer[a],o=n[a];n[a]=(...p)=>{let c=l.apply(n,p);return c===!1&&(c=o.apply(n,p)),c}}s.tokenizer=n}if(t.hooks){let n=this.defaults.hooks||new I;for(let i in t.hooks){if(!(i in n))throw new Error(`hook '${i}' does not exist`);if(["options","block"].includes(i))continue;let a=i,l=t.hooks[a],o=n[a];I.passThroughHooks.has(i)?n[a]=p=>{if(this.defaults.async&&I.passThroughHooksRespectAsync.has(i))return(async()=>{let h=await l.call(n,p);return o.call(n,h)})();let c=l.call(n,p);return o.call(n,c)}:n[a]=(...p)=>{if(this.defaults.async)return(async()=>{let h=await l.apply(n,p);return h===!1&&(h=await o.apply(n,p)),h})();let c=l.apply(n,p);return c===!1&&(c=o.apply(n,p)),c}}s.hooks=n}if(t.walkTokens){let n=this.defaults.walkTokens,i=t.walkTokens;s.walkTokens=function(a){let l=[];return l.push(i.call(this,a)),n&&(l=l.concat(n.call(this,a))),l}}this.defaults={...this.defaults,...s}}),this}setOptions(r){return this.defaults={...this.defaults,...r},this}lexer(r,e){return b.lex(r,e??this.defaults)}parser(r,e){return y.parse(r,e??this.defaults)}parseMarkdown(r){return(e,t)=>{let s={...t},n={...this.defaults,...s},i=this.onError(!!n.silent,!!n.async);if(this.defaults.async===!0&&s.async===!1)return i(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return i(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return i(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(n.hooks&&(n.hooks.options=n,n.hooks.block=r),n.async)return(async()=>{let a=n.hooks?await n.hooks.preprocess(e):e,l=await(n.hooks?await n.hooks.provideLexer():r?b.lex:b.lexInline)(a,n),o=n.hooks?await n.hooks.processAllTokens(l):l;n.walkTokens&&await Promise.all(this.walkTokens(o,n.walkTokens));let p=await(n.hooks?await n.hooks.provideParser():r?y.parse:y.parseInline)(o,n);return n.hooks?await n.hooks.postprocess(p):p})().catch(i);try{n.hooks&&(e=n.hooks.preprocess(e));let a=(n.hooks?n.hooks.provideLexer():r?b.lex:b.lexInline)(e,n);n.hooks&&(a=n.hooks.processAllTokens(a)),n.walkTokens&&this.walkTokens(a,n.walkTokens);let l=(n.hooks?n.hooks.provideParser():r?y.parse:y.parseInline)(a,n);return n.hooks&&(l=n.hooks.postprocess(l)),l}catch(a){return i(a)}}}onError(r,e){return t=>{if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,r){let s="<p>An error occurred:</p><pre>"+w(t.message+"",!0)+"</pre>";return e?Promise.resolve(s):s}if(e)return Promise.reject(t);throw t}}},_=new In;function m(r,e){return _.parse(r,e)}m.options=m.setOptions=function(r){return _.setOptions(r),m.defaults=_.defaults,ue(m.defaults),m};m.getDefaults=H;m.defaults=S;m.use=function(...r){return _.use(...r),m.defaults=_.defaults,ue(m.defaults),m};m.walkTokens=function(r,e){return _.walkTokens(r,e)};m.parseInline=_.parseInline;m.Parser=y;m.parser=y.parse;m.Renderer=M;m.TextRenderer=J;m.Lexer=b;m.lexer=b.lex;m.Tokenizer=z;m.Hooks=I;m.parse=m;m.options;m.setOptions;m.use;m.walkTokens;m.parseInline;var Fn=m;y.parse;b.lex;const Dn=["innerHTML"],En={__name:"ScrollableMarkdown",props:{src:{type:String,required:!0},maxHeight:{type:String,default:"420px"},fontSize:{type:String,default:"0.5em"}},setup(r){pe();const e=Object.assign({"../01introduction/slides.md":ze,"../02demonstrator/cloudsc-fortran-translation-template.md":Me,"../02demonstrator/slides.md":Ne,"../03guide/slides.md":Oe,"../04future/slides.md":$e,"../CLAUDE.md":Be,"../slides.md":Ke}),t=r,s=Pe(()=>{const n=t.src.startsWith("../")?t.src:`../${t.src}`,i=e[n];return i?Fn(i):`<p style="color:red">File not found: ${t.src}</p>`});return(n,i)=>(ce(),Se("div",{class:"scrollable-md",style:Le({maxHeight:t.maxHeight,fontSize:t.fontSize}),innerHTML:s.value},null,12,Dn))}},zn=Ie(En,[["__scopeId","data-v-383a4a61"]]),Zn={__name:"slides.md__slidev_13",setup(r){const{$clicksContext:e,$frontmatter:t}=pe();return e.setup(),(s,n)=>{const i=De,a=zn;return ce(),Re(Ee,Ae(Te(te(Fe)(te(t),12))),{default:L(()=>[P(i,null,{default:L(()=>[...n[0]||(n[0]=[x("ul",null,[x("li",null,"Translate to different programming languages in future development pathways and evaluate performance and scaling.")],-1)])]),_:1}),P(i,null,{default:L(()=>[...n[1]||(n[1]=[x("ul",null,[x("li",null,[B("Used preprocessed code of "),x("code",null,"cloudsc_fortran"),B(" as Fortran reference, and "),x("code",null,"cloudsc_c"),B(" C as secondary reference.")])],-1)])]),_:1}),P(i,null,{default:L(()=>[...n[2]||(n[2]=[x("ul",null,[x("li",null,"Made a copy with only Fortran and C implementations to prevent accedental reference implementation leaks to LLM.")],-1)])]),_:1}),P(i,null,{default:L(()=>[P(a,{src:"02demonstrator/cloudsc-fortran-translation-template.md",maxHeight:"320px",fontSize:"0.8em"})]),_:1}),P(i,null,{default:L(()=>[...n[3]||(n[3]=[x("ul",null,[x("li",null,"Template evolved iteratively from first CPU translations.")],-1)])]),_:1})]),_:1},16)}}};export{Zn as default};
