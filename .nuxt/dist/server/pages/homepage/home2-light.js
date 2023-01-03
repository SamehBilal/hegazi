exports.ids = [99,13,16,23,27,31,39,41,47,55,65,68];
exports.modules = {

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/homepage/home2-light.vue?vue&type=template&id=ca350ba4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Navbar',{ref:"navbar",attrs:{"theme":"light"}}),_vm._ssrNode(" "),_c('Intro2'),_vm._ssrNode(" "),_c('Services1',{attrs:{"oStyle":"4item"}}),_vm._ssrNode(" "),_c('Video'),_vm._ssrNode(" "),_c('Portfolio',{attrs:{"grid":3,"filterPosition":"center"}}),_vm._ssrNode(" "),_c('FullTestimonials',{attrs:{"noPadding":""}}),_vm._ssrNode(" "),_c('Team2',{attrs:{"theme":"light"}}),_vm._ssrNode(" "),_c('Blogs2'),_vm._ssrNode(" "),_c('CallToAction'),_vm._ssrNode(" "),_c('Footer')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/homepage/home2-light.vue?vue&type=template&id=ca350ba4&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/homepage/home2-light.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var home2_lightvue_type_script_lang_js_ = ({
  layout: "light",

  head() {
    return {
      titleTemplate: '%s - Creative Agency Light'
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
// CONCATENATED MODULE: ./pages/homepage/home2-light.vue?vue&type=script&lang=js&
 /* harmony default export */ var homepage_home2_lightvue_type_script_lang_js_ = (home2_lightvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/homepage/home2-light.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  homepage_home2_lightvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "ca350ba4",
  "4c9eef5f"
  
)

/* harmony default export */ var home2_light = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Navbar: __webpack_require__(26).default,Intro2: __webpack_require__(93).default,Services1: __webpack_require__(42).default,Video: __webpack_require__(94).default,Portfolio: __webpack_require__(62).default,FullTestimonials: __webpack_require__(34).default,Team2: __webpack_require__(95).default,Blogs2: __webpack_require__(55).default,CallToAction: __webpack_require__(33).default,Footer: __webpack_require__(24).default})


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

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const initIsotope = () => {
  var grid = document.querySelectorAll(".gallery");
  var iso;

  if (grid.length >= 1) {
    grid.forEach(item => {
      iso = new Isotope(item, {
        itemSelector: ".items"
      });
    });
  }

  var gridMons = document.querySelectorAll(".gallery-mons");

  if (gridMons.length >= 1) {
    gridMons.forEach(item => {
      iso = new Isotope(item, {
        itemSelector: ".items",
        masonry: {
          columnWidth: ".width2"
        }
      });
    });
  }

  var filtersElem = document.querySelector(".filtering");

  if (filtersElem) {
    filtersElem.addEventListener("click", function (event) {
      if (!matchesSelector(event.target, "span")) {
        return;
      }

      var filterValue = event.target.getAttribute("data-filter");
      filterValue = filterValue;
      iso.arrange({
        filter: filterValue
      });
    });
    var buttonGroups = document.querySelectorAll(".filtering");

    for (var i = 0, len = buttonGroups.length; i < len; i++) {
      var buttonGroup = buttonGroups[i];
      radioButtonGroup(buttonGroup);
    }

    function radioButtonGroup(buttonGroup) {
      buttonGroup.addEventListener("click", function (event) {
        if (!matchesSelector(event.target, "span")) {
          return;
        }

        buttonGroup.querySelector(".active").classList.remove("active");
        event.target.classList.add("active");
      });
    }
  }
};

/* harmony default export */ __webpack_exports__["a"] = (initIsotope);

/***/ }),

/***/ 30:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


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

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Full-testimonials/index.vue?vue&type=template&id=139f1f95&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{class:("testimonials " + (_vm.withIMG
      ? 'section-padding bg-img'
      : _vm.withCOLOR
      ? 'section-padding back-color'
      : _vm.noPadding
      ? ''
      : 'section-padding') + " " + (_vm.classText ? _vm.classText : '')),style:(("background-image: " + (_vm.withIMG ? 'url(' + _vm.withIMG + ')' : 'none')))},[_vm._ssrNode(((_vm.showHead)?("<div class=\"container\" data-v-139f1f95><div class=\"row justify-content-center\" data-v-139f1f95><div class=\"col-lg-8 col-md-10\" data-v-139f1f95><div class=\"sec-head text-center\" data-v-139f1f95><h6 data-wow-delay=\".5s\" class=\"wow fadeIn\" data-v-139f1f95>Testimonials</h6> <h3 class=\"wow color-font\" data-v-139f1f95>\n            We love our clients from all over the world.\n          </h3></div></div></div></div>"):"<!---->")+" "),_vm._ssrNode("<div class=\"container-fluid position-re\" data-v-139f1f95>","</div>",[_vm._ssrNode("<div data-wow-delay=\".5s\" class=\"row wow fadeInUp\" data-v-139f1f95>","</div>",[_vm._ssrNode("<div class=\"col-lg-12\" data-v-139f1f95>","</div>",[_c('VueSlickCarousel',_vm._b({ref:"carousel",staticClass:"slic-item",attrs:{"data-wow-delay":".5s"}},'VueSlickCarousel',_vm.settings,false),[_c('div',{staticClass:"item"},[_c('div',{staticClass:"info valign"},[_c('div',{staticClass:"cont"},[_c('div',{staticClass:"author"},[_c('div',{staticClass:"img"},[_c('img',{attrs:{"src":"/img/clients/1.png","alt":""}})]),_vm._v(" "),_c('h6',{staticClass:"author-name color-font"},[_vm._v("Sameh Bilal")]),_vm._v(" "),_c('span',{staticClass:"author-details"},[_vm._v(" Senior Backend Developer, Arabhardware ")])])])]),_vm._v(" "),_c('p',[_vm._v("\n              Mustafa is one of the most determined professionals I've met. He consistently finished his projects early and with high client satisfaction rates.\n            ")])]),_vm._v(" "),_c('div',{staticClass:"item"},[_c('div',{staticClass:"info valign"},[_c('div',{staticClass:"cont"},[_c('div',{staticClass:"author"},[_c('div',{staticClass:"img"},[_c('img',{attrs:{"src":"/img/clients/1.jpg","alt":""}})]),_vm._v(" "),_c('h6',{staticClass:"author-name color-font"},[_vm._v("Alex Regelman")]),_vm._v(" "),_c('span',{staticClass:"author-details"},[_vm._v(" Co-founder, Colabrio ")])])])]),_vm._v(" "),_c('p',[_vm._v("\n              I would highly recommend Vie Digital. I worked with the team on\n              an animation for our ‘Click & Collect’ service.\n            ")])]),_vm._v(" "),_c('div',{staticClass:"item"},[_c('div',{staticClass:"info valign"},[_c('div',{staticClass:"cont"},[_c('div',{staticClass:"author"},[_c('div',{staticClass:"img"},[_c('img',{attrs:{"src":"/img/clients/1.jpg","alt":""}})]),_vm._v(" "),_c('h6',{staticClass:"author-name color-font"},[_vm._v("Alex Regelman")]),_vm._v(" "),_c('span',{staticClass:"author-details"},[_vm._v(" Co-founder, Colabrio ")])])])]),_vm._v(" "),_c('p',[_vm._v("\n              I would highly recommend Vie Digital. I worked with the team on\n              an animation for our ‘Click & Collect’ service.\n            ")])]),_vm._v(" "),_c('div',{staticClass:"item"},[_c('div',{staticClass:"info valign"},[_c('div',{staticClass:"cont"},[_c('div',{staticClass:"author"},[_c('div',{staticClass:"img"},[_c('img',{attrs:{"src":"/img/clients/1.jpg","alt":""}})]),_vm._v(" "),_c('h6',{staticClass:"author-name color-font"},[_vm._v("Alex Regelman")]),_vm._v(" "),_c('span',{staticClass:"author-details"},[_vm._v(" Co-founder, Colabrio ")])])])]),_vm._v(" "),_c('p',[_vm._v("\n              I would highly recommend Vie Digital. I worked with the team on\n              an animation for our ‘Click & Collect’ service.\n            ")])])])],1)]),_vm._ssrNode(" <div class=\"arrows\" data-v-139f1f95><div class=\"container\" data-v-139f1f95><div class=\"next cursor-pointer\" data-v-139f1f95><span class=\"pe-7s-angle-right\" data-v-139f1f95></span></div> <div class=\"prev cursor-pointer\" data-v-139f1f95><span class=\"pe-7s-angle-left\" data-v-139f1f95></span></div></div></div>")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Full-testimonials/index.vue?vue&type=template&id=139f1f95&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Full-testimonials/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Full_testimonialsvue_type_script_lang_js_ = ({
  props: ["withIMG", "withCOLOR", "noPadding", "classText", "showHead"],

  data() {
    return {
      settings: {
        dots: false,
        infinite: true,
        arrows: true,
        centerMode: true,
        autoplay: true,
        rows: 1,
        slidesToScroll: 1,
        slidesToShow: 3,
        responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            centerMode: false
          }
        }, {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            centerMode: false
          }
        }, {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            centerMode: false
          }
        }]
      }
    };
  },

  methods: {
    showNext() {
      this.$refs.carousel.next();
    },

    showPrev() {
      this.$refs.carousel.prev();
    }

  },

  mounted() {
    document.querySelector('.slick-track').classList.remove('slick-center');
  }

});
// CONCATENATED MODULE: ./components/Full-testimonials/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Full_testimonialsvue_type_script_lang_js_ = (Full_testimonialsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Full-testimonials/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Full_testimonialsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "139f1f95",
  "6299180a"
  
)

/* harmony default export */ var Full_testimonials = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_fb8a83f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_fb8a83f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_fb8a83f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_fb8a83f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_fb8a83f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Modal-video/index.vue?vue&type=template&id=fb8a83f8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.isOpen)?_c('div',[_vm._ssrNode("<div tabIndex=\"-1\" role=\"dialog\""+(_vm._ssrAttr("aria-label",_vm.aria.openMessage))+(_vm._ssrClass(null,_vm.classNames.modalVideo))+" data-v-fb8a83f8><div"+(_vm._ssrClass(null,_vm.classNames.modalVideoBody))+" data-v-fb8a83f8><button"+(_vm._ssrAttr("aria-label",_vm.aria.dismissBtnMessage))+(_vm._ssrClass(null,_vm.classNames.modalVideoCloseBtn))+" data-v-fb8a83f8></button> <div"+(_vm._ssrClass(null,_vm.classNames.modalVideoInner))+" data-v-fb8a83f8><div"+(_vm._ssrClass(null,_vm.classNames.modalVideoIframeWrap))+(_vm._ssrStyle(null,{ 'padding-bottom': _vm.paddingBottom }, null))+" data-v-fb8a83f8><iframe"+(_vm._ssrAttr("src",_vm.fullVideoUrl))+" frameBorder=\"0\""+(_vm._ssrAttr("allowFullScreen",_vm.allowFullScreen))+" tabIndex=\"-1\" data-v-fb8a83f8></iframe></div></div></div></div>")]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Modal-video/index.vue?vue&type=template&id=fb8a83f8&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Modal-video/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Modal_videovue_type_script_lang_js_ = ({
  props: {
    videoId: String,
    channel: String,
    isOpen: Boolean,
    youtube: {
      type: Object,
      default: function () {
        return {
          autoplay: 1,
          cc_load_policy: 1,
          color: null,
          controls: 1,
          disablekb: 0,
          enablejsapi: 0,
          end: null,
          fs: 1,
          h1: null,
          iv_load_policy: 1,
          list: null,
          listType: null,
          loop: 0,
          modestbranding: null,
          origin: null,
          playlist: null,
          playsinline: null,
          rel: 0,
          showinfo: 1,
          start: 0,
          wmode: "transparent",
          theme: "dark"
        };
      }
    },
    ratio: {
      type: String,
      default: "16:9"
    },
    vimeo: {
      type: Object,
      default: function () {
        return {
          api: false,
          autopause: true,
          autoplay: true,
          byline: true,
          callback: null,
          color: null,
          height: null,
          loop: false,
          maxheight: null,
          maxwidth: null,
          player_id: null,
          portrait: true,
          title: true,
          width: null,
          xhtml: false
        };
      }
    },
    allowFullScreen: {
      type: Boolean,
      default: true
    },
    animationSpeed: {
      type: Number,
      default: 300
    },
    classNames: {
      type: Object,
      default: function () {
        return {
          modalVideoEffect: "modal-video-effect",
          modalVideo: "modal-video",
          modalVideoClose: "modal-video-close",
          modalVideoBody: "modal-video-body",
          modalVideoInner: "modal-video-inner",
          modalVideoIframeWrap: "modal-video-movie-wrap",
          modalVideoCloseBtn: "modal-video-close-btn"
        };
      }
    },
    aria: {
      type: Object,
      default: function () {
        return {
          openMessage: "Modal video opened",
          dismissBtnMessage: "Close the modal video"
        };
      }
    }
  },
  methods: {
    getQueryString(obj) {
      let url = "";

      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (obj[key] !== null) {
            url += key + "=" + obj[key] + "&";
          }
        }
      }

      return url.substr(0, url.length - 1);
    },

    getYoutubeUrl(youtube, videoId) {
      const query = this.getQueryString(youtube);
      return "//www.youtube.com/embed/" + videoId + "?" + query;
    },

    getVimeoUrl(vimeo, videoId) {
      const query = this.getQueryString(vimeo);
      return "//player.vimeo.com/video/" + videoId + "?" + query;
    },

    getPadding(ratio) {
      const arr = ratio.split(":");
      const width = Number(arr[0]);
      const height = Number(arr[1]);
      const padding = height * 100 / width;
      return padding + "%";
    }

  },
  computed: {
    fullVideoUrl() {
      if (this.channel === "youtube") {
        return this.getYoutubeUrl(this.youtube, this.videoId);
      } else if (this.channel === "vimeo") {
        return this.getVimeoUrl(this.vimeo, this.videoId);
      }
    },

    paddingBottom() {
      return this.getPadding(this.ratio);
    }

  },
  watch: {
    isOpen: {
      handler: function (val) {
        this.$nextTick(() => {
          if (typeof this.$refs.closeBtn !== "undefined") {
            this.$refs.closeBtn.focus();
          }
        });
      },
      deep: true
    }
  }
});
// CONCATENATED MODULE: ./components/Modal-video/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Modal_videovue_type_script_lang_js_ = (Modal_videovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Modal-video/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(37)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Modal_videovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "fb8a83f8",
  "28931824"
  
)

/* harmony default export */ var Modal_video = __webpack_exports__["default"] = (component.exports);

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

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Blogs2/index.vue?vue&type=template&id=691f4924&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"blog-list section-padding sub-bg"},[_vm._ssrNode("<div class=\"container\" data-v-691f4924>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-691f4924>","</div>",[_vm._ssrNode("<div class=\"col-lg-4\" data-v-691f4924>","</div>",[_vm._ssrNode("<div class=\"head md-mb50\" data-v-691f4924>","</div>",[_vm._ssrNode("<h6 class=\"back-color\" data-v-691f4924>Get The Latest News</h6> <h3 data-v-691f4924>What Our Trending News.</h3> <p data-v-691f4924>\n            We provide company and finance service for startups and company\n            business.\n          </p> "),_c('NuxtLink',{attrs:{"to":"#0"}},[_c('span',[_vm._v("More Blog Posts")])])],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-lg-7 offset-lg-1\" data-v-691f4924>","</div>",[_vm._ssrNode("<div data-wow-delay=\".3s\" class=\"item wow fadeInUp\" data-v-691f4924>","</div>",[_vm._ssrNode("<div class=\"img valign\" data-v-691f4924><img src=\"/img/blog/1.jpg\" alt data-v-691f4924></div> "),_vm._ssrNode("<div class=\"cont valign\" data-v-691f4924>","</div>",[_vm._ssrNode("<div data-v-691f4924>","</div>",[_vm._ssrNode("<div class=\"info\" data-v-691f4924>","</div>",[_c('NuxtLink',{staticClass:"date",attrs:{"to":"#0"}},[_c('span',[_c('i',[_vm._v("06")]),_vm._v(" August")])]),_vm._ssrNode(" <span data-v-691f4924>/</span> "),_c('NuxtLink',{staticClass:"tag",attrs:{"to":"#0"}},[_c('span',[_vm._v("WordPress")])])],2),_vm._ssrNode(" "),_vm._ssrNode("<h5 data-v-691f4924>","</h5>",[_c('NuxtLink',{attrs:{"to":"#0"}},[_vm._v("\n                  How to use solid color combine with simple furnitures.\n                ")])],1)],2)])],2),_vm._ssrNode(" "),_vm._ssrNode("<div data-wow-delay=\".5s\" class=\"item wow fadeInUp\" data-v-691f4924>","</div>",[_vm._ssrNode("<div class=\"img valign\" data-v-691f4924><img src=\"/img/blog/2.jpg\" alt data-v-691f4924></div> "),_vm._ssrNode("<div class=\"cont valign\" data-v-691f4924>","</div>",[_vm._ssrNode("<div data-v-691f4924>","</div>",[_vm._ssrNode("<div class=\"info\" data-v-691f4924>","</div>",[_c('NuxtLink',{staticClass:"date",attrs:{"to":"#0"}},[_c('span',[_c('i',[_vm._v("06")]),_vm._v(" August")])]),_vm._ssrNode(" <span data-v-691f4924>/</span> "),_c('NuxtLink',{staticClass:"tag",attrs:{"to":"#0"}},[_c('span',[_vm._v("WordPress")])])],2),_vm._ssrNode(" "),_vm._ssrNode("<h5 data-v-691f4924>","</h5>",[_c('NuxtLink',{attrs:{"to":"#0"}},[_vm._v("\n                  How to use solid color combine with simple furnitures.\n                ")])],1)],2)])],2),_vm._ssrNode(" "),_vm._ssrNode("<div data-wow-delay=\".3s\" class=\"item wow fadeInUp\" data-v-691f4924>","</div>",[_vm._ssrNode("<div class=\"img valign\" data-v-691f4924><img src=\"/img/blog/3.jpg\" alt data-v-691f4924></div> "),_vm._ssrNode("<div class=\"cont valign\" data-v-691f4924>","</div>",[_vm._ssrNode("<div data-v-691f4924>","</div>",[_vm._ssrNode("<div class=\"info\" data-v-691f4924>","</div>",[_c('NuxtLink',{staticClass:"date",attrs:{"to":"#0"}},[_c('span',[_c('i',[_vm._v("06")]),_vm._v(" August")])]),_vm._ssrNode(" <span data-v-691f4924>/</span> "),_c('NuxtLink',{staticClass:"tag",attrs:{"to":"#0"}},[_c('span',[_vm._v("WordPress")])])],2),_vm._ssrNode(" "),_vm._ssrNode("<h5 data-v-691f4924>","</h5>",[_c('NuxtLink',{attrs:{"to":"#0"}},[_vm._v("\n                  How to use solid color combine with simple furnitures.\n                ")])],1)],2)])],2)],2)],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Blogs2/index.vue?vue&type=template&id=691f4924&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Blogs2/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Blogs2vue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/Blogs2/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Blogs2vue_type_script_lang_js_ = (Blogs2vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Blogs2/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Blogs2vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "691f4924",
  "0bee7c98"
  
)

/* harmony default export */ var Blogs2 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Portfolio/index.vue?vue&type=template&id=5d3906da&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"portfolio section-padding pb-70"},[_vm._ssrNode("<div class=\"container\" data-v-5d3906da><div class=\"row justify-content-center\" data-v-5d3906da><div class=\"col-lg-8 col-md-10\" data-v-5d3906da><div class=\"sec-head text-center\" data-v-5d3906da><h6 data-wow-delay=\".5s\" class=\"wow fadeIn\" data-v-5d3906da>Portfolio</h6> <h3 class=\"wow color-font\" data-v-5d3906da>\n            Our Recent Web Design &amp; <br data-v-5d3906da>\n            Some Past Projects.\n          </h3></div></div></div></div> "),_vm._ssrNode("<div"+(_vm._ssrClass(null,("" + (_vm.grid == 3 ? 'container-fluid' : 'container'))))+" data-v-5d3906da>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-5d3906da>","</div>",[_vm._ssrNode("<div"+(_vm._ssrClass(null,("filtering " + (_vm.filterPosition === 'center'
            ? 'text-center'
            : _vm.filterPosition === 'left'
            ? 'text-left'
            : 'text-right') + " col-12")))+" data-v-5d3906da><div class=\"filter\" data-v-5d3906da><span data-filter=\"*\" class=\"active\" data-v-5d3906da> All </span> <span data-filter=\".brand\" data-v-5d3906da>Branding</span> <span data-filter=\".web\" data-v-5d3906da>Mobile App</span> <span data-filter=\".graphic\" data-v-5d3906da>Creative</span></div></div> "),_vm._ssrNode("<div class=\"gallery full-width\" data-v-5d3906da>","</div>",[_vm._ssrNode("<div data-wow-delay=\".4s\""+(_vm._ssrClass(null,((_vm.grid == 3
              ? 'col-lg-4 col-md-6'
              : _vm.grid == 2
              ? 'col-md-6 lg-mr'
              : 'col-12') + " items graphic wow fadeInUp")))+" data-v-5d3906da>","</div>",[_vm._ssrNode("<div class=\"item-img\" data-v-5d3906da>","</div>",[_c('NuxtLink',{staticClass:"imago wow",attrs:{"to":"/project-details2/project-details2-dark"}},[_c('img',{attrs:{"src":"/img/portfolio/portfolio/1/1.jpg","alt":"image"}}),_vm._v(" "),_c('div',{staticClass:"item-img-overlay"})])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"cont\" data-v-5d3906da>","</div>",[_vm._ssrNode("<h6 data-v-5d3906da>Creativity Demand</h6> "),_vm._ssrNode("<span data-v-5d3906da>","</span>",[_c('NuxtLink',{attrs:{"to":"#0"}},[_vm._v("Design")]),_vm._ssrNode(",\n              "),_c('NuxtLink',{attrs:{"to":"#0"}},[_vm._v("WordPress")])],2)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div data-wow-delay=\".4s\""+(_vm._ssrClass(null,((_vm.grid == 3
              ? 'col-lg-4 col-md-6'
              : _vm.grid == 2
              ? 'col-md-6'
              : 'col-12') + " items web wow fadeInUp")))+" data-v-5d3906da>","</div>",[_vm._ssrNode("<div class=\"item-img\" data-v-5d3906da>","</div>",[_c('NuxtLink',{staticClass:"imago wow",attrs:{"to":"/project-details2/project-details2-dark"}},[_c('img',{attrs:{"src":"/img/portfolio/portfolio/1/2.jpg","alt":"image"}}),_vm._v(" "),_c('div',{staticClass:"item-img-overlay"})])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"cont\" data-v-5d3906da>","</div>",[_vm._ssrNode("<h6 data-v-5d3906da>Through The Breaking</h6> "),_vm._ssrNode("<span data-v-5d3906da>","</span>",[_c('NuxtLink',{attrs:{"to":"#0"}},[_vm._v("Design")]),_vm._ssrNode(",\n              "),_c('NuxtLink',{attrs:{"to":"#0"}},[_vm._v("WordPress")])],2)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div data-wow-delay=\".4s\""+(_vm._ssrClass(null,((_vm.grid == 3
              ? 'col-lg-4 col-md-6'
              : _vm.grid == 2
              ? 'col-md-6'
              : 'col-12') + " items brand wow fadeInUp")))+" data-v-5d3906da>","</div>",[_vm._ssrNode("<div class=\"item-img\" data-v-5d3906da>","</div>",[_c('NuxtLink',{staticClass:"imago wow",attrs:{"to":"/project-details2/project-details2-dark"}},[_c('img',{attrs:{"src":"/img/portfolio/portfolio/1/3.jpg","alt":"image"}}),_vm._v(" "),_c('div',{staticClass:"item-img-overlay"})])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"cont\" data-v-5d3906da>","</div>",[_vm._ssrNode("<h6 data-v-5d3906da>Create With Creatives</h6> "),_vm._ssrNode("<span data-v-5d3906da>","</span>",[_c('NuxtLink',{attrs:{"to":"#0"}},[_vm._v("Design")]),_vm._ssrNode(",\n              "),_c('NuxtLink',{attrs:{"to":"#0"}},[_vm._v("WordPress")])],2)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div data-wow-delay=\".4s\""+(_vm._ssrClass(null,((_vm.grid == 3
              ? 'col-lg-4 col-md-6'
              : _vm.grid == 2
              ? 'col-md-6'
              : 'col-12') + " items graphic wow fadeInUp")))+" data-v-5d3906da>","</div>",[_vm._ssrNode("<div class=\"item-img\" data-v-5d3906da>","</div>",[_c('NuxtLink',{staticClass:"imago wow",attrs:{"to":"/project-details2/project-details2-dark"}},[_c('img',{attrs:{"src":"/img/portfolio/portfolio/1/4.jpg","alt":"image"}}),_vm._v(" "),_c('div',{staticClass:"item-img-overlay"})])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"cont\" data-v-5d3906da>","</div>",[_vm._ssrNode("<h6 data-v-5d3906da>Energies of Love</h6> "),_vm._ssrNode("<span data-v-5d3906da>","</span>",[_c('NuxtLink',{attrs:{"to":"#"}},[_vm._v("Design")]),_vm._ssrNode(",\n              "),_c('NuxtLink',{attrs:{"to":"#"}},[_vm._v("WordPress")])],2)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div data-wow-delay=\".4s\""+(_vm._ssrClass(null,((_vm.grid == 3
              ? 'col-lg-4 col-md-6'
              : _vm.grid == 2
              ? 'col-md-6'
              : 'col-12') + " items web wow fadeInUp")))+" data-v-5d3906da>","</div>",[_vm._ssrNode("<div class=\"item-img\" data-v-5d3906da>","</div>",[_c('NuxtLink',{staticClass:"imago wow",attrs:{"to":"/project-details2/project-details2-dark"}},[_c('img',{attrs:{"src":"/img/portfolio/portfolio/1/5.jpg","alt":"image"}}),_vm._v(" "),_c('div',{staticClass:"item-img-overlay"})])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"cont\" data-v-5d3906da>","</div>",[_vm._ssrNode("<h6 data-v-5d3906da>See It Yourself</h6> "),_vm._ssrNode("<span data-v-5d3906da>","</span>",[_c('NuxtLink',{attrs:{"to":"#0"}},[_vm._v("Design")]),_vm._ssrNode(",\n              "),_c('NuxtLink',{attrs:{"to":"#0"}},[_vm._v("WordPress")])],2)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div data-wow-delay=\".4s\""+(_vm._ssrClass(null,((_vm.grid == 3
              ? 'col-lg-4 col-md-6'
              : _vm.grid == 2
              ? 'col-md-6'
              : 'col-12') + " items brand wow fadeInUp")))+" data-v-5d3906da>","</div>",[_vm._ssrNode("<div class=\"item-img\" data-v-5d3906da>","</div>",[_c('NuxtLink',{staticClass:"imago wow",attrs:{"to":"/project-details2/project-details2-dark"}},[_c('img',{attrs:{"src":"/img/portfolio/portfolio/1/6.jpg","alt":"image"}}),_vm._v(" "),_c('div',{staticClass:"item-img-overlay"})])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"cont\" data-v-5d3906da>","</div>",[_vm._ssrNode("<h6 data-v-5d3906da>Blast From The Past</h6> "),_vm._ssrNode("<span data-v-5d3906da>","</span>",[_c('NuxtLink',{attrs:{"to":"#0"}},[_vm._v("Design")]),_vm._ssrNode(",\n              "),_c('NuxtLink',{attrs:{"to":"#0"}},[_vm._v("WordPress")])],2)],2)],2)],2)],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Portfolio/index.vue?vue&type=template&id=5d3906da&scoped=true&

// EXTERNAL MODULE: ./common/initIsotope.js
var initIsotope = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Portfolio/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Portfoliovue_type_script_lang_js_ = ({
  props: ["grid", "filterPosition"],

  mounted() {
    setTimeout(() => {
      Object(initIsotope["a" /* default */])();
    }, 1000);
  }

});
// CONCATENATED MODULE: ./components/Portfolio/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Portfoliovue_type_script_lang_js_ = (Portfoliovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Portfolio/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Portfoliovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5d3906da",
  "1ed7ae91"
  
)

/* harmony default export */ var Portfolio = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Intro2/index.vue?vue&type=template&id=1de9919d&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"slider-st valign position-re"},[_vm._ssrNode("<div class=\"container\" data-v-1de9919d>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-1de9919d>","</div>",[_vm._ssrNode("<div class=\"col-lg-6 valign\" data-v-1de9919d>","</div>",[_vm._ssrNode("<div class=\"cont md-mb50\" data-v-1de9919d>","</div>",[_vm._ssrNode("<div class=\"sub-title mb-5\" data-v-1de9919d><h6 data-v-1de9919d>Digital Consulting Agency</h6></div> <h1 class=\"mb-10 fw-600\" data-v-1de9919d>Unique Business Consulting.</h1> <p data-v-1de9919d>\n            We help our clients succeed by creating brand identities, digital\n            experiences, and print materials.\n          </p> "),_c('NuxtLink',{staticClass:"butn bord curve mt-30",attrs:{"to":"/about/about-dark"}},[_c('span',[_vm._v("About Us")])])],2)]),_vm._ssrNode(" <div class=\"col-lg-6\" data-v-1de9919d><div class=\"img\" data-v-1de9919d><img src=\"/img/slid/001.jpg\" alt data-v-1de9919d></div></div>")],2)]),_vm._ssrNode(" <div class=\"line bottom left\" data-v-1de9919d></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Intro2/index.vue?vue&type=template&id=1de9919d&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Intro2/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Intro2vue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/Intro2/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Intro2vue_type_script_lang_js_ = (Intro2vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Intro2/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Intro2vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1de9919d",
  "62ec4979"
  
)

/* harmony default export */ var Intro2 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Video/index.vue?vue&type=template&id=22939162&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"video bg-img parallaxie",staticStyle:{"background-image":"url(/img/bg-vid.jpg)"}},[_c('ModalVideo',{attrs:{"channel":_vm.videoChannel,"videoId":_vm.videoId,"isOpen":_vm.videoIsOpen},on:{"update:isOpen":function($event){_vm.videoIsOpen=$event},"update:is-open":function($event){_vm.videoIsOpen=$event}}}),_vm._ssrNode(" <a class=\"vid valign\" data-v-22939162><div class=\"vid-butn\" data-v-22939162><span class=\"icon\" data-v-22939162><i class=\"pe-7s-play\" data-v-22939162></i></span></div></a> <div class=\"container\" data-v-22939162><div class=\"stauts\" data-v-22939162><div class=\"item\" data-v-22939162><h4 data-v-22939162>3<span data-v-22939162>K</span> +</h4> <h6 data-v-22939162>Happy Clients</h6></div> <div class=\"item\" data-v-22939162><h4 data-v-22939162>14<span data-v-22939162>K</span> +</h4> <h6 data-v-22939162>Success Projects</h6></div></div></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Video/index.vue?vue&type=template&id=22939162&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Video/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Videovue_type_script_lang_js_ = ({
  data() {
    return {
      videoIsOpen: false
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
// CONCATENATED MODULE: ./components/Video/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Videovue_type_script_lang_js_ = (Videovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Video/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Videovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "22939162",
  "1fc3af84"
  
)

/* harmony default export */ var Video = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ModalVideo: __webpack_require__(38).default})


/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Team2/index.vue?vue&type=template&id=41bc1fc8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"team section-padding"},[_vm._ssrNode("<div class=\"container\" data-v-41bc1fc8><div class=\"row justify-content-center\" data-v-41bc1fc8><div class=\"col-lg-8 col-md-10\" data-v-41bc1fc8><div class=\"sec-head text-center\" data-v-41bc1fc8><h6 data-wow-delay=\".5s\" class=\"wow fadeIn\" data-v-41bc1fc8>Our Team</h6> <h3 class=\"wow color-font\" data-v-41bc1fc8>\n            An original team of creators designers &amp; dreamers.\n          </h3></div></div></div></div> <div class=\"container-fluid\" data-v-41bc1fc8><div class=\"row\" data-v-41bc1fc8><div class=\"col-lg-3 col-md-6\" data-v-41bc1fc8><div class=\"item cir md-mb50\" data-v-41bc1fc8><div class=\"img\" data-v-41bc1fc8><img src=\"/img/team/1.jpg\" alt data-v-41bc1fc8> <div id=\"circle\" data-v-41bc1fc8><svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"300px\" height=\"300px\" viewBox=\"0 0 300 300\" enable-background=\"new 0 0 300 300\" xml:space=\"preserve\" data-v-41bc1fc8><defs data-v-41bc1fc8><path id=\"circlePath\" d=\" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 \" data-v-41bc1fc8></path></defs> <circle cx=\"150\" cy=\"100\" r=\"75\" fill=\"none\" data-v-41bc1fc8></circle> <g data-v-41bc1fc8><use xlink:href=\"#circlePath\" fill=\"none\" data-v-41bc1fc8></use> <text"+(_vm._ssrAttr("fill",_vm.theme === 'light' ? 'rgb(18, 194, 233)' : '#fff'))+" data-v-41bc1fc8><textPath xlink:href=\"#circlePath\" data-v-41bc1fc8>\n                      CEO Manager CEO Manager CEO Manager\n                    </textPath></text></g></svg></div> <div class=\"info\" data-v-41bc1fc8><h6 data-v-41bc1fc8>Ryan Hicks</h6> <span data-v-41bc1fc8>Client Manager</span></div></div></div></div> <div class=\"col-lg-3 col-md-6\" data-v-41bc1fc8><div class=\"item cir md-mb50\" data-v-41bc1fc8><div class=\"img\" data-v-41bc1fc8><img src=\"/img/team/2.jpg\" alt data-v-41bc1fc8> <div id=\"circle\" data-v-41bc1fc8><svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"300px\" height=\"300px\" viewBox=\"0 0 300 300\" enable-background=\"new 0 0 300 300\" xml:space=\"preserve\" data-v-41bc1fc8><defs data-v-41bc1fc8><path id=\"circlePath\" d=\" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 \" data-v-41bc1fc8></path></defs> <circle cx=\"150\" cy=\"100\" r=\"75\" fill=\"none\" data-v-41bc1fc8></circle> <g data-v-41bc1fc8><use xlink:href=\"#circlePath\" fill=\"none\" data-v-41bc1fc8></use> <text"+(_vm._ssrAttr("fill",_vm.theme === 'light' ? 'rgb(18, 194, 233)' : '#fff'))+" data-v-41bc1fc8><textPath xlink:href=\"#circlePath\" data-v-41bc1fc8>\n                      Interior Designer Interior Designer Interior Designer\n                    </textPath></text></g></svg></div> <div class=\"info\" data-v-41bc1fc8><h6 data-v-41bc1fc8>Ryan Hicks</h6> <span data-v-41bc1fc8>Client Manager</span></div></div></div></div> <div class=\"col-lg-3 col-md-6\" data-v-41bc1fc8><div class=\"item cir sm-mb50\" data-v-41bc1fc8><div class=\"img\" data-v-41bc1fc8><img src=\"/img/team/3.jpg\" alt data-v-41bc1fc8> <div id=\"circle\" data-v-41bc1fc8><svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"300px\" height=\"300px\" viewBox=\"0 0 300 300\" enable-background=\"new 0 0 300 300\" xml:space=\"preserve\" data-v-41bc1fc8><defs data-v-41bc1fc8><path id=\"circlePath\" d=\" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 \" data-v-41bc1fc8></path></defs> <circle cx=\"150\" cy=\"100\" r=\"75\" fill=\"none\" data-v-41bc1fc8></circle> <g data-v-41bc1fc8><use xlink:href=\"#circlePath\" fill=\"none\" data-v-41bc1fc8></use> <text"+(_vm._ssrAttr("fill",_vm.theme === 'light' ? 'rgb(18, 194, 233)' : '#fff'))+" data-v-41bc1fc8><textPath xlink:href=\"#circlePath\" data-v-41bc1fc8>\n                      Landscape Designer Landscape Designer Landscape Designer\n                    </textPath></text></g></svg></div> <div class=\"info\" data-v-41bc1fc8><h6 data-v-41bc1fc8>Ryan Hicks</h6> <span data-v-41bc1fc8>Client Manager</span></div></div></div></div> <div class=\"col-lg-3 col-md-6\" data-v-41bc1fc8><div class=\"item cir\" data-v-41bc1fc8><div class=\"img\" data-v-41bc1fc8><img src=\"/img/team/4.jpg\" alt data-v-41bc1fc8> <div id=\"circle\" data-v-41bc1fc8><svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"300px\" height=\"300px\" viewBox=\"0 0 300 300\" enable-background=\"new 0 0 300 300\" xml:space=\"preserve\" data-v-41bc1fc8><defs data-v-41bc1fc8><path id=\"circlePath\" d=\" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 \" data-v-41bc1fc8></path></defs> <circle cx=\"150\" cy=\"100\" r=\"75\" fill=\"none\" data-v-41bc1fc8></circle> <g data-v-41bc1fc8><use xlink:href=\"#circlePath\" fill=\"none\" data-v-41bc1fc8></use> <text"+(_vm._ssrAttr("fill",_vm.theme === 'light' ? 'rgb(18, 194, 233)' : '#fff'))+" data-v-41bc1fc8><textPath xlink:href=\"#circlePath\" data-v-41bc1fc8>\n                      Client Manager Client Manager Client Manager\n                    </textPath></text></g></svg></div> <div class=\"info\" data-v-41bc1fc8><h6 data-v-41bc1fc8>Ryan Hicks</h6> <span data-v-41bc1fc8>Client Manager</span></div></div></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Team2/index.vue?vue&type=template&id=41bc1fc8&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Team2/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Team2vue_type_script_lang_js_ = ({
  props: ["theme"],

  mounted() {
    console.log(this.theme);
  }

});
// CONCATENATED MODULE: ./components/Team2/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Team2vue_type_script_lang_js_ = (Team2vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Team2/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Team2vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "41bc1fc8",
  "47c99804"
  
)

/* harmony default export */ var Team2 = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=home2-light.js.map