(window.webpackJsonp=window.webpackJsonp||[]).push([[108,7,15,18,25,29,30,32,41,43,60,78],{527:function(t,e,n){"use strict";n.r(e);var o={props:["hideBGCOLOR"],mounted:function(){document.getElementById("year").innerHTML=(new Date).getFullYear()}},r=n(73),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("footer",{class:t.hideBGCOLOR?"":"sub-bg"},[t._m(0)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-4"},[n("div",{staticClass:"item md-mb50"},[n("div",{staticClass:"title"},[n("h5",[t._v("Contact Us")])]),t._v(" "),n("ul",[n("li",[n("span",{staticClass:"icon pe-7s-map-marker"}),t._v(" "),n("div",{staticClass:"cont"},[n("h6",[t._v("Official Address")]),t._v(" "),n("p",[t._v("Business Bay, Dubai, United Arab Emirates")])])]),t._v(" "),n("li",[n("span",{staticClass:"icon pe-7s-mail"}),t._v(" "),n("div",{staticClass:"cont"},[n("h6",[t._v("Email Me")]),t._v(" "),n("p",[t._v("mustafa.hegazi08@gmail.com")])])])])])]),t._v(" "),n("div",{staticClass:"col-lg-4"},[n("div",{staticClass:"item md-mb50"},[n("div",{staticClass:"title"},[n("h5",[n("br")])]),t._v(" "),n("ul",[n("li",[n("span",{staticClass:"icon pe-7s-call"}),t._v(" "),n("div",{staticClass:"cont"},[n("h6",[t._v("Call Me")]),t._v(" "),n("p",[t._v("+20 106 4444 267")]),t._v(" "),n("p",[t._v("+971 58 6050 541")])])])])])]),t._v(" "),n("div",{staticClass:"col-lg-4"},[n("div",{staticClass:"item"},[n("div",{staticClass:"logo"},[n("img",{attrs:{src:"/img/logo-light.png",alt:"logo"}})]),t._v(" "),n("div",{staticClass:"social"},[n("a",{attrs:{href:"https://www.facebook.com/mustafa.hegazi.08"}},[n("i",{staticClass:"fab fa-facebook-f"})]),t._v(" "),n("a",{attrs:{href:"https://twitter.com/HEGZO08"}},[n("i",{staticClass:"fab fa-twitter"})]),t._v(" "),n("a",{attrs:{href:"https://www.instagram.com/mustafahegazi8/"}},[n("i",{staticClass:"fab fa-instagram"})]),t._v(" "),n("a",{attrs:{href:"https://www.linkedin.com/in/mustafahegazi08/"}},[n("i",{staticClass:"fab fa-linkedin"})])]),t._v(" "),n("div",{staticClass:"copy-right"},[n("p",[t._v("\n              © "),n("span",{attrs:{id:"year"}}),t._v(", Made with passion by\n              "),n("a",{attrs:{href:"https://samehbilal.000webhostapp.com/"}},[t._v("Sameh Bilal")]),t._v(".\n            ")])])])])])])}],!1,null,"57533c26",null);e.default=component.exports;installComponents(component,{Footer:n(527).default})},528:function(t,e,n){"use strict";e.a=function(t){var e=[];if(!t.parentNode)return e;for(var n=t.parentNode.firstChild;n;)1===n.nodeType&&n!==t&&e.push(n),n=n.nextSibling;return e}},529:function(t,e,n){"use strict";n.r(e);n(47),n(48),n(19);var o=n(528),r={props:["lr","theme","nr"],methods:{handleDropdown:function(t){if(Object(o.a)(t.target.parentElement).filter((function(t){return t.classList.contains("show")})).map((function(t){t.classList.remove("show"),t.childNodes[0]&&t.childNodes[0].setAttribute("aria-expanded",!1),t.childNodes[2]&&t.childNodes[2].classList.remove("show")})),t.target.setAttribute("aria-expanded",!0),t.target.parentElement){t.target.parentElement.classList.toggle("show");var e=t.target.parentElement.childNodes[2];e&&e.classList.toggle("show")}},handleMobileDropdown:function(t){document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans")}}},l=n(73),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{ref:t.nr,staticClass:"navbar navbar-expand-lg change",class:"light"===t.theme?"light":""},[n("div",{staticClass:"container"},[n("NuxtLink",{staticClass:"logo",attrs:{to:"/"}},["light"===t.theme?n("img",{ref:"lr",attrs:{src:"/img/logo-dark.png",alt:"logo"}}):(t.theme,n("img",{ref:"lr",attrs:{src:"/img/logo-light.png",alt:"logo"}}))]),t._v(" "),n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},on:{click:t.handleMobileDropdown}},[t._m(0)]),t._v(" "),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[n("ul",{staticClass:"navbar-nav ml-auto"},[n("li",{staticClass:"nav-item"},[n("NuxtLink",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("\n              Home\n            ")])],1),t._v(" "),n("li",{staticClass:"nav-item"},[n("NuxtLink",{staticClass:"nav-link",attrs:{to:"/about/about-dark"}},[t._v(" About ")])],1),t._v(" "),n("li",{staticClass:"nav-item"},[n("NuxtLink",{staticClass:"nav-link",attrs:{to:"/contact/contact-dark"}},[t._v("\n              Contact\n            ")])],1),t._v(" "),t._m(1)])])],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon-bar"},[e("i",{staticClass:"fas fa-bars"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"nav-item"},[n("a",{staticClass:"butn color ",attrs:{href:"https://mostafaeltaweel.com/cv.pdf",id:"resumeButton"}},[n("span",[t._v("Resume")])])])}],!1,null,"398014ec",null);e.default=component.exports},530:function(t,e,n){"use strict";n(19),n(37),n(31),n(76);e.a=function(){document.querySelectorAll(".swiper-pagination")&&document.querySelectorAll(".swiper-pagination").forEach((function(t){t.innerHTML=t.innerHTML.replace(" / ","")}))}},531:function(t,e,n){"use strict";var o=n(14),r=n(3),l=n(4),c=n(110),d=n(21),v=n(15),f=n(211),m=n(38),h=n(109),_=n(210),w=n(5),C=n(75).f,y=n(32).f,x=n(20).f,k=n(532),N=n(533).trim,V="Number",S=r[V],I=S.prototype,E=r.TypeError,O=l("".slice),j=l("".charCodeAt),A=function(t){var e=_(t,"number");return"bigint"==typeof e?e:L(e)},L=function(t){var e,n,o,r,l,c,d,code,v=_(t,"number");if(h(v))throw E("Cannot convert a Symbol value to a number");if("string"==typeof v&&v.length>2)if(v=N(v),43===(e=j(v,0))||45===e){if(88===(n=j(v,2))||120===n)return NaN}else if(48===e){switch(j(v,1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+v}for(c=(l=O(v,2)).length,d=0;d<c;d++)if((code=j(l,d))<48||code>r)return NaN;return parseInt(l,o)}return+v};if(c(V,!S(" 0o1")||!S("0b1")||S("+0x1"))){for(var F,T=function(t){var e=arguments.length<1?0:S(A(t)),n=this;return m(I,n)&&w((function(){k(n)}))?f(Object(e),n,T):e},$=o?C(S):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),M=0;$.length>M;M++)v(S,F=$[M])&&!v(T,F)&&x(T,F,y(S,F));T.prototype=I,I.constructor=T,d(r,V,T)}},532:function(t,e,n){var o=n(4);t.exports=o(1..valueOf)},533:function(t,e,n){var o=n(4),r=n(25),l=n(16),c=n(534),d=o("".replace),v="["+c+"]",f=RegExp("^"+v+v+"*"),m=RegExp(v+v+"*$"),h=function(t){return function(e){var n=l(r(e));return 1&t&&(n=d(n,f,"")),2&t&&(n=d(n,m,"")),n}};t.exports={start:h(1),end:h(2),trim:h(3)}},534:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},535:function(t,e,n){"use strict";n(19),n(37);e.a=function(){var t,e=document.querySelectorAll(".gallery");e.length>=1&&e.forEach((function(e){t=new Isotope(e,{itemSelector:".items"})}));var n=document.querySelectorAll(".gallery-mons");n.length>=1&&n.forEach((function(e){t=new Isotope(e,{itemSelector:".items",masonry:{columnWidth:".width2"}})}));var o=document.querySelector(".filtering");if(o){var r=function(t){t.addEventListener("click",(function(e){matchesSelector(e.target,"span")&&(t.querySelector(".active").classList.remove("active"),e.target.classList.add("active"))}))};o.addEventListener("click",(function(e){if(matchesSelector(e.target,"span")){var n=e.target.getAttribute("data-filter");t.arrange({filter:n})}}));for(var l=document.querySelectorAll(".filtering"),i=0,c=l.length;i<c;i++){r(l[i])}}}},536:function(t,e,n){"use strict";n(19),n(37);e.a=function(element){window.addEventListener("scroll",(function(){var t=window.pageYOffset;element&&element.forEach((function(e){e.style.transform="translate3d(0, "+-.2*t+"px, 0)",e.style.opacity=1-t/600}))}))}},538:function(t,e,n){},539:function(t){t.exports=JSON.parse('[{"id":1,"icon":"pe-7s-paint-bucket","title":"Graphic Design","content":"Tempore corrupti temporibus fuga earum asperiores fugit laudantium."},{"id":2,"icon":"pe-7s-phone","title":"Web & Mobile Design","content":"Tempore corrupti temporibus fuga earum asperiores fugit."},{"id":3,"icon":"pe-7s-display1","title":"Social Media Marketing","content":"Tempore corrupti temporibus fuga earum asperiores fugit."},{"id":4,"icon":"pe-7s-diskette","title":"Document Legal Policy","content":"Tempore corrupti temporibus fuga earum asperiores fugit laudantium."}]')},540:function(t,e,n){"use strict";n.r(e);var o={props:["img"]},r=n(73),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"call-action section-padding sub-bg bg-img",style:"background-image: url("+(t.img?t.img:"/img/patrn.svg")+")"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[t._m(0),t._v(" "),n("div",{staticClass:"col-md-4 col-lg-3 valign"},[n("NuxtLink",{staticClass:"butn bord curve wow fadeInUp",attrs:{to:"/contact/contact-dark","data-wow-delay":".5s"}},[n("span",[t._v("Get In Touch")])])],1)])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-md-8 col-lg-9"},[n("div",{staticClass:"content sm-mb30"},[n("h6",{staticClass:"wow words chars splitting",attrs:{"data-splitting":""}},[t._v("Let’s Talk")]),t._v(" "),n("h2",{staticClass:"wow words chars splitting",attrs:{"data-splitting":""}},[t._v("\n            about your "),n("br"),t._v(" "),n("b",{staticClass:"back-color"},[t._v("next project")]),t._v(".\n          ")])])])}],!1,null,"106a8062",null);e.default=component.exports},541:function(t,e,n){"use strict";n.r(e);var o={props:["withIMG","withCOLOR","noPadding","classText","showHead"],data:function(){return{settings:{dots:!1,infinite:!0,arrows:!0,centerMode:!0,autoplay:!0,rows:1,slidesToScroll:1,slidesToShow:3,responsive:[{breakpoint:1024,settings:{slidesToShow:1,centerMode:!1}},{breakpoint:767,settings:{slidesToShow:1,centerMode:!1}},{breakpoint:480,settings:{slidesToShow:1,centerMode:!1}}]}}},methods:{showNext:function(){this.$refs.carousel.next()},showPrev:function(){this.$refs.carousel.prev()}},mounted:function(){document.querySelector(".slick-track").classList.remove("slick-center")}},r=n(73),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{class:"testimonials "+(t.withIMG?"section-padding bg-img":t.withCOLOR?"section-padding back-color":t.noPadding?"":"section-padding")+" "+(t.classText?t.classText:""),style:"background-image: "+(t.withIMG?"url("+t.withIMG+")":"none")},[t.showHead?n("div",{staticClass:"container"},[t._m(0)]):t._e(),t._v(" "),n("div",{staticClass:"container-fluid position-re"},[n("div",{staticClass:"row wow fadeInUp",attrs:{"data-wow-delay":".5s"}},[n("div",{staticClass:"col-lg-12"},[n("VueSlickCarousel",t._b({ref:"carousel",staticClass:"slic-item",attrs:{"data-wow-delay":".5s"}},"VueSlickCarousel",t.settings,!1),[n("div",{staticClass:"item"},[n("div",{staticClass:"info valign"},[n("div",{staticClass:"cont"},[n("div",{staticClass:"author"},[n("div",{staticClass:"img"},[n("img",{attrs:{src:"/img/clients/1.png",alt:""}})]),t._v(" "),n("h6",{staticClass:"author-name color-font"},[t._v("Sameh Bilal")]),t._v(" "),n("span",{staticClass:"author-details"},[t._v(" Senior Backend Developer, Arabhardware ")])])])]),t._v(" "),n("p",[t._v("\n              Mustafa is one of the most determined professionals I've met. He consistently finished his projects early and with high client satisfaction rates.\n            ")])]),t._v(" "),n("div",{staticClass:"item"},[n("div",{staticClass:"info valign"},[n("div",{staticClass:"cont"},[n("div",{staticClass:"author"},[n("div",{staticClass:"img"},[n("img",{attrs:{src:"/img/clients/1.jpg",alt:""}})]),t._v(" "),n("h6",{staticClass:"author-name color-font"},[t._v("Alex Regelman")]),t._v(" "),n("span",{staticClass:"author-details"},[t._v(" Co-founder, Colabrio ")])])])]),t._v(" "),n("p",[t._v("\n              I would highly recommend Vie Digital. I worked with the team on\n              an animation for our ‘Click & Collect’ service.\n            ")])]),t._v(" "),n("div",{staticClass:"item"},[n("div",{staticClass:"info valign"},[n("div",{staticClass:"cont"},[n("div",{staticClass:"author"},[n("div",{staticClass:"img"},[n("img",{attrs:{src:"/img/clients/1.jpg",alt:""}})]),t._v(" "),n("h6",{staticClass:"author-name color-font"},[t._v("Alex Regelman")]),t._v(" "),n("span",{staticClass:"author-details"},[t._v(" Co-founder, Colabrio ")])])])]),t._v(" "),n("p",[t._v("\n              I would highly recommend Vie Digital. I worked with the team on\n              an animation for our ‘Click & Collect’ service.\n            ")])]),t._v(" "),n("div",{staticClass:"item"},[n("div",{staticClass:"info valign"},[n("div",{staticClass:"cont"},[n("div",{staticClass:"author"},[n("div",{staticClass:"img"},[n("img",{attrs:{src:"/img/clients/1.jpg",alt:""}})]),t._v(" "),n("h6",{staticClass:"author-name color-font"},[t._v("Alex Regelman")]),t._v(" "),n("span",{staticClass:"author-details"},[t._v(" Co-founder, Colabrio ")])])])]),t._v(" "),n("p",[t._v("\n              I would highly recommend Vie Digital. I worked with the team on\n              an animation for our ‘Click & Collect’ service.\n            ")])])])],1)]),t._v(" "),n("div",{staticClass:"arrows"},[n("div",{staticClass:"container"},[n("div",{staticClass:"next cursor-pointer",on:{click:t.showNext}},[n("span",{staticClass:"pe-7s-angle-right"})]),t._v(" "),n("div",{staticClass:"prev cursor-pointer",on:{click:t.showPrev}},[n("span",{staticClass:"pe-7s-angle-left"})])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-lg-8 col-md-10"},[n("div",{staticClass:"sec-head text-center"},[n("h6",{staticClass:"wow fadeIn",attrs:{"data-wow-delay":".5s"}},[t._v("Testimonials")]),t._v(" "),n("h3",{staticClass:"wow color-font"},[t._v("\n            We love our clients from all over the world.\n          ")])])])])}],!1,null,"139f1f95",null);e.default=component.exports},544:function(t,e,n){"use strict";n(538)},546:function(t,e,n){"use strict";n.r(e);n(531),n(31),n(212);var o={props:{videoId:String,channel:String,isOpen:Boolean,youtube:{type:Object,default:function(){return{autoplay:1,cc_load_policy:1,color:null,controls:1,disablekb:0,enablejsapi:0,end:null,fs:1,h1:null,iv_load_policy:1,list:null,listType:null,loop:0,modestbranding:null,origin:null,playlist:null,playsinline:null,rel:0,showinfo:1,start:0,wmode:"transparent",theme:"dark"}}},ratio:{type:String,default:"16:9"},vimeo:{type:Object,default:function(){return{api:!1,autopause:!0,autoplay:!0,byline:!0,callback:null,color:null,height:null,loop:!1,maxheight:null,maxwidth:null,player_id:null,portrait:!0,title:!0,width:null,xhtml:!1}}},allowFullScreen:{type:Boolean,default:!0},animationSpeed:{type:Number,default:300},classNames:{type:Object,default:function(){return{modalVideoEffect:"modal-video-effect",modalVideo:"modal-video",modalVideoClose:"modal-video-close",modalVideoBody:"modal-video-body",modalVideoInner:"modal-video-inner",modalVideoIframeWrap:"modal-video-movie-wrap",modalVideoCloseBtn:"modal-video-close-btn"}}},aria:{type:Object,default:function(){return{openMessage:"Modal video opened",dismissBtnMessage:"Close the modal video"}}}},methods:{getQueryString:function(t){var e="";for(var n in t)t.hasOwnProperty(n)&&null!==t[n]&&(e+=n+"="+t[n]+"&");return e.substr(0,e.length-1)},getYoutubeUrl:function(t,e){return"//www.youtube.com/embed/"+e+"?"+this.getQueryString(t)},getVimeoUrl:function(t,e){return"//player.vimeo.com/video/"+e+"?"+this.getQueryString(t)},getPadding:function(t){var e=t.split(":"),n=Number(e[0]);return 100*Number(e[1])/n+"%"}},computed:{fullVideoUrl:function(){return"youtube"===this.channel?this.getYoutubeUrl(this.youtube,this.videoId):"vimeo"===this.channel?this.getVimeoUrl(this.vimeo,this.videoId):void 0},paddingBottom:function(){return this.getPadding(this.ratio)}},watch:{isOpen:{handler:function(t){var e=this;this.$nextTick((function(){void 0!==e.$refs.closeBtn&&e.$refs.closeBtn.focus()}))},deep:!0}}},r=(n(544),n(73)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isOpen?n("div",[n("div",{class:t.classNames.modalVideo,attrs:{tabIndex:"-1",role:"dialog","aria-label":t.aria.openMessage},on:{click:function(e){return t.$emit("update:isOpen",!1)},keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.$emit("update:isOpen",!1)}}},[n("div",{class:t.classNames.modalVideoBody},[n("button",{ref:"closeBtn",class:t.classNames.modalVideoCloseBtn,attrs:{"aria-label":t.aria.dismissBtnMessage},on:{click:function(e){return t.$emit("update:isOpen",!1)}}}),t._v(" "),n("div",{class:t.classNames.modalVideoInner},[n("div",{class:t.classNames.modalVideoIframeWrap,style:{"padding-bottom":t.paddingBottom}},[n("iframe",{attrs:{src:t.fullVideoUrl,frameBorder:"0",allowFullScreen:t.allowFullScreen,tabIndex:"-1"}})])])])])]):t._e()}),[],!1,null,"fb8a83f8",null);e.default=component.exports},548:function(t,e,n){t.exports=function(t){function e(n){if(i[n])return i[n].exports;var a=i[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var i={};return e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=2)}([function(t,e,i){var n=i(4)(i(1),i(5),null,null);t.exports=n.exports},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(3);e.default={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:function(t){return t>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default:function(t,e,i,n){return i*(1-Math.pow(2,-10*t/n))*1024/1023+e}}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=(0,n.requestAnimationFrame)(this.count)},pauseResume:function(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause:function(){(0,n.cancelAnimationFrame)(this.rAF)},resume:function(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,(0,n.requestAnimationFrame)(this.count)},reset:function(){this.startTime=null,(0,n.cancelAnimationFrame)(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var e=t-this.startTime;this.remaining=this.localDuration-e,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(e,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(e,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(e/this.localDuration):this.printVal=this.localStartVal+(this.localStartVal-this.startVal)*(e/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),e<this.localDuration?this.rAF=(0,n.requestAnimationFrame)(this.count):this.$emit("callback")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=t.toFixed(this.decimals);var e=(t+="").split("."),i=e[0],n=e.length>1?this.decimal+e[1]:"",a=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;a.test(i);)i=i.replace(a,"$1"+this.separator+"$2");return this.prefix+i+n+this.suffix}},destroyed:function(){(0,n.cancelAnimationFrame)(this.rAF)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){return t&&t.__esModule?t:{default:t}}(i(0));e.default=a.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("count-to",a.default)},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=0,a="webkit moz ms o".split(" "),o=void 0,r=void 0;if("undefined"==typeof window)e.requestAnimationFrame=o=function(){},e.cancelAnimationFrame=r=function(){};else{e.requestAnimationFrame=o=window.requestAnimationFrame,e.cancelAnimationFrame=r=window.cancelAnimationFrame;for(var s=void 0,u=0;u<a.length&&(!o||!r);u++)s=a[u],e.requestAnimationFrame=o=o||window[s+"RequestAnimationFrame"],e.cancelAnimationFrame=r=r||window[s+"CancelAnimationFrame"]||window[s+"CancelRequestAnimationFrame"];o&&r||(e.requestAnimationFrame=o=function(t){var e=(new Date).getTime(),i=Math.max(0,16-(e-n)),a=window.setTimeout((function(){t(e+i)}),i);return n=e+i,a},e.cancelAnimationFrame=r=function(t){window.clearTimeout(t)})}e.requestAnimationFrame=o,e.cancelAnimationFrame=r},function(t,e){t.exports=function(t,e,i,n){var a,o=t=t||{},r=typeof t.default;"object"!==r&&"function"!==r||(a=t,o=t.default);var s="function"==typeof o?o.options:o;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),i&&(s._scopeId=i),n){var u=Object.create(s.computed||null);Object.keys(n).forEach((function(t){var e=n[t];u[t]=function(){return e}})),s.computed=u}return{esModule:a,exports:o,options:s}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v("\n  "+t._s(t.displayValue)+"\n")])},staticRenderFns:[]}}])},552:function(t){t.exports=JSON.parse('[{"id":1,"title":"Original Solutions","content":"If you need to redesign your new project, new visual strategy, ux structure or you do have some cool ideas for collaboration.","image":"/img/slid/02.jpg"},{"id":2,"title":"Digital Design Awards","content":"If you need to redesign your new project, new visual strategy, ux structure or you do have some cool ideas for collaboration.","image":"/img/slid/03.jpg"},{"id":3,"title":"Business value through digital products","content":"","image":"/img/slid/01.jpg"}]')},557:function(t,e,n){"use strict";n.r(e);n(74);var o=n(552),r=n(530),l=n(536),c={props:["sliderRef"],data:function(){return{intro1Data:o,swiperOptions:{speed:1e3,navigation:{prevEl:".swiper-button-prev",nextEl:".swiper-button-next"},parallax:!0,pagination:{type:"fraction",clickable:!0,el:".swiper-pagination"}}}},computed:{swiper:function(){return this.$refs.mySwiper.$swiper}},methods:{handleSwiperReadied:function(t){setTimeout((function(){for(var i=0;i<t.slides.length;i++)t.slides[i].childNodes[0].setAttribute("data-swiper-parallax",.75*t.width)}))}},mounted:function(){Object(r.a)(),Object(l.a)(document.querySelectorAll(".fixed-slider .caption"))}},d=n(73),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{ref:t.sliderRef,staticClass:"slider slider-prlx fixed-slider text-center"},[n("div",{staticClass:"swiper-container parallax-slider"},[n("swiper",{ref:"mySwiper",staticClass:"swiper-wrapper",attrs:{options:t.swiperOptions},on:{ready:t.handleSwiperReadied}},t._l(t.intro1Data,(function(e){return n("swiper-slide",{key:e.id,staticClass:"swiper-slide"},[n("div",{staticClass:"bg-img valign",style:"background-image: url("+e.image+")",attrs:{"data-overlay-dark":"6"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-lg-8 col-md-10"},[n("div",{staticClass:"caption center mt-30"},[n("h1",{staticClass:"color-font"},[t._v(t._s(e.title))]),t._v(" "),e.content?n("p",[t._v("\n                    "+t._s(e.content)+"\n                  ")]):t._e(),t._v(" "),n("NuxtLink",{staticClass:"butn bord curve mt-30",attrs:{to:"#"}},[n("span",[t._v("Look More")])])],1)])])])])])})),1),t._v(" "),n("div",{staticClass:"setone setwo"},[n("div",{ref:"navigationNextRef",staticClass:"swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"},[n("i",{staticClass:"fas fa-chevron-right"})]),t._v(" "),n("div",{ref:"navigationPrevRef",staticClass:"swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"},[n("i",{staticClass:"fas fa-chevron-left"})])]),t._v(" "),n("div",{ref:"paginationRef",staticClass:"swiper-pagination top botm"}),t._v(" "),n("div",{staticClass:"social-icon"},[n("NuxtLink",{attrs:{to:"#"}},[n("i",{staticClass:"fab fa-facebook-f"})]),t._v(" "),n("NuxtLink",{attrs:{to:"#"}},[n("i",{staticClass:"fab fa-twitter"})]),t._v(" "),n("NuxtLink",{attrs:{to:"#"}},[n("i",{staticClass:"fab fa-behance"})]),t._v(" "),n("NuxtLink",{attrs:{to:"#"}},[n("i",{staticClass:"fab fa-pinterest-p"})])],1)],1)])}),[],!1,null,"4cfe7b5d",null);e.default=component.exports},563:function(t,e,n){"use strict";n.r(e);var o={},r=n(73),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"blog-list section-padding sub-bg"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-4"},[n("div",{staticClass:"head md-mb50"},[n("h6",{staticClass:"back-color"},[t._v("Get The Latest News")]),t._v(" "),n("h3",[t._v("What Our Trending News.")]),t._v(" "),n("p",[t._v("\n            We provide company and finance service for startups and company\n            business.\n          ")]),t._v(" "),n("NuxtLink",{attrs:{to:"#0"}},[n("span",[t._v("More Blog Posts")])])],1)]),t._v(" "),n("div",{staticClass:"col-lg-7 offset-lg-1"},[n("div",{staticClass:"item wow fadeInUp",attrs:{"data-wow-delay":".3s"}},[t._m(0),t._v(" "),n("div",{staticClass:"cont valign"},[n("div",[n("div",{staticClass:"info"},[n("NuxtLink",{staticClass:"date",attrs:{to:"#0"}},[n("span",[n("i",[t._v("06")]),t._v(" August")])]),t._v(" "),n("span",[t._v("/")]),t._v(" "),n("NuxtLink",{staticClass:"tag",attrs:{to:"#0"}},[n("span",[t._v("WordPress")])])],1),t._v(" "),n("h5",[n("NuxtLink",{attrs:{to:"#0"}},[t._v("\n                  How to use solid color combine with simple furnitures.\n                ")])],1)])])]),t._v(" "),n("div",{staticClass:"item wow fadeInUp",attrs:{"data-wow-delay":".5s"}},[t._m(1),t._v(" "),n("div",{staticClass:"cont valign"},[n("div",[n("div",{staticClass:"info"},[n("NuxtLink",{staticClass:"date",attrs:{to:"#0"}},[n("span",[n("i",[t._v("06")]),t._v(" August")])]),t._v(" "),n("span",[t._v("/")]),t._v(" "),n("NuxtLink",{staticClass:"tag",attrs:{to:"#0"}},[n("span",[t._v("WordPress")])])],1),t._v(" "),n("h5",[n("NuxtLink",{attrs:{to:"#0"}},[t._v("\n                  How to use solid color combine with simple furnitures.\n                ")])],1)])])]),t._v(" "),n("div",{staticClass:"item wow fadeInUp",attrs:{"data-wow-delay":".3s"}},[t._m(2),t._v(" "),n("div",{staticClass:"cont valign"},[n("div",[n("div",{staticClass:"info"},[n("NuxtLink",{staticClass:"date",attrs:{to:"#0"}},[n("span",[n("i",[t._v("06")]),t._v(" August")])]),t._v(" "),n("span",[t._v("/")]),t._v(" "),n("NuxtLink",{staticClass:"tag",attrs:{to:"#0"}},[n("span",[t._v("WordPress")])])],1),t._v(" "),n("h5",[n("NuxtLink",{attrs:{to:"#0"}},[t._v("\n                  How to use solid color combine with simple furnitures.\n                ")])],1)])])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"img valign"},[e("img",{attrs:{src:"/img/blog/1.jpg",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"img valign"},[e("img",{attrs:{src:"/img/blog/2.jpg",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"img valign"},[e("img",{attrs:{src:"/img/blog/3.jpg",alt:""}})])}],!1,null,"691f4924",null);e.default=component.exports},565:function(t){t.exports=JSON.parse('[{"id":1,"icon":"pe-7s-smile","content":"People who are commited to their management tasks.","value":"2400"},{"id":2,"icon":"pe-7s-portfolio","content":"Signed projects that have been confirmed complete!","value":"133"},{"id":3,"icon":"pe-7s-medal","content":"International awards and cups for design projects.","value":"46"}]')},569:function(t,e,n){"use strict";n.r(e);n(47);var o=n(548),r=n.n(o),l=n(565),c={components:{countTo:r.a},data:function(){return{funFactData:l,counted:!1}},methods:{startCounter:function(){this.$refs.countUpRef.map((function(t){return t.start()})),this.counted=!0}},mounted:function(){var t=this,e=document.querySelector(".number-sec");window.addEventListener("scroll",(function(){e&&!t.counted&&window.pageYOffset>e.offsetTop-200&&t.startCounter()}))}},d=n(73),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"number-sec section-padding"},[n("div",{staticClass:"container"},[t._m(0),t._v(" "),n("div",{staticClass:"row"},t._l(t.funFactData,(function(e){return n("div",{key:e.id,staticClass:"col-md-4"},[n("div",{staticClass:"item no-bord sm-mb50"},[n("span",{class:"icon "+e.icon}),t._v(" "),n("h3",{},[n("countTo",{ref:"countUpRef",refInFor:!0,attrs:{startVal:0,endVal:Number(e.value),duration:3e3,autoplay:!1}},[n("span",{staticClass:"count"},[t._v(" ")])])],1),t._v(" "),n("p",{staticClass:"wow txt words chars splitting",attrs:{"data-splitting":""}},[t._v("\n                  "+t._s(e.content)+"\n              ")])])])})),0)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-lg-8 col-md-10"},[n("div",{staticClass:"sec-head text-center"},[n("h6",{staticClass:"wow fadeIn",attrs:{"data-wow-delay":".5s"}},[t._v("FUN FACTS")]),t._v(" "),n("h3",{staticClass:"wow color-font"},[t._v("\n            Pleasure in the job puts perfection in the work.\n          ")])])])])}],!1,null,"4967f4a0",null);e.default=component.exports},614:function(t,e,n){"use strict";n.r(e);var o=n(539),r={props:["serviceMB50"],data:function(){return{featuresData:o}}},l=n(73),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"services box section-padding"},[n("div",{staticClass:"container"},[t._m(0),t._v(" "),n("div",{staticClass:"row"},t._l(t.featuresData.slice(0,3),(function(e,o){return n("div",{key:e.id,staticClass:"col-lg-4 wow fadeInLeft",attrs:{"data-wow-delay":0==o?".5s":1==o?".7s":".9s"}},[n("div",{class:"item-box no-curve "+(t.serviceMB50&&o+1!=t.featuresData.length-1?"mb-50":"")},[n("span",{class:"icon color-font "+e.icon}),t._v(" "),n("h6",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.content))])])])})),0)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-lg-8 col-md-10"},[n("div",{staticClass:"sec-head text-center"},[n("h6",{staticClass:"wow fadeIn",attrs:{"data-wow-delay":".5s"}},[t._v("Best Features")]),t._v(" "),n("h3",{staticClass:"wow color-font"},[t._v("\n            We are a new digital product development agency\n          ")])])])])}],!1,null,"6dd3c147",null);e.default=component.exports},615:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{videoIsOpen:!1}},methods:{openVideo:function(){this.videoIsOpen=!this.videoIsOpen}},computed:{videoChannel:function(){return"vimeo"},videoId:function(){return"127203262"}}},r=n(73),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"about-cr"},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[t._m(0),t._v(" "),n("div",{staticClass:"col-lg-4 valign"},[n("div",{staticClass:"cont full-width"},[n("h3",{staticClass:"color-font"},[t._v("Huge collection.")]),t._v(" "),t._m(1),t._v(" "),n("ModalVideo",{attrs:{channel:t.videoChannel,videoId:t.videoId,isOpen:t.videoIsOpen},on:{"update:isOpen":function(e){t.videoIsOpen=e},"update:is-open":function(e){t.videoIsOpen=e}}}),t._v(" "),n("div",{staticClass:"vid-area"},[n("div",{staticClass:"vid-icon"},[n("a",{staticClass:"vid",on:{click:t.openVideo}},[t._m(2)])]),t._v(" "),t._m(3)]),t._v(" "),t._m(4)],1)])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-lg-6 img md-mb50"},[e("img",{attrs:{src:"/img/intro/4.jpg",alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h6",[t._v("\n            Innovative solutions "),n("br"),t._v("\n            to boost your creative projects.\n          ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"vid-butn back-color"},[e("span",{staticClass:"icon"},[e("i",{staticClass:"fas fa-play"})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"valign"},[n("span",{staticClass:"text"},[t._v("Watch Video")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"states"},[n("h2",{staticClass:"color-font fw-700"},[t._v("\n              125 "),n("span",{staticClass:"fz-30"},[t._v("k")])]),t._v(" "),n("p",[t._v("Projects completed around the world")])])}],!1,null,"b5f29728",null);e.default=component.exports;installComponents(component,{ModalVideo:n(546).default})},616:function(t,e,n){"use strict";n.r(e);n(74);var o=n(535),r={props:["classText"],mounted:function(){setTimeout((function(){Object(o.a)()}),1e3)}},l=n(73),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{class:"portfolio-cr section-padding pb-50 "+(t.classText?t.classText:"")},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[t._m(0),t._v(" "),n("div",{staticClass:"gallery-mons full-width"},[n("div",{staticClass:"items graphic wow fadeInUp",attrs:{"data-wow-delay":".4s"}},[n("div",{staticClass:"item-img"},[n("NuxtLink",{staticClass:"imago wow",attrs:{to:"project-details2/project-details2-dark"}},[n("img",{attrs:{src:"/img/portfolio/cr/1.jpg",alt:"image"}}),t._v(" "),n("div",{staticClass:"item-img-overlay"})])],1),t._v(" "),n("div",{staticClass:"cont flex"},[n("h6",{staticClass:"color-font"},[t._v("Creative Design")]),t._v(" "),n("span",[n("NuxtLink",{attrs:{to:"#0"}},[t._v("Graphic")])],1)])]),t._v(" "),n("div",{staticClass:"items web brand wow fadeInUp",attrs:{"data-wow-delay":".4s"}},[n("div",{staticClass:"item-img"},[n("NuxtLink",{staticClass:"imago wow",attrs:{to:"project-details2/project-details2-dark"}},[n("img",{attrs:{src:"/img/portfolio/cr/2.jpg",alt:"image"}}),t._v(" "),n("div",{staticClass:"item-img-overlay"})])],1),t._v(" "),n("div",{staticClass:"cont flex"},[n("h6",{staticClass:"color-font"},[t._v("Modern Design")]),t._v(" "),n("span",[n("NuxtLink",{attrs:{to:"#0"}},[t._v("Brand")]),t._v(",\n              "),n("NuxtLink",{attrs:{to:"#0"}},[t._v("Web")])],1)])]),t._v(" "),n("div",{staticClass:"items width2 brand wow fadeInUp",attrs:{"data-wow-delay":".4s"}},[n("div",{staticClass:"item-img"},[n("NuxtLink",{staticClass:"imago wow",attrs:{to:"project-details2/project-details2-dark"}},[n("img",{attrs:{src:"/img/portfolio/cr/3.jpg",alt:"image"}}),t._v(" "),n("div",{staticClass:"item-img-overlay"})])],1),t._v(" "),n("div",{staticClass:"cont"},[n("h6",{staticClass:"color-font"},[t._v("Creative Design")]),t._v(" "),n("span",[n("NuxtLink",{attrs:{to:"#0"}},[t._v("Website")])],1)])]),t._v(" "),n("div",{staticClass:"items width2 graphic wow fadeInUp",attrs:{"data-wow-delay":".4s"}},[n("div",{staticClass:"item-img"},[n("NuxtLink",{staticClass:"imago wow",attrs:{to:"project-details2/project-details2-dark"}},[n("img",{attrs:{src:"/img/portfolio/cr/4.jpg",alt:"image"}}),t._v(" "),n("div",{staticClass:"item-img-overlay"})])],1),t._v(" "),n("div",{staticClass:"cont"},[n("h6",{staticClass:"color-font"},[t._v("Modern Design")]),t._v(" "),n("span",[n("NuxtLink",{attrs:{to:"#0"}},[t._v("Graphic")])],1)])])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"filtering text-center col-12"},[n("div",{staticClass:"filter"},[n("span",{staticClass:"active",attrs:{"data-filter":"*"}},[t._v(" All ")]),t._v(" "),n("span",{attrs:{"data-filter":".brand"}},[t._v("Branding")]),t._v(" "),n("span",{attrs:{"data-filter":".web"}},[t._v("Mobile App")]),t._v(" "),n("span",{attrs:{"data-filter":".graphic"}},[t._v("Creative")])])])}],!1,null,"ead67b8c",null);e.default=component.exports},673:function(t,e,n){"use strict";n.r(e);var o={layout:"dark",head:function(){return{titleTemplate:"%s - Modern Agency Dark"}},mounted:function(){if(this.$refs.fixedSlider.$el&&this.$refs.MainContent){var t=this.$refs.fixedSlider.$el.offsetHeight;this.$refs.MainContent.style.marginTop=t+"px"}var e=this.$refs.navbar.$el;window.pageYOffset>300?e.classList.add("nav-scroll"):e.classList.remove("nav-scroll"),window.addEventListener("scroll",(function(){window.pageYOffset>300?e.classList.add("nav-scroll"):e.classList.remove("nav-scroll")}))}},r=n(73),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Navbar",{ref:"navbar"}),t._v(" "),n("IntroWithSlider",{ref:"fixedSlider"}),t._v(" "),n("div",{ref:"MainContent",staticClass:"main-content"},[n("Services4",{attrs:{serviceMB50:""}}),t._v(" "),n("AboutUs4"),t._v(" "),n("FunFacts1"),t._v(" "),n("Works4"),t._v(" "),n("FullTestimonials"),t._v(" "),n("Blogs2"),t._v(" "),n("CallToAction",{attrs:{img:"/img/patrn1.png"}}),t._v(" "),n("Footer")],1)],1)}),[],!1,null,"7078c488",null);e.default=component.exports;installComponents(component,{Navbar:n(529).default,IntroWithSlider:n(557).default,Services4:n(614).default,AboutUs4:n(615).default,FunFacts1:n(569).default,Works4:n(616).default,FullTestimonials:n(541).default,Blogs2:n(563).default,CallToAction:n(540).default,Footer:n(527).default})}}]);