import{_ as p,$ as m,a6 as v,a1 as f,a2 as u,ad as e,ai as o,d as h,ae as r,b3 as b,b4 as x}from"./index.bacfec48.js";const y={props:{school_head_details:[String,Object]},components:{DeleteBtn:m(()=>v(()=>import("./DeleteBtn.a6c2267e.js"),["assets/DeleteBtn.a6c2267e.js","assets/index.bacfec48.js","assets/index.dc4e4c7b.css","assets/ClosePopup.79695a8f.js","assets/generateHeaders.c61a8e24.js","assets/auth_user_store.fb6dbab9.js","assets/axios.a3b240ae.js"]))}},s=t=>(b("data-v-6fb0d7dc"),t=t(),x(),t),g={class:"view-details"},w=s(()=>e("div",{class:"flex justify-between"},null,-1)),B=s(()=>e("div",{class:"text-center text-h6 q-mb-md"},"My profile ",-1)),q={class:"flex profile-detail-gap"},D=s(()=>e("div",{class:""},"First name:",-1)),E={class:""},I={class:"flex profile-detail-gap q-my-sm"},S=s(()=>e("div",{class:""},"Last name:",-1)),V={class:""},k={class:"flex profile-detail-gap q-my-sm"},j=s(()=>e("div",{class:""},"Phone number:",-1)),P={class:""},$={class:"flex profile-detail-gap q-my-sm"},A=s(()=>e("div",{class:""},"Email:",-1)),C={class:""},L={class:"flex justify-between q-mt-md"};function N(t,i,a,O,F,M){var d,_,l,c,n;return f(),u("div",g,[w,B,e("div",q,[D,e("div",E,o((d=a.school_head_details)==null?void 0:d.first_name),1)]),e("div",I,[S,e("div",V,o((_=a.school_head_details)==null?void 0:_.last_name),1)]),e("div",k,[j,e("div",P,o((l=a.school_head_details)==null?void 0:l.phone_number),1)]),e("div",$,[A,e("div",C,o((c=a.school_head_details)==null?void 0:c.email),1)]),e("div",L,[h(r,{outline:"",label:"Back",onClick:i[0]||(i[0]=Q=>t.$router.go(-1)),"no-caps":""}),h(r,{outline:"",label:"Edit",to:`/profile/edit/${(n=a.school_head_details)==null?void 0:n.id}`,"no-caps":"",style:{"min-width":"90px"}},null,8,["to"])])])}var T=p(y,[["render",N],["__scopeId","data-v-6fb0d7dc"]]);export{T as default};
