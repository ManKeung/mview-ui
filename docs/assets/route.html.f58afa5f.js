import{_ as t,r as e,o as l,c as o,b as n,d as c,e as s,a as i}from"./app.357d9104.js";const u={},p=n("h1",{id:"\u8DEF\u7531\u8DF3\u8F6C",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u8DEF\u7531\u8DF3\u8F6C","aria-hidden":"true"},"#"),s(" \u8DEF\u7531\u8DF3\u8F6C")],-1),d=n("p",null,"route(Object)\u6B64\u4E3A\u4E00\u4E2A\u8DEF\u7531\u8DF3\u8F6C\u65B9\u6CD5\uFF0C\u5185\u90E8\u662F\u5BF9uni\u591A\u4E2A\u8DEF\u7531\u8DF3\u8F6Capi\u7684\u5C01\u88C5\uFF0C\u66F4\u65B9\u4FBF\u4F7F\u7528",-1),r=n("p",null,"Object\u53C2\u6570\u8BF4\u660E\uFF1A",-1),k=n("thead",null,[n("tr",null,[n("th",null,"\u53C2\u6570"),n("th",null,"\u7C7B\u578B"),n("th",null,"\u9ED8\u8BA4\u503C"),n("th",null,"\u662F\u5426\u5FC5\u586B"),n("th",null,"\u8BF4\u660E")])],-1),v=n("tr",null,[n("td",null,"type"),n("td",null,"String"),n("td",null,"navigateTo"),n("td",null,"false"),n("td",null,[n("code",null,"navigateTo"),s("\u6216"),n("code",null,"to"),s("\u5BF9\u5E94"),n("code",null,"uni.navigateTo"),s("\uFF0C"),n("code",null,"redirect"),s("\u6216"),n("code",null,"redirectTo"),s("\u5BF9\u5E94"),n("code",null,"uni.redirectTo"),s("\uFF0C"),n("code",null,"switchTab"),s("\u6216"),n("code",null,"tab"),s("\u5BF9\u5E94"),n("code",null,"uni.switchTab"),s("\uFF0C"),n("code",null,"reLaunch"),s("\u5BF9\u5E94"),n("code",null,"uni.reLaunch"),s("\uFF0C"),n("code",null,"navigateBack"),s("\u6216"),n("code",null,"back"),s("\u5BF9\u5E94"),n("code",null,"uni.navigateBack")])],-1),h=n("tr",null,[n("td",null,"url"),n("td",null,"String"),n("td",null,"-"),n("td",null,"false"),n("td",null,[n("code",null,"type"),s("\u4E3A"),n("code",null,"navigateTo"),s("\uFF0C"),n("code",null,"redirectTo"),s("\uFF0C"),n("code",null,"switchTab"),s("\uFF0C"),n("code",null,"reLaunch"),s("\u65F6\u4E3A\u5FC5\u586B")])],-1),m=n("tr",null,[n("td",null,"delta"),n("td",null,"Number"),n("td",null,"1"),n("td",null,"false"),n("td",null,[n("code",null,"type"),s("\u4E3A"),n("code",null,"navigateBack"),s("\u65F6\u7528\u5230\uFF0C\u8868\u793A\u8FD4\u56DE\u7684\u9875\u9762\u6570")])],-1),_=n("tr",null,[n("td",null,"params"),n("td",null,"Object"),n("td",null,"-"),n("td",null,"false"),n("td",null,"\u4F20\u9012\u7684\u5BF9\u8C61\u5F62\u5F0F\u7684\u53C2\u6570\uFF0C\u5982{name: 'lisa', age: 18}")],-1),b=n("td",null,"animationType",-1),g=n("td",null,"String",-1),f=n("td",null,"pop-in",-1),x=n("td",null,"false",-1),y=s("\u53EA\u5728APP\u751F\u6548\uFF0C\u8BE6\u89C1"),T={href:"https://uniapp.dcloud.io/api/router.html#animation",target:"_blank",rel:"noopener noreferrer"},B=s("\u7A97\u53E3\u52A8\u753B"),N=n("tr",null,[n("td",null,"animationDuration"),n("td",null,"Number"),n("td",null,"300"),n("td",null,"false"),n("td",null,"\u52A8\u753B\u6301\u7EED\u65F6\u95F4\uFF0C\u5355\u4F4Dms")],-1),$=n("tr",null,[n("td",null,"intercept"),n("td",null,"Boolean"),n("td",null,"false"),n("td",null,"false"),n("td",null,"\u662F\u5426\u9700\u8981\u62E6\u622A")],-1),w=i(`<h2 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a> \u57FA\u672C\u4F7F\u7528</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>uni<span class="token punctuation">.</span>$m<span class="token punctuation">.</span><span class="token function">route</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    url<span class="token operator">:</span> <span class="token string">&#39;pages/index/index&#39;</span><span class="token punctuation">,</span>
    params<span class="token operator">:</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&#39;test&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7B80\u5199" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5199" aria-hidden="true">#</a> \u7B80\u5199</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \u65E0\u53C2\u6570</span>
uni<span class="token punctuation">.</span>$m<span class="token punctuation">.</span><span class="token function">route</span><span class="token punctuation">(</span><span class="token string">&#39;/pages/index/index&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// \u5E26\u53C2\u6570</span>
uni<span class="token punctuation">.</span>$m<span class="token punctuation">.</span><span class="token function">route</span><span class="token punctuation">(</span><span class="token string">&#39;/pages/index/index&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;test&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u62E6\u622A" tabindex="-1"><a class="header-anchor" href="#\u62E6\u622A" aria-hidden="true">#</a> \u62E6\u622A</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>uni<span class="token punctuation">.</span><span class="token function-variable function">$routeIntercept</span> <span class="token operator">=</span> <span class="token punctuation">(</span>config <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> next<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>url <span class="token operator">===</span> <span class="token string">&#39;/pages/login/login&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">next</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">next</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

uni<span class="token punctuation">.</span>$m<span class="token punctuation">.</span><span class="token function">route</span><span class="token punctuation">(</span><span class="token string">&#39;/pages/index/index&#39;</span><span class="token punctuation">)</span>
uni<span class="token punctuation">.</span>$m<span class="token punctuation">.</span><span class="token function">route</span><span class="token punctuation">(</span><span class="token string">&#39;/pages/login/login&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function L(S,V){const a=e("ExternalLinkIcon");return l(),o("div",null,[p,d,r,n("table",null,[k,n("tbody",null,[v,h,m,_,n("tr",null,[b,g,f,x,n("td",null,[y,n("a",T,[B,c(a)])])]),N,$])]),w])}var E=t(u,[["render",L],["__file","route.html.vue"]]);export{E as default};
