import{r,a4 as u,j as d,b as H,a5 as A,aa as O}from"./app-47b17f36.js";function C(e,o){return Array.isArray(e)?e.includes(o):e===o}const N=r.createContext({});N.displayName="AccordionContext";const x=N,j=r.forwardRef(({as:e="div",bsPrefix:o,className:c,children:t,eventKey:s,...a},n)=>{const{activeEventKey:i}=r.useContext(x);return o=u(o,"accordion-collapse"),d.jsx(H,{ref:n,in:C(i,s),...a,className:A(c,o),children:d.jsx(e,{children:r.Children.only(t)})})});j.displayName="AccordionCollapse";const h=j,v=r.createContext({eventKey:""});v.displayName="AccordionItemContext";const f=v,B=r.forwardRef(({as:e="div",bsPrefix:o,className:c,onEnter:t,onEntering:s,onEntered:a,onExit:n,onExiting:i,onExited:l,...y},m)=>{o=u(o,"accordion-body");const{eventKey:p}=r.useContext(f);return d.jsx(h,{eventKey:p,onEnter:t,onEntering:s,onEntered:a,onExit:n,onExiting:i,onExited:l,children:d.jsx(e,{ref:m,...y,className:A(c,o)})})});B.displayName="AccordionBody";const S=B;function g(e,o){const{activeEventKey:c,onSelect:t,alwaysOpen:s}=r.useContext(x);return a=>{let n=e===c?null:e;s&&(Array.isArray(c)?c.includes(e)?n=c.filter(i=>i!==e):n=[...c,e]:n=[e]),t==null||t(n,a),o==null||o(a)}}const E=r.forwardRef(({as:e="button",bsPrefix:o,className:c,onClick:t,...s},a)=>{o=u(o,"accordion-button");const{eventKey:n}=r.useContext(f),i=g(n,t),{activeEventKey:l}=r.useContext(x);return e==="button"&&(s.type="button"),d.jsx(e,{ref:a,onClick:i,...s,"aria-expanded":Array.isArray(l)?l.includes(n):n===l,className:A(c,o,!C(l,n)&&"collapsed")})});E.displayName="AccordionButton";const w=E,$=r.forwardRef(({as:e="h2",bsPrefix:o,className:c,children:t,onClick:s,...a},n)=>(o=u(o,"accordion-header"),d.jsx(e,{ref:n,...a,className:A(c,o),children:d.jsx(w,{onClick:s,children:t})})));$.displayName="AccordionHeader";const k=$,I=r.forwardRef(({as:e="div",bsPrefix:o,className:c,eventKey:t,...s},a)=>{o=u(o,"accordion-item");const n=r.useMemo(()=>({eventKey:t}),[t]);return d.jsx(f.Provider,{value:n,children:d.jsx(e,{ref:a,...s,className:A(c,o)})})});I.displayName="AccordionItem";const K=I,R=r.forwardRef((e,o)=>{const{as:c="div",activeKey:t,bsPrefix:s,className:a,onSelect:n,flush:i,alwaysOpen:l,...y}=O(e,{activeKey:"onSelect"}),m=u(s,"accordion"),p=r.useMemo(()=>({activeEventKey:t,onSelect:n,alwaysOpen:l}),[t,n,l]);return d.jsx(x.Provider,{value:p,children:d.jsx(c,{ref:o,...y,className:A(a,m,i&&`${m}-flush`)})})});R.displayName="Accordion";const V=Object.assign(R,{Button:w,Collapse:h,Item:K,Header:k,Body:S});export{V as A};