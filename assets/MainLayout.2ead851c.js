import{j as Je,k as R,n as ze,l as Ge,m as U,p as ae,q as be,s as oe,t as de,u as ne,v as Ze,x as X,y as et,z as tt,A as at,B as ot,C as nt,D as A,r as k,c as v,E as rt,G as it,w as C,o as Le,H as we,I as Be,J as lt,h as x,K as Ce,L as De,i as Me,M as ut,N as fe,g as Y,O as Ee,P as st,Q as ct,R as dt,S as ft,U as vt,V as ht,W as re,X as N,a as mt,Y as pt,_ as gt,Z as ve,$ as yt,a0 as Se,a1 as ie,a2 as bt,d as le,a3 as ue,a4 as qe,a5 as wt,a6 as Ct}from"./index.56aced16.js";import{c as St}from"./selection.e4c60947.js";import{b as I}from"./format.a33550d6.js";import{Q as _e,u as Pe}from"./app_details_store.28cdd20c.js";import{u as qt,g as _t}from"./generateHeaders.891fe619.js";import{u as Oe}from"./auth_user_store.0a1df304.js";import"./axios.af9b5afd.js";const he={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Tt=Object.keys(he);he.all=!0;function Te(e){const n={};for(const i of Tt)e[i]===!0&&(n[i]=!0);return Object.keys(n).length===0?he:(n.horizontal===!0?n.left=n.right=!0:n.left===!0&&n.right===!0&&(n.horizontal=!0),n.vertical===!0?n.up=n.down=!0:n.up===!0&&n.down===!0&&(n.vertical=!0),n.horizontal===!0&&n.vertical===!0&&(n.all=!0),n)}const xt=["INPUT","TEXTAREA"];function xe(e,n){return n.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof n.handler=="function"&&xt.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(n.uid)===-1)}function se(e,n,i){const u=de(e);let t,a=u.left-n.event.x,s=u.top-n.event.y,h=Math.abs(a),f=Math.abs(s);const l=n.direction;l.horizontal===!0&&l.vertical!==!0?t=a<0?"left":"right":l.horizontal!==!0&&l.vertical===!0?t=s<0?"up":"down":l.up===!0&&s<0?(t="up",h>f&&(l.left===!0&&a<0?t="left":l.right===!0&&a>0&&(t="right"))):l.down===!0&&s>0?(t="down",h>f&&(l.left===!0&&a<0?t="left":l.right===!0&&a>0&&(t="right"))):l.left===!0&&a<0?(t="left",h<f&&(l.up===!0&&s<0?t="up":l.down===!0&&s>0&&(t="down"))):l.right===!0&&a>0&&(t="right",h<f&&(l.up===!0&&s<0?t="up":l.down===!0&&s>0&&(t="down")));let r=!1;if(t===void 0&&i===!1){if(n.event.isFirst===!0||n.event.lastDir===void 0)return{};t=n.event.lastDir,r=!0,t==="left"||t==="right"?(u.left-=a,h=0,a=0):(u.top-=s,f=0,s=0)}return{synthetic:r,payload:{evt:e,touch:n.event.mouse!==!0,mouse:n.event.mouse===!0,position:u,direction:t,isFirst:n.event.isFirst,isFinal:i===!0,duration:Date.now()-n.event.time,distance:{x:h,y:f},offset:{x:a,y:s},delta:{x:u.left-n.event.lastX,y:u.top-n.event.lastY}}}}let kt=0;var ce=Je({name:"touch-pan",beforeMount(e,{value:n,modifiers:i}){if(i.mouse!==!0&&R.has.touch!==!0)return;function u(a,s){i.mouse===!0&&s===!0?Ze(a):(i.stop===!0&&oe(a),i.prevent===!0&&be(a))}const t={uid:"qvtp_"+kt++,handler:n,modifiers:i,direction:Te(i),noop:ze,mouseStart(a){xe(a,t)&&Ge(a)&&(U(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(a,!0))},touchStart(a){if(xe(a,t)){const s=a.target;U(t,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","passiveCapture"],[s,"touchend","end","passiveCapture"]]),t.start(a)}},start(a,s){if(R.is.firefox===!0&&ae(e,!0),t.lastEvt=a,s===!0||i.stop===!0){if(t.direction.all!==!0&&(s!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const l=a.type.indexOf("mouse")>-1?new MouseEvent(a.type,a):new TouchEvent(a.type,a);a.defaultPrevented===!0&&be(l),a.cancelBubble===!0&&oe(l),Object.assign(l,{qKeyEvent:a.qKeyEvent,qClickOutside:a.qClickOutside,qAnchorHandled:a.qAnchorHandled,qClonedBy:a.qClonedBy===void 0?[t.uid]:a.qClonedBy.concat(t.uid)}),t.initialEvent={target:a.target,event:l}}oe(a)}const{left:h,top:f}=de(a);t.event={x:h,y:f,time:Date.now(),mouse:s===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:h,lastY:f}},move(a){if(t.event===void 0)return;const s=de(a),h=s.left-t.event.x,f=s.top-t.event.y;if(h===0&&f===0)return;t.lastEvt=a;const l=t.event.mouse===!0,r=()=>{u(a,l);let p;i.preserveCursor!==!0&&i.preservecursor!==!0&&(p=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),l===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),St(),t.styleCleanup=m=>{if(t.styleCleanup=void 0,p!==void 0&&(document.documentElement.style.cursor=p),document.body.classList.remove("non-selectable"),l===!0){const $=()=>{document.body.classList.remove("no-pointer-events--children")};m!==void 0?setTimeout(()=>{$(),m()},50):$()}else m!==void 0&&m()}};if(t.event.detected===!0){t.event.isFirst!==!0&&u(a,t.event.mouse);const{payload:p,synthetic:m}=se(a,t,!1);p!==void 0&&(t.handler(p)===!1?t.end(a):(t.styleCleanup===void 0&&t.event.isFirst===!0&&r(),t.event.lastX=p.position.left,t.event.lastY=p.position.top,t.event.lastDir=m===!0?void 0:p.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||l===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){r(),t.event.detected=!0,t.move(a);return}const w=Math.abs(h),y=Math.abs(f);w!==y&&(t.direction.horizontal===!0&&w>y||t.direction.vertical===!0&&w<y||t.direction.up===!0&&w<y&&f<0||t.direction.down===!0&&w<y&&f>0||t.direction.left===!0&&w>y&&h<0||t.direction.right===!0&&w>y&&h>0?(t.event.detected=!0,t.move(a)):t.end(a,!0))},end(a,s){if(t.event!==void 0){if(ne(t,"temp"),R.is.firefox===!0&&ae(e,!1),s===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(se(a===void 0?t.lastEvt:a,t).payload);const{payload:h}=se(a===void 0?t.lastEvt:a,t,!0),f=()=>{t.handler(h)};t.styleCleanup!==void 0?t.styleCleanup(f):f()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,i.mouse===!0){const a=i.mouseCapture===!0||i.mousecapture===!0?"Capture":"";U(t,"main",[[e,"mousedown","mouseStart",`passive${a}`]])}R.has.touch===!0&&U(t,"main",[[e,"touchstart","touchStart",`passive${i.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,n){const i=e.__qtouchpan;i!==void 0&&(n.oldValue!==n.value&&(typeof value!="function"&&i.end(),i.handler=n.value),i.direction=Te(n.modifiers))},beforeUnmount(e){const n=e.__qtouchpan;n!==void 0&&(n.event!==void 0&&n.end(),ne(n,"main"),ne(n,"temp"),R.is.firefox===!0&&ae(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete e.__qtouchpan)}});const ke=150;var $t=X({name:"QDrawer",inheritAttrs:!1,props:{...et,...tt,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...at,"onLayout","miniState"],setup(e,{slots:n,emit:i,attrs:u}){const t=Y(),{proxy:{$q:a}}=t,s=ot(e,a),{preventBodyScroll:h}=ut(),{registerTimeout:f,removeTimeout:l}=nt(),r=Me(fe,A);if(r===A)return console.error("QDrawer needs to be child of QLayout"),A;let w,y=null,p;const m=k(e.behavior==="mobile"||e.behavior!=="desktop"&&r.totalWidth.value<=e.breakpoint),$=v(()=>e.mini===!0&&m.value!==!0),S=v(()=>$.value===!0?e.miniWidth:e.width),g=k(e.showIfAbove===!0&&m.value===!1?!0:e.modelValue===!0),D=v(()=>e.persistent!==!0&&(m.value===!0||Ae.value===!0));function H(o,c){if(M(),o!==!1&&r.animate(),T(0),m.value===!0){const q=r.instances[Q.value];q!==void 0&&q.belowBreakpoint===!0&&q.hide(!1),L(1),r.isContainer.value!==!0&&h(!0)}else L(0),o!==!1&&Z(!1);f(()=>{o!==!1&&Z(!0),c!==!0&&i("show",o)},ke)}function d(o,c){F(),o!==!1&&r.animate(),L(0),T(P.value*S.value),ee(),c!==!0?f(()=>{i("hide",o)},ke):l()}const{show:b,hide:_}=rt({showing:g,hideOnRouteChange:D,handleShow:H,handleHide:d}),{addToHistory:M,removeFromHistory:F}=it(g,_,D),E={belowBreakpoint:m,hide:_},z=v(()=>e.side==="right"),P=v(()=>(a.lang.rtl===!0?-1:1)*(z.value===!0?1:-1)),me=k(0),O=k(!1),j=k(!1),pe=k(S.value*P.value),Q=v(()=>z.value===!0?"left":"right"),K=v(()=>g.value===!0&&m.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:S.value:0),J=v(()=>e.overlay===!0||e.miniToOverlay===!0||r.view.value.indexOf(z.value?"R":"L")>-1||a.platform.is.ios===!0&&r.isContainer.value===!0),W=v(()=>e.overlay===!1&&g.value===!0&&m.value===!1),Ae=v(()=>e.overlay===!0&&g.value===!0&&m.value===!1),He=v(()=>"fullscreen q-drawer__backdrop"+(g.value===!1&&O.value===!1?" hidden":"")),Fe=v(()=>({backgroundColor:`rgba(0,0,0,${me.value*.4})`})),ge=v(()=>z.value===!0?r.rows.value.top[2]==="r":r.rows.value.top[0]==="l"),We=v(()=>z.value===!0?r.rows.value.bottom[2]==="r":r.rows.value.bottom[0]==="l"),Re=v(()=>{const o={};return r.header.space===!0&&ge.value===!1&&(J.value===!0?o.top=`${r.header.offset}px`:r.header.space===!0&&(o.top=`${r.header.size}px`)),r.footer.space===!0&&We.value===!1&&(J.value===!0?o.bottom=`${r.footer.offset}px`:r.footer.space===!0&&(o.bottom=`${r.footer.size}px`)),o}),Qe=v(()=>{const o={width:`${S.value}px`,transform:`translateX(${pe.value}px)`};return m.value===!0?o:Object.assign(o,Re.value)}),Ve=v(()=>"q-drawer__content fit "+(r.isContainer.value!==!0?"scroll":"overflow-auto")),Ue=v(()=>`q-drawer q-drawer--${e.side}`+(j.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(s.value===!0?" q-drawer--dark q-dark":"")+(O.value===!0?" no-transition":g.value===!0?"":" q-layout--prevent-focus")+(m.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${$.value===!0?"mini":"standard"}`+(J.value===!0||W.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(ge.value===!0?" q-drawer--top-padding":""))),Ne=v(()=>{const o=a.lang.rtl===!0?e.side:Q.value;return[[ce,je,void 0,{[o]:!0,mouse:!0}]]}),Ie=v(()=>{const o=a.lang.rtl===!0?Q.value:e.side;return[[ce,ye,void 0,{[o]:!0,mouse:!0}]]}),Xe=v(()=>{const o=a.lang.rtl===!0?Q.value:e.side;return[[ce,ye,void 0,{[o]:!0,mouse:!0,mouseAllDir:!0}]]});function G(){Ke(m,e.behavior==="mobile"||e.behavior!=="desktop"&&r.totalWidth.value<=e.breakpoint)}C(m,o=>{o===!0?(w=g.value,g.value===!0&&_(!1)):e.overlay===!1&&e.behavior!=="mobile"&&w!==!1&&(g.value===!0?(T(0),L(0),ee()):b(!1))}),C(()=>e.side,(o,c)=>{r.instances[c]===E&&(r.instances[c]=void 0,r[c].space=!1,r[c].offset=0),r.instances[o]=E,r[o].size=S.value,r[o].space=W.value,r[o].offset=K.value}),C(r.totalWidth,()=>{(r.isContainer.value===!0||document.qScrollPrevented!==!0)&&G()}),C(()=>e.behavior+e.breakpoint,G),C(r.isContainer,o=>{g.value===!0&&h(o!==!0),o===!0&&G()}),C(r.scrollbarWidth,()=>{T(g.value===!0?0:void 0)}),C(K,o=>{B("offset",o)}),C(W,o=>{i("onLayout",o),B("space",o)}),C(z,()=>{T()}),C(S,o=>{T(),te(e.miniToOverlay,o)}),C(()=>e.miniToOverlay,o=>{te(o,S.value)}),C(()=>a.lang.rtl,()=>{T()}),C(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(Ye(),r.animate())}),C($,o=>{i("miniState",o)});function T(o){o===void 0?we(()=>{o=g.value===!0?0:S.value,T(P.value*o)}):(r.isContainer.value===!0&&z.value===!0&&(m.value===!0||Math.abs(o)===S.value)&&(o+=P.value*r.scrollbarWidth.value),pe.value=o)}function L(o){me.value=o}function Z(o){const c=o===!0?"remove":r.isContainer.value!==!0?"add":"";c!==""&&document.body.classList[c]("q-body--drawer-toggle")}function Ye(){y!==null&&clearTimeout(y),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),j.value=!0,y=setTimeout(()=>{y=null,j.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function je(o){if(g.value!==!1)return;const c=S.value,q=I(o.distance.x,0,c);if(o.isFinal===!0){q>=Math.min(75,c)===!0?b():(r.animate(),L(0),T(P.value*c)),O.value=!1;return}T((a.lang.rtl===!0?z.value!==!0:z.value)?Math.max(c-q,0):Math.min(0,q-c)),L(I(q/c,0,1)),o.isFirst===!0&&(O.value=!0)}function ye(o){if(g.value!==!0)return;const c=S.value,q=o.direction===e.side,V=(a.lang.rtl===!0?q!==!0:q)?I(o.distance.x,0,c):0;if(o.isFinal===!0){Math.abs(V)<Math.min(75,c)===!0?(r.animate(),L(1),T(0)):_(),O.value=!1;return}T(P.value*V),L(I(1-V/c,0,1)),o.isFirst===!0&&(O.value=!0)}function ee(){h(!1),Z(!0)}function B(o,c){r.update(e.side,o,c)}function Ke(o,c){o.value!==c&&(o.value=c)}function te(o,c){B("size",o===!0?e.miniWidth:c)}return r.instances[e.side]=E,te(e.miniToOverlay,S.value),B("space",W.value),B("offset",K.value),e.showIfAbove===!0&&e.modelValue!==!0&&g.value===!0&&e["onUpdate:modelValue"]!==void 0&&i("update:modelValue",!0),Le(()=>{i("onLayout",W.value),i("miniState",$.value),w=e.showIfAbove===!0;const o=()=>{(g.value===!0?H:d)(!1,!0)};if(r.totalWidth.value!==0){we(o);return}p=C(r.totalWidth,()=>{p(),p=void 0,g.value===!1&&e.showIfAbove===!0&&m.value===!1?b(!1):o()})}),Be(()=>{p!==void 0&&p(),y!==null&&(clearTimeout(y),y=null),g.value===!0&&ee(),r.instances[e.side]===E&&(r.instances[e.side]=void 0,B("size",0),B("offset",0),B("space",!1))}),()=>{const o=[];m.value===!0&&(e.noSwipeOpen===!1&&o.push(lt(x("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),Ne.value)),o.push(Ce("div",{ref:"backdrop",class:He.value,style:Fe.value,"aria-hidden":"true",onClick:_},void 0,"backdrop",e.noSwipeBackdrop!==!0&&g.value===!0,()=>Xe.value)));const c=$.value===!0&&n.mini!==void 0,q=[x("div",{...u,key:""+c,class:[Ve.value,u.class]},c===!0?n.mini():De(n.default))];return e.elevated===!0&&g.value===!0&&q.push(x("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),o.push(Ce("aside",{ref:"content",class:Ue.value,style:Qe.value},q,"contentclose",e.noSwipeClose!==!0&&m.value===!0,()=>Ie.value)),x("div",{class:"q-drawer-container"},o)}}}),zt=X({name:"QPageContainer",setup(e,{slots:n}){const{proxy:{$q:i}}=Y(),u=Me(fe,A);if(u===A)return console.error("QPageContainer needs to be child of QLayout"),A;Ee(st,!0);const t=v(()=>{const a={};return u.header.space===!0&&(a.paddingTop=`${u.header.size}px`),u.right.space===!0&&(a[`padding${i.lang.rtl===!0?"Left":"Right"}`]=`${u.right.size}px`),u.footer.space===!0&&(a.paddingBottom=`${u.footer.size}px`),u.left.space===!0&&(a[`padding${i.lang.rtl===!0?"Right":"Left"}`]=`${u.left.size}px`),a});return()=>x("div",{class:"q-page-container",style:t.value},De(n.default))}});const{passive:$e}=dt,Lt=["both","horizontal","vertical"];var Bt=X({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Lt.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:n}){const i={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let u=null,t,a;C(()=>e.scrollTarget,()=>{f(),h()});function s(){u!==null&&u();const w=Math.max(0,ft(t)),y=vt(t),p={top:w-i.position.top,left:y-i.position.left};if(e.axis==="vertical"&&p.top===0||e.axis==="horizontal"&&p.left===0)return;const m=Math.abs(p.top)>=Math.abs(p.left)?p.top<0?"up":"down":p.left<0?"left":"right";i.position={top:w,left:y},i.directionChanged=i.direction!==m,i.delta=p,i.directionChanged===!0&&(i.direction=m,i.inflectionPoint=i.position),n("scroll",{...i})}function h(){t=ct(a,e.scrollTarget),t.addEventListener("scroll",l,$e),l(!0)}function f(){t!==void 0&&(t.removeEventListener("scroll",l,$e),t=void 0)}function l(w){if(w===!0||e.debounce===0||e.debounce==="0")s();else if(u===null){const[y,p]=e.debounce?[setTimeout(s,e.debounce),clearTimeout]:[requestAnimationFrame(s),cancelAnimationFrame];u=()=>{p(y),u=null}}}const{proxy:r}=Y();return C(()=>r.$q.lang.rtl,s),Le(()=>{a=r.$el.parentNode,h()}),Be(()=>{u!==null&&u(),f()}),Object.assign(r,{trigger:l,getPosition:()=>i}),ze}}),Dt=X({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:n,emit:i}){const{proxy:{$q:u}}=Y(),t=k(null),a=k(u.screen.height),s=k(e.container===!0?0:u.screen.width),h=k({position:0,direction:"down",inflectionPoint:0}),f=k(0),l=k(ht.value===!0?0:re()),r=v(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),w=v(()=>e.container===!1?{minHeight:u.screen.height+"px"}:null),y=v(()=>l.value!==0?{[u.lang.rtl===!0?"left":"right"]:`${l.value}px`}:null),p=v(()=>l.value!==0?{[u.lang.rtl===!0?"right":"left"]:0,[u.lang.rtl===!0?"left":"right"]:`-${l.value}px`,width:`calc(100% + ${l.value}px)`}:null);function m(d){if(e.container===!0||document.qScrollPrevented!==!0){const b={position:d.position.top,direction:d.direction,directionChanged:d.directionChanged,inflectionPoint:d.inflectionPoint.top,delta:d.delta.top};h.value=b,e.onScroll!==void 0&&i("scroll",b)}}function $(d){const{height:b,width:_}=d;let M=!1;a.value!==b&&(M=!0,a.value=b,e.onScrollHeight!==void 0&&i("scrollHeight",b),g()),s.value!==_&&(M=!0,s.value=_),M===!0&&e.onResize!==void 0&&i("resize",d)}function S({height:d}){f.value!==d&&(f.value=d,g())}function g(){if(e.container===!0){const d=a.value>f.value?re():0;l.value!==d&&(l.value=d)}}let D=null;const H={instances:{},view:v(()=>e.view),isContainer:v(()=>e.container),rootRef:t,height:a,containerHeight:f,scrollbarWidth:l,totalWidth:v(()=>s.value+l.value),rows:v(()=>{const d=e.view.toLowerCase().split(" ");return{top:d[0].split(""),middle:d[1].split(""),bottom:d[2].split("")}}),header:N({size:0,offset:0,space:!1}),right:N({size:300,offset:0,space:!1}),footer:N({size:0,offset:0,space:!1}),left:N({size:300,offset:0,space:!1}),scroll:h,animate(){D!==null?clearTimeout(D):document.body.classList.add("q-body--layout-animate"),D=setTimeout(()=>{D=null,document.body.classList.remove("q-body--layout-animate")},155)},update(d,b,_){H[d][b]=_}};if(Ee(fe,H),re()>0){let _=function(){d=null,b.classList.remove("hide-scrollbar")},M=function(){if(d===null){if(b.scrollHeight>u.screen.height)return;b.classList.add("hide-scrollbar")}else clearTimeout(d);d=setTimeout(_,300)},F=function(E){d!==null&&E==="remove"&&(clearTimeout(d),_()),window[`${E}EventListener`]("resize",M)},d=null;const b=document.body;C(()=>e.container!==!0?"add":"remove",F),e.container!==!0&&F("add"),mt(()=>{F("remove")})}return()=>{const d=pt(n.default,[x(Bt,{onScroll:m}),x(_e,{onResize:$})]),b=x("div",{class:r.value,style:w.value,ref:e.container===!0?void 0:t,tabindex:-1},d);return e.container===!0?x("div",{class:"q-layout-container overflow-hidden",ref:t},[x(_e,{onResize:S}),x("div",{class:"absolute-full",style:y.value},[x("div",{class:"scroll",style:p.value},[b])])]):b}}});const{getSettings:Mt}=ve(qt()),{getDrawerState:Et}=ve(Pe()),{setDrawerState:Pt}=Pe(),{setUserDetails:Ot}=Oe(),{getAuthUserDetails:At}=ve(Oe()),Ht={name:"MainLayout",data(){return{left_drawer_open:!1}},computed:{getAuthUserDetails(){return At.value},getDrawerState(){return Et.value},encryptionEnabled(){var e;return(e=Mt.value)==null?void 0:e.api_encryption_enabled}},components:{SideMenu:yt(()=>Ct(()=>import("./SideMenu.4d0fda2a.js"),["assets/SideMenu.4d0fda2a.js","assets/index.56aced16.js","assets/index.93ddf4f0.css","assets/auth_user_store.0a1df304.js"]))},watch:{getDrawerState:{handler(e){this.left_drawer_open=e}}},mounted(){this.fetchMe()},methods:{hideDrawer(){Pt(!1)},async fetchMe(){try{if(!this.getAuthUserDetails.id)return this.$router.push("/auth/login");const e={id:this.getAuthUserDetails.id};let i=(await this.$api.get("/api/v1/users/me/",{headers:{..._t()},params:e})).data;this.encryptionEnabled&&(i=JSON.parse(decrypt(i)));const{message:u,success:t,results:a}=i;Ot(a)}catch(e){console.log("Fetch one user error: ",e)}}}},Ft={class:"main-layout"};function Wt(e,n,i,u,t,a){const s=Se("SideMenu"),h=Se("router-view");return ie(),bt("div",Ft,[le(Dt,{view:"hHh Lpr lFf"},{default:ue(()=>[e.$q.screen.lt.md?(ie(),qe($t,{key:0,modelValue:t.left_drawer_open,"onUpdate:modelValue":n[0]||(n[0]=f=>t.left_drawer_open=f),width:260,onBeforeHide:a.hideDrawer,class:"bg-primary"},{default:ue(()=>[le(s)]),_:1},8,["modelValue","onBeforeHide"])):wt("",!0),le(zt,null,{default:ue(()=>[(ie(),qe(h,{key:e.$route.fullPath}))]),_:1})]),_:1})])}var jt=gt(Ht,[["render",Wt]]);export{jt as default};
