import{j as e,I as m,B as i,h as o,R as p,p as l,C as a}from"./app-47b17f36.js";import{P as h}from"./PageBreadcrumb-c0dab2ca.js";import{b as j}from"./bell-793717da.js";import{p as g}from"./banner-6fa506fb.js";import{A as u}from"./Alert-f9dc8e98.js";import{O as c,T as b,P as n}from"./OverlayTrigger-9ee275c7.js";const y=[{variant:"primary",dismissible:!0,closeVariant:"white",style:null},{variant:"primary",dismissible:!0,closeVariant:"white",style:{background:"linear-gradient(135deg, rgba(188, 26, 78, 1) 0%, rgba(0, 79, 230, 1) 100%)"}},{variant:"primary",dismissible:!0,closeVariant:"white",style:{background:`linear-gradient(135deg, rgba(188, 26, 78, 0.5) 0%, rgba(0, 79, 230, 0.5) 100%), url(${g}) no-repeat top center / cover`}}],N=()=>e.jsx(e.Fragment,{children:y.map((r,s)=>e.jsx(f,{...r},s))}),f=({variant:r,dismissible:s,closeVariant:d,style:x})=>e.jsx(u,{dismissible:s,variant:r,closeVariant:d,style:x??void 0,className:"text-bg-primary text-white",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx(m,{src:j,className:"rounded me-2"}),e.jsxs("div",{className:"flex-grow-1",children:[e.jsx("strong",{children:"Notify!"})," Lorem Ipsum is simply dummy text of the printing."]})]})}),t=[{variant:"primary"},{variant:"secondary"},{variant:"success"},{variant:"warning"},{variant:"danger"},{variant:"info"}],v=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"d-flex flex-wrap gap-8",children:t.map(({variant:r},s)=>e.jsxs(i,{variant:"",type:"button",className:`bg-${r}-subtle text-${r}`,children:["Notifications ",e.jsx("span",{className:`ms-2 badge bg-${r}`,children:"5+"})]},s))}),e.jsx("hr",{className:"my-6"}),e.jsx("div",{className:"d-flex flex-wrap gap-12",children:t.map(({variant:r},s)=>e.jsxs(i,{variant:"",type:"button",className:`bg-${r}-subtle text-${r} position-relative`,children:["Inbox",e.jsxs("span",{className:`position-absolute top-0 start-100 translate-middle badge rounded-pill bg-${r}`,children:["99+",e.jsx("span",{className:"visually-hidden",children:"unread messages"})]})]},s))}),e.jsx("hr",{className:"my-6"}),e.jsx("div",{className:"d-flex flex-wrap gap-12",children:t.map(({variant:r},s)=>e.jsxs(i,{variant:"",type:"button",className:`bg-${r}-subtle text-${r} position-relative`,children:["Profile",e.jsx("span",{className:`position-absolute top-0 start-100 translate-middle p-2 border border-light rounded-circle bg-${r}`,children:e.jsx("span",{className:"visually-hidden",children:"New alerts"})})]},s))})]}),w=()=>{const r=["Primary","Secondary","Success","Info","Warning","Danger"];return e.jsx(e.Fragment,{children:e.jsx(o,{direction:"horizontal",gap:1,className:"flex-wrap",children:r.map(s=>e.jsx(c,{overlay:e.jsxs(b,{id:`tooltip-${s}`,className:`tooltip-${s.toLowerCase()}`,children:["This top tooltip is themed via CSS variables. Tooltip on ",e.jsx("strong",{children:s}),"."]}),children:e.jsxs(i,{variant:"",className:`btn-${s.toLowerCase()}`,children:["Tooltip ",s]})},s))})})},$=()=>{const r=["Primary","Secondary","Success","Info","Warning","Danger"];return e.jsx(e.Fragment,{children:e.jsx(o,{direction:"horizontal",gap:1,className:"flex-wrap",children:r.map(s=>e.jsx(c,{overlay:e.jsxs(n,{id:`popover-${s}`,className:`popover-${s.toLowerCase()}`,children:[e.jsx(n.Header,{as:"h3",children:`Popover ${s}`}),e.jsxs(n.Body,{children:["And here's some amazing content. It's very engaging. Right?"," "]})]}),children:e.jsxs(i,{variant:"",className:`btn-${s.toLowerCase()}`,children:["Popover ",s]})},s))})})},A=()=>e.jsxs(e.Fragment,{children:[e.jsx(h,{title:"Miscellaneous",subName:"Base UI"}),e.jsxs(p,{className:"g-3 g-md-4",children:[e.jsx(l,{xs:12,children:e.jsxs(a,{children:[e.jsx(a.Header,{children:e.jsx(a.Title,{children:"Alert"})}),e.jsx(a.Body,{children:e.jsx(N,{})})]})}),e.jsx(l,{xs:12,children:e.jsxs(a,{children:[e.jsx(a.Header,{children:e.jsx(a.Title,{children:"Badge"})}),e.jsx(a.Body,{children:e.jsx(v,{})})]})}),e.jsx(l,{xs:12,children:e.jsxs(a,{children:[e.jsx(a.Header,{children:e.jsx(a.Title,{children:"Tooltip"})}),e.jsx(a.Body,{children:e.jsx(w,{})})]})}),e.jsx(l,{xs:12,children:e.jsxs(a,{children:[e.jsx(a.Header,{children:e.jsx(a.Title,{children:"Popover"})}),e.jsx(a.Body,{children:e.jsx($,{})})]})})]})]});export{A as default};