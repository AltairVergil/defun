import{d as a,n as r,P as s}from"./PartnerCard.38c80b37.js";import{_ as e,g as n,o as t,c as i,d as l,j as c,u as o,C as p,t as d,F as f,n as h,l as u,e as g}from"../app.ff438ce7.js";const m={class:"partner-page"},b={class:"back"},v={href:"/partners/all.html"},_=g("返回所有合作伙伴"),P={class:"description"},j=["innerHTML"],k={class:"actions"},L=["href"],C=["href"],H={key:0,class:"hiring"},M=["href"];var T=e(n({__name:"PartnerPage",props:{partner:null},setup(e){const n=a.find((a=>r(a.name)===e.partner));return(a,r)=>{return t(),i("div",m,[l("div",b,[l("a",v,[c(o(p),{class:"icon"}),_])]),c(s,{hero:"",page:"",data:o(n)},null,8,["data"]),l("div",P,[l("h2",null,"About "+d(o(n).name),1),(t(!0),i(f,null,h(o(n).description,(a=>(t(),i("p",{innerHTML:a},null,8,j)))),256))]),l("div",k,[l("a",{href:o(n).website.url,target:"_blank"},"访问网站",8,L),l("a",{class:"contact",href:(e=o(n).contact,`mailto:${e}?subject=Looking for a Vue.js Partner`),target:"_blank"},"联系方式",8,C)]),o(n).hiring?(t(),i("div",H,[l("a",{href:o(n).hiring},d(o(n).name)+" 正在招聘中！",9,M)])):u("",!0)]);var e}}}),[["__scopeId","data-v-1472b3ca"]]);export{T as P};
