import{_ as I,Z as S,a0 as q,a1 as t,a2 as r,ad as a,F as g,b5 as y,a4 as c,a3 as m,d as i,as as u,ai as _,bs as d,a5 as l,b3 as C,b4 as $}from"./index.bacfec48.js";import{Q as A}from"./QExpansionItem.c1b49321.js";import{u as B}from"./auth_user_store.fb6dbab9.js";import"./QItemLabel.74f9032e.js";const{getAuthUserPermissions:z,getMe:L}=S(B()),U={data(){return{}},computed:{getAuthUserPermissions(){return z.value},getMe(){return L.value},navList(){return[{name:"My details",route_name:"sensor_types",link:"/profile",icon_name:"manage_accounts",model:"student"},{name:"Bursary",route_name:"bursary",link:"/bursaries",icon_name:"difference",model:"bursary"},{name:"Communications",route_name:"communications",link:"/communications",icon_name:"email",model:"communications"},{name:"Resume",route_name:"careers",link:"/resumes",icon_name:"work",model:"jobsAndInternships"}]}},methods:{hasPermission(s){return!0},checkPermission(s){return!!this.getAuthUserPermissions[s.toLowerCase()]}}},M=s=>(C("data-v-7e80cf1c"),s=s(),$(),s),N={class:"side-nav flex column"},Q={class:"links_section"},V={key:0},E={class:"flex items-center q-pb-sm full-width"},F={class:"text-white text-subtitle1"},R={class:"q-mr-sm"},T={class:"text-white text-subtitle1 q-mr-md"},j={class:"q-mx-md"},D={class:"text-white text-subtitle1 q-mr-md"},O=M(()=>a("div",{class:"side_nav_footer"},[a("div",{class:"side_nav_footer_text"},"Powered by Teleops.IO")],-1));function Z(s,b,G,H,J,n){const p=q("router-link");return t(),r("div",N,[a("div",Q,[(t(!0),r(g,null,y(n.navList,(e,w)=>{var v,h,f;return t(),r("div",{class:"",key:w},[e!=null&&e.children?(t(),r("div",V,[n.hasPermission(e)?(t(),c(A,{key:0,dense:"",group:"expansion_group","header-class":"expansion_header",class:d({"active-link-class":(h=e==null?void 0:e.route_names)==null?void 0:h.includes((v=s.$route)==null?void 0:v.meta.route_name)})},{header:m(()=>[a("div",E,[i(u,{name:`${e.icon_name}`,color:"green",size:"35px",class:"q-mr-md"},null,8,["name"]),a("div",F,_(e.name),1)])]),default:m(()=>[(t(!0),r(g,null,y(e==null?void 0:e.children,(o,P)=>{var x;return t(),r("div",{key:P,class:d(["q-ml-lg",{"bg-green-3 ":(o==null?void 0:o.route_name)===((x=s.$route)==null?void 0:x.meta.route_name)}])},[n.hasPermission(o)?(t(),c(p,{key:0,to:o.link,class:"flex items-center no-link-decoration link_item"},{default:m(()=>[a("div",R,[i(u,{name:`${o.icon_name}`,color:"green",size:"30px"},null,8,["name"])]),a("div",T,_(o.name),1)]),_:2},1032,["to"])):l("",!0)],2)}),128))]),_:2},1032,["class"])):l("",!0)])):(t(),r("div",{key:1,class:d({"active-link-class":(e==null?void 0:e.route_name)===((f=s.$route)==null?void 0:f.meta.route_name)})},[n.hasPermission(e)?(t(),c(p,{key:0,to:e.link,class:"flex items-center no-link-decoration link_item"},{default:m(()=>[a("div",j,[i(u,{name:`${e.icon_name}`,color:"green",size:"35px"},null,8,["name"])]),a("div",D,_(e.name),1)]),_:2},1032,["to"])):l("",!0)],2))])}),128))]),O])}var k=I(U,[["render",Z],["__scopeId","data-v-7e80cf1c"]]);export{k as default};
