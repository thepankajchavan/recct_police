import{r as l,j as e,F as a,R as o,p as t,B as y,ai as N,C as n}from"./app-38275e8e.js";import{P as f}from"./PageBreadcrumbButton-a5b68f3c.js";import{R as w}from"./quill.snow-c3ad0552.js";import{T as m}from"./Toast-03b906d2.js";/* empty css                      */import"./PageBreadcrumb-aeecf1f4.js";import"./isEqual-6790a228.js";import"./_MapCache-d1ffa159.js";const k=()=>{const[i,h]=l.useState(""),[d,u]=l.useState(""),[x,p]=l.useState(!1),c="Success";document.head.querySelector('meta[name="csrf-token"]');const j=s=>{h(s)},g={toolbar:[[{header:[1,2,3,4,5,6]}],[{font:[]},{size:[]}],["bold","italic","underline","strike"],[{color:[]},{background:[]}],[{script:"super"},{script:"sub"}],["blockquote","code-block"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],["direction",{align:[]}],["link","image","video","formula"],["clean"]]},b=["header","bold","italic","underline","strike","blockquote","list","bullet","indent","link","image"],v=()=>{const s={title:d,body:i};N.post("/admin/news-and-events",s).then(r=>{r.data=="success"&&p(!0)}).catch(r=>{console.log(r)})};return e.jsxs(e.Fragment,{children:[x&&e.jsx(m,{className:"align-items-center border-0",children:e.jsx(m.Header,{className:`rounded-3 bg-${c.toLowerCase()}`,closeVariant:"white",children:e.jsx("h6",{className:"text-white mb-0 me-auto",children:"News and Event Updated Successfully"})})},c),e.jsx(a,{method:"post",action:"/admin/news-and-events",children:e.jsxs(o,{className:"gy-6 gy-sm-8 gy-md-6",children:[e.jsx(t,{lg:12,sm:12,children:e.jsxs(o,{children:[e.jsxs(t,{sm:6,className:"mt-3",children:[e.jsx(a.Label,{htmlFor:"name",children:"Title"}),e.jsx(a.Control,{type:"text",id:"name",placeholder:"Title",value:d,name:"title",onChange:s=>u(s.target.value)})]}),e.jsxs(t,{sm:12,className:"mt-2",children:[e.jsx(a.Label,{htmlFor:"gurardName",children:"Body"}),e.jsx("div",{className:"text-editor",style:{height:"240px"},children:e.jsx(w,{theme:"snow",modules:g,formats:b,value:i,onChange:j,style:{height:"200px"},placeholder:"Body"})})]})]})}),e.jsx(t,{sm:12,className:"mt-3",children:e.jsx(y,{type:"button",variant:"primary",onClick:()=>v(),children:"Save"})})]})})]})},q=()=>e.jsxs(e.Fragment,{children:[e.jsx(f,{title:"Add News and Events",subName:"News and Events",url:"https://react-bootstrap.netlify.app/docs/forms/overview"}),e.jsx(o,{className:"g-3 g-md-4",children:e.jsx(t,{xs:12,children:e.jsxs(n,{children:[e.jsx(n.Header,{children:e.jsx(n.Title,{children:"Add News and Events"})}),e.jsx(n.Body,{children:e.jsx(k,{})})]})})})]});export{q as default};
