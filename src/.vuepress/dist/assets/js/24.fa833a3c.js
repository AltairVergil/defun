(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{362:function(e,t,i){},415:function(e,t,i){"use strict";i(362)},464:function(e,t,i){"use strict";i.r(t);var n={props:{triggerSelector:{type:String,default:".vuemastery-trigger"}},data:function(){return{isOpen:!1}},methods:{initVideoModal:function(){var e=this,t=document.querySelector(this.triggerSelector),i=document.querySelector(".video-space");t.addEventListener("click",(function(t){t.stopPropagation(),e.isOpen=!0,document.body.classList.toggle("stop-scroll"),i.innerHTML='<iframe id="videoIframe" style="height: 100%; left: 0; position: absolute; top: 0; width: 100%;" src="https://learning.dcloud.io/" frameborder="0" allowfullscreen></iframe>'})),document.body.addEventListener("click",(function(n){e.isOpen&&n.target!==t&&!e.$refs.modal.contains(n.target)&&(e.isOpen=!1,document.body.classList.remove("stop-scroll"),i.innerHTML="http://viptv.work/dev")}))}},mounted:function(){"undefined"!=typeof window&&this.initVideoModal()}},o=(i(415),i(48)),s=Object(o.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{directives:[{name:"show",rawName:"v-show",value:this.isOpen,expression:"isOpen"}],staticClass:"overlay"},[t("div",{ref:"modal",staticClass:"modal",class:{open:this.isOpen}},[t("div",{staticClass:"video-space",staticStyle:{padding:"56.25% 0 0 0",position:"relative"}})])])}),[],!1,null,null,null);t.default=s.exports}}]);