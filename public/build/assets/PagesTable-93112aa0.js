import{r as a,ai as c,j as e,L as t,R as x,p as h,C as r}from"./app-38275e8e.js";import{P as m}from"./PageBreadcrumbButton-a5b68f3c.js";import{T as o}from"./Table-4078cc83.js";import"./PageBreadcrumb-aeecf1f4.js";function j(){const[i,n]=a.useState([]);let l=document.head.querySelector('meta[name="csrf-token"]');return a.useEffect(()=>{c.get("/admin/fetch-pages").then(s=>{n(s.data)})},[]),e.jsxs(o,{responsive:!0,bordered:!0,hover:!0,className:"mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"Title"}),e.jsx("th",{children:"Url"}),e.jsx("th",{children:"status"}),e.jsx("th",{children:"Actions"})]})}),e.jsx("tbody",{children:i.map((s,d)=>e.jsxs("tr",{children:[e.jsx("td",{children:s.id}),e.jsx("td",{children:e.jsx(t,{to:"#!",className:"d-flex gap-3 align-items-center",children:e.jsx("div",{className:"flex-shrink-0",style:{flexShrink:0},children:e.jsx("div",{children:s.name})})})}),e.jsx("td",{children:e.jsx(t,{to:"#!",className:"d-flex gap-3 align-items-center",children:e.jsx("div",{className:"flex-shrink-0",style:{flexShrink:0},children:e.jsx("div",{children:s.slug})})})}),e.jsx("td",{children:e.jsx(t,{to:"#!",className:"d-flex gap-3 align-items-center",children:e.jsx("div",{className:"flex-shrink-0",style:{flexShrink:0},children:e.jsx("div",{children:s.status})})})}),e.jsx("td",{children:e.jsxs("form",{method:"post",action:"/admin/pages/"+s.id,children:[e.jsx("input",{type:"hidden",value:l.content,name:"_token"}),e.jsx("input",{type:"hidden",value:"DELETE",name:"_method"}),e.jsx(t,{to:"/admin/pages/"+s.id+"/edit",className:"btn px-0 py-0",children:e.jsx("span",{className:"badge bg-info ",children:e.jsx("i",{className:"fi fi-rr-edit"})})}),e.jsx("button",{type:"submit",className:"btn px-0 py-0",children:e.jsx("span",{className:"badge bg-info",children:e.jsx("i",{className:"fi fi-rr-trash"})})})]})})]},d))})]})}const b=()=>e.jsxs(e.Fragment,{children:[e.jsx(m,{title:"Manage Pages",subName:"Pages",url:"https://react-bootstrap.netlify.app/docs/components/table"}),e.jsx(x,{className:"g-3 g-md-4",children:e.jsx(h,{xs:12,children:e.jsxs(r,{children:[e.jsx(r.Header,{children:e.jsxs(r.Title,{children:["Pages ",e.jsxs(t,{to:"/admin/pages/create",className:"btn btn-primary float-end",children:[e.jsx("i",{className:"fi fi-rr-plus pe-1"})," Create"]})]})}),e.jsx(r.Body,{className:"p-0",children:e.jsx(j,{})})]})})})]});export{b as default};