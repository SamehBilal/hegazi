exports.ids = [84,1,16,18,23,41,46,57,69];
exports.modules = {

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/about/about-dark.vue?vue&type=template&id=5759d6ba&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Navbar',{ref:"navbar"}),_vm._ssrNode(" "),_c('PagesHeader',{attrs:{"imageLink":"/img/slid/about.jpg"},scopedSlots:_vm._u([{key:"title",fn:function(){return [_vm._v("\n      I am always bursting with talent, experience and\n      passion for what i do.\n    ")]},proxy:true}])}),_vm._ssrNode(" "),_c('AboutIntro'),_vm._ssrNode(" "),_c('Services3'),_vm._ssrNode(" "),_c('VideoWithTestimonials'),_vm._ssrNode(" <br data-v-5759d6ba><br data-v-5759d6ba><br data-v-5759d6ba> "),_c('Clients1',{attrs:{"theme":"dark"}}),_vm._ssrNode(" "),_c('CallToAction'),_vm._ssrNode(" "),_c('Footer')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/about/about-dark.vue?vue&type=template&id=5759d6ba&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/about/about-dark.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var about_darkvue_type_script_lang_js_ = ({
  layout: "dark",

  head() {
    return {
      titleTemplate: '%s - About Dark'
    };
  },

  mounted() {
    var navbar = this.$refs.navbar.$el;

    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }

});
// CONCATENATED MODULE: ./pages/about/about-dark.vue?vue&type=script&lang=js&
 /* harmony default export */ var about_about_darkvue_type_script_lang_js_ = (about_darkvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/about/about-dark.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  about_about_darkvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5759d6ba",
  "524556b6"
  
)

/* harmony default export */ var about_dark = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Navbar: __webpack_require__(26).default,PagesHeader: __webpack_require__(82).default,AboutIntro: __webpack_require__(83).default,Services3: __webpack_require__(54).default,VideoWithTestimonials: __webpack_require__(47).default,Clients1: __webpack_require__(48).default,CallToAction: __webpack_require__(33).default,Footer: __webpack_require__(24).default})


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

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Services3/index.vue?vue&type=template&id=324b0e90&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"feat sub-bg section-padding"},[_vm._ssrNode("<div class=\"container\" data-v-324b0e90>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-324b0e90><div class=\"col-lg-8 col-md-10\" data-v-324b0e90><div class=\"sec-head\" data-v-324b0e90><h6 data-wow-delay=\".5s\" class=\"wow fadeIn\" data-v-324b0e90>My Skills</h6> <h3 class=\"wow color-font\" data-v-324b0e90>\n            I help to create Art, design &amp; development.\n          </h3></div></div></div> "),_vm._ssrNode("<div class=\"row\" data-v-324b0e90>","</div>",[_vm._ssrNode("<div class=\"col-lg-3 col-md-6 items md-mb30\" data-v-324b0e90>","</div>",[_vm._ssrNode("<div data-wow-delay=\".3s\" class=\"item wow fadeIn\" data-v-324b0e90>","</div>",[_vm._ssrNode("<span class=\"icon\" data-v-324b0e90><i class=\"ion-images\" data-v-324b0e90></i></span> <h5 data-v-324b0e90>Graphic Design</h5> <p data-v-324b0e90>\n            I create graphics including illustrations, logos, layouts and photos. I can shape the visual aspects of ads, books, magazines, exhibitions and more.\n          </p> "),_c('NuxtLink',{staticClass:"more-stroke",attrs:{"to":"#0"}},[_c('span')])],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-lg-3 col-md-6 items active md-mb30\" data-v-324b0e90>","</div>",[_vm._ssrNode("<div data-wow-delay=\".3s\" class=\"item wow fadeIn\" data-v-324b0e90>","</div>",[_vm._ssrNode("<span class=\"icon\" data-v-324b0e90><i class=\"ion-ios-color-wand-outline\" data-v-324b0e90></i></span> <h5 data-v-324b0e90>Motion Graphics</h5> <p data-v-324b0e90>\n            I Translate ideas into motion graphics that can be understood by a wide audience such as animated graphics, videos for use in commercials, video games, or other visual media productions.\n          </p> "),_c('NuxtLink',{staticClass:"more-stroke",attrs:{"to":"#0"}},[_c('span')])],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-lg-3 col-md-6 items sm-mb30\" data-v-324b0e90>","</div>",[_vm._ssrNode("<div data-wow-delay=\".3s\" class=\"item wow fadeIn\" data-v-324b0e90>","</div>",[_vm._ssrNode("<span class=\"icon\" data-v-324b0e90><i class=\"ion-ios-videocam-outline\" data-v-324b0e90></i></span> <h5 data-v-324b0e90>Videography &amp; Video Editing</h5> <p data-v-324b0e90>\n            I create/manage materials such as camera footage, dialogue, sound effects, graphics and special effects to produce a final film or video product.\n          </p> "),_c('NuxtLink',{staticClass:"more-stroke",attrs:{"to":"#0"}},[_c('span')])],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-lg-3 col-md-6 items\" data-v-324b0e90>","</div>",[_vm._ssrNode("<div data-wow-delay=\".3s\" class=\"item wow fadeIn\" data-v-324b0e90>","</div>",[_vm._ssrNode("<span class=\"icon\" data-v-324b0e90><i class=\"ion-ios-camera-outline\" data-v-324b0e90></i></span> <h5 data-v-324b0e90>Photography</h5> <p data-v-324b0e90>\n            I capture events, people, objects or scenes for records, art or commercial use.\n          </p> "),_c('NuxtLink',{staticClass:"more-stroke",attrs:{"to":"#0"}},[_c('span')])],2)])],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Services3/index.vue?vue&type=template&id=324b0e90&scoped=true&

// EXTERNAL MODULE: ./common/getSiblings.js
var getSiblings = __webpack_require__(25);

// CONCATENATED MODULE: ./common/cardMouseEffect.js


const cardMouseEffect = () => {
  var featuresitems = document.querySelectorAll(".feat .items");

  if (featuresitems) {
    featuresitems.forEach(item => {
      item.onmouseover = function (event) {
        item.classList.add("active");
        let siblings = Object(getSiblings["a" /* default */])(item),
            siblingEl = siblings.map(e => e.classList.remove("active"));
      };
    });
  }
};

/* harmony default export */ var common_cardMouseEffect = (cardMouseEffect);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Services3/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Services3vue_type_script_lang_js_ = ({
  mounted() {
    common_cardMouseEffect();
  }

});
// CONCATENATED MODULE: ./components/Services3/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Services3vue_type_script_lang_js_ = (Services3vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Services3/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Services3vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "324b0e90",
  "13942ec4"
  
)

/* harmony default export */ var Services3 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 69:
/***/ (function(module) {

module.exports = JSON.parse("{\"id\":1,\"title\":\"Who I am ?\",\"paragraph1\":\"I'm a multimedia professional with 5+ years of experience in motion graphics, video editing, artwork, and shooting videos and photos for products from big brands. \",\"paragraph2\":\"I am eager to learn with a high drive to test new platforms and make a dent in the industry, while being meticulous, creative, and following the best practices.\"}");

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Pages-header/index.vue?vue&type=template&id=161cd85f&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"pages-header circle-bg valign"},[_vm._ssrNode("<div class=\"container\" data-v-161cd85f>","</div>",[_vm._ssrNode("<div class=\"row justify-content-center\" data-v-161cd85f>","</div>",[_vm._ssrNode("<div class=\"col-lg-10\" data-v-161cd85f>","</div>",[_vm._ssrNode("<div class=\"cont mt-100 mb-50 text-center\" data-v-161cd85f>","</div>",[_vm._ssrNode("<h1 class=\"color-font fw-700\" data-v-161cd85f>","</h1>",[_vm._t("title")],2)])]),_vm._ssrNode(" <div class=\"col-lg-10\" data-v-161cd85f><div class=\"img\" data-v-161cd85f><img"+(_vm._ssrAttr("src",_vm.imageLink))+" alt data-v-161cd85f></div></div>")],2)]),_vm._ssrNode(" <div class=\"half sub-bg\" data-v-161cd85f><div class=\"circle-color\" data-v-161cd85f><div class=\"gradient-circle\" data-v-161cd85f></div> <div class=\"gradient-circle two\" data-v-161cd85f></div></div></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Pages-header/index.vue?vue&type=template&id=161cd85f&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Pages-header/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Pages_headervue_type_script_lang_js_ = ({
  props: ["imageLink"]
});
// CONCATENATED MODULE: ./components/Pages-header/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Pages_headervue_type_script_lang_js_ = (Pages_headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Pages-header/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Pages_headervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "161cd85f",
  "8fc581ae"
  
)

/* harmony default export */ var Pages_header = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/About-intro/index.vue?vue&type=template&id=629bc01f&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"intro-section section-padding pb-0"},[_vm._ssrNode("<div class=\"container\" data-v-629bc01f><div class=\"row\" data-v-629bc01f><div class=\"col-lg-3 col-md-4\" data-v-629bc01f><div class=\"htit sm-mb30\" data-v-629bc01f><h4 data-v-629bc01f>"+_vm._ssrEscape(_vm._s(_vm.AboutInfo1Data.title))+"</h4></div></div> <div class=\"col-lg-8 offset-lg-1 col-md-8\" data-v-629bc01f><div class=\"text\" data-v-629bc01f><p data-splitting class=\"wow txt mb-10 words chars splitting\" data-v-629bc01f>"+_vm._ssrEscape("\n            "+_vm._s(_vm.AboutInfo1Data.paragraph1)+"\n          ")+"</p> <p data-splitting class=\"wow txt words chars splitting\" data-v-629bc01f>"+_vm._ssrEscape("\n            "+_vm._s(_vm.AboutInfo1Data.paragraph2)+"\n          ")+"</p> <br data-v-629bc01f><br data-v-629bc01f></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/About-intro/index.vue?vue&type=template&id=629bc01f&scoped=true&

// EXTERNAL MODULE: ./data/about-info.json
var about_info = __webpack_require__(69);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/About-intro/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var About_introvue_type_script_lang_js_ = ({
  data() {
    return {
      AboutInfo1Data: about_info
    };
  }

});
// CONCATENATED MODULE: ./components/About-intro/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_About_introvue_type_script_lang_js_ = (About_introvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/About-intro/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_About_introvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "629bc01f",
  "aac64c96"
  
)

/* harmony default export */ var About_intro = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=about-dark.js.map