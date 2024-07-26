import{j as s,R as h,p as a,C as c,h as l,B as i,e as n,A as b,k as N,l as v,m as y,n as w,o as B,G as D,H as P,I as A,s as k,L as x,Q as M}from"./app-47b17f36.js";import{A as S}from"./AccountSettingsNav-8e021cf9.js";import{S as I}from"./Saving-7451269c.js";import{P as R}from"./ProgressBar-643daf4d.js";import{m as p,p as T,b as U}from"./bank-b98f4657.js";import{P as u}from"./Pagination-b3b832b4.js";import{T as $}from"./Table-1db830d4.js";import"./index.esm-2eb557eb.js";import"./colors-3635ad60.js";import"./Spinner-f49df9c3.js";const z=[N,v,y,w,B,D,P],L=e=>e.map((r,t)=>s.jsx(b,{type:"image",src:r,alt:`User Avatar ${t+1}`,className:"avatar avatar-md"},t)),C=()=>s.jsx(s.Fragment,{children:s.jsxs(h,{className:"g-4",children:[s.jsxs(a,{md:3,children:[s.jsx("h5",{className:"fw-semibold",children:"Subscription"}),s.jsx("p",{children:"Manage your subscription plan."})]}),s.jsxs(a,{md:9,xl:8,xxl:6,children:[s.jsxs(c,{className:"mb-4",children:[s.jsxs(c.Body,{children:[s.jsxs("div",{className:"d-md-flex align-items-center",children:[s.jsxs("div",{children:[s.jsxs(l,{direction:"horizontal",className:"mb-2",children:[s.jsx("h5",{className:"mb-0",children:"Basic plan"}),s.jsx("div",{children:s.jsxs(l,{direction:"horizontal",className:"fs-12 px-2 ms-2 border border-success bg-success-subtle rounded-pill",children:[s.jsx("span",{className:"d-block bg-success rounded-circle",style:{width:"0.25rem",height:"0.25rem"}}),s.jsx("span",{className:"ms-1 text-success",children:"Active"})]})})]}),s.jsx("p",{className:"mb-1",children:"Our most popular plan for small teams."}),s.jsxs("p",{children:["Active until ",s.jsx("span",{className:"fw-semibold",children:"Dec 09, 2024"})]})]}),s.jsxs("div",{className:"ms-auto text-dark ",children:[s.jsx("span",{className:"fs-24 fw-semibold",children:"$"}),s.jsx("span",{className:"display-6 fw-bold",children:"20"}),s.jsx("span",{children:"/per month"})]})]}),s.jsxs("div",{className:"d-md-flex align-items-center mt-4",children:[s.jsx("div",{className:"avatar-group avatar-group-md",children:L(z)}),s.jsx("span",{className:"vr mx-3 bg-secondary-subtle"}),s.jsxs("div",{className:"w-100",children:[s.jsx("span",{className:"d-block mb-1",children:"7 of 10 Users"}),s.jsx(R,{now:78,className:"w-100  rounded",style:{height:"5px"}})]})]})]}),s.jsxs(c.Footer,{className:"py-3 text-end",children:[s.jsx(i,{variant:"",className:"text-danger me-2",children:"Cancel"}),s.jsxs(i,{variant:"neutral",children:["Upgrade plan ",s.jsx("i",{className:"fi fi-rr-arrow-up-right-from-square fs-14 ms-2"})]})]})]}),s.jsxs(n,{children:[s.jsxs(n.Item,{className:"d-sm-flex align-items-center justify-content-between gap-4",children:[s.jsx("div",{children:"Payment method"}),s.jsxs("div",{className:"d-sm-flex align-items-center gap-4",children:[s.jsxs("div",{children:[s.jsx("p",{className:"fs-12 fw-medium mb-1",children:"Mastercard - 03/26"}),s.jsx("p",{className:"mb-1",children:"**** **** **** 9632"})]}),s.jsxs(i,{variant:"neutral",className:"mt-1 mt-sm-0",children:["Update ",s.jsx("i",{className:"fi fi-rr-arrow-up-right-from-square fs-14 ms-2"})]})]})]}),s.jsxs(n.Item,{className:"d-sm-flex align-items-center justify-content-between gap-4",children:[s.jsx("div",{children:"Billing period"}),s.jsx(l,{direction:"horizontal",gap:4,children:s.jsxs("div",{className:"d-sm-flex align-items-center gap-4",children:[s.jsx("p",{className:"fw-medium mb-1",children:"Plan billed monthly"}),s.jsxs(i,{variant:"neutral",className:"mt-1 mt-sm-0",children:["Update ",s.jsx("i",{className:"fi fi-rr-arrow-up-right-from-square fs-14 ms-2"})]})]})})]}),s.jsxs(n.Item,{className:"d-sm-flex align-items-center justify-content-between gap-4",children:[s.jsx("div",{children:"License keys"}),s.jsx(l,{direction:"horizontal",gap:4,children:s.jsxs("div",{className:"d-sm-flex align-items-center gap-4",children:[s.jsx("p",{className:"fw-medium mb-1",children:"Redeem a license key"}),s.jsxs(i,{variant:"neutral",className:"mt-1 mt-sm-0",children:["Redeem ",s.jsx("i",{className:"fi fi-rr-arrow-up-right-from-square fs-14 ms-2"})]})]})})]})]})]})]})}),F="/build/assets/bank-b21e9303.svg",H=[{image:p,name:"Mastercard",number:"- 9632",expireDate:"03/2026",ifDefault:!0},{image:F,name:"Visa",number:"- 2587",expireDate:"06/2025",ifDefault:!1},{image:T,name:"Paypal",number:" - 2.5%",lastUsed:"26 March, 2023",ifDefault:!1},{image:U,name:"BankTransfer",number:" - 5%",lastUsed:"26 March, 2023",ifDefault:!1},{image:p,name:"Mastercard",number:"- 8796",expireDate:"02/2023",ifDefault:!1}],q=()=>{const e=()=>H.map(({name:r,image:t,number:o,expireDate:m,lastUsed:d,ifDefault:j},f)=>s.jsxs(n.Item,{className:"d-sm-flex align-items-center justify-content-between gap-4",children:[s.jsxs("div",{className:"d-sm-flex align-items-center gap-4",children:[s.jsx("div",{className:"mb-3 mb-sm-0",style:{width:"2rem",height:"2rem"},children:s.jsx(A,{src:t,alt:r,className:"img-fluid"})}),s.jsxs("div",{className:"radio-card-content",children:[s.jsxs("h6",{className:"fw-semibold mb-1",children:[r," ending in ",o]}),m&&s.jsxs("span",{className:"text-muted",children:["Expire date: ",s.jsx("span",{className:"fw-medium",children:m})]}),d&&s.jsxs("span",{className:"text-muted",children:["Last time used: ",s.jsx("span",{className:"fw-medium",children:d})]})]})]}),s.jsxs(l,{direction:"horizontal",className:"gap-4 mt-3 mt-sm-0",children:[j&&s.jsx(k,{bg:"success",children:"Default"}),!j&&s.jsx(x,{to:"#!",className:"text-primary",children:"Set as default"}),s.jsx(x,{to:"#!",children:s.jsx("i",{className:"fi fi-rr-trash text-danger"})})]})]},f));return s.jsxs(h,{className:"g-4 mb-4",children:[s.jsxs(a,{md:3,children:[s.jsx("h5",{className:"fw-semibold",children:"Payment Method"}),s.jsx("p",{children:"You can update your cards information here"})]}),s.jsxs(a,{md:9,xl:8,xxl:6,children:[s.jsx(n,{className:"mb-3",children:e()}),s.jsxs(i,{variant:"neutral",children:[s.jsx("i",{className:"fi fi-rr-plus"}),s.jsx("span",{className:"ms-3",children:"New payment method"})]})]})]})},V=2,g=[];for(let e=1;e<=5;e++)g.push(s.jsx(u.Item,{active:e===V,children:e},e));const E=[{reference:"#741258",product:"Bootstrap Admin Dashboard",status:'<span class="badge bg-success-subtle text-success">Paid</span>',date:"01/06/2023",amount:"$59.00"},{reference:"#258963",product:"Dashboard & Webapps Template",status:'<span class="badge bg-warning-subtle text-warning">Pending</span>',date:"02/07/2023",amount:"$99.00"},{reference:"#644789",product:"Window Admin Dashboard",status:'<span class="badge bg-success-subtle text-success">Paid</span>',date:"03/07/2023",amount:"$29.00"},{reference:"#854789",product:"React Admin Dashboard",status:'<span class="badge bg-danger-subtle text-danger">Reject</span>',date:"04/08/2023",amount:"$49.00"},{reference:"#357895",product:"React Typescript Dashboard",status:'<span class="badge bg-success-subtle text-success">Paid</span>',date:"04/09/2023",amount:"$39.00"}],G=()=>s.jsx(s.Fragment,{children:s.jsxs(h,{className:"g-4 mb-4",children:[s.jsxs(a,{md:3,children:[s.jsx("h5",{className:"fw-semibold",children:"Billing History"}),s.jsx("p",{children:"View your previos billing history."})]}),s.jsxs(a,{md:9,children:[s.jsxs($,{size:"lg",borderless:!0,responsive:!0,children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Reference"}),s.jsx("th",{children:"product"}),s.jsx("th",{children:"Status"}),s.jsx("th",{children:"Date"}),s.jsx("th",{className:"text-end",children:"Amount"})]})}),s.jsx("tbody",{children:(E||[]).map(({reference:e,product:r,date:t,status:o,amount:m},d)=>s.jsxs("tr",{children:[s.jsx("td",{children:s.jsxs(x,{to:"#!",className:"fw-semibold text-primary",children:["INV-",e]})}),s.jsx("td",{children:s.jsx(x,{to:"#!",className:"fw-medium",children:r})}),s.jsx("td",{children:s.jsx("span",{dangerouslySetInnerHTML:{__html:o}})}),s.jsx("td",{className:"text-end",children:t}),s.jsx("td",{className:"text-end fs-15 fw-semibold",children:m})]},d))})]}),s.jsx(u,{className:"mt-3",children:g})]})]})}),W=()=>s.jsx(s.Fragment,{children:s.jsx(c,{children:s.jsxs(c.Body,{children:[s.jsx(C,{}),s.jsx("hr",{className:"my-6 my-md-12"}),s.jsx(q,{}),s.jsx("hr",{className:"my-6 my-md-12"}),s.jsxs(h,{className:"g-md-4 mb-md-4",children:[s.jsx(a,{md:3}),s.jsx(a,{md:9,xl:8,xxl:6,children:s.jsx(I,{message:"Updated successfully"})})]}),s.jsx("hr",{className:"my-6 my-md-12"}),s.jsx(G,{})]})})}),as=()=>s.jsxs(s.Fragment,{children:[s.jsx(M,{title:"Billing"}),s.jsx(S,{}),s.jsx(W,{})]});export{as as default};
