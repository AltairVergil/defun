(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{313:function(t,e,n){"use strict";var r=n(171),a=n(176),o=n(7),s=n(25),i=n(102),u=n(174),c=n(16),l=n(172),p=n(74),f=n(177).UNSUPPORTED_Y,h=[].push,g=Math.min;r("split",2,(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=String(s(this)),o=void 0===n?4294967295:n>>>0;if(0===o)return[];if(void 0===t)return[r];if(!a(t))return e.call(r,t,o);for(var i,u,c,l=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),g=0,d=new RegExp(t.source,f+"g");(i=p.call(d,r))&&!((u=d.lastIndex)>g&&(l.push(r.slice(g,i.index)),i.length>1&&i.index<r.length&&h.apply(l,i.slice(1)),c=i[0].length,g=u,l.length>=o));)d.lastIndex===i.index&&d.lastIndex++;return g===r.length?!c&&d.test("")||l.push(""):l.push(r.slice(g)),l.length>o?l.slice(0,o):l}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var a=s(this),o=null==e?void 0:e[t];return void 0!==o?o.call(e,a,n):r.call(String(a),e,n)},function(t,a){var s=n(r,t,this,a,r!==e);if(s.done)return s.value;var p=o(t),h=String(this),d=i(p,RegExp),v=p.unicode,m=(p.ignoreCase?"i":"")+(p.multiline?"m":"")+(p.unicode?"u":"")+(f?"g":"y"),b=new d(f?"^(?:"+p.source+")":p,m),w=void 0===a?4294967295:a>>>0;if(0===w)return[];if(0===h.length)return null===l(b,h)?[h]:[];for(var y=0,j=0,O=[];j<h.length;){b.lastIndex=f?0:j;var _,x=l(b,f?h.slice(j):h);if(null===x||(_=g(c(b.lastIndex+(f?j:0)),h.length))===y)j=u(h,j,v);else{if(O.push(h.slice(y,j)),O.length===w)return O;for(var S=1;S<=x.length-1;S++)if(O.push(x[S]),O.length===w)return O;j=y=_}}return O.push(h.slice(y)),O}]}),f)},331:function(t,e,n){var r=n(20),a=Date.prototype,o=a.toString,s=a.getTime;new Date(NaN)+""!="Invalid Date"&&r(a,"toString",(function(){var t=s.call(this);return t==t?o.call(this):"Invalid Date"}))},369:function(t,e,n){},428:function(t,e,n){var r=n(2),a=n(4),o=n(17),s=n(27).f,i=n(9),u=a((function(){s(1)}));r({target:"Object",stat:!0,forced:!i||u,sham:!i},{getOwnPropertyDescriptor:function(t,e){return s(o(t),e)}})},429:function(t,e,n){var r=n(2),a=n(9);r({target:"Object",stat:!0,forced:!a,sham:!a},{defineProperties:n(181)})},430:function(t,e,n){"use strict";var r=n(2),a=n(4),o=n(13),s=n(50);r({target:"Date",proto:!0,forced:a((function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})}))},{toJSON:function(t){var e=o(this),n=s(e);return"number"!=typeof n||isFinite(n)?e.toISOString():null}})},431:function(t,e,n){"use strict";n(2)({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return URL.prototype.toString.call(this)}})},432:function(t,e,n){n(2)({target:"Date",stat:!0},{now:function(){return(new Date).getTime()}})},433:function(t,e,n){"use strict";n(369)},449:function(t,e,n){"use strict";n.r(e);n(99),n(34),n(32),n(428),n(104),n(105),n(187),n(429),n(107);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}n(37),n(8),n(54),n(12),n(14),n(103);var s=n(68);var i=n(29),u=(n(76),n(170),n(49),n(313),n(70),n(430),n(431),n(331),n(432),n(71),{language:"Language",github:"GitHub",lastCommit:"Last commit",last90Days:"Last 90 days",loadDetails:"Load Details",commits:"commits",loading:"Loading..."}),c=[{lang:"en-us",owner:"vuejs",repo:"docs-next",branch:"master",url:"https://v3.vuejs.org/"},{lang:"id",owner:"vuejs-id",repo:"docs-next",branch:"indonesian"},{lang:"ja",owner:"vuejs-jp",repo:"ja.vuejs.org",branch:"lang-ja",url:"https://v3.ja.vuejs.org/"},{lang:"ko",owner:"vuejs-kr",repo:"docs-next",branch:"rootKoKr",url:"https://v3.ko.vuejs.org/"},{lang:"pt-br",owner:"vuejs-br",repo:"docs-next",branch:"master",url:"https://vuejsbr-docs-next.netlify.app/"},{lang:"ru",owner:"translation-gang",repo:"docs-next",branch:"master",url:"https://v3.ru.vuejs.org/"},{lang:"zh-cn",owner:"vuejs",repo:"docs-next-zh-cn",branch:"master",url:"https://v3.cn.vuejs.org/"}],l=function(){var t=Object(i.a)(regeneratorRuntime.mark((function t(e){var n,r,a,o,s,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.owner,r=e.repo,a=e.branch,t.next=3,fetch("https://api.github.com/repos/".concat(n,"/").concat(r,"/branches/").concat(a));case 3:return o=t.sent,t.next=6,o.json();case 6:return s=t.sent,i=s.commit.commit.committer.date,t.abrupt("return",i.split("T")[0]);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=new Date(Date.now()-7776e6).toJSON().replace(/\.\d*/,""),f=function(){var t=Object(i.a)(regeneratorRuntime.mark((function t(e){var n,r,a,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.owner,r=e.repo,t.next=3,fetch("https://api.github.com/repos/".concat(n,"/").concat(r,"/commits?since=").concat(p,"&per_page=100"));case 3:return a=t.sent,t.next=6,a.json();case 6:return o=t.sent,t.abrupt("return",o.length);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h={name:"translations",data:function(){var t,e={},n=function(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=Object(s.a)(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,u=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return i=t.done,t},e:function(t){u=!0,o=t},f:function(){try{i||null==n.return||n.return()}finally{if(u)throw o}}}}(c);try{for(n.s();!(t=n.n()).done;){e[t.value.lang]=null}}catch(t){n.e(t)}finally{n.f()}return{showLoadButton:!0,dates:e,counts:o({},e),labels:u,repos:c}},computed:{merged:function(){var t=this;return this.repos.map((function(e){return o(o({},e),{},{date:t.dates[e.lang],count:t.counts[e.lang]})}))}},mounted:function(){var t=null;try{t=JSON.parse(sessionStorage.getItem("translation-stats"))}catch(t){}if(t){var e=t,n=e.date,r=e.counts,a=e.dates;!n||n+108e5<Date.now()||(this.dates=a,this.counts=r,this.showLoadButton=!1)}},methods:{load:function(){var t=this;return Object(i.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.showLoadButton=!1,e.next=3,Promise.all(t.repos.map(t.loadRepo));case 3:t.saveStats();case 4:case"end":return e.stop()}}),e)})))()},loadRepo:function(t){var e=this;return Object(i.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.loadLastCommit(t);case 2:return n.abrupt("return",e.loadCommitCount(t));case 3:case"end":return n.stop()}}),n)})))()},loadLastCommit:function(t){var e=this;return Object(i.a)(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.lang,e.dates[r]=u.loading,a="-",n.prev=3,n.next=6,l(t);case 6:a=n.sent,n.next=11;break;case 9:n.prev=9,n.t0=n.catch(3);case 11:e.dates[r]=a;case 12:case"end":return n.stop()}}),n,null,[[3,9]])})))()},loadCommitCount:function(t){var e=this;return Object(i.a)(regeneratorRuntime.mark((function n(){var r,a,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=t.lang,a=e.dates[r],o=0,"-"!==a){n.next=7;break}o="-",n.next=18;break;case 7:if(!(a>p)){n.next=18;break}return e.counts[r]=u.loading,n.prev=9,n.next=12,f(t);case 12:o=n.sent,n.next=18;break;case 15:n.prev=15,n.t0=n.catch(9),o="-";case 18:e.counts[r]=o;case 19:case"end":return n.stop()}}),n,null,[[9,15]])})))()},saveStats:function(){var t={date:Date.now(),counts:this.counts,dates:this.dates};sessionStorage.setItem("translation-stats",JSON.stringify(t))}}},g=(n(433),n(48)),d=Object(g.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v(t._s(t.labels.language))]),t._v(" "),n("th",[t._v(t._s(t.labels.github))]),t._v(" "),n("th",[t._v(t._s(t.labels.lastCommit))]),t._v(" "),n("th",[t._v(t._s(t.labels.last90Days))])])]),t._v(" "),n("tbody",t._l(t.merged,(function(e,r){var a=e.lang,o=e.owner,s=e.repo,i=e.url,u=e.count,c=e.date;return n("tr",{key:r},[n("td",[i?n("a",{attrs:{href:i,target:"_blank"}},[t._v("\n          "+t._s(a)+" "),n("OutboundLink")],1):[t._v("\n          "+t._s(a)+"\n        ")]],2),t._v(" "),n("td",[n("a",{attrs:{href:"https://github.com/"+o+"/"+s+"/",target:"_blank"}},[t._v(t._s(o)+"/"+t._s(s)+" "),n("OutboundLink")],1)]),t._v(" "),t.showLoadButton?[0===r?n("td",{staticClass:"load-cell",attrs:{colspan:"2",rowspan:t.merged.length}},[n("button",{on:{click:t.load}},[t._v(t._s(t.labels.loadDetails))])]):t._e()]:[n("td",[t._v(t._s(c))]),t._v(" "),n("td",[t._v("\n          "+t._s(u)+t._s(100===u?"+":"")+"\n          "),"number"==typeof u?[t._v("\n            "+t._s(t.labels.commits)+"\n          ")]:t._e()],2)]],2)})),0)])}),[],!1,null,"ac871d6e",null);e.default=d.exports}}]);