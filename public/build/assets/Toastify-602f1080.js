import{r as h,x as v,j as o,h as le,B as G,R as ge,p as X,C as R,e as K,L as Te}from"./app-47b17f36.js";import{P as ye}from"./PageBreadcrumbButton-9aff5d40.js";import"./PageBreadcrumb-c0dab2ca.js";function me(e){var t,s,a="";if(typeof e=="string"||typeof e=="number")a+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(s=me(e[t]))&&(a&&(a+=" "),a+=s);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function $(){for(var e,t,s=0,a="";s<arguments.length;)(e=arguments[s++])&&(t=me(e))&&(a&&(a+=" "),a+=t);return a}const W=e=>typeof e=="number"&&!isNaN(e),q=e=>typeof e=="string",_=e=>typeof e=="function",ee=e=>q(e)||_(e)?e:null,ae=e=>h.isValidElement(e)||q(e)||_(e)||W(e);function ve(e,t,s){s===void 0&&(s=300);const{scrollHeight:a,style:p}=e;requestAnimationFrame(()=>{p.minHeight="initial",p.height=a+"px",p.transition=`all ${s}ms`,requestAnimationFrame(()=>{p.height="0",p.padding="0",p.margin="0",setTimeout(t,s)})})}function oe(e){let{enter:t,exit:s,appendPosition:a=!1,collapse:p=!0,collapseDuration:u=300}=e;return function(n){let{children:i,position:O,preventExitTransition:C,done:E,nodeRef:T,isIn:x}=n;const c=a?`${t}--${O}`:t,m=a?`${s}--${O}`:s,f=h.useRef(0);return h.useLayoutEffect(()=>{const r=T.current,d=c.split(" "),I=N=>{N.target===T.current&&(r.dispatchEvent(new Event("d")),r.removeEventListener("animationend",I),r.removeEventListener("animationcancel",I),f.current===0&&N.type!=="animationcancel"&&r.classList.remove(...d))};r.classList.add(...d),r.addEventListener("animationend",I),r.addEventListener("animationcancel",I)},[]),h.useEffect(()=>{const r=T.current,d=()=>{r.removeEventListener("animationend",d),p?ve(r,E,u):E()};x||(C?d():(f.current=1,r.className+=` ${m}`,r.addEventListener("animationend",d)))},[x]),v.createElement(v.Fragment,null,i)}}function ce(e,t){return e!=null?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const P={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){const s=this.list.get(e).filter(a=>a!==t);return this.list.set(e,s),this}return this.list.delete(e),this},cancelEmit(e){const t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{const s=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(s)})}},J=e=>{let{theme:t,type:s,...a}=e;return v.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${s})`,...a})},ie={info:function(e){return v.createElement(J,{...e},v.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return v.createElement(J,{...e},v.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return v.createElement(J,{...e},v.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return v.createElement(J,{...e},v.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return v.createElement("div",{className:"Toastify__spinner"})}};function Ee(e){const[,t]=h.useReducer(c=>c+1,0),[s,a]=h.useState([]),p=h.useRef(null),u=h.useRef(new Map).current,n=c=>s.indexOf(c)!==-1,i=h.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:n,getToast:c=>u.get(c)}).current;function O(c){let{containerId:m}=c;const{limit:f}=i.props;!f||m&&i.containerId!==m||(i.count-=i.queue.length,i.queue=[])}function C(c){a(m=>c==null?[]:m.filter(f=>f!==c))}function E(){const{toastContent:c,toastProps:m,staleId:f}=i.queue.shift();x(c,m,f)}function T(c,m){let{delay:f,staleId:r,...d}=m;if(!ae(c)||function(k){return!p.current||i.props.enableMultiContainer&&k.containerId!==i.props.containerId||u.has(k.toastId)&&k.updateId==null}(d))return;const{toastId:I,updateId:N,data:g}=d,{props:y}=i,w=()=>C(I),S=N==null;S&&i.count++;const b={...y,style:y.toastStyle,key:i.toastKey++,...Object.fromEntries(Object.entries(d).filter(k=>{let[B,L]=k;return L!=null})),toastId:I,updateId:N,data:g,closeToast:w,isIn:!1,className:ee(d.className||y.toastClassName),bodyClassName:ee(d.bodyClassName||y.bodyClassName),progressClassName:ee(d.progressClassName||y.progressClassName),autoClose:!d.isLoading&&(D=d.autoClose,Q=y.autoClose,D===!1||W(D)&&D>0?D:Q),deleteToast(){const k=ce(u.get(I),"removed");u.delete(I),P.emit(4,k);const B=i.queue.length;if(i.count=I==null?i.count-i.displayedToast:i.count-1,i.count<0&&(i.count=0),B>0){const L=I==null?i.props.limit:1;if(B===1||L===1)i.displayedToast++,E();else{const z=L>B?B:L;i.displayedToast=z;for(let j=0;j<z;j++)E()}}else t()}};var D,Q;b.iconOut=function(k){let{theme:B,type:L,isLoading:z,icon:j}=k,M=null;const A={theme:B,type:L};return j===!1||(_(j)?M=j(A):h.isValidElement(j)?M=h.cloneElement(j,A):q(j)||W(j)?M=j:z?M=ie.spinner():(Y=>Y in ie)(L)&&(M=ie[L](A))),M}(b),_(d.onOpen)&&(b.onOpen=d.onOpen),_(d.onClose)&&(b.onClose=d.onClose),b.closeButton=y.closeButton,d.closeButton===!1||ae(d.closeButton)?b.closeButton=d.closeButton:d.closeButton===!0&&(b.closeButton=!ae(y.closeButton)||y.closeButton);let F=c;h.isValidElement(c)&&!q(c.type)?F=h.cloneElement(c,{closeToast:w,toastProps:b,data:g}):_(c)&&(F=c({closeToast:w,toastProps:b,data:g})),y.limit&&y.limit>0&&i.count>y.limit&&S?i.queue.push({toastContent:F,toastProps:b,staleId:r}):W(f)?setTimeout(()=>{x(F,b,r)},f):x(F,b,r)}function x(c,m,f){const{toastId:r}=m;f&&u.delete(f);const d={content:c,props:m};u.set(r,d),a(I=>[...I,r].filter(N=>N!==f)),P.emit(4,ce(d,d.props.updateId==null?"added":"updated"))}return h.useEffect(()=>(i.containerId=e.containerId,P.cancelEmit(3).on(0,T).on(1,c=>p.current&&C(c)).on(5,O).emit(2,i),()=>{u.clear(),P.emit(3,i)}),[]),h.useEffect(()=>{i.props=e,i.isToastActive=n,i.displayedToast=s.length}),{getToastToRender:function(c){const m=new Map,f=Array.from(u.values());return e.newestOnTop&&f.reverse(),f.forEach(r=>{const{position:d}=r.props;m.has(d)||m.set(d,[]),m.get(d).push(r)}),Array.from(m,r=>c(r[0],r[1]))},containerRef:p,isToastActive:n}}function ue(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function de(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function Ce(e){const[t,s]=h.useState(!1),[a,p]=h.useState(!1),u=h.useRef(null),n=h.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,i=h.useRef(e),{autoClose:O,pauseOnHover:C,closeToast:E,onClick:T,closeOnClick:x}=e;function c(g){if(e.draggable){g.nativeEvent.type==="touchstart"&&g.nativeEvent.preventDefault(),n.didMove=!1,document.addEventListener("mousemove",d),document.addEventListener("mouseup",I),document.addEventListener("touchmove",d),document.addEventListener("touchend",I);const y=u.current;n.canCloseOnClick=!0,n.canDrag=!0,n.boundingRect=y.getBoundingClientRect(),y.style.transition="",n.x=ue(g.nativeEvent),n.y=de(g.nativeEvent),e.draggableDirection==="x"?(n.start=n.x,n.removalDistance=y.offsetWidth*(e.draggablePercent/100)):(n.start=n.y,n.removalDistance=y.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent/100))}}function m(g){if(n.boundingRect){const{top:y,bottom:w,left:S,right:b}=n.boundingRect;g.nativeEvent.type!=="touchend"&&e.pauseOnHover&&n.x>=S&&n.x<=b&&n.y>=y&&n.y<=w?r():f()}}function f(){s(!0)}function r(){s(!1)}function d(g){const y=u.current;n.canDrag&&y&&(n.didMove=!0,t&&r(),n.x=ue(g),n.y=de(g),n.delta=e.draggableDirection==="x"?n.x-n.start:n.y-n.start,n.start!==n.x&&(n.canCloseOnClick=!1),y.style.transform=`translate${e.draggableDirection}(${n.delta}px)`,y.style.opacity=""+(1-Math.abs(n.delta/n.removalDistance)))}function I(){document.removeEventListener("mousemove",d),document.removeEventListener("mouseup",I),document.removeEventListener("touchmove",d),document.removeEventListener("touchend",I);const g=u.current;if(n.canDrag&&n.didMove&&g){if(n.canDrag=!1,Math.abs(n.delta)>n.removalDistance)return p(!0),void e.closeToast();g.style.transition="transform 0.2s, opacity 0.2s",g.style.transform=`translate${e.draggableDirection}(0)`,g.style.opacity="1"}}h.useEffect(()=>{i.current=e}),h.useEffect(()=>(u.current&&u.current.addEventListener("d",f,{once:!0}),_(e.onOpen)&&e.onOpen(h.isValidElement(e.children)&&e.children.props),()=>{const g=i.current;_(g.onClose)&&g.onClose(h.isValidElement(g.children)&&g.children.props)}),[]),h.useEffect(()=>(e.pauseOnFocusLoss&&(document.hasFocus()||r(),window.addEventListener("focus",f),window.addEventListener("blur",r)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",f),window.removeEventListener("blur",r))}),[e.pauseOnFocusLoss]);const N={onMouseDown:c,onTouchStart:c,onMouseUp:m,onTouchEnd:m};return O&&C&&(N.onMouseEnter=r,N.onMouseLeave=f),x&&(N.onClick=g=>{T&&T(g),n.canCloseOnClick&&E()}),{playToast:f,pauseToast:r,isRunning:t,preventExitTransition:a,toastRef:u,eventHandlers:N}}function fe(e){let{closeToast:t,theme:s,ariaLabel:a="close"}=e;return v.createElement("button",{className:`Toastify__close-button Toastify__close-button--${s}`,type:"button",onClick:p=>{p.stopPropagation(),t(p)},"aria-label":a},v.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},v.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function Ie(e){let{delay:t,isRunning:s,closeToast:a,type:p="default",hide:u,className:n,style:i,controlledProgress:O,progress:C,rtl:E,isIn:T,theme:x}=e;const c=u||O&&C===0,m={...i,animationDuration:`${t}ms`,animationPlayState:s?"running":"paused",opacity:c?0:1};O&&(m.transform=`scaleX(${C})`);const f=$("Toastify__progress-bar",O?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${x}`,`Toastify__progress-bar--${p}`,{"Toastify__progress-bar--rtl":E}),r=_(n)?n({rtl:E,type:p,defaultClassName:f}):$(f,n);return v.createElement("div",{role:"progressbar","aria-hidden":c?"true":"false","aria-label":"notification timer",className:r,style:m,[O&&C>=1?"onTransitionEnd":"onAnimationEnd"]:O&&C<1?null:()=>{T&&a()}})}const Oe=e=>{const{isRunning:t,preventExitTransition:s,toastRef:a,eventHandlers:p}=Ce(e),{closeButton:u,children:n,autoClose:i,onClick:O,type:C,hideProgressBar:E,closeToast:T,transition:x,position:c,className:m,style:f,bodyClassName:r,bodyStyle:d,progressClassName:I,progressStyle:N,updateId:g,role:y,progress:w,rtl:S,toastId:b,deleteToast:D,isIn:Q,isLoading:F,iconOut:k,closeOnClick:B,theme:L}=e,z=$("Toastify__toast",`Toastify__toast-theme--${L}`,`Toastify__toast--${C}`,{"Toastify__toast--rtl":S},{"Toastify__toast--close-on-click":B}),j=_(m)?m({rtl:S,position:c,type:C,defaultClassName:z}):$(z,m),M=!!w||!i,A={closeToast:T,type:C,theme:L};let Y=null;return u===!1||(Y=_(u)?u(A):h.isValidElement(u)?h.cloneElement(u,A):fe(A)),v.createElement(x,{isIn:Q,done:D,position:c,preventExitTransition:s,nodeRef:a},v.createElement("div",{id:b,onClick:O,className:j,...p,style:f,ref:a},v.createElement("div",{...Q&&{role:y},className:_(r)?r({type:C}):$("Toastify__toast-body",r),style:d},k!=null&&v.createElement("div",{className:$("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!F})},k),v.createElement("div",null,n)),Y,v.createElement(Ie,{...g&&!M?{key:`pb-${g}`}:{},rtl:S,theme:L,delay:i,isRunning:t,isIn:Q,closeToast:T,hide:E,type:C,style:N,className:I,controlledProgress:M,progress:w||0})))},se=function(e,t){return t===void 0&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},xe=oe(se("bounce",!0));oe(se("slide",!0));oe(se("zoom"));oe(se("flip"));const te=h.forwardRef((e,t)=>{const{getToastToRender:s,containerRef:a,isToastActive:p}=Ee(e),{className:u,style:n,rtl:i,containerId:O}=e;function C(E){const T=$("Toastify__toast-container",`Toastify__toast-container--${E}`,{"Toastify__toast-container--rtl":i});return _(u)?u({position:E,rtl:i,defaultClassName:T}):$(T,ee(u))}return h.useEffect(()=>{t&&(t.current=a.current)},[]),v.createElement("div",{ref:a,className:"Toastify",id:O},s((E,T)=>{const x=T.length?{...n}:{...n,pointerEvents:"none"};return v.createElement("div",{className:C(E),style:x,key:`container-${E}`},T.map((c,m)=>{let{content:f,props:r}=c;return v.createElement(Oe,{...r,isIn:p(r.toastId),style:{...r.style,"--nth":m+1,"--len":T.length},key:`toast-${r.key}`},f)}))}))});te.displayName="ToastContainer",te.defaultProps={position:"top-right",transition:xe,autoClose:5e3,closeButton:fe,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let re,H=new Map,V=[],be=1;function he(){return""+be++}function Ne(e){return e&&(q(e.toastId)||W(e.toastId))?e.toastId:he()}function U(e,t){return H.size>0?P.emit(0,e,t):V.push({content:e,options:t}),t.toastId}function ne(e,t){return{...t,type:t&&t.type||e,toastId:Ne(t)}}function Z(e){return(t,s)=>U(t,ne(e,s))}function l(e,t){return U(e,ne("default",t))}l.loading=(e,t)=>U(e,ne("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),l.promise=function(e,t,s){let a,{pending:p,error:u,success:n}=t;p&&(a=q(p)?l.loading(p,s):l.loading(p.render,{...s,...p}));const i={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},O=(E,T,x)=>{if(T==null)return void l.dismiss(a);const c={type:E,...i,...s,data:x},m=q(T)?{render:T}:T;return a?l.update(a,{...c,...m}):l(m.render,{...c,...m}),x},C=_(e)?e():e;return C.then(E=>O("success",n,E)).catch(E=>O("error",u,E)),C},l.success=Z("success"),l.info=Z("info"),l.error=Z("error"),l.warning=Z("warning"),l.warn=l.warning,l.dark=(e,t)=>U(e,ne("default",{theme:"dark",...t})),l.dismiss=e=>{H.size>0?P.emit(1,e):V=V.filter(t=>e!=null&&t.options.toastId!==e)},l.clearWaitingQueue=function(e){return e===void 0&&(e={}),P.emit(5,e)},l.isActive=e=>{let t=!1;return H.forEach(s=>{s.isToastActive&&s.isToastActive(e)&&(t=!0)}),t},l.update=function(e,t){t===void 0&&(t={}),setTimeout(()=>{const s=function(a,p){let{containerId:u}=p;const n=H.get(u||re);return n&&n.getToast(a)}(e,t);if(s){const{props:a,content:p}=s,u={delay:100,...a,...t,toastId:t.toastId||e,updateId:he()};u.toastId!==e&&(u.staleId=e);const n=u.render||p;delete u.render,U(n,u)}},0)},l.done=e=>{l.update(e,{progress:1})},l.onChange=e=>(P.on(4,e),()=>{P.off(4,e)}),l.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},l.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},P.on(2,e=>{re=e.containerId||e,H.set(re,e),V.forEach(t=>{P.emit(0,t.content,t.options)}),V=[]}).on(3,e=>{H.delete(e.containerId||e),H.size===0&&P.off(0).off(1).off(5)});const _e=[{position:l.POSITION.TOP_LEFT,label:"Top Left"},{position:l.POSITION.TOP_CENTER,label:"Top Center"},{position:l.POSITION.TOP_RIGHT,label:"Top Right"},{position:l.POSITION.BOTTOM_LEFT,label:"Bottom Left"},{position:l.POSITION.BOTTOM_CENTER,label:"Bottom Center"},{position:l.POSITION.BOTTOM_RIGHT,label:"Bottom Right"}];function Le(){const e=t=>{l(`Notification ${t}!`,{position:t})};return o.jsxs(o.Fragment,{children:[o.jsx(le,{direction:"horizontal",gap:1,className:"flex-wrap",children:_e.map(({position:t,label:s},a)=>o.jsx(G,{onClick:()=>e(t),children:s},a))}),o.jsx(te,{})]})}const je=[{label:"Success",variant:"success",onClick:()=>{l.success("Success Notification !",{position:l.POSITION.TOP_CENTER})}},{label:"Error",variant:"danger",onClick:()=>{l.error("Error Notification !",{position:l.POSITION.TOP_LEFT})}},{label:"Warning",variant:"warning",onClick:()=>{l.warn("Warning Notification !",{position:l.POSITION.BOTTOM_LEFT})}},{label:"Info",variant:"info",onClick:()=>{l.info("Info Notification !",{position:l.POSITION.BOTTOM_CENTER})}},{label:"Custom",variant:"primary",onClick:()=>{l("Custom Style Notification with css class!",{position:l.POSITION.BOTTOM_RIGHT,className:"foo-bar"})}}];function Re(){return o.jsxs(o.Fragment,{children:[o.jsx(le,{direction:"horizontal",gap:1,className:"flex-wrap",children:je.map((e,t)=>o.jsx(G,{variant:e.variant,onClick:e.onClick,children:e.label},t))}),o.jsx(te,{})]})}const pe=()=>o.jsxs("div",{className:"ms-3",children:[o.jsx("h6",{children:"Update Successfully"}),o.jsx("p",{className:"fs-12 text-muted mb-0",children:"Success!!! Your profile has been successfully updated."})]});function ke(){const e=()=>{l.success(o.jsx(pe,{}),{position:"top-right",pauseOnHover:!0,closeOnClick:!0,draggable:!0})},t=()=>{l.success(o.jsx(pe,{}),{position:"top-right",closeOnClick:!0,pauseOnHover:!0,draggable:!0,icon:!1})},s=()=>{l.dark("This note is for the dark version toast",{position:"top-right",closeOnClick:!0,pauseOnHover:!0,draggable:!0})};return o.jsx(o.Fragment,{children:o.jsxs(le,{direction:"horizontal",gap:1,children:[o.jsx(G,{variant:"success",onClick:()=>e(),children:"Message With Title"}),o.jsx(G,{variant:"primary",onClick:()=>t(),children:"No Icon Version"}),o.jsx(G,{variant:"dark",onClick:()=>s(),children:"Dark Version"})]})})}const we=()=>o.jsxs(o.Fragment,{children:[o.jsx(ye,{title:"Toastify",subName:"Extended",url:"https://fkhadra.github.io/react-toastify/introduction/"}),o.jsxs(ge,{className:"g-3 g-md-4",children:[o.jsx(X,{xs:12,children:o.jsxs(R,{children:[o.jsx(R.Header,{children:o.jsx(R.Title,{children:"Position"})}),o.jsx(R.Body,{children:o.jsx(Le,{})})]})}),o.jsx(X,{xs:12,children:o.jsxs(R,{children:[o.jsx(R.Header,{children:o.jsx(R.Title,{children:"States"})}),o.jsx(R.Body,{children:o.jsx(Re,{})})]})}),o.jsx(X,{xs:12,children:o.jsxs(R,{children:[o.jsx(R.Header,{children:o.jsx(R.Title,{children:"Custom"})}),o.jsx(R.Body,{children:o.jsx(ke,{})})]})}),o.jsx(X,{xs:12,children:o.jsx(R,{className:"border-0",children:o.jsxs(K,{children:[o.jsx(K.Item,{children:o.jsx("h5",{className:"mb-0",children:"Uses Instruction"})}),o.jsxs(K.Item,{children:["Toastify is delivered primarily via npm. ",o.jsx("code",{})]}),o.jsxs(K.Item,{children:["For full documentation please visit the link:",o.jsx(Te,{to:"https://fkhadra.github.io/react-toastify/installation",target:"_blank",children:"https://fkhadra.github.io/react-toastify/installation"})]})]})})})]})]});export{we as default};