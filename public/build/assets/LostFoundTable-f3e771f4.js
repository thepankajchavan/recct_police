import{r as i,ai as h,j as e,L as n,M as d,B as f,R as N,p as g,C as l}from"./app-38275e8e.js";import{P as y}from"./PageBreadcrumbButton-a5b68f3c.js";import{T as b}from"./Table-4078cc83.js";import"./PageBreadcrumb-aeecf1f4.js";function v(){const[x,o]=i.useState([]),[t,j]=i.useState(),[m,c]=i.useState(!1),a=()=>c(!1),p=s=>{h.get("/admin/fetch-report/"+s).then(r=>{j(r.data),console.log(r.data),c(!0)})};let u=document.head.querySelector('meta[name="csrf-token"]');return i.useEffect(()=>{h.get("/admin/fetch-reports").then(s=>{o(s.data)})},[]),e.jsxs(e.Fragment,{children:[e.jsxs(b,{responsive:!0,bordered:!0,hover:!0,className:"mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Full Name"}),e.jsx("th",{children:"Contact No."}),e.jsx("th",{children:"Report Type"}),e.jsx("th",{children:"Station Name"}),e.jsx("th",{children:"Document Name"}),e.jsx("th",{children:"Document Number"}),e.jsx("th",{children:"Date/Time"}),e.jsx("th",{children:"Action"})]})}),e.jsx("tbody",{children:x.map((s,r)=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n,{to:"#!",className:"d-flex gap-3 align-items-center",children:e.jsx("div",{className:"flex-shrink-0",style:{flexShrink:0},children:e.jsx("div",{children:s.name})})})}),e.jsx("td",{children:e.jsx(n,{to:"#!",className:"d-flex gap-3 align-items-center",children:e.jsx("div",{className:"flex-shrink-0",style:{flexShrink:0},children:e.jsx("div",{children:s.contact})})})}),e.jsx("td",{children:e.jsx(n,{to:"#!",className:"d-flex gap-3 align-items-center",children:e.jsx("div",{className:"flex-shrink-0",style:{flexShrink:0},children:e.jsx("div",{children:s.report_type})})})}),e.jsx("td",{children:e.jsx(n,{to:"#!",className:"d-flex gap-3 align-items-center",children:e.jsx("div",{className:"flex-shrink-0",style:{flexShrink:0},children:e.jsx("div",{children:s.police_station_name})})})}),e.jsx("td",{children:e.jsx(n,{to:"#!",className:"d-flex gap-3 align-items-center",children:e.jsx("div",{className:"flex-shrink-0",style:{flexShrink:0},children:e.jsx("div",{children:s.document_name})})})}),e.jsx("td",{children:e.jsx(n,{to:"#!",className:"d-flex gap-3 align-items-center",children:e.jsx("div",{className:"flex-shrink-0",style:{flexShrink:0},children:e.jsx("div",{children:s.document_number})})})}),e.jsx("td",{children:e.jsx("div",{className:"d-flex gap-2 align-items-center",children:e.jsx("div",{className:"flex-shrink-0",style:{flexShrink:0},children:e.jsx("div",{style:{display:"flex",flexDirection:"row"},children:e.jsx("div",{children:s.datetime})})})})}),e.jsx("td",{children:e.jsxs("form",{method:"post",action:"/admin/police-station/"+s.id,children:[e.jsx("input",{type:"hidden",value:u.content,name:"_token"}),e.jsx("input",{type:"hidden",value:"DELETE",name:"_method"}),e.jsx("button",{type:"button",className:"btn px-0 py-0",onClick:()=>p(s.id),children:e.jsx("span",{className:"badge bg-info",children:e.jsx("i",{className:"fi fi-rr-eye"})})}),e.jsx("button",{type:"submit",className:"btn px-0 py-0",children:e.jsx("span",{className:"badge bg-info",children:e.jsx("i",{className:"fi fi-rr-trash"})})})]})})]},r))})]}),e.jsxs(d,{show:m,onHide:a,children:[e.jsx(d.Header,{closeButton:!0,children:e.jsx(d.Title,{children:"Lost and Found Report"})}),e.jsx(d.Body,{children:t&&e.jsx("table",{children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Report Type"}),e.jsxs("td",{children:[":  ",t.report_type," "]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Article Type"}),e.jsxs("td",{children:[":  ",t.document_name," "]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Police Station"}),e.jsxs("td",{children:[":  ",t.police_station_name," "]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Lost / Found Date & Time"}),e.jsxs("td",{children:[":  ",t.datetime," "]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Full Name"}),e.jsxs("td",{children:[":  ",t.name," "]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"E-mail ID"}),e.jsxs("td",{children:[":  ",t.email," "]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Contact Number"}),e.jsxs("td",{children:[":  ",t.contact," "]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Address"}),e.jsxs("td",{children:[":  ",t.address," "]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Pin code"}),e.jsxs("td",{children:[":  ",t.pincode," "]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Aadhar Card No"}),e.jsxs("td",{children:[":  ",t.document_number," "]})]})]})})}),e.jsx(d.Footer,{children:e.jsx(f,{variant:"soft-danger",onClick:a,children:"Close"})})]})]})}const F=()=>e.jsxs(e.Fragment,{children:[e.jsx(y,{title:"Lost and Found",subName:"",url:"https://react-bootstrap.netlify.app/docs/components/table"}),e.jsx(N,{className:"g-3 g-md-4",children:e.jsx(g,{xs:12,children:e.jsxs(l,{children:[e.jsx(l.Header,{children:e.jsx(l.Title,{children:"Lost and Found "})}),e.jsx(l.Body,{className:"p-0",children:e.jsx(v,{})})]})})})]});export{F as default};
