(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{530:function(t,e,n){"use strict";n(19),n(37),n(31),n(76);e.a=function(){document.querySelectorAll(".swiper-pagination")&&document.querySelectorAll(".swiper-pagination").forEach((function(t){t.innerHTML=t.innerHTML.replace(" / ","")}))}},536:function(t,e,n){"use strict";n(19),n(37);e.a=function(element){window.addEventListener("scroll",(function(){var t=window.pageYOffset;element&&element.forEach((function(e){e.style.transform="translate3d(0, "+-.2*t+"px, 0)",e.style.opacity=1-t/600}))}))}},588:function(t){t.exports=JSON.parse('[{"id":1,"image":"/img/arch/slid/3.jpg","title":"FLOATING HOUSE MESSINIA","date":"14 Sep 2022"},{"id":2,"image":"/img/arch/slid/2.jpg","title":"IN THE PINE FOREST","date":"14 Sep 2022"},{"id":3,"image":"/img/arch/slid/1.jpg","title":"BUGANVILLA HOUSE","date":"14 Sep 2022"}]')},622:function(t,e,n){"use strict";n.r(e);var r=n(588),c=n(530),o=n(536),l={props:["sliderRef"],data:function(){return{caseStudyData:r,swiperOptions:{speed:1e3,effect:"fade",navigation:{prevEl:".controls .swiper-button-prev",nextEl:".controls .swiper-button-next"}}}},computed:{swiper:function(){return this.$refs.mySwiper.$swiper}},mounted:function(){Object(c.a)(),Object(o.a)(document.querySelectorAll(".fixed-slider .caption"))}},d=n(73),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"case-study"},[n("div",{staticClass:"swiper-container",attrs:{id:"content-carousel-container-unq-1","data-swiper":"container"}},[n("swiper",{ref:"mySwiper",staticClass:"swiper-wrapper",attrs:{options:t.swiperOptions}},t._l(t.caseStudyData,(function(e){return n("swiper-slide",{key:e.id,staticClass:"swiper-slide bg-img",style:"background-image: url("+e.image+") ",attrs:{"data-overlay-dark":"7"}},[n("div",{staticClass:"container d-flex align-items-end"},[n("div",{staticClass:"cont"},[n("NuxtLink",{attrs:{to:"#"}},[n("span",[t._v("Case Study")]),t._v(" "),n("h6",{staticClass:"main-color"},[t._v(t._s(e.date))]),t._v(" "),n("h4",[t._v(t._s(e.title))])])],1)])])})),1),t._v(" "),n("div",{staticClass:"controls"},[n("div",{ref:"navigationNextRef",staticClass:"swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"},[n("i",{staticClass:"fas fa-chevron-right"})]),t._v(" "),n("div",{ref:"navigationPrevRef",staticClass:"swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"},[n("i",{staticClass:"fas fa-chevron-left"})])])],1)])}),[],!1,null,"6763a43f",null);e.default=component.exports}}]);