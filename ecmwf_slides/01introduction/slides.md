---
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

</div>