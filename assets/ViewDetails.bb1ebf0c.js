import{_ as Q,a8 as j,a1 as n,a2 as r,ad as s,ai as o,d as e,aM as i,J as V,af as F,F as C,b5 as G,ae as J,b3 as H,b4 as M}from"./index.56aced16.js";import{g as O}from"./generateHeaders.891fe619.js";import"./auth_user_store.0a1df304.js";import"./axios.af9b5afd.js";const P={data(){return{details:""}},computed:{schoolDetails(){return this.details.school_details}},mounted(){this.fetchDetails()},methods:{async fetchDetails(c={}){try{c={id:this.$route.params.id};let _=(await this.$api.get("/api/v1/admin/school-heads/details/",{headers:{...O()},params:c})).data;this.encryptionEnabled&&(_=JSON.parse(j(_)));const{message:L,success:d,results:a}=_;this.details=a}catch{}}}},t=c=>(H("data-v-4d175619"),c=c(),M(),c),T={class:"main-page-height flex flex-center"},W={class:"view-details"},A=t(()=>s("div",{class:"text-h6 text-center"},"School head details",-1)),K={class:"row"},R={class:"col-md col-xs-12 q-pa-md"},U={class:"details-key-pair q-my-md"},X=t(()=>s("div",{class:""},"First name:",-1)),Y={class:"text-capitalize"},Z={class:"details-key-pair q-my-md"},$=t(()=>s("div",{class:""},"Phone number:",-1)),ss={class:"text-capitalize"},es={class:"col-md col-xs-12 q-pa-md"},ts={class:"details-key-pair q-my-md"},is=t(()=>s("div",{class:""},"Last name:",-1)),as={class:"text-capitalize"},os={class:"details-key-pair q-my-md no-wrap"},cs=t(()=>s("div",{class:""},"Email:",-1)),ds={class:""},ls=t(()=>s("div",{class:"text-h6 text-center"},"School details",-1)),_s={class:"row"},ns={class:"col-md col-xs-12 q-pa-md"},rs={class:"details-key-pair q-my-md"},hs=t(()=>s("div",{class:""},"Name:",-1)),ms={class:"text-capitalize"},vs={class:"details-key-pair q-my-md"},ps=t(()=>s("div",{class:""},"Serial number:",-1)),us={class:""},ys={class:"details-key-pair q-my-md"},fs=t(()=>s("div",{class:""},"Type:",-1)),bs={class:"text-capitalize"},xs={class:"details-key-pair q-my-md"},qs=t(()=>s("div",{class:""},"Gender:",-1)),Ds={class:"text-capitalize"},ks={class:"details-key-pair q-my-md"},zs=t(()=>s("div",{class:""},"Number of classes:",-1)),gs={class:"text-capitalize"},ws={class:"details-key-pair q-my-md"},Ns=t(()=>s("div",{class:""},"Number of students per class:",-1)),Ss={class:"text-capitalize"},Bs={class:"details-key-pair q-my-md"},Es=t(()=>s("div",{class:""},"Number of teachers:",-1)),Is={class:"text-capitalize"},Vs={class:"col-md col-xs-12 q-pa-md"},Fs={class:"details-key-pair q-my-md"},Js=t(()=>s("div",{class:""},"Number of teachers toilets:",-1)),Ls={class:"text-capitalize"},Qs={class:"details-key-pair q-my-md"},js=t(()=>s("div",{class:""},"Number of boys toilets:",-1)),Cs={class:"text-capitalize"},Gs={class:"details-key-pair q-my-md"},Hs=t(()=>s("div",{class:""},"Number of girls toilets:",-1)),Ms={class:"text-capitalize"},Os={class:"details-key-pair q-my-md"},Ps=t(()=>s("div",{class:""},"Number of labs:",-1)),Ts={class:"text-capitalize"},Ws={class:"details-key-pairs q-my-md"},As=t(()=>s("div",{class:""},"Water sources:",-1)),Ks={class:"text-capitalize q-ma-none"},Rs={class:"flex justify-between q-mt-md"};function Us(c,l,_,L,d,a){var h,m,v,p,u,y,f,b,x,q,D,k,z,g,w,N,S,B,E;return n(),r("div",T,[s("div",W,[A,s("div",K,[s("div",R,[s("div",U,[X,s("div",Y,o((h=d.details)==null?void 0:h.first_name),1)]),e(i),s("div",Z,[$,s("div",ss,o((m=d.details)==null?void 0:m.phone_number),1)]),e(i)]),e(i,{vertical:"",inset:""}),s("div",es,[s("div",ts,[is,s("div",as,o((v=d.details)==null?void 0:v.last_name),1)]),e(i),s("div",os,[cs,s("div",ds,o((p=d.details)==null?void 0:p.email),1)]),e(i)])]),ls,s("div",_s,[s("div",ns,[s("div",rs,[hs,s("div",ms,o((u=a.schoolDetails)==null?void 0:u.name_of_school),1)]),e(i),s("div",vs,[ps,s("div",us,o((y=a.schoolDetails)==null?void 0:y.school_serial_number),1)]),e(i),s("div",ys,[fs,s("div",bs,o((f=a.schoolDetails)==null?void 0:f.type_of_school),1)]),e(i),s("div",xs,[qs,s("div",Ds,o((b=a.schoolDetails)==null?void 0:b.student_gender),1)]),e(i),s("div",ks,[zs,s("div",gs,o((x=a.schoolDetails)==null?void 0:x.number_of_classes),1)]),e(i),s("div",ws,[Ns,s("div",Ss,o((q=a.schoolDetails)==null?void 0:q.number_of_students_per_class),1)]),e(i),s("div",Bs,[Es,s("div",Is,o((D=a.schoolDetails)==null?void 0:D.number_of_teachers),1)]),e(i)]),e(i,{vertical:"",inset:""}),s("div",Vs,[s("div",Fs,[Js,s("div",Ls,o((k=a.schoolDetails)==null?void 0:k.number_of_teachers_toilets),1)]),e(i),s("div",Qs,[js,s("div",Cs,o((z=a.schoolDetails)==null?void 0:z.number_of_boys_toilets),1)]),e(i),s("div",Gs,[Hs,s("div",Ms,o((g=a.schoolDetails)==null?void 0:g.number_of_girls_toilets),1)]),e(i),V(s("div",Os,[Ps,s("div",Ts,o((w=a.schoolDetails)==null?void 0:w.number_of_labs),1)],512),[[F,(N=a.schoolDetails)==null?void 0:N.school_has_labs]]),V(s("div",Ws,[As,s("ul",Ks,[(n(!0),r(C,null,G((S=a.schoolDetails)==null?void 0:S.types_of_water_sources,(I,Xs)=>(n(),r("li",null,o(I),1))),256))])],512),[[F,(B=a.schoolDetails)==null?void 0:B.school_has_water_source]]),e(i)])]),s("div",Rs,[e(J,{outline:"",label:"Back",onClick:l[0]||(l[0]=I=>c.$router.go(-1)),"no-caps":""}),e(J,{outline:"",label:"Edit","no-caps":"",to:`/school-heads/edit/${(E=d.details)==null?void 0:E.id}`},null,8,["to"])])])])}var ee=Q(P,[["render",Us],["__scopeId","data-v-4d175619"]]);export{ee as default};
