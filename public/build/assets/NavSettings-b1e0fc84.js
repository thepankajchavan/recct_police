import{r as l,j as e,F as t,T as i,N as o,R as r,p as s,B as p,ai as x,C as n}from"./app-38275e8e.js";import{P as g}from"./PageBreadcrumb-aeecf1f4.js";import"./context-23ca0ce6.js";const j=[{eventKey:"general",title:"General",icon:"fi fi-rr-home",content:"Magna duis labore cillum sint adipisicing exercitation ipsum. Nostrud ut anim non exercitation velit laboris fugiat cupidatat. Commodo esse dolore fugiat sint velit ullamco magna consequat voluptate minim amet aliquip ipsum aute laboris nisi. Labore labore veniam irure irure ipsum pariatur mollit magna in cupidatat dolore magna irure esse tempor ad mollit. Dolore commodo nulla minim amet ipsum officia consectetur amet ullamco voluptate nisi commodo ea sit eu."},{eventKey:"maintenance",title:"Maintenance",icon:"fi fi-rr-circle-user",content:"Nostrud ut anim non exercitation velit laboris fugiat cupidatat. Commodo esse dolore fugiat sint velit ullamco magna consequat voluptate minim amet aliquip ipsum aute laboris nisi. Labore labore veniam irure irure ipsum pariatur mollit magna in cupidatat dolore magna irure esse tempor ad mollit. Dolore commodo nulla minim amet ipsum officia consectetur amet ullamco voluptate nisi commodo ea sit eu."}],v=()=>{const[c,m]=l.useState("");let u=document.head.querySelector('meta[name="csrf-token"]');function d(){x.get("/admin/fetch-settings").then(a=>{m(a.data.general.site_name)})}return l.useEffect(()=>{d()},[]),e.jsx(e.Fragment,{children:e.jsx(t,{method:"post",action:"/admin/settings",children:e.jsxs(i.Container,{defaultActiveKey:"home",children:[e.jsx(o,{className:"mb-3 nav-underline",children:j.map(({eventKey:a,title:h})=>e.jsx(o.Item,{children:e.jsx(o.Link,{eventKey:a,children:h})},a))}),e.jsxs(i.Content,{children:[e.jsxs(i.Pane,{eventKey:"general",children:[e.jsx(t.Control,{type:"hidden",name:"_method",value:"put"}),e.jsx(t.Control,{type:"hidden",name:"_token",value:u.content}),e.jsxs(r,{className:"gy-6 gy-sm-8 gy-md-6",children:[e.jsx(s,{lg:12,sm:12,children:e.jsx(r,{children:e.jsxs(s,{sm:12,className:"mt-3",children:[e.jsx(t.Label,{htmlFor:"name",children:"Site Name"}),e.jsx(t.Control,{type:"text",id:"name",placeholder:"Name",name:"name",value:c,onChange:a=>m(a.target.value)})]})})}),e.jsx(s,{sm:12,children:e.jsx(p,{type:"submit",variant:"primary",children:"Save"})})]})]},"general"),e.jsx(i.Pane,{eventKey:"maintenance",children:e.jsx("h1",{children:"Inside Maintenance"})},"maintenance")]})]})})})},y=()=>e.jsxs(e.Fragment,{children:[e.jsx(g,{title:"NavTabs",subName:"Base UI"}),e.jsx(r,{className:"g-3 g-md-4",children:e.jsx(s,{lg:6,children:e.jsxs(n,{children:[e.jsx(n.Header,{children:e.jsx(n.Title,{children:"Basic"})}),e.jsx(n.Body,{children:e.jsx(v,{})})]})})})]});export{y as default};