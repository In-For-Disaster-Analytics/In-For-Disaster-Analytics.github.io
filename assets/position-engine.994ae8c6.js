import{d as Z,e as O}from"./scroll.2ce55663.js";import{r as P,m as tt,p as Q,n as R,d as j,w as $,t as et,o as A,g as V,b as nt,u as F,v as y,x as it,y as lt,h as ot,z as at,A as rt,B as st,a as B,C as ut,D as ct,E as K}from"./index.fdb5643f.js";let b=[],C=[];function U(t){C=C.filter(e=>e!==t)}function dt(t){U(t),C.push(t)}function I(t){U(t),C.length===0&&b.length!==0&&(b[b.length-1](),b=[])}function wt(t){C.length===0?t():b.push(t)}function Et(t){b=b.filter(e=>e!==t)}const Ht={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function Tt({showing:t,avoidEmit:e,configureAnchorEl:i}){const{props:n,proxy:l,emit:s}=V(),o=P(null);let c=null;function d(a){return o.value===null?!1:a===void 0||a.touches===void 0||a.touches.length<=1}const u={};i===void 0&&(Object.assign(u,{hide(a){l.hide(a)},toggle(a){l.toggle(a),a.qAnchorHandled=!0},toggleKey(a){tt(a,13)===!0&&u.toggle(a)},contextClick(a){l.hide(a),Q(a),R(()=>{l.show(a),a.qAnchorHandled=!0})},prevent:Q,mobileTouch(a){if(u.mobileCleanup(a),d(a)!==!0)return;l.hide(a),o.value.classList.add("non-selectable");const r=a.target;j(u,"anchor",[[r,"touchmove","mobileCleanup","passive"],[r,"touchend","mobileCleanup","passive"],[r,"touchcancel","mobileCleanup","passive"],[o.value,"contextmenu","prevent","notPassive"]]),c=setTimeout(()=>{c=null,l.show(a),a.qAnchorHandled=!0},300)},mobileCleanup(a){o.value.classList.remove("non-selectable"),c!==null&&(clearTimeout(c),c=null),t.value===!0&&a!==void 0&&Z()}}),i=function(a=n.contextMenu){if(n.noParentEvent===!0||o.value===null)return;let r;a===!0?l.$q.platform.is.mobile===!0?r=[[o.value,"touchstart","mobileTouch","passive"]]:r=[[o.value,"mousedown","hide","passive"],[o.value,"contextmenu","contextClick","notPassive"]]:r=[[o.value,"click","toggle","passive"],[o.value,"keyup","toggleKey","passive"]],j(u,"anchor",r)});function f(){nt(u,"anchor")}function v(a){for(o.value=a;o.value.classList.contains("q-anchor--skip");)o.value=o.value.parentNode;i()}function g(){if(n.target===!1||n.target===""||l.$el.parentNode===null)o.value=null;else if(n.target===!0)v(l.$el.parentNode);else{let a=n.target;if(typeof n.target=="string")try{a=document.querySelector(n.target)}catch{a=void 0}a!=null?(o.value=a.$el||a,i()):(o.value=null,console.error(`Anchor: target "${n.target}" not found`))}}return $(()=>n.contextMenu,a=>{o.value!==null&&(f(),i(a))}),$(()=>n.target,()=>{o.value!==null&&f(),g()}),$(()=>n.noParentEvent,a=>{o.value!==null&&(a===!0?f():i())}),et(()=>{g(),e!==!0&&n.modelValue===!0&&o.value===null&&s("update:modelValue",!1)}),A(()=>{c!==null&&clearTimeout(c),f()}),{anchorEl:o,canShow:d,anchorEvents:u}}function Wt(t,e){const i=P(null);let n;function l(c,d){const u=`${d!==void 0?"add":"remove"}EventListener`,f=d!==void 0?d:n;c!==window&&c[u]("scroll",f,F.passive),window[u]("scroll",f,F.passive),n=d}function s(){i.value!==null&&(l(i.value),i.value=null)}const o=$(()=>t.noParentEvent,()=>{i.value!==null&&(s(),e())});return A(o),{localScrollTarget:i,unconfigureScrollTarget:s,changeScrollEvent:l}}const E=[];function Ct(t){return E.find(e=>e.contentEl!==null&&e.contentEl.contains(t))}function ft(t,e){do{if(t.$options.name==="QMenu"){if(t.hide(e),t.$props.separateClosePopup===!0)return y(t)}else if(t.__qPortal===!0){const i=y(t);return i!==void 0&&i.$options.name==="QPopupProxy"?(t.hide(e),i):t}t=y(t)}while(t!=null)}function Mt(t,e,i){for(;i!==0&&t!==void 0&&t!==null;){if(t.__qPortal===!0){if(i--,t.$options.name==="QMenu"){t=ft(t,e);continue}t.hide(e)}t=y(t)}}function ht(t){for(t=t.parent;t!=null;){if(t.type.name==="QGlobalDialog")return!0;if(t.type.name==="QDialog"||t.type.name==="QMenu")return!1;t=t.parent}return!1}function $t(t,e,i,n){const l=P(!1),s=P(!1);let o=null;const c={},d=n==="dialog"&&ht(t);function u(v){if(v===!0){I(c),s.value=!0;return}s.value=!1,l.value===!1&&(d===!1&&o===null&&(o=rt(!1,n)),l.value=!0,E.push(t.proxy),dt(c))}function f(v){if(s.value=!1,v!==!0)return;I(c),l.value=!1;const g=E.indexOf(t.proxy);g!==-1&&E.splice(g,1),o!==null&&(st(o),o=null)}return it(()=>{f(!0)}),t.proxy.__qPortal=!0,lt(t.proxy,"contentEl",()=>e.value),{showPortal:u,hidePortal:f,portalIsActive:l,portalIsAccessible:s,renderPortal:()=>d===!0?i():l.value===!0?[ot(at,{to:o},i())]:void 0}}const yt={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function Pt(t,e=()=>{},i=()=>{}){return{transitionProps:B(()=>{const n=`q-transition--${t.transitionShow||e()}`,l=`q-transition--${t.transitionHide||i()}`;return{appear:!0,enterFromClass:`${n}-enter-from`,enterActiveClass:`${n}-enter-active`,enterToClass:`${n}-enter-to`,leaveFromClass:`${l}-leave-from`,leaveActiveClass:`${l}-leave-active`,leaveToClass:`${l}-leave-to`}}),transitionStyle:B(()=>`--q-transition-duration: ${t.transitionDuration}ms`)}}function Lt(){let t;const e=V();function i(){t=void 0}return ut(i),A(i),{removeTick:i,registerTick(n){t=n,R(()=>{t===n&&(ct(e)===!1&&t(),t=void 0)})}}}const x=[];function X(t){x[x.length-1](t)}function kt(t){K.is.desktop===!0&&(x.push(t),x.length===1&&document.body.addEventListener("focusin",X))}function St(t){const e=x.indexOf(t);e>-1&&(x.splice(e,1),x.length===0&&document.body.removeEventListener("focusin",X))}const{notPassiveCapture:L}=F,w=[];function k(t){const e=t.target;if(e===void 0||e.nodeType===8||e.classList.contains("no-pointer-events")===!0)return;let i=E.length-1;for(;i>=0;){const n=E[i].$;if(n.type.name==="QTooltip"){i--;continue}if(n.type.name!=="QDialog")break;if(n.props.seamless!==!0)return;i--}for(let n=w.length-1;n>=0;n--){const l=w[n];if((l.anchorEl.value===null||l.anchorEl.value.contains(e)===!1)&&(e===document.body||l.innerRef.value!==null&&l.innerRef.value.contains(e)===!1))t.qClickOutside=!0,l.onClickOutside(t);else return}}function qt(t){w.push(t),w.length===1&&(document.addEventListener("mousedown",k,L),document.addEventListener("touchstart",k,L))}function Ft(t){const e=w.findIndex(i=>i===t);e>-1&&(w.splice(e,1),w.length===0&&(document.removeEventListener("mousedown",k,L),document.removeEventListener("touchstart",k,L)))}let _,G;function zt(t){const e=t.split(" ");return e.length!==2?!1:["top","center","bottom"].includes(e[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(e[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function At(t){return t?!(t.length!==2||typeof t[0]!="number"||typeof t[1]!="number"):!0}const z={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(t=>{z[`${t}#ltr`]=t,z[`${t}#rtl`]=t});function Dt(t,e){const i=t.split(" ");return{vertical:i[0],horizontal:z[`${i[1]}#${e===!0?"rtl":"ltr"}`]}}function mt(t,e){let{top:i,left:n,right:l,bottom:s,width:o,height:c}=t.getBoundingClientRect();return e!==void 0&&(i-=e[1],n-=e[0],s+=e[1],l+=e[0],o+=e[0],c+=e[1]),{top:i,bottom:s,height:c,left:n,right:l,width:o,middle:n+(l-n)/2,center:i+(s-i)/2}}function vt(t,e,i){let{top:n,left:l}=t.getBoundingClientRect();return n+=e.top,l+=e.left,i!==void 0&&(n+=i[1],l+=i[0]),{top:n,bottom:n+1,height:1,left:l,right:l+1,width:1,middle:l,center:n}}function gt(t,e){return{top:0,center:e/2,bottom:e,left:0,middle:t/2,right:t}}function N(t,e,i,n){return{top:t[i.vertical]-e[n.vertical],left:t[i.horizontal]-e[n.horizontal]}}function pt(t,e=0){if(t.targetEl===null||t.anchorEl===null||e>5)return;if(t.targetEl.offsetHeight===0||t.targetEl.offsetWidth===0){setTimeout(()=>{pt(t,e+1)},10);return}const{targetEl:i,offset:n,anchorEl:l,anchorOrigin:s,selfOrigin:o,absoluteOffset:c,fit:d,cover:u,maxHeight:f,maxWidth:v}=t;if(K.is.ios===!0&&window.visualViewport!==void 0){const M=document.body.style,{offsetLeft:T,offsetTop:p}=window.visualViewport;T!==_&&(M.setProperty("--q-pe-left",T+"px"),_=T),p!==G&&(M.setProperty("--q-pe-top",p+"px"),G=p)}const{scrollLeft:g,scrollTop:a}=i,r=c===void 0?mt(l,u===!0?[0,0]:n):vt(l,c,n);Object.assign(i.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:v||"100vw",maxHeight:f||"100vh",visibility:"visible"});const{offsetWidth:D,offsetHeight:S}=i,{elWidth:Y,elHeight:J}=d===!0||u===!0?{elWidth:Math.max(r.width,D),elHeight:u===!0?Math.max(r.height,S):S}:{elWidth:D,elHeight:S};let m={maxWidth:v,maxHeight:f};(d===!0||u===!0)&&(m.minWidth=r.width+"px",u===!0&&(m.minHeight=r.height+"px")),Object.assign(i.style,m);const H=gt(Y,J);let h=N(r,H,s,o);if(c===void 0||n===void 0)q(h,r,H,s,o);else{const{top:M,left:T}=h;q(h,r,H,s,o);let p=!1;if(h.top!==M){p=!0;const W=2*n[1];r.center=r.top-=W,r.bottom-=W+2}if(h.left!==T){p=!0;const W=2*n[0];r.middle=r.left-=W,r.right-=W+2}p===!0&&(h=N(r,H,s,o),q(h,r,H,s,o))}m={top:h.top+"px",left:h.left+"px"},h.maxHeight!==void 0&&(m.maxHeight=h.maxHeight+"px",r.height>h.maxHeight&&(m.minHeight=m.maxHeight)),h.maxWidth!==void 0&&(m.maxWidth=h.maxWidth+"px",r.width>h.maxWidth&&(m.minWidth=m.maxWidth)),Object.assign(i.style,m),i.scrollTop!==a&&(i.scrollTop=a),i.scrollLeft!==g&&(i.scrollLeft=g)}function q(t,e,i,n,l){const s=i.bottom,o=i.right,c=O(),d=window.innerHeight-c,u=document.body.clientWidth;if(t.top<0||t.top+s>d)if(l.vertical==="center")t.top=e[n.vertical]>d/2?Math.max(0,d-s):0,t.maxHeight=Math.min(s,d);else if(e[n.vertical]>d/2){const f=Math.min(d,n.vertical==="center"?e.center:n.vertical===l.vertical?e.bottom:e.top);t.maxHeight=Math.min(s,f),t.top=Math.max(0,f-s)}else t.top=Math.max(0,n.vertical==="center"?e.center:n.vertical===l.vertical?e.top:e.bottom),t.maxHeight=Math.min(s,d-t.top);if(t.left<0||t.left+o>u)if(t.maxWidth=Math.min(o,u),l.horizontal==="middle")t.left=e[n.horizontal]>u/2?Math.max(0,u-o):0;else if(e[n.horizontal]>u/2){const f=Math.min(u,n.horizontal==="middle"?e.middle:n.horizontal===l.horizontal?e.right:e.left);t.maxWidth=Math.min(o,f),t.left=Math.max(0,f-t.maxWidth)}else t.left=Math.max(0,n.horizontal==="middle"?e.middle:n.horizontal===l.horizontal?e.left:e.right),t.maxWidth=Math.min(o,u-t.left)}export{yt as a,At as b,Lt as c,Pt as d,Wt as e,Tt as f,$t as g,qt as h,kt as i,St as j,wt as k,Et as l,ft as m,Ct as n,Mt as o,Dt as p,Ft as r,pt as s,Ht as u,zt as v};
