import{_ as x,a0 as g,a1 as u,a2 as l,ad as s,J as o,af as a,d,a3 as h,b2 as n,as as w,F as N,b5 as A,ai as c,ae as y,b3 as S,b4 as D}from"./index.58c24f9b.js";import{f as k}from"./index.e3cc403f.js";const V={props:{bursary_applications:Array,bursary_application_window_status:[String,Object]},methods:{formateDateTime(t){if(!!t)return k(new Date(t),"yyy-MM-dd HH:mma")}}},r=t=>(S("data-v-213e061c"),t=t(),D(),t),F={class:"view-details"},I={class:"flex items-center justify-between"},B=r(()=>s("div",{class:"text-subtitle1 text-center q-my-sm"},"Application history",-1)),M={class:""},j={class:""},z=r(()=>s("th",{scope:"col"},"Name",-1)),T=r(()=>s("th",{scope:"col"},"Serial number",-1)),$=r(()=>s("th",{scope:"col"},"Status",-1)),C={scope:"col"},E={class:"sortable-table-head"},H=r(()=>s("th",{scope:"col"},"Actions",-1)),Q={"data-label":"First name",class:"text-capitalize"},q={"data-label":"First name",class:"text-capitalize"},J={"data-label":"First name",class:"text-capitalize"},L={"data-label":"Datetime"},O={"data-label":"Action"},G={class:"flex justify-center items-center",style:{gap:"5px"}},K=r(()=>s("span",{class:"trigger"},null,-1)),P=r(()=>s("div",{class:"text-left"},"No applications",-1)),R=[P];function U(t,W,_,X,Y,f){var m;const v=g("router-link");return u(),l("div",null,[s("div",F,[s("div",I,[B,o(s("div",M,[d(v,{to:"/bursaries/apply",class:"no-link-decoration"},{default:h(()=>[n("New Application")]),_:1})],512),[[a,((m=_.bursary_application_window_status)==null?void 0:m.application_window)==="open"]])]),s("table",j,[s("thead",null,[s("tr",null,[z,T,$,s("th",C,[s("div",E,[n(" Datetime "),d(w,{name:"arrow_downward"}),d(w,{name:"arrow_upward"})])]),H])]),o(s("tbody",null,[(u(!0),l(N,null,A(_.bursary_applications,e=>{var i,b;return u(),l("tr",{key:e==null?void 0:e.id},[s("td",Q,c(`${(i=e==null?void 0:e.user)==null?void 0:i.first_name} ${(b=e==null?void 0:e.user)==null?void 0:b.last_name}`||"N/A"),1),s("td",q,c((e==null?void 0:e.serial_number)||"N/A"),1),s("td",J,c((e==null?void 0:e.status)||"N/A"),1),s("td",L,c(f.formateDateTime(e==null?void 0:e.timestamp)||"N/A"),1),s("td",O,[s("div",G,[d(y,{unelevated:"","no-caps":"",dense:"",color:"orange",style:{"min-width":"60px"},to:`/bursaries/view/${e==null?void 0:e.id}`},{default:h(()=>[n("View")]),_:2},1032,["to"]),o(d(y,{unelevated:"","no-caps":"",dense:"",color:"green",style:{"min-width":"60px"},to:`/bursaries/edit/${e==null?void 0:e.id}`},{default:h(()=>[n("Edit")]),_:2},1032,["to"]),[[a,(e==null?void 0:e.status)==="pending"]])])])])}),128))],512),[[a,_.bursary_applications]]),K,o(s("div",null,R,512),[[a,!_.bursary_applications.length]])])])])}var ee=x(V,[["render",U],["__scopeId","data-v-213e061c"]]);export{ee as default};
