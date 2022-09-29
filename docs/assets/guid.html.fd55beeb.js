import{_ as e,o as s,c as a,a as n}from"./app.357d9104.js";const t={},c=n(`<h1 id="\u5168\u5C40\u552F\u4E00\u6807\u8BC6\u7B26" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u552F\u4E00\u6807\u8BC6\u7B26" aria-hidden="true">#</a> \u5168\u5C40\u552F\u4E00\u6807\u8BC6\u7B26</h1><h2 id="guid-length-32-firstu-true-radix-62" tabindex="-1"><a class="header-anchor" href="#guid-length-32-firstu-true-radix-62" aria-hidden="true">#</a> guid(length = 32, firstU = true, radix = 62)</h2><p>\u8BE5\u51FD\u6570\u53EF\u4EE5\u751F\u4EA7\u4E00\u4E2A\u5168\u5C40\u552F\u4E00\u3001\u968F\u673A\u7684guid\uFF0C\u9ED8\u8BA4\u9996\u5B57\u6BCD\u4E3A<code>m</code>\uFF0C\u53EF\u4EE5\u7528\u4E8E\u5F53\u505A\u5143\u7D20\u7684id\u6216\u8005class\u540D\u7B49\u9700\u8981\u552F\u4E00\uFF0C\u968F\u673A\u5B57\u7B26\u4E32\u7684\u5730\u65B9\uFF0C\u56E0\u4E3Aid\u6216\u8005class\u4E0D\u80FD\u4EE5\u6570\u5B57\u5F00\u5934\u3002</p><ul><li><code>length &lt;Number | null&gt;</code> guid\u7684\u957F\u5EA6\uFF0C\u9ED8\u8BA4\u4E3A<code>32</code>\uFF0C\u5982\u679C\u53D6\u503C<code>null</code>\uFF0C\u5219\u6309<code>rfc4122</code>\u6807\u51C6\u751F\u6210\u5BF9\u5E94\u683C\u5F0F\u7684\u968F\u673A\u6570</li><li><code>firstU &lt;Boolean&gt;</code> \u9996\u5B57\u6BCD\u662F\u5426\u4E3A&quot;m&quot;\uFF0C\u5982\u679C\u9996\u5B57\u6BCD\u4E3A\u6570\u5B57\u60C5\u51B5\u4E0B\uFF0C\u4E0D\u80FD\u7528\u4F5C\u5143\u7D20\u7684<code>id</code>\u6216\u8005<code>class</code>\uFF0C\u9ED8\u8BA4\u4E3A<code>true</code></li><li><code>radix &lt;Number&gt;</code> \u751F\u6210\u7684\u57FA\u6570\uFF0C\u9ED8\u8BA4\u4E3A<code>62</code>\uFF0C\u7528\u4E8E\u751F\u6210\u968F\u673A\u6570\u5B57\u7B26\u4E32\u4E3A&quot;0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz&quot;\uFF0C \u5982\u679C\u53D62\uFF0C\u90A3\u4E48\u8FD4\u56DE\u7684\u7ED3\u679C\u5C31\u662F\u524D\u4E24\u4F4D0\u548C1(\u53EF\u4EE5\u7406\u89E3\u4E3A\u4E8C\u8FDB\u5236)\u7684\u968F\u673A\u7ED3\u679C\uFF0C\u5982\u679C\u4E3A7\uFF0C\u8FD4\u56DE\u7684\u5B57\u7B26\u4E32\u5C31\u662F0-7(\u7406\u89E3\u4E3A\u516B\u8FDB\u5236)\u4E4B\u95F4\uFF0C 10\u4E3A\u5341\u8FDB\u5236\uFF0C\u4EE5\u6B64\u7C7B\u63A8\u3002</li></ul><p><strong>\u8BF4\u660E\uFF1A<strong>\u8FD9\u4E2A\u65B9\u6CD5\u4E09\u4E2A\u53C2\u6570\u90FD\u6709\u9ED8\u8BA4\u7684\u503C\uFF0C\u6240\u4EE5\u60A8\u8C03\u7528\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u65E0\u9700\u4F20\u9012\u4EFB\u4F55\u53C2\u6570\u4E5F\u662F\u53EF\u4EE5\u7684\uFF0C\u5E76\u4E14</strong>\u5EFA\u8BAE\u60A8\u8FD9\u6837\u505A</strong>\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> cls <span class="token operator">=</span> uni<span class="token punctuation">.</span>$m<span class="token punctuation">.</span><span class="token function">guid</span><span class="token punctuation">(</span><span class="token number">22</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,6),o=[c];function d(i,r){return s(),a("div",null,o)}var u=e(t,[["render",d],["__file","guid.html.vue"]]);export{u as default};
