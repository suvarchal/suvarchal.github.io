--- 
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
   - use cmake standard package discovery where possible: `FindCUDA` 
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
- Avoid use of nested derived types: `state%tendency%t`. 
- Avoid changing (dynamic) model state inside subroutines with `use module`. Prefer all inputs and outputs in subroutine signature and mark intents: functional style.
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
- Clean `.gitignore` and repository structure
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
</v-clicks>