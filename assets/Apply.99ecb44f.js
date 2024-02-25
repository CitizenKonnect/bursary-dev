import{_ as A,Z as B,$ as y,a6 as b,a0 as x,a1 as C,a2 as U,J as g,af as w,ad as e,ai as d,d as n,a3 as c,b2 as F,ae as S,b3 as D,b4 as I}from"./index.56aced16.js";import{g as k}from"./generateHeaders.891fe619.js";import{u as E}from"./auth_user_store.0a1df304.js";import"./axios.af9b5afd.js";const{getMe:M}=B(E()),T={data(){return{bursary_form:null}},computed:{getMe(){return M.value}},components:{Uploader:y(()=>b(()=>import("./Uploader.7a98de9c.js"),["assets/Uploader.7a98de9c.js","assets/index.56aced16.js","assets/index.93ddf4f0.css"])),ApplicationForm:y(()=>b(()=>import("./ApplicationForm.7d8050a0.js"),["assets/ApplicationForm.7d8050a0.js","assets/ApplicationForm.5d0a0829.css","assets/index.56aced16.js","assets/index.93ddf4f0.css","assets/QSelect.1fc42082.js","assets/QItemLabel.cffd16e9.js","assets/QMenu.58a91336.js","assets/position-engine.9dfbd25a.js","assets/selection.e4c60947.js","assets/format.a33550d6.js","assets/index.62701558.js","assets/index.33746749.js","assets/generateHeaders.891fe619.js","assets/auth_user_store.0a1df304.js","assets/axios.af9b5afd.js"]))},methods:{handleUploadedFile(t){this.bursary_form=t},async downloadBursaryForm(){try{const t={},s=await this.$api.get("/api/v1/bursaries/students/form/",{headers:{...k()},params:t,responseType:"blob"});let l=s.data;console.log(s.headers," response bursary-form headers ",s.headers.get("file-name"));const i=new Blob([l],{type:s.headers.get("content-type")}),r=document.createElement("a");return r.href=window.URL.createObjectURL(i),r.download=s.headers["file-name"],r.click(),!0}catch{return null}},async submitBursaryForm(){var t;try{const s=new FormData;s.append("bursary_form",this.bursary_form.file);let i=(await this.$api.post("/api/v1/bursaries/students/apply",s,{headers:{...k(),"Content-Type":"multipart/form-data"}})).data;const{message:r,success:o,results:_}=i;(t=this.$refs)==null||t.file_selector.clearSelectedFile()}catch{}}}},a=t=>(D("data-v-68fca7d2"),t=t(),I(),t),L={class:"form-container"},R=a(()=>e("div",{class:"text-center text-h6 q-mb-md"},"Bursary application",-1)),V=a(()=>e("div",{class:"text-weight-bold q-mb-md"},"Student details",-1)),z={class:"q-mt-md"},j={class:"flex",style:{gap:"0px 20px"}},N=a(()=>e("div",{class:""},"First name:",-1)),O={class:"text-capitalize"},P={class:"flex",style:{gap:"0px 20px"}},H=a(()=>e("div",{class:""},"Last name:",-1)),J={class:"text-capitalize"},Q={class:"flex",style:{gap:"0px 20px"}},Z=a(()=>e("div",{class:""},"Institution:",-1)),G={class:"text-capitalize"},K={class:"flex",style:{gap:"0px 20px"}},W=a(()=>e("div",{class:""},"Course:",-1)),X={class:"text-capitalize"},Y=a(()=>e("div",{class:"text-center text-weight-bold q-mb-md"},"Application form",-1)),$=a(()=>e("div",{class:"q-mt-md"}," Click the download button below to download the form after which you need to fill the form as required, scan it and upload it by clicking the upload button ",-1)),ee={class:"q-my-md flex justify-between"},te=a(()=>e("span",{class:"q-px-xs"},"Select filled form",-1)),se={class:"flex justify-center q-my-sm"},ae={class:"q-pa-md"};function oe(t,s,l,i,r,o){var p,m,u,f,h,v;const _=x("Uploader"),q=x("ApplicationForm");return C(),U("div",null,[g(e("div",L,[R,V,e("div",z,[e("div",j,[N,e("div",O,d((p=o.getMe)==null?void 0:p.first_name),1)]),e("div",P,[H,e("div",J,d((m=o.getMe)==null?void 0:m.last_name),1)]),e("div",Q,[Z,e("div",G,d((f=(u=o.getMe)==null?void 0:u.student_details)==null?void 0:f.institution),1)]),e("div",K,[W,e("div",X,d((v=(h=o.getMe)==null?void 0:h.student_details)==null?void 0:v.course),1)])]),Y,$,e("div",ee,[n(S,{unelevated:"",outline:"",color:"green",class:"download-form-btn","no-caps":"",onClick:o.downloadBursaryForm},{default:c(()=>[F("Download form")]),_:1},8,["onClick"]),n(_,{onSelected_file_emitted_event:o.handleUploadedFile,file_types:["application/pdf"],ref:"file_selector"},{default:c(()=>[te]),_:1},8,["onSelected_file_emitted_event"])]),g(e("div",se,[n(S,{color:"green",unelevated:"","no-caps":"",onClick:o.submitBursaryForm},{default:c(()=>[F("Submit")]),_:1},8,["onClick"])],512),[[w,r.bursary_form]])],512),[[w,!1]]),e("div",ae,[n(q)])])}var le=A(T,[["render",oe],["__scopeId","data-v-68fca7d2"]]);export{le as default};
