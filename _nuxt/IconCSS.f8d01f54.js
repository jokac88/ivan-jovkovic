import{v as l,a3 as _,$ as m,s as o,o as d,c as f,J as S,_ as v}from"./entry.31c85f8e.js";const x=l({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(r){_(e=>({daab4e22:u.value}));const n=m(),s=r,p=o(()=>{var e;return((((e=n.nuxtIcon)==null?void 0:e.aliases)||{})[s.name]||s.name).replace(/^i-/,"")}),u=o(()=>`url('https://api.iconify.design/${p.value.replace(":","/")}.svg')`),a=o(()=>{var t,c,i;if(!s.size&&typeof((t=n.nuxtIcon)==null?void 0:t.size)=="boolean"&&!((c=n.nuxtIcon)!=null&&c.size))return;const e=s.size||((i=n.nuxtIcon)==null?void 0:i.size)||"1em";return String(Number(e))===e?`${e}px`:e});return(e,t)=>(d(),f("span",{style:S({width:a.value,height:a.value})},null,4))}});const z=v(x,[["__scopeId","data-v-b20e5b10"]]);export{z as default};