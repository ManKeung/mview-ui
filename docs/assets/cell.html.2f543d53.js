import{_ as u,r as l,o as i,c as d,d as s,w as t,b as n,a as e,e as a}from"./app.357d9104.js";const r={},k=e(`<h1 id="cell-\u5355\u5143\u683C" tabindex="-1"><a class="header-anchor" href="#cell-\u5355\u5143\u683C" aria-hidden="true">#</a> Cell \u5355\u5143\u683C</h1><p>cell\u5355\u5143\u683C\u4E00\u822C\u7528\u4E8E\u4E00\u7EC4\u5217\u8868\u7684\u60C5\u51B5\uFF0C\u6BD4\u5982\u4E2A\u4EBA\u4E2D\u5FC3\u9875\uFF0C\u8BBE\u7F6E\u9875\u7B49\u3002</p><h2 id="\u5E73\u53F0\u5DEE\u5F02\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u5E73\u53F0\u5DEE\u5F02\u8BF4\u660E" aria-hidden="true">#</a> \u5E73\u53F0\u5DEE\u5F02\u8BF4\u660E</h2><table><thead><tr><th style="text-align:center;">App(vue)</th><th style="text-align:center;">App(nvue)</th><th style="text-align:center;">H5</th><th style="text-align:center;">\u5C0F\u7A0B\u5E8F</th></tr></thead><tbody><tr><td style="text-align:center;">\u221A</td><td style="text-align:center;">\xD7</td><td style="text-align:center;">\u221A</td><td style="text-align:center;">\u221A</td></tr></tbody></table><h2 id="\u57FA\u7840\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u529F\u80FD" aria-hidden="true">#</a> \u57FA\u7840\u529F\u80FD</h2><ul><li>\u8BE5\u7EC4\u4EF6\u9700\u8981\u642D\u914D<code>cell-group</code>\u4F7F\u7528\uFF0C\u5E76\u7531\u5B83\u5B9E\u73B0\u5217\u8868\u7EC4\u7684\u4E0A\u4E0B\u8FB9\u6846\uFF0C\u5982\u4E0D\u9700\u8981\u4E0A\u4E0B\u8FB9\u6846\uFF0C\u914D\u7F6E<code>cellGroup</code>\u7684<code>border</code>\u53C2\u6570\u4E3A<code>false</code>\u5373\u53EF\u3002</li><li>\u901A\u8FC7<code>title</code>\u8BBE\u7F6E\u5DE6\u4FA7\u6807\u9898\uFF0C<code>value</code>\u8BBE\u7F6E\u53F3\u4FA7\u5185\u5BB9\u3002</li><li>\u901A\u8FC7<code>icon</code>\u5B57\u6BB5\u8BBE\u7F6E\u56FE\u6807\u3002</li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-cell-group</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span>
        <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>title<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>m-cell-title<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
        \u57FA\u7840\u529F\u80FD
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-cell</span>
        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u5355\u5143\u683C<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u63CF\u8FF0\u4FE1\u606F<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">is-link</span>
    <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-cell</span>
        <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>home<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u5355\u5143\u683C<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u5185\u5BB9<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>m-cell-group</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u81EA\u5B9A\u4E49\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u5185\u5BB9" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u5185\u5BB9</h2><ul><li>\u901A\u8FC7\u63D2\u69FD<code>icon</code>\u53EF\u4EE5\u81EA\u5B9A\u4E49\u56FE\u6807\uFF0C\u5185\u5BB9\u4F1A\u66FF\u6362\u5DE6\u8FB9\u56FE\u6807\u4F4D\u7F6E</li><li>\u901A\u8FC7\u63D2\u69FD<code>title</code>\u5B9A\u4E49\u5DE6\u8FB9\u6807\u9898\u90E8\u5206</li><li>\u901A\u8FC7\u63D2\u69FD<code>right-icon</code>\u5B9A\u4E49\u53F3\u8FB9\u5185\u5BB9\u90E8\u5206</li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-cell-group</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-cell</span>
        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u5355\u5143\u683C<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#icon</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-icon</span>
                <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>24<span class="token punctuation">&quot;</span></span>
                <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>search<span class="token punctuation">&quot;</span></span>
            <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#right-icon</span><span class="token punctuation">&gt;</span></span>
            (#^.^#)
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>m-cell</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-cell</span>
        <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scan<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u5185\u5BB9<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>m-cell-group</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u81EA\u5B9A\u4E49\u5927\u5C0F" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u5927\u5C0F" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u5927\u5C0F</h2><p>\u8BBE\u7F6E<code>size</code>\u53EF\u81EA\u5B9A\u4E49\u5927\u5C0F</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-cell-group</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-cell</span>
	    <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>large<span class="token punctuation">&quot;</span></span>
	    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u5355\u5143\u683C<span class="token punctuation">&quot;</span></span>
	    <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u5185\u5BB9<span class="token punctuation">&quot;</span></span>
	    <span class="token attr-name">isLink</span>
	<span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>m-cell</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-cell</span>
	    <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>large<span class="token punctuation">&quot;</span></span>
	    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u5355\u5143\u683C<span class="token punctuation">&quot;</span></span>
	    <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u5185\u5BB9<span class="token punctuation">&quot;</span></span>
	    <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u63CF\u8FF0\u4FE1\u606F<span class="token punctuation">&quot;</span></span>
	<span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>m-cell</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>m-cell-group</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5C55\u793A\u53F3\u7BAD\u5934" tabindex="-1"><a class="header-anchor" href="#\u5C55\u793A\u53F3\u7BAD\u5934" aria-hidden="true">#</a> \u5C55\u793A\u53F3\u7BAD\u5934</h2><p>\u8BBE\u7F6E<code>isLink</code>\u4E3A<code>true</code>\uFF0C\u5C06\u4F1A\u663E\u793A\u53F3\u4FA7\u7684\u7BAD\u5934\uFF0C\u53EF\u4EE5\u901A\u8FC7<code>arrow-direction</code>\u63A7\u5236\u7BAD\u5934\u7684\u65B9\u5411</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-cell-group</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-cell</span>
	    <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>home<span class="token punctuation">&quot;</span></span>
	    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u5355\u5143\u683C<span class="token punctuation">&quot;</span></span>
	    <span class="token attr-name">:is-link</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
	    <span class="token attr-name">arrow-direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>down<span class="token punctuation">&quot;</span></span>
	<span class="token punctuation">/&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-cell</span>
	    <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>add<span class="token punctuation">&quot;</span></span>
	    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u5355\u5143\u683C<span class="token punctuation">&quot;</span></span>
	    <span class="token attr-name">:is-link</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span>
	<span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>m-cell-group</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8DF3\u8F6C\u9875\u9762" tabindex="-1"><a class="header-anchor" href="#\u8DF3\u8F6C\u9875\u9762" aria-hidden="true">#</a> \u8DF3\u8F6C\u9875\u9762</h2><p>\u8BBE\u7F6E<code>isLink</code>\u4E3A<code>true</code>\uFF0C\u5355\u5143\u683C\u70B9\u51FB\u53EF\u8DF3\u8F6C\u9875\u9762,\u4F20\u5165<code>url</code>\u8BBE\u7F6E\u8DF3\u8F6C\u5730\u5740</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-cell-group</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-cell</span>
        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u6253\u5F00\u56FE\u6807<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">isLink</span>
        <span class="token attr-name">url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/pages/icon/icon<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>m-cell</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-cell</span>
        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u6253\u5F00\u989C\u8272<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">isLink</span>
        <span class="token attr-name">url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/pages/color/color<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>m-cell</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>m-cell-group</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53F3\u4FA7\u5185\u5BB9\u5782\u76F4\u5C45\u4E2D" tabindex="-1"><a class="header-anchor" href="#\u53F3\u4FA7\u5185\u5BB9\u5782\u76F4\u5C45\u4E2D" aria-hidden="true">#</a> \u53F3\u4FA7\u5185\u5BB9\u5782\u76F4\u5C45\u4E2D</h2><p>\u8BBE\u7F6E<code>center</code>\u4E3A<code>true</code>\uFF0C\u53EF\u5C06\u53F3\u4FA7\u5185\u5BB9\u5782\u76F4\u5C45\u4E2D</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-cell-group</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-cell</span>
        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u5355\u5143\u683C<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u5185\u5BB9<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u63CF\u8FF0\u4FE1\u606F<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">center</span>
    <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>m-cell</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>m-cell-group</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u81EA\u5B9A\u4E49\u63D2\u69FD" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u63D2\u69FD" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u63D2\u69FD</h2>`,23),v=n("div",{class:"language-html ext-html line-numbers-mode"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("m-cell-group")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("m-cell")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u5185\u5BB9"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#title"),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("view")]),a(`
                `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("m-slot-title"),n("span",{class:"token punctuation"},'"')]),a(`
            `),n("span",{class:"token punctuation"},">")]),a(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("text")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("m-cell-text"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
                    \u5355\u5143\u683C
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("text")]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("view")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("m-cell")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("m-cell")]),a(`
        `),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u5355\u5143\u683C"),n("span",{class:"token punctuation"},'"')]),a(`
        `),n("span",{class:"token attr-name"},"is-link"),a(`
    `),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#value"),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("text")]),a(`
                `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("m-slot-value"),n("span",{class:"token punctuation"},'"')]),a(`
            `),n("span",{class:"token punctuation"},">")]),a(`
                99
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("text")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("m-cell")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("m-cell-group")]),n("span",{class:"token punctuation"},">")]),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),m=n("div",{class:"language-scss ext-scss line-numbers-mode"},[n("pre",{class:"language-scss"},[n("code",null,[n("span",{class:"token selector"},".m-slot-value "),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),a(),n("span",{class:"token variable"},"$m-error"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token property"},"border-radius"),n("span",{class:"token punctuation"},":"),a(" 6px"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),a(" 2px 4px"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),a(" white"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=e('<h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><h3 id="cellgroup-props" tabindex="-1"><a class="header-anchor" href="#cellgroup-props" aria-hidden="true">#</a> CellGroup Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u53EF\u9009\u503C</th></tr></thead><tbody><tr><td>title</td><td>\u5206\u7EC4\u6807\u9898</td><td>String</td><td>-</td><td>-</td></tr><tr><td>border</td><td>\u662F\u5426\u663E\u793A\u5916\u8FB9\u6846</td><td>Boolean</td><td>true</td><td>false</td></tr><tr><td>customStyle</td><td>\u7528\u6237\u81EA\u5B9A\u4E49\u5916\u90E8\u6837\u5F0F\uFF0C\u5BF9\u8C61\u5F62\u5F0F\uFF0C\u5982{&#39;font-size&#39;: &#39;12px&#39;} \u6216 {&#39;fontSize&#39;: &#39;12px&#39;}</td><td>object</td><td>-</td><td>-</td></tr></tbody></table><h3 id="cellgroup-slot" tabindex="-1"><a class="header-anchor" href="#cellgroup-slot" aria-hidden="true">#</a> CellGroup Slot</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>title</td><td>\u81EA\u5B9A\u4E49\u5206\u7EC4\u6807\u9898</td></tr></tbody></table><h3 id="cell-props" tabindex="-1"><a class="header-anchor" href="#cell-props" aria-hidden="true">#</a> Cell Props</h3>',6),h=n("thead",null,[n("tr",null,[n("th",null,"\u53C2\u6570"),n("th",null,"\u8BF4\u660E"),n("th",null,"\u7C7B\u578B"),n("th",null,"\u9ED8\u8BA4\u503C"),n("th",null,"\u53EF\u9009\u503C")])],-1),b=n("tr",null,[n("td",null,"title"),n("td",null,"\u5DE6\u4FA7\u6807\u9898"),n("td",null,"String | Number"),n("td",null,"-"),n("td",null,"-")],-1),q=n("tr",null,[n("td",null,"label"),n("td",null,"\u6807\u9898\u4E0B\u65B9\u7684\u63CF\u8FF0\u4FE1\u606F"),n("td",null,"String | Number"),n("td",null,"-"),n("td",null,"-")],-1),_=n("tr",null,[n("td",null,"value"),n("td",null,"\u53F3\u4FA7\u7684\u5185\u5BB9"),n("td",null,"String | Number"),n("td",null,"-"),n("td",null,"-")],-1),x=n("tr",null,[n("td",null,"icon"),n("td",null,"\u5DE6\u4FA7\u56FE\u6807\u540D\u79F0"),n("td",null,"String"),n("td",null,"-"),n("td",null,"-")],-1),f=n("tr",null,[n("td",null,"disabled"),n("td",null,"\u662F\u5426\u7981\u7528cell"),n("td",null,"Boolean"),n("td",null,"false"),n("td",null,"true")],-1),y=n("tr",null,[n("td",null,"border"),n("td",null,"\u662F\u5426\u663E\u793A\u4E0B\u8FB9\u6846"),n("td",null,"Boolean"),n("td",null,"true"),n("td",null,"false")],-1),S=n("tr",null,[n("td",null,"center"),n("td",null,"\u5185\u5BB9\u662F\u5426\u5782\u76F4\u5C45\u4E2D(\u4E3B\u8981\u662F\u9488\u5BF9\u53F3\u4FA7\u7684value\u90E8\u5206)"),n("td",null,"Boolean"),n("td",null,"false"),n("td",null,"true")],-1),w=n("tr",null,[n("td",null,"url"),n("td",null,"\u70B9\u51FB\u540E\u8DF3\u8F6C\u7684URL\u5730\u5740"),n("td",null,"String"),n("td",null,"-"),n("td",null,"-")],-1),B=n("td",null,"linkType",-1),L=n("td",null,"\u94FE\u63A5\u8DF3\u8F6C\u7684\u65B9\u5F0F",-1),C=n("td",null,"String",-1),N=n("td",null,"navigateTo",-1),z=a("$m.route\u8DF3\u8F6C\u65B9\u5F0F"),j=n("tr",null,[n("td",null,"clickable"),n("td",null,"\u662F\u5426\u5F00\u542F\u70B9\u51FB\u53CD\u9988(\u8868\u73B0\u4E3A\u70B9\u51FB\u65F6\u52A0\u4E0A\u7070\u8272\u80CC\u666F)"),n("td",null,"Boolean"),n("td",null,"false"),n("td",null,"true")],-1),V=n("tr",null,[n("td",null,"isLink"),n("td",null,"\u662F\u5426\u5C55\u793A\u53F3\u4FA7\u7BAD\u5934\u5E76\u5F00\u542F\u70B9\u51FB\u53CD\u9988"),n("td",null,"Boolean"),n("td",null,"false"),n("td",null,"true")],-1),A=n("tr",null,[n("td",null,"rightIcon"),n("td",null,"\u53F3\u4FA7\u7684\u56FE\u6807\u7BAD\u5934"),n("td",null,"String"),n("td",null,"arrow-right"),n("td",null,"-")],-1),G=n("tr",null,[n("td",null,"arrowDirection"),n("td",null,"\u53F3\u4FA7\u7BAD\u5934\u7684\u65B9\u5411"),n("td",null,"String"),n("td",null,"right"),n("td",null,"left | up | down")],-1),I=n("tr",null,[n("td",null,"iconStyle"),n("td",null,"\u5DE6\u4FA7\u56FE\u6807\u6837\u5F0F"),n("td",null,"Object | String"),n("td",null,"-"),n("td",null,"-")],-1),O=n("tr",null,[n("td",null,"rightIconStyle"),n("td",null,"\u53F3\u4FA7\u7BAD\u5934\u56FE\u6807\u7684\u6837\u5F0F"),n("td",null,"Object | String"),n("td",null,"-"),n("td",null,"-")],-1),P=n("tr",null,[n("td",null,"titleStyle"),n("td",null,"\u6807\u9898\u7684\u6837\u5F0F"),n("td",null,"Object | String"),n("td",null,"-"),n("td",null,"-")],-1),R=n("tr",null,[n("td",null,"size"),n("td",null,"\u5355\u4F4D\u5143\u7684\u5927\u5C0F"),n("td",null,"String"),n("td",null,"-"),n("td",null,"large")],-1),T=n("tr",null,[n("td",null,"stop"),n("td",null,"\u70B9\u51FBcell\u662F\u5426\u963B\u6B62\u4E8B\u4EF6\u4F20\u64AD"),n("td",null,"Boolean"),n("td",null,"true"),n("td",null,"false")],-1),E=n("tr",null,[n("td",null,"name"),n("td",null,[a("\u6807\u8BC6\u7B26\uFF0C\u7528\u4E8E\u5728"),n("code",null,"click"),a("\u4E8B\u4EF6\u4E2D\u8FDB\u884C\u8FD4\u56DE")]),n("td",null,"String | Number"),n("td",null,"-"),n("td",null,"-")],-1),$=e('<h3 id="cell-slot" tabindex="-1"><a class="header-anchor" href="#cell-slot" aria-hidden="true">#</a> Cell Slot</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>title</td><td>\u81EA\u5B9A\u4E49\u5DE6\u4FA7\u6807\u9898\u90E8\u5206\u7684\u5185\u5BB9\uFF0C\u5982\u9700\u4F7F\u7528\uFF0C\u8BF7\u52FF\u5B9A\u4E49<code>title</code>\u53C2\u6570\uFF0C\u6216\u8D4B\u503C\u8F6C\u6362\u4E3ABoolean <code>false</code> \u503C\u5373\u53EF</td></tr><tr><td>value</td><td>\u81EA\u5B9A\u4E49\u53F3\u4FA7\u6807\u9898\u90E8\u5206\u7684\u5185\u5BB9\uFF0C\u5982\u9700\u4F7F\u7528\uFF0C\u8BF7\u52FF\u5B9A\u4E49<code>value</code>\u53C2\u6570\uFF0C\u6216\u8D4B\u503C\u8F6C\u6362\u4E3ABoolean <code>false</code> \u503C\u5373\u53EF</td></tr><tr><td>icon</td><td>\u81EA\u5B9A\u4E49\u5DE6\u4FA7\u7684\u56FE\u6807</td></tr><tr><td>right-icon</td><td>\u81EA\u5B9A\u4E49\u53F3\u4FA7\u56FE\u6807\u5185\u5BB9</td></tr><tr><td>label</td><td>\u81EA\u5B9A\u4E49<code>label</code>\u5185\u5BB9</td></tr></tbody></table><h3 id="cell-event" tabindex="-1"><a class="header-anchor" href="#cell-event" aria-hidden="true">#</a> Cell Event</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>click</td><td>\u70B9\u51FBcell\u5217\u8868\u65F6\u89E6\u53D1</td><td>name: <code>props</code>\u7684<code>name</code>\u53C2\u6570\u6807\u8BC6\u7B26</td></tr></tbody></table>',4);function D(H,U){const p=l("code-group-item"),c=l("code-group"),o=l("RouterLink");return i(),d("div",null,[k,s(c,null,{default:t(()=>[s(p,{title:"html"},{default:t(()=>[v]),_:1}),s(p,{title:"scss"},{default:t(()=>[m]),_:1})]),_:1}),g,n("table",null,[h,n("tbody",null,[b,q,_,x,f,y,S,w,n("tr",null,[B,L,C,N,n("td",null,[s(o,{to:"/api/route.html"},{default:t(()=>[z]),_:1})])]),j,V,A,G,I,O,P,R,T,E])]),$])}var J=u(r,[["render",D],["__file","cell.html.vue"]]);export{J as default};