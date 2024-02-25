import{x as ae,y as ne,z as se,aS as ue,A as le,r as w,c as l,B as ie,aT as re,C as ce,aU as fe,E as de,aV as ve,w as A,aW as ge,t as he,aX as me,aY as M,Q as ye,aZ as Pe,h as D,L as Te,aI as ke,I as Ce,g as Se,a_ as xe,a$ as Oe,b0 as be,v as qe}from"./index.56aced16.js";import{u as Be,v as R,a as Ee,b as Fe,c as we,p as H,r as K,s as Ae,d as Me}from"./position-engine.9dfbd25a.js";var He=ae({name:"QMenu",inheritAttrs:!1,props:{...Be,...ne,...se,...ue,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:R},self:{type:String,validator:R},offset:{type:Array,validator:Ee},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...le,"click","escapeKey"],setup(t,{slots:Q,emit:c,attrs:d}){let n=null,f,i,v;const T=Se(),{proxy:g}=T,{$q:o}=g,a=w(null),s=w(!1),W=l(()=>t.persistent!==!0&&t.noRouteDismiss!==!0),I=ie(t,o),{registerTick:_,removeTick:L}=re(),{registerTimeout:k}=ce(),{transitionProps:U,transitionStyle:$}=fe(t),{localScrollTarget:C,changeScrollEvent:j,unconfigureScrollTarget:z}=Fe(t,E),{anchorEl:u,canShow:V}=we({showing:s}),{hide:S}=de({showing:s,canShow:V,handleShow:J,handleHide:N,hideOnRouteChange:W,processOnMount:!0}),{showPortal:x,hidePortal:O,renderPortal:X}=ve(T,a,ee,"menu"),h={anchorEl:u,innerRef:a,onClickOutside(e){if(t.persistent!==!0&&s.value===!0)return S(e),(e.type==="touchstart"||e.target.classList.contains("q-dialog__backdrop"))&&qe(e),!0}},b=l(()=>H(t.anchor||(t.cover===!0?"center middle":"bottom start"),o.lang.rtl)),Y=l(()=>t.cover===!0?b.value:H(t.self||"top start",o.lang.rtl)),Z=l(()=>(t.square===!0?" q-menu--square":"")+(I.value===!0?" q-menu--dark q-dark":"")),G=l(()=>t.autoClose===!0?{onClick:p}:{}),q=l(()=>s.value===!0&&t.persistent!==!0);A(q,e=>{e===!0?(xe(y),Me(h)):(M(y),K(h))});function m(){Oe(()=>{let e=a.value;e&&e.contains(document.activeElement)!==!0&&(e=e.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||e.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||e.querySelector("[autofocus], [data-autofocus]")||e,e.focus({preventScroll:!0}))})}function J(e){if(n=t.noRefocus===!1?document.activeElement:null,ge(F),x(),E(),f=void 0,e!==void 0&&(t.touchPosition||t.contextMenu)){const P=he(e);if(P.left!==void 0){const{top:te,left:oe}=u.value.getBoundingClientRect();f={left:P.left-oe,top:P.top-te}}}i===void 0&&(i=A(()=>o.screen.width+"|"+o.screen.height+"|"+t.self+"|"+t.anchor+"|"+o.lang.rtl,r)),t.noFocus!==!0&&document.activeElement.blur(),_(()=>{r(),t.noFocus!==!0&&m()}),k(()=>{o.platform.is.ios===!0&&(v=t.autoClose,a.value.click()),r(),x(!0),c("show",e)},t.transitionDuration)}function N(e){L(),O(),B(!0),n!==null&&(e===void 0||e.qClickOutside!==!0)&&(((e&&e.type.indexOf("key")===0?n.closest('[tabindex]:not([tabindex^="-"])'):void 0)||n).focus(),n=null),k(()=>{O(!0),c("hide",e)},t.transitionDuration)}function B(e){f=void 0,i!==void 0&&(i(),i=void 0),(e===!0||s.value===!0)&&(me(F),z(),K(h),M(y)),e!==!0&&(n=null)}function E(){(u.value!==null||t.scrollTarget!==void 0)&&(C.value=ye(u.value,t.scrollTarget),j(C.value,r))}function p(e){v!==!0?(Pe(g,e),c("click",e)):v=!1}function F(e){q.value===!0&&t.noFocus!==!0&&be(a.value,e.target)!==!0&&m()}function y(e){c("escapeKey"),S(e)}function r(){const e=a.value;e===null||u.value===null||Ae({el:e,offset:t.offset,anchorEl:u.value,anchorOrigin:b.value,selfOrigin:Y.value,absoluteOffset:f,fit:t.fit,cover:t.cover,maxHeight:t.maxHeight,maxWidth:t.maxWidth})}function ee(){return D(ke,U.value,()=>s.value===!0?D("div",{role:"menu",...d,ref:a,tabindex:-1,class:["q-menu q-position-engine scroll"+Z.value,d.class],style:[d.style,$.value],...G.value},Te(Q.default)):null)}return Ce(B),Object.assign(g,{focus:m,updatePosition:r}),X}});export{He as Q};
