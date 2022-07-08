import{_ as t,o as a,c as n,a as s}from"./app.f359fa7a.js";const e={},d=s(`<h1 id="transition-\u52A8\u753B" tabindex="-1"><a class="header-anchor" href="#transition-\u52A8\u753B" aria-hidden="true">#</a> Transition \u52A8\u753B</h1><h2 id="\u5E73\u53F0\u5DEE\u5F02\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u5E73\u53F0\u5DEE\u5F02\u8BF4\u660E" aria-hidden="true">#</a> \u5E73\u53F0\u5DEE\u5F02\u8BF4\u660E</h2><table><thead><tr><th style="text-align:center;">App(vue)</th><th style="text-align:center;">App(nvue)</th><th style="text-align:center;">H5</th><th style="text-align:center;">\u5C0F\u7A0B\u5E8F</th></tr></thead><tbody><tr><td style="text-align:center;">\u221A</td><td style="text-align:center;">\xD7</td><td style="text-align:center;">\u221A</td><td style="text-align:center;">\u221A</td></tr></tbody></table><h2 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a> \u57FA\u672C\u4F7F\u7528</h2><p>\u901A\u8FC7<code>slot</code>\u4F20\u5165\u5185\u5BB9\uFF0C\u9ED8\u8BA4\u4F7F\u7528\u7684\u662F<code>fade</code>\u6548\u679C</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-transition</span> <span class="token attr-name">:show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>show<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mask<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>m-transition</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u52A8\u753B\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u52A8\u753B\u6A21\u5F0F" aria-hidden="true">#</a> \u52A8\u753B\u6A21\u5F0F</h2><ul><li>\u901A\u8FC7mode\u4F20\u5165\u6548\u679C\u6A21\u5F0F\uFF0C\u76EE\u524D\u652F\u6301\uFF1A <ul><li><code>fade</code> \u6DE1\u5165</li><li><code>fade-up</code> \u4E0A\u6ED1\u6DE1\u5165</li><li><code>fade-down</code> \u4E0B\u6ED1\u6DE1\u5165</li><li><code>fade-left</code> \u5DE6\u6ED1\u6DE1\u5165</li><li><code>fade-right</code> \u53F3\u6ED1\u6DE1\u5165</li><li><code>slide-up</code> \u4E0A\u6ED1\u8FDB\u5165</li><li><code>slide-down</code> \u4E0B\u6ED1\u8FDB\u5165</li><li><code>slide-left</code> \u5DE6\u6ED1\u8FDB\u5165</li><li><code>slide-right</code> \u53F3\u6ED1\u8FDB\u5165</li><li><code>zoom</code> \u7F29\u653E</li><li><code>fade-zoom</code> \u7F29\u653E\u6DE1\u5165</li></ul></li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-transition</span> <span class="token attr-name">:show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>show<span class="token punctuation">&quot;</span></span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fade-up<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mask<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>m-transition</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><h3 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u53EF\u9009\u503C</th></tr></thead><tbody><tr><td>show</td><td>\u662F\u5426\u5C55\u793A\u7EC4\u4EF6</td><td>Boolean</td><td>false</td><td>true</td></tr><tr><td>mode</td><td>\u4F7F\u7528\u7684\u52A8\u753B\u6A21\u5F0F</td><td>String</td><td>fade</td><td>\u89C1\u4E0A\u65B9\u6587\u6863</td></tr><tr><td>duration</td><td>\u52A8\u753B\u7684\u6267\u884C\u65F6\u95F4\uFF0C\u5355\u4F4Dms</td><td>Number | String</td><td>300</td><td>-</td></tr><tr><td>timingFunction</td><td>\u4F7F\u7528\u7684\u52A8\u753B\u8FC7\u6E21\u51FD\u6570</td><td>String</td><td>ease-out</td><td>-</td></tr><tr><td>customStyle</td><td>\u81EA\u5B9A\u4E49\u6837\u5F0F</td><td>Object</td><td>-</td><td>-</td></tr></tbody></table><h3 id="slot" tabindex="-1"><a class="header-anchor" href="#slot" aria-hidden="true">#</a> Slot</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>\u52A8\u753B\u5185\u5BB9</td></tr></tbody></table><h3 id="event" tabindex="-1"><a class="header-anchor" href="#event" aria-hidden="true">#</a> Event</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>beforeEnter</td><td>\u8FDB\u5165\u524D\u89E6\u53D1</td><td>-</td></tr><tr><td>enter</td><td>\u8FDB\u5165\u4E2D\u89E6\u53D1</td><td>-</td></tr><tr><td>afterEnter</td><td>\u8FDB\u5165\u540E\u89E6\u53D1</td><td>-</td></tr><tr><td>beforeLeave</td><td>\u79BB\u5F00\u524D\u89E6\u53D1</td><td>-</td></tr><tr><td>leave</td><td>\u79BB\u5F00\u4E2D\u89E6\u53D1</td><td>-</td></tr><tr><td>afterLeave</td><td>\u79BB\u5F00\u540E\u89E6\u53D1</td><td>-</td></tr></tbody></table>`,16),o=[d];function l(i,c){return a(),n("div",null,o)}var p=t(e,[["render",l],["__file","transition.html.vue"]]);export{p as default};
