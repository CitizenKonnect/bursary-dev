import{b as d,Q as c,a as u}from"./QItemLabel.cffd16e9.js";import{Q as m}from"./QSelect.1fc42082.js";import{w as p}from"./wards_polling_centers.b3f07557.js";import{_,a1 as f,a4 as h,a3 as a,d as i,bt as w,bR as b,b2 as S,ai as x}from"./index.56aced16.js";import"./QMenu.58a91336.js";import"./position-engine.9dfbd25a.js";import"./selection.e4c60947.js";import"./format.a33550d6.js";const v={props:{selected_value:[String,Object]},data(){return{selected_ward:"",results:[],all_wards:[]}},computed:{},mounted(){var e;this.selected_ward=this.selected_value,this.all_wards=(e=Object.keys(p))==null?void 0:e.map(t=>({label:t,value:t}))},methods:{async fetchOptions(e,t){var r;if(e===""){this.results=this.all_wards,t();return}const n=e.toLowerCase();if(this.results=(r=this.all_wards)==null?void 0:r.filter(l=>l.label.toLowerCase().indexOf(n)>-1),this.results.length)return t();this.results=this.all_wards,t()},handleSelection(e){!e||this.$emit("selected_value_emitted",e)},clearSelection(){this.search_term=null,this.$emit("clear_selected_value",!0)}}};function Q(e,t,n,r,l,o){return f(),h(m,{outlined:"",modelValue:l.selected_ward,"onUpdate:modelValue":[t[0]||(t[0]=s=>l.selected_ward=s),o.handleSelection],dense:"",options:l.results,"use-input":"",clearable:"",onClear:o.clearSelection,onFilter:o.fetchOptions},{option:a(s=>[i(d,w(b(s.itemProps)),{default:a(()=>[i(c,null,{default:a(()=>[i(u,{class:"text-capitalize"},{default:a(()=>[S(x(s.opt.label),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),_:1},8,["modelValue","options","onClear","onFilter","onUpdate:modelValue"])}var L=_(v,[["render",Q]]);export{L as default};
