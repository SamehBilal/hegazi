(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{535:function(t,e,r){"use strict";r(19),r(37);e.a=function(){var t,e=document.querySelectorAll(".gallery");e.length>=1&&e.forEach((function(e){t=new Isotope(e,{itemSelector:".items"})}));var r=document.querySelectorAll(".gallery-mons");r.length>=1&&r.forEach((function(e){t=new Isotope(e,{itemSelector:".items",masonry:{columnWidth:".width2"}})}));var o=document.querySelector(".filtering");if(o){var c=function(t){t.addEventListener("click",(function(e){matchesSelector(e.target,"span")&&(t.querySelector(".active").classList.remove("active"),e.target.classList.add("active"))}))};o.addEventListener("click",(function(e){if(matchesSelector(e.target,"span")){var r=e.target.getAttribute("data-filter");t.arrange({filter:r})}}));for(var l=document.querySelectorAll(".filtering"),i=0,n=l.length;i<n;i++){c(l[i])}}}},616:function(t,e,r){"use strict";r.r(e);r(74);var o=r(535),c={props:["classText"],mounted:function(){setTimeout((function(){Object(o.a)()}),1e3)}},l=r(73),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{class:"portfolio-cr section-padding pb-50 "+(t.classText?t.classText:"")},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[t._m(0),t._v(" "),r("div",{staticClass:"gallery-mons full-width"},[r("div",{staticClass:"items graphic wow fadeInUp",attrs:{"data-wow-delay":".4s"}},[r("div",{staticClass:"item-img"},[r("NuxtLink",{staticClass:"imago wow",attrs:{to:"project-details2/project-details2-dark"}},[r("img",{attrs:{src:"/img/portfolio/cr/1.jpg",alt:"image"}}),t._v(" "),r("div",{staticClass:"item-img-overlay"})])],1),t._v(" "),r("div",{staticClass:"cont flex"},[r("h6",{staticClass:"color-font"},[t._v("Creative Design")]),t._v(" "),r("span",[r("NuxtLink",{attrs:{to:"#0"}},[t._v("Graphic")])],1)])]),t._v(" "),r("div",{staticClass:"items web brand wow fadeInUp",attrs:{"data-wow-delay":".4s"}},[r("div",{staticClass:"item-img"},[r("NuxtLink",{staticClass:"imago wow",attrs:{to:"project-details2/project-details2-dark"}},[r("img",{attrs:{src:"/img/portfolio/cr/2.jpg",alt:"image"}}),t._v(" "),r("div",{staticClass:"item-img-overlay"})])],1),t._v(" "),r("div",{staticClass:"cont flex"},[r("h6",{staticClass:"color-font"},[t._v("Modern Design")]),t._v(" "),r("span",[r("NuxtLink",{attrs:{to:"#0"}},[t._v("Brand")]),t._v(",\n              "),r("NuxtLink",{attrs:{to:"#0"}},[t._v("Web")])],1)])]),t._v(" "),r("div",{staticClass:"items width2 brand wow fadeInUp",attrs:{"data-wow-delay":".4s"}},[r("div",{staticClass:"item-img"},[r("NuxtLink",{staticClass:"imago wow",attrs:{to:"project-details2/project-details2-dark"}},[r("img",{attrs:{src:"/img/portfolio/cr/3.jpg",alt:"image"}}),t._v(" "),r("div",{staticClass:"item-img-overlay"})])],1),t._v(" "),r("div",{staticClass:"cont"},[r("h6",{staticClass:"color-font"},[t._v("Creative Design")]),t._v(" "),r("span",[r("NuxtLink",{attrs:{to:"#0"}},[t._v("Website")])],1)])]),t._v(" "),r("div",{staticClass:"items width2 graphic wow fadeInUp",attrs:{"data-wow-delay":".4s"}},[r("div",{staticClass:"item-img"},[r("NuxtLink",{staticClass:"imago wow",attrs:{to:"project-details2/project-details2-dark"}},[r("img",{attrs:{src:"/img/portfolio/cr/4.jpg",alt:"image"}}),t._v(" "),r("div",{staticClass:"item-img-overlay"})])],1),t._v(" "),r("div",{staticClass:"cont"},[r("h6",{staticClass:"color-font"},[t._v("Modern Design")]),t._v(" "),r("span",[r("NuxtLink",{attrs:{to:"#0"}},[t._v("Graphic")])],1)])])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"filtering text-center col-12"},[r("div",{staticClass:"filter"},[r("span",{staticClass:"active",attrs:{"data-filter":"*"}},[t._v(" All ")]),t._v(" "),r("span",{attrs:{"data-filter":".brand"}},[t._v("Branding")]),t._v(" "),r("span",{attrs:{"data-filter":".web"}},[t._v("Mobile App")]),t._v(" "),r("span",{attrs:{"data-filter":".graphic"}},[t._v("Creative")])])])}],!1,null,"ead67b8c",null);e.default=component.exports}}]);