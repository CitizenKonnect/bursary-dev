import{x as C,i as H,D as v,r as x,c as u,w as i,I as R,aR as $,h as _,g as Q,N as S,_ as O,Z as P,$ as k,a6 as I,a0 as N,a1 as U,a2 as L,d as m,a3 as j,ad as h,ae as A,ai as E}from"./index.56aced16.js";import{Q as F,u as w}from"./app_details_store.28cdd20c.js";var T=C({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(t,{slots:p,emit:c}){const{proxy:{$q:d}}=Q(),a=H(S,v);if(a===v)return console.error("QHeader needs to be child of QLayout"),v;const o=x(parseInt(t.heightHint,10)),r=x(!0),f=u(()=>t.reveal===!0||a.view.value.indexOf("H")>-1||d.platform.is.ios&&a.isContainer.value===!0),y=u(()=>{if(t.modelValue!==!0)return 0;if(f.value===!0)return r.value===!0?o.value:0;const e=o.value-a.scroll.value.position;return e>0?e:0}),g=u(()=>t.modelValue!==!0||f.value===!0&&r.value!==!0),V=u(()=>t.modelValue===!0&&g.value===!0&&t.reveal===!0),q=u(()=>"q-header q-layout__section--marginal "+(f.value===!0?"fixed":"absolute")+"-top"+(t.bordered===!0?" q-header--bordered":"")+(g.value===!0?" q-header--hidden":"")+(t.modelValue!==!0?" q-layout--prevent-focus":"")),B=u(()=>{const e=a.rows.value.top,s={};return e[0]==="l"&&a.left.space===!0&&(s[d.lang.rtl===!0?"right":"left"]=`${a.left.size}px`),e[2]==="r"&&a.right.space===!0&&(s[d.lang.rtl===!0?"left":"right"]=`${a.right.size}px`),s});function n(e,s){a.update("header",e,s)}function l(e,s){e.value!==s&&(e.value=s)}function D({height:e}){l(o,e),n("size",e)}function z(e){V.value===!0&&l(r,!0),c("focusin",e)}i(()=>t.modelValue,e=>{n("space",e),l(r,!0),a.animate()}),i(y,e=>{n("offset",e)}),i(()=>t.reveal,e=>{e===!1&&l(r,t.modelValue)}),i(r,e=>{a.animate(),c("reveal",e)}),i(a.scroll,e=>{t.reveal===!0&&l(r,e.direction==="up"||e.position<=t.revealOffset||e.position-e.inflectionPoint<100)});const b={};return a.instances.header=b,t.modelValue===!0&&n("size",o.value),n("space",t.modelValue),n("offset",y.value),R(()=>{a.instances.header===b&&(a.instances.header=void 0,n("size",0),n("offset",0),n("space",!1))}),()=>{const e=$(p.default,[]);return t.elevated===!0&&e.push(_("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),e.push(_(F,{debounce:0,onResize:D})),_("header",{class:q.value,style:B.value,onFocusin:z},e)}}});const{getDrawerState:W}=P(w()),{setDrawerState:K}=w(),M={data(){return{}},computed:{currentRoute(){var t;return(t=this.$route)==null?void 0:t.name},getDrawerState(){return W.value}},components:{UserProfile:k(()=>I(()=>import("./UserProfile.7af748c3.js"),["assets/UserProfile.7af748c3.js","assets/UserProfile.afed6036.css","assets/index.56aced16.js","assets/index.93ddf4f0.css","assets/QMenu.58a91336.js","assets/position-engine.9dfbd25a.js","assets/selection.e4c60947.js","assets/auth_user_store.0a1df304.js"]))},methods:{openDrawer(){K(!0)}}},Z={class:"q-pa-none"},G={class:"header_title_section flex flex-center justify-between"},J={class:"header_title"},X={class:"q-pr-md gt-xs cursor-pointer"};function Y(t,p,c,d,a,o){const r=N("UserProfile");return U(),L("div",Z,[m(T,{class:"header_background flex justify-between items-center"},{default:j(()=>[h("div",G,[m(A,{class:"lt-md",flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:o.openDrawer},null,8,["onClick"]),h("div",J,E(o.currentRoute),1)]),h("div",X,[m(r)])]),_:1})])}var ae=O(M,[["render",Y],["__scopeId","data-v-60907e0e"]]);export{ae as default};
