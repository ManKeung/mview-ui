import{_ as t,o as a,c as e,a as d}from"./app.f359fa7a.js";const n={},s=d('<h1 id="skeleton-\u9AA8\u67B6\u5C4F" tabindex="-1"><a class="header-anchor" href="#skeleton-\u9AA8\u67B6\u5C4F" aria-hidden="true">#</a> Skeleton \u9AA8\u67B6\u5C4F</h1><h2 id="\u5E73\u53F0\u5DEE\u5F02\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u5E73\u53F0\u5DEE\u5F02\u8BF4\u660E" aria-hidden="true">#</a> \u5E73\u53F0\u5DEE\u5F02\u8BF4\u660E</h2><table><thead><tr><th style="text-align:center;">App(vue)</th><th style="text-align:center;">App(nvue)</th><th style="text-align:center;">H5</th><th style="text-align:center;">\u5C0F\u7A0B\u5E8F</th></tr></thead><tbody><tr><td style="text-align:center;">\u221A</td><td style="text-align:center;">\xD7</td><td style="text-align:center;">\u221A</td><td style="text-align:center;">\u221A</td></tr></tbody></table><h2 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a> \u57FA\u672C\u4F7F\u7528</h2><p>\u7EC4\u4EF6\u7531<code>\u6807\u9898</code>\uFF0C<code>\u6BB5\u843D</code>\u548C<code>\u5934\u50CF</code>\u7EC4\u4EF6\u7EC4\u6210\uFF0C\u5176\u4E2D\u6BB5\u843D\u9700\u8981\u901A\u8FC7<code>rows</code>\u53C2\u6570\u914D\u7F6E\u624D\u663E\u793A\uFF0C\u53EF\u4EE5\u901A\u8FC7<code>title</code>\u548C<code>avatar</code>\u662F\u5426\u663E\u793A\u6807\u9898\u548C\u5934\u50CF\u3002 \u8BE5\u7EC4\u4EF6\u7684\u4F7F\u7528\uFF0C\u6709\u51E0\u4E2A\u9700\u8981\u6CE8\u610F\u7684\u70B9\uFF0C\u5982\u4E0B\uFF1A</p><ul><li><code>title</code>(\u53EF\u9009)\uFF0C\u662F\u5426\u663E\u793A<code>\u6807\u9898</code>\u5360\u4F4D\u884C\uFF0C\u8BE5\u5360\u4F4D\u884C\u4E0D\u5E03\u6EE1\u5168\u5C4F\u5BBD\u5EA6\uFF0C\u540C\u65F6\u4E0E\u6BB5\u843D\u7684\u8DDD\u79BB\u8F83\u5927\u4EE5\u505A\u660E\u663E\u533A\u5206</li><li><code>avatar</code>(\u53EF\u9009)\uFF0C\u662F\u5426\u5728\u5DE6\u4E0A\u89D2\u4F4D\u7F6E\u663E\u793A\u5706\u5F62\u7684<code>\u5934\u50CF</code>\u5360\u4F4D\u533A\u57DF</li><li><code>rows</code>(\u53EF\u9009)\uFF0C<code>\u6BB5\u843D</code>\u7684\u884C\u6570</li><li><code>loading</code>(\u5FC5\u9009)\uFF0C\u662F\u5426\u52A0\u8F7D\u4E2D\u72B6\u6001\uFF0C\u5982\u679C\u4E3A`true```\u5219\u663E\u793A\u9AA8\u67B6\u5C4F\u7EC4\u4EF6\u5360\u4F4D\uFF0C\u5426\u5219\u663E\u793A\u63D2\u69FD\u4E2D\u7684\u5185\u5BB9</li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-skeleton</span> <span class="token attr-name">loading</span> <span class="token attr-name">title</span> <span class="token attr-name">rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>3<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u63A7\u5236\u52A0\u8F7D\u52A8\u753B" tabindex="-1"><a class="header-anchor" href="#\u63A7\u5236\u52A0\u8F7D\u52A8\u753B" aria-hidden="true">#</a> \u63A7\u5236\u52A0\u8F7D\u52A8\u753B</h2><p>\u8BBE\u7F6E<code>animate</code>\u4E3A<code>true</code>\u6216<code>false</code>\uFF0C\u63A7\u5236\u662F\u5426\u663E\u793A\u52A8\u753B\u6548\u679C\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-skeleton</span> <span class="token attr-name">loading</span> <span class="token attr-name">:animate</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u663E\u793A\u5934\u50CF" tabindex="-1"><a class="header-anchor" href="#\u663E\u793A\u5934\u50CF" aria-hidden="true">#</a> \u663E\u793A\u5934\u50CF</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-skeleton</span> <span class="token attr-name">loading</span> <span class="token attr-name">avatar</span> <span class="token attr-name">rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><h3 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u53EF\u9009\u503C</th></tr></thead><tbody><tr><td>loading</td><td>\u662F\u5426\u663E\u793A\u9AA8\u67B6\u5360\u4F4D\u56FE\uFF0C\u8BBE\u7F6E\u4E3A<code>false</code>\u5C06\u4F1A\u5C55\u793A<code>slot</code>\u5185\u5BB9</td><td>Boolean</td><td>true</td><td>false</td></tr><tr><td>animate</td><td>\u662F\u5426\u5F00\u542F\u52A8\u753B\u6548\u679C</td><td>Boolean</td><td>true</td><td>false</td></tr><tr><td>rows</td><td>\u6BB5\u843D\u5360\u4F4D\u56FE\u884C\u6570</td><td>Number | String</td><td>0</td><td>-</td></tr><tr><td>rowsWidth</td><td>\u6BB5\u843D\u5360\u4F4D\u56FE\u7684\u5BBD\u5EA6\uFF0C\u53EF\u4EE5\u4E3A\u767E\u5206\u6BD4\uFF0C\u6570\u503C\uFF0C\u5E26\u5355\u4F4D\u5B57\u7B26\u4E32\u7B49\uFF0C\u53EF\u901A\u8FC7\u6570\u7EC4\u4F20\u5165\u6307\u5B9A\u6BCF\u4E2A\u6BB5\u843D\u884C\u7684\u5BBD\u5EA6\uFF0C\u4E0D\u5E26\u5355\u4F4D\u9ED8\u8BA4<code>px</code> (\u6CE8\u610F\uFF1A\u9ED8\u8BA4\u4E0D\u660E\u786E\u6307\u5B9A\uFF0C\u6700\u540E\u4E00\u4E2A\u662F70%\u8BA1\u7B97\u5BBD\u5EA6)</td><td>String | Array | Number</td><td>100%</td><td>-</td></tr><tr><td>rowsHeight</td><td>\u6BB5\u843D\u7684\u9AD8\u5EA6</td><td>String | Array | Number</td><td>18</td><td>-</td></tr><tr><td>title</td><td>\u662F\u5426\u5C55\u793A\u6807\u9898\u5360\u4F4D\u56FE</td><td>Boolean</td><td>true</td><td>false</td></tr><tr><td>titleWidth</td><td>\u6807\u9898\u7684\u5BBD\u5EA6</td><td>Number | String</td><td>50%</td><td>-</td></tr><tr><td>titleHeight</td><td>\u6807\u9898\u7684\u9AD8\u5EA6</td><td>Number | String</td><td>18</td><td>-</td></tr><tr><td>avatar</td><td>\u662F\u5426\u5C55\u793A\u5934\u50CF\u5360\u4F4D\u56FE</td><td>Boolean</td><td>false</td><td>true</td></tr><tr><td>avatarSize</td><td>\u5934\u50CF\u5360\u4F4D\u56FE\u5927\u5C0F</td><td>Number | String</td><td>32</td><td>-</td></tr><tr><td>avatarShape</td><td>\u5934\u50CF\u5360\u4F4D\u56FE\u7684\u5F62\u72B6\uFF0C<code>circle</code>-\u5706\u5F62\uFF0C<code>square</code>-\u65B9\u5F62</td><td>String</td><td>circle</td><td>square</td></tr></tbody></table><h3 id="slot" tabindex="-1"><a class="header-anchor" href="#slot" aria-hidden="true">#</a> Slot</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td><code>loading</code>\u4E3A<code>false</code>\u5C55\u793A\u5185\u5BB9</td></tr></tbody></table>',17),o=[s];function r(l,c){return a(),e("div",null,o)}var p=t(n,[["render",r],["__file","skeleton.html.vue"]]);export{p as default};
