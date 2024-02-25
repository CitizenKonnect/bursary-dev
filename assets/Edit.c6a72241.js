import{Q as y}from"./QSelect.9a553155.js";import{_ as J,Z as j,a8 as E,aa as C,a1 as m,a2 as u,ad as o,d as n,ai as f,a5 as h,ah as d,aj as B,J as b,af as p,ae as O,ak as D}from"./index.58c24f9b.js";import{u as G}from"./index.0927d919.js";import{c as _,r as c}from"./index.2b518934.js";import{u as W,g as Q,p as L,r as T}from"./generateHeaders.1afc8456.js";import{u as A}from"./auth_user_store.67764a02.js";import"./QItemLabel.e80a075a.js";import"./QMenu.635eb69f.js";import"./position-engine.3cd62232.js";import"./selection.0047419f.js";import"./format.a33550d6.js";import"./axios.5abb35e7.js";const{getSettings:I}=j(W()),{getMe:P}=j(A()),R={props:{details:[String,Object]},setup(){return{v$:G()}},data(){return{form:{school:null,number_of_classes:void 0,number_of_students_per_class:void 0,number_of_teachers:void 0,school_has_labs:!1,number_of_labs:void 0,student_gender:null,number_of_boys_toilets:void 0,number_of_girls_toilets:void 0,number_of_teachers_toilets:void 0,school_has_water_source:!1,types_of_water_sources:null,number_of_desks:void 0,number_of_chairs:void 0,number_of_lockers:void 0},school_list:[]}},validations(){return{form:{school:{required:_.withMessage("School is required",c)},number_of_classes:{required:_.withMessage("Number of classes is required",c)},number_of_students_per_class:{required:_.withMessage("Number of students per class is required",c)},number_of_teachers:{required:_.withMessage("Number of teachers is required",c)},number_of_teachers_toilets:{required:_.withMessage("Number of teachers is required",c)},number_of_teachers_toilets:{required:_.withMessage("Number of teachers toilets is required",c)},student_gender:{required:_.withMessage("Student gender composition is required",c)}}}},computed:{encryptionEnabled(){var t;return(t=I.value)==null?void 0:t.api_encryption_enabled},secondarySchools(){return this.school_list.map(t=>({label:t.name_of_school,value:t.school_serial_number,id:t.id}))},schoolHasGirls(){return this.form.student_gender==="girls"||this.form.student_gender==="mixed"?!0:(this.form.number_of_girls_toilets=0,!1)},schoolHasBoys(){return this.form.student_gender==="boys"||this.form.student_gender==="mixed"?!0:(this.form.number_of_boys_toilets=0,!1)},waterSources(){return["borehole","well","spring","piped water"]}},watch:{details:{immediate:!0,handler(t){var e,a,l;if(!!t)for(const[s,i]of Object.entries(this.form))this.form[s]=this.details[s]||i,s==="school"&&(this.form[s]={label:(e=this.details.school)==null?void 0:e.name_of_school,value:(a=this.details.school)==null?void 0:a.school_serial_number,...(l=this.details)==null?void 0:l.school})}}},mounted(){this.fetchSchools()},methods:{handleSchoolHasLab(t){t||(this.form.number_of_labs=void 0)},handleSchoolHasWaterSource(t){t||(this.form.type_of_water_source=null)},handleSelectedSchool(t){this.form.student_gender=t.gender_of_school},async fetchSchools(t={}){try{let a=(await this.$api.get("/api/v1/school-heads/schools-list/",{headers:{...Q()}})).data;this.encryptionEnabled&&(a=JSON.parse(E(a)));const{message:l,success:s,results:i}=a;this.school_list=i}catch{}},async submit(){var t;try{if(this.v$.$touch(),this.v$.$error)return;let e={...this.form};e.school_serial_number=this.form.school.value,e.school=this.form.school.id,e.current_school_head=(t=P.value)==null?void 0:t.id,e.name_of_school=this.form.school.label,e.type_of_school="primary",this.encryptionEnabled&&(e=C(JSON.stringify(e)));let l=(await this.$api.post("/api/v1/school-heads/schools/update/",e,{headers:{...Q()}})).data;this.encryptionEnabled&&(l=JSON.parse(E(l)));const{message:s,success:i,results:v}=l;L({message:s}),this.$router.go(-1)}catch(e){T({caller:"update school details form",error:e,api_encryption_enabled:this.encryptionEnabled})}}}},Z={class:"form-container"},z=o("div",{class:"text-h6 text-center"},"High school details ",-1),F={class:"row"},K={class:"col-md-6 col-xs-12 q-pa-sm"},X={class:"q-my-xs"},Y=o("div",{class:"form-lable"},"School *",-1),$={key:0,class:"text-red"},ee={class:"q-my-xs"},se=o("div",{class:"form-lable"},"Number of classes *",-1),oe={key:0,class:"text-red"},re={class:"q-my-xs"},te=o("div",{class:"form-lable"},"Number of students per class *",-1),le={key:0,class:"text-red"},ne={class:"q-my-xs"},ie=o("div",{class:"form-lable"},"Number of teachers *",-1),de={key:0,class:"text-red"},ae={class:"q-mt-sm"},me={class:"q-my-xs"},ue=o("div",{class:"form-lable"},"Number of labs *",-1),_e={class:"col-md-6 col-xs-12 q-pa-sm"},ce={class:"q-my-xs"},fe=o("div",{class:"form-lable"},"Number of teachers toilets *",-1),he={key:0,class:"text-red"},be={class:"q-my-xs"},pe=o("div",{class:"form-lable"},"Gender *",-1),ve={key:0,class:"text-red"},ye={class:"q-my-xs"},Ve=o("div",{class:"form-lable"},"Number of girls toilets *",-1),ge={class:"q-my-xs"},qe=o("div",{class:"form-lable"},"Number of boys toilets *",-1),Se={class:"q-ma-sm"},xe=o("div",{class:"text-center text-subtitle2"},"Water source",-1),we={class:""},ke={class:"q-my-xs"},Ne=o("div",{class:"form-lable"},"Types of water sources *",-1),Ue={class:"q-ma-md"},He=o("div",{class:"text-center text-subtitle2"},"Desks, lockers and chairs",-1),Me={class:"q-my-sm"},Ee=o("div",{class:"form-lable"},"Number of desks *",-1),Be={class:"q-my-sm"},Oe=o("div",{class:"form-lable"},"Number of lockers *",-1),Qe={class:"q-my-sm"},je=o("div",{class:"form-lable"},"Number of chairs *",-1),Je={class:"flex justify-between q-ma-md"};function Ce(t,e,a,l,s,i){var v,V,g,q,S,x,w,k,N,U,H,M;return m(),u("div",Z,[z,o("form",{onSubmit:e[16]||(e[16]=D((...r)=>i.submit&&i.submit(...r),["prevent"]))},[o("div",F,[o("div",K,[o("div",X,[Y,n(y,{dense:"",outlined:"",modelValue:s.form.school,"onUpdate:modelValue":[e[0]||(e[0]=r=>s.form.school=r),i.handleSelectedSchool],options:i.secondarySchools,"popup-content-class":"selection-options"},null,8,["modelValue","options","onUpdate:modelValue"]),(v=l.v$.form)!=null&&v.school.$error?(m(),u("div",$,f((V=l.v$.form)==null?void 0:V.school.$errors[0].$message),1)):h("",!0)]),o("div",ee,[se,n(d,{dense:"",outlined:"",modelValue:s.form.number_of_classes,"onUpdate:modelValue":e[1]||(e[1]=r=>s.form.number_of_classes=r),type:"number"},null,8,["modelValue"]),(g=l.v$.form)!=null&&g.number_of_classes.$error?(m(),u("div",oe,f((q=l.v$.form)==null?void 0:q.number_of_classes.$errors[0].$message),1)):h("",!0)]),o("div",re,[te,n(d,{dense:"",outlined:"",modelValue:s.form.number_of_students_per_class,"onUpdate:modelValue":e[2]||(e[2]=r=>s.form.number_of_students_per_class=r),type:"number"},null,8,["modelValue"]),(S=l.v$.form)!=null&&S.number_of_students_per_class.$error?(m(),u("div",le,f((x=l.v$.form)==null?void 0:x.number_of_students_per_class.$errors[0].$message),1)):h("",!0)]),o("div",ne,[ie,n(d,{dense:"",outlined:"",modelValue:s.form.number_of_teachers,"onUpdate:modelValue":e[3]||(e[3]=r=>s.form.number_of_teachers=r),type:"number"},null,8,["modelValue"]),(w=l.v$.form)!=null&&w.number_of_teachers.$error?(m(),u("div",de,f((k=l.v$.form)==null?void 0:k.number_of_teachers.$errors[0].$message),1)):h("",!0)]),o("div",ae,[n(B,{dense:"",outlined:"",modelValue:s.form.school_has_labs,"onUpdate:modelValue":[e[4]||(e[4]=r=>s.form.school_has_labs=r),i.handleSchoolHasLab],label:"School has lab(s)"},null,8,["modelValue","onUpdate:modelValue"])]),b(o("div",me,[ue,n(d,{dense:"",outlined:"",modelValue:s.form.number_of_labs,"onUpdate:modelValue":e[5]||(e[5]=r=>s.form.number_of_labs=r),type:"number"},null,8,["modelValue"])],512),[[p,s.form.school_has_labs]])]),o("div",_e,[o("div",ce,[fe,n(d,{dense:"",outlined:"",modelValue:s.form.number_of_teachers_toilets,"onUpdate:modelValue":e[6]||(e[6]=r=>s.form.number_of_teachers_toilets=r),type:"number"},null,8,["modelValue"]),(N=l.v$.form)!=null&&N.number_of_teachers_toilets.$error?(m(),u("div",he,f((U=l.v$.form)==null?void 0:U.number_of_teachers_toilets.$errors[0].$message),1)):h("",!0)]),o("div",be,[pe,n(y,{dense:"",outlined:"",modelValue:s.form.student_gender,"onUpdate:modelValue":e[7]||(e[7]=r=>s.form.student_gender=r),options:["boys","girls","mixed"],"popup-content-class":"selection-options"},null,8,["modelValue"]),(H=l.v$.form)!=null&&H.student_gender.$error?(m(),u("div",ve,f((M=l.v$.form)==null?void 0:M.student_gender.$errors[0].$message),1)):h("",!0)]),b(o("div",ye,[Ve,n(d,{dense:"",outlined:"",modelValue:s.form.number_of_girls_toilets,"onUpdate:modelValue":e[8]||(e[8]=r=>s.form.number_of_girls_toilets=r),type:"number"},null,8,["modelValue"])],512),[[p,i.schoolHasGirls]]),b(o("div",ge,[qe,n(d,{dense:"",outlined:"",modelValue:s.form.number_of_boys_toilets,"onUpdate:modelValue":e[9]||(e[9]=r=>s.form.number_of_boys_toilets=r),type:"number"},null,8,["modelValue"])],512),[[p,i.schoolHasBoys]])])]),o("div",Se,[xe,o("div",we,[n(B,{dense:"",outlined:"",modelValue:s.form.school_has_water_source,"onUpdate:modelValue":[e[10]||(e[10]=r=>s.form.school_has_water_source=r),i.handleSchoolHasWaterSource],label:"School has water source"},null,8,["modelValue","onUpdate:modelValue"])]),b(o("div",ke,[Ne,n(y,{dense:"",outlined:"",modelValue:s.form.types_of_water_sources,"onUpdate:modelValue":e[11]||(e[11]=r=>s.form.types_of_water_sources=r),"use-input":"","use-chips":"",multiple:"",options:i.waterSources,"popup-content-class":"selection-options"},null,8,["modelValue","options"])],512),[[p,s.form.school_has_water_source]])]),o("div",Ue,[He,o("div",Me,[Ee,n(d,{dense:"",outlined:"",modelValue:s.form.number_of_desks,"onUpdate:modelValue":e[12]||(e[12]=r=>s.form.number_of_desks=r),type:"number"},null,8,["modelValue"])]),o("div",Be,[Oe,n(d,{dense:"",outlined:"",modelValue:s.form.number_of_lockers,"onUpdate:modelValue":e[13]||(e[13]=r=>s.form.number_of_lockers=r),type:"number"},null,8,["modelValue"])]),o("div",Qe,[je,n(d,{dense:"",outlined:"",modelValue:s.form.number_of_chairs,"onUpdate:modelValue":e[14]||(e[14]=r=>s.form.number_of_chairs=r),type:"number"},null,8,["modelValue"])])]),o("div",Je,[n(O,{outline:"",label:"Back",onClick:e[15]||(e[15]=r=>t.$router.go(-1)),"no-caps":""}),n(O,{outline:"",label:"Submit",type:"submit","no-caps":""})])],32)])}var Ke=J(R,[["render",Ce]]);export{Ke as default};
