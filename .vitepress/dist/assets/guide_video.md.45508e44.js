import{_ as e,o as n,c as a,a as i}from"./app.ff438ce7.js";const d='{"title":"视频接口","description":"","frontmatter":{},"headers":[{"level":2,"title":"凤凰视频","slug":"凤凰视频"},{"level":3,"title":"NAV","slug":"nav"},{"level":3,"title":"Home","slug":"home"},{"level":3,"title":"List","slug":"list"},{"level":3,"title":"Ucms","slug":"ucms"},{"level":3,"title":"Url","slug":"url"}],"relativePath":"guide/video.md"}',r={},t=[i('<h1 id="视频接口" tabindex="-1">视频接口 <a class="header-anchor" href="#视频接口" aria-hidden="true">#</a></h1><h2 id="凤凰视频" tabindex="-1">凤凰视频 <a class="header-anchor" href="#凤凰视频" aria-hidden="true">#</a></h2><h3 id="nav" tabindex="-1">NAV <a class="header-anchor" href="#nav" aria-hidden="true">#</a></h3><div class="language-"><pre><code>Nav: [{\n    id: &#39;HDZYCHI&#39;,\n    name: &#39;鸡汤&#39;\n  }, {\n    id: &#39;SYLB10&#39;,\n    name: &#39;头条&#39;\n  },\n  {\n    id: &#39;CJ33&#39;,\n    name: &#39;财经&#39;\n  }, {\n    id: &#39;FUNNY&#39;,\n    name: &#39;搞笑&#39;\n  }, {\n    id: &#39;ANECD&#39;,\n    name: &#39;奇闻&#39;\n  }, {\n    id: &#39;KJ123&#39;,\n    name: &#39;科技&#39;\n  }, {\n    id: &#39;TY43&#39;,\n    name: &#39;体育&#39;\n  }, {\n    id: &#39;LS153&#39;,\n    name: &#39;历史&#39;\n  }, {\n    id: &#39;QC45&#39;,\n    name: &#39;汽车&#39;\n  }, {\n    id: &#39;FC81&#39;,\n    name: &#39;房产&#39;\n  }, {\n    id: &#39;JS83&#39;,\n    name: &#39;军事&#39;\n  }\n],\n</code></pre></div><h3 id="home" tabindex="-1">Home <a class="header-anchor" href="#home" aria-hidden="true">#</a></h3><div class="language-"><pre><code>Home: () =&gt; {\n  req.defaults.baseURL = env ? proxy + &#39;https://shankapi.ifeng.com&#39; :\n    &#39;/ifenga&#39;\n  return req.get(&#39;/spring/homeStream/getHomeStream/50/0/0/&#39;)\n},\n</code></pre></div><h3 id="list" tabindex="-1">List <a class="header-anchor" href="#list" aria-hidden="true">#</a></h3><div class="language-"><pre><code>List: (id, pg) =&gt; {\n  req.defaults.baseURL = env ? proxy + &#39;http://api.iclient.ifeng.com&#39; :\n    &#39;/ifengb&#39;\n  return req.get(&#39;/ClientNews&#39;, {\n    params: {\n      id,\n      os: &#39;android&#39;,\n      gv: &#39;5.5.5&#39;,\n      uid: &#39;undefined&#39;,\n      proid: &#39;undefined&#39;,\n      action: &#39;default&#39;,\n      pullNum: pg\n    }\n  })\n},\n</code></pre></div><h3 id="ucms" tabindex="-1">Ucms <a class="header-anchor" href="#ucms" aria-hidden="true">#</a></h3><div class="language-"><pre><code>Ucms: (id) =&gt; {\n  req.defaults.baseURL = env ? proxy + &#39;https://shankapi.ifeng.com&#39; :\n    &#39;/ifenga&#39;\n  return req.get(&#39;/c/api/videoShare/getRelateVideos/&#39; + id + &#39;/getvideorelatecb&#39;)\n},\n</code></pre></div><h3 id="url" tabindex="-1">Url <a class="header-anchor" href="#url" aria-hidden="true">#</a></h3><div class="language-"><pre><code>Url: (guid) =&gt; {\n  req.defaults.baseURL = env ? proxy + &#39;http://nine.ifeng.com&#39; : &#39;/ifengc&#39;\n  return req.get(&#39;/apiPhoenixtvDetails&#39;, {\n    params: {\n      guid\n    }\n  })\n},\n</code></pre></div>',12)];var s=e(r,[["render",function(e,i,d,r,s,l){return n(),a("div",null,t)}]]);export{d as __pageData,s as default};