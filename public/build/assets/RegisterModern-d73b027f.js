import{r as a,b5 as P,j as e,Q as L,bi as A,F as s,h as E,L as g,B as R,t as j}from"./app-47b17f36.js";import{A as T}from"./AuthModern-153fc12c.js";import"./LogoWhite-51191201.js";const b=o=>{const i="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~@#$%^&*(){}[]";let r="";for(let l=0;l<o;l++){const n=Math.floor(Math.random()*i.length);r+=i.charAt(n)}return r},I=()=>{const[o,i]=a.useState(""),[r,l]=a.useState(""),[n,d]=a.useState(b(0)),[m,y]=a.useState(""),[c,f]=a.useState(!1),[h,C]=a.useState(!1),[u,w]=a.useState(!1),[p,x]=a.useState(!1),v=P(),k=()=>{d(b(16))},N=()=>{f(!c)},S=t=>{if(t.preventDefault(),n!==m){j.error("Passwords do not match");return}x(!0),setTimeout(()=>{x(!1),j.success("Register successful!"),setTimeout(()=>{v("/auth/modern/register-success",{state:{username:o,email:r,password:n}})},1500)},2e3)};return e.jsxs(e.Fragment,{children:[e.jsx(L,{title:"Register Modern"}),e.jsx(A,{children:e.jsxs(T,{children:[e.jsxs("div",{className:"mb-12",children:[e.jsx("h4",{className:"fw-bold mb-3",children:"Create an Account"}),e.jsx("p",{className:"fs-16 lead",children:"Let's get you all set up, so you can verify your personal account and begin setting up your profile."})]}),e.jsxs(s,{onSubmit:S,children:[e.jsx(s.Group,{className:"mb-3",children:e.jsx(s.Control,{type:"text",placeholder:"Username",value:o,onChange:t=>i(t.target.value),required:!0})}),e.jsx(s.Group,{className:"mb-3",children:e.jsx(s.Control,{type:"email",placeholder:"Email",value:r,onChange:t=>l(t.target.value),required:!0})}),e.jsxs(s.Group,{className:"mb-3 position-relative",children:[e.jsx(s.Control,{type:c?"text":"password",placeholder:"Password",value:n,onChange:t=>d(t.target.value),required:!0}),e.jsx("span",{className:"btn btn-icon position-absolute translate-middle top-50",style:{right:"1rem"},onClick:N,children:e.jsx("i",{className:`fi ${c?"fi-rr-eye-crossed":"fi-rr-eye"}`})}),e.jsx("span",{className:"btn btn-icon position-absolute translate-middle top-50",style:{right:"-1rem"},onClick:k,children:e.jsx("i",{className:"fi fi-rr-magic-wand"})})]}),e.jsx(s.Group,{className:"mb-3",children:e.jsx(s.Control,{type:c?"text":"password",placeholder:"Confirm password",value:m,onChange:t=>y(t.target.value),required:!0})}),e.jsxs(E,{gap:2,className:"text-start mt-4",children:[e.jsxs(s.Check,{type:"checkbox",id:"check-api-community-email",children:[e.jsx(s.Check.Input,{type:"checkbox",checked:h,onChange:()=>C(!h)}),e.jsx(s.Check.Label,{children:"Yes, I wnat to receive window community emails"})]}),e.jsxs(s.Check,{type:"checkbox",id:"check-api-terms-conditions",children:[e.jsx(s.Check.Input,{type:"checkbox",checked:u,onChange:()=>w(!u),required:!0}),e.jsxs(s.Check.Label,{children:["I agree to all the"," ",e.jsx(g,{to:"/other-pages/terms-services",children:"Terms & Conditions"})," and Fees."]})]})]}),e.jsx("div",{className:"d-grid gap-2 my-4",children:e.jsx(R,{variant:"primary",size:"lg",type:"submit",disabled:p,className:"text-white",children:p?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"spinner-border spinner-border-sm me-2",role:"status","aria-hidden":"true"}),"Loading..."]}):"Register"})}),e.jsxs("div",{children:["Already have an account? ",e.jsx(g,{to:"/auth/modern/login",children:"Login"})]})]})]})})]})};export{I as default};
