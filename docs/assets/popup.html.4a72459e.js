import{_ as p,r as o,o as c,c as u,b as n,d as t,w as e,a as l,e as s}from"./app.f359fa7a.js";const i={},d=l(`<h1 id="popup-\u5F39\u51FA\u5C42" tabindex="-1"><a class="header-anchor" href="#popup-\u5F39\u51FA\u5C42" aria-hidden="true">#</a> Popup \u5F39\u51FA\u5C42</h1><p>\u5F39\u51FA\u5C42\u5BB9\u5668\uFF0C\u7528\u4E8E\u5C55\u793A\u5F39\u7A97\u3001\u4FE1\u606F\u63D0\u793A\u7B49\u5185\u5BB9\uFF0C\u652F\u6301\u4E0A\u3001\u4E0B\u3001\u5DE6\u3001\u53F3\u548C\u4E2D\u90E8\u5F39\u51FA\u3002\u7EC4\u4EF6\u53EA\u63D0\u4F9B\u5BB9\u5668\uFF0C\u5185\u90E8\u5185\u5BB9\u7531\u7528\u6237\u81EA\u5B9A\u4E49\u3002</p><h2 id="\u5E73\u53F0\u5DEE\u5F02\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u5E73\u53F0\u5DEE\u5F02\u8BF4\u660E" aria-hidden="true">#</a> \u5E73\u53F0\u5DEE\u5F02\u8BF4\u660E</h2><table><thead><tr><th style="text-align:center;">App(vue)</th><th style="text-align:center;">App(nvue)</th><th style="text-align:center;">H5</th><th style="text-align:center;">\u5C0F\u7A0B\u5E8F</th></tr></thead><tbody><tr><td style="text-align:center;">\u221A</td><td style="text-align:center;">\xD7</td><td style="text-align:center;">\u221A</td><td style="text-align:center;">\u221A</td></tr></tbody></table><h2 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a> \u57FA\u672C\u4F7F\u7528</h2><ul><li>\u5F39\u51FA\u5C42\u7684\u5185\u5BB9\u901A\u8FC7<code>slot</code>\u4F20\u5165\uFF0C\u7531\u7528\u6237\u81EA\u5B9A\u4E49</li><li>\u901A\u8FC7<code>show</code>\u7ED1\u5B9A\u4E00\u4E2A\u5E03\u5C14\u503C\u7684\u53D8\u91CF\u63A7\u5236\u5F39\u51FA\u5C42\u7684\u6253\u5F00\u548C\u6536\u8D77</li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>page<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-common</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u5F39\u7A97<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-cell-group</span> <span class="token attr-name">border</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-cell</span>
                <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u57FA\u672C\u4F7F\u7528<span class="token punctuation">&quot;</span></span>
                <span class="token attr-name">is-link</span>
                <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handelClick<span class="token punctuation">&quot;</span></span>
            <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>m-cell-group</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-popup</span> <span class="token attr-name">:show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>show<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span>
                    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn<span class="token punctuation">&quot;</span></span>
                    <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleClose<span class="token punctuation">&quot;</span></span>
                <span class="token punctuation">&gt;</span></span>
                    \u5173\u95ED
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>m-popup</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">const</span> show <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">handelClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    show<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">handleClose</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    show<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.page</span> <span class="token punctuation">{</span>
    <span class="token selector">.box</span> <span class="token punctuation">{</span>
        <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
        <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> $m-pad<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.btn</span> <span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> $m-primary<span class="token punctuation">;</span>
        <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 10px 20px<span class="token punctuation">;</span>
        <span class="token property">border-radius</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8BBE\u7F6E\u5F39\u51FA\u5C42\u7684\u65B9\u5411" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E\u5F39\u51FA\u5C42\u7684\u65B9\u5411" aria-hidden="true">#</a> \u8BBE\u7F6E\u5F39\u51FA\u5C42\u7684\u65B9\u5411</h2><p>\u53EF\u4EE5\u901A\u8FC7<code>mode</code>\u53C2\u6570\u8BBE\u7F6E\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u4E3A<code>left</code>\u3001<code>top</code>\u3001<code>right</code>\u3001<code>bottom</code>\u3001<code>center</code></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-popup</span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>left<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u8BBE\u7F6E\u5F39\u51FA\u5C42\u7684\u5706\u89D2" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E\u5F39\u51FA\u5C42\u7684\u5706\u89D2" aria-hidden="true">#</a> \u8BBE\u7F6E\u5F39\u51FA\u5C42\u7684\u5706\u89D2</h2><p>\u9700\u8981\u5C06<code>round</code>\u8BBE\u7F6E\u4E3A\u5706\u89D2\u503C(\u4EC5\u5BF9<code>mode = top | bottom | center</code>\u6709\u6548)\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-popup</span> <span class="token attr-name">round</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>10<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><h3 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h3>`,15),r=n("thead",null,[n("tr",null,[n("th",null,"\u53C2\u6570"),n("th",null,"\u8BF4\u660E"),n("th",null,"\u7C7B\u578B"),n("th",null,"\u9ED8\u8BA4\u503C"),n("th",null,"\u53EF\u9009\u503C")])],-1),k=n("tr",null,[n("td",null,"show"),n("td",null,"\u662F\u5426\u5C55\u793A\u5F39\u7A97"),n("td",null,"Boolean"),n("td",null,"false"),n("td",null,"true")],-1),v=n("tr",null,[n("td",null,"overlay"),n("td",null,"\u662F\u5426\u663E\u793A\u906E\u7F69"),n("td",null,"Boolean"),n("td",null,"true"),n("td",null,"false")],-1),h=n("tr",null,[n("td",null,"mode"),n("td",null,"\u5F39\u51FA\u65B9\u5411"),n("td",null,"String"),n("td",null,"bottom"),n("td",null,"top | right | left | center")],-1),m=n("tr",null,[n("td",null,"duration"),n("td",null,"\u906E\u7F69\u6253\u5F00\u6216\u6536\u8D77\u7684\u52A8\u753B\u8FC7\u6E21\u65F6\u95F4\uFF0C\u5355\u4F4Dms"),n("td",null,"Number | String"),n("td",null,"300"),n("td",null,"-")],-1),b=n("tr",null,[n("td",null,"overlayStyle"),n("td",null,"\u906E\u7F69\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4E00\u822C\u7528\u4E8E\u4FEE\u6539\u906E\u7F69\u989C\u8272\uFF0C\u5982\uFF1A{background: 'rgba(3, 100, 219, 0.5)'}"),n("td",null,"Object | String"),n("td",null,"-"),n("td",null,"-")],-1),g=n("tr",null,[n("td",null,"overlayOpacity"),n("td",null,[s("\u906E\u7F69\u900F\u660E\u5EA6\uFF0C"),n("code",null,"0-1"),s("\u4E4B\u95F4\uFF0C\u52FF\u4E0E"),n("code",null,"overlayStyle"),s("\u5171\u7528")]),n("td",null,"Number | String"),n("td",null,"0.5"),n("td",null,"-")],-1),_=n("tr",null,[n("td",null,"closeOnClickOverlay"),n("td",null,"\u70B9\u51FB\u906E\u7F69\u662F\u5426\u5173\u95ED\u5F39\u7A97\uFF08\u6CE8\u610F\uFF1A\u5173\u95ED\u4E8B\u4EF6\u9700\u8981\u81EA\u884C\u5904\u7406\uFF0C\u53EA\u4F1A\u5728\u5F00\u542FcloseOnClickOverlay\u540E\u70B9\u51FB\u906E\u7F69\u5C42\u6267\u884Cclose\u56DE\u8C03\uFF09"),n("td",null,"Boolean"),n("td",null,"true"),n("td",null,"false")],-1),f=n("tr",null,[n("td",null,"zIndex"),n("td",null,[s("\u5F39\u51FA\u5C42\u7684"),n("code",null,"z-index"),s("\u503C")]),n("td",null,"Number | String"),n("td",null,"10075"),n("td",null,"-")],-1),y=n("td",null,"safeAreaInsetBottom",-1),q=s("\u662F\u5426\u4E3A\u7559\u51FA"),x=s("\u5E95\u90E8\u5B89\u5168\u8DDD\u79BB"),w=n("td",null,"Boolean",-1),S=n("td",null,"true",-1),B=n("td",null,"false",-1),C=n("td",null,"safeAreaInsetTop",-1),N=s("\u662F\u5426\u4E3A\u7559\u51FA"),A=s("\u9876\u90E8\u5B89\u5168\u8DDD\u79BB"),I=n("td",null,"Boolean",-1),O=n("td",null,"false",-1),j=n("td",null,"true",-1),P=n("tr",null,[n("td",null,"closeIconPos"),n("td",null,"\u81EA\u5B9A\u4E49\u5173\u95ED\u56FE\u6807\u4F4D\u7F6E\uFF0Ctop-left\u4E3A\u5DE6\u4E0A\u89D2\uFF0Ctop-right\u4E3A\u53F3\u4E0A\u89D2\uFF0Cbottom-left\u4E3A\u5DE6\u4E0B\u89D2\uFF0Cbottom-right\u4E3A\u53F3\u4E0B\u89D2"),n("td",null,"String"),n("td",null,"top-right"),n("td",null,"top-left | bottom-left | bottom-right")],-1),V=n("tr",null,[n("td",null,"round"),n("td",null,[s("\u8BBE\u7F6E\u5706\u89D2\u503C\uFF0C\u4EC5\u5BF9"),n("code",null,"mode = top | bottom | cener\u6709\u6548")]),n("td",null,"Number | String"),n("td",null,"0"),n("td",null,"-")],-1),z=n("tr",null,[n("td",null,"zoom"),n("td",null,"\u5F53mode=center\u65F6 \u662F\u5426\u5F00\u542F\u7F29\u653E"),n("td",null,"Boolean"),n("td",null,"true"),n("td",null,"false")],-1),E=n("tr",null,[n("td",null,"bgColor"),n("td",null,[s("\u80CC\u666F\u8272\uFF0C\u4E00\u822C\u7528\u4E8E\u7279\u6B8A\u5F39\u7A97\u5185\u5BB9\u573A\u666F\uFF0C\u8BBE\u7F6E\u4E3A"),n("code",null,"transparent"),s("\u53EF\u53BB\u9664\u9ED8\u8BA4\u7684\u767D\u8272\u80CC\u666F")]),n("td",null,"String"),n("td",null,"-"),n("td",null,"-")],-1),L=n("tr",null,[n("td",null,"customStyle"),n("td",null,"\u7528\u6237\u81EA\u5B9A\u4E49\u6837\u5F0F"),n("td",null,"Object"),n("td",null,"-"),n("td",null,"-")],-1),R=l('<h3 id="slot" tabindex="-1"><a class="header-anchor" href="#slot" aria-hidden="true">#</a> Slot</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>\u5F39\u51FA\u5C42\u7684\u5185\u5BB9</td></tr></tbody></table><h3 id="event" tabindex="-1"><a class="header-anchor" href="#event" aria-hidden="true">#</a> Event</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>open</td><td>\u5F39\u51FA\u5C42\u6253\u5F00</td><td>-</td></tr><tr><td>close</td><td>\u5F39\u51FA\u5C42\u6536\u8D77</td><td>-</td></tr></tbody></table>',4);function T($,H){const a=o("RouterLink");return c(),u("div",null,[d,n("table",null,[r,n("tbody",null,[k,v,h,m,b,g,_,f,n("tr",null,[y,n("td",null,[q,t(a,{to:"/components/safeAreaInset.html"},{default:e(()=>[x]),_:1})]),w,S,B]),n("tr",null,[C,n("td",null,[N,t(a,{to:"/components/safeAreaInset.html"},{default:e(()=>[A]),_:1})]),I,O,j]),P,V,z,E,L])]),R])}var F=p(i,[["render",T],["__file","popup.html.vue"]]);export{F as default};
