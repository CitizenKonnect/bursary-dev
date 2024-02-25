import{_ as ts,Z as os,a8 as K,aa as is,a1 as u,a2 as p,ad as s,ai as i,d as n,ah as m,a5 as h,a3 as X,b2 as $,ae as ss,ak as ls,b3 as as,b4 as ds}from"./index.bacfec48.js";import{Q as rs}from"./QSelect.0b2e4f76.js";import{u as ns}from"./index.91f2720f.js";import{c as v,r as x}from"./index.e03e1fb1.js";import{u as cs,g as es,p as _s,r as ms}from"./generateHeaders.c61a8e24.js";import{u as us}from"./auth_user_store.fb6dbab9.js";import"./QItemLabel.74f9032e.js";import"./QMenu.7f6159df.js";import"./position-engine.bab6871e.js";import"./selection.0f6ce218.js";import"./format.a33550d6.js";import"./axios.a3b240ae.js";const{getSettings:ps}=os(cs());os(us());const fs={setup(){return{v$:ns()}},data(){return{application_details:"",form:{year_of_study:null,semester:null,level_of_study:null,mode_of_study:null,mode_of_study:null,income_of_father:null,income_of_mother:null,income_of_guardian:null}}},computed:{encryptionEnabled(){var l;return(l=ps.value)==null?void 0:l.api_encryption_enabled},ModeOfStudies(){return["part time","full time"]}},validations(){return{form:{year_of_study:{required:v.withMessage("Year of study is required",x)},semester:{required:v.withMessage("Semester is required",x)},mode_of_study:{required:v.withMessage("Mode of study is required",x)}}}},mounted(){this.fetchApplicationDetails()},methods:{async fetchApplicationDetails(){try{const l={id:this.$route.params.id};let _=(await this.$api.get("/api/v1/bursaries/students/application",{headers:{...es()},params:l})).data;this.encryptionEnabled&&(_=JSON.parse(K(_)));const{message:d,success:e,results:r}=_;console.log("bursary application details ====== ",r),this.application_details=r;for(const[c,f]of Object.entries(this.form))this.form[c]=r[c]}catch{}},async submit(){var l;try{if(this.v$.$touch(),this.v$.$error)return;let o={...this.form,id:(l=this.application_details)==null?void 0:l.id};this.encryptionEnabled&&(o=is(JSON.stringify(o)));let d=(await this.$api.patch("/api/v1/bursaries/students/apply",o,{headers:{...es()}})).data;this.encryptionEnabled&&(d=JSON.parse(K(d)));const{message:e,success:r,results:c}=d;_s({message:e})}catch(o){ms({caller:"bursary application",error:o,api_encryption_enabled:this.encryptionEnabled})}}}},t=l=>(as("data-v-5099af38"),l=l(),ds(),l),hs={class:"form-container"},vs={class:"q-py-sm"},xs=t(()=>s("div",{class:"text-center text-h6 q-my-xs"},"Student details",-1)),ys={class:"row"},bs={class:"col-md-4 col-xs-12 q-pa-xs"},qs=t(()=>s("div",{class:"form-lable"},"First name",-1)),gs={class:"default-form-field text-capitalize"},Vs={class:"col-md-4 col-xs-12 q-pa-xs"},Ss=t(()=>s("div",{class:"form-lable"},"Last name",-1)),ws={class:"default-form-field text-capitalize"},zs={class:"col-md-4 col-xs-12 q-pa-xs"},Is=t(()=>s("div",{class:"form-lable"},"Phone number",-1)),Ns={class:"default-form-field text-capitalize"},As={class:"row"},Es={class:"col-md-4 col-xs-12 q-pa-xs"},ks=t(()=>s("div",{class:"form-lable"},"Student ID number",-1)),Ms={class:"default-form-field text-capitalize"},Us={class:"col-md-4 col-xs-12 q-pa-xs"},Ds=t(()=>s("div",{class:"form-lable"},"Guardian ID number",-1)),Os={class:"default-form-field text-capitalize"},Cs={class:"col-md-4 col-xs-12 q-pa-xs"},Fs=t(()=>s("div",{class:"form-lable"},"Guardian's names",-1)),Bs={class:"default-form-field text-capitalize"},Qs={class:"row"},Gs={class:"col-md-4 col-xs-12 q-pa-xs"},Js=t(()=>s("div",{class:"form-lable"},"Email",-1)),Ps={class:"default-form-field"},js={class:"col-md-4 col-xs-12 q-pa-xs"},Ts=t(()=>s("div",{class:"form-lable"},"Gender",-1)),Ys={class:"default-form-field text-capitalize"},Hs={class:"col-md-4 col-xs-12 q-pa-xs"},Ls=t(()=>s("div",{class:"form-lable"},"Family status",-1)),Rs={class:"default-form-field text-capitalize"},Ws={class:"row"},Zs={class:"col-md-4 col-xs-12 q-pa-xs"},Ks=t(()=>s("div",{class:"form-lable"},"Institution",-1)),Xs={class:"default-form-field text-capitalize"},$s={class:"col-md-4 col-xs-12 q-pa-xs"},se=t(()=>s("div",{class:"form-lable"},"Course",-1)),ee={class:"default-form-field text-capitalize"},oe={class:"col-md-4 col-xs-12 q-pa-xs"},te=t(()=>s("div",{class:"form-lable"},"Admission no.",-1)),ie={class:"default-form-field text-uppercase"},le={class:"row"},ae={class:"col-md-6 col-xs-12 q-pa-xs"},de=t(()=>s("div",{class:"form-lable"},"Ward",-1)),re={class:"default-form-field text-capitalize"},ne={class:"col-md-6 col-xs-12 q-pa-xs"},ce=t(()=>s("div",{class:"form-lable"},"Polling center",-1)),_e={class:"default-form-field text-capitalize"},me=t(()=>s("div",{class:"text-center text-h6 q-my-xs"},"Fill the form below",-1)),ue={class:"row"},pe={class:"col-md-4 col-xs-12 q-pa-xs"},fe=t(()=>s("div",{class:"form-lable"},"Year of study*",-1)),he={key:0,class:"text-red"},ve={class:"col-md-4 col-xs-12 q-pa-xs"},xe=t(()=>s("div",{class:"form-lable"},"Semester*",-1)),ye={key:0,class:"text-red"},be={class:"col-md-4 col-xs-12 q-pa-xs"},qe=t(()=>s("div",{class:"form-lable"},"Mode of study*",-1)),ge={key:0,class:"text-red"},Ve={class:"row q-my-sm"},Se={class:"col-md col-xs-12 q-pa-xs"},we=t(()=>s("div",{class:"form-lable"},"Income (father) if applicable",-1)),ze={class:"col-md col-xs-12 q-pa-xs"},Ie=t(()=>s("div",{class:"form-lable"},"Income (mother) if applicable",-1)),Ne={class:"col-md col-xs-12 q-pa-xs"},Ae=t(()=>s("div",{class:"form-lable"},"Income (guadian) if applicable",-1)),Ee={class:"flex justify-between q-mt-lg"};function ke(l,o,_,d,e,r){var c,f,y,b,q,g,V,S,w,z,I,N,A,E,k,M,U,D,O,C,F,B,Q,G,J,P,j,T,Y,H,L,R,W,Z;return u(),p("div",hs,[s("div",vs,[xs,s("div",ys,[s("div",bs,[qs,s("div",gs,i((f=(c=e.application_details)==null?void 0:c.user)==null?void 0:f.first_name),1)]),s("div",Vs,[Ss,s("div",ws,i((b=(y=e.application_details)==null?void 0:y.user)==null?void 0:b.last_name),1)]),s("div",zs,[Is,s("div",Ns,i((g=(q=e.application_details)==null?void 0:q.user)==null?void 0:g.phone_number),1)])]),s("div",As,[s("div",Es,[ks,s("div",Ms,i(((S=(V=e.application_details)==null?void 0:V.student)==null?void 0:S.national_id)||"N/A"),1)]),s("div",Us,[Ds,s("div",Os,i(((z=(w=e.application_details)==null?void 0:w.student)==null?void 0:z.guardian_national_id)||"N/A"),1)]),s("div",Cs,[Fs,s("div",Bs,i(((N=(I=e.application_details)==null?void 0:I.student)==null?void 0:N.guardian_ID_names)||"N/A"),1)])]),s("div",Qs,[s("div",Gs,[Js,s("div",Ps,i((E=(A=e.application_details)==null?void 0:A.user)==null?void 0:E.email),1)]),s("div",js,[Ts,s("div",Ys,i((M=(k=e.application_details)==null?void 0:k.student)==null?void 0:M.gender),1)]),s("div",Hs,[Ls,s("div",Rs,i((D=(U=e.application_details)==null?void 0:U.student)==null?void 0:D.family_status),1)])]),s("div",Ws,[s("div",Zs,[Ks,s("div",Xs,i((C=(O=e.application_details)==null?void 0:O.student)==null?void 0:C.institution),1)]),s("div",$s,[se,s("div",ee,i((B=(F=e.application_details)==null?void 0:F.student)==null?void 0:B.course),1)]),s("div",oe,[te,s("div",ie,i((G=(Q=e.application_details)==null?void 0:Q.student)==null?void 0:G.admission_number),1)])]),s("div",le,[s("div",ae,[de,s("div",re,i(((P=(J=e.application_details)==null?void 0:J.student)==null?void 0:P.ward)||"N/A"),1)]),s("div",ne,[ce,s("div",_e,i(((T=(j=e.application_details)==null?void 0:j.student)==null?void 0:T.polling_center)||"N/A"),1)])])]),s("form",{onSubmit:o[7]||(o[7]=ls((...a)=>r.submit&&r.submit(...a),["prevent"])),class:"q-py-sm"},[me,s("div",ue,[s("div",pe,[fe,n(m,{dense:"",outlined:"",modelValue:e.form.year_of_study,"onUpdate:modelValue":o[0]||(o[0]=a=>e.form.year_of_study=a),type:"number"},null,8,["modelValue"]),(Y=d.v$.form)!=null&&Y.year_of_study.$error?(u(),p("div",he,i((H=d.v$.form)==null?void 0:H.year_of_study.$errors[0].$message),1)):h("",!0)]),s("div",ve,[xe,n(m,{dense:"",outlined:"",modelValue:e.form.semester,"onUpdate:modelValue":o[1]||(o[1]=a=>e.form.semester=a),type:"number"},null,8,["modelValue"]),(L=d.v$.form)!=null&&L.semester.$error?(u(),p("div",ye,i((R=d.v$.form)==null?void 0:R.semester.$errors[0].$message),1)):h("",!0)]),s("div",be,[qe,n(rs,{dense:"",outlined:"",modelValue:e.form.mode_of_study,"onUpdate:modelValue":o[2]||(o[2]=a=>e.form.mode_of_study=a),options:r.ModeOfStudies},null,8,["modelValue","options"]),(W=d.v$.form)!=null&&W.mode_of_study.$error?(u(),p("div",ge,i((Z=d.v$.form)==null?void 0:Z.mode_of_study.$errors[0].$message),1)):h("",!0)])]),s("div",Ve,[s("div",Se,[we,n(m,{dense:"",outlined:"",modelValue:e.form.income_of_father,"onUpdate:modelValue":o[3]||(o[3]=a=>e.form.income_of_father=a),type:"number"},null,8,["modelValue"])]),s("div",ze,[Ie,n(m,{dense:"",outlined:"",modelValue:e.form.income_of_mother,"onUpdate:modelValue":o[4]||(o[4]=a=>e.form.income_of_mother=a),type:"number"},null,8,["modelValue"])]),s("div",Ne,[Ae,n(m,{dense:"",outlined:"",modelValue:e.form.income_of_guardian,"onUpdate:modelValue":o[5]||(o[5]=a=>e.form.income_of_guardian=a),type:"number"},null,8,["modelValue"])])]),s("div",Ee,[n(ss,{unelevated:"",color:"red","no-caps":"",onClick:o[6]||(o[6]=a=>l.$router.go(-1))},{default:X(()=>[$("Cancel")]),_:1}),n(ss,{unelevated:"",color:"green","no-caps":"",type:"submit"},{default:X(()=>[$("Submit")]),_:1})])],32)])}var Te=ts(fs,[["render",ke],["__scopeId","data-v-5099af38"]]);export{Te as default};
