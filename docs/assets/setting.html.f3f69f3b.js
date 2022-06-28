import{_ as a,r as t,o as i,c as o,b as n,d as c,e as s,a as p}from"./app.0830e3c8.js";const l={},u=n("h1",{id:"\u914D\u7F6E",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u914D\u7F6E","aria-hidden":"true"},"#"),s(" \u914D\u7F6E")],-1),d=n("p",null,[s("\u4E0B\u8F7DmView\uFF0C\u628AmView-ui\u653E\u5728\u9879\u76EE\u6839\u76EE\u5F55"),n("code",null,"uni_modules"),s("\u4E0B\u3002")],-1),r=s("\u6CE8\u610F\uFF1A"),m={href:"https://uniapp.dcloud.io/plugin/uni_modules.html#uni-modules",target:"_blank",rel:"noopener noreferrer"},v=s("uni_modules"),k=s("\u662Funi-app\u7684\u63D2\u4EF6\u6A21\u5757\u5316\u89C4\u8303\uFF08HBuilderX 3.1.0+\u652F\u6301\uFF09\uFF0C\u901A\u5E38\u662F\u5BF9\u4E00\u7EC4js sdk\u3001\u7EC4\u4EF6\u3001\u9875\u9762\u3001uniCloud\u4E91\u51FD\u6570\u3001\u516C\u5171\u6A21\u5757\u7B49\u7684\u5C01\u88C5\uFF0C\u7528\u4E8E\u5D4C\u5165\u5230uni-app\u9879\u76EE\u4E2D\u4F7F\u7528\uFF0C\u4E5F\u652F\u6301\u76F4\u63A5\u5C01\u88C5\u4E3A\u9879\u76EE\u6A21\u677F\u3002\u786E\u4FDD\u9879\u76EE\u4F7F\u7528ts\u3001vue3\u3001scss\u54E6\u3002"),_=p(`<h2 id="\u4FEE\u6539mview\u5185\u7F6E\u914D\u7F6E\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539mview\u5185\u7F6E\u914D\u7F6E\u65B9\u6848" aria-hidden="true">#</a> \u4FEE\u6539mView\u5185\u7F6E\u914D\u7F6E\u65B9\u6848</h2><p>\u53EF\u4EE5\u901A\u8FC7setCofig\u65B9\u6CD5\u914D\u7F6EuView\u5185\u90E8\u7684\u5404\u9879\u5185\u7F6E\u914D\u7F6E\uFF0C\u76EE\u524D\u53EF\u914D\u7F6E\u7684\u6709config\u3001props\u3001zIndex\u5C5E\u6027\uFF0C\u76EE\u524D\u53EA\u5EFA\u8BAE\u4FEE\u6539config\u3001props\u5C5E\u6027\uFF0C \u9664\u975E\u60A8\u6E05\u695A\u77E5\u9053\u81EA\u5DF1\u7684\u4FEE\u6539\u6240\u5E26\u6765\u7684\u5F71\u54CD\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// main.ts</span>
<span class="token keyword">import</span> mView <span class="token keyword">from</span> <span class="token string">&#39;@/uni_modules/mview-ui&#39;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>mView<span class="token punctuation">)</span>

<span class="token comment">// \u8C03\u7528setConfig\u65B9\u6CD5\uFF0C\u65B9\u6CD5\u5185\u90E8\u4F1A\u8FDB\u884C\u5BF9\u8C61\u5C5E\u6027\u6DF1\u5EA6\u5408\u5E76\uFF0C\u53EF\u4EE5\u653E\u5FC3\u5D4C\u5957\u914D\u7F6E</span>
<span class="token comment">// \u9700\u8981\u5728Vue.use(mView)\u4E4B\u540E\u6267\u884C</span>
uni<span class="token punctuation">.</span>$m<span class="token punctuation">.</span><span class="token function">setConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token comment">// \u4FEE\u6539$u.config\u5BF9\u8C61\u7684\u5C5E\u6027</span>
	config<span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token comment">// \u4FEE\u6539\u7248\u672C\u53F7 \u76F8\u5F53\u4E8E\u6267\u884C uni.$m.config.v = &#39;0.0.1&#39;</span>
		v<span class="token operator">:</span> <span class="token string">&#39;0.0.1&#39;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token comment">// \u4FEE\u6539$u.props\u5BF9\u8C61\u7684\u5C5E\u6027</span>
	props<span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token comment">// \u4FEE\u6539icon\u7EC4\u4EF6\u7684size\u53C2\u6570\u7684\u9ED8\u8BA4\u503C\uFF0C\u76F8\u5F53\u4E8E\u6267\u884C uni.$m.props.icon.size = 30</span>
		icon<span class="token operator">:</span> <span class="token punctuation">{</span>
			size<span class="token operator">:</span> <span class="token number">30</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// \u5176\u4ED6\u7EC4\u4EF6\u5C5E\u6027\u914D\u7F6E</span>
		<span class="token comment">// ......</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\uFF1A\u60A8\u4E5F\u53EF\u4EE5\u4E0D\u9700\u8981\u6267\u884Cuni.$m...\u65B9\u6CD5\uFF0C\u76F4\u63A5\u5728<code>@/uni_modules/mview-ui/config</code>\u6587\u4EF6\u4E0B\u4FEE\u6539\u76F8\u5173\u914D\u7F6E\uFF0C\u9996\u5148\u786E\u4FDD\u4E0D\u5F71\u54CDUI\u6846\u67B6\u3002</p>`,4);function b(h,f){const e=t("ExternalLinkIcon");return i(),o("div",null,[u,d,n("p",null,[r,n("a",m,[v,c(e)]),k]),_])}var w=a(l,[["render",b],["__file","setting.html.vue"]]);export{w as default};