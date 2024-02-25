import{_ as D,Z as w,$ as g,a6 as q,a8 as V,a0 as E,a1 as P,a2 as S,ad as e,d as a,ae as j,ai as i,aM as n}from"./index.58c24f9b.js";import{u as k,g as B}from"./generateHeaders.1afc8456.js";import"./auth_user_store.67764a02.js";import"./axios.5abb35e7.js";const{getSettings:F}=w(k()),R={data(){return{resume_details:""}},computed:{encryptionEnabled(){var s;return(s=F.value)==null?void 0:s.api_encryption_enabled},userDetails(){var s;return{user:(s=this.resume_details)==null?void 0:s.user}}},components:{PDFViewer:g(()=>q(()=>import("./PDFViewer.32035884.js"),["assets/PDFViewer.32035884.js","assets/index.58c24f9b.js","assets/index.93ddf4f0.css","assets/vue3-pdf-embed.88b21ee3.js","assets/generateHeaders.1afc8456.js","assets/auth_user_store.67764a02.js","assets/axios.5abb35e7.js"]))},mounted(){this.fetchResumeDetails()},methods:{async fetchResumeDetails(){try{const s={id:this.$route.params.id};let o=(await this.$api.get("/api/v1/admin/resumes/one/",{headers:{...B()},params:s})).data;this.encryptionEnabled&&(o=JSON.parse(V(o)));const{message:b,success:l,results:t}=o;console.log("resume details ====== ",t),this.resume_details=t}catch{}}}},A={class:"q-pa-sm"},C={class:"flex justify-between"},N={class:""},$={class:"row"},L={class:"col-md-6 col-xs-12 q-pa-sm"},O=e("div",{class:"text-subtitle2 text-center"},"User details",-1),Q={class:"flex justify-between q-my-sm"},T=e("div",null,"First name:",-1),H={class:"flex justify-between q-my-sm"},I=e("div",null,"Last name:",-1),J={class:"flex justify-between q-my-sm"},M=e("div",null,"Phone number:",-1),U={class:"flex justify-between q-my-sm"},Z=e("div",null,"Email:",-1),z={class:"col-md-6 col-xs-12 q-pa-sm"},G={class:""},K=e("div",{class:"text-center text-subtitle2"},"About user",-1);function W(s,r,o,b,l,t){var d,c,_,u,m,p,h,v,f,y;const x=E("PDFViewer");return P(),S("div",A,[e("div",C,[e("div",N,[a(j,{dense:"",flat:"",icon:"arrow_back_ios",onClick:r[0]||(r[0]=X=>s.$router.go(-1))})])]),e("div",$,[e("div",L,[O,e("div",Q,[T,e("div",null,i((c=(d=t.userDetails)==null?void 0:d.user)==null?void 0:c.first_name),1)]),a(n),e("div",H,[I,e("div",null,i((u=(_=t.userDetails)==null?void 0:_.user)==null?void 0:u.last_name),1)]),a(n),e("div",J,[M,e("div",null,i((p=(m=t.userDetails)==null?void 0:m.user)==null?void 0:p.phone_number),1)]),a(n),e("div",U,[Z,e("div",null,i((v=(h=t.userDetails)==null?void 0:h.user)==null?void 0:v.email),1)]),a(n)]),e("div",z,[e("div",G,[K,e("div",null,i((f=l.resume_details)==null?void 0:f.about_the_applicant),1)])])]),e("div",null,[a(x,{file_path:(y=l.resume_details)==null?void 0:y.resume},null,8,["file_path"])])])}var ae=D(R,[["render",W]]);export{ae as default};
