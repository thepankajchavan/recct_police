import{j as e,C as N,L as j,u as C,r as f,f as L,a as y,x as g,b as S,c as B,S as T,g as w}from"./app-47b17f36.js";const M=()=>e.jsx(N,{className:"nav-card text-center mx-3 my-6",children:e.jsxs(N.Body,{className:"text-primary d-none",children:[e.jsx("i",{className:"fi fi-rr-rocket-lunch fs-1 mb-6 d-inline-block",style:{transform:"rotate(320deg)"}}),e.jsx("h6",{className:"fs-16 text-uppercase text-primary fw-bold mb-2",children:"Support Center"}),e.jsx("p",{className:"fs-13 fw-lighter mb-4",children:"Window is a production ready admin dashboard to get started up and running quickly."}),e.jsx(j,{to:"mailto:wrapcoders@gmail.com",className:"btn btn-primary w-100",children:"Get Support"})]})}),R=(s,r,d)=>{const l=s.scrollTop,m=r-l;let c=0;const u=20,t=(a,x,i,o)=>(a/=o/2,a<1?i/2*a*a+x:(a--,-i/2*(a*(a-2)-1)+x)),n=()=>{c+=u;const a=t(c,l,m,d);s.scrollTop=a,c<d&&setTimeout(n,u)};n()},b=({item:s,linkClassName:r,subMenuClassNames:d,activeMenuItems:l,toggleMenu:m})=>{const[c,u]=f.useState(l.includes(s.key));f.useEffect(()=>{u(l.includes(s.key))},[l,s]);const t=n=>{n.preventDefault();const a=!c;u(a),m&&m(s,a)};return e.jsxs("li",{className:`nav-item ${c?"active":""}`,children:[e.jsxs(j,{to:"#",className:`nav-link ${r} ${l.includes(s.key)?"open":""}`,"aria-expanded":c,"data-menu-key":s.key,onClick:t,children:[s.icon&&e.jsx("i",{className:s.icon}),e.jsx("span",{className:"menu-arrow"}),e.jsxs("span",{children:[" ",s.label]})]}),e.jsx(S,{in:c,children:e.jsx("div",{children:e.jsx("ul",{className:`nav-sub-menu ${d}`,children:(s.children||[]).map((n,a)=>e.jsx(g.Fragment,{children:n.children?e.jsx(b,{item:n,linkClassName:l.includes(n.key)?"active":"",activeMenuItems:l,subMenuClassNames:"sub-menu",toggleMenu:m}):e.jsx(v,{item:n,className:l.includes(n.key)?"active":"",linkClassName:l.includes(n.key)?"active":""})},a))})})})]})},v=({item:s,className:r,linkClassName:d})=>e.jsx("li",{className:`nav-item ${r}`,children:e.jsx(U,{item:s,className:d})}),U=({item:s,className:r})=>e.jsxs(j,{to:s.url,target:s.target,className:`nav-link-ref ${r}`,"data-menu-key":s.key,children:[s.icon&&e.jsx("i",{className:s.icon}),e.jsxs("span",{children:[" ",s.label]})]}),A=({menuItems:s})=>{const r=C(),d=f.useRef(null),[l,m]=f.useState([]),c=(t,n)=>{n&&m([t.key,...y(s,t)])},u=f.useCallback(()=>{var a;const t=document.getElementById("main-menu");let n=null;if(t){const x=t.getElementsByClassName("nav-link-ref");for(let i=0;i<x.length;++i){let o=(a=r==null?void 0:r.pathname)==null?void 0:a.replaceAll({}.PUBLIC_URL??"","");const p=x[i].pathname;if(o==={}.PUBLIC_URL+"/"&&(o+="ecommerce"),o===(p==null?void 0:p.replaceAll({}.PUBLIC_URL,""))){n=x[i];break}}if(n){const i=n.getAttribute("data-menu-key"),o=L(s,i);o&&m([o.key,...y(s,o)]),setTimeout(function(){const p=n;if(p!=null){const h=document.querySelector("#leftside-menu-container .simplebar-content-wrapper"),k=p.offsetTop-300;h&&k>100&&R(h,k,600)}},200)}}},[r,s]);return f.useEffect(()=>{u()},[u,r]),e.jsx(e.Fragment,{children:e.jsx("ul",{className:"side-nav",ref:d,id:"main-menu",children:(s||[]).map((t,n)=>e.jsx(g.Fragment,{children:t.isTitle?e.jsx("li",{className:"nav-title",children:t.label}):e.jsx(e.Fragment,{children:t.children?e.jsx(b,{item:t,toggleMenu:c,subMenuClassNames:"",activeMenuItems:l,linkClassName:"nav-link"}):e.jsx(v,{item:t,linkClassName:"nav-link",className:l.includes(t.key)?"active":""})})},n))})})},E=()=>e.jsxs(e.Fragment,{children:[e.jsx(A,{menuItems:w()}),e.jsx("div",{className:"clearfix"})]}),$=()=>e.jsx(e.Fragment,{children:e.jsxs("aside",{className:"leftside-menu position-fixed top-0 bottom-0 z-1040",children:[e.jsx("div",{className:"navigation-header top-0 sticky-top z-1020 px-4",children:e.jsx(j,{to:"/",children:e.jsx(B,{})})}),e.jsxs(T,{id:"leftside-menu-container","data-simplebar":"",style:{height:"calc(100%  - 4.5rem)"},children:[e.jsx(E,{}),e.jsx(M,{})]})]})});export{$ as default};
