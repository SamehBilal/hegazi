exports.ids = [97,2,12,16,18,23,28,30,41,55,63,69,73];
exports.modules = {

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/homepage/home1-light.vue?vue&type=template&id=3fe18628&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Navbar',{ref:"navbar",attrs:{"lr":"logoRef"}}),_vm._ssrNode(" "),_c('IntroWithSlider',{ref:"fixedSlider"}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"main-content\" data-v-3fe18628>","</div>",[_c('AboutUs1'),_vm._ssrNode(" "),_c('Services1'),_vm._ssrNode(" "),_c('Works1'),_vm._ssrNode(" "),_c('FunFacts1'),_vm._ssrNode(" "),_c('VideoWithTestimonials'),_vm._ssrNode(" "),_c('SkillsCircle',{attrs:{"theme":"light"}}),_vm._ssrNode(" "),_c('Clients1',{attrs:{"theme":"light"}}),_vm._ssrNode(" "),_c('Blogs1'),_vm._ssrNode(" "),_c('CallToAction'),_vm._ssrNode(" "),_c('Footer')],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/homepage/home1-light.vue?vue&type=template&id=3fe18628&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/homepage/home1-light.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var home1_lightvue_type_script_lang_js_ = ({
  layout: "light",

  head() {
    return {
      titleTemplate: '%s - Main Demo Light'
    };
  },

  mounted() {
    if (this.$refs.fixedSlider.$el && this.$refs.MainContent) {
      var slidHeight = this.$refs.fixedSlider.$el.offsetHeight;
      this.$refs.MainContent.style.marginTop = slidHeight + "px";
    }

    var navbar = this.$refs.navbar.$el,
        logo = this.$refs.navbar.$refs.lr;

    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
        logo.setAttribute("src", "/img/logo-dark.png");
      } else {
        navbar.classList.remove("nav-scroll");
        logo.setAttribute("src", "/img/logo-light.png");
      }
    });
  }

});
// CONCATENATED MODULE: ./pages/homepage/home1-light.vue?vue&type=script&lang=js&
 /* harmony default export */ var homepage_home1_lightvue_type_script_lang_js_ = (home1_lightvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/homepage/home1-light.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  homepage_home1_lightvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3fe18628",
  "908b86c4"
  
)

/* harmony default export */ var home1_light = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Navbar: __webpack_require__(26).default,IntroWithSlider: __webpack_require__(49).default,AboutUs1: __webpack_require__(90).default,Services1: __webpack_require__(42).default,Works1: __webpack_require__(91).default,FunFacts1: __webpack_require__(61).default,VideoWithTestimonials: __webpack_require__(47).default,SkillsCircle: __webpack_require__(67).default,Clients1: __webpack_require__(48).default,Blogs1: __webpack_require__(92).default,CallToAction: __webpack_require__(33).default,Footer: __webpack_require__(24).default})


/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer/index.vue?vue&type=template&id=57533c26&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{class:("" + (!_vm.hideBGCOLOR ? 'sub-bg' : ''))},[_vm._ssrNode("<div class=\"container\" data-v-57533c26><div class=\"row\" data-v-57533c26><div class=\"col-lg-4\" data-v-57533c26><div class=\"item md-mb50\" data-v-57533c26><div class=\"title\" data-v-57533c26><h5 data-v-57533c26>Contact Us</h5></div> <ul data-v-57533c26><li data-v-57533c26><span class=\"icon pe-7s-map-marker\" data-v-57533c26></span> <div class=\"cont\" data-v-57533c26><h6 data-v-57533c26>Official Address</h6> <p data-v-57533c26>Business Bay, Dubai, United Arab Emirates</p></div></li> <li data-v-57533c26><span class=\"icon pe-7s-mail\" data-v-57533c26></span> <div class=\"cont\" data-v-57533c26><h6 data-v-57533c26>Email Me</h6> <p data-v-57533c26>mustafa.hegazi08@gmail.com</p></div></li></ul></div></div> <div class=\"col-lg-4\" data-v-57533c26><div class=\"item md-mb50\" data-v-57533c26><div class=\"title\" data-v-57533c26><h5 data-v-57533c26><br data-v-57533c26></h5></div> <ul data-v-57533c26><li data-v-57533c26><span class=\"icon pe-7s-call\" data-v-57533c26></span> <div class=\"cont\" data-v-57533c26><h6 data-v-57533c26>Call Me</h6> <p data-v-57533c26>+20 106 4444 267</p> <p data-v-57533c26>+971 58 6050 541</p></div></li></ul></div></div> <div class=\"col-lg-4\" data-v-57533c26><div class=\"item\" data-v-57533c26><div class=\"logo\" data-v-57533c26><img src=\"/img/logo-light.png\" alt=\"logo\" data-v-57533c26></div> <div class=\"social\" data-v-57533c26><a href=\"https://www.facebook.com/mustafa.hegazi.08\" data-v-57533c26><i class=\"fab fa-facebook-f\" data-v-57533c26></i></a> <a href=\"https://twitter.com/HEGZO08\" data-v-57533c26><i class=\"fab fa-twitter\" data-v-57533c26></i></a> <a href=\"https://www.instagram.com/mustafahegazi8/\" data-v-57533c26><i class=\"fab fa-instagram\" data-v-57533c26></i></a> <a href=\"https://www.linkedin.com/in/mustafahegazi08/\" data-v-57533c26><i class=\"fab fa-linkedin\" data-v-57533c26></i></a></div> <div class=\"copy-right\" data-v-57533c26><p data-v-57533c26>\n              © <span id=\"year\" data-v-57533c26></span>, Made with passion by\n              <a href=\"https://samehbilal.000webhostapp.com/\" data-v-57533c26>Sameh Bilal</a>.\n            </p></div></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Footer/index.vue?vue&type=template&id=57533c26&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Footervue_type_script_lang_js_ = ({
  props: ['hideBGCOLOR'],

  mounted() {
    document.getElementById("year").innerHTML = new Date().getFullYear();
  }

});
// CONCATENATED MODULE: ./components/Footer/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Footervue_type_script_lang_js_ = (Footervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Footer/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Footervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "57533c26",
  "77ff718e"
  
)

/* harmony default export */ var Footer = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Footer: __webpack_require__(24).default})


/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const getSiblings = e => {
  let siblings = [];

  if (!e.parentNode) {
    return siblings;
  }

  let sibling = e.parentNode.firstChild;

  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== e) {
      siblings.push(sibling);
    }

    sibling = sibling.nextSibling;
  }

  return siblings;
};

/* harmony default export */ __webpack_exports__["a"] = (getSiblings);

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navbar/index.vue?vue&type=template&id=23a42b34&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{ref:_vm.nr,staticClass:"navbar navbar-expand-lg change",class:_vm.theme === 'light' ? 'light' : ''},[_vm._ssrNode("<div class=\"container\" data-v-23a42b34>","</div>",[_c('NuxtLink',{staticClass:"logo",attrs:{"to":"/"}},[(_vm.theme === 'light')?_c('img',{ref:"lr",attrs:{"src":"/img/logo-dark.png","alt":"logo"}}):(_vm.theme === 'themeD')?_c('img',{ref:"lr",attrs:{"src":"/img/logo-light.png","alt":"logo"}}):_c('img',{ref:"lr",attrs:{"src":"/img/logo-light.png","alt":"logo"}})]),_vm._ssrNode(" <button type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" class=\"navbar-toggler\" data-v-23a42b34><span class=\"icon-bar\" data-v-23a42b34><i class=\"fas fa-bars\" data-v-23a42b34></i></span></button> "),_vm._ssrNode("<div id=\"navbarSupportedContent\" class=\"collapse navbar-collapse\" data-v-23a42b34>","</div>",[_vm._ssrNode("<ul class=\"navbar-nav ml-auto\" data-v-23a42b34>","</ul>",[_vm._ssrNode("<li class=\"nav-item\" data-v-23a42b34>","</li>",[_c('NuxtLink',{staticClass:"nav-link",attrs:{"to":"/"}},[_vm._v("\n              Home\n            ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" data-v-23a42b34>","</li>",[_c('NuxtLink',{staticClass:"nav-link",attrs:{"to":"/about"}},[_vm._v(" About ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" data-v-23a42b34>","</li>",[_c('NuxtLink',{staticClass:"nav-link",attrs:{"to":"/contact"}},[_vm._v("\n              Contact\n            ")])],1),_vm._ssrNode(" <li class=\"nav-item\" data-v-23a42b34><a href=\"#\" id=\"resumeButton\" class=\"butn color \" data-v-23a42b34><span data-v-23a42b34>Resume</span></a></li>")],2)])],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Navbar/index.vue?vue&type=template&id=23a42b34&scoped=true&

// EXTERNAL MODULE: ./common/getSiblings.js
var getSiblings = __webpack_require__(25);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navbar/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Navbarvue_type_script_lang_js_ = ({
  props: ["lr", "theme", "nr"],
  methods: {
    handleDropdown: e => {
      Object(getSiblings["a" /* default */])(e.target.parentElement).filter(item => item.classList.contains("show")).map(item => {
        item.classList.remove("show");

        if (item.childNodes[0]) {
          item.childNodes[0].setAttribute("aria-expanded", false);
        }

        if (item.childNodes[2]) {
          item.childNodes[2].classList.remove("show");
        }
      });
      e.target.setAttribute("aria-expanded", true);

      if (e.target.parentElement) {
        e.target.parentElement.classList.toggle("show");
        let dropdownMenu = e.target.parentElement.childNodes[2];

        if (dropdownMenu) {
          dropdownMenu.classList.toggle("show");
        }
      }
    },
    handleMobileDropdown: e => {
      document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans");
    }
  }
});
// CONCATENATED MODULE: ./components/Navbar/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Navbarvue_type_script_lang_js_ = (Navbarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Navbar/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Navbarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "23a42b34",
  "38bbec7a"
  
)

/* harmony default export */ var Navbar = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const removeSlashFromBagination = () => {
  if (document.querySelectorAll(".swiper-pagination")) {
    document.querySelectorAll(".swiper-pagination").forEach(item => {
      item.innerHTML = item.innerHTML.replace(" / ", "");
    });
  }
};

/* harmony default export */ __webpack_exports__["a"] = (removeSlashFromBagination);

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const fadeWhenScroll = element => {
  window.addEventListener("scroll", () => {
    var scrolled = window.pageYOffset;

    if (element) {
      element.forEach(item => {
        item.style.transform = "translate3d(0, " + -(scrolled * 0.2) + "px, 0)";
        item.style.opacity = 1 - scrolled / 600;
      });
    }
  });
};

/* harmony default export */ __webpack_exports__["a"] = (fadeWhenScroll);

/***/ }),

/***/ 32:
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"icon\":\"pe-7s-paint-bucket\",\"title\":\"Graphic Design\",\"content\":\"Tempore corrupti temporibus fuga earum asperiores fugit laudantium.\"},{\"id\":2,\"icon\":\"pe-7s-phone\",\"title\":\"Web & Mobile Design\",\"content\":\"Tempore corrupti temporibus fuga earum asperiores fugit.\"},{\"id\":3,\"icon\":\"pe-7s-display1\",\"title\":\"Social Media Marketing\",\"content\":\"Tempore corrupti temporibus fuga earum asperiores fugit.\"},{\"id\":4,\"icon\":\"pe-7s-diskette\",\"title\":\"Document Legal Policy\",\"content\":\"Tempore corrupti temporibus fuga earum asperiores fugit laudantium.\"}]");

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Call-to-action/index.vue?vue&type=template&id=050ebe7d&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"call-action section-padding sub-bg bg-img",style:(("background-image: url(" + (_vm.img ? _vm.img : '/img/patrn.svg') + ")"))},[_vm._ssrNode("<div class=\"container\" data-v-050ebe7d>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-050ebe7d>","</div>",[_vm._ssrNode("<div class=\"col-md-8 col-lg-9\" data-v-050ebe7d><div class=\"content sm-mb30\" data-v-050ebe7d><h6 data-splitting class=\"wow words chars splitting\" data-v-050ebe7d>Let’s Talk</h6> <h2 data-splitting class=\"wow words chars splitting\" data-v-050ebe7d>\n            about your <br data-v-050ebe7d> <b class=\"back-color\" data-v-050ebe7d>next project</b>.\n          </h2></div></div> "),_vm._ssrNode("<div class=\"col-md-4 col-lg-3 valign\" data-v-050ebe7d>","</div>",[_c('NuxtLink',{staticClass:"butn bord curve wow fadeInUp",attrs:{"to":"/contact","data-wow-delay":".5s"}},[_c('span',[_vm._v("Get In Touch")])])],1)],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Call-to-action/index.vue?vue&type=template&id=050ebe7d&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Call-to-action/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Call_to_actionvue_type_script_lang_js_ = ({
  props: ["img"]
});
// CONCATENATED MODULE: ./components/Call-to-action/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Call_to_actionvue_type_script_lang_js_ = (Call_to_actionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Call-to-action/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Call_to_actionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "050ebe7d",
  "56762a8c"
  
)

/* harmony default export */ var Call_to_action = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 35:
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"lightImage\":\"/img/clients/brands/light/01.png\",\"darkImage\":\"/img/clients/brands/dark/01.png\",\"url\":\"Oppo\"},{\"id\":2,\"lightImage\":\"/img/clients/brands/light/02.png\",\"darkImage\":\"/img/clients/brands/dark/02.png\",\"url\":\"Riot Games\"},{\"id\":3,\"lightImage\":\"/img/clients/brands/light/03.png\",\"darkImage\":\"/img/clients/brands/dark/03.png\",\"url\":\"Tencent Games\"},{\"id\":4,\"lightImage\":\"/img/clients/brands/light/04.png\",\"darkImage\":\"/img/clients/brands/dark/04.png\",\"url\":\"Activision\"},{\"id\":5,\"lightImage\":\"/img/clients/brands/light/05.png\",\"darkImage\":\"/img/clients/brands/dark/05.png\",\"url\":\"AMD\"},{\"id\":6,\"lightImage\":\"/img/clients/brands/light/06.png\",\"darkImage\":\"/img/clients/brands/dark/06.png\",\"url\":\"ASUS\"},{\"id\":7,\"lightImage\":\"/img/clients/brands/light/07.png\",\"darkImage\":\"/img/clients/brands/dark/07.png\",\"url\":\"Corsair\"},{\"id\":8,\"lightImage\":\"/img/clients/brands/light/08.png\",\"darkImage\":\"/img/clients/brands/dark/08.png\",\"url\":\"XPG\"},{\"id\":9,\"lightImage\":\"/img/clients/brands/light/09.png\",\"darkImage\":\"/img/clients/brands/dark/09.png\",\"url\":\"Lenovo\"},{\"id\":10,\"lightImage\":\"/img/clients/brands/light/10.png\",\"darkImage\":\"/img/clients/brands/dark/10.png\",\"url\":\"Huawei\"},{\"id\":11,\"lightImage\":\"/img/clients/brands/light/11.png\",\"darkImage\":\"/img/clients/brands/dark/11.png\",\"url\":\"Intel\"},{\"id\":12,\"lightImage\":\"/img/clients/brands/light/12.png\",\"darkImage\":\"/img/clients/brands/dark/12.png\",\"url\":\"We Telecom Egypt\"}]");

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Services1/index.vue?vue&type=template&id=ee8eff66&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{class:("services bords section-padding " + (_vm.oStyle === '4item' ? 'lficon' : _vm.lines ? '' : 'pt-0'))},[_vm._ssrNode("<div class=\"container\" data-v-ee8eff66><div class=\"row justify-content-center\" data-v-ee8eff66><div class=\"col-lg-8 col-md-10\" data-v-ee8eff66><div class=\"sec-head text-center\" data-v-ee8eff66><h6 data-wow-delay=\".5s\" class=\"wow fadeIn\" data-v-ee8eff66>Best Features</h6> <h3 class=\"wow color-font\" data-v-ee8eff66>\n            We are a new digital product development agency\n          </h3></div></div></div> "+((_vm.oStyle === '4item')?("<div class=\"row\" data-v-ee8eff66>"+(_vm._ssrList((_vm.featuresData),function(feature){return ("<div"+(_vm._ssrAttr("data-wow-delay",((feature.id == 1
            ? '.5'
            : feature.id === 2
            ? '.7'
            : feature.id === 3
            ? '.9'
            : '1.1') + "s")))+" class=\"col-lg-6 wow fadeInLeft\" data-v-ee8eff66><div class=\"item-box\" data-v-ee8eff66><div data-v-ee8eff66><span"+(_vm._ssrClass(null,("icon " + (feature.icon))))+" data-v-ee8eff66></span></div> <div class=\"cont\" data-v-ee8eff66><h6 data-v-ee8eff66>"+_vm._ssrEscape(_vm._s(feature.title))+"</h6> <p data-v-ee8eff66>"+_vm._ssrEscape(_vm._s(feature.content))+"</p></div></div></div>")}))+"</div>"):("<div class=\"row\" data-v-ee8eff66>"+(_vm._ssrList((_vm.featuresData.slice(0, 3)),function(feature){return ("<div data-wow-delay=\".5s\" class=\"col-lg-4 wow fadeInLeft\" data-v-ee8eff66><div class=\"item-box md-mb50\" data-v-ee8eff66><span"+(_vm._ssrClass(null,("icon " + (feature.icon))))+" data-v-ee8eff66></span> <h6 data-v-ee8eff66>"+_vm._ssrEscape(_vm._s(feature.title))+"</h6> <p data-v-ee8eff66>"+_vm._ssrEscape(_vm._s(feature.content))+"</p></div></div>")}))+"</div>"))+"</div> "+((_vm.lines)?("<div class=\"line top left\" data-v-ee8eff66></div>"):"<!---->")+" "+((_vm.lines)?("<div class=\"line bottom right\" data-v-ee8eff66></div>"):"<!---->"))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Services1/index.vue?vue&type=template&id=ee8eff66&scoped=true&

// EXTERNAL MODULE: ./data/features.json
var features = __webpack_require__(32);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Services1/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Services1vue_type_script_lang_js_ = ({
  props: ["lines", "oStyle"],

  data() {
    return {
      featuresData: features
    };
  }

});
// CONCATENATED MODULE: ./components/Services1/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Services1vue_type_script_lang_js_ = (Services1vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Services1/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Services1vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "ee8eff66",
  "6726f9c8"
  
)

/* harmony default export */ var Services1 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 44:
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"title\":\"Original Solutions\",\"content\":\"If you need to redesign your new project, new visual strategy, ux structure or you do have some cool ideas for collaboration.\",\"image\":\"/img/slid/02.jpg\"},{\"id\":2,\"title\":\"Digital Design Awards\",\"content\":\"If you need to redesign your new project, new visual strategy, ux structure or you do have some cool ideas for collaboration.\",\"image\":\"/img/slid/03.jpg\"},{\"id\":3,\"title\":\"Business value through digital products\",\"content\":\"\",\"image\":\"/img/slid/01.jpg\"}]");

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Video-with-testimonials/index.vue?vue&type=template&id=23baeb85&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"block-sec"},[_vm._ssrNode("<div data-overlay-dark=\"5\" class=\"background bg-img pt-100 pb-0 parallaxie\" style=\"background-image: url(/img/bg-vid.jpg)\" data-v-23baeb85>","</div>",[_vm._ssrNode("<div class=\"container\" data-v-23baeb85>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-23baeb85>","</div>",[_vm._ssrNode("<div class=\"col-lg-6\" data-v-23baeb85></div> "),_vm._ssrNode("<div class=\"col-lg-5 offset-lg-1\" data-v-23baeb85>","</div>",[_vm._ssrNode("<div class=\"testim-box\" data-v-23baeb85>","</div>",[_vm._ssrNode("<div class=\"head-box\" data-v-23baeb85><h6 data-wow-delay=\".5s\" class=\"wow fadeIn\" data-v-23baeb85>Our Clients</h6> <h4 data-wow-delay=\".5s\" class=\"wow fadeInLeft\" data-v-23baeb85>\n                What Client's Say?\n              </h4></div> "),_c('VueSlickCarousel',_vm._b({staticClass:"slic-item wow fadeInUp",attrs:{"data-wow-delay":".5s"}},'VueSlickCarousel',_vm.settings,false),[_c('div',{staticClass:"item"},[_c('p',[_vm._v("\n                  Mustafa is one of the most determined professionals I've met. He consistently finished his projects early and with high client satisfaction rates.\n                ")]),_vm._v(" "),_c('div',{staticClass:"info"},[_c('div',{staticClass:"img"},[_c('div',{staticClass:"img-box"},[_c('img',{attrs:{"src":"/img/clients/1.png","alt":""}})])]),_vm._v(" "),_c('div',{staticClass:"cont"},[_c('div',{staticClass:"author"},[_c('h6',{staticClass:"author-name"},[_vm._v("Sameh Bilal")]),_vm._v(" "),_c('span',{staticClass:"author-details"},[_vm._v("\n                        Senior Backend Developer, Arabhardware\n                      ")])])])])]),_vm._v(" "),_c('div',{staticClass:"item"},[_c('p',[_vm._v("\n                  Nulla metus metus ullamcorper vel tincidunt sed euismod nibh\n                  volutpat velit class aptent taciti sociosqu ad litora.\n                ")]),_vm._v(" "),_c('div',{staticClass:"info"},[_c('div',{staticClass:"img"},[_c('div',{staticClass:"img-box"},[_c('img',{attrs:{"src":"/img/clients/2.jpg","alt":""}})])]),_vm._v(" "),_c('div',{staticClass:"cont"},[_c('div',{staticClass:"author"},[_c('h6',{staticClass:"author-name"},[_vm._v("Alex Regelman")]),_vm._v(" "),_c('span',{staticClass:"author-details"},[_vm._v("\n                        Co-founder, Colabrio\n                      ")])])])])]),_vm._v(" "),_c('div',{staticClass:"item"},[_c('p',[_vm._v("\n                  Nulla metus metus ullamcorper vel tincidunt sed euismod nibh\n                  volutpat velit class aptent taciti sociosqu ad litora.\n                ")]),_vm._v(" "),_c('div',{staticClass:"info"},[_c('div',{staticClass:"img"},[_c('div',{staticClass:"img-box"},[_c('img',{attrs:{"src":"/img/clients/3.jpg","alt":""}})])]),_vm._v(" "),_c('div',{staticClass:"cont"},[_c('div',{staticClass:"author"},[_c('h6',{staticClass:"author-name"},[_vm._v("Alex Regelman")]),_vm._v(" "),_c('span',{staticClass:"author-details"},[_vm._v("\n                        Co-founder, Colabrio\n                      ")])])])])])])],2)])],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Video-with-testimonials/index.vue?vue&type=template&id=23baeb85&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Video-with-testimonials/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Video_with_testimonialsvue_type_script_lang_js_ = ({
  data() {
    return {
      videoIsOpen: false,
      settings: {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    };
  },

  methods: {
    openVideo() {
      this.videoIsOpen = !this.videoIsOpen;
    }

  },
  computed: {
    videoChannel: function () {
      return "vimeo";
    },
    videoId: function () {
      return "127203262";
    }
  }
});
// CONCATENATED MODULE: ./components/Video-with-testimonials/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Video_with_testimonialsvue_type_script_lang_js_ = (Video_with_testimonialsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Video-with-testimonials/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Video_with_testimonialsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "23baeb85",
  "094fc952"
  
)

/* harmony default export */ var Video_with_testimonials = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Clients1/index.vue?vue&type=template&id=23746de3&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"clients section-padding"},[_vm._ssrNode("<div class=\"container\" data-v-23746de3>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-23746de3>","</div>",[_vm._ssrNode("<div class=\"col-lg-4 valign md-mb50\" data-v-23746de3>","</div>",[_vm._ssrNode("<div class=\"sec-head mb-0\" data-v-23746de3>","</div>",[_vm._ssrNode("<h6 data-wow-delay=\".5s\" class=\"wow fadeIn\" data-v-23746de3>Brands</h6> <h3 class=\"wow mb-20 color-font\" data-v-23746de3>My Clients</h3> "),_vm._ssrNode("<p data-v-23746de3>","</p>",[_vm._ssrNode("\n            Brands i've worked with."),_c('with',{})],2)],2)]),_vm._ssrNode(" <div class=\"col-lg-8\" data-v-23746de3><div data-v-23746de3><div class=\"row bord\" data-v-23746de3>"+(_vm._ssrList((_vm.clientsData.slice(0, _vm.clientsData.length / 3)),function(item){return ("<div class=\"col-md-3 col-6 brands\" data-v-23746de3><div"+(_vm._ssrAttr("data-wow-delay",((item.id == 1
                    ? '.3'
                    : item.id == 2
                    ? '.6'
                    : item.id == 3
                    ? '.8'
                    : item.id == 4
                    ? '.3'
                    : '') + "s")))+" class=\"item wow fadeIn\" data-v-23746de3><div class=\"img\" data-v-23746de3>"+((_vm.theme === 'light')?("<img"+(_vm._ssrAttr("src",item.lightImage))+" alt data-v-23746de3>"):("<img"+(_vm._ssrAttr("src",item.darkImage))+" alt data-v-23746de3>"))+" <a href=\"#\" data-splitting class=\"link words chars splitting\" data-v-23746de3>"+_vm._ssrEscape("\n                    "+_vm._s(item.url)+"\n                ")+"</a></div></div></div>")}))+"</div> <div class=\"row\" data-v-23746de3>"+(_vm._ssrList((_vm.clientsData.slice(4, _vm.clientsData.length)),function(item){return ("<div"+(_vm._ssrClass(null,("" + (item.id == 5
                  ? 'col-md-3 col-6 brands sm-mb30'
                  : item.id == 6
                  ? 'col-md-3 col-6 brands sm-mb30'
                  : item.id == 7
                  ? 'col-md-3 col-6 brands'
                  : item.id == 8
                  ? 'col-md-3 col-6 brands'
                  : 'hide'))))+" data-v-23746de3><div"+(_vm._ssrAttr("data-wow-delay",((item.id == 1
                    ? '.4'
                    : item.id == 2
                    ? '.7'
                    : item.id == 3
                    ? '.5'
                    : item.id == 4
                    ? '.3'
                    : '') + "s")))+" class=\"item wow fadeIn\" data-v-23746de3><div class=\"img\" data-v-23746de3>"+((_vm.theme === 'light')?("<img"+(_vm._ssrAttr("src",item.lightImage))+" alt=\"client image\" data-v-23746de3>"):("<img"+(_vm._ssrAttr("src",item.darkImage))+" alt=\"client image\" data-v-23746de3>"))+" <a href=\"#\" data-splitting class=\"link words chars splitting\" data-v-23746de3>"+_vm._ssrEscape("\n                    "+_vm._s(item.url)+"\n                ")+"</a></div></div></div>")}))+"</div> <div class=\"row\" data-v-23746de3>"+(_vm._ssrList((_vm.clientsData.slice(4, _vm.clientsData.length)),function(item){return ("<div"+(_vm._ssrClass(null,("" + (item.id == 9
                  ? 'col-md-3 col-6 brands sm-mb30'
                  : item.id == 10
                  ? 'col-md-3 col-6 brands sm-mb30'
                  : item.id == 11
                  ? 'col-md-3 col-6 brands'
                  : item.id == 12
                  ? 'col-md-3 col-6 brands'
                  : 'hide'))))+" data-v-23746de3><div"+(_vm._ssrAttr("data-wow-delay",((item.id == 1
                    ? '.4'
                    : item.id == 2
                    ? '.7'
                    : item.id == 3
                    ? '.5'
                    : item.id == 4
                    ? '.3'
                    : '') + "s")))+" class=\"item wow fadeIn\" data-v-23746de3><div class=\"img\" data-v-23746de3>"+((_vm.theme === 'light')?("<img"+(_vm._ssrAttr("src",item.lightImage))+" alt=\"client image\" data-v-23746de3>"):("<img"+(_vm._ssrAttr("src",item.darkImage))+" alt=\"client image\" data-v-23746de3>"))+" <a href=\"#\" data-splitting class=\"link words chars splitting\" data-v-23746de3>"+_vm._ssrEscape("\n                    "+_vm._s(item.url)+"\n                ")+"</a></div></div></div>")}))+"</div></div></div>")],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Clients1/index.vue?vue&type=template&id=23746de3&scoped=true&

// EXTERNAL MODULE: ./data/clients.json
var clients = __webpack_require__(35);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Clients1/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Clients1vue_type_script_lang_js_ = ({
  props: ["theme"],

  data() {
    return {
      clientsData: clients
    };
  }

});
// CONCATENATED MODULE: ./components/Clients1/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Clients1vue_type_script_lang_js_ = (Clients1vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Clients1/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Clients1vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "23746de3",
  "30a1685c"
  
)

/* harmony default export */ var Clients1 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Intro-with-slider/index.vue?vue&type=template&id=4cfe7b5d&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{ref:_vm.sliderRef,staticClass:"slider slider-prlx fixed-slider text-center"},[_vm._ssrNode("<div class=\"swiper-container parallax-slider\" data-v-4cfe7b5d>","</div>",[_c('swiper',{ref:"mySwiper",staticClass:"swiper-wrapper",attrs:{"options":_vm.swiperOptions},on:{"ready":_vm.handleSwiperReadied}},_vm._l((_vm.intro1Data),function(slide){return _c('swiper-slide',{key:slide.id,staticClass:"swiper-slide"},[_c('div',{staticClass:"bg-img valign",style:(("background-image: url(" + (slide.image) + ")")),attrs:{"data-overlay-dark":"6"}},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row justify-content-center"},[_c('div',{staticClass:"col-lg-8 col-md-10"},[_c('div',{staticClass:"caption center mt-30"},[_c('h1',{staticClass:"color-font"},[_vm._v(_vm._s(slide.title))]),_vm._v(" "),(slide.content)?_c('p',[_vm._v("\n                    "+_vm._s(slide.content)+"\n                  ")]):_vm._e(),_vm._v(" "),_c('NuxtLink',{staticClass:"butn bord curve mt-30",attrs:{"to":"#"}},[_c('span',[_vm._v("Look More")])])],1)])])])])])}),1),_vm._ssrNode(" <div class=\"setone setwo\" data-v-4cfe7b5d><div class=\"swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer\" data-v-4cfe7b5d><i class=\"fas fa-chevron-right\" data-v-4cfe7b5d></i></div> <div class=\"swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer\" data-v-4cfe7b5d><i class=\"fas fa-chevron-left\" data-v-4cfe7b5d></i></div></div> <div class=\"swiper-pagination top botm\" data-v-4cfe7b5d></div> "),_vm._ssrNode("<div class=\"social-icon\" data-v-4cfe7b5d>","</div>",[_c('NuxtLink',{attrs:{"to":"#"}},[_c('i',{staticClass:"fab fa-facebook-f"})]),_vm._ssrNode(" "),_c('NuxtLink',{attrs:{"to":"#"}},[_c('i',{staticClass:"fab fa-twitter"})]),_vm._ssrNode(" "),_c('NuxtLink',{attrs:{"to":"#"}},[_c('i',{staticClass:"fab fa-behance"})]),_vm._ssrNode(" "),_c('NuxtLink',{attrs:{"to":"#"}},[_c('i',{staticClass:"fab fa-pinterest-p"})])],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Intro-with-slider/index.vue?vue&type=template&id=4cfe7b5d&scoped=true&

// EXTERNAL MODULE: ./data/intro1.json
var intro1 = __webpack_require__(44);

// EXTERNAL MODULE: ./common/removeSlashpagination.js
var removeSlashpagination = __webpack_require__(27);

// EXTERNAL MODULE: ./common/fadeWhenScroll.js
var fadeWhenScroll = __webpack_require__(29);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Intro-with-slider/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Intro_with_slidervue_type_script_lang_js_ = ({
  props: ["sliderRef"],

  data() {
    return {
      intro1Data: intro1,
      swiperOptions: {
        speed: 1000,
        navigation: {
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next"
        },
        parallax: true,
        pagination: {
          type: "fraction",
          clickable: true,
          el: ".swiper-pagination"
        }
      }
    };
  },

  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }

  },
  methods: {
    handleSwiperReadied: swiper => {
      setTimeout(() => {
        for (var i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].childNodes[0].setAttribute("data-swiper-parallax", 0.75 * swiper.width);
        }
      });
    }
  },

  mounted() {
    Object(removeSlashpagination["a" /* default */])();
    Object(fadeWhenScroll["a" /* default */])(document.querySelectorAll(".fixed-slider .caption"));
  }

});
// CONCATENATED MODULE: ./components/Intro-with-slider/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Intro_with_slidervue_type_script_lang_js_ = (Intro_with_slidervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Intro-with-slider/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Intro_with_slidervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4cfe7b5d",
  "03b2e170"
  
)

/* harmony default export */ var Intro_with_slider = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 57:
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"icon\":\"pe-7s-smile\",\"content\":\"People who are commited to their management tasks.\",\"value\":\"2400\"},{\"id\":2,\"icon\":\"pe-7s-portfolio\",\"content\":\"Signed projects that have been confirmed complete!\",\"value\":\"133\"},{\"id\":3,\"icon\":\"pe-7s-medal\",\"content\":\"International awards and cups for design projects.\",\"value\":\"46\"}]");

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Fun-facts1/index.vue?vue&type=template&id=4967f4a0&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"number-sec section-padding"},[_vm._ssrNode("<div class=\"container\" data-v-4967f4a0>","</div>",[_vm._ssrNode("<div class=\"row justify-content-center\" data-v-4967f4a0><div class=\"col-lg-8 col-md-10\" data-v-4967f4a0><div class=\"sec-head text-center\" data-v-4967f4a0><h6 data-wow-delay=\".5s\" class=\"wow fadeIn\" data-v-4967f4a0>FUN FACTS</h6> <h3 class=\"wow color-font\" data-v-4967f4a0>\n            Pleasure in the job puts perfection in the work.\n          </h3></div></div></div> "),_vm._ssrNode("<div class=\"row\" data-v-4967f4a0>","</div>",_vm._l((_vm.funFactData),function(item){return _vm._ssrNode("<div class=\"col-md-4\" data-v-4967f4a0>","</div>",[_vm._ssrNode("<div class=\"item no-bord sm-mb50\" data-v-4967f4a0>","</div>",[_vm._ssrNode("<span"+(_vm._ssrClass(null,("icon " + (item.icon))))+" data-v-4967f4a0></span> "),_vm._ssrNode("<h3 data-v-4967f4a0>","</h3>",[_c('countTo',{ref:"countUpRef",refInFor:true,attrs:{"startVal":0,"endVal":Number(item.value),"duration":3000,"autoplay":false}},[_c('span',{staticClass:"count"},[_vm._v(" ")])])],1),_vm._ssrNode(" <p data-splitting class=\"wow txt words chars splitting\" data-v-4967f4a0>"+_vm._ssrEscape("\n                  "+_vm._s(item.content)+"\n              ")+"</p>")],2)])}),0)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Fun-facts1/index.vue?vue&type=template&id=4967f4a0&scoped=true&

// EXTERNAL MODULE: external "vue-count-to"
var external_vue_count_to_ = __webpack_require__(23);
var external_vue_count_to_default = /*#__PURE__*/__webpack_require__.n(external_vue_count_to_);

// EXTERNAL MODULE: ./data/fun-fact.json
var fun_fact = __webpack_require__(57);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Fun-facts1/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Fun_facts1vue_type_script_lang_js_ = ({
  components: {
    countTo: external_vue_count_to_default.a
  },

  data() {
    return {
      funFactData: fun_fact,
      counted: false
    };
  },

  methods: {
    startCounter() {
      this.$refs.countUpRef.map(item => item.start());
      this.counted = true;
    }

  },

  mounted() {
    let funFactsSection = document.querySelector(".number-sec");
    window.addEventListener("scroll", () => {
      if (funFactsSection && !this.counted) {
        if (window.pageYOffset > funFactsSection.offsetTop - 200) {
          this.startCounter();
        }
      }
    });
  }

});
// CONCATENATED MODULE: ./components/Fun-facts1/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Fun_facts1vue_type_script_lang_js_ = (Fun_facts1vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Fun-facts1/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Fun_facts1vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4967f4a0",
  "01f282cb"
  
)

/* harmony default export */ var Fun_facts1 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Skills-circle/index.vue?vue&type=template&id=98de57a2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{class:("skills-circle pt-50 pb-50 " + (_vm.from ? (_vm.from === 'aboutPage' ? 'sub-bg' : '') : ''))},[_vm._ssrNode("<div class=\"container\" data-v-98de57a2>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-98de57a2>","</div>",[_vm._ssrNode("<div class=\"col-lg-7\" data-v-98de57a2>","</div>",[_vm._ssrNode("<div data-v-98de57a2>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-98de57a2>","</div>",[_vm._ssrNode("<div class=\"col-md-6\" data-v-98de57a2>","</div>",[_vm._ssrNode("<div data-wow-delay=\".6\" class=\"item wow fadeInLeft\" data-v-98de57a2>","</div>",[_vm._ssrNode("<div class=\"skill\" data-v-98de57a2>","</div>",[_c('client-only',[_c('VueEllipseProgress',{attrs:{"progress":90,"legend":true,"legendValue":90,"legendFormatter":function (ref) {
    var currentValue = ref.currentValue;

    return currentValue + '%';
},"color":"rgb(18, 194, 233)","emptyColor":_vm.theme == 'dark' ? '#0f1013' : '#e5e5e5',"thickness":2,"emptyThickness":"2","size":110}})],1)],1),_vm._ssrNode(" <div class=\"cont\" data-v-98de57a2><span data-v-98de57a2>Project</span> <h6 data-v-98de57a2>Consulting</h6></div>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-md-6\" data-v-98de57a2>","</div>",[_vm._ssrNode("<div data-wow-delay=\".3\" class=\"item wow fadeInLeft\" data-v-98de57a2>","</div>",[_vm._ssrNode("<div class=\"skill\" data-v-98de57a2>","</div>",[_c('client-only',[_c('VueEllipseProgress',{attrs:{"progress":75,"legend":true,"legendValue":75,"legendFormatter":function (ref) {
    var currentValue = ref.currentValue;

    return currentValue + '%';
},"color":"rgb(18, 194, 233)","emptyColor":_vm.theme == 'dark' ? '#0f1013' : '#e5e5e5',"thickness":2,"emptyThickness":"2","size":110}})],1)],1),_vm._ssrNode(" <div class=\"cont\" data-v-98de57a2><span data-v-98de57a2>App</span> <h6 data-v-98de57a2>Development</h6></div>")],2)])],2)])])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Skills-circle/index.vue?vue&type=template&id=98de57a2&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Skills-circle/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Skills_circlevue_type_script_lang_js_ = ({
  props: ["from", "theme"]
});
// CONCATENATED MODULE: ./components/Skills-circle/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Skills_circlevue_type_script_lang_js_ = (Skills_circlevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Skills-circle/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Skills_circlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "98de57a2",
  "6a1a18c4"
  
)

/* harmony default export */ var Skills_circle = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 75:
/***/ (function(module) {

module.exports = JSON.parse("{\"id\":1,\"smallTitle\":\"About Us\",\"title\":\"Our Comapny\",\"content\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.\",\"image\":\"/img/feat.jpg\",\"status\":[{\"id\":1,\"number\":\"3\",\"letter\":\"K\",\"statusName\":\"Happy Clients\"},{\"id\":2,\"number\":\"14\",\"letter\":\"K\",\"statusName\":\"Success Projects\"}]}");

/***/ }),

/***/ 76:
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"title\":\"art & illustration\",\"secTex\":\"Innovation and Crafts\",\"image\":\"/img/portfolio/metro/01.jpg\",\"slug\":\"/project-details2/project-details2-dark\"},{\"id\":2,\"title\":\"art & illustration\",\"secTex\":\"Inspiring new space\",\"image\":\"/img/portfolio/metro/02.jpg\",\"slug\":\"/project-details2/project-details2-dark\"},{\"id\":3,\"title\":\"art & illustration\",\"secTex\":\"Natural plus modern\",\"image\":\"/img/portfolio/metro/03.jpg\",\"slug\":\"/project-details2/project-details2-dark\"},{\"id\":4,\"title\":\"art & illustration\",\"secTex\":\"Innovation and Crafts\",\"image\":\"/img/portfolio/metro/04.jpg\",\"slug\":\"/project-details2/project-details2-dark\"},{\"id\":5,\"title\":\"art & illustration\",\"secTex\":\"Natural plus modern\",\"image\":\"/img/portfolio/metro/05.jpg\",\"slug\":\"/project-details2/project-details2-dark\"}]");

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/About-us1/index.vue?vue&type=template&id=13ed9f28&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"about-us section-padding"},[_vm._ssrNode("<div class=\"container\" data-v-13ed9f28>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-13ed9f28>","</div>",[_vm._ssrNode("<div class=\"col-lg-5 valign md-mb50\" data-v-13ed9f28>","</div>",[_vm._ssrNode("<div class=\"mb-50\" data-v-13ed9f28>","</div>",[_vm._ssrNode("<h6 class=\"fw-100 text-u ls10 mb-10\" data-v-13ed9f28>"+_vm._ssrEscape(_vm._s(_vm.aboutData.smallTitle))+"</h6> <h3 class=\"fw-600 text-u ls1 mb-30 color-font\" data-v-13ed9f28>"+_vm._ssrEscape("\n            "+_vm._s(_vm.aboutData.title)+"\n          ")+"</h3> <p data-v-13ed9f28>"+_vm._ssrEscape(_vm._s(_vm.aboutData.content))+"</p> "),_c('NuxtLink',{staticClass:"butn bord curve mt-30",attrs:{"to":"#"}},[_c('span',[_vm._v("Read More")])])],2)]),_vm._ssrNode(" <div class=\"col-lg-7 img\" data-v-13ed9f28><img"+(_vm._ssrAttr("src",_vm.aboutData.image))+(_vm._ssrAttr("alt",_vm.aboutData.title))+" data-v-13ed9f28> <div class=\"stauts\" data-v-13ed9f28>"+(_vm._ssrList((_vm.aboutData.status),function(statue){return ("<div class=\"item\" data-v-13ed9f28><h4 data-v-13ed9f28>"+_vm._ssrEscape("\n              "+_vm._s(statue.number)+"\n              ")+"<span data-v-13ed9f28>"+_vm._ssrEscape(_vm._s(statue.letter))+"</span></h4> <h6 data-v-13ed9f28>"+_vm._ssrEscape(_vm._s(statue.statusName))+"</h6></div>")}))+"</div></div>")],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/About-us1/index.vue?vue&type=template&id=13ed9f28&scoped=true&

// EXTERNAL MODULE: ./data/about-us1.json
var about_us1 = __webpack_require__(75);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/About-us1/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var About_us1vue_type_script_lang_js_ = ({
  data() {
    return {
      aboutData: about_us1
    };
  }

});
// CONCATENATED MODULE: ./components/About-us1/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_About_us1vue_type_script_lang_js_ = (About_us1vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/About-us1/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_About_us1vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "13ed9f28",
  "5501f69c"
  
)

/* harmony default export */ var About_us1 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Works1/index.vue?vue&type=template&id=5f676e59&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"work-carousel metro position-re"},[_vm._ssrNode("<div class=\"container-fluid\" data-v-5f676e59>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-5f676e59>","</div>",[_vm._ssrNode("<div class=\"col-lg-12 no-padding\" data-v-5f676e59>","</div>",[_vm._ssrNode("<div class=\"swiper-container\" data-v-5f676e59>","</div>",[_c('Swiper',{ref:"mySwiper",staticClass:"swiper-wrapper",attrs:{"options":_vm.swiperOptions}},_vm._l((_vm.worksData),function(slide){return _c('SwiperSlide',{key:slide.id,staticClass:"swiper-slide"},[_c('div',{staticClass:"content wow noraidus fadeInUp",attrs:{"data-wow-delay":".3s"}},[_c('div',{staticClass:"item-img bg-img wow imago",style:(("backgroundImage: url(" + (slide.image) + ")"))}),_vm._v(" "),_c('div',{staticClass:"cont"},[_c('h6',{staticClass:"color-font"},[_c('NuxtLink',{attrs:{"to":"#"}},[_vm._v(_vm._s(slide.title))])],1),_vm._v(" "),_c('h4',[_c('NuxtLink',{attrs:{"to":"/project-details2/project-details2-dark"}},[_vm._v("\n                      "+_vm._s(slide.secTex)+"\n                    ")])],1)])])])}),1),_vm._ssrNode(" <div class=\"\n              swiper-button-next swiper-nav-ctrl\n              simp-next\n              cursor-pointer\n            \" data-v-5f676e59><span class=\"simple-btn right\" data-v-5f676e59>Next</span></div> <div class=\"\n              swiper-button-prev swiper-nav-ctrl\n              simp-prev\n              cursor-pointer\n            \" data-v-5f676e59><span class=\"simple-btn\" data-v-5f676e59>Prev</span></div>")],2)])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Works1/index.vue?vue&type=template&id=5f676e59&scoped=true&

// EXTERNAL MODULE: ./data/works1.json
var works1 = __webpack_require__(76);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Works1/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Works1vue_type_script_lang_js_ = ({
  data() {
    return {
      worksData: works1,
      swiperOptions: {
        navigation: {
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next"
        },
        slidesPerView: 2,
        centeredSlides: true,
        autoPlay: true,
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        speed: 1000,
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 0
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 0
          },
          767: {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: false
          },
          991: {
            slidesPerView: 2
          }
        }
      }
    };
  },

  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }

  }
});
// CONCATENATED MODULE: ./components/Works1/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Works1vue_type_script_lang_js_ = (Works1vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Works1/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Works1vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5f676e59",
  "5352f7e2"
  
)

/* harmony default export */ var Works1 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Blogs1/index.vue?vue&type=template&id=93e12964&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"blog section-padding sub-bg"},[_vm._ssrNode("<div class=\"container\" data-v-93e12964>","</div>",[_vm._ssrNode("<div class=\"row justify-content-center\" data-v-93e12964><div class=\"col-lg-8 col-md-10\" data-v-93e12964><div class=\"sec-head text-center\" data-v-93e12964><h6 data-wow-delay=\".5s\" class=\"wow fadeIn\" data-v-93e12964>RECENT ARTICLES</h6> <h3 class=\"wow color-font\" data-v-93e12964>From our blogs.</h3></div></div></div> "),_vm._ssrNode("<div class=\"row\" data-v-93e12964>","</div>",[_vm._ssrNode("<div class=\"col-lg-6\" data-v-93e12964>","</div>",[_vm._ssrNode("<div data-wow-delay=\".3s\" class=\"item md-mb50 wow fadeInUp\" data-v-93e12964>","</div>",[_vm._ssrNode("<div class=\"img\" data-v-93e12964><img src=\"/img/blog/1.jpg\" alt data-v-93e12964></div> "),_vm._ssrNode("<div class=\"cont\" data-v-93e12964>","</div>",[_vm._ssrNode("<div data-v-93e12964>","</div>",[_vm._ssrNode("<div class=\"info\" data-v-93e12964>","</div>",[_c('NuxtLink',{staticClass:"date",attrs:{"to":"#"}},[_c('span',[_c('i',[_vm._v("06")]),_vm._v(" August ")])]),_vm._ssrNode(" <span data-v-93e12964>/</span> "),_c('NuxtLink',{staticClass:"tag",attrs:{"to":"#"}},[_c('span',[_vm._v("WordPress")])])],2),_vm._ssrNode(" "),_vm._ssrNode("<h5 data-v-93e12964>","</h5>",[_c('NuxtLink',{attrs:{"to":"#"}},[_vm._v("\n                  How to use solid color combine with simple furnitures.\n                ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"btn-more\" data-v-93e12964>","</div>",[_c('NuxtLink',{staticClass:"simple-btn",attrs:{"to":"#"}},[_vm._v(" Read More ")])],1)],2)])],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-lg-6\" data-v-93e12964>","</div>",[_vm._ssrNode("<div data-wow-delay=\".5s\" class=\"item md-mb50 wow fadeInUp\" data-v-93e12964>","</div>",[_vm._ssrNode("<div class=\"img\" data-v-93e12964><img src=\"/img/blog/2.jpg\" alt data-v-93e12964></div> "),_vm._ssrNode("<div class=\"cont\" data-v-93e12964>","</div>",[_vm._ssrNode("<div data-v-93e12964>","</div>",[_vm._ssrNode("<div class=\"info\" data-v-93e12964>","</div>",[_c('NuxtLink',{staticClass:"date",attrs:{"to":"#"}},[_c('span',[_c('i',[_vm._v("06")]),_vm._v(" August ")])]),_vm._ssrNode(" <span data-v-93e12964>/</span> "),_c('NuxtLink',{staticClass:"tag",attrs:{"to":"#"}},[_c('span',[_vm._v("WordPress")])])],2),_vm._ssrNode(" "),_vm._ssrNode("<h5 data-v-93e12964>","</h5>",[_c('NuxtLink',{attrs:{"to":"#"}},[_vm._v("\n                  How to use solid color combine with simple furnitures.\n                ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"btn-more\" data-v-93e12964>","</div>",[_c('NuxtLink',{staticClass:"simple-btn",attrs:{"to":"#"}},[_vm._v(" Read More ")])],1)],2)])],2)])],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Blogs1/index.vue?vue&type=template&id=93e12964&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Blogs1/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Blogs1vue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/Blogs1/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Blogs1vue_type_script_lang_js_ = (Blogs1vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Blogs1/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Blogs1vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "93e12964",
  "65240ef3"
  
)

/* harmony default export */ var Blogs1 = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=home1-light.js.map