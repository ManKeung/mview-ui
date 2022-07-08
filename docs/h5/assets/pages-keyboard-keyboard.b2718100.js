var e=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,n=(a,o,t)=>o in a?e(a,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[o]=t;import{_ as s}from"./m-common.a209cd3a.js";import{d as c,r as d,l as i,H as m,g as u,h as b,o as _,c as p,w as y,e as v,f as k,F as f,n as h,b as C,t as w,u as g,I as B,j as O,k as x,a as I,s as T,q as j}from"./index.1977e9bd.js";import{_ as S,a as z}from"./m-cell-group.3d397c86.js";import{a as D}from"./m-navbar.81e9e845.js";import{_ as A}from"./plugin-vue_export-helper.21dcd24c.js";import{_ as M}from"./m-popup.1dbb7825.js";import{g as P,a as $}from"./m-status-bar.25face9c.js";import"./m-line.55e3d554.js";import"./m-overlay.c1383db5.js";import"./m-transition.dac3ee9a.js";var L={random:{type:Boolean,default:!1},dotDisabled:{type:Boolean,default:!0},vibrate:{type:Boolean,default:!1},mode:{type:String,default:"number"}};var X=A(c({__name:"m-number-keyboard",props:L,emits:["change","backspace"],setup(e,{emit:a}){const o=e,t=d(null),l=i((()=>{let e=["1","2","3","4","5","6","7","8","9",".","X","0"];if("number"===o.mode){const a=["X"];o.dotDisabled&&a.push("."),e=e.filter((e=>-1===a.indexOf(e)))}else e=e.filter((e=>"."!==e));o.random&&(e=e.sort((()=>Math.random()>.5?-1:1))),e.push("clear");const a=[];return a[0]=e.slice(0,3),a[1]=e.slice(3,6),a[2]=e.slice(6,9),a[3]=e.slice(9),a})),r=(e="")=>{if(o.vibrate&&uni.$m.vibrate(),"clear"===e)return a("backspace"),clearInterval(t.value),void(t.value=setInterval((()=>{a("backspace")}),250));a("change",e)},n=(e="clear")=>{"clear"===e&&(clearInterval(t.value),t.value=null)};return m((()=>{n()})),(e,a)=>{const o=u(b("m-icon"),D),t=O,s=x;return _(),p(s,{class:"m-keyboard",onTouchmove:B(e.$m.noop,["stop","prevent"])},{default:y((()=>[(_(!0),v(f,null,k(g(l),((e,a)=>(_(),p(s,{key:a,class:"m-keyboard__button"},{default:y((()=>[(_(!0),v(f,null,k(e,((e,a)=>(_(),p(s,{class:h(["m-keyboard__button__inner-wrapper",{btn:"clear"===e}]),key:a},{default:y((()=>["clear"===e?(_(),p(s,{key:0,class:h(["m-keyboard__button__inner-wrapper__inner",{btn:"clear"===e}]),"hover-class":"m-hover-class","hover-stay-time":200,onTouchstart:a=>r(e),onTouchend:a=>n(e)},{default:y((()=>["clear"===e?(_(),p(o,{key:0,size:"28",name:"backspace",color:"#303133"})):(_(),p(t,{key:1,class:"m-keyboard__button__inner-wrapper__inner__text"},{default:y((()=>[C(w(e),1)])),_:2},1024))])),_:2},1032,["class","onTouchstart","onTouchend"])):(_(),p(s,{key:1,class:h(["m-keyboard__button__inner-wrapper__inner",{btn:"clear"===e}]),"hover-class":"m-hover-class","hover-stay-time":200,onClick:a=>r(e)},{default:y((()=>["clear"===e?(_(),p(o,{key:0,size:"28",name:"backspace",color:"#303133"})):(_(),p(t,{key:1,class:"m-keyboard__button__inner-wrapper__inner__text"},{default:y((()=>[C(w(e),1)])),_:2},1024))])),_:2},1032,["class","onClick"]))])),_:2},1032,["class"])))),128))])),_:2},1024)))),128))])),_:1},8,["onTouchmove"])}}}),[["__scopeId","data-v-365b0d30"]]),E={random:{type:Boolean,default:!1},vibrate:{type:Boolean,default:!1}};var F,H,N=A(c({__name:"m-english-keyboard",props:E,emits:["change","backspace"],setup(e,{emit:a}){const o=e,t=d(null),l=d(!0),r=d(!0),n=i((()=>{let e=["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"].map((e=>l.value?e.toLocaleLowerCase():e)),a=[":","'","/",">",".","?",",","<"],t=["1","2","3","4","5","6","7","8","9","0"],n=["`","!","@","#","$","%","^","&","*","(",")","-","+","=","{","}","[","]",";",'"',"~","?","|","_","-","\\"];o.random&&(e=e.sort((()=>Math.random()>.5?-1:1)),a=a.sort((()=>Math.random()>.5?-1:1)),t=t.sort((()=>Math.random()>.5?-1:1)),n=n.sort((()=>Math.random()>.5?-1:1)));const s=[];return r.value?(s[0]=e.slice(0,10),s[1]=e.slice(10,20),s[2]=["abc",...e.slice(20,26),...a.slice(0,2)],s[3]=["@123",...a.slice(2,8),"clear"]):(s[0]=t,s[1]=n.slice(0,10),s[2]=n.slice(10,20),s[3]=["abc",...n.slice(20,26),"clear"]),s})),s=i((()=>(e="")=>e?"abc"===e?l.value&&r.value?"ABC":"abc":e:"")),c=(e="")=>(o.vibrate&&uni.$m.vibrate(),r.value&&"abc"===e?l.value=!l.value:r.value||"abc"!==e?"@123"===e?r.value=!1:"clear"===e?(a("backspace"),clearInterval(t.value),void(t.value=setInterval((()=>{a("backspace")}),250))):void a("change",e):r.value=!0),I=(e="clear")=>{"clear"===e&&(clearInterval(t.value),t.value=null)};return m((()=>{I()})),(e,a)=>{const o=u(b("m-icon"),D),t=O,l=x;return _(),p(l,{class:"m-keyboard",onTouchmove:B(e.$m.noop,["stop","prevent"])},{default:y((()=>[(_(!0),v(f,null,k(g(n),((e,a)=>(_(),p(l,{key:a,class:"m-keyboard__button"},{default:y((()=>[(_(!0),v(f,null,k(e,((e,a)=>(_(),p(l,{class:h(["m-keyboard__button__inner-wrapper",{btn:-1!==["abc","@123","clear"].indexOf(e)}]),key:a},{default:y((()=>["clear"===e?(_(),p(l,{key:0,class:h(["m-keyboard__button__inner-wrapper__inner",{btn:-1!==["abc","@123","clear"].indexOf(e)}]),"hover-class":"m-hover-class","hover-stay-time":200,onTouchstart:a=>c(e),onTouchend:a=>I(e)},{default:y((()=>["clear"===e?(_(),p(o,{key:0,size:"28",name:"backspace",color:"#303133"})):(_(),p(t,{key:1,class:"m-keyboard__button__inner-wrapper__inner__text"},{default:y((()=>[C(w(g(s)(e)),1)])),_:2},1024))])),_:2},1032,["class","onTouchstart","onTouchend"])):(_(),p(l,{key:1,class:h(["m-keyboard__button__inner-wrapper__inner",{btn:-1!==["abc","@123","clear"].indexOf(e)}]),"hover-class":"m-hover-class","hover-stay-time":200,onClick:a=>c(e)},{default:y((()=>["clear"===e?(_(),p(o,{key:0,size:"28",name:"backspace",color:"#303133"})):(_(),p(t,{key:1,class:"m-keyboard__button__inner-wrapper__inner__text"},{default:y((()=>[C(w(g(s)(e)),1)])),_:2},1024))])),_:2},1032,["class","onClick"]))])),_:2},1032,["class"])))),128))])),_:2},1024)))),128))])),_:1},8,["onTouchmove"])}}}),[["__scopeId","data-v-6bc9f70b"]]),q=(F=((e,a)=>{for(var o in a||(a={}))l.call(a,o)&&n(e,o,a[o]);if(t)for(var o of t(a))r.call(a,o)&&n(e,o,a[o]);return e})({},P()),H={mode:{type:String,default:$("keyboard","mode")},dotDisabled:{type:Boolean,default:$("keyboard","dotDisabled")},tooltip:{type:Boolean,default:$("keyboard","tooltip")},showTips:{type:Boolean,default:$("keyboard","showTips")},tips:{type:String,default:$("keyboard","tips")},showCancel:{type:Boolean,default:$("keyboard","showCancel")},showConfirm:{type:Boolean,default:$("keyboard","showConfirm")},random:{type:Boolean,default:$("keyboard","random")},safeAreaInsetBottom:{type:Boolean,default:$("keyboard","safeAreaInsetBottom")},closeOnClickOverlay:{type:Boolean,default:$("keyboard","closeOnClickOverlay")},show:{type:Boolean,default:$("keyboard","show")},overlay:{type:Boolean,default:$("keyboard","overlay")},zIndex:{type:[String,Number],default:$("keyboard","zIndex")},cancelText:{type:String,default:$("keyboard","cancelText")},confirmText:{type:String,default:$("keyboard","confirmText")},vibrate:{type:Boolean,default:$("keyboard","vibrate")}},a(F,o(H)));var G=A(c({__name:"m-keyboard",props:q,emits:["change","close","confirm","cancel","backspace"],setup(e,{emit:a}){const o=e,t=(e="")=>{a("change",e)},l=()=>{a("close")},r=()=>{a("confirm")},n=()=>{a("cancel")},s=()=>{a("backspace")};return(e,a)=>{const c=O,d=x,i=u(b("m-number-keyboard"),X),m=u(b("m-english-keyboard"),N),v=u(b("m-popup"),M);return _(),p(v,{mode:"bottom",overlay:o.overlay,closeOnClickOverlay:o.closeOnClickOverlay,popup:!1,show:o.show,safeAreaInsetBottom:o.safeAreaInsetBottom,onClose:l,zIndex:o.zIndex,customStyle:{backgroundColor:"rgb(214, 218, 220)"}},{default:y((()=>[I(d,{class:"m-keyboard"},{default:y((()=>[T(e.$slots,"default",{},void 0,!0),o.tooltip?(_(),p(d,{key:0,class:"m-keyboard__tooltip"},{default:y((()=>[I(d,{"hover-class":"m-hover-class","hover-stay-time":200},{default:y((()=>[o.showCancel?(_(),p(c,{key:0,class:"m-keyboard__tooltip__item m-keyboard__tooltip__cancel",onClick:n},{default:y((()=>[C(w(o.showCancel&&o.cancelText),1)])),_:1})):j("",!0)])),_:1}),o.showTips?(_(),p(d,{key:0,class:"m-keyboard__tooltip__item m-keyboard__tooltip__tips"},{default:y((()=>[C(w(o.tips?o.tips:"number"==o.mode?"数字键盘":"card"==e.mode?"身份证键盘":"英文键盘"),1)])),_:1})):j("",!0),I(d,{"hover-class":"m-hover-class","hover-stay-time":100},{default:y((()=>[o.showConfirm?(_(),p(c,{key:0,class:"m-keyboard__tooltip__item m-keyboard__tooltip__submit","hover-class":"m-hover-class",onClick:r},{default:y((()=>[C(w(o.showConfirm&&o.confirmText),1)])),_:1})):j("",!0)])),_:1})])),_:1})):j("",!0),"number"===o.mode||"card"===o.mode?(_(),p(i,{key:1,random:o.random,mode:o.mode,dotDisabled:o.dotDisabled,vibrate:o.vibrate,onChange:t,onBackspace:s},null,8,["random","mode","dotDisabled","vibrate"])):(_(),p(m,{key:2,random:o.random,mode:o.mode,vibrate:o.vibrate,onChange:t,onBackspace:s},null,8,["random","mode","vibrate"]))])),_:3})])),_:3},8,["overlay","closeOnClickOverlay","show","safeAreaInsetBottom","zIndex","customStyle"])}}}),[["__scopeId","data-v-78414694"]]);const J=c({__name:"keyboard",setup(e){const a=d(!1),o=d(""),t=d(!1),l=d(!1),r=d(""),n=e=>{r.value="",a.value=!0,o.value={0:"",1:"number",2:"card",3:"number",4:""}[e],t.value=3===e,l.value=4===e},c=e=>{r.value+=e,console.log(r.value)},i=()=>{r.value.length&&(r.value=r.value.substr(0,r.value.length-1)),console.log(r.value)};return(e,r)=>{const d=u(b("m-common"),s),m=u(b("m-cell"),S),v=u(b("m-cell-group"),z),k=u(b("m-keyboard"),G),f=x;return _(),p(f,null,{default:y((()=>[I(d,{title:"键盘"}),I(v,{border:""},{default:y((()=>[I(m,{title:"基本使用","is-link":"",onClick:r[0]||(r[0]=e=>n(0))}),I(m,{title:"数字键盘","is-link":"",onClick:r[1]||(r[1]=e=>n(1))}),I(m,{title:"身份证键盘","is-link":"",onClick:r[2]||(r[2]=e=>n(2))}),I(m,{title:"隐藏键盘'.'符号","is-link":"",onClick:r[3]||(r[3]=e=>n(3))}),I(m,{title:"打乱键盘顺序","is-link":"",onClick:r[4]||(r[4]=e=>n(4))})])),_:1}),I(k,{show:a.value,mode:o.value,random:l.value,"dot-disabled":t.value,onClose:r[5]||(r[5]=e=>a.value=!1),onCancel:r[6]||(r[6]=e=>a.value=!1),onConfirm:r[7]||(r[7]=e=>a.value=!1),onChange:c,onBackspace:i},null,8,["show","mode","random","dot-disabled"])])),_:1})}}});export{J as default};
//# sourceMappingURL=pages-keyboard-keyboard.b2718100.js.map