import{_ as t,r as s,o as e,c as l,b as a,d as o,a as d,e as c}from"./app.357d9104.js";const i={},p=d(`<h1 id="loadingpage-\u52A0\u8F7D\u9875" tabindex="-1"><a class="header-anchor" href="#loadingpage-\u52A0\u8F7D\u9875" aria-hidden="true">#</a> LoadingPage \u52A0\u8F7D\u9875</h1><h2 id="\u5E73\u53F0\u5DEE\u5F02\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u5E73\u53F0\u5DEE\u5F02\u8BF4\u660E" aria-hidden="true">#</a> \u5E73\u53F0\u5DEE\u5F02\u8BF4\u660E</h2><table><thead><tr><th style="text-align:center;">App(vue)</th><th style="text-align:center;">App(nvue)</th><th style="text-align:center;">H5</th><th style="text-align:center;">\u5C0F\u7A0B\u5E8F</th></tr></thead><tbody><tr><td style="text-align:center;">\u221A</td><td style="text-align:center;">\xD7</td><td style="text-align:center;">\u221A</td><td style="text-align:center;">\u221A</td></tr></tbody></table><h2 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a> \u57FA\u672C\u4F7F\u7528</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-loading-page</span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u663E\u793A\u6216\u9690\u85CF" tabindex="-1"><a class="header-anchor" href="#\u663E\u793A\u6216\u9690\u85CF" aria-hidden="true">#</a> \u663E\u793A\u6216\u9690\u85CF</h2><p><code>loading</code>\u53EF\u4EE5\u6307\u5B9A\u662F\u5426\u663E\u793A\u52A0\u8F7D\u9875</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-loading-page</span> <span class="token attr-name">:loading</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u6587\u5B57\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#\u6587\u5B57\u5185\u5BB9" aria-hidden="true">#</a> \u6587\u5B57\u5185\u5BB9</h2><p><code>loading-text</code>\u53EF\u4EE5\u6307\u5B9A\u63D0\u793A\u5185\u5BB9</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-loading-page</span> <span class="token attr-name">loading-text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>loading...<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u52A8\u753B\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u52A8\u753B\u6A21\u5F0F" aria-hidden="true">#</a> \u52A8\u753B\u6A21\u5F0F</h2><p><code>loading-mode</code>\u53EF\u4EE5\u6307\u5B9A\u52A0\u8F7D\u52A8\u753B\u7684\u6A21\u5F0F, \u9ED8\u8BA4\u4E3A<code>circle</code></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-loading-page</span> <span class="token attr-name">loading-mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>spinner<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u52A8\u753B\u56FE\u7247" tabindex="-1"><a class="header-anchor" href="#\u52A8\u753B\u56FE\u7247" aria-hidden="true">#</a> \u52A8\u753B\u56FE\u7247</h2><p><code>image</code>\u53EF\u4EE5\u6307\u5B9A\u6587\u5B57\u4E0A\u65B9\u7528\u4E8E\u66FF\u6362loading\u52A8\u753B\u7684\u56FE\u7247</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-loading-page</span> <span class="token attr-name">image</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/static/logo.png<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u6587\u5B57\u989C\u8272" tabindex="-1"><a class="header-anchor" href="#\u6587\u5B57\u989C\u8272" aria-hidden="true">#</a> \u6587\u5B57\u989C\u8272</h2><p><code>color</code>\u53EF\u4EE5\u6307\u5B9A\u6587\u5B57\u989C\u8272</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-loading-page</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>red<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u6587\u5B57\u5927\u5C0F" tabindex="-1"><a class="header-anchor" href="#\u6587\u5B57\u5927\u5C0F" aria-hidden="true">#</a> \u6587\u5B57\u5927\u5C0F</h2><p><code>font-size</code>\u53EF\u4EE5\u6307\u5B9A\u6587\u5B57\u5927\u5C0F</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-loading-page</span> <span class="token attr-name">font-size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>24<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u56FE\u6807\u5927\u5C0F" tabindex="-1"><a class="header-anchor" href="#\u56FE\u6807\u5927\u5C0F" aria-hidden="true">#</a> \u56FE\u6807\u5927\u5C0F</h2><p><code>icon-size</code>\u53EF\u4EE5\u6307\u5B9A\u56FE\u6807\u5927\u5C0F\uFF0C\u4E0D\u6307\u5B9A\u65F6\u56FE\u6807\u5927\u5C0F\u52A8\u753B\u6A21\u5F0F\u4E3A[&#39;spinner&#39;, &#39;semicircle&#39;, &#39;circle&#39;]\u4E3A28\uFF0Cdefault\u4E3A10\uFF0C\u5426\u5219\u4E3A16\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-loading-page</span> <span class="token attr-name">icon-size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>24<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u80CC\u666F\u989C\u8272" tabindex="-1"><a class="header-anchor" href="#\u80CC\u666F\u989C\u8272" aria-hidden="true">#</a> \u80CC\u666F\u989C\u8272</h2><p><code>bg-color</code>\u53EF\u6307\u5B9A\u80CC\u666F\u8272</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-loading-page</span> <span class="token attr-name">bg-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>red<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u56FE\u6807\u989C\u8272" tabindex="-1"><a class="header-anchor" href="#\u56FE\u6807\u989C\u8272" aria-hidden="true">#</a> \u56FE\u6807\u989C\u8272</h2><p><code>loading-color</code>\u53EF\u4EE5\u6307\u5B9A\u52A0\u8F7D\u4E2D\u56FE\u6807\u7684\u989C\u8272</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-loading-page</span> <span class="token attr-name">loading-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>red<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u56FE\u6807\u6D45\u8272" tabindex="-1"><a class="header-anchor" href="#\u56FE\u6807\u6D45\u8272" aria-hidden="true">#</a> \u56FE\u6807\u6D45\u8272</h2><p><code>loading-inactive-color</code>\u53EF\u4EE5\u6307\u5B9A\u52A0\u8F7D\u4E2D\u56FE\u6807\u7684\u6D45\u8272\uFF0C\u6CE8\u610F\u53EA\u6709\u52A8\u753B\u6A21\u5F0F\u662F\uFF1Abicircle\u6216circle\u624D\u751F\u6548\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-loading-page</span> <span class="token attr-name">loading-mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bicircle<span class="token punctuation">&quot;</span></span> <span class="token attr-name">loading-inactive-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>red<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><h3 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h3>`,37),u=a("thead",null,[a("tr",null,[a("th",null,"\u53C2\u6570"),a("th",null,"\u8BF4\u660E"),a("th",null,"\u7C7B\u578B"),a("th",null,"\u9ED8\u8BA4\u503C"),a("th",null,"\u53EF\u9009\u503C")])],-1),r=a("tr",null,[a("td",null,"loading"),a("td",null,"\u662F\u5426\u663E\u793A"),a("td",null,"Boolean"),a("td",null,"false"),a("td",null,"true")],-1),h=a("tr",null,[a("td",null,"loadingText"),a("td",null,"\u63D0\u793A\u5185\u5BB9"),a("td",null,"String | Number"),a("td",null,"\u6B63\u5728\u52A0\u8F7D"),a("td",null,"-")],-1),g=a("tr",null,[a("td",null,"image"),a("td",null,"\u6587\u5B57\u4E0A\u65B9\u7528\u4E8E\u66FF\u6362loading\u52A8\u753B\u7684\u56FE\u7247"),a("td",null,"String"),a("td",null,"-"),a("td",null,"-")],-1),m=a("td",null,"loadingMode",-1),k=a("td",null,"\u52A0\u8F7D\u52A8\u753B\u7684\u6A21\u5F0F",-1),v=a("td",null,"String",-1),b=a("td",null,"circle",-1),_={href:"/components/loadingIcon",target:"_blank",rel:"noopener noreferrer"},x=c("\u67E5\u770B\u52A0\u8F7D\u52A8\u753B"),f=a("tr",null,[a("td",null,"iconSize"),a("td",null,"\u56FE\u6807\u5927\u5C0F"),a("td",null,"String | Number"),a("td",null,"\u770B\u4E0A\u65B9\u6587\u6863\u8BF4\u660E"),a("td",null,"-")],-1),q=a("tr",null,[a("td",null,"bgColor"),a("td",null,"\u80CC\u666F\u989C\u8272"),a("td",null,"String"),a("td",null,"#ffffff"),a("td",null,"-")],-1),S=a("tr",null,[a("td",null,"color"),a("td",null,"\u6587\u5B57\u989C\u8272"),a("td",null,"String"),a("td",null,"color['m-info']"),a("td",null,"-")],-1),y=a("tr",null,[a("td",null,"fontSize"),a("td",null,"\u6587\u5B57\u5927\u5C0F"),a("td",null,"String | Number"),a("td",null,"16"),a("td",null,"-")],-1),N=a("tr",null,[a("td",null,"loadingColor"),a("td",null,"\u52A0\u8F7D\u4E2D\u56FE\u6807\u7684\u989C\u8272"),a("td",null,"String"),a("td",null,"color['m-info']"),a("td",null,"-")],-1),z=a("tr",null,[a("td",null,"loadingInactiveColor"),a("td",null,"\u52A0\u8F7D\u52A8\u753B\u6D45\u8272\u989C\u8272"),a("td",null,"String"),a("td",null,"-"),a("td",null,"-")],-1);function I(P,B){const n=s("ExternalLinkIcon");return e(),l("div",null,[p,a("table",null,[u,a("tbody",null,[r,h,g,a("tr",null,[m,k,v,b,a("td",null,[a("a",_,[x,o(n)])])]),f,q,S,y,N,z])])])}var V=t(i,[["render",I],["__file","loadingPage.html.vue"]]);export{V as default};
