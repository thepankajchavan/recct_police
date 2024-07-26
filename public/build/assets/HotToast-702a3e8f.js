import{j as s,h as d,B as c,a0 as h,_ as e,R as m,p as l,C as t,e as a,L as x}from"./app-47b17f36.js";import{P as p}from"./PageBreadcrumbButton-9aff5d40.js";import"./PageBreadcrumb-c0dab2ca.js";const j=[{label:"Success",action:()=>e.success("Successfully toasted!"),variant:"success"},{label:"Error",action:()=>e.error("This didn't work."),variant:"danger"},{label:"Emoji",action:()=>e("Good Job!",{icon:"👏"}),variant:"warning"},{label:"Dark",action:()=>e("Hello Darkness!",{icon:"👏",style:{borderRadius:"10px",background:"#333",color:"#fff"}}),variant:"dark"},{label:"Content",action:()=>e(i=>s.jsxs("span",{children:["Custom and ",s.jsx("b",{children:"bold"}),s.jsx(c,{size:"sm",className:"btn-soft-danger ms-2",onClick:()=>e.dismiss(i.id),children:"Dismiss"})]})),variant:"primary"},{label:"Themed",action:()=>e.success("Look at my styles.",{style:{border:"1px solid #3E97FF",padding:"16px",color:"#3E97FF"},iconTheme:{primary:"#3E97FF",secondary:"#FFFAEE"}}),variant:"info"}],b=()=>s.jsxs(s.Fragment,{children:[s.jsx(d,{direction:"horizontal",gap:1,className:"flex-wrap",children:j.map(({label:i,action:o,variant:r},n)=>s.jsx(c,{variant:r,onClick:o,children:i},n))}),s.jsx(h,{})]}),u=[{position:"top-left",label:"top-left"},{position:"top-center",label:"top-center"},{position:"top-right",label:"top-right"},{position:"bottom-left",label:"bottom-left"},{position:"bottom-center",label:"bottom-center"},{position:"bottom-right",label:"bottom-right"}],f=()=>{const i=o=>{e.success(`Position set to ${o}.`,{position:o})};return s.jsxs(s.Fragment,{children:[s.jsx(d,{direction:"horizontal",gap:1,className:"flex-wrap",children:u.map(({position:o,label:r},n)=>s.jsx(c,{variant:"primary",onClick:()=>i(o),children:r},n))}),s.jsx(h,{reverseOrder:!1})]})},k=()=>s.jsxs(s.Fragment,{children:[s.jsx(p,{title:"HotToast",subName:"Extended",url:"https://react-hot-toast.com/"}),s.jsxs(m,{className:"g-3 g-md-4",children:[s.jsx(l,{xs:12,children:s.jsxs(t,{children:[s.jsx(t.Header,{children:s.jsx(t.Title,{children:"Toast Type"})}),s.jsx(t.Body,{children:s.jsx(b,{})})]})}),s.jsx(l,{xs:12,children:s.jsxs(t,{children:[s.jsx(t.Header,{children:s.jsx(t.Title,{children:"Toast Position"})}),s.jsx(t.Body,{children:s.jsx(f,{})})]})}),s.jsx(l,{xs:12,children:s.jsx(t,{className:"border-0",children:s.jsxs(a,{children:[s.jsx(a.Item,{children:s.jsx("h5",{className:"mb-0",children:"Uses Instruction"})}),s.jsxs(a.Item,{children:["HotToast is delivered primarily via npm. ",s.jsx("code",{children:"npm install react-hot-toast"})]}),s.jsxs(a.Item,{children:["For full documentation please visit the link:",s.jsx(x,{to:"https://react-hot-toast.com/docs",target:"_blank",children:"https://react-hot-toast.com/docs"})]})]})})})]})]});export{k as default};
