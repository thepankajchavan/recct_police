import{r as i,j as s,Q as d,bi as m,bj as c,F as a,B as u,L as h,t as x}from"./app-38275e8e.js";const p=()=>{const[t,n]=i.useState(""),[r,l]=i.useState(!1),o=async e=>{e.preventDefault(),l(!0),setTimeout(()=>{l(!1),x(()=>s.jsxs("span",{children:["🤖 Reset link sent to: ",s.jsx("span",{className:"fw-semibold text-black",children:t})]}))},2e3)};return s.jsxs(s.Fragment,{children:[s.jsx(d,{title:"Forgot Password"}),s.jsx(m,{children:s.jsxs(c,{children:[s.jsxs("div",{className:"mb-12",children:[s.jsx("h4",{className:"fw-bold mb-3",children:"Forgot Password"}),s.jsx("p",{className:"fs-16 lead",children:"If you forgot your password, well, then we'll email you instructions to reset your password."})]}),s.jsxs(a,{onSubmit:o,children:[s.jsx(a.Group,{className:"mb-3",children:s.jsx(a.Control,{type:"email",placeholder:"Email",value:t,onChange:e=>n(e.target.value),required:!0})}),s.jsx("div",{className:"d-grid gap-2 my-4",children:s.jsx(u,{variant:"primary",size:"lg",type:"submit",disabled:r,className:"text-white",children:r?s.jsxs(s.Fragment,{children:[s.jsx("span",{className:"spinner-border spinner-border-sm me-2",role:"status","aria-hidden":"true"}),"Loading..."]}):"Reset Password"})}),s.jsx("div",{children:s.jsx(h,{to:"/auth/minimal/login",className:"link-primary",children:"Return to login"})})]})]})})]})};export{p as default};