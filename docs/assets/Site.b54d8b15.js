import{G as r}from"./conf.242ea4f8.js";import{_,f as g,o as s,c as o,F as x,l as m,b as n,t as u}from"./app.2850d4fd.js";const v={class:"site-box"},f=["href"],b=["src"],h=["textContent"],y=g({__name:"Site",props:{list:{type:Array,default:()=>[]}},setup(c){const i=e=>e?e.indexOf("/")===0?e.replace("/",`/${r}/`):e:`/${r}/assets/icon_site.png`,d=e=>{const t=`/${r}/assets/icon_site.png`;e.target.src=t};return(e,t)=>(s(),o("div",v,[(s(!0),o(x,null,m(c.list,(a,p)=>(s(),o("a",{href:a.url,target:"_blank",key:p},[n("img",{src:i(a.img),alt:"",onError:t[0]||(t[0]=l=>d(l))},null,40,b),n("p",{textContent:u(a.name)},null,8,h)],8,f))),128))]))}});var E=_(y,[["__scopeId","data-v-7ccca292"],["__file","Site.vue"]]);export{E as default};