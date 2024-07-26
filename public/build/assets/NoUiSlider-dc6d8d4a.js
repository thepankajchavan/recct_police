import{aJ as br,x as Ve,r as re,j as v,R as yr,p as he,C as V}from"./app-47b17f36.js";import{P as wr}from"./PageBreadcrumbButton-9aff5d40.js";import"./PageBreadcrumb-c0dab2ca.js";var yt={exports:{}};/*! nouislider - 14.7.0 - 4/6/2021 */(function(f,l){(function(a){f.exports=a()})(function(){var a="14.7.0";function S(t){return typeof t=="object"&&typeof t.to=="function"&&typeof t.from=="function"}function C(t){t.parentElement.removeChild(t)}function z(t){return t!=null}function O(t){t.preventDefault()}function X(t){return t.filter(function(e){return this[e]?!1:this[e]=!0},{})}function q(t,e){return Math.round(t/e)*e}function Y(t,e){var u=t.getBoundingClientRect(),s=t.ownerDocument,h=s.documentElement,b=Se(s);return/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(b.x=0),e?u.top+b.y-h.clientTop:u.left+b.x-h.clientLeft}function N(t){return typeof t=="number"&&!isNaN(t)&&isFinite(t)}function ie(t,e,u){u>0&&(L(t,e),setTimeout(function(){ae(t,e)},u))}function ne(t){return Math.max(Math.min(t,100),0)}function Q(t){return Array.isArray(t)?t:[t]}function de(t){t=String(t);var e=t.split(".");return e.length>1?e[1].length:0}function L(t,e){t.classList&&!/\s/.test(e)?t.classList.add(e):t.className+=" "+e}function ae(t,e){t.classList&&!/\s/.test(e)?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}function ge(t,e){return t.classList?t.classList.contains(e):new RegExp("\\b"+e+"\\b").test(t.className)}function Se(t){var e=window.pageXOffset!==void 0,u=(t.compatMode||"")==="CSS1Compat",s=e?window.pageXOffset:u?t.documentElement.scrollLeft:t.body.scrollLeft,h=e?window.pageYOffset:u?t.documentElement.scrollTop:t.body.scrollTop;return{x:s,y:h}}function xe(){return window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"}}function be(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch{}return t}function ye(){return window.CSS&&CSS.supports&&CSS.supports("touch-action","none")}function se(t,e){return 100/(e-t)}function oe(t,e,u){return e*100/(t[u+1]-t[u])}function we(t,e){return oe(t,t[0]<0?e+Math.abs(t[0]):e-t[0],0)}function Ee(t,e){return e*(t[1]-t[0])/100+t[0]}function $(t,e){for(var u=1;t>=e[u];)u+=1;return u}function Pe(t,e,u){if(u>=t.slice(-1)[0])return 100;var s=$(u,t),h=t[s-1],b=t[s],m=e[s-1],_=e[s];return m+we([h,b],u)/se(m,_)}function Ce(t,e,u){if(u>=100)return t.slice(-1)[0];var s=$(u,e),h=t[s-1],b=t[s],m=e[s-1],_=e[s];return Ee([h,b],(u-m)*se(m,_))}function je(t,e,u,s){if(s===100)return s;var h=$(s,t),b=t[h-1],m=t[h];return u?s-b>(m-b)/2?m:b:e[h-1]?t[h-1]+q(s-t[h-1],e[h-1]):s}function Ae(t,e,u){var s;if(typeof e=="number"&&(e=[e]),!Array.isArray(e))throw new Error("noUiSlider ("+a+"): 'range' contains invalid value.");if(t==="min"?s=0:t==="max"?s=100:s=parseFloat(t),!N(s)||!N(e[0]))throw new Error("noUiSlider ("+a+"): 'range' value isn't numeric.");u.xPct.push(s),u.xVal.push(e[0]),s?u.xSteps.push(isNaN(e[1])?!1:e[1]):isNaN(e[1])||(u.xSteps[0]=e[1]),u.xHighestCompleteStep.push(0)}function Me(t,e,u){if(e){if(u.xVal[t]===u.xVal[t+1]){u.xSteps[t]=u.xHighestCompleteStep[t]=u.xVal[t];return}u.xSteps[t]=oe([u.xVal[t],u.xVal[t+1]],e,0)/se(u.xPct[t],u.xPct[t+1]);var s=(u.xVal[t+1]-u.xVal[t])/u.xNumSteps[t],h=Math.ceil(Number(s.toFixed(3))-1),b=u.xVal[t]+u.xNumSteps[t]*h;u.xHighestCompleteStep[t]=b}}function T(t,e,u){this.xPct=[],this.xVal=[],this.xSteps=[u||!1],this.xNumSteps=[!1],this.xHighestCompleteStep=[],this.snap=e;var s,h=[];for(s in t)t.hasOwnProperty(s)&&h.push([t[s],s]);for(h.length&&typeof h[0][0]=="object"?h.sort(function(b,m){return b[0][0]-m[0][0]}):h.sort(function(b,m){return b[0]-m[0]}),s=0;s<h.length;s++)Ae(h[s][1],h[s][0],this);for(this.xNumSteps=this.xSteps.slice(0),s=0;s<this.xNumSteps.length;s++)Me(s,this.xNumSteps[s],this)}T.prototype.getDistance=function(t){var e,u=[];for(e=0;e<this.xNumSteps.length-1;e++){var s=this.xNumSteps[e];if(s&&t/s%1!==0)throw new Error("noUiSlider ("+a+"): 'limit', 'margin' and 'padding' of "+this.xPct[e]+"% range must be divisible by step.");u[e]=oe(this.xVal,t,e)}return u},T.prototype.getAbsoluteDistance=function(t,e,u){var s=0;if(t<this.xPct[this.xPct.length-1])for(;t>this.xPct[s+1];)s++;else t===this.xPct[this.xPct.length-1]&&(s=this.xPct.length-2);!u&&t===this.xPct[s+1]&&s++;var h,b=1,m=e[s],_=0,g=0,I=0,F=0;for(u?h=(t-this.xPct[s])/(this.xPct[s+1]-this.xPct[s]):h=(this.xPct[s+1]-t)/(this.xPct[s+1]-this.xPct[s]);m>0;)_=this.xPct[s+1+F]-this.xPct[s+F],e[s+F]*b+100-h*100>100?(g=_*h,b=(m-100*h)/e[s+F],h=1):(g=e[s+F]*_/100*b,b=0),u?(I=I-g,this.xPct.length+F>=1&&F--):(I=I+g,this.xPct.length-F>=1&&F++),m=e[s+F]*b;return t+I},T.prototype.toStepping=function(t){return t=Pe(this.xVal,this.xPct,t),t},T.prototype.fromStepping=function(t){return Ce(this.xVal,this.xPct,t)},T.prototype.getStep=function(t){return t=je(this.xPct,this.xSteps,this.snap,t),t},T.prototype.getDefaultStep=function(t,e,u){var s=$(t,this.xPct);return(t===100||e&&t===this.xPct[s-1])&&(s=Math.max(s-1,1)),(this.xVal[s]-this.xVal[s-1])/u},T.prototype.getNearbySteps=function(t){var e=$(t,this.xPct);return{stepBefore:{startValue:this.xVal[e-2],step:this.xNumSteps[e-2],highestStep:this.xHighestCompleteStep[e-2]},thisStep:{startValue:this.xVal[e-1],step:this.xNumSteps[e-1],highestStep:this.xHighestCompleteStep[e-1]},stepAfter:{startValue:this.xVal[e],step:this.xNumSteps[e],highestStep:this.xHighestCompleteStep[e]}}},T.prototype.countStepDecimals=function(){var t=this.xNumSteps.map(de);return Math.max.apply(null,t)},T.prototype.convert=function(t){return this.getStep(this.toStepping(t))};var H={to:function(t){return t!==void 0&&t.toFixed(2)},from:Number},x={target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},D={tooltips:".__tooltips",aria:".__aria"};function et(t){if(S(t))return!0;throw new Error("noUiSlider ("+a+"): 'format' requires 'to' and 'from' methods.")}function Ct(t,e){if(!N(e))throw new Error("noUiSlider ("+a+"): 'step' is not numeric.");t.singleStep=e}function jt(t,e){if(!N(e))throw new Error("noUiSlider ("+a+"): 'keyboardPageMultiplier' is not numeric.");t.keyboardPageMultiplier=e}function At(t,e){if(!N(e))throw new Error("noUiSlider ("+a+"): 'keyboardDefaultStep' is not numeric.");t.keyboardDefaultStep=e}function Ot(t,e){if(typeof e!="object"||Array.isArray(e))throw new Error("noUiSlider ("+a+"): 'range' is not an object.");if(e.min===void 0||e.max===void 0)throw new Error("noUiSlider ("+a+"): Missing 'min' or 'max' in 'range'.");if(e.min===e.max)throw new Error("noUiSlider ("+a+"): 'range' 'min' and 'max' cannot be equal.");t.spectrum=new T(e,t.snap,t.singleStep)}function Dt(t,e){if(e=Q(e),!Array.isArray(e)||!e.length)throw new Error("noUiSlider ("+a+"): 'start' option is incorrect.");t.handles=e.length,t.start=e}function _t(t,e){if(t.snap=e,typeof e!="boolean")throw new Error("noUiSlider ("+a+"): 'snap' option must be a boolean.")}function Ut(t,e){if(t.animate=e,typeof e!="boolean")throw new Error("noUiSlider ("+a+"): 'animate' option must be a boolean.")}function kt(t,e){if(t.animationDuration=e,typeof e!="number")throw new Error("noUiSlider ("+a+"): 'animationDuration' option must be a number.")}function Vt(t,e){var u=[!1],s;if(e==="lower"?e=[!0,!1]:e==="upper"&&(e=[!1,!0]),e===!0||e===!1){for(s=1;s<t.handles;s++)u.push(e);u.push(!1)}else{if(!Array.isArray(e)||!e.length||e.length!==t.handles+1)throw new Error("noUiSlider ("+a+"): 'connect' option doesn't match handle count.");u=e}t.connect=u}function Lt(t,e){switch(e){case"horizontal":t.ort=0;break;case"vertical":t.ort=1;break;default:throw new Error("noUiSlider ("+a+"): 'orientation' option is invalid.")}}function tt(t,e){if(!N(e))throw new Error("noUiSlider ("+a+"): 'margin' option must be numeric.");e!==0&&(t.margin=t.spectrum.getDistance(e))}function Mt(t,e){if(!N(e))throw new Error("noUiSlider ("+a+"): 'limit' option must be numeric.");if(t.limit=t.spectrum.getDistance(e),!t.limit||t.handles<2)throw new Error("noUiSlider ("+a+"): 'limit' option is only supported on linear sliders with 2 or more handles.")}function Ht(t,e){var u;if(!N(e)&&!Array.isArray(e))throw new Error("noUiSlider ("+a+"): 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(e)&&!(e.length===2||N(e[0])||N(e[1])))throw new Error("noUiSlider ("+a+"): 'padding' option must be numeric or array of exactly 2 numbers.");if(e!==0){for(Array.isArray(e)||(e=[e,e]),t.padding=[t.spectrum.getDistance(e[0]),t.spectrum.getDistance(e[1])],u=0;u<t.spectrum.xNumSteps.length-1;u++)if(t.padding[0][u]<0||t.padding[1][u]<0)throw new Error("noUiSlider ("+a+"): 'padding' option must be a positive number(s).");var s=e[0]+e[1],h=t.spectrum.xVal[0],b=t.spectrum.xVal[t.spectrum.xVal.length-1];if(s/(b-h)>1)throw new Error("noUiSlider ("+a+"): 'padding' option must not exceed 100% of the range.")}}function Rt(t,e){switch(e){case"ltr":t.dir=0;break;case"rtl":t.dir=1;break;default:throw new Error("noUiSlider ("+a+"): 'direction' option was not recognized.")}}function Nt(t,e){if(typeof e!="string")throw new Error("noUiSlider ("+a+"): 'behaviour' must be a string containing options.");var u=e.indexOf("tap")>=0,s=e.indexOf("drag")>=0,h=e.indexOf("fixed")>=0,b=e.indexOf("snap")>=0,m=e.indexOf("hover")>=0,_=e.indexOf("unconstrained")>=0;if(h){if(t.handles!==2)throw new Error("noUiSlider ("+a+"): 'fixed' behaviour must be used with 2 handles");tt(t,t.start[1]-t.start[0])}if(_&&(t.margin||t.limit))throw new Error("noUiSlider ("+a+"): 'unconstrained' behaviour cannot be used with margin or limit");t.events={tap:u||b,drag:s,fixed:h,snap:b,hover:m,unconstrained:_}}function Ft(t,e){if(e!==!1)if(e===!0){t.tooltips=[];for(var u=0;u<t.handles;u++)t.tooltips.push(!0)}else{if(t.tooltips=Q(e),t.tooltips.length!==t.handles)throw new Error("noUiSlider ("+a+"): must pass a formatter for all handles.");t.tooltips.forEach(function(s){if(typeof s!="boolean"&&(typeof s!="object"||typeof s.to!="function"))throw new Error("noUiSlider ("+a+"): 'tooltips' must be passed a formatter or 'false'.")})}}function zt(t,e){t.ariaFormat=e,et(e)}function Tt(t,e){t.format=e,et(e)}function It(t,e){if(t.keyboardSupport=e,typeof e!="boolean")throw new Error("noUiSlider ("+a+"): 'keyboardSupport' option must be a boolean.")}function Bt(t,e){t.documentElement=e}function Kt(t,e){if(typeof e!="string"&&e!==!1)throw new Error("noUiSlider ("+a+"): 'cssPrefix' must be a string or `false`.");t.cssPrefix=e}function qt(t,e){if(typeof e!="object")throw new Error("noUiSlider ("+a+"): 'cssClasses' must be an object.");if(typeof t.cssPrefix=="string"){t.cssClasses={};for(var u in e)e.hasOwnProperty(u)&&(t.cssClasses[u]=t.cssPrefix+e[u])}else t.cssClasses=e}function rt(t){var e={margin:0,limit:0,padding:0,animate:!0,animationDuration:300,ariaFormat:H,format:H},u={step:{r:!1,t:Ct},keyboardPageMultiplier:{r:!1,t:jt},keyboardDefaultStep:{r:!1,t:At},start:{r:!0,t:Dt},connect:{r:!0,t:Vt},direction:{r:!0,t:Rt},snap:{r:!1,t:_t},animate:{r:!1,t:Ut},animationDuration:{r:!1,t:kt},range:{r:!0,t:Ot},orientation:{r:!1,t:Lt},margin:{r:!1,t:tt},limit:{r:!1,t:Mt},padding:{r:!1,t:Ht},behaviour:{r:!0,t:Nt},ariaFormat:{r:!1,t:zt},format:{r:!1,t:Tt},tooltips:{r:!1,t:Ft},keyboardSupport:{r:!0,t:It},documentElement:{r:!1,t:Bt},cssPrefix:{r:!0,t:Kt},cssClasses:{r:!0,t:qt}},s={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:x,keyboardPageMultiplier:5,keyboardDefaultStep:10};t.format&&!t.ariaFormat&&(t.ariaFormat=t.format),Object.keys(u).forEach(function(g){if(!z(t[g])&&s[g]===void 0){if(u[g].r)throw new Error("noUiSlider ("+a+"): '"+g+"' is required.");return!0}u[g].t(e,z(t[g])?t[g]:s[g])}),e.pips=t.pips;var h=document.createElement("div"),b=h.style.msTransform!==void 0,m=h.style.transform!==void 0;e.transformRule=m?"transform":b?"msTransform":"webkitTransform";var _=[["left","top"],["right","bottom"]];return e.style=_[e.dir][e.ort],e}function Jt(t,e,u){var s=xe(),h=ye(),b=h&&be(),m=t,_,g,I,F,ee,w=e.spectrum,le=[],R=[],K=[],He=0,J={},pe,ue=t.ownerDocument,Oe=e.documentElement||ue.documentElement,De=ue.body,Xt=-1,_e=0,Re=1,Ne=2,Yt=ue.dir==="rtl"||e.ort===1?0:100;function W(r,i){var n=ue.createElement("div");return i&&L(n,i),r.appendChild(n),n}function $t(r,i){var n=W(r,e.cssClasses.origin),o=W(n,e.cssClasses.handle);return W(o,e.cssClasses.touchArea),o.setAttribute("data-handle",i),e.keyboardSupport&&(o.setAttribute("tabindex","0"),o.addEventListener("keydown",function(d){return fr(d,i)})),o.setAttribute("role","slider"),o.setAttribute("aria-orientation",e.ort?"vertical":"horizontal"),i===0?L(o,e.cssClasses.handleLower):i===e.handles-1&&L(o,e.cssClasses.handleUpper),n}function it(r,i){return i?W(r,e.cssClasses.connect):!1}function Gt(r,i){var n=W(i,e.cssClasses.connects);g=[],I=[],I.push(it(n,r[0]));for(var o=0;o<e.handles;o++)g.push($t(i,o)),K[o]=o,I.push(it(n,r[o+1]))}function Zt(r){L(r,e.cssClasses.target),e.dir===0?L(r,e.cssClasses.ltr):L(r,e.cssClasses.rtl),e.ort===0?L(r,e.cssClasses.horizontal):L(r,e.cssClasses.vertical);var i=getComputedStyle(r).direction;return i==="rtl"?L(r,e.cssClasses.textDirectionRtl):L(r,e.cssClasses.textDirectionLtr),W(r,e.cssClasses.base)}function Qt(r,i){return e.tooltips[i]?W(r.firstChild,e.cssClasses.tooltip):!1}function nt(){return m.hasAttribute("disabled")}function Fe(r){var i=g[r];return i.hasAttribute("disabled")}function ze(){ee&&(ve("update"+D.tooltips),ee.forEach(function(r){r&&C(r)}),ee=null)}function at(){ze(),ee=g.map(Qt),qe("update"+D.tooltips,function(r,i,n){if(ee[i]){var o=r[i];e.tooltips[i]!==!0&&(o=e.tooltips[i].to(n[i])),ee[i].innerHTML=o}})}function er(){ve("update"+D.aria),qe("update"+D.aria,function(r,i,n,o,d){K.forEach(function(p){var c=g[p],j=Ue(R,p,0,!0,!0,!0),y=Ue(R,p,100,!0,!0,!0),E=d[p],P=e.ariaFormat.to(n[p]);j=w.fromStepping(j).toFixed(1),y=w.fromStepping(y).toFixed(1),E=w.fromStepping(E).toFixed(1),c.children[0].setAttribute("aria-valuemin",j),c.children[0].setAttribute("aria-valuemax",y),c.children[0].setAttribute("aria-valuenow",E),c.children[0].setAttribute("aria-valuetext",P)})})}function tr(r,i,n){if(r==="range"||r==="steps")return w.xVal;if(r==="count"){if(i<2)throw new Error("noUiSlider ("+a+"): 'values' (>= 2) required for mode 'count'.");var o=i-1,d=100/o;for(i=[];o--;)i[o]=o*d;i.push(100),r="positions"}if(r==="positions")return i.map(function(p){return w.fromStepping(n?w.getStep(p):p)});if(r==="values")return n?i.map(function(p){return w.fromStepping(w.getStep(w.toStepping(p)))}):i}function rr(r,i,n){function o(P,U){return(P+U).toFixed(7)/1}var d={},p=w.xVal[0],c=w.xVal[w.xVal.length-1],j=!1,y=!1,E=0;return n=X(n.slice().sort(function(P,U){return P-U})),n[0]!==p&&(n.unshift(p),j=!0),n[n.length-1]!==c&&(n.push(c),y=!0),n.forEach(function(P,U){var k,A,G,ce=P,Z=n[U+1],B,Xe,Ye,$e,vt,Ge,ht,mt=i==="steps";if(mt&&(k=w.xNumSteps[U]),k||(k=Z-ce),ce!==!1)for(Z===void 0&&(Z=ce),k=Math.max(k,1e-7),A=ce;A<=Z;A=o(A,k)){for(B=w.toStepping(A),Xe=B-E,vt=Xe/r,Ge=Math.round(vt),ht=Xe/Ge,G=1;G<=Ge;G+=1)Ye=E+G*ht,d[Ye.toFixed(5)]=[w.fromStepping(Ye),0];$e=n.indexOf(A)>-1?Re:mt?Ne:_e,!U&&j&&A!==Z&&($e=0),A===Z&&y||(d[B.toFixed(5)]=[A,$e]),E=B}}),d}function ir(r,i,n){var o=ue.createElement("div"),d=[];d[_e]=e.cssClasses.valueNormal,d[Re]=e.cssClasses.valueLarge,d[Ne]=e.cssClasses.valueSub;var p=[];p[_e]=e.cssClasses.markerNormal,p[Re]=e.cssClasses.markerLarge,p[Ne]=e.cssClasses.markerSub;var c=[e.cssClasses.valueHorizontal,e.cssClasses.valueVertical],j=[e.cssClasses.markerHorizontal,e.cssClasses.markerVertical];L(o,e.cssClasses.pips),L(o,e.ort===0?e.cssClasses.pipsHorizontal:e.cssClasses.pipsVertical);function y(P,U){var k=U===e.cssClasses.value,A=k?c:j,G=k?d:p;return U+" "+A[e.ort]+" "+G[P]}function E(P,U,k){if(k=i?i(U,k):k,k!==Xt){var A=W(o,!1);A.className=y(k,e.cssClasses.marker),A.style[e.style]=P+"%",k>_e&&(A=W(o,!1),A.className=y(k,e.cssClasses.value),A.setAttribute("data-value",U),A.style[e.style]=P+"%",A.innerHTML=n.to(U))}}return Object.keys(r).forEach(function(P){E(P,r[P][0],r[P][1])}),o}function Te(){F&&(C(F),F=null)}function Ie(r){Te();var i=r.mode,n=r.density||1,o=r.filter||!1,d=r.values||!1,p=r.stepped||!1,c=tr(i,d,p),j=rr(n,i,c),y=r.format||{to:Math.round};return F=m.appendChild(ir(j,o,y)),F}function st(){var r=_.getBoundingClientRect(),i="offset"+["Width","Height"][e.ort];return e.ort===0?r.width||_[i]:r.height||_[i]}function te(r,i,n,o){var d=function(c){if(c=nr(c,o.pageOffset,o.target||i),!c||nt()&&!o.doNotReject||ge(m,e.cssClasses.tap)&&!o.doNotReject||r===s.start&&c.buttons!==void 0&&c.buttons>1||o.hover&&c.buttons)return!1;b||c.preventDefault(),c.calcPoint=c.points[e.ort],n(c,o)},p=[];return r.split(" ").forEach(function(c){i.addEventListener(c,d,b?{passive:!0}:!1),p.push([c,d])}),p}function nr(r,i,n){var o=r.type.indexOf("touch")===0,d=r.type.indexOf("mouse")===0,p=r.type.indexOf("pointer")===0,c,j;if(r.type.indexOf("MSPointer")===0&&(p=!0),r.type==="mousedown"&&!r.buttons&&!r.touches)return!1;if(o){var y=function(U){return U.target===n||n.contains(U.target)||U.target.shadowRoot&&U.target.shadowRoot.contains(n)};if(r.type==="touchstart"){var E=Array.prototype.filter.call(r.touches,y);if(E.length>1)return!1;c=E[0].pageX,j=E[0].pageY}else{var P=Array.prototype.find.call(r.changedTouches,y);if(!P)return!1;c=P.pageX,j=P.pageY}}return i=i||Se(ue),(d||p)&&(c=r.clientX+i.x,j=r.clientY+i.y),r.pageOffset=i,r.points=[c,j],r.cursor=d||p,r}function ot(r){var i=r-Y(_,e.ort),n=i*100/st();return n=ne(n),e.dir?100-n:n}function ar(r){var i=100,n=!1;return g.forEach(function(o,d){if(!Fe(d)){var p=R[d],c=Math.abs(p-r),j=c===100&&i===100,y=c<i,E=c<=i&&r>p;(y||E||j)&&(n=d,i=c)}}),n}function sr(r,i){r.type==="mouseout"&&r.target.nodeName==="HTML"&&r.relatedTarget===null&&Be(r,i)}function or(r,i){if(navigator.appVersion.indexOf("MSIE 9")===-1&&r.buttons===0&&i.buttonsProperty!==0)return Be(r,i);var n=(e.dir?-1:1)*(r.calcPoint-i.startCalcPoint),o=n*100/i.baseSize;lt(n>0,o,i.locations,i.handleNumbers)}function Be(r,i){i.handle&&(ae(i.handle,e.cssClasses.active),He-=1),i.listeners.forEach(function(n){Oe.removeEventListener(n[0],n[1])}),He===0&&(ae(m,e.cssClasses.drag),We(),r.cursor&&(De.style.cursor="",De.removeEventListener("selectstart",O))),i.handleNumbers.forEach(function(n){M("change",n),M("set",n),M("end",n)})}function Ke(r,i){if(i.handleNumbers.some(Fe))return!1;var n;if(i.handleNumbers.length===1){var o=g[i.handleNumbers[0]];n=o.children[0],He+=1,L(n,e.cssClasses.active)}r.stopPropagation();var d=[],p=te(s.move,Oe,or,{target:r.target,handle:n,listeners:d,startCalcPoint:r.calcPoint,baseSize:st(),pageOffset:r.pageOffset,handleNumbers:i.handleNumbers,buttonsProperty:r.buttons,locations:R.slice()}),c=te(s.end,Oe,Be,{target:r.target,handle:n,listeners:d,doNotReject:!0,handleNumbers:i.handleNumbers}),j=te("mouseout",Oe,sr,{target:r.target,handle:n,listeners:d,doNotReject:!0,handleNumbers:i.handleNumbers});d.push.apply(d,p.concat(c,j)),r.cursor&&(De.style.cursor=getComputedStyle(r.target).cursor,g.length>1&&L(m,e.cssClasses.drag),De.addEventListener("selectstart",O,!1)),i.handleNumbers.forEach(function(y){M("start",y)})}function lr(r){r.stopPropagation();var i=ot(r.calcPoint),n=ar(i);if(n===!1)return!1;e.events.snap||ie(m,e.cssClasses.tap,e.animationDuration),fe(n,i,!0,!0),We(),M("slide",n,!0),M("update",n,!0),M("change",n,!0),M("set",n,!0),e.events.snap&&Ke(r,{handleNumbers:[n]})}function ur(r){var i=ot(r.calcPoint),n=w.getStep(i),o=w.fromStepping(n);Object.keys(J).forEach(function(d){d.split(".")[0]==="hover"&&J[d].forEach(function(p){p.call(pe,o)})})}function fr(r,i){if(nt()||Fe(i))return!1;var n=["Left","Right"],o=["Down","Up"],d=["PageDown","PageUp"],p=["Home","End"];e.dir&&!e.ort?n.reverse():e.ort&&!e.dir&&(o.reverse(),d.reverse());var c=r.key.replace("Arrow",""),j=c===d[0],y=c===d[1],E=c===o[0]||c===n[0]||j,P=c===o[1]||c===n[1]||y,U=c===p[0],k=c===p[1];if(!E&&!P&&!U&&!k)return!0;r.preventDefault();var A;if(P||E){var G=e.keyboardPageMultiplier,ce=E?0:1,Z=pt(i),B=Z[ce];if(B===null)return!1;B===!1&&(B=w.getDefaultStep(R[i],E,e.keyboardDefaultStep)),(y||j)&&(B*=G),B=Math.max(B,1e-7),B=(E?-1:1)*B,A=le[i]+B}else k?A=e.spectrum.xVal[e.spectrum.xVal.length-1]:A=e.spectrum.xVal[0];return fe(i,w.toStepping(A),!0,!0),M("slide",i),M("update",i),M("change",i),M("set",i),!1}function cr(r){r.fixed||g.forEach(function(i,n){te(s.start,i.children[0],Ke,{handleNumbers:[n]})}),r.tap&&te(s.start,_,lr,{}),r.hover&&te(s.move,_,ur,{hover:!0}),r.drag&&I.forEach(function(i,n){if(!(i===!1||n===0||n===I.length-1)){var o=g[n-1],d=g[n],p=[i];L(i,e.cssClasses.draggable),r.fixed&&(p.push(o.children[0]),p.push(d.children[0])),p.forEach(function(c){te(s.start,c,Ke,{handles:[o,d],handleNumbers:[n-1,n]})})}})}function qe(r,i){J[r]=J[r]||[],J[r].push(i),r.split(".")[0]==="update"&&g.forEach(function(n,o){M("update",o)})}function dr(r){return r===D.aria||r===D.tooltips}function ve(r){var i=r&&r.split(".")[0],n=i?r.substring(i.length):r;Object.keys(J).forEach(function(o){var d=o.split(".")[0],p=o.substring(d.length);(!i||i===d)&&(!n||n===p)&&(!dr(p)||n===p)&&delete J[o]})}function M(r,i,n){Object.keys(J).forEach(function(o){var d=o.split(".")[0];r===d&&J[o].forEach(function(p){p.call(pe,le.map(e.format.to),i,le.slice(),n||!1,R.slice(),pe)})})}function Ue(r,i,n,o,d,p){var c;return g.length>1&&!e.events.unconstrained&&(o&&i>0&&(c=w.getAbsoluteDistance(r[i-1],e.margin,0),n=Math.max(n,c)),d&&i<g.length-1&&(c=w.getAbsoluteDistance(r[i+1],e.margin,1),n=Math.min(n,c))),g.length>1&&e.limit&&(o&&i>0&&(c=w.getAbsoluteDistance(r[i-1],e.limit,0),n=Math.min(n,c)),d&&i<g.length-1&&(c=w.getAbsoluteDistance(r[i+1],e.limit,1),n=Math.max(n,c))),e.padding&&(i===0&&(c=w.getAbsoluteDistance(0,e.padding[0],0),n=Math.max(n,c)),i===g.length-1&&(c=w.getAbsoluteDistance(100,e.padding[1],1),n=Math.min(n,c))),n=w.getStep(n),n=ne(n),n===r[i]&&!p?!1:n}function Je(r,i){var n=e.ort;return(n?i:r)+", "+(n?r:i)}function lt(r,i,n,o){var d=n.slice(),p=[!r,r],c=[r,!r];o=o.slice(),r&&o.reverse(),o.length>1?o.forEach(function(y,E){var P=Ue(d,y,d[y]+i,p[E],c[E],!1);P===!1?i=0:(i=P-d[y],d[y]=P)}):p=c=[!0];var j=!1;o.forEach(function(y,E){j=fe(y,n[y]+i,p[E],c[E])||j}),j&&o.forEach(function(y){M("update",y),M("slide",y)})}function ut(r,i){return e.dir?100-r-i:r}function pr(r,i){R[r]=i,le[r]=w.fromStepping(i);var n=10*(ut(i,0)-Yt),o="translate("+Je(n+"%","0")+")";g[r].style[e.transformRule]=o,ft(r),ft(r+1)}function We(){K.forEach(function(r){var i=R[r]>50?-1:1,n=3+(g.length+i*r);g[r].style.zIndex=n})}function fe(r,i,n,o,d){return d||(i=Ue(R,r,i,n,o,!1)),i===!1?!1:(pr(r,i),!0)}function ft(r){if(I[r]){var i=0,n=100;r!==0&&(i=R[r-1]),r!==I.length-1&&(n=R[r]);var o=n-i,d="translate("+Je(ut(i,o)+"%","0")+")",p="scale("+Je(o/100,"1")+")";I[r].style[e.transformRule]=d+" "+p}}function ct(r,i){return r===null||r===!1||r===void 0||(typeof r=="number"&&(r=String(r)),r=e.format.from(r),r=w.toStepping(r),r===!1||isNaN(r))?R[i]:r}function ke(r,i,n){var o=Q(r),d=R[0]===void 0;i=i===void 0?!0:!!i,e.animate&&!d&&ie(m,e.cssClasses.tap,e.animationDuration),K.forEach(function(c){fe(c,ct(o[c],c),!0,!1,n)});for(var p=K.length===1?0:1;p<K.length;++p)K.forEach(function(c){fe(c,R[c],!0,!0,n)});We(),K.forEach(function(c){M("update",c),o[c]!==null&&i&&M("set",c)})}function vr(r){ke(e.start,r)}function hr(r,i,n,o){if(r=Number(r),!(r>=0&&r<K.length))throw new Error("noUiSlider ("+a+"): invalid handle number, got: "+r);fe(r,ct(i,r),!0,!0,o),M("update",r),n&&M("set",r)}function dt(){var r=le.map(e.format.to);return r.length===1?r[0]:r}function mr(){ve(D.aria),ve(D.tooltips);for(var r in e.cssClasses)e.cssClasses.hasOwnProperty(r)&&ae(m,e.cssClasses[r]);for(;m.firstChild;)m.removeChild(m.firstChild);delete m.noUiSlider}function pt(r){var i=R[r],n=w.getNearbySteps(i),o=le[r],d=n.thisStep.step,p=null;if(e.snap)return[o-n.stepBefore.startValue||null,n.stepAfter.startValue-o||null];d!==!1&&o+d>n.stepAfter.startValue&&(d=n.stepAfter.startValue-o),o>n.thisStep.startValue?p=n.thisStep.step:n.stepBefore.step===!1?p=!1:p=o-n.stepBefore.highestStep,i===100?d=null:i===0&&(p=null);var c=w.countStepDecimals();return d!==null&&d!==!1&&(d=Number(d.toFixed(c))),p!==null&&p!==!1&&(p=Number(p.toFixed(c))),[p,d]}function gr(){return K.map(pt)}function Sr(r,i){var n=dt(),o=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips"];o.forEach(function(p){r[p]!==void 0&&(u[p]=r[p])});var d=rt(u);o.forEach(function(p){r[p]!==void 0&&(e[p]=d[p])}),w=d.spectrum,e.margin=d.margin,e.limit=d.limit,e.padding=d.padding,e.pips?Ie(e.pips):Te(),e.tooltips?at():ze(),R=[],ke(z(r.start)?r.start:n,i)}function xr(){_=Zt(m),Gt(e.connect,_),cr(e.events),ke(e.start),e.pips&&Ie(e.pips),e.tooltips&&at(),er()}return xr(),pe={destroy:mr,steps:gr,on:qe,off:ve,get:dt,set:ke,setHandle:hr,reset:vr,__moveHandles:function(r,i,n){lt(r,i,R,n)},options:u,updateOptions:Sr,target:m,removePips:Te,removeTooltips:ze,getTooltips:function(){return ee},getOrigins:function(){return g},pips:Ie},pe}function Wt(t,e){if(!t||!t.nodeName)throw new Error("noUiSlider ("+a+"): create requires a single element, got: "+t);if(t.noUiSlider)throw new Error("noUiSlider ("+a+"): Slider was already initialized.");var u=rt(e),s=Jt(t,u,e);return t.noUiSlider=s,s}return{__spectrum:T,version:a,cssClasses:x,create:Wt}})})(yt);var Er=yt.exports;const Pr=br(Er);function Cr(f,l){var a=f==null?null:typeof Symbol<"u"&&f[Symbol.iterator]||f["@@iterator"];if(a!=null){var S,C,z,O,X=[],q=!0,Y=!1;try{if(z=(a=a.call(f)).next,l===0){if(Object(a)!==a)return;q=!1}else for(;!(q=(S=z.call(a)).done)&&(X.push(S.value),X.length!==l);q=!0);}catch(N){Y=!0,C=N}finally{try{if(!q&&a.return!=null&&(O=a.return(),Object(O)!==O))return}finally{if(Y)throw C}}return X}}function gt(f,l){var a=Object.keys(f);if(Object.getOwnPropertySymbols){var S=Object.getOwnPropertySymbols(f);l&&(S=S.filter(function(C){return Object.getOwnPropertyDescriptor(f,C).enumerable})),a.push.apply(a,S)}return a}function jr(f){for(var l=1;l<arguments.length;l++){var a=arguments[l]!=null?arguments[l]:{};l%2?gt(Object(a),!0).forEach(function(S){Dr(f,S,a[S])}):Object.getOwnPropertyDescriptors?Object.defineProperties(f,Object.getOwnPropertyDescriptors(a)):gt(Object(a)).forEach(function(S){Object.defineProperty(f,S,Object.getOwnPropertyDescriptor(a,S))})}return f}function Ar(f,l){if(typeof f!="object"||!f)return f;var a=f[Symbol.toPrimitive];if(a!==void 0){var S=a.call(f,l||"default");if(typeof S!="object")return S;throw new TypeError("@@toPrimitive must return a primitive value.")}return(l==="string"?String:Number)(f)}function Or(f){var l=Ar(f,"string");return typeof l=="symbol"?l:String(l)}function Le(f){"@babel/helpers - typeof";return Le=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},Le(f)}function Dr(f,l,a){return l=Or(l),l in f?Object.defineProperty(f,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):f[l]=a,f}function Ze(){return Ze=Object.assign?Object.assign.bind():function(f){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var S in a)Object.prototype.hasOwnProperty.call(a,S)&&(f[S]=a[S])}return f},Ze.apply(this,arguments)}function wt(f,l){return Ur(f)||Cr(f,l)||Et(f,l)||Lr()}function St(f){return _r(f)||kr(f)||Et(f)||Vr()}function _r(f){if(Array.isArray(f))return Qe(f)}function Ur(f){if(Array.isArray(f))return f}function kr(f){if(typeof Symbol<"u"&&f[Symbol.iterator]!=null||f["@@iterator"]!=null)return Array.from(f)}function Et(f,l){if(f){if(typeof f=="string")return Qe(f,l);var a=Object.prototype.toString.call(f).slice(8,-1);if(a==="Object"&&f.constructor&&(a=f.constructor.name),a==="Map"||a==="Set")return Array.from(f);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return Qe(f,l)}}function Qe(f,l){(l==null||l>f.length)&&(l=f.length);for(var a=0,S=new Array(l);a<l;a++)S[a]=f[a];return S}function Vr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Lr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var xt=function(l){return Object.entries(l).sort().reduce(function(a,S){var C=wt(S,2),z=C[0],O=C[1];return a[z]=O,a},{})},bt=function(l,a){return typeof l=="number"&&typeof a=="number"||typeof l=="string"&&typeof a=="string"?l===a:Array.isArray(l)&&Array.isArray(a)?JSON.stringify(l)===JSON.stringify(a):Le(l)==="object"&&Le(a)==="object"?JSON.stringify(xt(l))===JSON.stringify(xt(a)):!1},Mr=function(l,a){var S=l.start,C=l.step,z=l.disabled,O=l.range;return a.step===C&&bt(a.start,S)&&a.disabled===z&&bt(a.range,O)},Pt=function(l){var a=re.useState(null),S=wt(a,2),C=S[0],z=S[1],O=Ve.createRef();re.useEffect(function(){var H=l.instanceRef,x=H&&Object.prototype.hasOwnProperty.call(H,"current");return H&&H instanceof Function&&H(O.current),x&&(H.current=O.current),function(){x&&(H.current=null)}},[O]);var X=function(x){var D=Number(x.target.getAttribute("data-value"));C&&C.set(D)},q=function(x){var D=O.current;D&&(x?D.setAttribute("disabled",!0):D.removeAttribute("disabled"))},Y=l.onUpdate,N=l.onChange,ie=l.onSlide,ne=l.onStart,Q=l.onEnd,de=l.onSet,L=function(x){ne&&(x.off("start"),x.on("start",ne)),ie&&(x.off("slide"),x.on("slide",ie)),Y&&(x.off("update"),x.on("update",Y)),N&&(x.off("change"),x.on("change",N)),de&&(x.off("set"),x.on("set",de)),Q&&(x.off("end"),x.on("end",Q))},ae=function(x){var D=O.current;D.noUiSlider.updateOptions(x)},ge=function(){if(l.clickablePips){var x=O.current;St(x.querySelectorAll(".noUi-value")).forEach(function(D){D.style.cursor="pointer",D.addEventListener("click",X)})}},Se=function(){if(!O.current.noUiSlider){var x=Pr.create(O.current,jr({},l));L(x),z(x)}};re.useEffect(function(){var H=l.disabled,x=O.current;return x&&(q(H),Se()),function(){C&&C.destroy(),x&&St(x.querySelectorAll(".noUi-value")).forEach(function(D){D.removeEventListener("click",X)})}},[]),re.useEffect(function(){C&&ge()},[C]);var xe=l.start,be=l.disabled,ye=l.range,se=l.step,oe=l.margin,we=l.padding,Ee=l.limit,$=l.pips,Pe=l.snap,Ce=l.animate;re.useEffect(function(){C&&(ae({range:ye,step:se,padding:we,margin:oe,limit:Ee,pips:$,snap:Pe,animate:Ce}),C.set(xe),ge()),q(be)},[xe,be,ye,se,oe,we,Ee,$,Pe,Ce]),re.useEffect(function(){C&&L(C)},[Y,N,ie,ne,Q,de]);var je=l.id,Ae=l.className,Me=l.style,T={};return je&&(T.id=je),Ae&&(T.className=Ae),Ve.createElement("div",Ze({},T,{ref:O,style:Me}))};Pt.defaultProps={animate:!0,behaviour:"tap",className:null,clickablePips:!1,connect:!1,direction:"ltr",disabled:!1,format:null,margin:null,limit:null,keyboardSupport:!0,id:null,instanceRef:null,padding:0,pips:null,snap:!1,step:null,style:null,orientation:"horizontal",tooltips:!1,onChange:function(){},onEnd:function(){},onSet:function(){},onSlide:function(){},onStart:function(){},onUpdate:function(){}};var me=Ve.memo(Pt,Mr);const Hr=()=>v.jsx(v.Fragment,{children:v.jsx(me,{range:{min:0,max:100},start:[20,80],connect:!0})});class Rr extends Ve.Component{constructor(){super(...arguments),this.state={textValue:null,percent:null},this.onSlide=(l,a,S,C,z)=>{this.setState({textValue:S[0].toFixed(2),percent:z[0].toFixed(2)})}}render(){const{textValue:l,percent:a}=this.state;return v.jsxs("div",{children:[v.jsx(me,{connect:!0,start:[500,4e3],behaviour:"tap",range:{min:[0],"10%":[500,500],"50%":[4e3,1e3],max:[1e4]},onSlide:this.onSlide}),l&&a&&v.jsxs("div",{children:["Value: ",l,", ",a," %"]})]})}}const Nr=()=>{const f={start:10,step:10,range:{min:0,max:100},accessibility:{enabled:!0}};return v.jsx(v.Fragment,{children:v.jsx(me,{...f})})},Fr=()=>v.jsx(v.Fragment,{children:v.jsx(me,{start:[50],pips:{mode:"count",values:5},clickablePips:!0,range:{min:0,max:100}})});class zr extends re.Component{constructor(l){super(l),this.onSkipSlide=(a,S,C,z,O)=>{this.setState({skippingValue:C[0]})},this.state={skippingValue:20}}render(){const{skippingValue:l}=this.state;return v.jsxs(v.Fragment,{children:[v.jsx(me,{start:20,snap:!0,range:{min:0,"10%":10,"20%":20,"30%":30,"50%":50,"60%":60,"70%":70,"90%":90,max:100},onSlide:this.onSkipSlide}),!!l&&v.jsxs("div",{children:["Value: ",l]})]})}}const Kr=()=>v.jsxs(v.Fragment,{children:[v.jsx(wr,{title:"NoUiSlider",subName:"Forms",url:"https://mmarkelov.github.io/react-nouislider/"}),v.jsxs(yr,{className:"g-3 g-md-4",children:[v.jsx(he,{xs:12,children:v.jsxs(V,{children:[v.jsx(V.Header,{children:v.jsx(V.Title,{children:"Basic"})}),v.jsx(V.Body,{children:v.jsx(Hr,{})})]})}),v.jsx(he,{xs:12,children:v.jsxs(V,{children:[v.jsx(V.Header,{children:v.jsx(V.Title,{children:"Non Linear"})}),v.jsx(V.Body,{children:v.jsx(Rr,{})})]})}),v.jsx(he,{xs:12,children:v.jsxs(V,{children:[v.jsx(V.Header,{children:v.jsx(V.Title,{children:"Keyboard Support"})}),v.jsx(V.Body,{children:v.jsx(Nr,{})})]})}),v.jsx(he,{xs:12,children:v.jsxs(V,{children:[v.jsx(V.Header,{children:v.jsx(V.Title,{children:"Clicking Pips"})}),v.jsx(V.Body,{className:"pb-16",children:v.jsx(Fr,{})})]})}),v.jsx(he,{xs:12,children:v.jsxs(V,{children:[v.jsx(V.Header,{children:v.jsx(V.Title,{children:"Skipping"})}),v.jsx(V.Body,{children:v.jsx(zr,{})})]})})]})]});export{Kr as default};