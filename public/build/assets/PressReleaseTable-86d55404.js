import{r as i,ai as o,j as e,L as h,F as s,R as l,p as r,B as x,C as n}from"./app-38275e8e.js";import{P as j}from"./PageBreadcrumbButton-a5b68f3c.js";import{T as p}from"./Table-4078cc83.js";import"./quill.snow-c3ad0552.js";/* empty css                      */import"./PageBreadcrumb-aeecf1f4.js";import"./isEqual-6790a228.js";import"./_MapCache-d1ffa159.js";function u(){const[a,d]=i.useState([]);let m=document.head.querySelector('meta[name="csrf-token"]');return i.useEffect(()=>{o.get("/admin/fetch-press-releases").then(t=>{d(t.data)})},[]),e.jsxs(p,{responsive:!0,bordered:!0,hover:!0,className:"mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Actions"})]})}),e.jsx("tbody",{children:a.map((t,c)=>e.jsxs("tr",{children:[e.jsx("td",{children:t.id}),e.jsx("td",{children:e.jsx(h,{to:"#!",className:"d-flex gap-3 align-items-center",children:e.jsx("div",{className:"flex-shrink-0",style:{flexShrink:0},children:e.jsx("div",{children:t.name})})})}),e.jsx("td",{children:e.jsxs("form",{method:"post",action:"/admin/press-release/"+t.id,children:[e.jsx("input",{type:"hidden",value:m.content,name:"_token"}),e.jsx("input",{type:"hidden",value:"DELETE",name:"_method"}),e.jsx("button",{type:"submit",className:"btn px-0 py-0",children:e.jsx("span",{className:"badge bg-info",children:e.jsx("i",{className:"fi fi-rr-trash"})})})]})})]},c))})]})}const f=()=>{let a=document.head.querySelector('meta[name="csrf-token"]');return e.jsx(e.Fragment,{children:e.jsxs(s,{method:"post",action:"/admin/press-release",enctype:"multipart/form-data",children:[e.jsx(s.Control,{type:"hidden",name:"_token",value:a.content}),e.jsxs(l,{className:"gy-6 gy-sm-8 gy-md-6",children:[e.jsx(r,{sm:6,children:e.jsxs(l,{children:[e.jsxs(r,{sm:12,className:"mt-3",children:[e.jsx(s.Label,{htmlFor:"name",children:"Name"}),e.jsx(s.Control,{type:"text",id:"name",placeholder:"Name",name:"name"})]}),e.jsxs(r,{sm:12,className:"mt-3",children:[e.jsx(s.Label,{htmlFor:"pfile",children:"Upload Document(PDF Only)"}),e.jsx(s.Control,{type:"file",name:"pfile",id:"pfile"})]})]})}),e.jsx(r,{sm:12,children:e.jsx(x,{type:"submit",variant:"primary",children:"Save"})})]})]})})},R=()=>e.jsxs(e.Fragment,{children:[e.jsx(j,{title:"Press Release",subName:"",url:"https://react-bootstrap.netlify.app/docs/components/table"}),e.jsx(l,{className:"g-3 g-md-4",children:e.jsx(r,{xs:12,children:e.jsxs(n,{children:[e.jsx(n.Header,{children:e.jsx(n.Title,{children:"Press Release"})}),e.jsxs(n.Body,{children:[e.jsx(f,{}),e.jsx(u,{})]})]})})})]});export{R as default};