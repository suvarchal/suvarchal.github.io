import{H as e,S as t,St as n,b as r,bt as i,k as a,nt as o,q as s,tt as c,w as l,y as u}from"./modules/shiki-XBGRp0zD.js";import{H as d,V as f}from"./useNav-D7UxqsAa.js";import{t as p}from"./two-cols-BZ56XIlG.js";var m=`/km-scale-summit/assets/HPL_HPCG-CPbNP4Xz.png`,h=`/km-scale-summit/assets/HPL_HPCG_efficiency-ClpFzxqz.png`,g={class:`relative w-full mt-6`},_={src:m,class:`w-full`},v={src:h,class:`w-full absolute top-0 left-0`},y={class:`absolute bottom-32 left-12 right-12 grid grid-cols-2 gap-10`},b={class:`font-bold`},x={class:`font-bold`},S={class:`absolute bottom-12 left-12 right-12 text-center text-red-700 font-bold`},C={__name:`slides.md__slidev_4`,setup(m){let{$slidev:h,$nav:C,$clicksContext:w,$clicks:T,$page:E,$renderContext:D,$frontmatter:O}=d();return w.setup(),(d,m)=>{let h=s(`click`);return e(),r(p,n(a(i(f)(i(O),3))),{right:c(n=>[m[3]||=u(`div`,{class:`flex flex-col justify-center h-full gap-12`},[u(`pre`,{class:`font-mono text-[0.72rem] leading-tight`},`Dense matrix        Main hardware demand
┌─────────────┐
│█████████████│     Many floating-point ops
│█████████████│ ──▶ Matrix–matrix multiply
│█████████████│     High reuse of data
│█████████████│     Compute throughput
└─────────────┘
`),u(`pre`,{class:`font-mono text-[0.72rem] leading-tight`},`Sparse matrix       Main hardware demand
┌─────────────┐
│█ · · █ · · ·│     Memory bandwidth
│· █ █ · · · ·│ ──▶ Irregular data access
│· █ · █ · · ·│     Global reductions
│· · █ · █ · ·│     Inter-node communication
└─────────────┘
`)],-1),u(`div`,y,[o((e(),t(`div`,b,[...m[0]||=[l(` How much of peak performance we can extract depends on the problem — all kernels of climate models are inevitably memory-bound. `,-1)]])),[[h,2]]),o((e(),t(`div`,x,[...m[1]||=[l(` An emerging new constraint: climate simulations must also be power-efficient. `,-1)]])),[[h,3]])]),o((e(),t(`div`,S,[...m[2]||=[l(` Even if we fully exploit the hardware-portability lever, we will still be disappointed — a climate model's efficiency in utilizing GPUs will remain low. `,-1)]])),[[h,4]])]),default:c(()=>[u(`div`,g,[o(u(`img`,_,null,512),[[h,1,void 0,{hide:!0}]]),o(u(`img`,v,null,512),[[h,1]])])]),_:1},16)}}};export{C as default};