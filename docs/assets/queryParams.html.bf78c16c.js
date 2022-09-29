import{_ as a,o as n,c as s,a as t}from"./app.357d9104.js";const e={},p=t(`<h1 id="queryparams-\u5BF9\u8C61\u8F6Curl\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#queryparams-\u5BF9\u8C61\u8F6Curl\u53C2\u6570" aria-hidden="true">#</a> queryParams \u5BF9\u8C61\u8F6CURL\u53C2\u6570</h1><p>\u8BE5\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u5C06\u4E00\u4E2A\u5BF9\u8C61\u5F62\u5F0F\u53C2\u6570\u8F6C\u6362\u6210<code>get</code>\u4F20\u53C2\u6240\u9700\u53C2\u6570\u5F62\u5F0F\uFF0C\u5982\u628A<code>{name: &#39;lisa&#39;, age: 20}</code>\u8F6C\u6362\u6210<code>?name=lisa&amp;age=20</code></p><p>\u7528\u9014\uFF1A\u53EF\u4EE5\u7528\u4E8E<code>uni.navigateTo</code>\u63A5\u53E3\u4F20\u53C2\u7B49\u573A\u666F\uFF0C\u65E0\u9700\u81EA\u5DF1\u624B\u52A8\u62FC\u63A5URL\u53C2\u6570</p><h2 id="queryparams-data-isprefix-true-arrayformat-brackets" tabindex="-1"><a class="header-anchor" href="#queryparams-data-isprefix-true-arrayformat-brackets" aria-hidden="true">#</a> queryParams(data, isPrefix = true, arrayFormat = &#39;brackets&#39;)</h2><ul><li><code>data &lt;Object&gt;</code> \u5BF9\u8C61\u503C\uFF0C\u5982<code>{name: &#39;lisa&#39;, age: 20}</code></li><li><code>isPrefix &lt;Boolean&gt;</code> \u662F\u5426\u5728\u8FD4\u56DE\u7684\u5B57\u7B26\u4E32\u524D\u52A0\u4E0A&quot;?&quot;\uFF0C\u9ED8\u8BA4\u4E3A<code>true</code></li><li><code>arrayFormat &lt;Boolean&gt;</code> \u5C5E\u6027\u4E3A\u6570\u7EC4\u7684\u60C5\u51B5\u4E0B\u7684\u5904\u7406\u529E\u6CD5\uFF0C\u9ED8\u8BA4\u4E3A<code>brackets</code>\uFF0C\u89C1\u540E\u9762\u8BF4\u660E</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>uni<span class="token punctuation">.</span>$m<span class="token punctuation">.</span><span class="token function">queryParams</span><span class="token punctuation">(</span><span class="token punctuation">{</span>name<span class="token operator">:</span> <span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="arrayformat\u53C2\u6570\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#arrayformat\u53C2\u6570\u8BF4\u660E" aria-hidden="true">#</a> arrayFormat\u53C2\u6570\u8BF4\u660E</h3><p>\u5982\u679C\u60A8\u4F20\u5165\u7684<code>data</code>\u5BF9\u8C61\u5185\u90E8\u67D0\u4E9B\u5C5E\u6027\u503C\u4E3A\u6570\u7EC4\u7684\u60C5\u51B5\u4E0B\uFF0C\u60A8\u53EF\u80FD\u9700\u8981\u7559\u610F\u8FD9\u4E2A\u53C2\u6570\u7684\u914D\u7F6E\uFF1A \u8BE5\u53C2\u6570\u53EF\u9009\u503C\u67094\u4E2A\uFF1A<code>indices</code>\uFF0C<code>brackets</code>\uFF0C<code>repeat</code>\uFF0C<code>comma</code>\uFF0C\u5177\u4F53\u6548\u679C\u8BF7\u89C1\u4E0B\u65B9\u7684\u6F14\u793A\u8BF4\u660E</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span>
    list<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;d&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment">// ?name=test&amp;list[0]=a&amp;list[1]=b&amp;list[2]=c&amp;list[3]=d</span>
uni<span class="token punctuation">.</span>$m<span class="token punctuation">.</span><span class="token function">queryParams</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token string">&#39;indices&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// ?name=test&amp;list[]=a&amp;list[]=b&amp;list[]=c&amp;list[]=d</span>
uni<span class="token punctuation">.</span>$m<span class="token punctuation">.</span><span class="token function">queryParams</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token string">&#39;brackets&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// ?name=test&amp;list=a&amp;list=b&amp;list=c&amp;list=d</span>
uni<span class="token punctuation">.</span>$m<span class="token punctuation">.</span><span class="token function">queryParams</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token string">&#39;repeat&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// ?name=test&amp;list=a,b,c,d</span>
uni<span class="token punctuation">.</span>$m<span class="token punctuation">.</span><span class="token function">queryParams</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token string">&#39;comma&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),c=[p];function o(i,l){return n(),s("div",null,c)}var u=a(e,[["render",o],["__file","queryParams.html.vue"]]);export{u as default};
