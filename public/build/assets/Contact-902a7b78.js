import{r as m,x as K,j as e,M as q,F as s,R as S,p as i,L as H,B as P,t as B,h as I,P as J,e as W,A as X,v as ae,D as C,E as M,l as se,m as te,n as ne,o as ie,G as re,H as le,J as oe,K as ce,O as de,Q as me,C as he,U as xe}from"./app-47b17f36.js";import{S as ue}from"./sweetalert2.all-c26fd2ab.js";import{F as pe}from"./index.esm-d45be9b7.js";import{O as V,T as Y}from"./OverlayTrigger-9ee275c7.js";import{S as Q}from"./react-select.esm-1c30f25b.js";import{a as ge}from"./11-c269bb37.js";import"./iconBase-2c8ddb00.js";import"./createSuper-5c7688f9.js";import"./hoist-non-react-statics.cjs-a32a9665.js";import"./index-e8e5dbb3.js";const Z=({show:p,onHide:g,onAddContact:j})=>{const[l,h]=m.useState({firstname:"",lastname:"",email:"",phone:"",role:"",location:"",website:"",label:"",about:""}),[a,r]=m.useState(!1),[x,t]=m.useState(!1),[u,k]=m.useState(null),f=K.useRef(null),v=K.useRef(null),E=(o,F,N,L)=>{var G;const w=(G=o.target.files)==null?void 0:G[0];if(w){F(w);const $=new FileReader;$.onload=O=>{var R;const z=N.current;z&&(z.src=(R=O.target)==null?void 0:R.result)},$.readAsDataURL(w)}},D=(o,F,N)=>{o(null);const L="https://via.placeholder.com/150",w=F.current;w&&(w.src=L),N.current&&(N.current.value="")},b=o=>{h({...l,[o.target.name]:o.target.value})},A=o=>{o.preventDefault();const F=document.getElementById("addContactForm");r(!0),F.checkValidity()&&(t(!0),setTimeout(()=>{j(l),t(!1),d(),B.success("Contact added successfully!")},2e3))},d=()=>{const o=document.getElementById("addContactForm");g(),r(!1),o&&o.reset(),D(k,f,v)};return e.jsx(e.Fragment,{children:e.jsxs(q,{show:p,onHide:g,centered:!0,children:[e.jsx(q.Header,{closeButton:!0,children:e.jsx(q.Title,{children:"Add New Contact"})}),e.jsx(q.Body,{children:e.jsx(s,{noValidate:!0,id:"addContactForm",validated:a,onSubmit:A,children:e.jsxs(S,{className:"gy-6 gx-4",children:[e.jsxs(i,{lg:12,className:"hstack gap-4",children:[e.jsx("div",{className:"mb-0 text-muted",children:"Avatar"}),e.jsxs("div",{children:[e.jsx("input",{type:"file",accept:"image/*",onChange:o=>E(o,k,f),ref:o=>v.current=o,style:{display:"none"}}),e.jsx("div",{style:{height:"6rem",width:"6rem",cursor:"pointer"},className:"d-flex align-items-center justify-content-center fs-24 border border-3 rounded overflow-hidden bg-secondary-subtle",onClick:()=>{var o;return(o=v.current)==null?void 0:o.click()},children:u?e.jsx("img",{src:URL.createObjectURL(u),ref:f,className:"rounded",style:{width:"100%",height:"100%",position:"relative"}}):e.jsx(pe,{})}),e.jsxs("p",{className:"text-muted mt-2",children:["Click to change avatar image"," - ",e.jsx(H,{to:"#!",className:"text-danger",onClick:()=>D(k,f,v),children:"Reset"})]})]})]}),e.jsx(i,{lg:6,children:e.jsxs(s.Group,{children:[e.jsx(s.Control,{type:"text",name:"firstname",onChange:b,required:!0,isInvalid:a&&!l.firstname,placeholder:"First Name...."}),e.jsx(s.Control.Feedback,{type:"invalid",children:"Please enter the first name."})]})}),e.jsx(i,{lg:6,children:e.jsxs(s.Group,{children:[e.jsx(s.Control,{type:"text",name:"lastname",onChange:b,required:!0,isInvalid:a&&!l.lastname,placeholder:"Last Name...."}),e.jsx(s.Control.Feedback,{type:"invalid",children:"Please enter the last name."})]})}),e.jsx(i,{lg:6,children:e.jsxs(s.Group,{children:[e.jsx(s.Control,{type:"tel",name:"phone",onChange:b,required:!0,isInvalid:a&&!l.phone,placeholder:"Phone...."}),e.jsx(s.Control.Feedback,{type:"invalid",children:"Please enter the phone number."})]})}),e.jsx(i,{lg:6,children:e.jsxs(s.Group,{children:[e.jsx(s.Control,{type:"text",name:"role",onChange:b,required:!0,isInvalid:a&&!l.role,placeholder:"Role...."}),e.jsx(s.Control.Feedback,{type:"invalid",children:"Please enter the role."})]})}),e.jsx(i,{lg:6,children:e.jsxs(s.Group,{children:[e.jsx(s.Control,{type:"text",name:"location",onChange:b,required:!0,isInvalid:a&&!l.location,placeholder:"Location...."}),e.jsx(s.Control.Feedback,{type:"invalid",children:"Please enter the location."})]})}),e.jsx(i,{lg:6,children:e.jsxs(s.Group,{children:[e.jsx(s.Control,{type:"url",name:"website",onChange:b,required:!0,isInvalid:a&&!l.website,placeholder:"Website...."}),e.jsx(s.Control.Feedback,{type:"invalid",children:"Please enter the website."})]})}),e.jsx(i,{lg:12,children:e.jsxs(s.Group,{children:[e.jsx(s.Control,{as:"textarea",rows:3,name:"about",onChange:b,required:!0,isInvalid:a&&!l.about,placeholder:"About...."}),e.jsx(s.Control.Feedback,{type:"invalid",children:"Please enter the about."})]})}),e.jsx(i,{lg:12,children:e.jsxs(s.Group,{children:[e.jsx(s.Control,{as:"textarea",rows:3,name:"message",onChange:b,placeholder:"Message...."}),e.jsx(s.Control.Feedback,{type:"invalid",children:"Please enter the message."})]})})]})})}),e.jsxs(q.Footer,{children:[e.jsx(P,{variant:"",className:"text-danger",onClick:d,children:"Discard"}),e.jsx(P,{variant:"primary",onClick:A,className:`text-white ${x?"disabled":""}`,disabled:x,children:x?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"spinner-border spinner-border-sm me-2",role:"status","aria-hidden":"true"}),"Adding..."]}):e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fi fi-rr-plus me-2 fs-14"}),"Add Contact"]})})]})]})})},fe=({categories:p,labels:g,selectedCategory:j,handleCategoryChange:l,setSidebarMiniToggle:h})=>{const[a,r]=m.useState(!1),x=t=>{console.log("Add New Contact:",t)};return e.jsxs(e.Fragment,{children:[e.jsxs(I,{direction:"horizontal",gap:3,className:"ps-4 pe-3 border-bottom",style:{minHeight:"4.5rem"},children:[e.jsx("h4",{className:"fw-bold mb-0",children:"Contact"}),e.jsx(P,{variant:"light",className:"ms-auto btn-icon btn-md d-xxxl-none",onClick:()=>h(!1),children:e.jsx("i",{className:"fi fi-rr-cross"})})]}),e.jsx(I,{direction:"horizontal",gap:3,className:"px-4 border-bottom",style:{minHeight:"4.5rem"},children:e.jsxs(P,{className:"w-100",onClick:()=>r(!0),children:[e.jsx("i",{className:"fi fi-br-plus fs-10"}),e.jsx("span",{className:"ms-2",children:"Add New Contact"})]})}),e.jsxs(J,{className:"h-100",children:[e.jsx("ul",{className:"nav flex-column px-2 py-3",children:p.map(t=>e.jsx("li",{className:"nav-item mb-1",children:e.jsxs(H,{to:"",className:`nav-link hstack rounded ${j===t.value?"bg-secondary-subtle":""}`,onClick:()=>l(t.value),style:{paddingTop:"0.65rem",paddingBottom:"0.65rem"},children:[e.jsxs("span",{className:"hstack gap-3",children:[e.jsx("i",{className:`fi ${t.icon}`}),e.jsx("span",{className:"d-block",children:t.name})]}),t.badge&&e.jsx("span",{className:`badge ms-auto ${t.badgeClassName}`,children:t.badge})]})},t.name))}),e.jsx("hr",{className:"my-0"}),e.jsxs("div",{className:"px-4 pt-4 d-flex align-items-center justify-content-between",children:[e.jsx("label",{className:"fs-11 fw-semibold text-uppercase text-muted",style:{letterSpacing:"0.05rem"},children:"Labels"}),e.jsx(V,{overlay:e.jsx(Y,{children:"Add Labels"}),children:e.jsx(H,{to:"",children:e.jsx("i",{className:"fi fi-rr-add"})})})]}),e.jsx("ul",{className:"nav flex-column px-2 py-3",children:g.map(t=>e.jsx("li",{className:"nav-item mb-1",children:e.jsxs(H,{to:"",className:`nav-link d-flex align-items-center rounded gap-3 ${j===t.value?"bg-secondary-subtle":""}`,onClick:()=>l(t.value),style:{paddingTop:"0.65rem",paddingBottom:"0.65rem"},children:[e.jsx("span",{className:`d-block rounded-circle bg-gradient bg-${t.gradient}`,style:{width:"7px",height:"7px"}}),e.jsx("span",{children:t.name})]})},t.name))})]}),e.jsx(Z,{show:a,onHide:()=>r(!1),onAddContact:x})]})},je=({selectedCategory:p,labels:g,categories:j,sidebarMiniToggle:l,setSidebarMiniToggle:h})=>{var r,x;const a=()=>{var t,u;(t=document.querySelector(".apps-card"))==null||t.classList.add("apps-sidebar-mini-toggle"),h(!0),l&&((u=document.querySelector(".apps-card"))==null||u.classList.remove("apps-sidebar-mini-toggle"),h(!1))};return e.jsxs(I,{direction:"horizontal",gap:2,className:"px-3 border-bottom",style:{minHeight:"4.5rem"},children:[e.jsxs(I,{direction:"horizontal",gap:2,children:[e.jsx(P,{variant:"light",className:"btn-icon btn-md",onClick:a,children:e.jsx("i",{className:"fi fi-rr-menu-burger"})}),e.jsx("h5",{className:"fs-16 fw-bold mb-0",children:((r=g.find(t=>t.value===p))==null?void 0:r.name)??((x=j.find(t=>t.value===p))==null?void 0:x.name)})]}),e.jsx(P,{variant:"light",className:"btn-icon btn-md ms-auto",children:e.jsx("i",{className:"fi fi-br-menu-dots-vertical"})})]})},be=({filteredContacts:p,selectedContact:g,handleContactItemClick:j,setLoading:l,setFilteredContacts:h,handleStarChange:a,setContainerToggle:r,setSidebarMiniToggle:x})=>{const t=u=>{x(!1),r(!0),l(!0),setTimeout(()=>{j(u),l(!1),h(k=>k.map(f=>f.id===u.id?{...f,unread:!1}:f))},1e3)};return e.jsx(e.Fragment,{children:e.jsxs(J,{className:"h-100 d-flex flex-column",children:[p.length===0?e.jsx(W.Item,{className:"py-4 text-center flex-grow-1",children:"No items found"}):e.jsx(W,{variant:"flush",className:"flex-grow-1",children:p.map((u,k)=>e.jsx(W.Item,{className:`py-4 ${g&&g.id===u.id?"bg-secondary-subtle":""}`,onClick:()=>t(u),style:{cursor:"pointer"},children:e.jsxs(I,{direction:"horizontal",gap:3,className:"w-100 align-items-start",children:[e.jsx("div",{className:"flex-grow-1",children:e.jsx(X,{type:"image",size:"md",src:u.image,alt:"User Avatar"})}),e.jsxs("div",{className:"w-100",children:[e.jsx("h6",{children:u.name}),e.jsx("span",{className:"fs-13 fw-light d-block",children:u.phone})]})]})},k))}),e.jsx("div",{className:"m-4",children:e.jsx(ae,{className:"w-100"})})]})})},ve=({searchTerm:p,handleSearch:g})=>e.jsx(e.Fragment,{children:e.jsx(I,{direction:"horizontal",gap:3,className:"px-4 border-bottom",style:{minHeight:"4.5rem"},children:e.jsx(s,{className:"w-100",children:e.jsx(s.Control,{type:"text",className:"rounded-pill",placeholder:"Search....",value:p,onChange:j=>{g(j.target.value)}})})})}),Ne=({onDelete:p,handlePrev:g,handleNext:j,selectedContactIndex:l,filteredContacts:h,selectedContact:a,onStarChange:r,setFilteredContacts:x,setSelectedContact:t,setContainerToggle:u,sidebarLeftToggle:k,setSidebarLeftToggle:f})=>{const[v,E]=m.useState((a==null?void 0:a.starred)||!1),{image:D,name:b,phone:A}=a||{};m.useEffect(()=>{E((a==null?void 0:a.starred)||!1)},[a]);const d=()=>{E(L=>!L);const N=v?"Unstarred":"Starred";B[v?"error":"success"](`${N} ${a==null?void 0:a.name}!`),a&&(r(a.id,!v),x(L=>L.map(w=>w.id===a.id?{...w,starred:!v}:w)))},o=()=>{var N;(N=document.querySelector(".apps-card"))==null||N.classList.remove("apps-container-toggle"),t(null),u(!1),f(!1)},F=()=>{var N,L;(N=document.querySelector(".apps-card"))==null||N.classList.add("apps-sidebar-left-toggle"),f(!0),k&&((L=document.querySelector(".apps-card"))==null||L.classList.remove("apps-sidebar-left-toggle"),f(!1))};return e.jsx(e.Fragment,{children:e.jsxs(I,{direction:"horizontal",className:"px-3 border-bottom justify-content-between",style:{minHeight:"4.5rem"},children:[e.jsxs(I,{gap:2,direction:"horizontal",children:[e.jsx(P,{variant:"light",className:"btn-icon btn-md",onClick:o,children:e.jsx("i",{className:"fi fi-rr-arrow-left"})}),e.jsxs(I,{direction:"horizontal",gap:3,children:[e.jsx("div",{children:e.jsx(X,{type:"image",size:"md",src:D||"",alt:"User Avatar"})}),e.jsxs("div",{className:"d-none d-sm-block",children:[e.jsx("h6",{className:"mb-1",children:b}),e.jsx("span",{className:"fs-13 text-muted d-block",children:A})]})]})]}),e.jsxs(I,{direction:"horizontal",gap:1,children:[e.jsx(P,{variant:"light",className:"btn-icon btn-md d-none d-lg-flex",onClick:F,children:e.jsx("i",{className:"fi fi-rr-menu-burger"})}),e.jsx(P,{variant:"light",className:"btn-icon btn-md",onClick:d,children:e.jsx("i",{className:`fi fi-rr-star fs-14 ${v?"text-warning":""}`})}),e.jsx(V,{overlay:e.jsx(Y,{children:"Prev"}),children:e.jsx(P,{variant:"light",className:"btn-icon btn-md",onClick:g,disabled:l<=0,children:e.jsx("i",{className:"fi fi-rr-angle-left"})})}),e.jsx(V,{overlay:e.jsx(Y,{children:"Next"}),children:e.jsx(P,{variant:"light",className:"btn-icon btn-md",onClick:j,disabled:l>=h.length-1,children:e.jsx("i",{className:"fi fi-rr-angle-right"})})}),e.jsxs(C,{id:"dropdown-contact-actions",children:[e.jsx(C.Toggle,{variant:"light",id:"dropdown-contact-options",className:"btn-icon btn-md arrow-none",children:e.jsx("i",{className:"fi fi-br-menu-dots-vertical fs-14"})}),e.jsxs(C.Menu,{children:[e.jsxs(C.Item,{children:[e.jsx("i",{className:"fi fi-rr-pen-nib"}),e.jsx("span",{className:"ms-3",children:"Edit"})]}),e.jsxs(C.Item,{children:[e.jsx("i",{className:"fi fi-rr-box"}),e.jsx("span",{className:"ms-3",children:"Archive"})]}),e.jsx(C.Divider,{}),e.jsxs(C.Item,{children:[e.jsx("i",{className:"fi fi-rr-check-circle"}),e.jsx("span",{className:"ms-3",children:"Add Tasks"})]}),e.jsxs(C.Item,{children:[e.jsx("i",{className:"fi fi-rr-time-half-past"}),e.jsx("span",{className:"ms-3",children:"Add Labels"})]}),e.jsx(C.Divider,{}),e.jsxs(C.Item,{children:[e.jsx("i",{className:"fi fi-rr-triangle-warning"}),e.jsx("span",{className:"ms-3",children:"Report Spam"})]}),e.jsxs(C.Item,{children:[e.jsx("i",{className:"fi fi-rr-ban"}),e.jsx("span",{className:"ms-3",children:"Block Contact"})]}),e.jsxs(C.Item,{children:[e.jsx("i",{className:"fi fi-rr-anchor"}),e.jsx("span",{className:"ms-3",children:"Report Phishing"})]}),e.jsx(C.Divider,{}),e.jsxs(C.Item,{className:"text-danger",onClick:p,children:[e.jsx("i",{className:"fi fi-rr-trash"}),e.jsx("span",{className:"ms-3",children:"Delete"})]})]})]})]})]})})},we=({onDelete:p,selectedContact:g})=>{if(!g)return null;const j=d=>{d?B.success("Notification enabled"):B.error("Notification disabled")},l=d=>{d?B.success("Ignore Messages enabled"):B.error("Ignore Messages disabled")},h=d=>{d?B.success("Block User enabled"):B.error("Block User disabled")},a=[{value:"Guest",label:"Guest"},{value:"Owner",label:"Owner"},{value:"Admin",label:"Admin"},{value:"Editor",label:"Editor"},{value:"Viewer",label:"Viewer"},{value:"Member",label:"Member"}],r=a.find(d=>d.value==="Editor"),x=a.find(d=>d.value==="Viewer"),{name:t,email:u,phone:k,role:f,joined:v,location:E,website:D,message:b,about:A}=g;return e.jsx(e.Fragment,{children:e.jsxs(J,{className:"px-4 py-4 h-100",children:[e.jsxs(S,{className:"g-2 g-md-6 mb-6",children:[e.jsx(i,{sm:2,className:"fw-medium text-muted",children:"Name:"}),e.jsx(i,{sm:10,children:t})]}),e.jsxs(S,{className:"g-2 g-md-6 mb-6",children:[e.jsx(i,{sm:2,className:"fw-medium text-muted",children:"Email:"}),e.jsx(i,{sm:10,children:u})]}),e.jsxs(S,{className:"g-2 g-md-6 mb-6",children:[e.jsx(i,{sm:2,className:"fw-medium text-muted",children:"Phone:"}),e.jsx(i,{sm:10,children:k})]}),e.jsx("hr",{className:"my-8"}),e.jsxs(S,{className:"g-2 g-md-6 mb-6",children:[e.jsx(i,{sm:2,className:"fw-medium text-muted",children:"Joined:"}),e.jsx(i,{sm:10,children:v})]}),e.jsxs(S,{className:"g-2 g-md-6 mb-6",children:[e.jsx(i,{sm:2,className:"fw-medium text-muted",children:"Role:"}),e.jsx(i,{sm:10,children:f})]}),e.jsxs(S,{className:"g-2 g-md-6 mb-6",children:[e.jsx(i,{sm:2,className:"fw-medium text-muted",children:"Location:"}),e.jsx(i,{sm:10,children:E})]}),e.jsxs(S,{className:"g-2 g-md-6 mb-6",children:[e.jsx(i,{sm:2,className:"fw-medium text-muted",children:"Website:"}),e.jsx(i,{sm:10,children:D})]}),e.jsx("hr",{className:"my-8"}),e.jsxs(S,{className:"g-2 g-md-6 mb-6",children:[e.jsx(i,{sm:2,className:"fw-medium text-muted",children:"Message:"}),e.jsx(i,{sm:10,children:b})]}),e.jsxs(S,{className:"g-2 g-md-6 mb-6",children:[e.jsx(i,{sm:2,className:"fw-medium text-muted",children:"About:"}),e.jsx(i,{sm:10,children:A})]}),e.jsx("hr",{className:"my-8"}),e.jsxs(S,{className:"g-2 g-md-6 mb-6",children:[e.jsx(i,{sm:2,className:"fw-medium text-muted",children:"Settings:"}),e.jsxs(i,{sm:10,children:[e.jsxs(s.Check,{type:"switch",id:"check-api-notification",className:"mb-4",children:[e.jsx(s.Check.Input,{onChange:d=>j(d.target.checked),defaultChecked:!0}),e.jsxs(s.Check.Label,{className:"ms-2",children:[e.jsx("span",{className:"fw-semibold text-dark",children:"Notification"}),e.jsx("br",{}),e.jsx("span",{className:"fs-13 text-muted",children:"You can enable or disable notification."})]})]}),e.jsxs(s.Check,{type:"switch",id:"check-api-ignore-message",className:"mb-4",children:[e.jsx(s.Check.Input,{onChange:d=>l(d.target.checked)}),e.jsxs(s.Check.Label,{className:"ms-2",children:[e.jsx("span",{className:"fw-semibold text-dark",children:"Ignore Messages"}),e.jsx("br",{}),e.jsx("span",{className:"fs-13 text-muted",children:"You won't be notified when message you."})]})]}),e.jsxs(s.Check,{type:"switch",id:"check-api-block-user",className:"mb-0",children:[e.jsx(s.Check.Input,{onChange:d=>h(d.target.checked)}),e.jsxs(s.Check.Label,{className:"ms-2",children:[e.jsx("span",{className:"fw-semibold text-dark",children:"Block User"}),e.jsx("br",{}),e.jsx("span",{className:"fs-13 text-muted",children:"Give feedback and report conversion."})]})]})]})]}),e.jsx("hr",{className:"my-8"}),e.jsxs(S,{className:"g-2 g-md-6 mb-6",children:[e.jsx(i,{sm:2,className:"fw-medium text-muted",children:"Contribution:"}),e.jsxs(i,{sm:10,children:[e.jsxs("div",{className:"d-md-flex align-items-center gap-4 mb-4",children:[e.jsxs(s.Check,{id:"radio-api-role-member",children:[e.jsx(s.Check.Input,{type:"radio",name:"invite-member-radio"}),e.jsxs(s.Check.Label,{className:"ms-2",htmlFor:"radio-api-role-member",children:[e.jsx("span",{className:"fw-semibold text-dark",children:"Team Member"}),e.jsx("br",{}),e.jsx("span",{className:"fs-13 fw-light ",children:"Can view, comment on, create and edit all of the projects within the wordspace."})]})]}),e.jsx("div",{className:"ms-7 mt-2 ms-md-auto mt-md-0",style:{minWidth:"150px"},children:e.jsx(Q,{options:a,classNamePrefix:"select",defaultValue:r?[r]:[]})})]}),e.jsxs("div",{className:"d-md-flex align-items-center gap-4",children:[e.jsxs(s.Check,{id:"radio-api-role-contributor",children:[e.jsx(s.Check.Input,{type:"radio",name:"invite-member-radio"}),e.jsxs(s.Check.Label,{className:"ms-2",htmlFor:"radio-api-role-contributor",children:[e.jsx("span",{className:"fw-semibold text-dark",children:"Team Contributor"}),e.jsx("br",{}),e.jsx("span",{className:"fs-13 fw-light ",children:"Can view, comment on, create and edit projects within a wordspace that you have specifically selected."})]})]}),e.jsx("div",{className:"ms-7 mt-2 ms-md-auto mt-md-0",style:{minWidth:"150px"},children:e.jsx(Q,{options:a,classNamePrefix:"select",defaultValue:x?[x]:[]})})]})]})]}),e.jsx("hr",{className:"my-8"}),e.jsxs(S,{className:"g-2 g-md-6 mb-6",children:[e.jsx(i,{sm:2,className:"fw-medium text-muted",children:"Social:"}),e.jsx(i,{sm:10,children:e.jsxs(I,{direction:"horizontal",gap:4,children:[e.jsx(H,{to:"",children:e.jsx("i",{className:"fi fi-brands-facebook"})}),e.jsx(H,{to:"",children:e.jsx("i",{className:"fi fi-brands-twitter"})}),e.jsx(H,{to:"",children:e.jsx("i",{className:"fi fi-brands-instagram"})}),e.jsx(H,{to:"",children:e.jsx("i",{className:"fi fi-brands-linkedin"})})]})})]})]})})},U=[{id:M(),image:ge,time:"2:05 PM",name:"Elena Mateo",role:"Frontend Developer",message:"Hi Frank! How are you doing? I heard you recently traveled. Tell me all about it!",about:"Passionate frontend developer with a love for creating beautiful and responsive user interfaces. Always eager to learn and explore the latest web technologies.",phone:"+1(375)-987-9632",email:"mateo@example.com",joined:"3 Feb 2024",location:"California, United States",website:"https://wrapcoders.com",alls:!0,starred:!1,archive:!1,others:!0,label:{name:"Important",value:"important",gradient:"primary"}},{id:M(),image:se,time:"3:15 PM",name:"Bryan Waters",role:"UI/UX Designer",message:"Hey there! Just finished a great book and wanted to recommend it to you. It's a must-read!",about:"Dedicated affiliate marketer specializing in driving online sales and revenue. Enjoys building strategic partnerships and exploring new opportunities in the affiliate marketing space.",phone:"+1(432)-109-8765",email:"ursula@example.com",joined:"12 Feb 2024",location:"Texas, United States",website:"https://affiliateexp.com",alls:!0,starred:!0,archive:!1,others:!1,label:{name:"Personal",value:"personal",gradient:"warning"}},{id:M(),image:te,time:"4:30 PM",name:"Malanie Hanvey",role:"Backend Developer",message:"Hi! Long time no talk. Let's plan a catch-up soon. I miss our coffee chats!",about:"Fullstack developer with a passion for building end-to-end web applications. Enjoys working with both front-end and back-end technologies to deliver seamless user experiences.",phone:"+1(567)-890-1234",email:"emma@example.com",joined:"11 Feb 2024",location:"California, United States",website:"https://fullstackm.com",alls:!0,starred:!1,archive:!0,others:!1,label:{name:"Private",value:"private",gradient:"danger"}},{id:M(),image:ne,time:"5:45 PM",name:"Valentine Maton",role:"React Developer",message:"Good day! I hope you're having a fantastic week. Any exciting plans ahead?",about:"Digital marketer with a focus on data-driven strategies and campaign optimization. Excels in creating effective online marketing campaigns to drive brand awareness and engagement.",phone:"+1(210)-987-6543",email:"collins@example.com",joined:"10 Feb 2024",location:"New York, United States",website:"https://digitalmar.com",alls:!0,starred:!0,archive:!1,others:!0,label:{name:"Personal",value:"personal",gradient:"warning"}},{id:M(),image:ie,time:"6:20 PM",name:"Laura Foreman",role:"Vue Developer",message:"Hello! Did you try that new restaurant downtown? I heard it's amazing!",about:"Skilled WordPress developer passionate about creating custom and responsive websites. Enjoys exploring new WordPress plugins and themes to enhance website functionality.",phone:"+1(345)-678-9012",email:"boyd@example.com",joined:"9 Feb 2024",location:"Illinois, United States",website:"https://wordpressw.com",alls:!0,starred:!1,archive:!0,others:!1,label:{name:"Private",value:"private",gradient:"danger"}},{id:M(),image:re,time:"7:05 PM",name:"Erna Serpa",role:"Angular Developer",message:"Hi friend! I stumbled upon an interesting article today. Let me know if you want the link!",about:"Devoted Angular developer with expertise in building scalable and feature-rich web applications. Enjoys tackling challenging problems and implementing elegant solutions.",phone:"+1(876)-543-2109",email:"serpa@example.com",joined:"8 Feb 2024",location:"Georgia, United States",website:"https://angularpro.com",alls:!0,starred:!0,archive:!1,others:!0,label:{name:"Important",value:"important",gradient:"primary"}},{id:M(),image:le,time:"8:30 PM",name:"Timothy Boyd",role:"WordPress Developer",message:"Hey Tim! Are you free for a quick chat later? I have some exciting news to share!",about:"Passionate Vue.js developer with a knack for building modular and maintainable front-end applications. Enjoys collaborating with designers to bring creative ideas to life.",phone:"+1(987)-654-3210",email:"foreman@example.com",joined:"7 Feb 2024",location:"California, United States",website:"https://vueartist.com",alls:!0,starred:!1,archive:!0,others:!1,label:{name:"Personal",value:"personal",gradient:"warning"}},{id:M(),image:oe,time:"9:15 PM",name:"Mikaela Collins",role:"Digital Marketer",message:"Hi Mikaela! How's the project going? Need any help or advice?",about:"Backend developer passionate about building scalable and efficient server-side applications. Enjoys optimizing code for performance and solving intricate backend problems.",phone:"+1(789)-456-1230",email:"malanie@example.com",joined:"5 Feb 2024",location:"Texas, United States",website:"https://backendexpert.com",alls:!0,starred:!0,archive:!1,others:!1,label:{name:"Important",value:"important",gradient:"primary"}},{id:M(),image:ce,time:"10:00 PM",name:"Emma Bold",role:"Fullstack Developer",message:"Hey Emma! Remember that trip we planned? Let's start organizing it. I'm so excited!",about:"Enthusiastic React developer with a focus on creating dynamic and interactive user interfaces. Loves exploring new React features and building responsive web applications.",phone:"+1(234)-567-8901",email:"valentine@example.com",joined:"6 Feb 2024",location:"Florida, United States",website:"https://reactguru.io",alls:!0,starred:!1,archive:!1,others:!0,label:{name:"Private",value:"private",gradient:"danger"}},{id:M(),image:de,time:"11:25 PM",name:"Sanders Ursula",role:"Affiliate Marketer",message:"Hello Ursula! I hope your day is going well. Let's catch up soon over a cup of coffee!",about:"Passionate frontend developer with a love for creating beautiful and responsive user interfaces. Always eager to learn and explore the latest web technologies.",phone:"+1(375)-987-9632",email:"mateo@example.com",joined:"3 Feb 2024",location:"California, United States",website:"https://wrapcoders.com",alls:!0,starred:!0,archive:!0,others:!1,label:{name:"Personal",value:"personal",gradient:"warning"}}],Ee=()=>{const[p,g]=m.useState("alls"),[j,l]=m.useState(""),[h,a]=m.useState(U),[r,x]=m.useState(null),[t,u]=m.useState(-1),[k,f]=m.useState(!1),[v,E]=m.useState(!1),[D,b]=m.useState(!1),[A,d]=m.useState(!1),[o,F]=m.useState(!1),N=n=>{console.log("Add New Contact:",n)},L=[{name:"Alls",value:"alls",icon:"fi-rr-user",badge:255,badgeClassName:"bg-primary-subtle text-primary"},{name:"Starred",value:"starred",icon:"fi-rr-star"},{name:"Archive",value:"archive",icon:"fi-rr-box",badge:4,badgeClassName:"bg-success-subtle text-success"},{name:"Others",value:"others",icon:"fi-rr-folder-upload"}],w=[{name:"Important",value:"important",gradient:"success"},{name:"Personal",value:"personal",gradient:"warning"},{name:"Private",value:"private",gradient:"danger"}];m.useEffect(()=>{a(U.filter(n=>n.alls))},[]);const G=n=>{l(n);const T=U.filter(y=>y[p]).filter(y=>y.message.toLowerCase().includes(n.toLowerCase()));a(T)},$=n=>{g(n),l(""),w.find(c=>c.value===n)?a(U.filter(c=>typeof c.label=="object"?c.label.value===n:c.label&&c.label.includes(n))):a(U.filter(c=>c[n]))},O=n=>{x(n)},z=(n,c)=>{const T=h.map(y=>y.id===n?{...y,starred:c}:y);a(T)},R=()=>{r&&ue.fire({title:"Are you sure?",text:"You will not be able to recover this contact!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3E97FF",confirmButtonText:"Yes, delete it!"}).then(n=>{n.isConfirmed&&(f(!0),setTimeout(()=>{const c=U.filter(y=>y.id!==r.id);U.splice(0,U.length,...c);const T=c.filter(y=>y[p]);a(T),T.length===0&&a([]),x(null),b(!1),d(!1),f(!1),B.success("Contact deleted successfully")},1500))})};m.useEffect(()=>{const n=h.findIndex(c=>c.id===((r==null?void 0:r.id)||""));u(n)},[h,r]);const _=()=>{if(t<h.length-1){const n=t+1;x(h[n])}},ee=()=>{if(t>0){const n=t-1;x(h[n])}};return m.useEffect(()=>{var n,c;o?(n=document.querySelector(".apps-card"))==null||n.classList.add("apps-sidebar-mini-toggle"):(c=document.querySelector(".apps-card"))==null||c.classList.remove("apps-sidebar-mini-toggle")},[o]),m.useEffect(()=>{var c,T;const n=()=>{var y;window.innerWidth<=991.98&&A&&((y=document.querySelector(".apps-card"))==null||y.classList.remove("apps-sidebar-left-toggle"))};return A?(c=document.querySelector(".apps-card"))==null||c.classList.add("apps-sidebar-left-toggle"):(T=document.querySelector(".apps-card"))==null||T.classList.remove("apps-sidebar-left-toggle"),n(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}},[A]),m.useEffect(()=>{var n,c;D?(n=document.querySelector(".apps-card"))==null||n.classList.add("apps-container-toggle"):(c=document.querySelector(".apps-card"))==null||c.classList.remove("apps-container-toggle")},[D]),e.jsxs(e.Fragment,{children:[e.jsx(me,{title:"Contact"}),e.jsxs(he,{className:`apps-card ${o?"apps-sidebar-mini-toggle":""}`,children:[e.jsx("div",{className:"apps-sidebar-mini",children:e.jsx(fe,{categories:L,labels:w,selectedCategory:p,handleCategoryChange:$,setSidebarMiniToggle:F})}),e.jsxs("div",{className:"apps-sidebar apps-sidebar-left  apps-sidebar-md",children:[e.jsx(je,{labels:w,categories:L,selectedCategory:p,sidebarMiniToggle:o,setSidebarMiniToggle:F}),e.jsx(ve,{searchTerm:j,handleSearch:G}),e.jsx(be,{filteredContacts:h,selectedContact:r,handleContactItemClick:O,setLoading:f,setFilteredContacts:a,handleStarChange:z,setContainerToggle:b,setSidebarMiniToggle:F})]}),e.jsx("div",{className:"apps-container",children:e.jsx("div",{className:"apps-container-inner",children:k?e.jsx(I,{className:"align-items-center justify-content-center flex-grow-1 h-100 ",children:e.jsx(xe,{})}):r?e.jsxs(e.Fragment,{children:[e.jsx(Ne,{onDelete:R,handlePrev:ee,handleNext:_,selectedContactIndex:t,filteredContacts:h,selectedContact:r,setSelectedContact:x,onStarChange:z,setFilteredContacts:a,setContainerToggle:b,sidebarLeftToggle:A,setSidebarLeftToggle:d}),e.jsx(we,{onDelete:R,selectedContact:r},r==null?void 0:r.id)]}):e.jsxs(I,{className:"d-none d-lg-flex align-items-center justify-content-center flex-grow-1 h-100 mx-auto text-center",style:{maxWidth:"320px"},children:[e.jsx("i",{className:"fi fi-rr-address-book fs-48 mb-6"}),e.jsx("h4",{className:"fw-bold",children:"Select a contact to read"}),e.jsx("p",{className:"fs-15 fw-light text-muted mb-4",children:"Select a contact to read from left sidebar contact list, and start your conversation."}),e.jsxs(P,{variant:"",className:"btn-neutral",onClick:()=>E(!0),children:[e.jsx("i",{className:"fi fi-br-plus fs-10"}),e.jsx("span",{className:"ms-2",children:"Add New Contact"})]})]})})}),e.jsx("div",{className:"custom-backdrop",onClick:()=>F(!1)})]}),e.jsx(Z,{show:v,onHide:()=>E(!1),onAddContact:N})]})};export{Ee as default};