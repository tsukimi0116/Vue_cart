import{r as b,o as l,c as u,a as t,b as c,w as p,d as _,e as m,u as L,R as C,F as g,f as S,t as v,g as k,h as x,i as R}from"./vendor.9b34574c.js";const w=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const e of r.addedNodes)e.tagName==="LINK"&&e.rel==="modulepreload"&&o(e)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}};w();var d=(i,a)=>{const n=i.__vccOpts||i;for(const[o,s]of a)n[o]=s;return n};const j={},O={class:"navbar"},N=t("p",{class:"logo"},"Vue Home",-1),U={class:"nav-title"},E=_("Home"),P=_("Shop"),I=_("About"),V=_("Blog"),B=_("Contact"),T=_("Element"),A={class:"nav-icon"},F=t("i",{class:"fas fa-shopping-cart"},null,-1),H=t("i",{class:"fa-solid fa-magnifying-glass"},null,-1),q=t("div",{class:"nav-show"},[t("i",{class:"fa-solid fa-bars"}),t("div",{class:"nav-showshow"},[t("p",null,"Cart List"),t("p",null,"Home"),t("p",null,"Shop"),t("p",null,"About"),t("p",null,"Blog"),t("p",null,"Contact"),t("p",null,"Element")])],-1);function M(i,a,n,o,s,r){const e=b("router-link");return l(),u("nav",O,[N,t("ul",U,[t("li",null,[c(e,{to:"/"},{default:p(()=>[E]),_:1})]),t("li",null,[c(e,{to:"/cart"},{default:p(()=>[P]),_:1})]),t("li",null,[c(e,{to:""},{default:p(()=>[I]),_:1})]),t("li",null,[c(e,{to:""},{default:p(()=>[V]),_:1})]),t("li",null,[c(e,{to:""},{default:p(()=>[B]),_:1})]),t("li",null,[c(e,{to:""},{default:p(()=>[T]),_:1})])]),t("ul",A,[t("li",null,[c(e,{to:"/cart"},{default:p(()=>[F]),_:1})]),t("li",null,[c(e,{to:"/cart"},{default:p(()=>[H]),_:1})])]),q])}var G=d(j,[["render",M]]);const J={},W=m('<section class="Footer"><div class="company"><h1>Ethan Ho</h1><p>Ethan Ho is a handsome man and very smart. If you want to buy something. Maybe you can call him.</p><i class="fa-brands fa-facebook"></i><i class="fa-brands fa-twitter"></i><i class="fa-brands fa-instagram"></i></div><div class="Contact"><h1>Contact us</h1><p><i class="fa-solid fa-location-dot"></i> 408\u53F0\u4E2D\u5E02\u5357\u5C6F\u5340\u516C\u76CA\u8DEF\u4E8C\u6BB551\u865F18\u6A13 </p><p><i class="fa-solid fa-phone"></i> +886 901318763 </p><p><i class="fa-regular fa-envelope"></i> yuting870116@gmail.com </p></div><div class="People"><h1>People</h1><p>My Account</p><p>Help</p><p>Support</p><p>FAQ</p></div></section><div class="TheLast"><span><i class="fa-regular fa-copyright"></i>2022 Ethan Ho All Rignt Reserved</span></div>',2);function z(i,a){return W}var D=d(J,[["render",z]]);const K={setup(i){return(a,n)=>(l(),u(g,null,[c(G),c(L(C)),c(D)],64))}},Q="modulepreload",y={},X="/cart_vue/",Y=function(a,n){return!n||n.length===0?a():Promise.all(n.map(o=>{if(o=`${X}${o}`,o in y)return;y[o]=!0;const s=o.endsWith(".css"),r=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${r}`))return;const e=document.createElement("link");if(e.rel=s?"stylesheet":Q,s||(e.as="script",e.crossOrigin=""),e.href=o,document.head.appendChild(e),s)return new Promise((h,f)=>{e.addEventListener("load",h),e.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>a())};var Z="/cart_vue/assets/sofa.784f0b8d.jpeg";const tt={},et={class:"container"},st=t("div",{class:"container_intro"},[t("h1",null,"Comfortable Sofa with Great Comfort"),t("span",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ")],-1),at=t("div",{class:"container_photo"},[t("img",{src:Z,alt:""})],-1),rt=[st,at];function ot(i,a){return l(),u("section",et,rt)}var it=d(tt,[["render",ot]]),nt="/cart_vue/assets/sofa5.dd8fd10b.jpg",ct="/cart_vue/assets/chair.1be18e36.jpg",lt="/cart_vue/assets/light.505954c4.jpg",ut="/cart_vue/assets/ele.659c4eab.jpg";const pt={},_t={class:"TopCategory"},dt=m('<div class="TopCategory_title"><h1>Top Category</h1></div><div class="TopCategory_photo"><img src="'+nt+'"><img src="'+ct+'"><img src="'+lt+'"><img src="'+ut+'"></div>',2),ht=[dt];function ft(i,a){return l(),u("section",_t,ht)}var mt=d(pt,[["render",ft]]);const gt={name:"flexbox",data(){return{cartlist:[],info:[{imgURL:"/src/assets/p01.jpg",title:"Ernest Gimson",price:2400},{imgURL:"/src/assets/p02.jpg",title:"Barcelona Chair",price:7159},{imgURL:"/src/assets/p03.jpg",title:"Lounge Chair",price:3712},{imgURL:"/src/assets/p04.jpg",title:"Bamboo Sofa",price:1800},{imgURL:"/src/assets/p05.jpg",title:"Cordless Table Lamp",price:3939},{imgURL:"/src/assets/p06.jpg",title:"Annika Table Lamp",price:5076},{imgURL:"/src/assets/sofa5.jpg",title:"Customizable Sofa",price:7900},{imgURL:"/src/assets/p07.jpg",title:"Bespoke Organic Sofa",price:12401},{imgURL:"/src/assets/p08.jpg",title:"White Velvet Sofa",price:3e4},{imgURL:"/src/assets/p09.jpg",title:"Brass Chandelier",price:5602},{imgURL:"/src/assets/p10.jpg",title:"Frozen Blown Glass",price:6454},{imgURL:"/src/assets/p11.jpg",title:"Fluff Lounge Chair",price:5500}]}},methods:{btnClick:function(i){localStorage.getItem("cartlist")!==""&&(this.cartlist=JSON.parse(localStorage.getItem("cartlist")));var a=i.path[1].attributes.name.value,n=parseInt(i.path[1].attributes.price.value),o=i.path[1].attributes.url.value,s=1,r=n*s;for(var e in this.cartlist)if(this.cartlist[e].nameValue==a){this.cartlist[e].quantity++,this.cartlist[e].tot=this.cartlist[e].quantity*this.cartlist[e].priceValue,localStorage.setItem("cartlist",JSON.stringify(this.cartlist));return}this.cartlist.value=this.cartlist.push({nameValue:a,priceValue:n,urlValue:o,quantity:s,tot:r}),localStorage.setItem("cartlist",JSON.stringify(this.cartlist))}},mounted(){localStorage.getItem("cartlist")||(localStorage.setItem("cartlist",[]),this.cartlist=[])}},vt={class:"OurProduct"},yt=t("div",{class:"OurProduct_title"},[t("h1",null,"Our product")],-1),$t={class:"OurProduct_flex"},bt=["name","price","url"],Lt=["src"],Ct=t("div",{class:"Load_Btn"},[t("button",null," Load More ")],-1);function St(i,a,n,o,s,r){return l(),u("section",vt,[yt,t("div",$t,[(l(!0),u(g,null,S(s.info,(e,h)=>(l(),u("div",{key:h,name:e.title,price:e.price,url:e.imgURL,class:"OurProduct_div",id:"flexbox"},[t("img",{src:e.imgURL},null,8,Lt),t("button",{onClick:a[0]||(a[0]=(...f)=>r.btnClick&&r.btnClick(...f))},"+"),t("p",null,v(e.title),1),t("p",null,"$"+v(e.price),1)],8,bt))),128))]),Ct])}var kt=d(gt,[["render",St]]);const xt={},Rt={class:"LatestNews"},wt=m('<div class="LatestNews_title"><h1>Latest News</h1></div><div class="LatestNews_photo"><img src="https://fakeimg.pl/300x210/"><img src="https://fakeimg.pl/300x210/"><img src="https://fakeimg.pl/300x210/"></div>',2),jt=[wt];function Ot(i,a){return l(),u("section",Rt,jt)}var Nt=d(xt,[["render",Ot]]);const Ut={setup(i){return(a,n)=>(l(),u(g,null,[c(it),c(mt),c(kt),c(Nt)],64))}},Et=k({history:x("/cart_vue/"),routes:[{path:"/",name:"home",component:Ut},{path:"/cart",name:"cart",component:()=>Y(()=>import("./Cart.9eea2da2.js"),["assets/Cart.9eea2da2.js","assets/vendor.9b34574c.js"])}]});const $=R(K);$.use(Et);$.mount("#app");export{d as _};
