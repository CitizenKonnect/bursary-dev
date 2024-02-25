import{_ as C,Z as E,a8 as w,aa as H,a1 as p,a2 as m,ad as s,d as o,a3 as c,ae as u,b2 as f,ai as d,F as b,b5 as S,J as y,af as v,aM as R,ak as I,ah as M,b3 as V,b4 as q}from"./index.56aced16.js";import{Q as D}from"./QTooltip.0e0f570b.js";import{Q}from"./QExpansionItem.2f2a2c84.js";import{u as N,g as T}from"./generateHeaders.891fe619.js";import{u as O}from"./auth_user_store.0a1df304.js";import{_ as A}from"./arrow_back.cc0c166d.js";import{_ as B}from"./reply_black.74556d4b.js";import{f as J}from"./index.e3cc403f.js";import"./position-engine.9dfbd25a.js";import"./selection.e4c60947.js";import"./QItemLabel.cffd16e9.js";import"./axios.af9b5afd.js";const{getSettings:j}=E(N()),{getAuthUserDetails:k}=E(O()),z={data(){return{response_data:"",all_docs:[],expanded_items:[],index_to_reply:null,reply_message:null,messages:[]}},computed:{encryptionEnabled(){var e;return(e=j.value)==null?void 0:e.api_encryption_enabled},title(){var e;return(e=this.messages[0])==null?void 0:e.title},receiverRole(){var e;return(e=this.messages[0])==null?void 0:e.receiver_role},to(){var e,t;return(t=(e=this.messages[0])==null?void 0:e.to)==null?void 0:t.id},threadId(){var e;return(e=this.messages[0])==null?void 0:e.thread_id}},mounted(){this.fetchMessageThread()},methods:{formateDateTime(e){if(!!e)return J(new Date(e),"yyy-MM-dd HH:mma")},async fetchMessageThread(){try{const e={thread_id:this.$route.params.id};let n=(await this.$api.get("/api/v1/communications/thread/",{headers:{...T()},params:e})).data;this.encryptionEnabled&&(n=JSON.parse(w(n)));const{message:h,success:_,results:i}=n;this.response_data=i,this.all_docs=this.response_data.docs,this.messages=this.all_docs}catch{}},handleExpanded(e){this.expanded_items.push(e)},handleCollapse(e){const t=this.expanded_items.findIndex(n=>n===e);this.expanded_items.splice(t,1)},showMessageOnHeader(e){return!this.expanded_items.includes(e)},showReplyHere(e){return this.index_to_reply===e},replyThread(e){this.index_to_reply=e},cancelReply(){this.index_to_reply=null,this.reply_message=null},async sendReply(){var e;try{const t={to:this.to,from:k.value.id,sender_role:k.value.role,receiver_role:this.receiverRole,title:this.title,body:this.reply_message,thread_id:this.threadId,message_id:(e=this.messages[this.index_to_reply])==null?void 0:e.id};this.encryptionEnabled&&(t=H(JSON.stringify(t)));let h=(await this.$api.post("/api/v1/communications/reply/",t,{headers:{...T()}})).data;this.encryptionEnabled&&(h=JSON.parse(w(h)));const{message:_,success:i,results:r}=h}catch{}}}},x=e=>(V("data-v-4b3898ac"),e=e(),q(),e),F={class:"communication-thread"},U={class:"q-my-sm flex justify-between"},L=x(()=>s("img",{src:A,style:{width:"25px"}},null,-1)),Z={class:"text-h6"},G={class:"text-capitalize"},K={class:""},P={class:"flex items-center full-width justify-between"},W={class:""},X={class:"text-capitalize"},Y={class:"text-capitalize"},$={class:"message-timestamp"},ee={class:"q-my-xs"},se={class:"q-px-sm"},te=x(()=>s("div",{class:"text-grey"},"Replies",-1)),ae={class:"flex"},ie={class:"col"},re={class:""},oe={class:"q-my-sm"},de=x(()=>s("img",{src:B,style:{width:"25px"}},null,-1)),ne={class:"reply-area"},le={class:"flex q-mt-md justify-between"};function ce(e,t,n,h,_,i){return p(),m("div",F,[s("div",U,[o(u,{flat:"",dense:"",onClick:t[0]||(t[0]=r=>e.$router.go(-1))},{default:c(()=>[L]),_:1})]),s("div",Z,[f(" RE: "),s("span",G,d(i.title),1)]),s("div",K,[(p(!0),m(b,null,S(_.messages,(r,l)=>(p(),m("div",{class:"",key:l},[o(Q,{onShow:a=>i.handleExpanded(l),onHide:a=>i.handleCollapse(l),"dense-toggle":"","header-class":"text-body1 q-pa-none"},{header:c(()=>{var a,g;return[s("div",P,[s("div",W,[s("div",X,"From: "+d((a=r.from)==null?void 0:a.first_name),1),s("div",Y,"To: "+d((g=r.to)==null?void 0:g.first_name),1),y(s("div",{class:"text-subtitle2"},d(r.body),513),[[v,i.showMessageOnHeader(l)]])]),s("div",$,d(i.formateDateTime(r.createdAt)),1)])]}),default:c(()=>[s("div",ee,d(r.body),1),s("div",se,[te,(p(!0),m(b,null,S(r==null?void 0:r.replies,a=>(p(),m("div",{class:"",key:a==null?void 0:a.id},[s("div",ae,[s("div",ie,d(a==null?void 0:a.body),1),s("div",re,d(i.formateDateTime(a.createdAt)),1)]),o(R,{class:"q-my-xs"})]))),128))]),s("div",oe,[y(o(u,{flat:"",dense:"",onClick:a=>i.replyThread(l)},{default:c(()=>[de,o(D,null,{default:c(()=>[f("Reply to this thread")]),_:1})]),_:2},1032,["onClick"]),[[v,l!=_.index_to_reply]])]),y(s("div",ne,[s("form",{onSubmit:t[2]||(t[2]=I((...a)=>i.sendReply&&i.sendReply(...a),["prevent"]))},[o(M,{modelValue:_.reply_message,"onUpdate:modelValue":t[1]||(t[1]=a=>_.reply_message=a),outlined:"",type:"textarea",placeholder:"Enter reply here"},null,8,["modelValue"]),s("div",le,[o(u,{unelevated:"","no-caps":"",dense:"",color:"red",onClick:i.cancelReply,style:{"min-width":"100px"}},{default:c(()=>[f("Cancel")]),_:1},8,["onClick"]),o(u,{unelevated:"","no-caps":"",color:"green",type:"submit",dense:"",style:{"min-width":"100px"}},{default:c(()=>[f("Send ")]),_:1})])],32)],512),[[v,i.showReplyHere(l)]])]),_:2},1032,["onShow","onHide"]),o(R)]))),128))])])}var Se=C(z,[["render",ce],["__scopeId","data-v-4b3898ac"]]);export{Se as default};
