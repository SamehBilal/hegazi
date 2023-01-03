exports.ids = [124,23,41,70,72];
exports.modules = {

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/works2/works2-light.vue?vue&type=template&id=a2eafe2c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"circle-bg\" data-v-a2eafe2c><div class=\"circle-color fixed\" data-v-a2eafe2c><div class=\"gradient-circle\" data-v-a2eafe2c></div> <div class=\"gradient-circle two\" data-v-a2eafe2c></div></div></div> "),_c('Navbar',{ref:"navbar",attrs:{"lr":"logoRef","theme":"light"}}),_vm._ssrNode(" "),_c('WorksHeader',{ref:"fixedSlider"}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"main-content\" data-v-a2eafe2c>","</div>",[_c('WorksStyle2',{attrs:{"grid":3,"filterPosition":"center"}}),_vm._ssrNode(" "),_c('Footer')],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/works2/works2-light.vue?vue&type=template&id=a2eafe2c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/works2/works2-light.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var works2_lightvue_type_script_lang_js_ = ({
  layout: "light",

  head() {
    return {
      titleTemplate: '%s - Works 2 Light'
    };
  },

  mounted() {
    if (this.$refs.fixedSlider.$el && this.$refs.MainContent) {
      var slidHeight = this.$refs.fixedSlider.$el.offsetHeight;
      this.$refs.MainContent.style.marginTop = slidHeight + "px";
    }

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
// CONCATENATED MODULE: ./pages/works2/works2-light.vue?vue&type=script&lang=js&
 /* harmony default export */ var works2_works2_lightvue_type_script_lang_js_ = (works2_lightvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/works2/works2-light.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  works2_works2_lightvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "a2eafe2c",
  "3383fcb8"
  
)

/* harmony default export */ var works2_light = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Navbar: __webpack_require__(26).default,WorksHeader: __webpack_require__(50).default,WorksStyle2: __webpack_require__(65).default,Footer: __webpack_require__(24).default})


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

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Works-header/index.vue?vue&type=template&id=18cdfddc&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{ref:_vm.sliderRef,staticClass:"works-header fixed-slider hfixd valign sub-bg"},[_vm._ssrNode("<div class=\"container\" data-v-18cdfddc><div class=\"row justify-content-center\" data-v-18cdfddc><div class=\"col-lg-7 col-md-9 static\" data-v-18cdfddc><div class=\"capt mt-50\" data-v-18cdfddc><div class=\"parlx text-center\" data-v-18cdfddc><h1 class=\"color-font\" data-v-18cdfddc>amazing works</h1> <p data-v-18cdfddc>\n              Creativity involves breaking out of expected &amp; repeatable\n              patterns in order to look at things in different way than ever\n              before.\n            </p></div> <div class=\"bactxt custom-font valign\" data-v-18cdfddc><span class=\"full-width\" data-v-18cdfddc>Works</span></div></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Works-header/index.vue?vue&type=template&id=18cdfddc&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Works-header/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Works_headervue_type_script_lang_js_ = ({
  props: ['sliderRef']
});
// CONCATENATED MODULE: ./components/Works-header/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Works_headervue_type_script_lang_js_ = (Works_headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Works-header/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Works_headervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "18cdfddc",
  "47d571aa"
  
)

/* harmony default export */ var Works_header = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Works-style2/index.vue?vue&type=template&id=384653d4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{class:((_vm.grid ? (_vm.grid === 3 ? 'three-column' : null) : null) + " portfolio section-padding pb-70")},[_vm._ssrNode(((!_vm.hideFilter)?("<div class=\"container\" data-v-384653d4><div class=\"row justify-content-center\" data-v-384653d4><div class=\"col-lg-8 col-md-10\" data-v-384653d4><div class=\"sec-head text-center\" data-v-384653d4><h6 data-wow-delay=\".5s\" class=\"wow fadeIn\" data-v-384653d4>Portfolio</h6> <h3 class=\"wow color-font\" data-v-384653d4>\n            My Recent Work &amp; <br data-v-384653d4>\n            Some Past Projects.\n          </h3></div></div></div></div>"):"<!---->")+" "),_vm._ssrNode("<div class=\"container\" data-v-384653d4>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-384653d4>","</div>",[_vm._ssrNode(((!_vm.hideFilter)?("<div"+(_vm._ssrClass(null,("filtering " + (_vm.filterPosition === 'center'
            ? 'text-center'
            : _vm.filterPosition === 'left'
            ? 'text-left'
            : 'text-right') + " col-12")))+" data-v-384653d4><div class=\"filter\" data-v-384653d4><span data-filter=\"*\" class=\"active\" data-v-384653d4> All </span> <span data-filter=\".designs\" data-v-384653d4>Graphic Designs</span> <span data-filter=\".motion\" data-v-384653d4>Motion Graphics</span> <span data-filter=\".video\" data-v-384653d4>Videography &amp; Video Editing</span> <span data-filter=\".Photography\" data-v-384653d4>Photography</span> <span data-filter=\".live\" data-v-384653d4>Live Streams</span></div></div>"):"<!---->")+" "),_vm._ssrNode("<div class=\"gallery full-width\" data-v-384653d4>","</div>",[_vm._ssrNode("<div data-wow-delay=\".4s\""+(_vm._ssrClass(null,((_vm.grid === 3
              ? 'col-lg-4 col-md-6'
              : _vm.grid === 2
              ? 'col-md-6'
              : 'col-12') + " items graphic wow fadeInUp")))+" data-v-384653d4>","</div>",[_vm._ssrNode("<div class=\"item-img\" data-v-384653d4>","</div>",[_c('NuxtLink',{staticClass:"imago wow",attrs:{"to":"/project-details2/project-details2-dark"}},[_c('img',{attrs:{"src":"/img/portfolio/portfolio/1/1.jpg","alt":"image"}}),_vm._v(" "),_c('div',{staticClass:"item-img-overlay"})])],1),_vm._ssrNode(" <div class=\"cont\" data-v-384653d4><h6 data-v-384653d4>Creativity Demand</h6> <span data-v-384653d4><a href=\"#0\" data-v-384653d4>Design</a>, <a href=\"#0\" data-v-384653d4>WordPress</a></span></div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div data-wow-delay=\".4s\""+(_vm._ssrClass(null,((_vm.grid === 3
              ? 'col-lg-4 col-md-6'
              : _vm.grid === 2
              ? 'col-md-6'
              : 'col-12') + " items web wow fadeInUp")))+" data-v-384653d4>","</div>",[_vm._ssrNode("<div class=\"item-img\" data-v-384653d4>","</div>",[_c('NuxtLink',{staticClass:"imago wow",attrs:{"to":"/project-details2/project-details2-dark"}},[_c('img',{attrs:{"src":"/img/portfolio/portfolio/1/2.jpg","alt":"image"}}),_vm._v(" "),_c('div',{staticClass:"item-img-overlay"})])],1),_vm._ssrNode(" <div class=\"cont\" data-v-384653d4><h6 data-v-384653d4>Through The Breaking</h6> <span data-v-384653d4><a href=\"#0\" data-v-384653d4>Design</a>, <a href=\"#0\" data-v-384653d4>WordPress</a></span></div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div data-wow-delay=\".4s\""+(_vm._ssrClass(null,((_vm.grid === 3
              ? 'col-lg-4 col-md-6'
              : _vm.grid === 2
              ? 'col-md-6'
              : 'col-12') + " items brand wow fadeInUp")))+" data-v-384653d4>","</div>",[_vm._ssrNode("<div class=\"item-img\" data-v-384653d4>","</div>",[_c('NuxtLink',{staticClass:"imago wow",attrs:{"to":"/project-details2/project-details2-dark"}},[_c('img',{attrs:{"src":"/img/portfolio/portfolio/1/3.jpg","alt":"image"}}),_vm._v(" "),_c('div',{staticClass:"item-img-overlay"})])],1),_vm._ssrNode(" <div class=\"cont\" data-v-384653d4><h6 data-v-384653d4>Create With Creatives</h6> <span data-v-384653d4><a href=\"#0\" data-v-384653d4>Design</a>, <a href=\"#0\" data-v-384653d4>WordPress</a></span></div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div data-wow-delay=\".4s\""+(_vm._ssrClass(null,((_vm.grid === 3
              ? 'col-lg-4 col-md-6'
              : _vm.grid === 2
              ? 'col-md-6'
              : 'col-12') + " items graphic wow fadeInUp")))+" data-v-384653d4>","</div>",[_vm._ssrNode("<div class=\"item-img\" data-v-384653d4>","</div>",[_c('NuxtLink',{staticClass:"imago wow",attrs:{"to":"/project-details2/project-details2-dark"}},[_c('img',{attrs:{"src":"/img/portfolio/portfolio/1/4.jpg","alt":"image"}}),_vm._v(" "),_c('div',{staticClass:"item-img-overlay"})])],1),_vm._ssrNode(" <div class=\"cont\" data-v-384653d4><h6 data-v-384653d4>Energies of Love</h6> <span data-v-384653d4><a href=\"#0\" data-v-384653d4>Design</a>, <a href=\"#0\" data-v-384653d4>WordPress</a></span></div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div data-wow-delay=\".4s\""+(_vm._ssrClass(null,((_vm.grid === 3
              ? 'col-lg-4 col-md-6'
              : _vm.grid === 2
              ? 'col-md-6'
              : 'col-12') + " items web wow fadeInUp")))+" data-v-384653d4>","</div>",[_vm._ssrNode("<div class=\"item-img\" data-v-384653d4>","</div>",[_c('NuxtLink',{staticClass:"imago wow",attrs:{"to":"/project-details2/project-details2-dark"}},[_c('img',{attrs:{"src":"/img/portfolio/portfolio/1/5.jpg","alt":"image"}}),_vm._v(" "),_c('div',{staticClass:"item-img-overlay"})])],1),_vm._ssrNode(" <div class=\"cont\" data-v-384653d4><h6 data-v-384653d4>See It Yourself</h6> <span data-v-384653d4><a href=\"#0\" data-v-384653d4>Design</a>, <a href=\"#0\" data-v-384653d4>WordPress</a></span></div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div data-wow-delay=\".4s\""+(_vm._ssrClass(null,((_vm.grid === 3
              ? 'col-lg-4 col-md-6'
              : _vm.grid === 2
              ? 'col-md-6'
              : 'col-12') + " items brand wow fadeInUp")))+" data-v-384653d4>","</div>",[_vm._ssrNode("<div class=\"item-img\" data-v-384653d4>","</div>",[_c('NuxtLink',{staticClass:"imago wow",attrs:{"to":"/project-details2/project-details2-dark"}},[_c('img',{attrs:{"src":"/img/portfolio/portfolio/1/6.jpg","alt":"image"}}),_vm._v(" "),_c('div',{staticClass:"item-img-overlay"})])],1),_vm._ssrNode(" <div class=\"cont\" data-v-384653d4><h6 data-v-384653d4>Blast From The Past</h6> <span data-v-384653d4><a href=\"#0\" data-v-384653d4>Design</a>, <a href=\"#0\" data-v-384653d4>WordPress</a></span></div>")],2)],2)],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Works-style2/index.vue?vue&type=template&id=384653d4&scoped=true&

// EXTERNAL MODULE: ./common/initIsotope.js
var initIsotope = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Works-style2/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Works_style2vue_type_script_lang_js_ = ({
  props: ["grid", "filterPosition", "hideFilter"],

  mounted() {
    setTimeout(() => {
      Object(initIsotope["a" /* default */])();
    }, 1000);
  }

});
// CONCATENATED MODULE: ./components/Works-style2/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Works_style2vue_type_script_lang_js_ = (Works_style2vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Works-style2/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Works_style2vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "384653d4",
  "38eb743f"
  
)

/* harmony default export */ var Works_style2 = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=works2-light.js.map