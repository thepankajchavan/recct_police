import{r as o,b5 as g,j as e,Q as b,bi as y,h as d,L as N,F as m,B as T,t as a}from"./app-47b17f36.js";import{A as v}from"./AuthCorporate-c7411fdb.js";const P=()=>{const[l,c]=o.useState(!1),[r,h]=o.useState(Array(6).fill("")),[i,u]=o.useState(0),p=g(),x=async t=>{t.preventDefault(),r.every(s=>s!=="")?r.join("")==="123456"?(c(!0),setTimeout(()=>{c(!1),a.success("Verification successful!"),setTimeout(()=>{p("/")},3e3)},1e3)):a.error("Incorrect OTP. Please try again."):a.error("Please fill in all OTP digits.")},j=(t,s)=>{if(/^[0-9]$/.test(s)){const n=[...r];n[t]=s,h(n)}},f=()=>{i<2?(u(t=>t+1),a.success("New OTP sent!")):a.error("Resend limit reached. Please wait.")};return e.jsxs(e.Fragment,{children:[e.jsx(b,{title:"Verify OTP Corporate"}),e.jsx(y,{children:e.jsxs(v,{children:[e.jsxs("div",{className:"mb-12",children:[e.jsx("h4",{className:"fw-bold mb-3",children:"Two Step Verify (OTP)"}),e.jsx("p",{className:"fs-16 lead",children:"Please enter the code generated one-time password to verify your account ownership."})]}),e.jsxs(d,{direction:"horizontal",className:"mb-12",children:[e.jsxs("p",{className:"mb-0",children:[e.jsx("span",{className:"fw-medium mb-1 d-block",children:"A code has been sent to: "}),e.jsx("strong",{children:"+1(375)*****9897"})]}),e.jsx(N,{to:"#!",className:"ms-auto link-primary badge fs-11 bg-secondary-subtle",children:"Change Methord"})]}),e.jsxs(m,{onSubmit:x,children:[e.jsx(m.Text,{className:"text-muted",children:"Use Code: 123456"}),e.jsx(d,{direction:"horizontal",gap:2,className:"flex-row justify-content-center mt-2",children:r.map((t,s)=>e.jsx("input",{className:"text-center form-control rounded",type:"text",maxLength:1,value:t,onChange:n=>j(s,n.target.value),required:!0},s))}),e.jsx("div",{className:"d-grid gap-2 my-4",children:e.jsx(T,{variant:"primary",size:"lg",type:"submit",disabled:l,className:"text-white",children:l?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"spinner-border spinner-border-sm me-2",role:"status","aria-hidden":"true"}),"Validating..."]}):"Validate"})}),e.jsxs("div",{className:"mt-5 text-muted",children:[e.jsx("span",{children:"Didn't get the code "}),i<3&&e.jsxs("a",{href:"javascript:void(0);",onClick:f,children:["Resend (",i+1,"/3)"]})]})]})]})})]})};export{P as default};