(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{325:function(t,n,e){"use strict";var i=e(20),r=e(7),o=e(4),a=e(179),u=RegExp.prototype,c=u.toString,s=o((function(){return"/a/b"!=c.call({source:"a",flags:"b"})})),l="toString"!=c.name;(s||l)&&i(RegExp.prototype,"toString",(function(){var t=r(this),n=String(t.source),e=t.flags;return"/"+n+"/"+String(void 0===e&&t instanceof RegExp&&!("flags"in u)?a.call(t):e)}),{unsafe:!0})},331:function(t,n,e){var i=e(20),r=Date.prototype,o=r.toString,a=r.getTime;new Date(NaN)+""!="Invalid Date"&&i(r,"toString",(function(){var t=a.call(this);return t==t?o.call(this):"Invalid Date"}))},358:function(t,n,e){},409:function(t,n,e){var i=e(2),r=e(5),o=e(75),a=[].slice,u=function(t){return function(n,e){var i=arguments.length>2,r=i?a.call(arguments,2):void 0;return t(i?function(){("function"==typeof n?n:Function(n)).apply(this,r)}:n,e)}};i({global:!0,bind:!0,forced:/MSIE .\./.test(o)},{setTimeout:u(r.setTimeout),setInterval:u(r.setInterval)})},410:function(t,n,e){"use strict";e(358)},460:function(t,n,e){"use strict";e.r(n);e(331),e(8),e(325),e(409);var i={data:function(){return{counter:0,interval:null}},methods:{clearInterval:function(t){function n(){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}((function(){clearInterval(this.interval)}))},mounted:function(){var t=this;this.interval=setInterval((function(){t.counter++}),1e3)}},r=(e(410),e(48)),o=Object(r.a)(i,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"demo"},[n("p",[this._v("Counter: "+this._s(this.counter))]),this._v(" "),n("button",{on:{click:this.clearInterval}},[this._v("Stop timer")])])}),[],!1,null,"276250da",null);n.default=o.exports}}]);