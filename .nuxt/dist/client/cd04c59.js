(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{535:function(e,t,n){"use strict";n(19),n(37);t.a=function(){var e,t=document.querySelectorAll(".gallery");t.length>=1&&t.forEach((function(t){e=new Isotope(t,{itemSelector:".items"})}));var n=document.querySelectorAll(".gallery-mons");n.length>=1&&n.forEach((function(t){e=new Isotope(t,{itemSelector:".items",masonry:{columnWidth:".width2"}})}));var l=document.querySelector(".filtering");if(l){var c=function(e){e.addEventListener("click",(function(t){matchesSelector(t.target,"span")&&(e.querySelector(".active").classList.remove("active"),t.target.classList.add("active"))}))};l.addEventListener("click",(function(t){if(matchesSelector(t.target,"span")){var n=t.target.getAttribute("data-filter");e.arrange({filter:n})}}));for(var r=document.querySelectorAll(".filtering"),i=0,o=r.length;i<o;i++){c(r[i])}}}},543:function(e,t,n){"use strict";t.a={particles:{number:{value:130,density:{enable:!0,value_area:900}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"/img/github.svg",width:100,height:100}},opacity:{value:.2,random:!0,anim:{enable:!0,speed:1,opacity_min:.3,sync:!1}},size:{value:1.8,random:!0,anim:{enable:!1,speed:4,size_min:.4,sync:!1}},line_linked:{enable:!1,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:1,direction:"none",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:600}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"bubble"},onclick:{enable:!0,mode:"repulse"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:250,size:0,duration:2,opacity:0,speed:3},repulse:{distance:400,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0}},560:function(e,t,n){},574:function(e,t,n){"use strict";n(560)},576:function(e,t,n){"use strict";n.r(t);n(74);var l=n(543),c=n(535),r={name:"demos",layout:"dark",head:function(){return{titleTemplate:"%s - Demos"}},data:function(){return{particlesOption:l.a}},mounted:function(){setTimeout((function(){Object(c.a)(),document.querySelector("#particles-js canvas")&&(document.querySelector("#particles-js canvas").style.position="unset")}),1e3)}},o=(n(574),n(73)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"freelancre valign"},[n("Particles",{attrs:{id:"particles-js",options:e.particlesOption}}),e._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[e._m(0),e._v(" "),n("div",{staticClass:"col-lg-8 valign"},[n("div",{staticClass:"cont"},[n("h1",{staticClass:"cd-headline clip"},[e._v("\n            Hello, I’m Mustafa Hegazi, a multimedia professional, I can guarantee that I will create the best environment you wish for. Including \n            "),n("span",{staticClass:"cd-words-wrapper"},[n("VueTyper",{staticClass:"color-font fw-600",attrs:{text:["Video Production.","Motion Graphics.","Video Editing.","Videography.","Photography.","Live Streams."],repeat:1/0,"initial-action":"erasing","pre-type-delay":50,"type-delay":50,"pre-erase-delay":1e3,"erase-delay":50,"erase-style":"backspace","caret-animation":"smooth"}})],1)])])])]),e._v(" "),e._m(1)]),e._v(" "),n("div",{staticClass:"line bottom left"})],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"col-lg-4"},[t("div",{staticClass:"img"},[t("img",{attrs:{src:"/img/hero.jpg",alt:""}})])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"states"},[n("div",{staticClass:"container"},[n("ul",{staticClass:"flex"},[n("li",{staticClass:"flex"},[n("div",{staticClass:"numb valign"},[n("h3",[e._v("+5")])]),e._v(" "),n("div",{staticClass:"text valign"},[n("p",[e._v("\n                Years "),n("br"),e._v("\n                Of Experience\n              ")])])]),e._v(" "),n("li",{staticClass:"flex"},[n("div",{staticClass:"numb valign"},[n("h3",[e._v("174")])]),e._v(" "),n("div",{staticClass:"text valign"},[n("p",[e._v("\n                Projects Completed "),n("br"),e._v("\n                In 5 Countries\n              ")])])]),e._v(" "),n("li",{staticClass:"mail-us"},[n("a",{attrs:{href:"mailto:mustafa.hegazi08@gmail.com?subject=New Project"}},[n("div",{staticClass:"flex"},[n("div",{staticClass:"text valign"},[n("div",{staticClass:"full-width"},[n("p",[e._v("Get In Touch")]),e._v(" "),n("h6",[e._v("mustafa.hegazi08@gmail.com")])])]),e._v(" "),n("div",{staticClass:"mail-icon"},[n("div",{staticClass:"icon-box"},[n("span",{staticClass:"icon color-font pe-7s-mail"})])])])])])])])])}],!1,null,null,null);t.default=component.exports}}]);