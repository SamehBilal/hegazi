(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{535:function(t,e,o){"use strict";o(19),o(37);e.a=function(){var t,e=document.querySelectorAll(".gallery");e.length>=1&&e.forEach((function(e){t=new Isotope(e,{itemSelector:".items"})}));var o=document.querySelectorAll(".gallery-mons");o.length>=1&&o.forEach((function(e){t=new Isotope(e,{itemSelector:".items",masonry:{columnWidth:".width2"}})}));var r=document.querySelector(".filtering");if(r){var l=function(t){t.addEventListener("click",(function(e){matchesSelector(e.target,"span")&&(t.querySelector(".active").classList.remove("active"),e.target.classList.add("active"))}))};r.addEventListener("click",(function(e){if(matchesSelector(e.target,"span")){var o=e.target.getAttribute("data-filter");t.arrange({filter:o})}}));for(var c=document.querySelectorAll(".filtering"),i=0,n=c.length;i<n;i++){l(c[i])}}}},570:function(t,e,o){"use strict";o.r(e);o(74);var r=o(535),l={props:["grid","filterPosition"],mounted:function(){setTimeout((function(){Object(r.a)()}),1e3)}},c=o(73),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"portfolio section-padding pb-70"},[t._m(0),t._v(" "),o("div",{class:3==t.grid?"container-fluid":"container"},[o("div",{staticClass:"row"},[o("div",{class:"filtering "+("center"===t.filterPosition?"text-center":"left"===t.filterPosition?"text-left":"text-right")+" col-12"},[t._m(1)]),t._v(" "),o("div",{staticClass:"gallery full-width"},[o("div",{class:(3==t.grid?"col-lg-4 col-md-6":2==t.grid?"col-md-6 lg-mr":"col-12")+" items graphic wow fadeInUp",attrs:{"data-wow-delay":".4s"}},[o("div",{staticClass:"item-img"},[o("NuxtLink",{staticClass:"imago wow",attrs:{to:"/project-details2/project-details2-dark"}},[o("img",{attrs:{src:"/img/portfolio/portfolio/1/1.jpg",alt:"image"}}),t._v(" "),o("div",{staticClass:"item-img-overlay"})])],1),t._v(" "),o("div",{staticClass:"cont"},[o("h6",[t._v("Creativity Demand")]),t._v(" "),o("span",[o("NuxtLink",{attrs:{to:"#0"}},[t._v("Design")]),t._v(",\n              "),o("NuxtLink",{attrs:{to:"#0"}},[t._v("WordPress")])],1)])]),t._v(" "),o("div",{class:(3==t.grid?"col-lg-4 col-md-6":2==t.grid?"col-md-6":"col-12")+" items web wow fadeInUp",attrs:{"data-wow-delay":".4s"}},[o("div",{staticClass:"item-img"},[o("NuxtLink",{staticClass:"imago wow",attrs:{to:"/project-details2/project-details2-dark"}},[o("img",{attrs:{src:"/img/portfolio/portfolio/1/2.jpg",alt:"image"}}),t._v(" "),o("div",{staticClass:"item-img-overlay"})])],1),t._v(" "),o("div",{staticClass:"cont"},[o("h6",[t._v("Through The Breaking")]),t._v(" "),o("span",[o("NuxtLink",{attrs:{to:"#0"}},[t._v("Design")]),t._v(",\n              "),o("NuxtLink",{attrs:{to:"#0"}},[t._v("WordPress")])],1)])]),t._v(" "),o("div",{class:(3==t.grid?"col-lg-4 col-md-6":2==t.grid?"col-md-6":"col-12")+" items brand wow fadeInUp",attrs:{"data-wow-delay":".4s"}},[o("div",{staticClass:"item-img"},[o("NuxtLink",{staticClass:"imago wow",attrs:{to:"/project-details2/project-details2-dark"}},[o("img",{attrs:{src:"/img/portfolio/portfolio/1/3.jpg",alt:"image"}}),t._v(" "),o("div",{staticClass:"item-img-overlay"})])],1),t._v(" "),o("div",{staticClass:"cont"},[o("h6",[t._v("Create With Creatives")]),t._v(" "),o("span",[o("NuxtLink",{attrs:{to:"#0"}},[t._v("Design")]),t._v(",\n              "),o("NuxtLink",{attrs:{to:"#0"}},[t._v("WordPress")])],1)])]),t._v(" "),o("div",{class:(3==t.grid?"col-lg-4 col-md-6":2==t.grid?"col-md-6":"col-12")+" items graphic wow fadeInUp",attrs:{"data-wow-delay":".4s"}},[o("div",{staticClass:"item-img"},[o("NuxtLink",{staticClass:"imago wow",attrs:{to:"/project-details2/project-details2-dark"}},[o("img",{attrs:{src:"/img/portfolio/portfolio/1/4.jpg",alt:"image"}}),t._v(" "),o("div",{staticClass:"item-img-overlay"})])],1),t._v(" "),o("div",{staticClass:"cont"},[o("h6",[t._v("Energies of Love")]),t._v(" "),o("span",[o("NuxtLink",{attrs:{to:"#"}},[t._v("Design")]),t._v(",\n              "),o("NuxtLink",{attrs:{to:"#"}},[t._v("WordPress")])],1)])]),t._v(" "),o("div",{class:(3==t.grid?"col-lg-4 col-md-6":2==t.grid?"col-md-6":"col-12")+" items web wow fadeInUp",attrs:{"data-wow-delay":".4s"}},[o("div",{staticClass:"item-img"},[o("NuxtLink",{staticClass:"imago wow",attrs:{to:"/project-details2/project-details2-dark"}},[o("img",{attrs:{src:"/img/portfolio/portfolio/1/5.jpg",alt:"image"}}),t._v(" "),o("div",{staticClass:"item-img-overlay"})])],1),t._v(" "),o("div",{staticClass:"cont"},[o("h6",[t._v("See It Yourself")]),t._v(" "),o("span",[o("NuxtLink",{attrs:{to:"#0"}},[t._v("Design")]),t._v(",\n              "),o("NuxtLink",{attrs:{to:"#0"}},[t._v("WordPress")])],1)])]),t._v(" "),o("div",{class:(3==t.grid?"col-lg-4 col-md-6":2==t.grid?"col-md-6":"col-12")+" items brand wow fadeInUp",attrs:{"data-wow-delay":".4s"}},[o("div",{staticClass:"item-img"},[o("NuxtLink",{staticClass:"imago wow",attrs:{to:"/project-details2/project-details2-dark"}},[o("img",{attrs:{src:"/img/portfolio/portfolio/1/6.jpg",alt:"image"}}),t._v(" "),o("div",{staticClass:"item-img-overlay"})])],1),t._v(" "),o("div",{staticClass:"cont"},[o("h6",[t._v("Blast From The Past")]),t._v(" "),o("span",[o("NuxtLink",{attrs:{to:"#0"}},[t._v("Design")]),t._v(",\n              "),o("NuxtLink",{attrs:{to:"#0"}},[t._v("WordPress")])],1)])])])])])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("div",{staticClass:"row justify-content-center"},[o("div",{staticClass:"col-lg-8 col-md-10"},[o("div",{staticClass:"sec-head text-center"},[o("h6",{staticClass:"wow fadeIn",attrs:{"data-wow-delay":".5s"}},[t._v("Portfolio")]),t._v(" "),o("h3",{staticClass:"wow color-font"},[t._v("\n            Our Recent Web Design & "),o("br"),t._v("\n            Some Past Projects.\n          ")])])])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"filter"},[o("span",{staticClass:"active",attrs:{"data-filter":"*"}},[t._v(" All ")]),t._v(" "),o("span",{attrs:{"data-filter":".brand"}},[t._v("Branding")]),t._v(" "),o("span",{attrs:{"data-filter":".web"}},[t._v("Mobile App")]),t._v(" "),o("span",{attrs:{"data-filter":".graphic"}},[t._v("Creative")])])}],!1,null,"5d3906da",null);e.default=component.exports}}]);