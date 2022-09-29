import{_ as t,o as a,c as n,a as s}from"./app.4d75cc36.js";const e={},l=s(`<h1 id="modal-\u6A21\u6001\u6846" tabindex="-1"><a class="header-anchor" href="#modal-\u6A21\u6001\u6846" aria-hidden="true">#</a> Modal \u6A21\u6001\u6846</h1><p>\u5F39\u51FA\u6A21\u6001\u6846\uFF0C\u5E38\u7528\u4E8E\u6D88\u606F\u63D0\u793A\u3001\u6D88\u606F\u786E\u8BA4\u3001\u5728\u5F53\u524D\u9875\u9762\u5185\u5B8C\u6210\u7279\u5B9A\u7684\u4EA4\u4E92\u64CD\u4F5C\u3002</p><h2 id="\u5E73\u53F0\u5DEE\u5F02\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u5E73\u53F0\u5DEE\u5F02\u8BF4\u660E" aria-hidden="true">#</a> \u5E73\u53F0\u5DEE\u5F02\u8BF4\u660E</h2><table><thead><tr><th style="text-align:center;">App(vue)</th><th style="text-align:center;">App(nvue)</th><th style="text-align:center;">H5</th><th style="text-align:center;">\u5C0F\u7A0B\u5E8F</th></tr></thead><tbody><tr><td style="text-align:center;">\u221A</td><td style="text-align:center;">\xD7</td><td style="text-align:center;">\u221A</td><td style="text-align:center;">\u221A</td></tr></tbody></table><h2 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a> \u57FA\u672C\u4F7F\u7528</h2><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u6A21\u6001\u6846\u53EA\u6709\u4E00\u4E2A<code>\u786E\u8BA4</code>\u6309\u94AE\uFF1A</p><ul><li>\u8BF7\u81F3\u5C11\u8981\u914D\u7F6E\u5F39\u6846\u7684\u5185\u5BB9\u53C2\u6570<code>content</code>\u3002</li><li>\u901A\u8FC7<code>show</code>\u7ED1\u5B9A\u4E00\u4E2A\u5E03\u5C14\u53D8\u91CF\u6765\u63A7\u5236\u6A21\u6001\u6846\u7684\u663E\u793A\u4E0E\u5426\u3002</li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-common</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u6A21\u6001\u6846<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-cell-group</span> <span class="token attr-name">border</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-cell</span>
                <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u57FA\u672C\u4F7F\u7528<span class="token punctuation">&quot;</span></span>
                <span class="token attr-name">is-link</span>
                <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleClick<span class="token punctuation">&quot;</span></span>
            <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>m-cell-group</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-modal</span>
            <span class="token attr-name">:show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>show<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u6807\u9898<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u611F\u8C22\u4F7F\u7528mView\u4F5C\u4E3A\u4F60\u9879\u76EEUI\u6846\u67B6<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">@confirm</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>show = false<span class="token punctuation">&quot;</span></span>
        <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">const</span> show <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    show<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4F20\u5165\u81EA\u5B9A\u4E49\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#\u4F20\u5165\u81EA\u5B9A\u4E49\u5185\u5BB9" aria-hidden="true">#</a> \u4F20\u5165\u81EA\u5B9A\u4E49\u5185\u5BB9</h2><p>\u6709\u65F6\u5019\u6211\u4EEC\u9700\u8981\u7ED9\u6A21\u6001\u6846\u7684\u5185\u5BB9\uFF0C\u4E0D\u4E00\u5B9A\u662F\u7EAF\u6587\u672C\u7684\u5B57\u7B26\u4E32\uFF0C\u53EF\u80FD\u4F1A\u9700\u8981\u6362\u884C\uFF0C\u5D4C\u5165\u5176\u4ED6\u5143\u7D20\u7B49\uFF0C\u8FD9\u65F6\u5019\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528<code>slot</code>\u529F\u80FD\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-modal</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>
        \u6211\u662F\u81EA\u5B9A\u4E49\u5185\u5BB9
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>    
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>m-modal</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u70B9\u51FB\u906E\u7F69\u5173\u95ED" tabindex="-1"><a class="header-anchor" href="#\u70B9\u51FB\u906E\u7F69\u5173\u95ED" aria-hidden="true">#</a> \u70B9\u51FB\u906E\u7F69\u5173\u95ED</h2><p>\u6709\u65F6\u5019\u6211\u4EEC\u4E0D\u663E\u793A&quot;\u5173\u95ED&quot;\u6309\u94AE\u7684\u65F6\u5019\uFF0C\u9700\u8981\u70B9\u51FB\u906E\u7F69\u4E5F\u53EF\u4EE5\u5173\u95EDModal\uFF0C\u8FD9\u65F6\u901A\u8FC7\u914D\u7F6E<code>closeOnClickOverlay</code>\u4E3A<code>true</code>\u5373\u53EF\uFF08\u6CE8\u610F\uFF1A\u5173\u95ED\u4E8B\u4EF6\u9700\u8981\u81EA\u884C\u5904\u7406\uFF0C\u53EA\u4F1A\u5728\u5F00\u542F<code>closeOnClickOverlay</code>\u540E\u70B9\u51FB\u906E\u7F69\u5C42\u6267\u884C<code>close</code>\u56DE\u8C03\uFF09</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-modal</span> <span class="token attr-name">close-on-click-overlay</span>  <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u63A7\u5236\u6A21\u6001\u6846\u5BBD\u5EA6" tabindex="-1"><a class="header-anchor" href="#\u63A7\u5236\u6A21\u6001\u6846\u5BBD\u5EA6" aria-hidden="true">#</a> \u63A7\u5236\u6A21\u6001\u6846\u5BBD\u5EA6</h2><p>\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E<code>width</code>\u53C2\u6570\u63A7\u5236\u6A21\u6001\u6846\u7684\u5BBD\u5EA6\uFF0C\u4E0D\u652F\u6301\u767E\u5206\u6BD4\uFF0C\u53EF\u4EE5\u6570\u503C\uFF0C<code>px</code>\uFF0C<code>rpx</code>\u5355\u4F4D\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-modal</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>300<span class="token punctuation">&quot;</span></span>  <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u7F29\u653E\u6548\u679C" tabindex="-1"><a class="header-anchor" href="#\u7F29\u653E\u6548\u679C" aria-hidden="true">#</a> \u7F29\u653E\u6548\u679C</h2><p>\u5F00\u542F\u7F29\u653E\u6548\u679C\uFF0C\u5728\u6253\u5F00\u548C\u6536\u8D77\u6A21\u6001\u6846\u7684\u65F6\u5019\uFF0C\u4F1A\u5E26\u6709\u7F29\u653E\u6548\u679C\uFF0C\u5177\u4F53\u6548\u679C\u8BF7\u89C1\u793A\u4F8B\uFF0C\u6B64\u6548\u679C\u9ED8\u8BA4\u5F00\u542F\uFF0C\u901A\u8FC7<code>zoom</code>\u53C2\u6570\u914D\u7F6E\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-modal</span> <span class="token attr-name">:zoom</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span>  <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><h3 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u53EF\u9009\u503C</th></tr></thead><tbody><tr><td>show</td><td>\u662F\u5426\u663E\u793A\u6A21\u6001\u6846\uFF0C\u8BF7\u8D4B\u503C\u7ED9<code>show</code></td><td>Boolean</td><td>false</td><td>true</td></tr><tr><td>title</td><td>\u6807\u9898\u5185\u5BB9</td><td>String</td><td>-</td><td>-</td></tr><tr><td>content</td><td>\u6A21\u6001\u6846\u5185\u5BB9\uFF0C\u5982\u4F20\u5165<code>slot</code>\u5185\u5BB9\uFF0C\u5219\u6B64\u53C2\u6570\u65E0\u6548</td><td>String</td><td>-</td><td>-</td></tr><tr><td>confirmText</td><td>\u786E\u8BA4\u6309\u94AE\u7684\u6587\u5B57</td><td>String</td><td>\u786E\u8BA4</td><td>-</td></tr><tr><td>cancelText</td><td>\u53D6\u6D88\u6309\u94AE\u7684\u6587\u5B57</td><td>String</td><td>\u53D6\u6D88</td><td>-</td></tr><tr><td>showConfirmButton</td><td>\u662F\u5426\u663E\u793A\u786E\u8BA4\u6309\u94AE</td><td>Boolean</td><td>true</td><td>false</td></tr><tr><td>showCancelButton</td><td>\u662F\u5426\u663E\u793A\u53D6\u6D88\u6309\u94AE</td><td>Boolean</td><td>false</td><td>true</td></tr><tr><td>confirmColor</td><td>\u786E\u8BA4\u6309\u94AE\u7684\u989C\u8272</td><td>String</td><td>config.color[&#39;m-primary&#39;]</td><td>-</td></tr><tr><td>cancelColor</td><td>\u53D6\u6D88\u6309\u94AE\u7684\u989C\u8272</td><td>String</td><td>color[&#39;m-content-color&#39;]</td><td>-</td></tr><tr><td>buttonReverse</td><td>\u5BF9\u8C03\u786E\u8BA4\u548C\u53D6\u6D88\u7684\u4F4D\u7F6E</td><td>Boolean</td><td>false</td><td>true</td></tr><tr><td>zoom</td><td>\u662F\u5426\u5F00\u542F\u7F29\u653E\u6A21\u5F0F</td><td>Boolean</td><td>true</td><td>false</td></tr><tr><td>closeOnClickOverlay</td><td>\u662F\u5426\u5141\u8BB8\u70B9\u51FB\u906E\u7F69\u5173\u95EDModal\uFF08\u6CE8\u610F\uFF1A\u5173\u95ED\u4E8B\u4EF6\u9700\u8981\u81EA\u884C\u5904\u7406\uFF0C\u53EA\u4F1A\u5728\u5F00\u542FcloseOnClickOverlay\u540E\u70B9\u51FB\u906E\u7F69\u5C42\u6267\u884Cclose\u56DE\u8C03\uFF09</td><td>Boolean</td><td>false</td><td>true</td></tr><tr><td>negativeTop</td><td>\u5F80\u4E0A\u504F\u79FB\u7684\u503C\uFF0C\u7ED9\u4E00\u4E2A\u8D1F\u7684margin-top\uFF0C\u5F80\u4E0A\u504F\u79FB\uFF0C\u907F\u514D\u548C\u952E\u76D8\u91CD\u5408\u7684\u60C5\u51B5\uFF0C\u5355\u4F4D\u4EFB\u610F\uFF0C\u6570\u503C\u5219\u9ED8\u8BA4\u4E3Apx\u5355\u4F4D</td><td>Number | String</td><td>0</td><td>-</td></tr><tr><td>width</td><td>modal\u5BBD\u5EA6\uFF0C\u4E0D\u652F\u6301\u767E\u5206\u6BD4\uFF0C\u53EF\u4EE5\u6570\u503C\uFF0Cpx\uFF0Crpx\u5355\u4F4D</td><td>Number | String</td><td>650rpx</td><td>-</td></tr></tbody></table><h3 id="slot" tabindex="-1"><a class="header-anchor" href="#slot" aria-hidden="true">#</a> Slot</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>\u4F20\u5165\u81EA\u5B9A\u4E49\u5185\u5BB9</td></tr><tr><td>confirmButton</td><td>\u4F20\u5165\u81EA\u5B9A\u4E49\u6309\u94AE</td></tr></tbody></table><h3 id="event" tabindex="-1"><a class="header-anchor" href="#event" aria-hidden="true">#</a> Event</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>confirm</td><td>\u70B9\u51FB\u786E\u8BA4\u6309\u94AE\u65F6\u89E6\u53D1</td><td>-</td></tr><tr><td>cancel</td><td>\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\u65F6\u89E6\u53D1</td><td>-</td></tr><tr><td>close</td><td>\u70B9\u51FB\u906E\u7F69\u5173\u95ED\u51FA\u53D1\uFF0CcloseOnClickOverlay\u4E3Atrue\u6709\u6548</td><td>-</td></tr></tbody></table>`,27),o=[l];function p(d,c){return a(),n("div",null,o)}var u=t(e,[["render",p],["__file","modal.html.vue"]]);export{u as default};
