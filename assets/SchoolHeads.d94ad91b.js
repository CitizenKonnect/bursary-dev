import{_ as w,Z as q,a0 as I,a1 as t,a2 as r,ad as a,F as g,b5 as y,a4 as m,a3 as c,d as i,as as u,ai as _,bs as d,a5 as l,b3 as C,b4 as $}from"./index.bacfec48.js";import{Q as U}from"./QExpansionItem.c1b49321.js";import{u as z}from"./auth_user_store.fb6dbab9.js";import"./QItemLabel.74f9032e.js";const{getAuthUserPermissions:A,getMe:B}=q(z()),L={data(){return{}},computed:{getAuthUserPermissions(){return A.value},getMe(){return B.value},navList(){return[{name:"My details",route_name:"my-details",link:"/profile",icon_name:"manage_accounts",model:"User"},{name:"My School",route_name:"school",link:"/school",icon_name:"location_city",model:"School"},{name:"Communications",route_name:"communications",link:"/communications",icon_name:"email",model:"communications"}]}},methods:{hasPermission(s){return!0},checkPermission(s){return!!this.getAuthUserPermissions[s.toLowerCase()]}}},M=s=>(C("data-v-50c9282a"),s=s(),$(),s),H={class:"side-nav flex column"},N={class:"links_section"},Q={key:0},V={class:"flex items-center q-pb-sm full-width"},E={class:"text-white text-subtitle1"},F={class:"q-mr-sm"},T={class:"text-white text-subtitle1 q-mr-md"},D={class:"q-mx-md"},O={class:"text-white text-subtitle1 q-mr-md"},R=M(()=>a("div",{class:"side_nav_footer"},[a("div",{class:"side_nav_footer_text"},"Powered by Teleops.IO")],-1));function Z(s,b,j,G,J,n){const p=I("router-link");return t(),r("div",H,[a("div",N,[(t(!0),r(g,null,y(n.navList,(e,S)=>{var h,v,f;return t(),r("div",{class:"",key:S},[e!=null&&e.children?(t(),r("div",Q,[n.hasPermission(e)?(t(),m(U,{key:0,dense:"",group:"expansion_group","header-class":"expansion_header",class:d({"active-link-class":(v=e==null?void 0:e.route_names)==null?void 0:v.includes((h=s.$route)==null?void 0:h.meta.route_name)})},{header:c(()=>[a("div",V,[i(u,{name:`${e.icon_name}`,color:"green",size:"35px",class:"q-mr-md"},null,8,["name"]),a("div",E,_(e.name),1)])]),default:c(()=>[(t(!0),r(g,null,y(e==null?void 0:e.children,(o,P)=>{var x;return t(),r("div",{key:P,class:d(["q-ml-lg",{"bg-green-3 ":(o==null?void 0:o.route_name)===((x=s.$route)==null?void 0:x.meta.route_name)}])},[n.hasPermission(o)?(t(),m(p,{key:0,to:o.link,class:"flex items-center no-link-decoration link_item"},{default:c(()=>[a("div",F,[i(u,{name:`${o.icon_name}`,color:"green",size:"30px"},null,8,["name"])]),a("div",T,_(o.name),1)]),_:2},1032,["to"])):l("",!0)],2)}),128))]),_:2},1032,["class"])):l("",!0)])):(t(),r("div",{key:1,class:d({"active-link-class":(e==null?void 0:e.route_name)===((f=s.$route)==null?void 0:f.meta.route_name)})},[n.hasPermission(e)?(t(),m(p,{key:0,to:e.link,class:"flex items-center no-link-decoration link_item"},{default:c(()=>[a("div",D,[i(u,{name:`${e.icon_name}`,color:"green",size:"35px"},null,8,["name"])]),a("div",O,_(e.name),1)]),_:2},1032,["to"])):l("",!0)],2))])}),128))]),R])}var k=w(L,[["render",Z],["__scopeId","data-v-50c9282a"]]);export{k as default};
