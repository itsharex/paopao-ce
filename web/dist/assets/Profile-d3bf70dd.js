import{_ as D}from"./post-item.vue_vue_type_style_index_0_lang-acc2d681.js";import{_ as F}from"./post-skeleton-cd4157b0.js";import{_ as M}from"./main-nav.vue_vue_type_style_index_0_lang-455f4f57.js";import{u as N}from"./vuex-cc1858c6.js";import{b as S}from"./vue-router-29025daf.js";import{r as V,_ as E}from"./index-1063388e.js";import{d as L,r,j as R,c as a,L as e,U as _,K as h,Y as u,O as d,o as t,a as s,M as f,F as j,$ as q}from"./@vue-f70ab1bd.js";import{D as G,E as K,m as O,d as T,e as Y,G as A,F as H}from"./naive-ui-9980ffcb.js";import"./content-83d95999.js";import"./@vicons-fc06a0bb.js";import"./nonesir-video-29a967e9.js";import"./formatTime-936c40eb.js";import"./moment-b7869f98.js";import"./vooks-dfdd6eef.js";import"./evtd-b614532e.js";import"./axios-707ed124.js";/* empty css               */import"./seemly-76b7b838.js";import"./vueuc-804c4158.js";import"./@css-render-66126308.js";import"./vdirs-b0483831.js";import"./@juggle-41516555.js";import"./css-render-6a5c5852.js";import"./@emotion-8a8e73f6.js";import"./lodash-es-8412e618.js";import"./treemate-25c27bff.js";import"./async-validator-dee29e8b.js";import"./date-fns-975a2d8f.js";const J={class:"profile-baseinfo"},Q={class:"avatar"},W={class:"base-info"},X={class:"username"},Z={class:"uid"},ee={key:0,class:"skeleton-wrap"},te={key:1},oe={key:0,class:"empty-wrap"},se={key:1,class:"pagination-wrap"},ne=L({__name:"Profile",setup(ae){const o=N(),k=S(),i=r(!1),p=r([]),l=r(+k.query.p||1),c=r(20),m=r(0),g=()=>{i.value=!0,V({username:o.state.userInfo.username,page:l.value,page_size:c.value}).then(n=>{i.value=!1,p.value=n.list,m.value=Math.ceil(n.pager.total_rows/c.value),window.scrollTo(0,0)}).catch(n=>{i.value=!1})},y=n=>{l.value=n,g()};return R(()=>{g()}),(n,_e)=>{const w=M,b=O,I=T,P=Y,x=F,z=A,B=D,U=H,$=G,C=K;return t(),a("div",null,[e(w,{title:"主页"}),_(o).state.userInfo.id>0?(t(),h($,{key:0,class:"main-content-wrap profile-wrap",bordered:""},{default:u(()=>[s("div",J,[s("div",Q,[e(b,{size:"large",src:_(o).state.userInfo.avatar},null,8,["src"])]),s("div",W,[s("div",X,[s("strong",null,f(_(o).state.userInfo.nickname),1),s("span",null," @"+f(_(o).state.userInfo.username),1)]),s("div",Z,"UID. "+f(_(o).state.userInfo.id),1)])]),e(P,{class:"profile-tabs-wrap",animated:""},{default:u(()=>[e(I,{name:"post",tab:"泡泡"})]),_:1}),i.value?(t(),a("div",ee,[e(x,{num:c.value},null,8,["num"])])):(t(),a("div",te,[p.value.length===0?(t(),a("div",oe,[e(z,{size:"large",description:"暂无数据"})])):d("",!0),(t(!0),a(j,null,q(p.value,v=>(t(),h(U,{key:v.id},{default:u(()=>[e(B,{post:v},null,8,["post"])]),_:2},1024))),128))]))]),_:1})):d("",!0),m.value>0?(t(),a("div",se,[e(C,{page:l.value,"onUpdate:page":y,"page-slot":_(o).state.collapsedRight?5:8,"page-count":m.value},null,8,["page","page-slot","page-count"])])):d("",!0)])}}});const Se=E(ne,[["__scopeId","data-v-1d87d974"]]);export{Se as default};
