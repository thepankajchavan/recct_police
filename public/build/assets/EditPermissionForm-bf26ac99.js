import{y as x,r,j as e,F as s,R as m,p as t,B as j,aO as p,C as n}from"./app-47b17f36.js";import{P as g}from"./PageBreadcrumbButton-9aff5d40.js";import"./PageBreadcrumb-c0dab2ca.js";const v=()=>{const{id:i}=x(),[d,l]=r.useState(""),[c,o]=r.useState("");let h=document.head.querySelector('meta[name="csrf-token"]');const u=()=>{p.get("/admin/fetch-permission/"+i).then(a=>{l(a.data.name),o(a.data.guard_name)})};return r.useEffect(()=>{u()},[]),e.jsx(e.Fragment,{children:e.jsxs(s,{method:"post",action:"/admin/permissions/"+i,children:[e.jsx(s.Control,{type:"hidden",name:"_method",value:"put"}),e.jsx(s.Control,{type:"hidden",name:"_token",value:h.content}),e.jsxs(m,{className:"gy-6 gy-sm-8 gy-md-6",children:[e.jsx(t,{lg:12,sm:12,children:e.jsxs(m,{children:[e.jsxs(t,{sm:6,className:"mt-3",children:[e.jsx(s.Label,{htmlFor:"name",children:"Name"}),e.jsx(s.Control,{type:"text",id:"name",placeholder:"Name",name:"name",value:d,onChange:a=>l(a.target.value)})]}),e.jsxs(t,{sm:6,className:"mt-3",children:[e.jsx(s.Label,{htmlFor:"gurardName",children:"Roles"}),e.jsxs(s.Select,{name:"guard_name","aria-label":"Default select example",id:"gurardName",value:c,onChange:a=>o(a.target.value),children:[e.jsx("option",{value:"admin",children:"Admin"}),e.jsx("option",{value:"web",children:"Web"}),e.jsx("option",{value:"sanctum",children:"Sanctum"})]})]})]})}),e.jsx(t,{sm:12,children:e.jsx(j,{type:"submit",variant:"primary",children:"Add User"})})]})]})})},b=()=>e.jsxs(e.Fragment,{children:[e.jsx(g,{title:"Edit Permission",subName:"Access Manger",url:"https://react-bootstrap.netlify.app/docs/forms/overview"}),e.jsx(m,{className:"g-3 g-md-4",children:e.jsx(t,{xs:12,children:e.jsxs(n,{children:[e.jsx(n.Header,{children:e.jsx(n.Title,{children:"Edit Permission"})}),e.jsx(n.Body,{children:e.jsx(v,{})})]})})})]});export{b as default};
