import{_ as e,o as n,c as a,a as i}from"./app.ff438ce7.js";const t='{"title":"影视","description":"","frontmatter":{},"headers":[{"level":2,"title":"CCTV影视库","slug":"cctv影视库"},{"level":3,"title":"NAV","slug":"nav"},{"level":3,"title":"list 4k","slug":"list-4k"},{"level":3,"title":"list","slug":"list"},{"level":3,"title":"video","slug":"video"},{"level":3,"title":"URL","slug":"url"}],"relativePath":"guide/movie.md"}',r={},d=[i('<h1 id="影视" tabindex="-1">影视 <a class="header-anchor" href="#影视" aria-hidden="true">#</a></h1><h2 id="cctv影视库" tabindex="-1">CCTV影视库 <a class="header-anchor" href="#cctv影视库" aria-hidden="true">#</a></h2><p><strong>const baseURL = proxy + &#39;<a href="http://api.cntv.cn" target="_blank" rel="noopener noreferrer">http://api.cntv.cn</a>&#39;</strong></p><h3 id="nav" tabindex="-1">NAV <a class="header-anchor" href="#nav" aria-hidden="true">#</a></h3><div class="language-"><pre><code>[\n  {\n    id: &#39;CHAL1460955853485115&#39;,\n    name: &#39;电视剧&#39;,\n    page: 40\n  },    \n  {\n    id: &#39;CHAL1460955924871139&#39;,\n    name: &#39;纪录片&#39;,\n    page: 67\n  },\n  {\n    id: &#39;CHAL1460955953877151&#39;,\n    name: &#39;特别节目&#39;,\n    page: 67\n  }\n]\n</code></pre></div><h3 id="list-4k" tabindex="-1">list 4k <a class="header-anchor" href="#list-4k" aria-hidden="true">#</a></h3><div class="language-"><pre><code>return req.get(baseURL + &#39;/video/getVideoList4k&#39;, {\n  params: {\n    serviceId: &#39;cctv4&#39;,\n    p,\n    n: 50,\n    t: &#39;json&#39;\n  }\n})\n</code></pre></div><h3 id="list" tabindex="-1">list <a class="header-anchor" href="#list" aria-hidden="true">#</a></h3><div class="language-"><pre><code>List: (channelid, p) =&gt; {\n  return req.get(baseURL + &#39;/list/getVideoAlbumList&#39;, {\n    params: {\n      channelid,\n      p,\n      n: 30,\n      serviceId: &#39;tvcctv&#39;\n    }\n  })\n},\n</code></pre></div><h3 id="video" tabindex="-1">video <a class="header-anchor" href="#video" aria-hidden="true">#</a></h3><div class="language-"><pre><code>Video: (vsid) =&gt; {\n  return req.get(baseURL + &#39;/video/videolistById&#39;, {\n    params: {\n      serviceId: &#39;cbox&#39;,\n      vsid,\n      em: &#39;01&#39;\n    }\n  })\n},\n</code></pre></div><h3 id="url" tabindex="-1">URL <a class="header-anchor" href="#url" aria-hidden="true">#</a></h3><div class="language-"><pre><code>Url: (pid) =&gt; {\n  req.defaults.baseURL = env ? proxy + &#39;http://vdn.apps.cntv.cn&#39; :\n    &#39;/cctv_url&#39;\n  return req.get(&#39;/api/getHttpVideoInfo.do&#39;, {\n    params: {\n      pid,\n      client: &#39;flash&#39;,\n      im: 0,\n      tsp: 1611947100,\n      vn: 2049,\n      vc: &#39;BA5059A996D4D22917AA3B0B893F85EC&#39;,\n      uid: &#39;05D59DB54824CD84155682143CA148C6&#39;,\n      wlan: &#39;&#39;\n    }\n  })\n}\n</code></pre></div>',13)];var s=e(r,[["render",function(e,i,t,r,s,l){return n(),a("div",null,d)}]]);export{t as __pageData,s as default};