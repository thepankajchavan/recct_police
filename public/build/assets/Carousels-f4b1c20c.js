import{j as e,a3 as l,I as d,r as m,R as u,p as c,C as s}from"./app-47b17f36.js";import{P as p}from"./PageBreadcrumb-c0dab2ca.js";import{b as g,a as b,c as C,d as f,e as N}from"./big_5-470b1211.js";const o=[{src:g,alt:"banner 1",caption:"First slide label",text:"Nulla vitae elit libero, a pharetra augue mollis interdum."},{src:b,alt:"banner 2",caption:"Second slide label",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{src:C,alt:"banner 3",caption:"Third slide label",text:"Praesent commodo cursus magna, vel scelerisque nisl consectetur."},{src:f,alt:"banner 4",caption:"Four slide label",text:"Ipsum dolor sit magna amet, consectetur adipiscing elit."},{src:N,alt:"banner 5",caption:"Fifth slide label",text:"Commodo cursus magna, vel scelerisque nisl consectetur."}],v=()=>e.jsx(e.Fragment,{children:e.jsx(l,{interval:null,children:o.map(({src:r,alt:a},n)=>e.jsx(l.Item,{children:e.jsx(d,{src:r,alt:a,fluid:!0})},n))})}),I=()=>{const[r,a]=m.useState(0),n=t=>{a(t)};return e.jsx(e.Fragment,{children:e.jsx(l,{activeIndex:r,onSelect:n,interval:null,children:o.map(({src:t,alt:i,caption:x,text:h},j)=>e.jsxs(l.Item,{children:[e.jsx(d,{src:t,alt:i,fluid:!0}),e.jsxs(l.Caption,{children:[e.jsx("h3",{className:"text-light",children:x}),e.jsx("p",{children:h})]})]},j))})})},B=()=>e.jsx(e.Fragment,{children:e.jsx(l,{fade:!0,interval:null,children:o.map(({src:r,alt:a,caption:n,text:t},i)=>e.jsxs(l.Item,{children:[e.jsx(d,{src:r,alt:a,fluid:!0}),e.jsxs(l.Caption,{children:[e.jsx("h3",{className:"text-light",children:n}),e.jsx("p",{children:t})]})]},i))})}),F=()=>e.jsx(e.Fragment,{children:e.jsx(l,{children:o.map(({src:r,alt:a,caption:n,text:t},i)=>e.jsxs(l.Item,{interval:1200,children:[e.jsx(d,{src:r,alt:a,fluid:!0}),e.jsxs(l.Caption,{children:[e.jsx("h3",{className:"text-light",children:n}),e.jsx("p",{children:t})]})]},i))})}),H=()=>e.jsxs(e.Fragment,{children:[e.jsx(p,{title:"Carousels",subName:"Base UI"}),e.jsxs(u,{className:"g-3 g-md-4",children:[e.jsx(c,{lg:6,children:e.jsxs(s,{className:"overflow-hidden",children:[e.jsx(s.Header,{children:e.jsx(s.Title,{children:"Basic"})}),e.jsx(s.Body,{className:"p-0",children:e.jsx(v,{})})]})}),e.jsx(c,{lg:6,children:e.jsxs(s,{className:"overflow-hidden",children:[e.jsx(s.Header,{children:e.jsx(s.Title,{children:"Controlled"})}),e.jsx(s.Body,{className:"p-0",children:e.jsx(I,{})})]})}),e.jsx(c,{lg:6,children:e.jsxs(s,{className:"overflow-hidden",children:[e.jsx(s.Header,{children:e.jsx(s.Title,{children:"Crossfade"})}),e.jsx(s.Body,{className:"p-0",children:e.jsx(B,{})})]})}),e.jsx(c,{lg:6,children:e.jsxs(s,{className:"overflow-hidden",children:[e.jsx(s.Header,{children:e.jsx(s.Title,{children:"Autoplay"})}),e.jsx(s.Body,{className:"p-0",children:e.jsx(F,{})})]})})]})]});export{H as default};