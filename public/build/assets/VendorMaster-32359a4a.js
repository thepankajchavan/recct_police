import{k as d,l as c,m as h,n as m,o as x,j as e,L as t,R as o,p as j,C as l}from"./app-47b17f36.js";import{P as N}from"./PageBreadcrumbButton-9aff5d40.js";import{T as u}from"./Table-1db830d4.js";import"./PageBreadcrumb-c0dab2ca.js";const p=[{id:1,avatar:d,name:"Shri S M Autade Pvt Ltd",vehicles:89,machines:37,panNumber:"27SUJKE90279J",gstNumber:"27SUJKE90279J21A",address:"Pune",state:"Maharashtra",email:"smautade@gmail.com",contactNumber:"9902809290"},{id:2,avatar:c,name:"PRASHANT S PAIKEKAR - KA",vehicles:12,machines:2,panNumber:"29ABAFP0867B",gstNumber:"29ABAFP0867B1ZE",address:"PLOT NO.8-1-112-29E, HANABAR GALLI, NIPANI, BELGAVI -591237",state:"Karnataka",email:"mspspaikekar@gmail.com",contactNumber:"9422458588"},{id:3,avatar:h,name:"SUHAS SURESH PAWAR",vehicles:5,machines:3,panNumber:"27AMGPP0984N",gstNumber:"27AMGPP0984N1ZD",address:"SR NO. 16, PLOT 13, NEAR NISSAN SHOWROOM, P B ROAD, UJALAIWADI, KOLHAPUR - 416004",state:"Maharashtra",email:"sspawar@gmail.com",contactNumber:"9922636999"},{id:4,avatar:m,name:"Shri S M Autade Pvt Ltd",vehicles:89,machines:37,panNumber:"27SUJKE90279J",gstNumber:"27SUJKE90279J21A",address:"Ashiyana Park 2, Opp. Gaikwad Petrol Pump, Aundh, Pune",state:"Maharashtra",email:"smautade@gmail.com",contactNumber:"9902809290"},{id:5,avatar:x,name:"Shri S M Autade Pvt Ltd",vehicles:89,machines:37,panNumber:"27SUJKE90279J",gstNumber:"27SUJKE90279J21A",address:"Giriraj Housing Society, Sakal Nagar, Aundh, Pune",state:"Maharashtra",email:"smautade@gmail.com",contactNumber:"9902809290"}];function v(){function n(s){const i=[];let r=0;for(;r<s.length;){let a=r+25;a<s.length&&(a=s.lastIndexOf(" ",a),(a===-1||a<=r)&&(a=r+25)),i.push(s.slice(r,a).trim()),r=a+1}return i}return e.jsxs(u,{responsive:!0,bordered:!0,hover:!0,className:"mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Address"}),e.jsx("th",{children:"GST & PAN Details"}),e.jsx("th",{children:"Contact Details"})]})}),e.jsx("tbody",{children:(p||[]).map((s,i)=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(t,{to:"#!",children:e.jsxs("span",{className:"badge bg-info align-items-center gap-2 d-flex",children:[e.jsx("i",{className:"fi fi-rr-edit"}),s.id]})})}),e.jsx("td",{children:e.jsx(t,{to:"#!",className:"d-flex gap-3 align-items-center",children:e.jsxs("div",{className:"flex-shrink-0",style:{flexShrink:0},children:[e.jsx("div",{children:s.name}),e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[e.jsxs("span",{className:"badge m-1 bg-success",children:["Vehicles : ",s.vehicles]}),e.jsxs("span",{className:"badge m-1 bg-warning",children:["Machines: ",s.machines]})]})]})})}),e.jsx("td",{children:e.jsx("div",{className:"d-flex gap-2 align-items-center",children:e.jsxs("div",{className:"flex-shrink-0",style:{flexShrink:0},children:[e.jsx("div",{children:n(s.address).map((r,a)=>e.jsx("div",{children:r},a))}),e.jsx("div",{style:{display:"flex",flexDirection:"row"},children:e.jsx("div",{children:s.state})})]})})}),e.jsx("td",{children:e.jsx("div",{className:"d-flex gap-2 align-items-center",children:e.jsxs("div",{className:"flex-shrink-0",style:{flexShrink:0},children:[e.jsxs("div",{children:["GST No : ",s.gstNumber]}),e.jsx("div",{style:{display:"flex",flexDirection:"row"},children:e.jsxs("div",{children:["PAN No. : ",s.panNumber]})})]})})}),e.jsx("td",{children:e.jsx("div",{className:"d-flex gap-2 align-items-center",children:e.jsxs("div",{className:"flex-shrink-0",style:{flexShrink:0},children:[e.jsx("div",{children:s.email}),e.jsx("div",{style:{display:"flex",flexDirection:"row"},children:e.jsx("div",{children:s.contactNumber})})]})})})]},i))})]})}const S=()=>e.jsxs(e.Fragment,{children:[e.jsx(N,{title:"Vendor Master",subName:"Vendors",url:"https://react-bootstrap.netlify.app/docs/components/table"}),e.jsx(o,{className:"g-3 g-md-4",children:e.jsx(j,{xs:12,children:e.jsxs(l,{children:[e.jsx(l.Header,{children:e.jsx(l.Title,{children:"Vendor Master Table"})}),e.jsx(l.Body,{className:"p-0",children:e.jsx(v,{})})]})})})]});export{S as default};
