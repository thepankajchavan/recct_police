import{r as t,aO as c,j as e,L as n,R as x,p as m,C as i}from"./app-47b17f36.js";import{P as h}from"./PageBreadcrumbButton-9aff5d40.js";import{T as o}from"./Table-1db830d4.js";import"./PageBreadcrumb-c0dab2ca.js";function j(){const[l,r]=t.useState([]);let a=document.head.querySelector('meta[name="csrf-token"]');return t.useEffect(()=>{c.get("/admin/fetch-menus").then(s=>{r(s.data)}).catch(s=>{console.log(s)})},[]),e.jsxs(o,{responsive:!0,bordered:!0,hover:!0,className:"mb-0",id:"myTable",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"Name"}),e.jsx("th",{children:"URL"}),e.jsx("th",{children:"Position"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Actions"})]})}),e.jsx("tbody",{children:(l||[]).map((s,d)=>e.jsxs("tr",{children:[e.jsx("td",{children:s.id}),e.jsx("td",{children:e.jsx(n,{to:"#!",className:"d-flex gap-3 align-items-center",children:e.jsx("div",{className:"flex-shrink-0",style:{flexShrink:0},children:e.jsx("div",{children:s.name})})})}),e.jsx("td",{children:e.jsx("div",{className:"d-flex gap-2 align-items-center",children:e.jsx("div",{className:"flex-shrink-0",style:{flexShrink:0},children:e.jsx(n,{to:s.url,children:e.jsx("i",{className:"fi fi-rr-link"})})})})}),e.jsx("td",{children:e.jsx("div",{className:"d-flex gap-2 align-items-center",children:e.jsx("div",{className:"flex-shrink-0",style:{flexShrink:0},children:e.jsx("div",{children:s.position})})})}),e.jsx("td",{children:e.jsx("div",{className:"d-flex gap-2 align-items-center",children:e.jsx("div",{className:"flex-shrink-0",style:{flexShrink:0},children:e.jsx("div",{className:s.status=="active"?"text-capitalize badge bg-success":"text-capitalize badge bg-danger",children:s.status})})})}),e.jsx("td",{children:e.jsxs("form",{method:"post",action:"/admin/admin-menus/"+s.id,children:[e.jsx("input",{type:"hidden",value:a.content,name:"_token"}),e.jsx("input",{type:"hidden",value:"DELETE",name:"_method"}),e.jsx(n,{to:"/admin/admin-menus/"+s.id+"/edit",className:"btn px-0 py-0",children:e.jsx("span",{className:"badge bg-info ",children:e.jsx("i",{className:"fi fi-rr-edit"})})}),e.jsx("button",{type:"submit",className:"btn px-0 py-0",children:e.jsx("span",{className:"badge bg-info",children:e.jsx("i",{className:"fi fi-rr-trash"})})})]})})]},d))})]})}const g=()=>e.jsxs(e.Fragment,{children:[e.jsx(h,{title:"Admin Menus",subName:"Admin Menus",url:"https://react-bootstrap.netlify.app/docs/components/table"}),e.jsx(x,{className:"g-3 g-md-4",children:e.jsx(m,{xs:12,children:e.jsxs(i,{children:[e.jsx(i.Header,{children:e.jsxs(i.Title,{children:["Permissions Table ",e.jsxs(n,{to:"/admin/admin-menus/create",className:"btn btn-primary float-end",children:[e.jsx("i",{className:"fi fi-rr-plus pe-1"})," Create"]})]})}),e.jsx(i.Body,{className:"p-0",children:e.jsx(j,{})})]})})})]});export{g as default};
