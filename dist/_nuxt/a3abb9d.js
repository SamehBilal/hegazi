(window.webpackJsonp=window.webpackJsonp||[]).push([[110,18,20,25,27,29,43,55,59,77],{527:function(t,e,n){"use strict";n.r(e);var l={props:["hideBGCOLOR"],mounted:function(){document.getElementById("year").innerHTML=(new Date).getFullYear()}},r=n(73),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("footer",{class:t.hideBGCOLOR?"":"sub-bg"},[t._m(0)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-4"},[n("div",{staticClass:"item md-mb50"},[n("div",{staticClass:"title"},[n("h5",[t._v("Contact Us")])]),t._v(" "),n("ul",[n("li",[n("span",{staticClass:"icon pe-7s-map-marker"}),t._v(" "),n("div",{staticClass:"cont"},[n("h6",[t._v("Official Address")]),t._v(" "),n("p",[t._v("Business Bay, Dubai, United Arab Emirates")])])]),t._v(" "),n("li",[n("span",{staticClass:"icon pe-7s-mail"}),t._v(" "),n("div",{staticClass:"cont"},[n("h6",[t._v("Email Me")]),t._v(" "),n("p",[t._v("mustafa.hegazi08@gmail.com")])])])])])]),t._v(" "),n("div",{staticClass:"col-lg-4"},[n("div",{staticClass:"item md-mb50"},[n("div",{staticClass:"title"},[n("h5",[n("br")])]),t._v(" "),n("ul",[n("li",[n("span",{staticClass:"icon pe-7s-call"}),t._v(" "),n("div",{staticClass:"cont"},[n("h6",[t._v("Call Me")]),t._v(" "),n("p",[t._v("+20 106 4444 267")]),t._v(" "),n("p",[t._v("+971 58 6050 541")])])])])])]),t._v(" "),n("div",{staticClass:"col-lg-4"},[n("div",{staticClass:"item"},[n("div",{staticClass:"logo"},[n("img",{attrs:{src:"/img/logo-light.png",alt:"logo"}})]),t._v(" "),n("div",{staticClass:"social"},[n("a",{attrs:{href:"https://www.facebook.com/mustafa.hegazi.08"}},[n("i",{staticClass:"fab fa-facebook-f"})]),t._v(" "),n("a",{attrs:{href:"https://twitter.com/HEGZO08"}},[n("i",{staticClass:"fab fa-twitter"})]),t._v(" "),n("a",{attrs:{href:"https://www.instagram.com/mustafahegazi8/"}},[n("i",{staticClass:"fab fa-instagram"})]),t._v(" "),n("a",{attrs:{href:"https://www.linkedin.com/in/mustafahegazi08/"}},[n("i",{staticClass:"fab fa-linkedin"})])]),t._v(" "),n("div",{staticClass:"copy-right"},[n("p",[t._v("\n              © "),n("span",{attrs:{id:"year"}}),t._v(", Made with passion by\n              "),n("a",{attrs:{href:"https://samehbilal.000webhostapp.com/"}},[t._v("Sameh Bilal")]),t._v(".\n            ")])])])])])])}],!1,null,"57533c26",null);e.default=component.exports;installComponents(component,{Footer:n(527).default})},528:function(t,e,n){"use strict";e.a=function(t){var e=[];if(!t.parentNode)return e;for(var n=t.parentNode.firstChild;n;)1===n.nodeType&&n!==t&&e.push(n),n=n.nextSibling;return e}},529:function(t,e,n){"use strict";n.r(e);n(47),n(48),n(19);var l=n(528),r={props:["lr","theme","nr"],methods:{handleDropdown:function(t){if(Object(l.a)(t.target.parentElement).filter((function(t){return t.classList.contains("show")})).map((function(t){t.classList.remove("show"),t.childNodes[0]&&t.childNodes[0].setAttribute("aria-expanded",!1),t.childNodes[2]&&t.childNodes[2].classList.remove("show")})),t.target.setAttribute("aria-expanded",!0),t.target.parentElement){t.target.parentElement.classList.toggle("show");var e=t.target.parentElement.childNodes[2];e&&e.classList.toggle("show")}},handleMobileDropdown:function(t){document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans")}}},c=n(73),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{ref:t.nr,staticClass:"navbar navbar-expand-lg change",class:"light"===t.theme?"light":""},[n("div",{staticClass:"container"},[n("NuxtLink",{staticClass:"logo",attrs:{to:"/"}},["light"===t.theme?n("img",{ref:"lr",attrs:{src:"/img/logo-dark.png",alt:"logo"}}):(t.theme,n("img",{ref:"lr",attrs:{src:"/img/logo-light.png",alt:"logo"}}))]),t._v(" "),n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},on:{click:t.handleMobileDropdown}},[t._m(0)]),t._v(" "),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[n("ul",{staticClass:"navbar-nav ml-auto"},[n("li",{staticClass:"nav-item"},[n("NuxtLink",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("\n              Home\n            ")])],1),t._v(" "),n("li",{staticClass:"nav-item"},[n("NuxtLink",{staticClass:"nav-link",attrs:{to:"/about/about-dark"}},[t._v(" About ")])],1),t._v(" "),n("li",{staticClass:"nav-item"},[n("NuxtLink",{staticClass:"nav-link",attrs:{to:"/contact/contact-dark"}},[t._v("\n              Contact\n            ")])],1),t._v(" "),t._m(1)])])],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon-bar"},[e("i",{staticClass:"fas fa-bars"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"nav-item"},[n("a",{staticClass:"butn color ",attrs:{href:"https://mostafaeltaweel.com/cv.pdf",id:"resumeButton"}},[n("span",[t._v("Resume")])])])}],!1,null,"398014ec",null);e.default=component.exports},535:function(t,e,n){"use strict";n(19),n(37);e.a=function(){var t,e=document.querySelectorAll(".gallery");e.length>=1&&e.forEach((function(e){t=new Isotope(e,{itemSelector:".items"})}));var n=document.querySelectorAll(".gallery-mons");n.length>=1&&n.forEach((function(e){t=new Isotope(e,{itemSelector:".items",masonry:{columnWidth:".width2"}})}));var l=document.querySelector(".filtering");if(l){var r=function(t){t.addEventListener("click",(function(e){matchesSelector(e.target,"span")&&(t.querySelector(".active").classList.remove("active"),e.target.classList.add("active"))}))};l.addEventListener("click",(function(e){if(matchesSelector(e.target,"span")){var n=e.target.getAttribute("data-filter");t.arrange({filter:n})}}));for(var c=document.querySelectorAll(".filtering"),i=0,o=c.length;i<o;i++){r(c[i])}}}},540:function(t,e,n){"use strict";n.r(e);var l={props:["img"]},r=n(73),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"call-action section-padding sub-bg bg-img",style:"background-image: url("+(t.img?t.img:"/img/patrn.svg")+")"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[t._m(0),t._v(" "),n("div",{staticClass:"col-md-4 col-lg-3 valign"},[n("NuxtLink",{staticClass:"butn bord curve wow fadeInUp",attrs:{to:"/contact/contact-dark","data-wow-delay":".5s"}},[n("span",[t._v("Get In Touch")])])],1)])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-md-8 col-lg-9"},[n("div",{staticClass:"content sm-mb30"},[n("h6",{staticClass:"wow words chars splitting",attrs:{"data-splitting":""}},[t._v("Let’s Talk")]),t._v(" "),n("h2",{staticClass:"wow words chars splitting",attrs:{"data-splitting":""}},[t._v("\n            about your "),n("br"),t._v(" "),n("b",{staticClass:"back-color"},[t._v("next project")]),t._v(".\n          ")])])])}],!1,null,"106a8062",null);e.default=component.exports},541:function(t,e,n){"use strict";n.r(e);var l={props:["withIMG","withCOLOR","noPadding","classText","showHead"],data:function(){return{settings:{dots:!1,infinite:!0,arrows:!0,centerMode:!0,autoplay:!0,rows:1,slidesToScroll:1,slidesToShow:3,responsive:[{breakpoint:1024,settings:{slidesToShow:1,centerMode:!1}},{breakpoint:767,settings:{slidesToShow:1,centerMode:!1}},{breakpoint:480,settings:{slidesToShow:1,centerMode:!1}}]}}},methods:{showNext:function(){this.$refs.carousel.next()},showPrev:function(){this.$refs.carousel.prev()}},mounted:function(){document.querySelector(".slick-track").classList.remove("slick-center")}},r=n(73),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{class:"testimonials "+(t.withIMG?"section-padding bg-img":t.withCOLOR?"section-padding back-color":t.noPadding?"":"section-padding")+" "+(t.classText?t.classText:""),style:"background-image: "+(t.withIMG?"url("+t.withIMG+")":"none")},[t.showHead?n("div",{staticClass:"container"},[t._m(0)]):t._e(),t._v(" "),n("div",{staticClass:"container-fluid position-re"},[n("div",{staticClass:"row wow fadeInUp",attrs:{"data-wow-delay":".5s"}},[n("div",{staticClass:"col-lg-12"},[n("VueSlickCarousel",t._b({ref:"carousel",staticClass:"slic-item",attrs:{"data-wow-delay":".5s"}},"VueSlickCarousel",t.settings,!1),[n("div",{staticClass:"item"},[n("div",{staticClass:"info valign"},[n("div",{staticClass:"cont"},[n("div",{staticClass:"author"},[n("div",{staticClass:"img"},[n("img",{attrs:{src:"/img/clients/1.png",alt:""}})]),t._v(" "),n("h6",{staticClass:"author-name color-font"},[t._v("Sameh Bilal")]),t._v(" "),n("span",{staticClass:"author-details"},[t._v(" Senior Backend Developer, Arabhardware ")])])])]),t._v(" "),n("p",[t._v("\n              Mustafa is one of the most determined professionals I've met. He consistently finished his projects early and with high client satisfaction rates.\n            ")])]),t._v(" "),n("div",{staticClass:"item"},[n("div",{staticClass:"info valign"},[n("div",{staticClass:"cont"},[n("div",{staticClass:"author"},[n("div",{staticClass:"img"},[n("img",{attrs:{src:"/img/clients/1.jpg",alt:""}})]),t._v(" "),n("h6",{staticClass:"author-name color-font"},[t._v("Alex Regelman")]),t._v(" "),n("span",{staticClass:"author-details"},[t._v(" Co-founder, Colabrio ")])])])]),t._v(" "),n("p",[t._v("\n              I would highly recommend Vie Digital. I worked with the team on\n              an animation for our ‘Click & Collect’ service.\n            ")])]),t._v(" "),n("div",{staticClass:"item"},[n("div",{staticClass:"info valign"},[n("div",{staticClass:"cont"},[n("div",{staticClass:"author"},[n("div",{staticClass:"img"},[n("img",{attrs:{src:"/img/clients/1.jpg",alt:""}})]),t._v(" "),n("h6",{staticClass:"author-name color-font"},[t._v("Alex Regelman")]),t._v(" "),n("span",{staticClass:"author-details"},[t._v(" Co-founder, Colabrio ")])])])]),t._v(" "),n("p",[t._v("\n              I would highly recommend Vie Digital. I worked with the team on\n              an animation for our ‘Click & Collect’ service.\n            ")])]),t._v(" "),n("div",{staticClass:"item"},[n("div",{staticClass:"info valign"},[n("div",{staticClass:"cont"},[n("div",{staticClass:"author"},[n("div",{staticClass:"img"},[n("img",{attrs:{src:"/img/clients/1.jpg",alt:""}})]),t._v(" "),n("h6",{staticClass:"author-name color-font"},[t._v("Alex Regelman")]),t._v(" "),n("span",{staticClass:"author-details"},[t._v(" Co-founder, Colabrio ")])])])]),t._v(" "),n("p",[t._v("\n              I would highly recommend Vie Digital. I worked with the team on\n              an animation for our ‘Click & Collect’ service.\n            ")])])])],1)]),t._v(" "),n("div",{staticClass:"arrows"},[n("div",{staticClass:"container"},[n("div",{staticClass:"next cursor-pointer",on:{click:t.showNext}},[n("span",{staticClass:"pe-7s-angle-right"})]),t._v(" "),n("div",{staticClass:"prev cursor-pointer",on:{click:t.showPrev}},[n("span",{staticClass:"pe-7s-angle-left"})])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-lg-8 col-md-10"},[n("div",{staticClass:"sec-head text-center"},[n("h6",{staticClass:"wow fadeIn",attrs:{"data-wow-delay":".5s"}},[t._v("Testimonials")]),t._v(" "),n("h3",{staticClass:"wow color-font"},[t._v("\n            We love our clients from all over the world.\n          ")])])])])}],!1,null,"139f1f95",null);e.default=component.exports},542:function(t){t.exports=JSON.parse('[{"id":1,"lightImage":"/img/clients/brands/light/01.png","darkImage":"/img/clients/brands/dark/01.png","url":"Oppo"},{"id":2,"lightImage":"/img/clients/brands/light/02.png","darkImage":"/img/clients/brands/dark/02.png","url":"Riot Games"},{"id":3,"lightImage":"/img/clients/brands/light/03.png","darkImage":"/img/clients/brands/dark/03.png","url":"Tencent Games"},{"id":4,"lightImage":"/img/clients/brands/light/04.png","darkImage":"/img/clients/brands/dark/04.png","url":"Activision"},{"id":5,"lightImage":"/img/clients/brands/light/05.png","darkImage":"/img/clients/brands/dark/05.png","url":"AMD"},{"id":6,"lightImage":"/img/clients/brands/light/06.png","darkImage":"/img/clients/brands/dark/06.png","url":"ASUS"},{"id":7,"lightImage":"/img/clients/brands/light/07.png","darkImage":"/img/clients/brands/dark/07.png","url":"Corsair"},{"id":8,"lightImage":"/img/clients/brands/light/08.png","darkImage":"/img/clients/brands/dark/08.png","url":"XPG"},{"id":9,"lightImage":"/img/clients/brands/light/09.png","darkImage":"/img/clients/brands/dark/09.png","url":"Lenovo"},{"id":10,"lightImage":"/img/clients/brands/light/10.png","darkImage":"/img/clients/brands/dark/10.png","url":"Huawei"},{"id":11,"lightImage":"/img/clients/brands/light/11.png","darkImage":"/img/clients/brands/dark/11.png","url":"Intel"},{"id":12,"lightImage":"/img/clients/brands/light/12.png","darkImage":"/img/clients/brands/dark/12.png","url":"We Telecom Egypt"}]')},543:function(t,e,n){"use strict";e.a={particles:{number:{value:130,density:{enable:!0,value_area:900}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"/img/github.svg",width:100,height:100}},opacity:{value:.2,random:!0,anim:{enable:!0,speed:1,opacity_min:.3,sync:!1}},size:{value:1.8,random:!0,anim:{enable:!1,speed:4,size_min:.4,sync:!1}},line_linked:{enable:!1,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:1,direction:"none",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:600}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"bubble"},onclick:{enable:!0,mode:"repulse"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:250,size:0,duration:2,opacity:0,speed:3},repulse:{distance:400,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0}},556:function(t,e,n){"use strict";n.r(e);var l=n(542),r={props:["theme"],data:function(){return{clientsData:l}}},c=n(73),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"clients section-padding"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-4 valign md-mb50"},[n("div",{staticClass:"sec-head mb-0"},[n("h6",{staticClass:"wow fadeIn",attrs:{"data-wow-delay":".5s"}},[t._v("Brands")]),t._v(" "),n("h3",{staticClass:"wow mb-20 color-font"},[t._v("My Clients")]),t._v(" "),n("p",[t._v("\n            Brands i've worked with."),n("with",{})],1)])]),t._v(" "),n("div",{staticClass:"col-lg-8"},[n("div",[n("div",{staticClass:"row bord"},t._l(t.clientsData.slice(0,t.clientsData.length/3),(function(e){return n("div",{key:e.id,staticClass:"col-md-3 col-6 brands"},[n("div",{staticClass:"item wow fadeIn",attrs:{"data-wow-delay":(1==e.id?".3":2==e.id?".6":3==e.id?".8":4==e.id?".3":"")+"s"}},[n("div",{staticClass:"img"},["light"===t.theme?n("img",{attrs:{src:e.lightImage,alt:""}}):n("img",{attrs:{src:e.darkImage,alt:""}}),t._v(" "),n("a",{staticClass:"link words chars splitting",attrs:{href:"#","data-splitting":""}},[t._v("\n                    "+t._s(e.url)+"\n                ")])])])])})),0),t._v(" "),n("div",{staticClass:"row"},t._l(t.clientsData.slice(4,t.clientsData.length),(function(e){return n("div",{key:e.id,class:5==e.id||6==e.id?"col-md-3 col-6 brands sm-mb30":7==e.id||8==e.id?"col-md-3 col-6 brands":"hide"},[n("div",{staticClass:"item wow fadeIn",attrs:{"data-wow-delay":(1==e.id?".4":2==e.id?".7":3==e.id?".5":4==e.id?".3":"")+"s"}},[n("div",{staticClass:"img"},["light"===t.theme?n("img",{attrs:{src:e.lightImage,alt:"client image"}}):n("img",{attrs:{src:e.darkImage,alt:"client image"}}),t._v(" "),n("a",{staticClass:"link words chars splitting",attrs:{href:"#","data-splitting":""}},[t._v("\n                    "+t._s(e.url)+"\n                ")])])])])})),0),t._v(" "),n("div",{staticClass:"row"},t._l(t.clientsData.slice(4,t.clientsData.length),(function(e){return n("div",{key:e.id,class:9==e.id||10==e.id?"col-md-3 col-6 brands sm-mb30":11==e.id||12==e.id?"col-md-3 col-6 brands":"hide"},[n("div",{staticClass:"item wow fadeIn",attrs:{"data-wow-delay":(1==e.id?".4":2==e.id?".7":3==e.id?".5":4==e.id?".3":"")+"s"}},[n("div",{staticClass:"img"},["light"===t.theme?n("img",{attrs:{src:e.lightImage,alt:"client image"}}):n("img",{attrs:{src:e.darkImage,alt:"client image"}}),t._v(" "),n("a",{staticClass:"link words chars splitting",attrs:{href:"#","data-splitting":""}},[t._v("\n                    "+t._s(e.url)+"\n                ")])])])])})),0)])])])])])}),[],!1,null,"23746de3",null);e.default=component.exports},560:function(t,e,n){},562:function(t,e,n){"use strict";n.r(e);n(19),n(37),n(47);var l=n(528),r=function(){var t=document.querySelectorAll(".feat .items");t&&t.forEach((function(t){t.onmouseover=function(e){t.classList.add("active");Object(l.a)(t).map((function(t){return t.classList.remove("active")}))}}))},c={mounted:function(){r()}},o=n(73),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"feat sub-bg section-padding"},[n("div",{staticClass:"container"},[t._m(0),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-3 col-md-6 items md-mb30"},[n("div",{staticClass:"item wow fadeIn",attrs:{"data-wow-delay":".3s"}},[t._m(1),t._v(" "),n("h5",[t._v("Graphic Design")]),t._v(" "),n("p",[t._v("\n            I create graphics including illustrations, logos, layouts and photos. I can shape the visual aspects of ads, books, magazines, exhibitions and more.\n          ")]),t._v(" "),n("NuxtLink",{staticClass:"more-stroke",attrs:{to:"#0"}},[n("span")])],1)]),t._v(" "),n("div",{staticClass:"col-lg-3 col-md-6 items active md-mb30"},[n("div",{staticClass:"item wow fadeIn",attrs:{"data-wow-delay":".3s"}},[t._m(2),t._v(" "),n("h5",[t._v("Motion Graphics")]),t._v(" "),n("p",[t._v("\n            I Translate ideas into motion graphics that can be understood by a wide audience such as animated graphics, videos for use in commercials, video games, or other visual media productions.\n          ")]),t._v(" "),n("NuxtLink",{staticClass:"more-stroke",attrs:{to:"#0"}},[n("span")])],1)]),t._v(" "),n("div",{staticClass:"col-lg-3 col-md-6 items sm-mb30"},[n("div",{staticClass:"item wow fadeIn",attrs:{"data-wow-delay":".3s"}},[t._m(3),t._v(" "),n("h5",[t._v("Videography & Video Editing")]),t._v(" "),n("p",[t._v("\n            I create/manage materials such as camera footage, dialogue, sound effects, graphics and special effects to produce a final film or video product.\n          ")]),t._v(" "),n("NuxtLink",{staticClass:"more-stroke",attrs:{to:"#0"}},[n("span")])],1)]),t._v(" "),n("div",{staticClass:"col-lg-3 col-md-6 items"},[n("div",{staticClass:"item wow fadeIn",attrs:{"data-wow-delay":".3s"}},[t._m(4),t._v(" "),n("h5",[t._v("Photography")]),t._v(" "),n("p",[t._v("\n            I capture events, people, objects or scenes for records, art or commercial use.\n          ")]),t._v(" "),n("NuxtLink",{staticClass:"more-stroke",attrs:{to:"#0"}},[n("span")])],1)])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-8 col-md-10"},[n("div",{staticClass:"sec-head"},[n("h6",{staticClass:"wow fadeIn",attrs:{"data-wow-delay":".5s"}},[t._v("My Skills")]),t._v(" "),n("h3",{staticClass:"wow color-font"},[t._v("\n            I help to create Art, design & development.\n          ")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon"},[e("i",{staticClass:"ion-images"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon"},[e("i",{staticClass:"ion-ios-color-wand-outline"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon"},[e("i",{staticClass:"ion-ios-videocam-outline"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon"},[e("i",{staticClass:"ion-ios-camera-outline"})])}],!1,null,"324b0e90",null);e.default=component.exports},564:function(t,e,n){"use strict";n.r(e);var l={props:["noLine"]},r=n(73),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"contact-sec section-padding position-re"},[t._m(0),t._v(" "),t.noLine?t._e():n("div",{staticClass:"line bottom left"})])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-lg-8 col-md-10"},[n("div",{staticClass:"sec-head text-center"},[n("h6",{staticClass:"wow fadeIn",attrs:{"data-wow-delay":".5s"}},[t._v("Contact Us")]),t._v(" "),n("h3",{staticClass:"wow color-font"},[t._v("\n            Let's Get in Touch And Make Magic Together.\n          ")])])])]),t._v(" "),n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-lg-10"},[n("div",{staticClass:"form wow fadeInUp",attrs:{"data-wow-delay":".5s"}},[n("form",{attrs:{id:"contact-form",method:"get",action:"https://mostafaeltaweel.com/contact.php"}},[n("div",{staticClass:"messages"}),t._v(" "),n("div",{staticClass:"controls"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-4"},[n("div",{staticClass:"form-group"},[n("input",{attrs:{id:"form_name",type:"text",name:"name",placeholder:"Name",required:"required"}})])]),t._v(" "),n("div",{staticClass:"col-lg-4"},[n("div",{staticClass:"form-group"},[n("input",{attrs:{id:"form_email",type:"email",name:"email",placeholder:"Email",required:"required"}})])]),t._v(" "),n("div",{staticClass:"col-lg-4"},[n("div",{staticClass:"form-group"},[n("input",{attrs:{id:"form_subject",type:"text",name:"subject",placeholder:"Subject",required:"required"}})])]),t._v(" "),n("div",{staticClass:"col-12"},[n("div",{staticClass:"form-group"},[n("textarea",{attrs:{id:"form_message",name:"message",placeholder:"Message",rows:"4",required:"required"}})])]),t._v(" "),n("div",{staticClass:"col-12"},[n("div",{staticClass:"text-center"},[n("a",{staticClass:"butn bord curve mt-30",staticStyle:{cursor:"pointer"},attrs:{onclick:"document.getElementById('contact-form').submit();",id:"submitContactForm"}},[n("span",[t._v("Send Massege")])])])])])])])])])])])}],!1,null,"793fb6a6",null);e.default=component.exports},572:function(t,e,n){"use strict";n.r(e);var l={data:function(){return{swiperOptions:{slidesPerView:2,centeredSlides:!0,autoPlay:!0,loop:!0,navigation:{prevEl:".swiper-button-prev",nextEl:".swiper-button-next"},autoplay:{delay:2500,disableOnInteraction:!1},speed:1e3,breakpoints:{320:{slidesPerView:1,spaceBetween:0},640:{slidesPerView:1,spaceBetween:0},767:{slidesPerView:1,spaceBetween:0,centeredSlides:!1},991:{slidesPerView:2}}}}},computed:{swiper:function(){return this.$refs.mySwiper.$swiper}}},r=n(73),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"work-carousel2 metro section-padding"},[t._m(0),t._v(" "),n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-12 no-padding"},[n("div",{staticClass:"swiper-container"},[n("swiper",{ref:"mySwiper",staticClass:"swiper-wrapper",attrs:{options:t.swiperOptions}},[n("SwiperSlide",{staticClass:"swiper-slide"},[n("div",{staticClass:"content"},[n("div",{staticClass:"img"},[n("span",{staticClass:"imgio"},[n("div",{staticClass:"wow cimgio",attrs:{"data-delay":"500"}}),t._v(" "),n("img",{attrs:{src:"/img/portfolio/2.jpg",alt:""}})])]),t._v(" "),n("div",{staticClass:"cont"},[n("h6",[n("NuxtLink",{attrs:{to:"/project-details2/project-details2-dark"}},[t._v("\n                      art & illustration\n                    ")])],1),t._v(" "),n("h4",[n("NuxtLink",{attrs:{to:"/project-details2/project-details2-dark"}},[t._v("\n                      Inspiring new space\n                    ")])],1)])])]),t._v(" "),n("SwiperSlide",{staticClass:"swiper-slide"},[n("div",{staticClass:"content"},[n("div",{staticClass:"img"},[n("span",{staticClass:"imgio"},[n("div",{staticClass:"wow cimgio",attrs:{"data-delay":"500"}}),t._v(" "),n("img",{attrs:{src:"/img/portfolio/1.jpg",alt:""}})])]),t._v(" "),n("div",{staticClass:"cont"},[n("h6",[n("NuxtLink",{attrs:{to:"/project-details2/project-details2-dark"}},[t._v("\n                      art & illustration\n                    ")])],1),t._v(" "),n("h4",[n("NuxtLink",{attrs:{to:"/project-details2/project-details2-dark"}},[t._v("\n                      Inspiring new space\n                    ")])],1)])])]),t._v(" "),n("SwiperSlide",{staticClass:"swiper-slide"},[n("div",{staticClass:"content"},[n("div",{staticClass:"img"},[n("span",{staticClass:"imgio"},[n("div",{staticClass:"wow cimgio",attrs:{"data-delay":"500"}}),t._v(" "),n("img",{attrs:{src:"/img/portfolio/3.jpg",alt:""}})])]),t._v(" "),n("div",{staticClass:"cont"},[n("h6",[n("NuxtLink",{attrs:{to:"/project-details2/project-details2-dark"}},[t._v("\n                      art & illustration\n                    ")])],1),t._v(" "),n("h4",[n("NuxtLink",{attrs:{to:"/project-details2/project-details2-dark"}},[t._v("\n                      Inspiring new space\n                    ")])],1)])])]),t._v(" "),n("SwiperSlide",{staticClass:"swiper-slide"},[n("div",{staticClass:"content"},[n("div",{staticClass:"img"},[n("span",{staticClass:"imgio"},[n("div",{staticClass:"wow cimgio",attrs:{"data-delay":"500"}}),t._v(" "),n("img",{attrs:{src:"/img/portfolio/4.jpg",alt:""}})])]),t._v(" "),n("div",{staticClass:"cont"},[n("h6",[n("NuxtLink",{attrs:{to:"/project-details2/project-details2-dark"}},[t._v("\n                      art & illustration\n                    ")])],1),t._v(" "),n("h4",[n("NuxtLink",{attrs:{to:"/project-details2/project-details2-dark"}},[t._v("\n                      Inspiring new space\n                    ")])],1)])])]),t._v(" "),n("SwiperSlide",{staticClass:"swiper-slide"},[n("div",{staticClass:"content"},[n("div",{staticClass:"img"},[n("span",{staticClass:"imgio"},[n("div",{staticClass:"wow cimgio",attrs:{"data-delay":"500"}}),t._v(" "),n("img",{attrs:{src:"/img/portfolio/5.jpg",alt:""}})])]),t._v(" "),n("div",{staticClass:"cont"},[n("h6",[n("NuxtLink",{attrs:{to:"/project-details2/project-details2-dark"}},[t._v("\n                      art & illustration\n                    ")])],1),t._v(" "),n("h4",[n("NuxtLink",{attrs:{to:"/project-details2/project-details2-dark"}},[t._v("\n                      Inspiring new space\n                    ")])],1)])])]),t._v(" "),n("SwiperSlide",{staticClass:"swiper-slide"},[n("div",{staticClass:"content"},[n("div",{staticClass:"img"},[n("span",{staticClass:"imgio"},[n("div",{staticClass:"wow cimgio",attrs:{"data-delay":"500"}}),t._v(" "),n("img",{attrs:{src:"/img/portfolio/6.jpg",alt:""}})])]),t._v(" "),n("div",{staticClass:"cont"},[n("h6",[n("NuxtLink",{attrs:{to:"/project-details2/project-details2-dark"}},[t._v("\n                      art & illustration\n                    ")])],1),t._v(" "),n("h4",[n("NuxtLink",{attrs:{to:"/project-details2/project-details2-dark"}},[t._v("\n                      Inspiring new space\n                    ")])],1)])])])],1),t._v(" "),n("div",{ref:"navigationNextRef",staticClass:"\n              swiper-button-next swiper-nav-ctrl\n              next-ctrl\n              cursor-pointer\n            "},[n("i",{staticClass:"ion-ios-arrow-right"})]),t._v(" "),n("div",{ref:"navigationPrevRef",staticClass:"\n              swiper-button-prev swiper-nav-ctrl\n              prev-ctrl\n              cursor-pointer\n            "},[n("i",{staticClass:"ion-ios-arrow-left"})])],1)])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-8 col-md-10"},[n("div",{staticClass:"sec-head"},[n("h6",{staticClass:"wow fadeIn",attrs:{"data-wow-delay":".5s"}},[t._v("Portfolio")]),t._v(" "),n("h3",{staticClass:"wow color-font"},[t._v("\n            My Recent & "),n("br"),t._v("\n            Some Past Projects.\n          ")])])])])])}],!1,null,"689376ff",null);e.default=component.exports},574:function(t,e,n){"use strict";n(560)},576:function(t,e,n){"use strict";n.r(e);n(74);var l=n(543),r=n(535),c={name:"demos",layout:"dark",head:function(){return{titleTemplate:"%s - Demos"}},data:function(){return{particlesOption:l.a}},mounted:function(){setTimeout((function(){Object(r.a)(),document.querySelector("#particles-js canvas")&&(document.querySelector("#particles-js canvas").style.position="unset")}),1e3)}},o=(n(574),n(73)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"freelancre valign"},[n("Particles",{attrs:{id:"particles-js",options:t.particlesOption}}),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[t._m(0),t._v(" "),n("div",{staticClass:"col-lg-8 valign"},[n("div",{staticClass:"cont"},[n("h1",{staticClass:"cd-headline clip"},[t._v("\n            Hello, I’m Mustafa Hegazi, a multimedia professional, I can guarantee that I will create the best environment you wish for. Including \n            "),n("span",{staticClass:"cd-words-wrapper"},[n("VueTyper",{staticClass:"color-font fw-600",attrs:{text:["Video Production.","Motion Graphics.","Video Editing.","Videography.","Photography.","Live Streams."],repeat:1/0,"initial-action":"erasing","pre-type-delay":50,"type-delay":50,"pre-erase-delay":1e3,"erase-delay":50,"erase-style":"backspace","caret-animation":"smooth"}})],1)])])])]),t._v(" "),t._m(1)]),t._v(" "),n("div",{staticClass:"line bottom left"})],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-lg-4"},[e("div",{staticClass:"img"},[e("img",{attrs:{src:"/img/hero.jpg",alt:""}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"states"},[n("div",{staticClass:"container"},[n("ul",{staticClass:"flex"},[n("li",{staticClass:"flex"},[n("div",{staticClass:"numb valign"},[n("h3",[t._v("+5")])]),t._v(" "),n("div",{staticClass:"text valign"},[n("p",[t._v("\n                Years "),n("br"),t._v("\n                Of Experience\n              ")])])]),t._v(" "),n("li",{staticClass:"flex"},[n("div",{staticClass:"numb valign"},[n("h3",[t._v("174")])]),t._v(" "),n("div",{staticClass:"text valign"},[n("p",[t._v("\n                Projects Completed "),n("br"),t._v("\n                In 5 Countries\n              ")])])]),t._v(" "),n("li",{staticClass:"mail-us"},[n("a",{attrs:{href:"mailto:mustafa.hegazi08@gmail.com?subject=New Project"}},[n("div",{staticClass:"flex"},[n("div",{staticClass:"text valign"},[n("div",{staticClass:"full-width"},[n("p",[t._v("Get In Touch")]),t._v(" "),n("h6",[t._v("mustafa.hegazi08@gmail.com")])])]),t._v(" "),n("div",{staticClass:"mail-icon"},[n("div",{staticClass:"icon-box"},[n("span",{staticClass:"icon color-font pe-7s-mail"})])])])])])])])])}],!1,null,null,null);e.default=component.exports},675:function(t,e,n){"use strict";n.r(e);var l={layout:"dark",head:function(){return{titleTemplate:"%s - Freelancer Dark"}},mounted:function(){var t=this.$refs.navbar.$el;window.pageYOffset>300?t.classList.add("nav-scroll"):t.classList.remove("nav-scroll"),window.addEventListener("scroll",(function(){window.pageYOffset>300?t.classList.add("nav-scroll"):t.classList.remove("nav-scroll")}))}},r=n(73),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Navbar",{ref:"navbar"}),t._v(" "),n("FreelancreIntro"),t._v(" "),n("Services3"),t._v(" "),n("Works3"),t._v(" "),n("Clients1",{attrs:{theme:"dark"}}),t._v(" "),n("FullTestimonials",{attrs:{showHead:""}}),t._v(" "),n("SContactForm",{attrs:{noLine:""}}),t._v(" "),n("CallToAction"),t._v(" "),n("Footer")],1)}),[],!1,null,"5b45979a",null);e.default=component.exports;installComponents(component,{Navbar:n(529).default,FreelancreIntro:n(576).default,Services3:n(562).default,Works3:n(572).default,Clients1:n(556).default,FullTestimonials:n(541).default,SContactForm:n(564).default,CallToAction:n(540).default,Footer:n(527).default})}}]);