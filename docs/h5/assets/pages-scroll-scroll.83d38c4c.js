import{d as e,r as a,x as l,y as u,l as s,o as t,c as o,w as n,a as v,e as c,f as h,F as i,n as p,m as g,k as r,b as d,t as x}from"./index.497973e8.js";import{_ as $}from"./plugin-vue_export-helper.21dcd24c.js";var f=$(e({setup(e){const $=a(!1),f=a(0),y=a(0),m=a(4),b=a({x:0,y:0}),T=a(0),_=a(0);l((()=>{u().select(".page").boundingClientRect((e=>{if(!e)return;const{width:a=0,height:l=0}=e;f.value=a,y.value=l})).exec()}));const w=s((()=>({width:`${f.value}px`,height:y.value*m.value+"px",top:`${T.value}px`,transition:$.value?"none":"top 0.5s ease-in-out"}))),M=s((()=>({width:`${f.value}px`,height:`${y.value}px`}))),X=e=>{const{changedTouches:a=[]}=e;if(!a.length||2===a.length)return;const{pageX:l=0,pageY:u=0}=a[0];_.value=T.value,$.value=!0,b.value={x:l,y:u},uni.$log({tip:"手指开始触摸位置",msg:`(${l}, ${u})`})},Y=e=>{if(!$.value)return;const{changedTouches:a=[]}=e,{pageX:l=0,pageY:u=0}=a[0];uni.$log({tip:"手指移动位置",msg:`(${l}, ${u}) (${b.value.x}, ${b.value.y})`});const s=l-b.value.x,t=u-b.value.y;T.value=t>0?_.value+Math.abs(t):_.value-Math.abs(t),console.log(s)},j=e=>{if(!$.value)return;const{changedTouches:a=[]}=e,{pageX:l=0,pageY:u=0}=a[0],s=l-b.value.x,t=u-b.value.y;$.value=!1,t>0?Math.abs(t)>100&&0!==_.value?T.value=_.value+y.value:T.value=_.value:Math.abs(t)>100?T.value=_.value-y.value:T.value=_.value,console.log(s)};return(e,a)=>{const l=r;return t(),o(l,{id:"el",class:"page",onTouchstart:X,onTouchmove:Y,onTouchend:j,onTouchcancel:j},{default:n((()=>[v(l,{class:"box",style:p(g(w))},{default:n((()=>[(t(!0),c(i,null,h(m.value,(e=>(t(),o(l,{key:e,class:"item",style:p(g(M))},{default:n((()=>[d(x(e)+" "+x(g(w)),1)])),_:2},1032,["style"])))),128))])),_:1},8,["style"])])),_:1})}}}),[["__scopeId","data-v-c43c1204"]]);export{f as default};
//# sourceMappingURL=pages-scroll-scroll.83d38c4c.js.map