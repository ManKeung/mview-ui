import{_ as a,r as s,o as d,c as o,b as t,d as u,w as r,a as l,e as n}from"./app.357d9104.js";const i={},c=l(`<h1 id="navbar-\u81EA\u5B9A\u4E49\u5BFC\u822A\u680F" tabindex="-1"><a class="header-anchor" href="#navbar-\u81EA\u5B9A\u4E49\u5BFC\u822A\u680F" aria-hidden="true">#</a> Navbar \u81EA\u5B9A\u4E49\u5BFC\u822A\u680F</h1><p>\u6B64\u7EC4\u4EF6\u4E00\u822C\u7528\u4E8E\u5728\u7279\u6B8A\u60C5\u51B5\u4E0B\uFF0C\u9700\u8981\u81EA\u5B9A\u4E49\u5BFC\u822A\u680F\u7684\u65F6\u5019\u7528\u5230\uFF0C\u4E00\u822C\u5EFA\u8BAE\u4F7F\u7528uni-app\u5E26\u7684\u5BFC\u822A\u680F\u3002</p><h2 id="\u5E73\u53F0\u5DEE\u5F02\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u5E73\u53F0\u5DEE\u5F02\u8BF4\u660E" aria-hidden="true">#</a> \u5E73\u53F0\u5DEE\u5F02\u8BF4\u660E</h2><table><thead><tr><th style="text-align:center;">App(vue)</th><th style="text-align:center;">App(nvue)</th><th style="text-align:center;">H5</th><th style="text-align:center;">\u5C0F\u7A0B\u5E8F</th></tr></thead><tbody><tr><td style="text-align:center;">\u221A</td><td style="text-align:center;">\xD7</td><td style="text-align:center;">\u221A</td><td style="text-align:center;">\u221A</td></tr></tbody></table><h2 id="\u6CE8\u610F\u4E8B\u9879" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a> \u6CE8\u610F\u4E8B\u9879</h2><p>\u65E2\u7136\u662F\u8981\u81EA\u5B9A\u4E49\u5BFC\u822A\u680F\uFF0C\u90A3\u4E48\u9996\u5148\u5C31\u8981\u53D6\u6D88\u7CFB\u7EDF\u81EA\u5E26\u7684\u5BFC\u822A\u680F\uFF0C\u9700\u8981\u5728uni-app\u76EE\u7684\u6839\u76EE\u5F55\u7684&quot;pages.json&quot;\u4E2D\u8BBE\u7F6E\uFF0C\u540C\u65F6\u5728\u6B64\u8BBE\u7F6E\u72B6\u6001\u680F\u5B57\u4F53\u7684\u989C\u8272(H5\u65E0\u6548)\uFF0C \u81EA\u5B9A\u4E49\u5BFC\u822A\u680F\u540E\uFF0C\u5982\u679C\u60F3\u901A\u8FC7&quot;uni.setNavigationBarColor&quot;\u52A8\u6001\u8BBE\u7F6E\u5BFC\u822A\u680F\u989C\u8272\u76F8\u5173\u53C2\u6570\uFF0C\u662F\u53EF\u80FD\u4F1A\u51FA\u95EE\u9898\u7684\uFF0C\u8BF7\u52FF\u4F7F\u7528\u6B64\u65B9\u5F0F\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">// pages.json</span>

<span class="token property">&quot;pages&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
	<span class="token comment">// navbar-\u81EA\u5B9A\u4E49\u5BFC\u822A\u680F</span>
	<span class="token punctuation">{</span>
		<span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/pages/navbar/navbar&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;style&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;navigationStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;custom&quot;</span> <span class="token punctuation">,</span><span class="token comment">// \u9690\u85CF\u7CFB\u7EDF\u5BFC\u822A\u680F</span>
			<span class="token property">&quot;navigationBarTextStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;white&quot;</span> <span class="token comment">// \u72B6\u6001\u680F\u5B57\u4F53\u4E3A\u767D\u8272\uFF0C\u53EA\u80FD\u4E3A white-\u767D\u8272\uFF0Cblack-\u9ED1\u8272 \u4E8C\u9009\u4E00</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a> \u57FA\u672C\u4F7F\u7528</h2><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u8BE5\u7EC4\u4EF6\u53EA\u6709\u5411\u5DE6\u7684\u7BAD\u5934\uFF0C<strong>\u70B9\u51FB</strong>\u53EF\u4EE5\u8FD4\u56DE\u4E0A\u4E00\u9875\uFF0C\u5982\u679C\u60A8\u60F3\u5C06\u81EA\u5B9A\u4E49\u5BFC\u822A\u680F\u7528\u5728tabbar(\u4E0D\u5B58\u5728\u8981\u8FD4\u56DE\u7684\u903B\u8F91)\u9875\u9762\uFF0C \u8FD9\u6837\u4F1A\u9690\u85CF\u5DE6\u8FB9\u7684\u8FD4\u56DE\u56FE\u6807\u533A\u57DF\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-navbar</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u4E2A\u4EBA\u4E2D\u5FC3<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u5BFC\u822A\u680F\u9AD8\u5EA6" tabindex="-1"><a class="header-anchor" href="#\u5BFC\u822A\u680F\u9AD8\u5EA6" aria-hidden="true">#</a> \u5BFC\u822A\u680F\u9AD8\u5EA6</h2><p>\u53EF\u4EE5\u901A\u8FC7<code>height</code>(\u5355\u4F4Dpx\uFF0C\u9ED8\u8BA444\uFF0C\u548Cuni-app\u7EDF\u5BFC\u822A\u680F\u9AD8\u5EA6\u4E00\u81F4)\u914D\u7F6E\u5BFC\u822A\u680F\u7684\u9AD8\u5EA6\uFF0C\u6B64\u9AD8\u5EA6\u4E3A\u5BFC\u822A\u680F\u5185\u5BB9\u7684\u9AD8\u5EA6\uFF0C\u4E0D\u542B\u72B6\u6001\u680F\u7684\u9AD8\u5EA6\uFF0C\u7EC4\u4EF6\u5185\u90E8\u4F1A\u81EA\u52A8 \u52A0\u4E0A\u72B6\u6001\u680F\u7684\u9AD8\u5EA6\uFF0C\u5E76\u586B\u5145\u72B6\u6001\u680F\u7684\u5360\u4F4D\u533A\u57DF\u3002</p><p>\u6CE8\u610F\u4E0A\u65B9\u8BF4\u7684uni-app\u65B9\u7684\u9AD8\u5EA6\uFF0C\u8FD9\u91CC\u6307\u7684\u662FH5\uFF0C\u548CAPP\u3002\u81F3\u4E8E\u5404\u5BB6\u5C0F\u7A0B\u5E8F\uFF0C\u7531\u4E8E\u53D7\u5BFC\u822A\u680F\u53F3\u4FA7\u80F6\u56CA\u7684\u5F71\u54CD\uFF0C\u76EE\u524D\u7EC4\u4EF6\u5185\u90E8\u7ED9\u5B89\u5353\u8BBE\u5B9A\u7684\u5BFC\u822A\u680F\u9AD8\u5EA6\u4E3A<code>48px</code>\uFF0CiOS\u8BBE\u5B9A\u7684\u5BFC\u822A\u680F\u9AD8\u5EA6\u4E3A<code>44</code>\uFF0C\u8FD9\u662F\u7ED3\u5408\u4E86\u5927\u91CF\u7684 \u5B9E\u8DF5\u7684\u51FA\u6765\u7684\u7ED3\u679C\uFF0C\u5177\u5907\u5B8C\u597D\u7684\u517C\u5BB9\u6027\u3002</p><h2 id="\u81EA\u5B9A\u4E49\u5BFC\u822A\u680F\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u5BFC\u822A\u680F\u5185\u5BB9" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u5BFC\u822A\u680F\u5185\u5BB9</h2><p>\u901A\u8FC7\u81EA\u5B9A\u4E49<code>slot</code>\u4F20\u5165\u7684\u5185\u5BB9</p><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><h3 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h3>`,17),p=t("thead",null,[t("tr",null,[t("th",null,"\u53C2\u6570"),t("th",null,"\u8BF4\u660E"),t("th",null,"\u7C7B\u578B"),t("th",null,"\u9ED8\u8BA4\u503C"),t("th",null,"\u53EF\u9009\u503C")])],-1),h=t("tr",null,[t("td",null,"safeAreaInsetTop"),t("td",null,"\u662F\u5426\u5F00\u542F\u9876\u90E8\u5B89\u5168\u533A\u9002\u914D"),t("td",null,"Boolean"),t("td",null,"true"),t("td",null,"false")],-1),_=t("tr",null,[t("td",null,"placeholder"),t("td",null,"\u56FA\u5B9A\u5728\u9876\u90E8\u65F6\uFF0C\u662F\u5426\u751F\u6210\u4E00\u4E2A\u7B49\u9AD8\u5143\u7D20\uFF0C\u4EE5\u9632\u6B62\u584C\u9677"),t("td",null,"Boolean"),t("td",null,"false"),t("td",null,"true")],-1),b=t("tr",null,[t("td",null,"fixed"),t("td",null,"\u5BFC\u822A\u680F\u662F\u5426\u56FA\u5B9A\u5728\u9876\u90E8"),t("td",null,"Boolean"),t("td",null,"true"),t("td",null,"false")],-1),v=t("tr",null,[t("td",null,"border"),t("td",null,"\u5BFC\u822A\u680F\u5E95\u90E8\u662F\u5426\u663E\u793A\u4E0B\u8FB9\u6846"),t("td",null,"Boolean"),t("td",null,"true"),t("td",null,"false")],-1),m=t("tr",null,[t("td",null,"bgColor"),t("td",null,"\u5BFC\u822A\u680F\u80CC\u666F\u8BBE\u7F6E"),t("td",null,"String"),t("td",null,"#ffffff"),t("td",null,"-")],-1),g=t("tr",null,[t("td",null,"leftIcon"),t("td",null,"\u5DE6\u8FB9\u8FD4\u56DE\u56FE\u6807\u7684\u540D\u79F0\uFF0C\u53EA\u80FD\u4E3AmView\u81EA\u5E26\u7684\u56FE\u6807"),t("td",null,"String"),t("td",null,"left"),t("td",null,"-")],-1),k=t("tr",null,[t("td",null,"leftIconSize"),t("td",null,"\u5DE6\u4FA7\u8FD4\u56DE\u56FE\u6807\u7684\u5927\u5C0F"),t("td",null,"Number | String"),t("td",null,"20"),t("td",null,"-")],-1),f=t("tr",null,[t("td",null,"leftIconColor"),t("td",null,"\u5DE6\u4FA7\u8FD4\u56DE\u56FE\u6807\u7684\u989C\u8272"),t("td",null,"String"),t("td",null,"color['m-main-color']"),t("td",null,"-")],-1),x=t("tr",null,[t("td",null,"leftText"),t("td",null,"\u5DE6\u8FB9\u7684\u63D0\u793A\u6587\u5B57"),t("td",null,"String"),t("td",null,"-"),t("td",null,"-")],-1),y=t("tr",null,[t("td",null,"rightIcon"),t("td",null,"\u5DE6\u8FB9\u8FD4\u56DE\u56FE\u6807\u7684\u540D\u79F0\uFF0C\u53EA\u80FD\u4E3AmView\u81EA\u5E26\u7684\u56FE\u6807"),t("td",null,"String"),t("td",null,"-"),t("td",null,"-")],-1),q=t("tr",null,[t("td",null,"rightText"),t("td",null,"\u53F3\u8FB9\u7684\u63D0\u793A\u6587\u5B57"),t("td",null,"String"),t("td",null,"-"),t("td",null,"-")],-1),S=t("tr",null,[t("td",null,"title"),t("td",null,"\u5BFC\u822A\u680F\u6807\u9898\uFF0C\u5982\u8BBE\u7F6E\u4E3A\u7A7A\u5B57\u7B26\uFF0C\u5C06\u4F1A\u9690\u85CF\u6807\u9898\u5360\u4F4D\u533A\u57DF"),t("td",null,"String"),t("td",null,"-"),t("td",null,"-")],-1),B=t("tr",null,[t("td",null,"titleStyle"),t("td",null,"\u6807\u9898\u7684\u6837\u5F0F\uFF0C\u5BF9\u8C61\u6216\u5B57\u7B26\u4E32\u5F62\u5F0F"),t("td",null,"Object | String"),t("td",null,"-"),t("td",null,"-")],-1),N=t("tr",null,[t("td",null,"titleWidth"),t("td",null,[n("\u5BFC\u822A\u680F\u6807\u9898\u7684\u6700\u5927\u5BBD\u5EA6\uFF0C\u5185\u5BB9\u8D85\u51FA\u4F1A\u4EE5\u7701\u7565\u53F7\u9690\u85CF\uFF0C\u5355\u4F4D"),t("code",null,"px")]),t("td",null,"Number | String"),t("td",null,"400rpx"),t("td",null,"-")],-1),C=t("td",null,"height",-1),j=n("\u5BFC\u822A\u680F\u9AD8\u5EA6(\u4E0D\u5305\u62EC\u72B6\u6001\u680F\u9AD8\u5EA6\u5728\u5185\uFF0C\u5185\u90E8\u81EA\u52A8\u52A0\u4E0A)\uFF0C\u5355\u4F4D"),w=t("code",null,"px",-1),I=n("\uFF0C\u6CE8\u610F\u5C0F\u7A0B\u5E8F\u8BBE\u7F6E\u9AD8\u5EA6\u65E0\u6548\uFF0C\u7531\u4E8E\u80F6\u56CA\u539F\u56E0\uFF0C\u4F1A\u81EA\u52A8\u8BA1\u7B97\u9AD8\u5EA6\u5177\u4F53\u67E5\u770B"),V=n("uni.$m.sys\u65B9\u6CD5"),A=n("\u3002"),T=t("td",null,"Number | String",-1),P=t("td",null,"44px",-1),H=t("td",null,"-",-1),E=t("tr",null,[t("td",null,"autoBack"),t("td",null,"\u70B9\u51FB\u5DE6\u4FA7\u533A\u57DF(\u8FD4\u56DE\u56FE\u6807)\uFF0C\u662F\u5426\u81EA\u52A8\u8FD4\u56DE\u4E0A\u4E00\u9875"),t("td",null,"Boolean"),t("td",null,"false"),t("td",null,"true")],-1),L=l('<h3 id="slot" tabindex="-1"><a class="header-anchor" href="#slot" aria-hidden="true">#</a> Slot</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>left</td><td>\u81EA\u5B9A\u4E49\u5DE6\u4FA7\u90E8\u5206\u5185\u5BB9</td></tr><tr><td>right</td><td>\u81EA\u5B9A\u4E49\u53F3\u4FA7\u90E8\u5206\u5185\u5BB9</td></tr><tr><td>center</td><td>\u81EA\u5B9A\u4E49\u4E2D\u90E8\u5185\u5BB9</td></tr></tbody></table><h3 id="event" tabindex="-1"><a class="header-anchor" href="#event" aria-hidden="true">#</a> Event</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>leftClick</td><td>\u70B9\u51FB\u5DE6\u4FA7\u533A\u57DF</td><td>-</td></tr><tr><td>rightClick</td><td>\u70B9\u51FB\u53F3\u4FA7\u533A\u57DF</td><td>-</td></tr></tbody></table>',4);function O(R,z){const e=s("RouterLink");return d(),o("div",null,[c,t("table",null,[p,t("tbody",null,[h,_,b,v,m,g,k,f,x,y,q,S,B,N,t("tr",null,[C,t("td",null,[j,w,I,u(e,{to:"/api/sys.html"},{default:r(()=>[V]),_:1}),A]),T,P,H]),E])]),L])}var $=a(i,[["render",O],["__file","navbar.html.vue"]]);export{$ as default};
