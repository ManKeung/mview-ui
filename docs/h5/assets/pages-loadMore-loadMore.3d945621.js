var o=Object.defineProperty,e=Object.defineProperties,t=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,n=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;import{_ as i}from"./m-common.a209cd3a.js";import{d as s,l as m,g as d,h as c,o as u,c as g,w as p,q as f,a as _,n as y,m as b,u as x,b as S,t as h,k as j,j as T}from"./index.1977e9bd.js";import{_ as v}from"./m-line.55e3d554.js";import{_ as z}from"./m-loading-icon.5831534a.js";import{g as C,a as k}from"./m-status-bar.25face9c.js";import{_ as B}from"./plugin-vue_export-helper.21dcd24c.js";import"./m-navbar.81e9e845.js";var O,w,E=(O=((o,e)=>{for(var t in e||(e={}))r.call(e,t)&&n(o,t,e[t]);if(a)for(var t of a(e))l.call(e,t)&&n(o,t,e[t]);return o})({},C()),w={status:{type:String,default:k("loadmore","status")},bgColor:{type:String,default:k("loadmore","bgColor")},icon:{type:Boolean,default:k("loadmore","icon")},fontSize:{type:[String,Number],default:k("loadmore","fontSize")},color:{type:String,default:k("loadmore","color")},loadingIcon:{type:String,default:k("loadmore","loadingIcon")},loadmoreText:{type:String,default:k("loadmore","loadmoreText")},loadingText:{type:String,default:k("loadmore","loadingText")},nomoreText:{type:String,default:k("loadmore","nomoreText")},isDot:{type:Boolean,default:k("loadmore","isDot")},iconColor:{type:String,default:k("loadmore","iconColor")},iconSize:{type:String,default:k("loadmore","iconSize")},marginTop:{type:[String,Number],default:k("loadmore","marginTop")},marginBottom:{type:[String,Number],default:k("loadmore","marginBottom")},height:{type:[String,Number],default:k("loadmore","height")},line:{type:Boolean,default:k("loadmore","line")}},e(O,t(w)));var I=B(s({__name:"m-loadmore",props:E,emits:["loadmore"],setup(o,{emit:e}){const t=o,a=m((()=>uni.$m.addStyle({backgroundColor:t.bgColor,marginBottom:uni.$m.addUnit(t.marginBottom),marginTop:uni.$m.addUnit(t.marginTop),height:uni.$m.addUnit(t.height)}))),r=m((()=>({color:t.color,fontSize:uni.$m.addUnit(t.fontSize),lineHeight:uni.$m.addUnit(t.fontSize),backgroundColor:t.bgColor}))),l=m((()=>{let o="";switch(t.status){case"loadmore":o=t.loadmoreText;break;case"loading":o=t.loadingText;break;case"nomore":o=t.isDot?"●":t.nomoreText}return o})),n=()=>{"loadmore"===t.status&&e("loadmore")};return(o,e)=>{const i=d(c("m-line"),v),s=d(c("m-loading-icon"),z),m=j,C=T;return u(),g(m,{class:"m-loadmore",style:b(x(a))},{default:p((()=>[t.line?(u(),g(i,{key:0,length:"140rpx",color:"#E6E8EB",hairline:!1})):f("",!0),_(m,{class:y(["loadmore"==t.status||"nomore"==t.status?"m-more":"","m-loadmore__content"])},{default:p((()=>["loading"===t.status&&t.icon?(u(),g(m,{key:0,class:"m-loadmore__content__icon-wrap"},{default:p((()=>[_(s,{color:t.iconColor,size:t.iconSize,mode:t.loadingIcon},null,8,["color","size","mode"])])),_:1})):f("",!0),_(C,{class:y(["m-line-1",["nomore"==t.status&&1==t.isDot?"m-loadmore__content__dot-text":"m-loadmore__content__text"]]),style:b([x(r)]),onClick:n},{default:p((()=>[S(h(x(l)),1)])),_:1},8,["style","class"])])),_:1},8,["class"]),t.line?(u(),g(i,{key:1,length:"140rpx",color:"#E6E8EB",hairline:!1})):f("",!0)])),_:1},8,["style"])}}}),[["__scopeId","data-v-a706c06c"]]);var $=B({data:()=>({}),methods:{}},[["render",function(o,e,t,a,r,l){const n=d(c("m-common"),i),s=j,m=d(c("m-loadmore"),I);return u(),g(s,{class:"page"},{default:p((()=>[_(n,{title:"加载更多"}),_(s,{class:"txt"},{default:p((()=>[S(" 基本使用 ")])),_:1}),_(m,{status:"loadmore"}),_(s,{class:"txt"},{default:p((()=>[S(" 加载中 ")])),_:1}),_(m,{status:"loading",line:""}),_(s,{class:"txt"},{default:p((()=>[S(" 没有更多 ")])),_:1}),_(m,{status:"nomore",line:""}),_(s,{class:"txt"},{default:p((()=>[S(" 自定义图标 ")])),_:1}),_(m,{status:"loading","loading-icon":"circle",line:""}),_(s,{class:"txt"},{default:p((()=>[S(" 显示点 ")])),_:1}),_(m,{status:"nomore","is-dot":"",line:""}),_(s,{class:"txt"},{default:p((()=>[S(" 自定义提示语 ")])),_:1}),_(m,{status:"nomore",line:"","nomore-text":"数据空空~"})])),_:1})}],["__scopeId","data-v-1ca28734"]]);export{$ as default};
//# sourceMappingURL=pages-loadMore-loadMore.3d945621.js.map