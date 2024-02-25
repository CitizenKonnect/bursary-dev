import{_ as N,Z as S,a8 as A,a0 as C,a1 as f,a2 as m,ad as t,d as n,a3 as _,b2 as l,ah as T,ae as u,ai as r,J as g,af as b,as as h,F as I,b5 as V,b3 as z,b4 as M}from"./index.bacfec48.js";import{Q as D}from"./QTooltip.8a56dee4.js";import{b as L}from"./axios.a3b240ae.js";import{u as P,g as B}from"./generateHeaders.c61a8e24.js";import"./auth_user_store.fb6dbab9.js";import"./position-engine.bab6871e.js";import"./selection.0f6ce218.js";const{getSettings:Q}=S(P()),q={data(){return{response_data:"",all_docs:[],table_docs:[],search_term:"",cancelToken:void 0,sort_ASC:!0}},computed:{encryptionEnabled(){var s;return(s=Q.value)==null?void 0:s.api_encryption_enabled},schools(){return this.table_docs.map(s=>({...s}))}},mounted(){this.fetchMany(),this.setupPagination()},methods:{async fetchMany(s={}){try{typeof this.cancelToken!="undefined"&&this.cancelToken.cancel("Operation canceled due to new request."),this.cancelToken=L.CancelToken.source();let o=(await this.$api.get("/api/v1/admin/schools/",{headers:{...B()},cancelToken:this.cancelToken.token,params:s})).data;this.encryptionEnabled&&(o=JSON.parse(A(o)));const{message:p,success:d,results:i}=o;this.response_data=i,this.all_docs=this.response_data.docs,this.table_docs=this.all_docs}catch{}},setupPagination(){const s=document.querySelector(".trigger");new IntersectionObserver(([o])=>{var p;console.log("entry.isIntersecting ================ ",o.isIntersecting),!!this.response_data&&o.isIntersecting&&this.fetchNext((p=this.response_data)==null?void 0:p.nextPage)},{root:null,threshold:0}).observe(s)},fetchNext(s){!this.response_data.nextPage||this.response_data.page>=s||this.fetchMany({page:s,size:this.response_data.limit,search_term:this.search_term})},filterData(s){s=s.trim(),this.fetchMany({search_term:s})},sortList(s){this.sort_ASC?(this.table_docs.sort((a,o)=>a[s]>o[s]?-1:1),this.sort_ASC=!1):(this.table_docs.sort((a,o)=>a[s]<o[s]?-1:1),this.sort_ASC=!0)}}},c=s=>(z("data-v-f699728c"),s=s(),M(),s),E={class:""},O={class:"flex",style:{gap:"0px 30px"}},U={class:"flex justify-between q-my-sm data-table-top"},j={class:"flex",style:{gap:"5px"}},F={class:"flex",style:{gap:"0px 5px"}},G={class:"q-px-sm text-grey text-h6"},J={class:""},R=c(()=>t("th",{scope:"col"},"Name",-1)),H=c(()=>t("th",{scope:"col"},"Location",-1)),Z=c(()=>t("th",{scope:"col"},"Serial number",-1)),K={scope:"col"},W=c(()=>t("th",{scope:"col"},"Assigned a school head",-1)),X=c(()=>t("th",{scope:"col"},"Details updated ",-1)),Y={scope:"col"},$=c(()=>t("th",{scope:"col"},"Actions",-1)),ee={"data-label":"Name",class:"text-capitalize"},te={"data-label":"Location",class:"text-capitalize"},se={"data-label":"Serial number",class:"text-capitalize"},ae={"data-label":"Type",class:"text-capitalize"},ne={"data-label":"Assigned a school head",class:"text-capitalize"},oe={"data-label":"Updated",class:"text-capitalize"},ie={"data-label":"Gender",class:"text-capitalize"},re={"data-label":"Action"},de={class:"flex justify-center items-center",style:{gap:"5px"}},le=c(()=>t("span",{class:"trigger"},null,-1)),ce=c(()=>t("div",{class:""},"No Schools",-1)),_e=[ce];function pe(s,a,o,p,d,i){var y,v,w;const x=C("router-link");return f(),m("div",E,[t("div",O,[n(x,{to:"/schools/create"},{default:_(()=>[l("New school")]),_:1}),n(x,{to:"/schools/upload"},{default:_(()=>[l("Bulk upload")]),_:1})]),t("div",U,[t("div",j,[n(T,{modelValue:d.search_term,"onUpdate:modelValue":[a[0]||(a[0]=e=>d.search_term=e),i.filterData],placeholder:"search",outlined:"",dense:""},null,8,["modelValue","onUpdate:modelValue"]),n(u,{outline:"",color:"grey-5",dense:"",icon:"refresh",onClick:i.fetchMany},{default:_(()=>[n(D,null,{default:_(()=>[l(" Refresh ")]),_:1})]),_:1},8,["onClick"])]),t("div",F,[t("span",G,r((y=d.all_docs)==null?void 0:y.length)+" of "+r((v=d.response_data)==null?void 0:v.totalDocs),1),g(n(u,{outline:"",outlined:"",color:"grey-5",onClick:a[1]||(a[1]=e=>{var k;return i.fetchNext((k=d.response_data)==null?void 0:k.nextPage)}),"no-caps":""},{default:_(()=>[l("Next")]),_:1},512),[[b,(w=d.response_data)==null?void 0:w.nextPage]])])]),t("table",J,[t("thead",null,[t("tr",null,[R,H,Z,t("th",K,[t("div",{class:"sortable-table-head",onClick:a[2]||(a[2]=e=>i.sortList("type_of_school"))},[l(" Type "),n(h,{name:"arrow_downward"}),n(h,{name:"arrow_upward"})])]),W,X,t("th",Y,[t("div",{class:"sortable-table-head",onClick:a[3]||(a[3]=e=>i.sortList("gender_of_school"))},[l(" Gender "),n(h,{name:"arrow_downward"}),n(h,{name:"arrow_upward"})])]),$])]),g(t("tbody",null,[(f(!0),m(I,null,V(i.schools,e=>(f(),m("tr",{key:e==null?void 0:e.id},[t("td",ee,r((e==null?void 0:e.name_of_school)||"N/A"),1),t("td",te,r(e==null?void 0:e.location),1),t("td",se,r((e==null?void 0:e.school_serial_number)||"N/A"),1),t("td",ae,r((e==null?void 0:e.type_of_school)||"N/A"),1),t("td",ne,r((e==null?void 0:e.assigned_to_school_head)||"N/A"),1),t("td",oe,r((e==null?void 0:e.updated_by_school_head)||"N/A"),1),t("td",ie,r(e==null?void 0:e.gender_of_school),1),t("td",re,[t("div",de,[n(u,{unelevated:"","no-caps":"",dense:"",color:"orange",style:{"min-width":"40px"},to:`/schools/view/${e==null?void 0:e.id}`},{default:_(()=>[l("View")]),_:2},1032,["to"]),n(u,{unelevated:"","no-caps":"",dense:"",color:"green",style:{"min-width":"40px"},to:`/schools/edit/${e==null?void 0:e.id}`},{default:_(()=>[l("Edit")]),_:2},1032,["to"])])])]))),128))],512),[[b,i.schools]]),le,g(t("div",null,_e,512),[[b,!d.table_docs.length]])])])}var ye=N(q,[["render",pe],["__scopeId","data-v-f699728c"]]);export{ye as default};
