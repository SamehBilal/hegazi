(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{535:function(t,e,r){"use strict";r(19),r(37);e.a=function(){var t,e=document.querySelectorAll(".gallery");e.length>=1&&e.forEach((function(e){t=new Isotope(e,{itemSelector:".items"})}));var r=document.querySelectorAll(".gallery-mons");r.length>=1&&r.forEach((function(e){t=new Isotope(e,{itemSelector:".items",masonry:{columnWidth:".width2"}})}));var o=document.querySelector(".filtering");if(o){var l=function(t){t.addEventListener("click",(function(e){matchesSelector(e.target,"span")&&(t.querySelector(".active").classList.remove("active"),e.target.classList.add("active"))}))};o.addEventListener("click",(function(e){if(matchesSelector(e.target,"span")){var r=e.target.getAttribute("data-filter");t.arrange({filter:r})}}));for(var c=document.querySelectorAll(".filtering"),i=0,n=c.length;i<n;i++){l(c[i])}}}},573:function(t,e,r){"use strict";r.r(e);r(74);var o=r(535),l={props:["grid","filterPosition","hideFilter"],mounted:function(){setTimeout((function(){Object(o.a)()}),1e3)}},c=r(73),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{class:(t.grid&&3===t.grid?"three-column":null)+" portfolio section-padding pb-70"},[t.hideFilter?t._e():r("div",{staticClass:"container"},[t._m(0)]),t._v(" "),r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[t.hideFilter?t._e():r("div",{class:"filtering "+("center"===t.filterPosition?"text-center":"left"===t.filterPosition?"text-left":"text-right")+" col-12"},[t._m(1)]),t._v(" "),r("div",{staticClass:"gallery full-width"},[r("div",{class:(3===t.grid?"col-lg-4 col-md-6":2===t.grid?"col-md-6":"col-12")+" items graphic wow fadeInUp",attrs:{"data-wow-delay":".4s"}},[r("div",{staticClass:"item-img"},[r("NuxtLink",{staticClass:"imago wow",attrs:{to:"/project-details2/project-details2-dark"}},[r("img",{attrs:{src:"/img/portfolio/portfolio/1/1.jpg",alt:"image"}}),t._v(" "),r("div",{staticClass:"item-img-overlay"})])],1),t._v(" "),t._m(2)]),t._v(" "),r("div",{class:(3===t.grid?"col-lg-4 col-md-6":2===t.grid?"col-md-6":"col-12")+" items web wow fadeInUp",attrs:{"data-wow-delay":".4s"}},[r("div",{staticClass:"item-img"},[r("NuxtLink",{staticClass:"imago wow",attrs:{to:"/project-details2/project-details2-dark"}},[r("img",{attrs:{src:"/img/portfolio/portfolio/1/2.jpg",alt:"image"}}),t._v(" "),r("div",{staticClass:"item-img-overlay"})])],1),t._v(" "),t._m(3)]),t._v(" "),r("div",{class:(3===t.grid?"col-lg-4 col-md-6":2===t.grid?"col-md-6":"col-12")+" items brand wow fadeInUp",attrs:{"data-wow-delay":".4s"}},[r("div",{staticClass:"item-img"},[r("NuxtLink",{staticClass:"imago wow",attrs:{to:"/project-details2/project-details2-dark"}},[r("img",{attrs:{src:"/img/portfolio/portfolio/1/3.jpg",alt:"image"}}),t._v(" "),r("div",{staticClass:"item-img-overlay"})])],1),t._v(" "),t._m(4)]),t._v(" "),r("div",{class:(3===t.grid?"col-lg-4 col-md-6":2===t.grid?"col-md-6":"col-12")+" items graphic wow fadeInUp",attrs:{"data-wow-delay":".4s"}},[r("div",{staticClass:"item-img"},[r("NuxtLink",{staticClass:"imago wow",attrs:{to:"/project-details2/project-details2-dark"}},[r("img",{attrs:{src:"/img/portfolio/portfolio/1/4.jpg",alt:"image"}}),t._v(" "),r("div",{staticClass:"item-img-overlay"})])],1),t._v(" "),t._m(5)]),t._v(" "),r("div",{class:(3===t.grid?"col-lg-4 col-md-6":2===t.grid?"col-md-6":"col-12")+" items web wow fadeInUp",attrs:{"data-wow-delay":".4s"}},[r("div",{staticClass:"item-img"},[r("NuxtLink",{staticClass:"imago wow",attrs:{to:"/project-details2/project-details2-dark"}},[r("img",{attrs:{src:"/img/portfolio/portfolio/1/5.jpg",alt:"image"}}),t._v(" "),r("div",{staticClass:"item-img-overlay"})])],1),t._v(" "),t._m(6)]),t._v(" "),r("div",{class:(3===t.grid?"col-lg-4 col-md-6":2===t.grid?"col-md-6":"col-12")+" items brand wow fadeInUp",attrs:{"data-wow-delay":".4s"}},[r("div",{staticClass:"item-img"},[r("NuxtLink",{staticClass:"imago wow",attrs:{to:"/project-details2/project-details2-dark"}},[r("img",{attrs:{src:"/img/portfolio/portfolio/1/6.jpg",alt:"image"}}),t._v(" "),r("div",{staticClass:"item-img-overlay"})])],1),t._v(" "),t._m(7)])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-lg-8 col-md-10"},[r("div",{staticClass:"sec-head text-center"},[r("h6",{staticClass:"wow fadeIn",attrs:{"data-wow-delay":".5s"}},[t._v("Portfolio")]),t._v(" "),r("h3",{staticClass:"wow color-font"},[t._v("\n            My Recent Work & "),r("br"),t._v("\n            Some Past Projects.\n          ")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"filter"},[r("span",{staticClass:"active",attrs:{"data-filter":"*"}},[t._v(" All ")]),t._v(" "),r("span",{attrs:{"data-filter":".designs"}},[t._v("Graphic Designs")]),t._v(" "),r("span",{attrs:{"data-filter":".motion"}},[t._v("Motion Graphics")]),t._v(" "),r("span",{attrs:{"data-filter":".video"}},[t._v("Videography & Video Editing")]),t._v(" "),r("span",{attrs:{"data-filter":".Photography"}},[t._v("Photography")]),t._v(" "),r("span",{attrs:{"data-filter":".live"}},[t._v("Live Streams")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"cont"},[r("h6",[t._v("Creativity Demand")]),t._v(" "),r("span",[r("a",{attrs:{href:"#0"}},[t._v("Design")]),t._v(", "),r("a",{attrs:{href:"#0"}},[t._v("WordPress")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"cont"},[r("h6",[t._v("Through The Breaking")]),t._v(" "),r("span",[r("a",{attrs:{href:"#0"}},[t._v("Design")]),t._v(", "),r("a",{attrs:{href:"#0"}},[t._v("WordPress")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"cont"},[r("h6",[t._v("Create With Creatives")]),t._v(" "),r("span",[r("a",{attrs:{href:"#0"}},[t._v("Design")]),t._v(", "),r("a",{attrs:{href:"#0"}},[t._v("WordPress")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"cont"},[r("h6",[t._v("Energies of Love")]),t._v(" "),r("span",[r("a",{attrs:{href:"#0"}},[t._v("Design")]),t._v(", "),r("a",{attrs:{href:"#0"}},[t._v("WordPress")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"cont"},[r("h6",[t._v("See It Yourself")]),t._v(" "),r("span",[r("a",{attrs:{href:"#0"}},[t._v("Design")]),t._v(", "),r("a",{attrs:{href:"#0"}},[t._v("WordPress")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"cont"},[r("h6",[t._v("Blast From The Past")]),t._v(" "),r("span",[r("a",{attrs:{href:"#0"}},[t._v("Design")]),t._v(", "),r("a",{attrs:{href:"#0"}},[t._v("WordPress")])])])}],!1,null,"384653d4",null);e.default=component.exports}}]);