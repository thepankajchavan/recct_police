import{r as i,aO as c,j as e,L as l,R as o,p as x,C as r}from"./app-47b17f36.js";import{P as h}from"./PageBreadcrumbButton-9aff5d40.js";import{T as m}from"./Table-1db830d4.js";import"./PageBreadcrumb-c0dab2ca.js";function j(){const[t,n]=i.useState([]);let a=document.head.querySelector('meta[name="csrf-token"]');return i.useEffect(()=>{c.get("/admin/fetch-roles").then(s=>{console.log(s.data),n(s.data)}).catch(s=>{console.log(s)})},[]),e.jsxs(m,{responsive:!0,bordered:!0,hover:!0,className:"mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Gaurd Name"}),e.jsx("th",{children:"Created At"}),e.jsx("th",{children:"Actions"})]})}),e.jsx("tbody",{children:(t||[]).map((s,d)=>e.jsxs("tr",{children:[e.jsx("td",{children:s.id}),e.jsx("td",{children:e.jsx(l,{to:"#!",className:"d-flex gap-3 align-items-center",children:e.jsx("div",{className:"flex-shrink-0",style:{flexShrink:0},children:e.jsx("div",{children:s.name})})})}),e.jsx("td",{children:e.jsx("div",{className:"d-flex gap-2 align-items-center",children:e.jsx("div",{className:"flex-shrink-0",style:{flexShrink:0},children:e.jsx("div",{style:{display:"flex",flexDirection:"row"},children:e.jsx("div",{children:s.guard_name})})})})}),e.jsx("td",{children:e.jsx("div",{className:"d-flex gap-2 align-items-center",children:e.jsx("div",{className:"flex-shrink-0",style:{flexShrink:0},children:e.jsx("div",{children:s.created_at.split("T")[0]})})})}),e.jsx("td",{children:e.jsxs("form",{method:"post",action:"/admin/roles/"+s.id,children:[e.jsx("input",{type:"hidden",value:a.content,name:"_token"}),e.jsx("input",{type:"hidden",value:"DELETE",name:"_method"}),e.jsx(l,{to:"/admin/roles/"+s.id+"/edit",className:"btn px-0 py-0",children:e.jsx("span",{className:"badge bg-info ",children:e.jsx("i",{className:"fi fi-rr-edit"})})}),e.jsx("button",{type:"submit",className:"btn px-0 py-0",children:e.jsx("span",{className:"badge bg-info",children:e.jsx("i",{className:"fi fi-rr-trash"})})})]})})]},d))})]})}const N=()=>e.jsxs(e.Fragment,{children:[e.jsx(h,{title:"Access Manager",subName:"Roles",url:"https://react-bootstrap.netlify.app/docs/components/table"}),e.jsx(o,{className:"g-3 g-md-4",children:e.jsx(x,{xs:12,children:e.jsxs(r,{children:[e.jsx(r.Header,{children:e.jsxs(r.Title,{children:["Roles Table ",e.jsxs(l,{to:"/admin/roles/create",className:"btn btn-primary float-end",children:[e.jsx("i",{className:"fi fi-rr-plus pe-1"})," Create"]})]})}),e.jsx(r.Body,{className:"p-0",children:e.jsx(j,{})})]})})})]});export{N as default};