import{r as t,j as r,ay as A,aN as G,aO as M,a4 as T,ak as S,a5 as x,aM as X,aA as q}from"./app-38275e8e.js";const z={[G]:"showing",[M]:"showing show"},p=t.forwardRef((a,s)=>r.jsx(A,{...a,ref:s,transitionClasses:z}));p.displayName="ToastFade";const D=p,J=t.createContext({onClose(){}}),v=J,w=t.forwardRef(({bsPrefix:a,closeLabel:s="Close",closeVariant:e,closeButton:o=!0,className:c,children:d,...u},n)=>{a=T(a,"toast-header");const i=t.useContext(v),l=S(f=>{i==null||i.onClose==null||i.onClose(f)});return r.jsxs("div",{ref:n,...u,className:x(a,c),children:[d,o&&r.jsx(X,{"aria-label":s,variant:e,onClick:l,"data-dismiss":"toast"})]})});w.displayName="ToastHeader";const K=w,B=t.forwardRef(({className:a,bsPrefix:s,as:e="div",...o},c)=>(s=T(s,"toast-body"),r.jsx(e,{ref:c,className:x(a,s),...o})));B.displayName="ToastBody";const L=B,$=t.forwardRef(({bsPrefix:a,className:s,transition:e=D,show:o=!0,animation:c=!0,delay:d=5e3,autohide:u=!1,onClose:n,onEntered:i,onExit:l,onExiting:f,onEnter:g,onEntering:k,onExited:F,bg:E,...H},I)=>{a=T(a,"toast");const h=t.useRef(d),m=t.useRef(n);t.useEffect(()=>{h.current=d,m.current=n},[d,n]);const C=q(),N=!!(u&&o),j=t.useCallback(()=>{N&&(m.current==null||m.current())},[N]);t.useEffect(()=>{C.set(j,h.current)},[C,j]);const O=t.useMemo(()=>({onClose:n}),[n]),y=!!(e&&c),R=r.jsx("div",{...H,ref:I,className:x(a,s,E&&`bg-${E}`,!y&&(o?"show":"hide")),role:"alert","aria-live":"assertive","aria-atomic":"true"});return r.jsx(v.Provider,{value:O,children:y&&e?r.jsx(e,{in:o,onEnter:g,onEntering:k,onEntered:i,onExit:l,onExiting:f,onExited:F,unmountOnExit:!0,children:R}):R})});$.displayName="Toast";const U=Object.assign($,{Body:L,Header:K});export{U as T};
