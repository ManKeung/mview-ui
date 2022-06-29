import{_ as t}from"./m-common.ee96b85b.js";import{d as e,r as a,x as s,l as i,y as n,o as r,c as l,w as o,q as p,n as d,m,p as u,a as _,e as h,f as w,F as c,s as g,A as f,k as y,b as $,g as k,h as v}from"./index.497973e8.js";import{_ as x}from"./plugin-vue_export-helper.21dcd24c.js";import"./m-navbar.8365f9ea.js";import"./m-icon.1f5d0484.js";var b=x(e({props:{loading:{type:Boolean,default:uni.$m.props.skeleton.loading},animate:{type:Boolean,default:uni.$m.props.skeleton.animate},rows:{type:[String,Number],default:uni.$m.props.skeleton.rows},rowsWidth:{type:[String,Number,Array],default:uni.$m.props.skeleton.rowsWidth},rowsHeight:{type:[String,Number,Array],default:uni.$m.props.skeleton.rowsHeight},title:{type:Boolean,default:uni.$m.props.skeleton.title},titleWidth:{type:[String,Number],default:uni.$m.props.skeleton.titleWidth},titleHeight:{type:[String,Number],default:uni.$m.props.skeleton.titleHeight},avatar:{type:Boolean,default:uni.$m.props.skeleton.avatar},avatarSize:{type:[String,Number],default:uni.$m.props.skeleton.avatarSize},avatarShape:{type:String,default:uni.$m.props.skeleton.avatarShape}},setup(t){const e=t,$=a(0),k=f();s((()=>{!async function(){await uni.$m.sleep(20),n().in(k).select(".m-skeleton__wrapper__content").boundingClientRect((t=>{$.value=t.width})).exec()}()}));const v=i((()=>({height:uni.$m.addUnit(e.avatarSize),width:uni.$m.addUnit(e.avatarSize)}))),x=i((()=>{let t=0;return t=/%$/.test(e.titleWidth)?uni.$m.addUnit($.value*parseInt(e.titleWidth)/100):uni.$m.addUnit(e.titleWidth),{width:uni.$m.addUnit(t),height:uni.$m.addUnit(e.titleHeight)}})),b=i((()=>t=>({width:t.width,height:t.height,marginTop:t.marginTop}))),S=i((()=>{/%$/.test(e.rowsHeight)&&console.error("rowsHeight参数不支持百分比单位");const t=[];let a="";uni.$m.test.string(e.rowsWidth)&&(a=e.rowsWidth.replace(/[0-9]/g,"")),a||(a="px");for(let s=0;s<e.rows;s++){let i={},n=uni.$m.test.array(e.rowsWidth)?e.rowsWidth[s]||(s===e.row-1?"70%":"100%"):s===e.rows-1?.7*Number.parseFloat(e.rowsWidth)+a:e.rowsWidth,r=uni.$m.test.array(e.rowsHeight)?e.rowsHeight[s]||"18px":e.rowsHeight;i.marginTop=e.title||0!==s?e.title&&0===s?"20px":"12px":0,/%$/.test(n)?i.width=uni.$m.addUnit($.value*Number.parseInt(n)/100):i.width=uni.$m.addUnit(n),i.height=uni.$m.addUnit(r),t.push(i)}return t}));return(t,a)=>{const s=y;return r(),l(s,{class:"m-skeleton"},{default:o((()=>[e.loading?(r(),l(s,{key:0,class:"m-skeleton__wrapper",style:{display:"flex","flex-direction":"row"}},{default:o((()=>[e.avatar?(r(),l(s,{key:0,class:p(["m-skeleton__wrapper__avatar",[`m-skeleton__wrapper__avatar--${e.avatarShape}`,e.animate&&"animate"]]),style:d(m(v))},null,8,["class","style"])):u("",!0),_(s,{class:"m-skeleton__wrapper__content",ref:"m-skeleton__wrapper__content",style:{flex:"1"}},{default:o((()=>[e.title?(r(),l(s,{key:0,class:p(["m-skeleton__wrapper__content__title",[e.animate&&"animate"]]),style:d(m(x))},null,8,["style","class"])):u("",!0),(r(!0),h(c,null,w(m(S),((t,a)=>(r(),l(s,{class:p(["m-skeleton__wrapper__content__rows",[e.animate&&"animate"]]),key:a,style:d(m(b)(t))},null,8,["class","style"])))),128))])),_:1},512)])),_:1})):g(t.$slots,"default",{key:1},void 0,!0)])),_:3})}}}),[["__scopeId","data-v-0d185270"]]);var S=x({data:()=>({}),methods:{}},[["render",function(e,a,s,i,n,p){const d=k(v("m-common"),t),m=y,u=k(v("m-skeleton"),b);return r(),l(m,{class:"page"},{default:o((()=>[_(d,{title:"骨架屏"}),_(m,{class:"txt"},{default:o((()=>[$(" 基本使用 ")])),_:1}),_(u,{loading:"",title:"",animate:!1,rows:"3"}),_(m,{class:"txt"},{default:o((()=>[$(" 不使用动画 ")])),_:1}),_(u,{loading:"",animate:!1}),_(m,{class:"txt"},{default:o((()=>[$(" 显示头像 ")])),_:1}),_(u,{loading:"",avatar:"",rows:"2"})])),_:1})}],["__scopeId","data-v-305aa1ba"]]);export{S as default};
//# sourceMappingURL=pages-skeleton-skeleton.6b6944b1.js.map