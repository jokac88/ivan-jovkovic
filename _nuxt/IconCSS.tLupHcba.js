import{v as l,a3 as f,$ as m,s as a,o as _,c as d,J as x,_ as z}from"./entry.NlUTZi7U.js";const S=l({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(r){f(e=>({afa8e042:u.value}));const n=m(),s=r,p=a(()=>{var e;return((((e=n.nuxtIcon)==null?void 0:e.aliases)||{})[s.name]||s.name).replace(/^i-/,"")}),u=a(()=>`url('https://api.iconify.design/${p.value.replace(":","/")}.svg')`),o=a(()=>{var t,c,i;if(!s.size&&typeof((t=n.nuxtIcon)==null?void 0:t.size)=="boolean"&&!((c=n.nuxtIcon)!=null&&c.size))return;const e=s.size||((i=n.nuxtIcon)==null?void 0:i.size)||"1em";return String(Number(e))===e?`${e}px`:e});return(e,t)=>(_(),d("span",{style:x({width:o.value,height:o.value})},null,4))}}),v=z(S,[["__scopeId","data-v-969fa019"]]);export{v as default};