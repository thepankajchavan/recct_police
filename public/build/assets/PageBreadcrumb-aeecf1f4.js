import{r as o,a4 as x,j as e,a5 as b,aD as g,aE as B,L as I}from"./app-38275e8e.js";const u=o.forwardRef(({bsPrefix:s,active:r=!1,children:a,className:c,as:m="li",linkAs:d=g,linkProps:l={},href:n,title:t,target:j,...f},N)=>{const p=x(s,"breadcrumb-item");return e.jsx(m,{ref:N,...f,className:b(p,c,{active:r}),"aria-current":r?"page":void 0,children:r?a:e.jsx(d,{...l,href:n,title:t,target:j,children:a})})});u.displayName="BreadcrumbItem";const E=u,h=o.forwardRef(({bsPrefix:s,className:r,listProps:a={},children:c,label:m="breadcrumb",as:d="nav",...l},n)=>{const t=x(s,"breadcrumb");return e.jsx(d,{"aria-label":m,className:r,ref:n,...l,children:e.jsx("ol",{...a,className:b(t,a==null?void 0:a.className),children:c})})});h.displayName="Breadcrumb";const i=Object.assign(h,{Item:E}),R=({subName:s,title:r,addedChild:a})=>e.jsxs(e.Fragment,{children:[e.jsx(B,{children:e.jsxs("title",{children:[r," | Rudronics Technologies LLP"]})}),s&&e.jsxs("div",{className:"mt-2 mb-4 mb-md-6",children:[e.jsx("h4",{className:"fw-semibold",children:r}),a,e.jsx("div",{className:"page-title-right",children:e.jsxs("ol",{className:"breadcrumb m-0",children:[e.jsx(I,{to:"/",className:"breadcrumb-item",children:"Home"}),e.jsx(i.Item,{children:s}),e.jsx(i.Item,{active:!0,children:r})]})})]})]});export{R as P};