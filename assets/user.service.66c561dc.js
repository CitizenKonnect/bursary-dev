import{Z as r,a8 as i}from"./index.bacfec48.js";import{u as c,g as p}from"./generateHeaders.c61a8e24.js";import{a as u}from"./axios.a3b240ae.js";import{u as o}from"./auth_user_store.fb6dbab9.js";const{getSettings:m}=r(c()),{setUserDetails:d}=o(),{getAuthUserDetails:t}=r(o());var a;const f=(a=m.value)==null?void 0:a.api_encryption_enabled,U={fetchMe:async()=>{try{if(!t.value.id)return;const s={id:t.value.id};let e=(await u.get("/api/v1/users/me/",{headers:{...p()},params:s})).data;f&&(e=JSON.parse(i(e)));const{message:g,success:h,results:n}=e;d(n)}catch{}}};export{U as s};
