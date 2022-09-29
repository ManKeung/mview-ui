var Pe=Object.defineProperty,De=Object.defineProperties;var Ee=Object.getOwnPropertyDescriptors;var me=Object.getOwnPropertySymbols;var Ae=Object.prototype.hasOwnProperty,Re=Object.prototype.propertyIsEnumerable;var fe=(i,t,e)=>t in i?Pe(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,Z=(i,t)=>{for(var e in t||(t={}))Ae.call(t,e)&&fe(i,e,t[e]);if(me)for(var e of me(t))Re.call(t,e)&&fe(i,e,t[e]);return i},ee=(i,t)=>De(i,Ee(t));import{_ as L,r as R,o as s,c as v,d as x,f as w,h as E,i as _,j as ke,k as a,F as H,l as z,b,t as N,m as T,n as W,q as ae,s as S,w as C,v as ge,x as $,e as q,y as Y,z as ze,A as Oe,B as Fe,C as ne,D as oe,E as A,G,H as $e,I as ye,J as xe,K as M,T as Le,L as B,M as se,N as K,O as X,P as We,Q as Ue,u as J,R as we,S as Te,a as Ve,U as Q,V as je,W as j,X as re,Y as qe,Z as Ge,$ as Se,a0 as Ke,a1 as te,a2 as Xe}from"./app.8410b88a.js";import{G as Ye}from"./conf.242ea4f8.js";const Je={},Qe={class:"theme-default-content"};function Ze(i,t){const e=R("Content");return s(),v("div",Qe,[x(e)])}var et=L(Je,[["render",Ze],["__file","HomeContent.vue"]]);const tt={key:0,class:"features"},at=w({__name:"HomeFeatures",setup(i){const t=E(),e=_(()=>ke(t.value.features)?t.value.features:[]);return(l,o)=>a(e).length?(s(),v("div",tt,[(s(!0),v(H,null,z(a(e),h=>(s(),v("div",{key:h.title,class:"feature"},[b("h2",null,N(h.title),1),b("p",null,N(h.details),1)]))),128))])):T("",!0)}});var nt=L(at,[["__file","HomeFeatures.vue"]]);const ot=["innerHTML"],st=["textContent"],rt=w({__name:"HomeFooter",setup(i){const t=E(),e=_(()=>t.value.footer),l=_(()=>t.value.footerHtml);return(o,h)=>a(e)?(s(),v(H,{key:0},[a(l)?(s(),v("div",{key:0,class:"footer",innerHTML:a(e)},null,8,ot)):(s(),v("div",{key:1,class:"footer",textContent:N(a(e))},null,8,st))],64)):T("",!0)}});var lt=L(rt,[["__file","HomeFooter.vue"]]);const it=["href","rel","target","aria-label"],ut=w({inheritAttrs:!1}),ct=w(ee(Z({},ut),{__name:"AutoLink",props:{item:{type:Object,required:!0}},setup(i){const t=i,e=W(),l=Fe(),{item:o}=ae(t),h=_(()=>Y(o.value.link)),m=_(()=>ze(o.value.link)||Oe(o.value.link)),c=_(()=>{if(!m.value){if(o.value.target)return o.value.target;if(h.value)return"_blank"}}),n=_(()=>c.value==="_blank"),r=_(()=>!h.value&&!m.value&&!n.value),u=_(()=>{if(!m.value){if(o.value.rel)return o.value.rel;if(n.value)return"noopener noreferrer"}}),d=_(()=>o.value.ariaLabel||o.value.text),p=_(()=>{const y=Object.keys(l.value.locales);return y.length?!y.some(g=>g===o.value.link):o.value.link!=="/"}),f=_(()=>p.value?e.path.startsWith(o.value.link):!1),k=_(()=>r.value?o.value.activeMatch?new RegExp(o.value.activeMatch).test(e.path):f.value:!1);return(y,g)=>{const I=R("RouterLink"),P=R("AutoLinkExternalIcon");return a(r)?(s(),S(I,ge({key:0,class:{"router-link-active":a(k)},to:a(o).link,"aria-label":a(d)},y.$attrs),{default:C(()=>[$(y.$slots,"before"),q(" "+N(a(o).text)+" ",1),$(y.$slots,"after")]),_:3},16,["class","to","aria-label"])):(s(),v("a",ge({key:1,class:"external-link",href:a(o).link,rel:a(u),target:a(c),"aria-label":a(d)},y.$attrs),[$(y.$slots,"before"),q(" "+N(a(o).text)+" ",1),a(n)?(s(),S(P,{key:0})):T("",!0),$(y.$slots,"after")],16,it))}}}));var D=L(ct,[["__file","AutoLink.vue"]]);const dt={class:"hero"},pt={key:0,id:"main-title"},vt={key:1,class:"description"},ht={key:2,class:"actions"},_t=w({__name:"HomeHero",setup(i){const t=E(),e=ne(),l=oe(),o=_(()=>l.value&&t.value.heroImageDark!==void 0?t.value.heroImageDark:t.value.heroImage),h=_(()=>t.value.heroText===null?null:t.value.heroText||e.value.title||"Hello"),m=_(()=>t.value.heroAlt||h.value||"hero"),c=_(()=>t.value.tagline===null?null:t.value.tagline||e.value.description||"Welcome to your VuePress site"),n=_(()=>ke(t.value.actions)?t.value.actions.map(({text:u,link:d,type:p="primary"})=>({text:u,link:d,type:p})):[]),r=()=>{if(!o.value)return null;const u=G("img",{src:$e(o.value),alt:m.value});return t.value.heroImageDark===void 0?u:G(ye,()=>u)};return(u,d)=>(s(),v("header",dt,[x(r),a(h)?(s(),v("h1",pt,N(a(h)),1)):T("",!0),a(c)?(s(),v("p",vt,N(a(c)),1)):T("",!0),a(n).length?(s(),v("p",ht,[(s(!0),v(H,null,z(a(n),p=>(s(),S(D,{key:p.text,class:A(["action-button",[p.type]]),item:p},null,8,["class","item"]))),128))])):T("",!0)]))}});var mt=L(_t,[["__file","HomeHero.vue"]]);const ft={class:"home"},gt=w({__name:"Home",setup(i){return(t,e)=>(s(),v("main",ft,[x(mt),x(nt),x(et),x(lt)]))}});var bt=L(gt,[["__file","Home.vue"]]);const kt=w({__name:"NavbarBrand",setup(i){const t=xe(),e=ne(),l=M(),o=oe(),h=_(()=>l.value.home||t.value),m=_(()=>e.value.title),c=_(()=>o.value&&l.value.logoDark!==void 0?l.value.logoDark:l.value.logo),n=()=>{if(!c.value)return null;const r=G("img",{class:"logo",src:$e(c.value),alt:m.value});return l.value.logoDark===void 0?r:G(ye,()=>r)};return(r,u)=>{const d=R("RouterLink");return s(),S(d,{to:a(h)},{default:C(()=>[x(n),a(m)?(s(),v("span",{key:0,class:A(["site-name",{"can-hide":a(c)}])},N(a(m)),3)):T("",!0)]),_:1},8,["to"])}}});var $t=L(kt,[["__file","NavbarBrand.vue"]]);const yt=w({__name:"DropdownTransition",setup(i){const t=l=>{l.style.height=l.scrollHeight+"px"},e=l=>{l.style.height=""};return(l,o)=>(s(),S(Le,{name:"dropdown",onEnter:t,onAfterEnter:e,onBeforeLeave:t},{default:C(()=>[$(l.$slots,"default")]),_:3}))}});var Ce=L(yt,[["__file","DropdownTransition.vue"]]);const xt=["aria-label"],Lt={class:"title"},wt=b("span",{class:"arrow down"},null,-1),Tt=["aria-label"],St={class:"title"},Ct={class:"navbar-dropdown"},It={class:"navbar-dropdown-subtitle"},Nt={key:1},Bt={class:"navbar-dropdown-subitem-wrapper"},Mt=w({__name:"NavbarDropdown",props:{item:{type:Object,required:!0}},setup(i){const t=i,{item:e}=ae(t),l=_(()=>e.value.ariaLabel||e.value.text),o=B(!1),h=W();se(()=>h.path,()=>{o.value=!1});const m=n=>{n.detail===0?o.value=!o.value:o.value=!1},c=(n,r)=>r[r.length-1]===n;return(n,r)=>(s(),v("div",{class:A(["navbar-dropdown-wrapper",{open:o.value}])},[b("button",{class:"navbar-dropdown-title",type:"button","aria-label":a(l),onClick:m},[b("span",Lt,N(a(e).text),1),wt],8,xt),b("button",{class:"navbar-dropdown-title-mobile",type:"button","aria-label":a(l),onClick:r[0]||(r[0]=u=>o.value=!o.value)},[b("span",St,N(a(e).text),1),b("span",{class:A(["arrow",o.value?"down":"right"])},null,2)],8,Tt),x(Ce,null,{default:C(()=>[K(b("ul",Ct,[(s(!0),v(H,null,z(a(e).children,u=>(s(),v("li",{key:u.text,class:"navbar-dropdown-item"},[u.children?(s(),v(H,{key:0},[b("h4",It,[u.link?(s(),S(D,{key:0,item:u,onFocusout:d=>c(u,a(e).children)&&u.children.length===0&&(o.value=!1)},null,8,["item","onFocusout"])):(s(),v("span",Nt,N(u.text),1))]),b("ul",Bt,[(s(!0),v(H,null,z(u.children,d=>(s(),v("li",{key:d.link,class:"navbar-dropdown-subitem"},[x(D,{item:d,onFocusout:p=>c(d,u.children)&&c(u,a(e).children)&&(o.value=!1)},null,8,["item","onFocusout"])]))),128))])],64)):(s(),S(D,{key:1,item:u,onFocusout:d=>c(u,a(e).children)&&(o.value=!1)},null,8,["item","onFocusout"]))]))),128))],512),[[X,o.value]])]),_:1})],2))}});var Ht=L(Mt,[["__file","NavbarDropdown.vue"]]);const be=i=>decodeURI(i).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),Pt=(i,t)=>{if(t.hash===i)return!0;const e=be(t.path),l=be(i);return e===l},Ie=(i,t)=>i.link&&Pt(i.link,t)?!0:i.children?i.children.some(e=>Ie(e,t)):!1,Ne=i=>!Y(i)||/github\.com/.test(i)?"GitHub":/bitbucket\.org/.test(i)?"Bitbucket":/gitlab\.com/.test(i)?"GitLab":/gitee\.com/.test(i)?"Gitee":null,Dt={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},Et=({docsRepo:i,editLinkPattern:t})=>{if(t)return t;const e=Ne(i);return e!==null?Dt[e]:null},At=({docsRepo:i,docsBranch:t,docsDir:e,filePathRelative:l,editLinkPattern:o})=>{if(!l)return null;const h=Et({docsRepo:i,editLinkPattern:o});return h?h.replace(/:repo/,Y(i)?i:`https://github.com/${i}`).replace(/:branch/,t).replace(/:path/,We(`${Ue(e)}/${l}`)):null},Rt={key:0,class:"navbar-items"},zt=w({__name:"NavbarItems",setup(i){const t=()=>{const r=J(),u=xe(),d=ne(),p=M();return _(()=>{var I,P;const f=Object.keys(d.value.locales);if(f.length<2)return[];const k=r.currentRoute.value.path,y=r.currentRoute.value.fullPath;return[{text:(I=p.value.selectLanguageText)!=null?I:"unknown language",ariaLabel:(P=p.value.selectLanguageAriaLabel)!=null?P:"unkown language",children:f.map(O=>{var ue,ce,de,pe,ve,he;const U=(ce=(ue=d.value.locales)==null?void 0:ue[O])!=null?ce:{},le=(pe=(de=p.value.locales)==null?void 0:de[O])!=null?pe:{},ie=`${U.lang}`,Me=(ve=le.selectLanguageName)!=null?ve:ie;let V;if(ie===d.value.lang)V=y;else{const _e=k.replace(u.value,O);r.getRoutes().some(He=>He.path===_e)?V=_e:V=(he=le.home)!=null?he:O}return{text:Me,link:V}})}]})},e=()=>{const r=M(),u=_(()=>r.value.repo),d=_(()=>u.value?Ne(u.value):null),p=_(()=>u.value&&!Y(u.value)?`https://github.com/${u.value}`:u.value),f=_(()=>p.value?r.value.repoLabel?r.value.repoLabel:d.value===null?"Source":d.value:null);return _(()=>!p.value||!f.value?[]:[{text:f.value,link:p.value}])},l=r=>we(r)?Te(r):r.children?ee(Z({},r),{children:r.children.map(l)}):r,h=(()=>{const r=M();return _(()=>(r.value.navbar||[]).map(l))})(),m=t(),c=e(),n=_(()=>[...h.value,...m.value,...c.value]);return(r,u)=>a(n).length?(s(),v("nav",Rt,[(s(!0),v(H,null,z(a(n),d=>(s(),v("div",{key:d.text,class:"navbar-item"},[d.children?(s(),S(Ht,{key:0,item:d},null,8,["item"])):(s(),S(D,{key:1,item:d},null,8,["item"]))]))),128))])):T("",!0)}});var Be=L(zt,[["__file","NavbarItems.vue"]]);const Ot=["title"],Ft={class:"icon",focusable:"false",viewBox:"0 0 32 32"},Wt=Ve('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',9),Ut=[Wt],Vt={class:"icon",focusable:"false",viewBox:"0 0 32 32"},jt=b("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1),qt=[jt],Gt=w({__name:"ToggleColorModeButton",setup(i){const t=M(),e=oe(),l=()=>{e.value=!e.value};return(o,h)=>(s(),v("button",{class:"toggle-color-mode-button",title:a(t).toggleColorMode,onClick:l},[K((s(),v("svg",Ft,Ut,512)),[[X,!a(e)]]),K((s(),v("svg",Vt,qt,512)),[[X,a(e)]])],8,Ot))}});var Kt=L(Gt,[["__file","ToggleColorModeButton.vue"]]);const Xt=["title"],Yt=b("div",{class:"icon","aria-hidden":"true"},[b("span"),b("span"),b("span")],-1),Jt=[Yt],Qt=w({__name:"ToggleSidebarButton",emits:["toggle"],setup(i){const t=M();return(e,l)=>(s(),v("div",{class:"toggle-sidebar-button",title:a(t).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:l[0]||(l[0]=o=>e.$emit("toggle"))},Jt,8,Xt))}});var Zt=L(Qt,[["__file","ToggleSidebarButton.vue"]]);const ea=w({__name:"Navbar",emits:["toggle-sidebar"],setup(i){const t=M(),e=B(null),l=B(null),o=B(0),h=_(()=>o.value?{maxWidth:o.value+"px"}:{});Q(()=>{const n=m(e.value,"paddingLeft")+m(e.value,"paddingRight"),r=()=>{var u;window.innerWidth<=719?o.value=0:o.value=e.value.offsetWidth-n-(((u=l.value)==null?void 0:u.offsetWidth)||0)};r(),window.addEventListener("resize",r,!1),window.addEventListener("orientationchange",r,!1)});function m(c,n){var d,p,f;const r=(f=(p=(d=c==null?void 0:c.ownerDocument)==null?void 0:d.defaultView)==null?void 0:p.getComputedStyle(c,null))==null?void 0:f[n],u=Number.parseInt(r,10);return Number.isNaN(u)?0:u}return(c,n)=>{const r=R("NavbarSearch");return s(),v("header",{ref_key:"navbar",ref:e,class:"navbar"},[x(Zt,{onToggle:n[0]||(n[0]=u=>c.$emit("toggle-sidebar"))}),b("span",{ref_key:"navbarBrand",ref:l},[x($t)],512),b("div",{class:"navbar-items-wrapper",style:je(a(h))},[$(c.$slots,"before"),x(Be,{class:"can-hide"}),$(c.$slots,"after"),a(t).colorModeSwitch?(s(),S(Kt,{key:0})):T("",!0),x(r)],4)],512)}}});var ta=L(ea,[["__file","Navbar.vue"]]);const aa={class:"page-meta"},na={key:0,class:"meta-item edit-link"},oa={key:1,class:"meta-item last-updated"},sa={class:"meta-item-label"},ra={class:"meta-item-info"},la={key:2,class:"meta-item contributors"},ia={class:"meta-item-label"},ua={class:"meta-item-info"},ca=["title"],da=q(", "),pa=w({__name:"PageMeta",setup(i){const t=()=>{const n=M(),r=j(),u=E();return _(()=>{var P,O,U;if(!((O=(P=u.value.editLink)!=null?P:n.value.editLink)!=null?O:!0))return null;const{repo:p,docsRepo:f=p,docsBranch:k="main",docsDir:y="",editLinkText:g}=n.value;if(!f)return null;const I=At({docsRepo:f,docsBranch:k,docsDir:y,filePathRelative:r.value.filePathRelative,editLinkPattern:(U=u.value.editLinkPattern)!=null?U:n.value.editLinkPattern});return I?{text:g!=null?g:"Edit this page",link:I}:null})},e=()=>{const n=M(),r=j(),u=E();return _(()=>{var f,k,y,g;return!((k=(f=u.value.lastUpdated)!=null?f:n.value.lastUpdated)!=null?k:!0)||!((y=r.value.git)!=null&&y.updatedTime)?null:new Date((g=r.value.git)==null?void 0:g.updatedTime).toLocaleString()})},l=()=>{const n=M(),r=j(),u=E();return _(()=>{var p,f,k,y;return((f=(p=u.value.contributors)!=null?p:n.value.contributors)!=null?f:!0)&&(y=(k=r.value.git)==null?void 0:k.contributors)!=null?y:null})},o=M(),h=t(),m=e(),c=l();return(n,r)=>{const u=R("ClientOnly");return s(),v("footer",aa,[a(h)?(s(),v("div",na,[x(D,{class:"meta-item-label",item:a(h)},null,8,["item"])])):T("",!0),a(m)?(s(),v("div",oa,[b("span",sa,N(a(o).lastUpdatedText)+": ",1),x(u,null,{default:C(()=>[b("span",ra,N(a(m)),1)]),_:1})])):T("",!0),a(c)&&a(c).length?(s(),v("div",la,[b("span",ia,N(a(o).contributorsText)+": ",1),b("span",ua,[(s(!0),v(H,null,z(a(c),(d,p)=>(s(),v(H,{key:p},[b("span",{class:"contributor",title:`email: ${d.email}`},N(d.name),9,ca),p!==a(c).length-1?(s(),v(H,{key:0},[da],64)):T("",!0)],64))),128))])])):T("",!0)])}}});var va=L(pa,[["__file","PageMeta.vue"]]);const ha={key:0,class:"page-nav"},_a={class:"inner"},ma={key:0,class:"prev"},fa={key:1,class:"next"},ga=w({__name:"PageNav",setup(i){const t=n=>n===!1?null:we(n)?Te(n):qe(n)?n:!1,e=(n,r,u)=>{const d=n.findIndex(p=>p.link===r);if(d!==-1){const p=n[d+u];return p!=null&&p.link?p:null}for(const p of n)if(p.children){const f=e(p.children,r,u);if(f)return f}return null},l=E(),o=re(),h=W(),m=_(()=>{const n=t(l.value.prev);return n!==!1?n:e(o.value,h.path,-1)}),c=_(()=>{const n=t(l.value.next);return n!==!1?n:e(o.value,h.path,1)});return(n,r)=>a(m)||a(c)?(s(),v("nav",ha,[b("p",_a,[a(m)?(s(),v("span",ma,[x(D,{item:a(m)},null,8,["item"])])):T("",!0),a(c)?(s(),v("span",fa,[x(D,{item:a(c)},null,8,["item"])])):T("",!0)])])):T("",!0)}});var ba=L(ga,[["__file","PageNav.vue"]]);const ka={class:"page"},$a={class:"theme-default-content"},ya=w({__name:"Page",setup(i){return(t,e)=>{const l=R("Content");return s(),v("main",ka,[$(t.$slots,"top"),b("div",$a,[$(t.$slots,"content-top"),x(l),$(t.$slots,"content-bottom")]),x(va),x(ba),$(t.$slots,"bottom")])}}});var xa=L(ya,[["__file","Page.vue"]]);const La={class:"sidebar-item-children"},wa=w({__name:"SidebarItem",props:{item:{type:Object,required:!0},depth:{type:Number,required:!1,default:0}},setup(i){const t=i,{item:e,depth:l}=ae(t),o=W(),h=J(),m=_(()=>Ie(e.value,o)),c=_(()=>({"sidebar-item":!0,"sidebar-heading":l.value===0,active:m.value,collapsible:e.value.collapsible})),n=B(!0),r=B(void 0);return e.value.collapsible&&(n.value=m.value,r.value=()=>{n.value=!n.value},h.afterEach(()=>{n.value=m.value})),(u,d)=>{var f;const p=R("SidebarItem",!0);return s(),v("li",null,[a(e).link?(s(),S(D,{key:0,class:A(a(c)),item:a(e)},null,8,["class","item"])):(s(),v("p",{key:1,tabindex:"0",class:A(a(c)),onClick:d[0]||(d[0]=(...k)=>r.value&&r.value(...k)),onKeydown:d[1]||(d[1]=Ge((...k)=>r.value&&r.value(...k),["enter"]))},[q(N(a(e).text)+" ",1),a(e).collapsible?(s(),v("span",{key:0,class:A(["arrow",n.value?"down":"right"])},null,2)):T("",!0)],34)),(f=a(e).children)!=null&&f.length?(s(),S(Ce,{key:2},{default:C(()=>[K(b("ul",La,[(s(!0),v(H,null,z(a(e).children,k=>(s(),S(p,{key:`${a(l)}${k.text}${k.link}`,item:k,depth:a(l)+1},null,8,["item","depth"]))),128))],512),[[X,n.value]])]),_:1})):T("",!0)])}}});var Ta=L(wa,[["__file","SidebarItem.vue"]]);const Sa={key:0,class:"sidebar-items"},Ca=w({__name:"SidebarItems",setup(i){const t=W(),e=re();return Q(()=>{se(()=>t.hash,l=>{const o=document.querySelector(".sidebar");if(!o)return;const h=document.querySelector(`.sidebar a.sidebar-item[href="${t.path}${l}"]`);if(!h)return;const{top:m,height:c}=o.getBoundingClientRect(),{top:n,height:r}=h.getBoundingClientRect();n<m?h.scrollIntoView(!0):n+r>m+c&&h.scrollIntoView(!1)})}),(l,o)=>a(e).length?(s(),v("ul",Sa,[(s(!0),v(H,null,z(a(e),h=>(s(),S(Ta,{key:h.link||h.text,item:h},null,8,["item"]))),128))])):T("",!0)}});var Ia=L(Ca,[["__file","SidebarItems.vue"]]);const Na={class:"sidebar"},Ba=w({__name:"Sidebar",setup(i){return(t,e)=>(s(),v("aside",Na,[x(Be),$(t.$slots,"top"),x(Ia),$(t.$slots,"bottom")]))}});var Ma=L(Ba,[["__file","Sidebar.vue"]]);const Ha=w({__name:"Layout",setup(i){const t=j(),e=E(),l=M(),o=_(()=>e.value.navbar!==!1&&l.value.navbar!==!1),h=re(),m=B(!1),c=g=>{m.value=typeof g=="boolean"?g:!m.value},n={x:0,y:0},r=g=>{n.x=g.changedTouches[0].clientX,n.y=g.changedTouches[0].clientY},u=g=>{const I=g.changedTouches[0].clientX-n.x,P=g.changedTouches[0].clientY-n.y;Math.abs(I)>Math.abs(P)&&Math.abs(I)>40&&(I>0&&n.x<=80?c(!0):c(!1))},d=_(()=>[{"no-navbar":!o.value,"no-sidebar":!h.value.length,"sidebar-open":m.value},e.value.pageClass]);let p;Q(()=>{p=J().afterEach(()=>{c(!1)})}),Se(()=>{p()});const f=Ke(),k=f.resolve,y=f.pending;return(g,I)=>(s(),v("div",{class:A(["theme-container",a(d)]),onTouchstart:r,onTouchend:u},[$(g.$slots,"navbar",{},()=>[a(o)?(s(),S(ta,{key:0,onToggleSidebar:c},{before:C(()=>[$(g.$slots,"navbar-before")]),after:C(()=>[$(g.$slots,"navbar-after")]),_:3})):T("",!0)]),b("div",{class:"sidebar-mask",onClick:I[0]||(I[0]=P=>c(!1))}),$(g.$slots,"sidebar",{},()=>[x(Ma,null,{top:C(()=>[$(g.$slots,"sidebar-top")]),bottom:C(()=>[$(g.$slots,"sidebar-bottom")]),_:3})]),$(g.$slots,"page",{},()=>[a(e).home?(s(),S(bt,{key:0})):(s(),S(Le,{key:1,name:"fade-slide-y",mode:"out-in",onBeforeEnter:a(k),onBeforeLeave:a(y)},{default:C(()=>[(s(),S(xa,{key:a(t).path},{top:C(()=>[$(g.$slots,"page-top")]),"content-top":C(()=>[$(g.$slots,"page-content-top")]),"content-bottom":C(()=>[$(g.$slots,"page-content-bottom")]),bottom:C(()=>[$(g.$slots,"page-bottom")]),_:3}))]),_:3},8,["onBeforeEnter","onBeforeLeave"]))])],34))}});var Pa=L(Ha,[["__file","Layout.vue"]]);let F=null;function Da(i,t=500,e=!1){if(F!==null&&clearTimeout(F),e){const l=!F;F=setTimeout(()=>{F=null},t),l&&typeof i=="function"&&i()}else F=setTimeout(()=>{typeof i=="function"&&i()},t)}var Ea=[{path:"/components/intro",h5:"/pages/index/index"},{path:"/components/install",h5:"/pages/index/index"},{path:"/components/quickstart",h5:"/pages/index/index"},{path:"/components/common",h5:"/pages/index/index"},{path:"/components/color",h5:"/pages/color/color"},{path:"/components/icon",h5:"/pages/icon/icon"},{path:"/components/image",h5:"/pages/image/image"},{path:"/components/cell",h5:"/pages/cell/cell"},{path:"/components/badge",h5:"/pages/badge/badge"},{path:"/components/loadingIcon",h5:"/pages/loadingIcon/loadingIcon"},{path:"/components/loadingPage",h5:"/pages/loadingPage/loadingPage"},{path:"/components/keyboard",h5:"/pages/keyboard/keyboard"},{path:"/components/countDown",h5:"/pages/countDown/countDown"},{path:"/components/countTo",h5:"/pages/countTo/countTo"},{path:"/components/popup",h5:"/pages/popup/popup"},{path:"/components/modal",h5:"/pages/modal/modal"},{path:"/components/line",h5:"/pages/line/line"},{path:"/components/overlay",h5:"/pages/overlay/overlay"},{path:"/components/skeleton",h5:"/pages/skeleton/skeleton"},{path:"/components/navbar",h5:"/pages/navbar/navbar"},{path:"/components/tabbar",h5:"/pages/tabbar/tabbar"},{path:"/components/codeInput",h5:"/pages/codeInput/codeInput"},{path:"/components/loadMore",h5:"/pages/loadMore/loadMore"},{path:"/components/transition",h5:"/pages/transition/transition"}];const Aa={class:"docs-box fixed"},Ra=["src"],za={class:"docs-box-wrap"},Oa={class:"docs-box"},Fa=["src"],Wa=w({__name:"Layout",setup(i){const t=W(),e=J(),l=B(""),o=B(null),h=`${window.location.origin}/${Ye}/h5/#`,m=B(h),c=B(!1),n=B(!1);Q(()=>{u(),window.addEventListener("resize",u,!1),window.addEventListener("orientationchange",u,!1)}),Se(()=>{window.removeEventListener("resize",u,!1),window.removeEventListener("orientationchange",u,!1)});let r=null;se(t,async d=>{var g;const p=["/components/","/api/"],f=(g=d.path)!=null?g:"";if(r===f)return;if(r=f,p.indexOf(f)!==-1){e.replace("/404");return}await te();const k=Ea.filter(I=>f.replace(".html","")===I.path),y=document.getElementById("app");k.length===1?(c.value=!0,m.value=`${h}${k[0].h5}`,await te(),u()):(c.value=!1,n.value=!1,y.className="")},{deep:!0,immediate:!0});function u(){if(!c.value)return;const d=document.getElementById("app");Da(()=>{const p=window.innerWidth,f=document.querySelector(".search-box");!f||(p<=719?f.className="search-box phone":f.className="search-box pc",p<=1024?(l.value="phone",d.className=""):(l.value="pc",d.className="pad"),n.value=!0,te(()=>{console.log(o.value),console.log(l),console.log(n),o.value.contentWindow.location.reload(!0)}))})}return(d,p)=>(s(),S(Pa,null,Xe({_:2},[l.value==="pc"&&n.value?{name:"page-content-bottom",fn:C(()=>[b("div",Aa,[b("iframe",{ref_key:"iframeId",ref:o,src:m.value},null,8,Ra)])])}:void 0,l.value==="phone"&&n.value?{name:"page-content-bottom",fn:C(()=>[b("div",za,[b("div",Oa,[b("iframe",{ref_key:"iframeId",ref:o,src:m.value},null,8,Fa)])])])}:void 0]),1024))}});var qa=L(Wa,[["__scopeId","data-v-026f23ee"],["__file","Layout.vue"]]);export{qa as default};