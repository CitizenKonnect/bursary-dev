import{_ as u,Z as m,aa as f,a8 as _,a1 as g,a2 as h,d as t,a3 as s,b2 as y,ae as n,cL as w,cM as C,ag as v,cN as S,J as c,aH as b,F as x}from"./index.56aced16.js";import{C as p}from"./ClosePopup.bce31f41.js";import{u as k,g as D,p as E,r as N}from"./generateHeaders.891fe619.js";import"./auth_user_store.0a1df304.js";import"./axios.af9b5afd.js";const{getSettings:Q}=m(k()),B={props:{url:String,id:String},data(){return{show_confirm_delete_dialog:!1}},computed:{encryptionEnabled(){var e;return(e=Q.value)==null?void 0:e.api_encryption_enabled}},methods:{async remove(){try{let e={id:this.id};this.encryptionEnabled&&(e=f(JSON.stringify(e)));let r=(await this.$api.delete(this.url,{headers:{...D()},data:e})).data;this.encryptionEnabled&&(r=JSON.parse(_(r)));const{message:l,success:o,results:i}=r;E({message:l}),this.$router.go(-1)}catch(e){N({caller:"Delete",error:e})}}}};function $(e,a,r,l,o,i){return g(),h(x,null,[t(n,{outline:"","no-caps":"",color:"red",onClick:a[0]||(a[0]=d=>o.show_confirm_delete_dialog=!0),style:{"min-width":"90px"}},{default:s(()=>[y("Delete")]),_:1}),t(b,{"model-value":o.show_confirm_delete_dialog,"onUpdate:modelValue":a[1]||(a[1]=d=>o.show_confirm_delete_dialog=d)},{default:s(()=>[t(w,null,{default:s(()=>[t(C,{class:"text-center q-pa-sm"},{default:s(()=>[v(e.$slots,"default")]),_:3}),t(S,{align:"between"},{default:s(()=>[c(t(n,{dense:"",outline:"",label:"Cancel","no-caps":"",style:{"min-width":"90px"}},null,512),[[p]]),c(t(n,{dense:"",unelevated:"",label:"Confirm",color:"red","no-caps":"",onClick:i.remove,style:{"min-width":"90px"}},null,8,["onClick"]),[[p]])]),_:1})]),_:3})]),_:3},8,["model-value"])],64)}var P=u(B,[["render",$]]);export{P as default};
