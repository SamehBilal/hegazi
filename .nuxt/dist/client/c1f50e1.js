(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{530:function(t,e,n){"use strict";n(19),n(37),n(31),n(76);e.a=function(){document.querySelectorAll(".swiper-pagination")&&document.querySelectorAll(".swiper-pagination").forEach((function(t){t.innerHTML=t.innerHTML.replace(" / ","")}))}},553:function(t,e,n){"use strict";e.a=function(){var t=document.getElementsByClassName("thumparallax");t&&new simpleParallax(t,{delay:1,scale:1.1})}},571:function(t,e,n){"use strict";n.r(e);n(74);var r=n(530),l=n(553),o={data:function(){return{swiperImageOptions:{speed:800,effect:"fade",spaceBetween:0,loop:!0,parallax:!0,slidesPerView:1,navigation:{prevEl:".swiper-button-prev",nextEl:".swiper-button-next"},pagination:{type:"fraction",clickable:!0,el:".swiper-pagination"}},swiperTextOptions:{speed:800,slidesPerView:1,spaceBetween:0,loop:!0,navigation:{prevEl:".controls .swiper-button-prev",nextEl:".controls .swiper-button-next"},pagination:{type:"fraction",clickable:!0,el:".controls .swiper-pagination"}}}},computed:{swiper:function(){return this.$refs.myImageSwiper.$swiper}},methods:{handleSwiperReadied:function(t){setTimeout((function(){for(var i=0;i<t.slides.length;i++){t.slides[i].childNodes[0].childNodes[0].childNodes[0].setAttribute("data-swiper-parallax",.75*t.width)}}))}},mounted:function(){Object(r.a)(),Object(l.a)()}},c=n(73),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"blog-crv sub-bg"},[n("div",{staticClass:"stories"},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-6 no-padding"},[n("swiper",{ref:"myImageSwiper",staticClass:"swiper-wrapper swiper-container swiper-img",attrs:{options:t.swiperImageOptions},on:{ready:t.handleSwiperReadied}},[n("swiper-slide",{staticClass:"swiper-slide"},[n("div",{staticClass:"item wow fadeIn",attrs:{"data-wow-delay":".3s"}},[n("div",{staticClass:"img"},[n("img",{staticClass:"thumparallax",attrs:{src:"/img/blog/1.jpg",alt:""}})])])]),t._v(" "),n("swiper-slide",{staticClass:"swiper-slide"},[n("div",{staticClass:"item wow fadeIn",attrs:{"data-wow-delay":".3s"}},[n("div",{staticClass:"img"},[n("img",{staticClass:"thumparallax",attrs:{src:"/img/blog/2.jpg",alt:""}})])])]),t._v(" "),n("swiper-slide",{staticClass:"swiper-slide"},[n("div",{staticClass:"item wow fadeIn",attrs:{"data-wow-delay":".3s"}},[n("div",{staticClass:"img"},[n("img",{staticClass:"thumparallax",attrs:{src:"/img/blog/3.jpg",alt:""}})])])])],1)],1),t._v(" "),n("div",{staticClass:"col-lg-6 no-padding valign"},[n("swiper",{staticClass:"swiper-wrapper swiper-container swiper-content",attrs:{options:t.swiperTextOptions}},[n("swiper-slide",{staticClass:"swiper-slide"},[n("div",{staticClass:"item wow fadeIn",attrs:{"data-wow-delay":".6s"}},[n("div",{staticClass:"content"},[n("div",{staticClass:"tags"},[n("NuxtLink",{attrs:{to:"#0"}},[t._v("Trending")])],1),t._v(" "),n("div",{staticClass:"info"},[n("NuxtLink",{attrs:{to:"#0"}},[n("i",{staticClass:"far fa-clock"}),t._v("\n                      06 Aug 2022\n                    ")]),t._v(" "),n("NuxtLink",{attrs:{to:"#0"}},[t._v("by Alex Morgan")])],1),t._v(" "),n("div",{staticClass:"title"},[n("h4",[n("NuxtLink",{attrs:{to:"#0"}},[t._v("\n                        Create The Lifestyle You Really Desire This World\n                      ")])],1)]),t._v(" "),n("div",{staticClass:"text"},[n("p",[t._v("\n                      Success is no accident. It is hard work, perseverance,\n                      learning, studying, sacrifice and most of all, love of\n                      what you are doing.\n                    ")])]),t._v(" "),n("div",{staticClass:"more"},[n("NuxtLink",{attrs:{to:"/blog-details/blog-details-dark"}},[t._v("\n                      Read More\n                    ")])],1)])])]),t._v(" "),n("swiper-slide",[n("div",{staticClass:"item wow fadeIn",attrs:{"data-wow-delay":".6s"}},[n("div",{staticClass:"content"},[n("div",{staticClass:"tags"},[n("NuxtLink",{attrs:{to:"#0"}},[t._v("Trending")])],1),t._v(" "),n("div",{staticClass:"info"},[n("NuxtLink",{attrs:{to:"#0"}},[n("i",{staticClass:"far fa-clock"}),t._v("\n                      06 Aug 2022\n                    ")]),t._v(" "),n("NuxtLink",{attrs:{to:"#0"}},[t._v("by Alex Morgan")])],1),t._v(" "),n("div",{staticClass:"title"},[n("h4",[n("NuxtLink",{attrs:{to:"#0"}},[t._v("\n                        List of The Best Investment Projects\n                      ")])],1)]),t._v(" "),n("div",{staticClass:"text"},[n("p",[t._v("\n                      Success is no accident. It is hard work, perseverance,\n                      learning, studying, sacrifice and most of all, love of\n                      what you are doing.\n                    ")])]),t._v(" "),n("div",{staticClass:"more"},[n("NuxtLink",{attrs:{to:"/blog-details/blog-details-dark"}},[t._v("\n                      Read More\n                    ")])],1)])])]),t._v(" "),n("swiper-slide",[n("div",{staticClass:"item wow fadeIn",attrs:{"data-wow-delay":".6s"}},[n("div",{staticClass:"content"},[n("div",{staticClass:"tags"},[n("NuxtLink",{attrs:{to:"#0"}},[t._v("Trending")])],1),t._v(" "),n("div",{staticClass:"info"},[n("NuxtLink",{attrs:{to:"#0"}},[n("i",{staticClass:"far fa-clock"}),t._v("\n                      06 Aug 2022\n                    ")]),t._v(" "),n("NuxtLink",{attrs:{to:"#0"}},[t._v("by Alex Morgan")])],1),t._v(" "),n("div",{staticClass:"title"},[n("h4",[n("NuxtLink",{attrs:{to:"#0"}},[t._v("\n                        World Best Business Website Company")])],1)]),t._v(" "),n("div",{staticClass:"text"},[n("p",[t._v("\n                      Success is no accident. It is hard work, perseverance,\n                      learning, studying, sacrifice and most of all, love of\n                      what you are doing.\n                    ")])]),t._v(" "),n("div",{staticClass:"more"},[n("NuxtLink",{attrs:{to:"/blog-details/blog-details-dark"}},[t._v("\n                      Read More\n                    ")])],1)])])])],1)],1)]),t._v(" "),n("div",{staticClass:"controls"},[n("div",{ref:"navigationNextRef",staticClass:"swiper-button-next swiper-nav-ctrl next-ctrl"},[n("i",{staticClass:"fas fa-caret-up"})]),t._v(" "),n("div",{ref:"navigationPrevRef",staticClass:"swiper-button-prev swiper-nav-ctrl prev-ctrl"},[n("i",{staticClass:"fas fa-caret-down"})]),t._v(" "),n("div",{ref:"paginationRef",staticClass:"swiper-pagination"})])])])])}),[],!1,null,"0ae676be",null);e.default=component.exports}}]);