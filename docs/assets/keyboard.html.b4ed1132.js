import{_ as p,r as s,o as c,c as u,b as n,d as t,w as i,a as e,e as a}from"./app.84a4a695.js";const d={},r=e(`<h1 id="keyboard-\u952E\u76D8" tabindex="-1"><a class="header-anchor" href="#keyboard-\u952E\u76D8" aria-hidden="true">#</a> Keyboard \u952E\u76D8</h1><p>mView\u81EA\u5B9A\u4E49\u952E\u76D8\uFF0C\u5305\u542B\u82F1\u6587\u952E\u76D8\uFF0C\u8EAB\u4EFD\u8BC1\u952E\u76D8\uFF0C\u6570\u5B57\u952E\u76D83\u4E2D\u6A21\u5F0F\uFF0C\u90FD\u6709\u53EF\u4EE5\u6253\u4E71\u6309\u952E\u987A\u5E8F\u7684\u9009\u9879\u3002</p><h2 id="\u5E73\u53F0\u5DEE\u5F02\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u5E73\u53F0\u5DEE\u5F02\u8BF4\u660E" aria-hidden="true">#</a> \u5E73\u53F0\u5DEE\u5F02\u8BF4\u660E</h2><table><thead><tr><th style="text-align:center;">App(vue)</th><th style="text-align:center;">App(nvue)</th><th style="text-align:center;">H5</th><th style="text-align:center;">\u5C0F\u7A0B\u5E8F</th></tr></thead><tbody><tr><td style="text-align:center;">\u221A</td><td style="text-align:center;">\xD7</td><td style="text-align:center;">\u221A</td><td style="text-align:center;">\u221A</td></tr></tbody></table><h2 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a> \u57FA\u672C\u4F7F\u7528</h2><p>\u901A\u8FC7mode\u53C2\u6570\u5B9A\u4E49\u952E\u76D8\u7684\u7C7B\u578B\uFF0Cshow\u7ED1\u5B9A\u4E00\u4E2A\u503C\u4E3A\u5E03\u5C14\u503C\u7684\u53D8\u91CF\u63A7\u5236\u952E\u76D8\u7684\u5F39\u51FA\u4E0E\u6536\u8D77\uFF1A</p><ul><li>mode = &#39;&#39; (\u9ED8\u8BA4\u503C)\u4E3A\u82F1\u6587\u952E\u76D8\uFF0C\u6B64\u65F6\u9876\u90E8\u5DE5\u5177\u6761\u4E2D\u95F4\u7684\u63D0\u793A\u6587\u5B57\u4E3A&quot;\u82F1\u6587\u952E\u76D8&quot;</li><li>mode = number\u4E3A\u6570\u5B57\u952E\u76D8\uFF0C\u6B64\u65F6\u9876\u90E8\u5DE5\u5177\u6761\u4E2D\u95F4\u7684\u63D0\u793A\u6587\u5B57\u4E3A&quot;\u6570\u5B57\u952E\u76D8&quot;</li><li>mode = card \u4E3A\u8EAB\u4EFD\u8BC1\u952E\u76D8\uFF0C\u6B64\u65F6\u9876\u90E8\u5DE5\u5177\u6761\u4E2D\u95F4\u7684\u63D0\u793A\u6587\u5B57\u4E3A&quot;\u8EAB\u4EFD\u8BC1\u952E\u76D8&quot;</li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-common</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u952E\u76D8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-cell-group</span> <span class="token attr-name">border</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-cell</span>
                <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u57FA\u672C\u4F7F\u7528<span class="token punctuation">&quot;</span></span>
                <span class="token attr-name">is-link</span>
                <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleClick<span class="token punctuation">&quot;</span></span>
            <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>m-cell-group</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-keyboard</span>
            <span class="token attr-name">:show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>show<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>number<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">@close</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>show = false<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">@cancel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>show = false<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">@confirm</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>show = false<span class="token punctuation">&quot;</span></span>
        <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">const</span> show <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    show<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u9690\u85CF\u952E\u76D8-\u7B26\u53F7" tabindex="-1"><a class="header-anchor" href="#\u9690\u85CF\u952E\u76D8-\u7B26\u53F7" aria-hidden="true">#</a> \u9690\u85CF\u952E\u76D8&quot;.&quot;\u7B26\u53F7</h2><p>\u901A\u8FC7dotDisabled\u53C2\u6570\u914D\u7F6E\u662F\u5426\u663E\u793A\u952E\u76D8&quot;.&quot;\u7B26\u53F7\uFF0C\u9ED8\u8BA4\u4E3Afalse\uFF0C\u53EA\u5728&quot;mode = number&quot;\u65F6\u751F\u6548</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-keyboard</span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>number<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:dotDisabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>u-keyboard</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u662F\u5426\u6253\u4E71\u6309\u952E\u7684\u987A\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u662F\u5426\u6253\u4E71\u6309\u952E\u7684\u987A\u5E8F" aria-hidden="true">#</a> \u662F\u5426\u6253\u4E71\u6309\u952E\u7684\u987A\u5E8F</h2><p>\u5982\u679C\u914D\u7F6E<code>random</code>\u53C2\u6570\u4E3A<code>true</code>\u7684\u8BDD\uFF0C<strong>\u6BCF\u6B21</strong>\u6253\u5F00\u952E\u76D8\uFF0C\u6309\u952E\u7684\u987A\u5E8F\u90FD\u662F\u968F\u673A\u7684\uFF0C\u8BE5\u529F\u80FD\u9ED8\u8BA4\u662F\u5173\u95ED\u7684</p><h2 id="\u5982\u4F55\u63A7\u5236\u952E\u76D8\u7684\u6253\u5F00\u548C\u5173\u95ED" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u63A7\u5236\u952E\u76D8\u7684\u6253\u5F00\u548C\u5173\u95ED" aria-hidden="true">#</a> \u5982\u4F55\u63A7\u5236\u952E\u76D8\u7684\u6253\u5F00\u548C\u5173\u95ED\uFF1F</h2><p>\u9700\u8981\u9ED8\u8BA4\u5C31\u6253\u5F00\u952E\u76D8\uFF0C\u8FD9\u4E8B\u4F60\u8BBE\u7F6E<code>show</code>\u4E3A<code>true</code>\u7684\u65F6\u671F\u5F88\u6709\u8003\u7A76\uFF0C\u8BF7\u5728<code>onReady</code>\u751F\u547D\u5468\u671F\u91CC\u8BBE\u7F6E<code>show.value = true</code>\u907F\u514D<code>m-keyboard</code>\u7EC4\u4EF6\u5C1A\u672A\u521B\u5EFA\u5B8C\u6210\u3002</p><h2 id="\u5982\u4F55\u76D1\u542C\u952E\u76D8\u6309\u952E\u88AB\u70B9\u51FB" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u76D1\u542C\u952E\u76D8\u6309\u952E\u88AB\u70B9\u51FB" aria-hidden="true">#</a> \u5982\u4F55\u76D1\u542C\u952E\u76D8\u6309\u952E\u88AB\u70B9\u51FB\uFF1F</h2><ul><li>\u8F93\u5165\u503C\u662F\u901A\u8FC7\u7EC4\u4EF6\u7684change\u4E8B\u4EF6\u5B9E\u73B0\u7684\uFF0C\u7EC4\u4EF6\u5185\u90E8\u6BCF\u4E2A\u6309\u952E\u88AB\u70B9\u51FB\u7684\u65F6\u5019\uFF0C\u7EC4\u4EF6\u5C31\u4F1A\u53D1\u51FA\u4E00\u4E2Achange\u4E8B\u4EF6\uFF0C\u56DE\u8C03\u53C2\u6570\u4E3A\u70B9\u51FB\u7684\u6309\u952E\u7684\u503C\u3002</li><li>\u901A\u8FC7backspace\u4E8B\u4EF6\u76D1\u542C\u952E\u76D8\u9000\u683C\u952E\u7684\u70B9\u51FB\uFF0C\u901A\u8FC7\u4FEE\u6539\u7236\u7EC4\u4EF6\u7684\u503C\u5B9E\u73B0\u9000\u683C\u7684\u6548\u679C\uFF0C\u89C1\u4E0B\u65B9\u793A\u4F8B</li></ul><p>\u6CE8\u610F\uFF1A\u70B9\u51FB\u9000\u683C\u952E(\u4E5F\u5373\u5220\u9664\u952E)\u4E0D\u4F1A\u89E6\u53D1change\u4E8B\u4EF6</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-keyboard</span> <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>change<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@backspace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>backspace<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">change</span> <span class="token operator">=</span> <span class="token parameter">val</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5C06\u6BCF\u6B21\u6309\u952E\u7684\u503C\u62FC\u63A5\u5230value\u53D8\u91CF\u4E2D\uFF0C\u6CE8\u610F+=\u5199\u6CD5</span>
    value<span class="token punctuation">.</span>value <span class="token operator">+=</span> val
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">backspace</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5220\u9664value\u7684\u6700\u540E\u4E00\u4E2A\u5B57\u7B26</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>value<span class="token punctuation">.</span>value<span class="token punctuation">.</span>length<span class="token punctuation">)</span> value<span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> value<span class="token punctuation">.</span>value<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><h3 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h3>`,21),k=n("thead",null,[n("tr",null,[n("th",null,"\u53C2\u6570"),n("th",null,"\u8BF4\u660E"),n("th",null,"\u7C7B\u578B"),n("th",null,"\u9ED8\u8BA4\u503C"),n("th",null,"\u53EF\u9009\u503C")])],-1),h=n("tr",null,[n("td",null,"show"),n("td",null,"\u63A7\u5236\u952E\u76D8\u7684\u5F39\u51FA\u4E0E\u6536\u8D77"),n("td",null,"Boolean"),n("td",null,"false"),n("td",null,"true")],-1),v=n("td",null,"vibrate",-1),m=a("\u662F\u5426\u542F\u52A8\u70B9\u51FB\u9707\u52A8\uFF0C"),b=n("code",null,"h5",-1),g=a("\u4E0D\u652F\u6301\uFF0C"),_={href:"https://uniapp.dcloud.io/api/system/vibrate.html#vibrate",target:"_blank",rel:"noopener noreferrer"},f=a("\u517C\u5BB9\u6027\u67E5\u770B"),q=a("\u3002"),y=n("td",null,"Boolean",-1),x=n("td",null,"false",-1),w=n("td",null,"true",-1),B=n("tr",null,[n("td",null,"mode"),n("td",null,"\u952E\u76D8\u7C7B\u578B\uFF0C\u9ED8\u8BA4\u82F1\u6587\u952E\u76D8"),n("td",null,"String"),n("td",null,"-"),n("td",null,"number | card")],-1),C=n("tr",null,[n("td",null,"dotDisabled"),n("td",null,'\u662F\u5426\u663E\u793A"."\u6309\u952E\uFF0C\u53EA\u5728mode=number\u65F6\u6709\u6548'),n("td",null,"Boolean"),n("td",null,"false"),n("td",null,"true")],-1),S=n("tr",null,[n("td",null,"tooltip"),n("td",null,"\u662F\u5426\u663E\u793A\u952E\u76D8\u9876\u90E8\u5DE5\u5177\u6761"),n("td",null,"Boolean"),n("td",null,"true"),n("td",null,"false")],-1),I=n("tr",null,[n("td",null,"showTips"),n("td",null,"\u662F\u5426\u663E\u793A\u5DE5\u5177\u6761\u4E2D\u95F4\u7684\u63D0\u793A"),n("td",null,"Boolean"),n("td",null,"true"),n("td",null,"false")],-1),A=n("tr",null,[n("td",null,"tips"),n("td",null,[a("\u5DE5\u5177\u6761\u4E2D\u95F4\u7684\u63D0\u793A\u6587\u5B57\uFF0C\u89C1\u4E0A\u65B9"),n("code",null,"\u57FA\u672C\u4F7F\u7528"),a("\u7684\u8BF4\u660E")]),n("td",null,"String"),n("td",null,"-"),n("td",null,"-")],-1),N=n("tr",null,[n("td",null,"showCancel"),n("td",null,'\u662F\u5426\u663E\u793A\u5DE5\u5177\u6761\u5DE6\u8FB9\u7684"\u53D6\u6D88"\u6309\u94AE'),n("td",null,"Boolean"),n("td",null,"true"),n("td",null,"false")],-1),V=n("tr",null,[n("td",null,"showConfirm"),n("td",null,'\u662F\u5426\u663E\u793A\u5DE5\u5177\u6761\u53F3\u8FB9\u7684"\u5B8C\u6210"\u6309\u94AE'),n("td",null,"Boolean"),n("td",null,"true"),n("td",null,"false")],-1),E=n("tr",null,[n("td",null,"cancelText"),n("td",null,"\u53D6\u6D88\u6309\u94AE\u7684\u6587\u5B57"),n("td",null,"String"),n("td",null,"\u53D6\u6D88"),n("td",null,"-")],-1),L=n("tr",null,[n("td",null,"confirmText"),n("td",null,"\u786E\u8BA4\u6309\u94AE\u7684\u6587\u5B57"),n("td",null,"String"),n("td",null,"\u786E\u5B9A"),n("td",null,"-")],-1),O=n("tr",null,[n("td",null,"random"),n("td",null,"\u662F\u5426\u6253\u4E71\u952E\u76D8\u6309\u952E\u7684\u987A\u5E8F"),n("td",null,"Boolean"),n("td",null,"false"),n("td",null,"true")],-1),T=n("td",null,"safeAreaInsetBottom",-1),D=a("\u662F\u5426\u5F00\u542F"),R=a("\u5E95\u90E8\u5B89\u5168\u533A\u9002\u914D"),j=n("td",null,"Boolean",-1),z=n("td",null,"false",-1),P=n("td",null,"true",-1),H=n("tr",null,[n("td",null,"closeOnClickOverlay"),n("td",null,"\u662F\u5426\u5141\u8BB8\u70B9\u51FB\u906E\u7F69\u6536\u8D77\u952E\u76D8\uFF08\u6CE8\u610F\uFF1A\u5173\u95ED\u4E8B\u4EF6\u9700\u8981\u81EA\u884C\u5904\u7406\uFF0C\u53EA\u4F1A\u5728\u5F00\u542FcloseOnClickOverlay\u540E\u70B9\u51FB\u906E\u7F69\u5C42\u6267\u884Cclose\u56DE\u8C03\uFF09"),n("td",null,"Boolean"),n("td",null,"true"),n("td",null,"false")],-1),K=n("tr",null,[n("td",null,"overlay"),n("td",null,"\u662F\u5426\u663E\u793A\u906E\u7F69"),n("td",null,"Boolean"),n("td",null,"true"),n("td",null,"false")],-1),F=n("tr",null,[n("td",null,"zIndex"),n("td",null,[a("\u5F39\u51FA\u952E\u76D8\u7684"),n("code",null,"z-index"),a("\u503C")]),n("td",null,"Number | String"),n("td",null,"10075"),n("td",null,"-")],-1),G=e('<h3 id="slot" tabindex="-1"><a class="header-anchor" href="#slot" aria-hidden="true">#</a> Slot</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>\u5185\u5BB9\u5C06\u4F1A\u663E\u793A\u952E\u76D8\u7684\u5DE5\u5177\u6761\u4E0A\u9762</td></tr></tbody></table><h3 id="event" tabindex="-1"><a class="header-anchor" href="#event" aria-hidden="true">#</a> Event</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u6309\u952E\u88AB\u70B9\u51FB(\u4E0D\u5305\u542B\u9000\u683C\u952E\u88AB\u70B9\u51FB)</td><td>\u6309\u952E\u7684\u503C</td></tr><tr><td>close</td><td>\u952E\u76D8\u5173\u95ED</td><td>-</td></tr><tr><td>confirm</td><td>\u952E\u76D8\u9876\u90E8\u5DE5\u5177\u6761\u53F3\u8FB9\u7684&quot;\u786E\u5B9A&quot;\u6309\u94AE\u88AB\u70B9\u51FB</td><td>-</td></tr><tr><td>cancel</td><td>\u952E\u76D8\u9876\u90E8\u5DE5\u5177\u6761\u5DE6\u8FB9\u7684&quot;\u53D6\u6D88&quot;\u6309\u94AE\u88AB\u70B9\u51FB</td><td>-</td></tr><tr><td>backspace</td><td>\u952E\u76D8\u9000\u683C\u952E\u88AB\u70B9\u51FB</td><td>-</td></tr></tbody></table>',4);function J(M,Q){const l=s("ExternalLinkIcon"),o=s("RouterLink");return c(),u("div",null,[r,n("table",null,[k,n("tbody",null,[h,n("tr",null,[v,n("td",null,[m,b,g,n("a",_,[f,t(l)]),q]),y,x,w]),B,C,S,I,A,N,V,E,L,O,n("tr",null,[T,n("td",null,[D,t(o,{to:"/components/safeAreaInset.html"},{default:i(()=>[R]),_:1})]),j,z,P]),H,K,F])]),G])}var W=p(d,[["render",J],["__file","keyboard.html.vue"]]);export{W as default};
