import{_ as d,a0 as r,a1 as i,a2 as u,ad as l,d as t,b7 as n,J as c,af as p,ae as _,a3 as m,b2 as y}from"./index.bacfec48.js";const v={data(){return{user_type:""}}},h={class:"form-container"},V=l("div",{class:""},[l("div",{class:"text-subtitle1"},"Select a role that suits you")],-1),b={class:"q-my-md"},k={class:"q-my-md"},f={class:"q-my-md"},x={class:"q-my-md"},q={class:"q-my-md"},g={class:"flex justify-end"},U={class:"q-mt-md q-mx-xs flex justify-end",style:{gap:"20px"}},B=l("div",{class:""},"Already have an account ?",-1);function w(I,o,N,S,e,T){const a=r("router-link");return i(),u("div",h,[V,l("div",b,[t(n,{modelValue:e.user_type,"onUpdate:modelValue":o[0]||(o[0]=s=>e.user_type=s),dense:"",val:"student","keep-color":"",color:"black",label:"Student"},null,8,["modelValue"])]),l("div",k,[t(n,{modelValue:e.user_type,"onUpdate:modelValue":o[1]||(o[1]=s=>e.user_type=s),dense:"",val:"primary_school_head_teacher","keep-color":"",color:"black",label:"Institution head (Primary school)"},null,8,["modelValue"])]),l("div",f,[t(n,{modelValue:e.user_type,"onUpdate:modelValue":o[2]||(o[2]=s=>e.user_type=s),dense:"",val:"high_school_principle","keep-color":"",color:"black",label:"Institution head (High school)"},null,8,["modelValue"])]),l("div",x,[t(n,{modelValue:e.user_type,"onUpdate:modelValue":o[3]||(o[3]=s=>e.user_type=s),dense:"",val:"tvet_principle","keep-color":"",color:"black",label:"Institution head (Tvet)"},null,8,["modelValue"])]),l("div",q,[t(n,{modelValue:e.user_type,"onUpdate:modelValue":o[4]||(o[4]=s=>e.user_type=s),dense:"",val:"admin","keep-color":"",color:"black",label:"Admin"},null,8,["modelValue"])]),c(l("div",g,[t(_,{outline:"",label:"continue",to:`/register/form/${e.user_type}/`,"no-caps":""},null,8,["to"])],512),[[p,e.user_type]]),l("div",U,[B,t(a,{to:"/auth/login",class:"no-link-decoration text-blue3"},{default:m(()=>[y("Login")]),_:1})])])}var A=d(v,[["render",w]]);export{A as default};
