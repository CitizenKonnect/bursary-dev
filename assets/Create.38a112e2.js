import{_ as oe,Z as se,$ as A,a6 as T,aa as re,a8 as te,a0 as j,a1 as l,a2 as a,ad as o,d as i,a3 as J,ah as p,ai as _,a5 as u,aj as R,J as L,af as Z,ae as z,ak as ie}from"./index.56aced16.js";import{Q as y}from"./QSelect.1fc42082.js";import{Q as K}from"./QExpansionItem.2f2a2c84.js";import{v as P}from"./validPhoneNumber.889432ad.js";import{u as ne}from"./index.62701558.js";import{c as d,r as h}from"./index.33746749.js";import{g as le,p as ae,r as de}from"./generateHeaders.891fe619.js";import{u as _e}from"./auth_user_store.0a1df304.js";import"./QItemLabel.cffd16e9.js";import"./QMenu.58a91336.js";import"./position-engine.9dfbd25a.js";import"./selection.e4c60947.js";import"./format.a33550d6.js";import"./axios.af9b5afd.js";const{getMe:ue}=se(_e()),me={setup(){return{v$:ne()}},data(){return{form:{year_of_birth:null,gender:null,family_status:null,has_no_national_id:!1,guardian_year_of_birth:null,guardian_national_id:null,guardian_phone_number:null,guardian_alternate_phone_number:null,student_alternate_phone_number:null,guardian_ID_names:null,national_id:null,polling_center:null,ward:null,has_disability:!1,disability_description:null,institution:null,institution_type:null,institution_bank_account_name:null,course:null,admission_number:null,year_of_admission:null,year_of_planned_completion:null,highschool_completion_year:null}}},validations(){return{form:{guardian_national_id:{parent_national_id_required:d.withMessage("Guardian's ID number is required",r=>!!r)},guardian_year_of_birth:{parent_yob_required:d.withMessage("Guardian's year of birth is required",r=>!!r)},guardian_ID_names:{required:d.withMessage("Guardian's name as it appears on ID is required",r=>!!r),valid:d.withMessage("Guardian's name must be valid",r=>{const e=r.split(" ")||[],f=e.every(s=>s.length>2);return!!(e.length>1&&f)})},guardian_phone_number:{required:d.withMessage("Guardian's phone number is required",r=>P(r))},guardian_alternate_phone_number:{isValid:d.withMessage("Guardian's alternate phone number must be valid",r=>r?P(r):!0)},student_alternate_phone_number:{isValid:d.withMessage("student's alternate phone number must be valid",r=>r?P(r):!0)},gender:{required:d.withMessage("Student gender is required",r=>!!r)},family_status:{required:d.withMessage("Student  family status is required",r=>!!r)},national_id:{national_id_required:d.withMessage("National ID number is required",r=>this.form.has_no_national_id?!0:!!r)},year_of_birth:{yob_required:d.withMessage("Year of birth is required",r=>!!this.form.year_of_birth)},ward:{required:d.withMessage("Ward is required",h)},polling_center:{required:d.withMessage("Polling center is required",h)},disability_description:{disability_description_required:d.withMessage("Disability description is required ",r=>this.form.has_disability?!!r:!0)},institution:{required:d.withMessage("Institution is required",h)},institution_type:{required:d.withMessage("Institution type is required",h)},institution_bank_account_name:{required:d.withMessage("Institution bank account name is required",h)},course:{required:d.withMessage("Course of study is required",h)},highschool_completion_year:{required:d.withMessage("High school completion year is required",h)},year_of_planned_completion:{required:d.withMessage("Year of planned completion is required",h)},year_of_admission:{required:d.withMessage("Year of admission is required",h)},admission_number:{required:d.withMessage("Year of admission is required",h)}}}},computed:{yearOfBirthOptions(){let r=1900,e=17,f=new Date().getFullYear()-e,s=[];for(;r<=f;)s.push(r++);return s.reverse()},highSchoolYearOptions(){let r=1900,e=1,f=new Date().getFullYear()+e,s=[];for(;r<=f;)s.push(r++);return s.reverse()},yearOptions(){let r=1900,e=10,f=new Date().getFullYear()+e,s=[];for(;r<=f;)s.push(r++);return s.reverse()},institutionType(){return["university","college","tvet"]},familyStatus(){return["total orphan","partial orphan","single parent","both parants alive"]}},components:{WardFilter:A(()=>T(()=>import("./WardFilter.6f98d002.js"),["assets/WardFilter.6f98d002.js","assets/QItemLabel.cffd16e9.js","assets/index.56aced16.js","assets/index.93ddf4f0.css","assets/QSelect.1fc42082.js","assets/QMenu.58a91336.js","assets/position-engine.9dfbd25a.js","assets/selection.e4c60947.js","assets/format.a33550d6.js","assets/wards_polling_centers.b3f07557.js"])),PollingCentersFilter:A(()=>T(()=>import("./PollingCentersFilter.f3894c51.js"),["assets/PollingCentersFilter.f3894c51.js","assets/QItemLabel.cffd16e9.js","assets/index.56aced16.js","assets/index.93ddf4f0.css","assets/QSelect.1fc42082.js","assets/QMenu.58a91336.js","assets/position-engine.9dfbd25a.js","assets/selection.e4c60947.js","assets/format.a33550d6.js","assets/wards_polling_centers.b3f07557.js"]))},mounted(){},methods:{handleCheckHasID(r){},handleSelectedWard(r){var e;!r||(this.form.ward=r,(e=this.$refs.polling_center_selection)==null||e.listPollingCenters(r))},clearWardSelection(r){this.form.ward=null},handleSelectedPollingCenter(r){!r||(this.form.polling_center=r)},clearPollingCenterSelection(r){this.form.polling_center=null},handleCheckHasDisability(r){},async create(){try{if(this.v$.$touch(),this.v$.$error){this.$refs.institution_course_details_expansion.show(),this.$refs.student_details_expansion.show();return}let r={...this.form,polling_center:this.form.polling_center.label||this.form.polling_center,ward:this.form.ward.label||this.form.ward,user:ue.value.id};this.encryptionEnabled&&(r=re(JSON.stringify(r)));let f=(await this.$api.post("/api/v1/students/create/",r,{headers:{...le()}})).data;this.encryptionEnabled&&(f=JSON.parse(te(f)));const{message:s,success:t,results:c}=f;ae({message:s}),this.$router.push("/profile").then(()=>{this.$router.go()})}catch(r){de({caller:"create profile",error:r,api_encryption_enabled:this.api_encryption_enabled})}}}},ce={class:"form-container"},fe=o("div",{class:"text-center text-h6 q-mb-md"},"Student profile form",-1),pe={class:"row"},he={class:"q-pa-xs col-sm-6 col-xs-12"},ve=o("div",{class:"form-lable"},"Guardian's national ID number *",-1),ye={key:0,class:"text-red"},ge={class:"q-pa-xs col-sm-6 col-xs-12"},be=o("div",{class:"form-lable"},"Guardian's year of birth *",-1),xe={key:0,class:"text-red"},Ve={class:"row"},qe={class:"q-pa-xs col-sm-6 col-xs-12"},we=o("div",{class:"form-lable"},"Guardian's name as it appears on ID *",-1),ke={key:0,class:"text-red"},Se={class:"q-pa-xs col-sm-6 col-xs-12"},De=o("div",{class:"form-lable"},"Guardian's phone number *",-1),Ce={key:0,class:"text-red"},Ie={class:"row"},Me={class:"q-pa-xs col-sm-6 col-xs-12"},Ue=o("div",{class:"form-lable"},"Guardian's alternate phone number ",-1),$e={key:0,class:"text-red"},Oe={class:"q-pa-xs col-sm-6 col-xs-12"},Pe=o("div",{class:"form-lable"},"Student's alternate phone number ",-1),Ye={key:0,class:"text-red"},Ge={class:"row"},Fe={class:"q-pa-xs col-sm-6 col-xs-12"},Ee=o("div",{class:"form-lable"},"Gender *",-1),We={key:0,class:"text-red"},Be={class:"q-pa-xs col-sm-6 col-xs-12"},He=o("div",{class:"form-lable"},"Family status *",-1),Ne={key:0,class:"text-red"},Qe={class:"row"},Ae={class:"q-pa-xs col-sm-6 col-xs-12"},Te={class:"q-py-xs"},je={key:0,class:"text-red"},Je={class:"q-pa-xs col-sm-grow col-xs-12"},Re=o("div",{class:"form-lable q-py-xs"},"Year of birth *",-1),Le={key:0,class:"text-red"},Ze={class:"row"},ze={class:"q-pa-xs col-sm-6 col-xs-12"},Ke=o("div",{class:"form-lable"},"Ward *",-1),Xe={key:0,class:"text-red"},eo={class:"q-pa-xs col-sm-6 col-xs-12"},oo=o("div",{class:"form-lable"},"Polling center *",-1),so={key:0,class:"text-red"},ro={class:"q-pa-xs"},to={class:"q-pa-xs"},io=o("div",{class:"q-my-xs"},"Disability description *",-1),no={key:0,class:"text-red"},lo={class:"row"},ao={class:"q-pa-xs col-sm-6 col-xs-12"},_o=o("div",{class:"form-lable"},"Institution *",-1),uo={key:0,class:"text-red"},mo={class:"q-pa-xs col-sm-6 col-xs-12"},co=o("div",{class:"form-lable"},"Institution type *",-1),fo={key:0,class:"text-red"},po={class:"row"},ho={class:"q-pa-xs col-sm-6 col-xs-12"},vo=o("div",{class:"form-lable"},"High school completion year *",-1),yo={key:0,class:"text-red"},go={class:"q-pa-xs col-sm-6 col-xs-12"},bo=o("div",{class:"form-lable"},"Institution bank account name *",-1),xo={key:0,class:"text-red"},Vo={class:"row"},qo={class:"q-pa-xs col-sm-6 col-xs-12"},wo=o("div",{class:"form-lable"},"Admission number *",-1),ko={key:0,class:"text-red"},So={class:"q-pa-xs col-sm-6 col-xs-12"},Do=o("div",{class:"form-lable"},"Course *",-1),Co={key:0,class:"text-red"},Io={class:"row"},Mo={class:"q-pa-xs col-sm-6 col-xs-12"},Uo=o("div",{class:"form-lable"},"Year of joining *",-1),$o={key:0,class:"text-red"},Oo={class:"q-pa-xs col-sm-6 col-xs-12"},Po=o("div",{class:"form-lable"},"Year of planned completion *",-1),Yo={key:0,class:"text-red"},Go={class:"flex justify-between q-mt-md"};function Fo(r,e,f,s,t,c){const X=j("WardFilter"),ee=j("PollingCentersFilter");return l(),a("div",ce,[fe,o("form",{onSubmit:e[22]||(e[22]=ie((...v)=>c.create&&c.create(...v),["prevent"]))},[i(K,{"dense-toggle":"",label:"Student details","header-class":"text-body1 text-weight-bold",ref:"student_details_expansion"},{default:J(()=>{var v,g,b,x,V,q,w,k,S,D,C,I,M,U,$,O,m,Y,G,F,E,W,B,H,N,Q;return[o("div",pe,[o("div",he,[ve,i(p,{dense:"",outlined:"",modelValue:t.form.guardian_national_id,"onUpdate:modelValue":e[0]||(e[0]=n=>t.form.guardian_national_id=n),type:"number"},null,8,["modelValue"]),(v=s.v$.form)!=null&&v.guardian_national_id.$error?(l(),a("div",ye,_((g=s.v$.form)==null?void 0:g.guardian_national_id.$errors[0].$message),1)):u("",!0)]),o("div",ge,[be,i(y,{dense:"",outlined:"",modelValue:t.form.guardian_year_of_birth,"onUpdate:modelValue":e[1]||(e[1]=n=>t.form.guardian_year_of_birth=n),type:"number",options:c.yearOfBirthOptions,"popup-content-class":"selection-options"},null,8,["modelValue","options"]),(b=s.v$.form)!=null&&b.guardian_year_of_birth.$error?(l(),a("div",xe,_((x=s.v$.form)==null?void 0:x.guardian_year_of_birth.$errors[0].$message),1)):u("",!0)])]),o("div",Ve,[o("div",qe,[we,i(p,{dense:"",outlined:"",modelValue:t.form.guardian_ID_names,"onUpdate:modelValue":e[2]||(e[2]=n=>t.form.guardian_ID_names=n)},null,8,["modelValue"]),(V=s.v$.form)!=null&&V.guardian_ID_names.$error?(l(),a("div",ke,_((q=s.v$.form)==null?void 0:q.guardian_ID_names.$errors[0].$message),1)):u("",!0)]),o("div",Se,[De,i(p,{dense:"",outlined:"",modelValue:t.form.guardian_phone_number,"onUpdate:modelValue":e[3]||(e[3]=n=>t.form.guardian_phone_number=n)},null,8,["modelValue"]),(w=s.v$.form)!=null&&w.guardian_phone_number.$error?(l(),a("div",Ce,_((k=s.v$.form)==null?void 0:k.guardian_phone_number.$errors[0].$message),1)):u("",!0)])]),o("div",Ie,[o("div",Me,[Ue,i(p,{dense:"",outlined:"",modelValue:t.form.guardian_alternate_phone_number,"onUpdate:modelValue":e[4]||(e[4]=n=>t.form.guardian_alternate_phone_number=n)},null,8,["modelValue"]),(S=s.v$.form)!=null&&S.guardian_alternate_phone_number.$error?(l(),a("div",$e,_((D=s.v$.form)==null?void 0:D.guardian_alternate_phone_number.$errors[0].$message),1)):u("",!0)]),o("div",Oe,[Pe,i(p,{dense:"",outlined:"",modelValue:t.form.student_alternate_phone_number,"onUpdate:modelValue":e[5]||(e[5]=n=>t.form.student_alternate_phone_number=n)},null,8,["modelValue"]),(C=s.v$.form)!=null&&C.student_alternate_phone_number.$error?(l(),a("div",Ye,_((I=s.v$.form)==null?void 0:I.student_alternate_phone_number.$errors[0].$message),1)):u("",!0)])]),o("div",Ge,[o("div",Fe,[Ee,i(y,{dense:"",outlined:"",modelValue:t.form.gender,"onUpdate:modelValue":e[6]||(e[6]=n=>t.form.gender=n),type:"number",options:["male","female","other"],"popup-content-class":"selection-options"},null,8,["modelValue"]),(M=s.v$.form)!=null&&M.gender.$error?(l(),a("div",We,_((U=s.v$.form)==null?void 0:U.gender.$errors[0].$message),1)):u("",!0)]),o("div",Be,[He,i(y,{dense:"",outlined:"",modelValue:t.form.family_status,"onUpdate:modelValue":e[7]||(e[7]=n=>t.form.family_status=n),type:"number",options:c.familyStatus,"popup-content-class":"selection-options"},null,8,["modelValue","options"]),($=s.v$.form)!=null&&$.family_status.$error?(l(),a("div",Ne,_((O=s.v$.form)==null?void 0:O.family_status.$errors[0].$message),1)):u("",!0)])]),o("div",Qe,[o("div",Ae,[o("div",Te,[i(R,{modelValue:t.form.has_no_national_id,"onUpdate:modelValue":[e[8]||(e[8]=n=>t.form.has_no_national_id=n),c.handleCheckHasID],dense:"",label:"Dont have national ID ?"},null,8,["modelValue","onUpdate:modelValue"])]),L(o("div",null,[i(p,{dense:"",outlined:"",modelValue:t.form.national_id,"onUpdate:modelValue":e[9]||(e[9]=n=>t.form.national_id=n),type:"number"},null,8,["modelValue"]),(m=s.v$.form)!=null&&m.national_id.$error?(l(),a("div",je,_((Y=s.v$.form)==null?void 0:Y.national_id.$errors[0].$message),1)):u("",!0)],512),[[Z,!t.form.has_no_national_id]])]),o("div",Je,[Re,i(y,{dense:"",outlined:"",modelValue:t.form.year_of_birth,"onUpdate:modelValue":e[10]||(e[10]=n=>t.form.year_of_birth=n),type:"number",options:c.yearOfBirthOptions,"popup-content-class":"selection-options"},null,8,["modelValue","options"]),(G=s.v$.form)!=null&&G.year_of_birth.$error?(l(),a("div",Le,_((F=s.v$.form)==null?void 0:F.year_of_birth.$errors[0].$message),1)):u("",!0)])]),o("div",Ze,[o("div",ze,[Ke,i(X,{selected_value:t.form.ward,onSelected_value_emitted:c.handleSelectedWard,onClear_selected_value:c.clearWardSelection},null,8,["selected_value","onSelected_value_emitted","onClear_selected_value"]),(E=s.v$.form)!=null&&E.ward.$error?(l(),a("div",Xe,_((W=s.v$.form)==null?void 0:W.ward.$errors[0].$message),1)):u("",!0)]),o("div",eo,[oo,i(ee,{selected_ward:t.form.ward,selected_value:t.form.polling_center,ref:"polling_center_selection",onSelected_value_emitted:c.handleSelectedPollingCenter,onClear_selected_value:c.clearPollingCenterSelection},null,8,["selected_ward","selected_value","onSelected_value_emitted","onClear_selected_value"]),(B=s.v$.form)!=null&&B.polling_center.$error?(l(),a("div",so,_((H=s.v$.form)==null?void 0:H.polling_center.$errors[0].$message),1)):u("",!0)])]),o("div",ro,[i(R,{modelValue:t.form.has_disability,"onUpdate:modelValue":[e[11]||(e[11]=n=>t.form.has_disability=n),c.handleCheckHasDisability],dense:"",label:"Do you have any disabilities?"},null,8,["modelValue","onUpdate:modelValue"])]),L(o("div",to,[io,i(p,{outlined:"",modelValue:t.form.disability_description,"onUpdate:modelValue":e[12]||(e[12]=n=>t.form.disability_description=n),type:"textarea"},null,8,["modelValue"]),(N=s.v$.form)!=null&&N.disability_description.$error?(l(),a("div",no,_((Q=s.v$.form)==null?void 0:Q.disability_description.$errors[0].$message),1)):u("",!0)],512),[[Z,t.form.has_disability]])]}),_:1},512),i(K,{"dense-toggle":"",label:"Institution and course details","header-class":"text-body1 text-weight-bold",ref:"institution_course_details_expansion"},{default:J(()=>{var v,g,b,x,V,q,w,k,S,D,C,I,M,U,$,O;return[o("div",lo,[o("div",ao,[_o,i(p,{dense:"",outlined:"",modelValue:t.form.institution,"onUpdate:modelValue":e[13]||(e[13]=m=>t.form.institution=m)},null,8,["modelValue"]),(v=s.v$.form)!=null&&v.institution.$error?(l(),a("div",uo,_((g=s.v$.form)==null?void 0:g.institution.$errors[0].$message),1)):u("",!0)]),o("div",mo,[co,i(y,{dense:"",outlined:"",modelValue:t.form.institution_type,"onUpdate:modelValue":e[14]||(e[14]=m=>t.form.institution_type=m),type:"number",options:c.institutionType,"popup-content-class":"selection-options"},null,8,["modelValue","options"]),(b=s.v$.form)!=null&&b.institution_type.$error?(l(),a("div",fo,_((x=s.v$.form)==null?void 0:x.institution_type.$errors[0].$message),1)):u("",!0)])]),o("div",po,[o("div",ho,[vo,i(y,{dense:"",outlined:"",modelValue:t.form.highschool_completion_year,"onUpdate:modelValue":e[15]||(e[15]=m=>t.form.highschool_completion_year=m),type:"number",options:c.highSchoolYearOptions,"popup-content-class":"selection-options"},null,8,["modelValue","options"]),(V=s.v$.form)!=null&&V.highschool_completion_year.$error?(l(),a("div",yo,_((q=s.v$.form)==null?void 0:q.highschool_completion_year.$errors[0].$message),1)):u("",!0)]),o("div",go,[bo,i(p,{dense:"",outlined:"",modelValue:t.form.institution_bank_account_name,"onUpdate:modelValue":e[16]||(e[16]=m=>t.form.institution_bank_account_name=m)},null,8,["modelValue"]),(w=s.v$.form)!=null&&w.institution_bank_account_name.$error?(l(),a("div",xo,_((k=s.v$.form)==null?void 0:k.institution_bank_account_name.$errors[0].$message),1)):u("",!0)])]),o("div",Vo,[o("div",qo,[wo,i(p,{dense:"",outlined:"",modelValue:t.form.admission_number,"onUpdate:modelValue":e[17]||(e[17]=m=>t.form.admission_number=m)},null,8,["modelValue"]),(S=s.v$.form)!=null&&S.admission_number.$error?(l(),a("div",ko,_((D=s.v$.form)==null?void 0:D.admission_number.$errors[0].$message),1)):u("",!0)]),o("div",So,[Do,i(p,{dense:"",outlined:"",modelValue:t.form.course,"onUpdate:modelValue":e[18]||(e[18]=m=>t.form.course=m)},null,8,["modelValue"]),(C=s.v$.form)!=null&&C.course.$error?(l(),a("div",Co,_((I=s.v$.form)==null?void 0:I.course.$errors[0].$message),1)):u("",!0)])]),o("div",Io,[o("div",Mo,[Uo,i(y,{dense:"",outlined:"",modelValue:t.form.year_of_admission,"onUpdate:modelValue":e[19]||(e[19]=m=>t.form.year_of_admission=m),options:c.highSchoolYearOptions,"popup-content-class":"selection-options"},null,8,["modelValue","options"]),(M=s.v$.form)!=null&&M.year_of_admission.$error?(l(),a("div",$o,_((U=s.v$.form)==null?void 0:U.year_of_admission.$errors[0].$message),1)):u("",!0)]),o("div",Oo,[Po,i(y,{dense:"",outlined:"",modelValue:t.form.year_of_planned_completion,"onUpdate:modelValue":e[20]||(e[20]=m=>t.form.year_of_planned_completion=m),options:c.yearOptions,"popup-content-class":"selection-options"},null,8,["modelValue","options"]),($=s.v$.form)!=null&&$.year_of_planned_completion.$error?(l(),a("div",Yo,_((O=s.v$.form)==null?void 0:O.year_of_planned_completion.$errors[0].$message),1)):u("",!0)])])]}),_:1},512),o("div",Go,[i(z,{outline:"",label:"back",onClick:e[21]||(e[21]=v=>r.$router.go(-1)),"no-caps":""}),i(z,{outline:"",label:"submit",type:"submit","no-caps":""})])],32)])}var Ko=oe(me,[["render",Fo]]);export{Ko as default};
