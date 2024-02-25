import{x as ee,y as te,aS as oe,A as ae,r as O,c as f,aT as ne,C as ie,aU as le,E as se,aV as re,w as C,I as E,u as k,m as x,Q as ue,h as H,aI as ce,g as de,L as fe,v as ve}from"./index.56aced16.js";import{u as he,v as A,a as me,p as q,b as ge,c as ye,r as D,s as Te,d as pe}from"./position-engine.9dfbd25a.js";import{c as L}from"./selection.e4c60947.js";var we=ee({name:"QTooltip",inheritAttrs:!1,props:{...he,...te,...oe,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:A},self:{type:String,default:"top middle",validator:A},offset:{type:Array,default:()=>[14,14],validator:me},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}},emits:[...ae],setup(e,{slots:M,emit:y,attrs:v}){let i,l;const h=de(),{proxy:{$q:a}}=h,s=O(null),c=O(!1),j=f(()=>q(e.anchor,a.lang.rtl)),Q=f(()=>q(e.self,a.lang.rtl)),I=f(()=>e.persistent!==!0),{registerTick:W,removeTick:N}=ne(),{registerTimeout:d}=ie(),{transitionProps:R,transitionStyle:U}=le(e),{localScrollTarget:T,changeScrollEvent:V,unconfigureScrollTarget:_}=ge(e,P),{anchorEl:o,canShow:B,anchorEvents:r}=ye({showing:c,configureAnchorEl:X}),{show:$,hide:m}=se({showing:c,canShow:B,handleShow:F,handleHide:G,hideOnRouteChange:I,processOnMount:!0});Object.assign(r,{delayShow:J,delayHide:K});const{showPortal:p,hidePortal:b,renderPortal:z}=re(h,s,Z,"tooltip");if(a.platform.is.mobile===!0){const t={anchorEl:o,innerRef:s,onClickOutside(n){return m(n),n.target.classList.contains("q-dialog__backdrop")&&ve(n),!0}},g=f(()=>e.modelValue===null&&e.persistent!==!0&&c.value===!0);C(g,n=>{(n===!0?pe:D)(t)}),E(()=>{D(t)})}function F(t){p(),W(()=>{l=new MutationObserver(()=>u()),l.observe(s.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),u(),P()}),i===void 0&&(i=C(()=>a.screen.width+"|"+a.screen.height+"|"+e.self+"|"+e.anchor+"|"+a.lang.rtl,u)),d(()=>{p(!0),y("show",t)},e.transitionDuration)}function G(t){N(),b(),S(),d(()=>{b(!0),y("hide",t)},e.transitionDuration)}function S(){l!==void 0&&(l.disconnect(),l=void 0),i!==void 0&&(i(),i=void 0),_(),k(r,"tooltipTemp")}function u(){const t=s.value;o.value===null||!t||Te({el:t,offset:e.offset,anchorEl:o.value,anchorOrigin:j.value,selfOrigin:Q.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function J(t){if(a.platform.is.mobile===!0){L(),document.body.classList.add("non-selectable");const g=o.value,n=["touchmove","touchcancel","touchend","click"].map(w=>[g,w,"delayHide","passiveCapture"]);x(r,"tooltipTemp",n)}d(()=>{$(t)},e.delay)}function K(t){a.platform.is.mobile===!0&&(k(r,"tooltipTemp"),L(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),d(()=>{m(t)},e.hideDelay)}function X(){if(e.noParentEvent===!0||o.value===null)return;const t=a.platform.is.mobile===!0?[[o.value,"touchstart","delayShow","passive"]]:[[o.value,"mouseenter","delayShow","passive"],[o.value,"mouseleave","delayHide","passive"]];x(r,"anchor",t)}function P(){if(o.value!==null||e.scrollTarget!==void 0){T.value=ue(o.value,e.scrollTarget);const t=e.noParentEvent===!0?u:m;V(T.value,t)}}function Y(){return c.value===!0?H("div",{...v,ref:s,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",v.class],style:[v.style,U.value],role:"tooltip"},fe(M.default)):null}function Z(){return H(ce,R.value,Y)}return E(S),Object.assign(h.proxy,{updatePosition:u}),z}});export{we as Q};
