import{a9 as _,a8 as h,aa as l}from"./index.bacfec48.js";const d=_("auth_user_store",{state:()=>({auth_user_details:"",user_details:""}),getters:{getAuthUserDetails:e=>{if(e.auth_user_details)return e.auth_user_details;if(e.auth_user_details===""){let t=localStorage.getItem("user_auth_data");return t?(e.auth_user_details=JSON.parse(h(t)),e.auth_user_details):""}},getAuthUserPermissions:e=>{var r,a;const t=((a=(r=e.auth_user_permissions)==null?void 0:r.permissions)==null?void 0:a.permissions)||[],s={};return t==null||t.forEach(u=>{const{model:i,...o}=u;s[i.toLowerCase()]=o}),s},getMe:e=>{if(!e.user_details)return"";const{permissions:t,...s}=e.user_details;return s}},actions:{setAuthUserDetails(e){this.auth_user_details=e,localStorage.setItem("user_auth_data",l(JSON.stringify(e)))},setUserDetails(e){this.user_details=e},async logout(){localStorage.removeItem("user_auth_data"),this.auth_user_details="",await this.router.push("/auth/login"),window.location.reload()}}});export{d as u};
