(window.webpackJsonp=window.webpackJsonp||[]).push([[87,3,18,20,25,39,43,48,57,65,66,71],{527:function(t,e,n){"use strict";n.r(e);var l={props:["hideBGCOLOR"],mounted:function(){document.getElementById("year").innerHTML=(new Date).getFullYear()}},r=n(73),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("footer",{class:t.hideBGCOLOR?"":"sub-bg"},[t._m(0)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-4"},[n("div",{staticClass:"item md-mb50"},[n("div",{staticClass:"title"},[n("h5",[t._v("Contact Us")])]),t._v(" "),n("ul",[n("li",[n("span",{staticClass:"icon pe-7s-map-marker"}),t._v(" "),n("div",{staticClass:"cont"},[n("h6",[t._v("Official Address")]),t._v(" "),n("p",[t._v("Business Bay, Dubai, United Arab Emirates")])])]),t._v(" "),n("li",[n("span",{staticClass:"icon pe-7s-mail"}),t._v(" "),n("div",{staticClass:"cont"},[n("h6",[t._v("Email Me")]),t._v(" "),n("p",[t._v("mustafa.hegazi08@gmail.com")])])])])])]),t._v(" "),n("div",{staticClass:"col-lg-4"},[n("div",{staticClass:"item md-mb50"},[n("div",{staticClass:"title"},[n("h5",[n("br")])]),t._v(" "),n("ul",[n("li",[n("span",{staticClass:"icon pe-7s-call"}),t._v(" "),n("div",{staticClass:"cont"},[n("h6",[t._v("Call Me")]),t._v(" "),n("p",[t._v("+20 106 4444 267")]),t._v(" "),n("p",[t._v("+971 58 6050 541")])])])])])]),t._v(" "),n("div",{staticClass:"col-lg-4"},[n("div",{staticClass:"item"},[n("div",{staticClass:"logo"},[n("img",{attrs:{src:"/img/logo-light.png",alt:"logo"}})]),t._v(" "),n("div",{staticClass:"social"},[n("a",{attrs:{href:"https://www.facebook.com/mustafa.hegazi.08"}},[n("i",{staticClass:"fab fa-facebook-f"})]),t._v(" "),n("a",{attrs:{href:"https://twitter.com/HEGZO08"}},[n("i",{staticClass:"fab fa-twitter"})]),t._v(" "),n("a",{attrs:{href:"https://www.instagram.com/mustafahegazi8/"}},[n("i",{staticClass:"fab fa-instagram"})]),t._v(" "),n("a",{attrs:{href:"https://www.linkedin.com/in/mustafahegazi08/"}},[n("i",{staticClass:"fab fa-linkedin"})])]),t._v(" "),n("div",{staticClass:"copy-right"},[n("p",[t._v("\n              © "),n("span",{attrs:{id:"year"}}),t._v(", Made with passion by\n              "),n("a",{attrs:{href:"https://samehbilal.000webhostapp.com/"}},[t._v("Sameh Bilal")]),t._v(".\n            ")])])])])])])}],!1,null,"57533c26",null);e.default=component.exports;installComponents(component,{Footer:n(527).default})},528:function(t,e,n){"use strict";e.a=function(t){var e=[];if(!t.parentNode)return e;for(var n=t.parentNode.firstChild;n;)1===n.nodeType&&n!==t&&e.push(n),n=n.nextSibling;return e}},529:function(t,e,n){"use strict";n.r(e);n(47),n(48),n(19);var l=n(528),r={props:["lr","theme","nr"],methods:{handleDropdown:function(t){if(Object(l.a)(t.target.parentElement).filter((function(t){return t.classList.contains("show")})).map((function(t){t.classList.remove("show"),t.childNodes[0]&&t.childNodes[0].setAttribute("aria-expanded",!1),t.childNodes[2]&&t.childNodes[2].classList.remove("show")})),t.target.setAttribute("aria-expanded",!0),t.target.parentElement){t.target.parentElement.classList.toggle("show");var e=t.target.parentElement.childNodes[2];e&&e.classList.toggle("show")}},handleMobileDropdown:function(t){document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans")}}},o=n(73),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{ref:t.nr,staticClass:"navbar navbar-expand-lg change",class:"light"===t.theme?"light":""},[n("div",{staticClass:"container"},[n("NuxtLink",{staticClass:"logo",attrs:{to:"/"}},["light"===t.theme?n("img",{ref:"lr",attrs:{src:"/img/logo-dark.png",alt:"logo"}}):(t.theme,n("img",{ref:"lr",attrs:{src:"/img/logo-light.png",alt:"logo"}}))]),t._v(" "),n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},on:{click:t.handleMobileDropdown}},[t._m(0)]),t._v(" "),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[n("ul",{staticClass:"navbar-nav ml-auto"},[n("li",{staticClass:"nav-item"},[n("NuxtLink",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("\n              Home\n            ")])],1),t._v(" "),n("li",{staticClass:"nav-item"},[n("NuxtLink",{staticClass:"nav-link",attrs:{to:"/about/about-dark"}},[t._v(" About ")])],1),t._v(" "),n("li",{staticClass:"nav-item"},[n("NuxtLink",{staticClass:"nav-link",attrs:{to:"/contact/contact-dark"}},[t._v("\n              Contact\n            ")])],1),t._v(" "),t._m(1)])])],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon-bar"},[e("i",{staticClass:"fas fa-bars"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"nav-item"},[n("a",{staticClass:"butn color ",attrs:{href:"https://mostafaeltaweel.com/cv.pdf",id:"resumeButton"}},[n("span",[t._v("Resume")])])])}],!1,null,"398014ec",null);e.default=component.exports},531:function(t,e,n){"use strict";var l=n(14),r=n(3),o=n(4),c=n(110),d=n(21),v=n(15),m=n(211),f=n(38),h=n(109),_=n(210),C=n(5),w=n(75).f,y=n(32).f,k=n(20).f,I=n(532),x=n(533).trim,E="Number",S=r[E],O=S.prototype,L=r.TypeError,N=o("".slice),A=o("".charCodeAt),D=function(t){var e=_(t,"number");return"bigint"==typeof e?e:T(e)},T=function(t){var e,n,l,r,o,c,d,code,v=_(t,"number");if(h(v))throw L("Cannot convert a Symbol value to a number");if("string"==typeof v&&v.length>2)if(v=x(v),43===(e=A(v,0))||45===e){if(88===(n=A(v,2))||120===n)return NaN}else if(48===e){switch(A(v,1)){case 66:case 98:l=2,r=49;break;case 79:case 111:l=8,r=55;break;default:return+v}for(c=(o=N(v,2)).length,d=0;d<c;d++)if((code=A(o,d))<48||code>r)return NaN;return parseInt(o,l)}return+v};if(c(E,!S(" 0o1")||!S("0b1")||S("+0x1"))){for(var j,$=function(t){var e=arguments.length<1?0:S(D(t)),n=this;return f(O,n)&&C((function(){I(n)}))?m(Object(e),n,$):e},M=l?w(S):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),V=0;M.length>V;V++)v(S,j=M[V])&&!v($,j)&&k($,j,y(S,j));$.prototype=O,O.constructor=$,d(r,E,$)}},532:function(t,e,n){var l=n(4);t.exports=l(1..valueOf)},533:function(t,e,n){var l=n(4),r=n(25),o=n(16),c=n(534),d=l("".replace),v="["+c+"]",m=RegExp("^"+v+v+"*"),f=RegExp(v+v+"*$"),h=function(t){return function(e){var n=o(r(e));return 1&t&&(n=d(n,m,"")),2&t&&(n=d(n,f,"")),n}};t.exports={start:h(1),end:h(2),trim:h(3)}},534:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},537:function(t,e,n){"use strict";n(19),n(37),n(74),n(531);var l=0;function r(t,time){setInterval(function(t){l=Number(window.getComputedStyle(t).getPropertyValue("opacity")),l<1?(l+=1,t.style.opacity=l):clearInterval(0)}(t),time)}function o(t,time){setInterval(function(t){l=Number(window.getComputedStyle(t).getPropertyValue("opacity")),l>0?(l=0,t.style.opacity=l):clearInterval(0)}(t),time)}e.a=function(){var t=document.createElement("div");t.classList.add("div-tooltip-tit"),document.body.appendChild(t);var e=document.createElement("div");e.classList.add("div-tooltip-sub"),document.body.appendChild(e),document.querySelectorAll("[data-tooltip-tit]").forEach((function(e){t=document.querySelector(".div-tooltip-tit"),e.addEventListener("mouseover",(function(){t.innerText=e.getAttribute("data-tooltip-tit")})),e.addEventListener("mousemove",(function(e){r(t,800),t.style.top=e.pageY+10+"px",t.style.left=e.pageX+20+"px",t.style.padding="0px 10px"})),e.addEventListener("mouseleave",(function(){o(t,800),t.style.padding=0}))})),document.querySelectorAll("[data-tooltip-sub]").forEach((function(t){e=document.querySelector(".div-tooltip-sub"),t.addEventListener("mouseover",(function(){e.innerText=t.getAttribute("data-tooltip-sub")})),t.addEventListener("mousemove",(function(t){r(e,800),e.style.top=t.pageY-15+"px",e.style.left=t.pageX+30+"px",e.style.padding="5px 10px"})),t.addEventListener("mouseleave",(function(){o(e,800),e.style.padding=0}))}))}},539:function(t){t.exports=JSON.parse('[{"id":1,"icon":"pe-7s-paint-bucket","title":"Graphic Design","content":"Tempore corrupti temporibus fuga earum asperiores fugit laudantium."},{"id":2,"icon":"pe-7s-phone","title":"Web & Mobile Design","content":"Tempore corrupti temporibus fuga earum asperiores fugit."},{"id":3,"icon":"pe-7s-display1","title":"Social Media Marketing","content":"Tempore corrupti temporibus fuga earum asperiores fugit."},{"id":4,"icon":"pe-7s-diskette","title":"Document Legal Policy","content":"Tempore corrupti temporibus fuga earum asperiores fugit laudantium."}]')},540:function(t,e,n){"use strict";n.r(e);var l={props:["img"]},r=n(73),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"call-action section-padding sub-bg bg-img",style:"background-image: url("+(t.img?t.img:"/img/patrn.svg")+")"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[t._m(0),t._v(" "),n("div",{staticClass:"col-md-4 col-lg-3 valign"},[n("NuxtLink",{staticClass:"butn bord curve wow fadeInUp",attrs:{to:"/contact/contact-dark","data-wow-delay":".5s"}},[n("span",[t._v("Get In Touch")])])],1)])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-md-8 col-lg-9"},[n("div",{staticClass:"content sm-mb30"},[n("h6",{staticClass:"wow words chars splitting",attrs:{"data-splitting":""}},[t._v("Let’s Talk")]),t._v(" "),n("h2",{staticClass:"wow words chars splitting",attrs:{"data-splitting":""}},[t._v("\n            about your "),n("br"),t._v(" "),n("b",{staticClass:"back-color"},[t._v("next project")]),t._v(".\n          ")])])])}],!1,null,"106a8062",null);e.default=component.exports},542:function(t){t.exports=JSON.parse('[{"id":1,"lightImage":"/img/clients/brands/light/01.png","darkImage":"/img/clients/brands/dark/01.png","url":"Oppo"},{"id":2,"lightImage":"/img/clients/brands/light/02.png","darkImage":"/img/clients/brands/dark/02.png","url":"Riot Games"},{"id":3,"lightImage":"/img/clients/brands/light/03.png","darkImage":"/img/clients/brands/dark/03.png","url":"Tencent Games"},{"id":4,"lightImage":"/img/clients/brands/light/04.png","darkImage":"/img/clients/brands/dark/04.png","url":"Activision"},{"id":5,"lightImage":"/img/clients/brands/light/05.png","darkImage":"/img/clients/brands/dark/05.png","url":"AMD"},{"id":6,"lightImage":"/img/clients/brands/light/06.png","darkImage":"/img/clients/brands/dark/06.png","url":"ASUS"},{"id":7,"lightImage":"/img/clients/brands/light/07.png","darkImage":"/img/clients/brands/dark/07.png","url":"Corsair"},{"id":8,"lightImage":"/img/clients/brands/light/08.png","darkImage":"/img/clients/brands/dark/08.png","url":"XPG"},{"id":9,"lightImage":"/img/clients/brands/light/09.png","darkImage":"/img/clients/brands/dark/09.png","url":"Lenovo"},{"id":10,"lightImage":"/img/clients/brands/light/10.png","darkImage":"/img/clients/brands/dark/10.png","url":"Huawei"},{"id":11,"lightImage":"/img/clients/brands/light/11.png","darkImage":"/img/clients/brands/dark/11.png","url":"Intel"},{"id":12,"lightImage":"/img/clients/brands/light/12.png","darkImage":"/img/clients/brands/dark/12.png","url":"We Telecom Egypt"}]')},547:function(t){t.exports=JSON.parse('{"teams":[{"id":1,"image":"/img/team/1.jpg","title":"Stephanie Lawrence","sub":"CEO, Colabrio Media"},{"id":2,"image":"/img/team/2.jpg","title":"Alex Regelman","sub":"CEO, Colabrio Media"},{"id":3,"image":"/img/team/3.jpg","title":"Stacey Stamper","sub":"CEO, Colabrio Media"},{"id":4,"image":"/img/team/4.jpg","title":"Stephanie Lawrence","sub":"CEO, Colabrio Media"}],"skills":[{"id":1,"text":"UI / UX Design","value":"90%"},{"id":2,"text":"Apps Development","value":"80%"}]}')},549:function(t,e,n){"use strict";n.r(e);n(19),n(37);var l=function(){var t=document.querySelector(".team-crv");t&&window.addEventListener("scroll",(function(){document.querySelectorAll(".skill-progress .progres").forEach((function(e){var n=e.getAttribute("data-value");window.pageYOffset>t.offsetTop-200&&(e.style.width=n)}))}))},r=n(537),o=n(547),c={data:function(){return{teamData:o}},mounted:function(){Object(r.a)(),l()}},d=n(73),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"team-crv section-padding"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-5 valign"},[n("div",{staticClass:"content wow fadeInUp md-mb30",attrs:{"data-wow-delay":".5s"}},[t._m(0),t._v(" "),n("h3",{staticClass:"co-tit mb-15"},[t._v("We help to create visual strategies.")]),t._v(" "),n("p",[t._v("\n            We are Vie. We create award-winning websites, remarkable brands\n            and cutting-edge apps.Nullam imperdie.\n          ")]),t._v(" "),n("div",{staticClass:"skills-box mt-40"},t._l(t.teamData.skills,(function(e){return n("div",{key:e.id,staticClass:"skill-item"},[n("h6",{staticClass:"custom-font"},[t._v(t._s(e.text))]),t._v(" "),n("div",{staticClass:"skill-progress"},[n("div",{staticClass:"progres",attrs:{"data-value":e.value}})])])})),0)])]),t._v(" "),n("div",{staticClass:"col-lg-6 offset-lg-1"},[n("div",{staticClass:"img-box"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-6 toright"},[n("div",{staticClass:"full-width"},t._l(t.teamData.teams.slice(0,2),(function(e,l){return n("div",{key:e.id},[n("div",{class:"img sizxl "+(l+1!=t.teamData.teams.slice(0,2).length?"mb-30":null),attrs:{"data-tooltip-tit":e.title,"data-tooltip-sub":e.sub}},[n("img",{staticClass:"imago wow",attrs:{src:e.image,alt:""}})])])})),0)]),t._v(" "),n("div",{staticClass:"col-sm-6 toleft valign"},[n("div",{staticClass:"full-width text-left"},t._l(t.teamData.teams.slice(2,4),(function(e,l){return n("div",{key:e.id},[n("div",{class:"img sizxl "+(l+1!=t.teamData.teams.slice(2,4).length?"mb-30":null),attrs:{"data-tooltip-tit":e.title,"data-tooltip-sub":e.sub}},[n("img",{staticClass:"imago wow",attrs:{src:e.image,alt:"team image"}})])])})),0)])])])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sub-title"},[n("h6",[t._v("Our Staff")]),t._v(" "),n("span"),t._v(" "),n("span"),t._v(" "),n("span")])}],!1,null,"742723ce",null);e.default=component.exports},550:function(t,e,n){"use strict";n.r(e);var l=n(539),r={props:["lines","oStyle"],data:function(){return{featuresData:l}}},o=n(73),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{class:"services bords section-padding "+("4item"===t.oStyle?"lficon":t.lines?"":"pt-0")},[n("div",{staticClass:"container"},[t._m(0),t._v(" "),"4item"===t.oStyle?n("div",{staticClass:"row"},t._l(t.featuresData,(function(e){return n("div",{key:e.id,staticClass:"col-lg-6 wow fadeInLeft",attrs:{"data-wow-delay":(1==e.id?".5":2===e.id?".7":3===e.id?".9":"1.1")+"s"}},[n("div",{staticClass:"item-box"},[n("div",[n("span",{class:"icon "+e.icon})]),t._v(" "),n("div",{staticClass:"cont"},[n("h6",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.content))])])])])})),0):n("div",{staticClass:"row"},t._l(t.featuresData.slice(0,3),(function(e){return n("div",{key:e.id,staticClass:"col-lg-4 wow fadeInLeft",attrs:{"data-wow-delay":".5s"}},[n("div",{staticClass:"item-box md-mb50"},[n("span",{class:"icon "+e.icon}),t._v(" "),n("h6",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.content))])])])})),0)]),t._v(" "),t.lines?n("div",{staticClass:"line top left"}):t._e(),t._v(" "),t.lines?n("div",{staticClass:"line bottom right"}):t._e()])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-lg-8 col-md-10"},[n("div",{staticClass:"sec-head text-center"},[n("h6",{staticClass:"wow fadeIn",attrs:{"data-wow-delay":".5s"}},[t._v("Best Features")]),t._v(" "),n("h3",{staticClass:"wow color-font"},[t._v("\n            We are a new digital product development agency\n          ")])])])])}],!1,null,"ee8eff66",null);e.default=component.exports},551:function(t,e,n){"use strict";e.a=function(){var t=document.getElementsByClassName("thumparallax-down");t&&new simpleParallax(t,{orientation:"down",delay:1,scale:1.1})}},555:function(t,e,n){"use strict";n.r(e);var l={data:function(){return{videoIsOpen:!1,settings:{dots:!0,infinite:!0,arrows:!1,speed:500,slidesToShow:1,slidesToScroll:1}}},methods:{openVideo:function(){this.videoIsOpen=!this.videoIsOpen}},computed:{videoChannel:function(){return"vimeo"},videoId:function(){return"127203262"}}},r=n(73),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"block-sec"},[n("div",{staticClass:"background bg-img pt-100 pb-0 parallaxie",staticStyle:{"background-image":"url(/img/bg-vid.jpg)"},attrs:{"data-overlay-dark":"5"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-6"}),t._v(" "),n("div",{staticClass:"col-lg-5 offset-lg-1"},[n("div",{staticClass:"testim-box"},[t._m(0),t._v(" "),n("VueSlickCarousel",t._b({staticClass:"slic-item wow fadeInUp",attrs:{"data-wow-delay":".5s"}},"VueSlickCarousel",t.settings,!1),[n("div",{staticClass:"item"},[n("p",[t._v("\n                  Mustafa is one of the most determined professionals I've met. He consistently finished his projects early and with high client satisfaction rates.\n                ")]),t._v(" "),n("div",{staticClass:"info"},[n("div",{staticClass:"img"},[n("div",{staticClass:"img-box"},[n("img",{attrs:{src:"/img/clients/1.png",alt:""}})])]),t._v(" "),n("div",{staticClass:"cont"},[n("div",{staticClass:"author"},[n("h6",{staticClass:"author-name"},[t._v("Sameh Bilal")]),t._v(" "),n("span",{staticClass:"author-details"},[t._v("\n                        Senior Backend Developer, Arabhardware\n                      ")])])])])]),t._v(" "),n("div",{staticClass:"item"},[n("p",[t._v("\n                  Nulla metus metus ullamcorper vel tincidunt sed euismod nibh\n                  volutpat velit class aptent taciti sociosqu ad litora.\n                ")]),t._v(" "),n("div",{staticClass:"info"},[n("div",{staticClass:"img"},[n("div",{staticClass:"img-box"},[n("img",{attrs:{src:"/img/clients/2.jpg",alt:""}})])]),t._v(" "),n("div",{staticClass:"cont"},[n("div",{staticClass:"author"},[n("h6",{staticClass:"author-name"},[t._v("Alex Regelman")]),t._v(" "),n("span",{staticClass:"author-details"},[t._v("\n                        Co-founder, Colabrio\n                      ")])])])])]),t._v(" "),n("div",{staticClass:"item"},[n("p",[t._v("\n                  Nulla metus metus ullamcorper vel tincidunt sed euismod nibh\n                  volutpat velit class aptent taciti sociosqu ad litora.\n                ")]),t._v(" "),n("div",{staticClass:"info"},[n("div",{staticClass:"img"},[n("div",{staticClass:"img-box"},[n("img",{attrs:{src:"/img/clients/3.jpg",alt:""}})])]),t._v(" "),n("div",{staticClass:"cont"},[n("div",{staticClass:"author"},[n("h6",{staticClass:"author-name"},[t._v("Alex Regelman")]),t._v(" "),n("span",{staticClass:"author-details"},[t._v("\n                        Co-founder, Colabrio\n                      ")])])])])])])],1)])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"head-box"},[n("h6",{staticClass:"wow fadeIn",attrs:{"data-wow-delay":".5s"}},[t._v("Our Clients")]),t._v(" "),n("h4",{staticClass:"wow fadeInLeft",attrs:{"data-wow-delay":".5s"}},[t._v("\n                What Client's Say?\n              ")])])}],!1,null,"23baeb85",null);e.default=component.exports},556:function(t,e,n){"use strict";n.r(e);var l=n(542),r={props:["theme"],data:function(){return{clientsData:l}}},o=n(73),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"clients section-padding"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-4 valign md-mb50"},[n("div",{staticClass:"sec-head mb-0"},[n("h6",{staticClass:"wow fadeIn",attrs:{"data-wow-delay":".5s"}},[t._v("Brands")]),t._v(" "),n("h3",{staticClass:"wow mb-20 color-font"},[t._v("My Clients")]),t._v(" "),n("p",[t._v("\n            Brands i've worked with."),n("with",{})],1)])]),t._v(" "),n("div",{staticClass:"col-lg-8"},[n("div",[n("div",{staticClass:"row bord"},t._l(t.clientsData.slice(0,t.clientsData.length/3),(function(e){return n("div",{key:e.id,staticClass:"col-md-3 col-6 brands"},[n("div",{staticClass:"item wow fadeIn",attrs:{"data-wow-delay":(1==e.id?".3":2==e.id?".6":3==e.id?".8":4==e.id?".3":"")+"s"}},[n("div",{staticClass:"img"},["light"===t.theme?n("img",{attrs:{src:e.lightImage,alt:""}}):n("img",{attrs:{src:e.darkImage,alt:""}}),t._v(" "),n("a",{staticClass:"link words chars splitting",attrs:{href:"#","data-splitting":""}},[t._v("\n                    "+t._s(e.url)+"\n                ")])])])])})),0),t._v(" "),n("div",{staticClass:"row"},t._l(t.clientsData.slice(4,t.clientsData.length),(function(e){return n("div",{key:e.id,class:5==e.id||6==e.id?"col-md-3 col-6 brands sm-mb30":7==e.id||8==e.id?"col-md-3 col-6 brands":"hide"},[n("div",{staticClass:"item wow fadeIn",attrs:{"data-wow-delay":(1==e.id?".4":2==e.id?".7":3==e.id?".5":4==e.id?".3":"")+"s"}},[n("div",{staticClass:"img"},["light"===t.theme?n("img",{attrs:{src:e.lightImage,alt:"client image"}}):n("img",{attrs:{src:e.darkImage,alt:"client image"}}),t._v(" "),n("a",{staticClass:"link words chars splitting",attrs:{href:"#","data-splitting":""}},[t._v("\n                    "+t._s(e.url)+"\n                ")])])])])})),0),t._v(" "),n("div",{staticClass:"row"},t._l(t.clientsData.slice(4,t.clientsData.length),(function(e){return n("div",{key:e.id,class:9==e.id||10==e.id?"col-md-3 col-6 brands sm-mb30":11==e.id||12==e.id?"col-md-3 col-6 brands":"hide"},[n("div",{staticClass:"item wow fadeIn",attrs:{"data-wow-delay":(1==e.id?".4":2==e.id?".7":3==e.id?".5":4==e.id?".3":"")+"s"}},[n("div",{staticClass:"img"},["light"===t.theme?n("img",{attrs:{src:e.lightImage,alt:"client image"}}):n("img",{attrs:{src:e.darkImage,alt:"client image"}}),t._v(" "),n("a",{staticClass:"link words chars splitting",attrs:{href:"#","data-splitting":""}},[t._v("\n                    "+t._s(e.url)+"\n                ")])])])])})),0)])])])])])}),[],!1,null,"23746de3",null);e.default=component.exports},575:function(t,e,n){"use strict";n.r(e);var l={props:["from","theme"]},r=n(73),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{class:"skills-circle pt-50 pb-50 "+(t.from&&"aboutPage"===t.from?"sub-bg":"")},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-7"},[n("div",{},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"item wow fadeInLeft",attrs:{"data-wow-delay":".6"}},[n("div",{staticClass:"skill"},[n("client-only",[n("VueEllipseProgress",{attrs:{progress:90,legend:!0,legendValue:90,legendFormatter:function(t){return t.currentValue+"%"},color:"rgb(18, 194, 233)",emptyColor:"dark"==t.theme?"#0f1013":"#e5e5e5",thickness:2,emptyThickness:"2",size:110}})],1)],1),t._v(" "),t._m(0)])]),t._v(" "),n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"item wow fadeInLeft",attrs:{"data-wow-delay":".3"}},[n("div",{staticClass:"skill"},[n("client-only",[n("VueEllipseProgress",{attrs:{progress:75,legend:!0,legendValue:75,legendFormatter:function(t){return t.currentValue+"%"},color:"rgb(18, 194, 233)",emptyColor:"dark"==t.theme?"#0f1013":"#e5e5e5",thickness:2,emptyThickness:"2",size:110}})],1)],1),t._v(" "),t._m(1)])])])])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cont"},[n("span",[t._v("Project")]),t._v(" "),n("h6",[t._v("Consulting")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cont"},[n("span",[t._v("App")]),t._v(" "),n("h6",[t._v("Development")])])}],!1,null,"98de57a2",null);e.default=component.exports},577:function(t){t.exports=JSON.parse('{"id":1,"title":"Who I am ?","paragraph1":"I\'m a multimedia professional with 5+ years of experience in motion graphics, video editing, artwork, and shooting videos and photos for products from big brands. ","paragraph2":"I am eager to learn with a high drive to test new platforms and make a dent in the industry, while being meticulous, creative, and following the best practices."}')},590:function(t,e,n){"use strict";n.r(e);var l={props:["imageLink"]},r=n(73),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"pages-header circle-bg valign"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-lg-10"},[n("div",{staticClass:"cont mt-100 mb-50 text-center"},[n("h1",{staticClass:"color-font fw-700"},[t._t("title")],2)])]),t._v(" "),n("div",{staticClass:"col-lg-10"},[n("div",{staticClass:"img"},[n("img",{attrs:{src:t.imageLink,alt:""}})])])])]),t._v(" "),t._m(0)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"half sub-bg"},[n("div",{staticClass:"circle-color"},[n("div",{staticClass:"gradient-circle"}),t._v(" "),n("div",{staticClass:"gradient-circle two"})])])}],!1,null,"161cd85f",null);e.default=component.exports},591:function(t,e,n){"use strict";n.r(e);var l=n(577),r={data:function(){return{AboutInfo1Data:l}}},o=n(73),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"intro-section section-padding pb-0"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-3 col-md-4"},[n("div",{staticClass:"htit sm-mb30"},[n("h4",[t._v(t._s(t.AboutInfo1Data.title))])])]),t._v(" "),n("div",{staticClass:"col-lg-8 offset-lg-1 col-md-8"},[n("div",{staticClass:"text"},[n("p",{staticClass:"wow txt mb-10 words chars splitting",attrs:{"data-splitting":""}},[t._v("\n            "+t._s(t.AboutInfo1Data.paragraph1)+"\n          ")]),t._v(" "),n("p",{staticClass:"wow txt words chars splitting",attrs:{"data-splitting":""}},[t._v("\n            "+t._s(t.AboutInfo1Data.paragraph2)+"\n          ")]),t._v(" "),n("br"),n("br")])])])])])}),[],!1,null,"629bc01f",null);e.default=component.exports},644:function(t,e,n){"use strict";n.r(e);var l=n(551),r={mounted:function(){Object(l.a)()}},o=n(73),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"min-area sub-bg"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-6"},[n("div",{staticClass:"img"},[n("img",{staticClass:"thumparallax-down",attrs:{src:"/img/min-area.jpg",alt:""}})])]),t._v(" "),n("div",{staticClass:"col-lg-6 valign"},[n("div",{staticClass:"content pt-0"},[n("h4",{staticClass:"wow color-font"},[t._v("About us.")]),t._v(" "),n("p",{staticClass:"wow txt",attrs:{"data-splitting":""}},[t._v("\n            Our creative Ad agency is ranked among the finest in the US. We\n            cultivate smart ideas for start-ups and seasoned players.\n          ")]),t._v(" "),n("ul",{staticClass:"feat"},[n("li",{staticClass:"wow fadeInUp",attrs:{"data-wow-delay":".2s"}},[n("h6",[n("span",[t._v("1")]),t._v(" Our Mission")]),t._v(" "),n("p",[t._v("\n                luctus massa ipsum at tempus eleifend congue lectus bibendum\n              ")])]),t._v(" "),n("li",{staticClass:"wow fadeInUp",attrs:{"data-wow-delay":".4s"}},[n("h6",[n("span",[t._v("2")]),t._v(" Our Goals")]),t._v(" "),n("p",[t._v("\n                luctus massa ipsum at tempus eleifend congue lectus bibendum\n              ")])]),t._v(" "),n("li",{staticClass:"wow fadeInUp",attrs:{"data-wow-delay":".6s"}},[n("h6",[n("span",[t._v("3")]),t._v(" Why Us?")]),t._v(" "),n("p",[t._v("\n                luctus massa ipsum at tempus eleifend congue lectus bibendum\n              ")])])])])])])])])}],!1,null,"edb5285a",null);e.default=component.exports},652:function(t,e,n){"use strict";n.r(e);var l={layout:"light",head:function(){return{titleTemplate:"%s - About Light"}},mounted:function(){var t=this.$refs.navbar.$el;window.pageYOffset>300?t.classList.add("nav-scroll"):t.classList.remove("nav-scroll"),window.addEventListener("scroll",(function(){window.pageYOffset>300?t.classList.add("nav-scroll"):t.classList.remove("nav-scroll")}))}},r=n(73),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Navbar",{ref:"navbar",attrs:{theme:"light"}}),t._v(" "),n("PagesHeader",{attrs:{imageLink:"/img/slid/about.jpg"},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n      Our dedicated team of creatives is bursting with talent, experience and\n      passion for what we do.\n    ")]},proxy:!0}])}),t._v(" "),n("AboutIntro"),t._v(" "),n("Services1",{attrs:{oStyle:"4item"}}),t._v(" "),n("VideoWithTestimonials"),t._v(" "),n("SkillsCircle",{attrs:{from:"aboutPage"}}),t._v(" "),n("Team1"),t._v(" "),n("MinimalArea1"),t._v(" "),n("Clients1",{attrs:{theme:"light"}}),t._v(" "),n("CallToAction"),t._v(" "),n("Footer")],1)}),[],!1,null,"ffa330d0",null);e.default=component.exports;installComponents(component,{Navbar:n(529).default,PagesHeader:n(590).default,AboutIntro:n(591).default,Services1:n(550).default,VideoWithTestimonials:n(555).default,SkillsCircle:n(575).default,Team1:n(549).default,MinimalArea1:n(644).default,Clients1:n(556).default,CallToAction:n(540).default,Footer:n(527).default})}}]);