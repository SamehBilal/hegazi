exports.ids = [92,11,23,41,45];
exports.modules = {

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/blog-dark.vue?vue&type=template&id=6b431f36&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"circle-bg\" data-v-6b431f36><div class=\"circle-color fixed\" data-v-6b431f36><div class=\"gradient-circle\" data-v-6b431f36></div> <div class=\"gradient-circle two\" data-v-6b431f36></div></div></div> "),_c('Navbar',{ref:"navbar"}),_vm._ssrNode(" "),_c('PageHeader',{attrs:{"title":"Our News.","paragraph":"All the most current news and events of our creative team."}}),_vm._ssrNode(" "),_c('BlogStanderd'),_vm._ssrNode(" "),_c('Footer')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/blog/blog-dark.vue?vue&type=template&id=6b431f36&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/blog-dark.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var blog_darkvue_type_script_lang_js_ = ({
  layout: 'dark',

  head() {
    return {
      titleTemplate: '%s - Blog Dark'
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
// CONCATENATED MODULE: ./pages/blog/blog-dark.vue?vue&type=script&lang=js&
 /* harmony default export */ var blog_blog_darkvue_type_script_lang_js_ = (blog_darkvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/blog/blog-dark.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blog_blog_darkvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6b431f36",
  "4b4e64d0"
  
)

/* harmony default export */ var blog_dark = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Navbar: __webpack_require__(26).default,PageHeader: __webpack_require__(39).default,BlogStanderd: __webpack_require__(87).default,Footer: __webpack_require__(24).default})


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

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Page-header/index.vue?vue&type=template&id=1eba3886&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{class:("page-header " + (_vm.classText && _vm.classText))},[_vm._ssrNode("<div class=\"container\" data-v-1eba3886><div class=\"row justify-content-center\" data-v-1eba3886><div class=\"col-lg-7 col-md-9\" data-v-1eba3886><div class=\"cont text-center\" data-v-1eba3886><h1 class=\"mb-10 color-font\" data-v-1eba3886>"+_vm._ssrEscape(_vm._s(_vm.title))+"</h1> <p data-v-1eba3886>"+_vm._ssrEscape(_vm._s(_vm.paragraph))+"</p></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Page-header/index.vue?vue&type=template&id=1eba3886&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Page-header/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Page_headervue_type_script_lang_js_ = ({
  props: ["title", "paragraph", "classText"]
});
// CONCATENATED MODULE: ./components/Page-header/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Page_headervue_type_script_lang_js_ = (Page_headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Page-header/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Page_headervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1eba3886",
  "0c6dab58"
  
)

/* harmony default export */ var Page_header = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 72:
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"title\":\"Build a Beautiful Blog With Ease\",\"content\":\"My job is simple and sophisticated, so it is possible to describe and simple, and flowery language. I love the feel and sophistication of its superiority. I like people with a keen mind and at the same time easy to talk to. These qualities can be combined perfectly natural. However, things like people look miserable, if these properties are connected.\",\"image\":\"/img/blog/b1.jpg\",\"tags\":[\"WordPress\",\"Themeforest\",\"Vie\"],\"date\":{\"day\":\"07\",\"month\":\"August\"}},{\"id\":2,\"title\":\"Build a Beautiful Blog With Ease\",\"content\":\"My job is simple and sophisticated, so it is possible to describe and simple, and flowery language. I love the feel and sophistication of its superiority. I like people with a keen mind and at the same time easy to talk to. These qualities can be combined perfectly natural. However, things like people look miserable, if these properties are connected.\",\"image\":\"/img/blog/b2.jpg\",\"tags\":[\"WordPress\",\"Themeforest\",\"Vie\"],\"date\":{\"day\":\"07\",\"month\":\"August\"}},{\"id\":3,\"title\":\"Build a Beautiful Blog With Ease\",\"content\":\"My job is simple and sophisticated, so it is possible to describe and simple, and flowery language. I love the feel and sophistication of its superiority. I like people with a keen mind and at the same time easy to talk to. These qualities can be combined perfectly natural. However, things like people look miserable, if these properties are connected.\",\"image\":\"/img/blog/b3.jpg\",\"tags\":[\"WordPress\",\"Themeforest\",\"Vie\"],\"date\":{\"day\":\"07\",\"month\":\"August\"}},{\"id\":4,\"title\":\"Build a Beautiful Blog With Ease\",\"content\":\"My job is simple and sophisticated, so it is possible to describe and simple, and flowery language. I love the feel and sophistication of its superiority. I like people with a keen mind and at the same time easy to talk to. These qualities can be combined perfectly natural. However, things like people look miserable, if these properties are connected.\",\"image\":\"/img/blog/b4.jpg\",\"tags\":[\"WordPress\",\"Themeforest\",\"Vie\"],\"date\":{\"day\":\"07\",\"month\":\"August\"}}]");

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Blog-standerd/index.vue?vue&type=template&id=4064c5ee&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"blog-pg section-padding pt-0"},[_vm._ssrNode("<div class=\"container\" data-v-4064c5ee>","</div>",[_vm._ssrNode("<div class=\"row justify-content-center\" data-v-4064c5ee>","</div>",[_vm._ssrNode("<div class=\"col-lg-11\" data-v-4064c5ee>","</div>",[_vm._ssrNode("<div class=\"posts\" data-v-4064c5ee>","</div>",[_vm._l((_vm.blogs),function(blogItem,index){return _vm._ssrNode("<div"+(_vm._ssrClass(null,("item " + (index === _vm.blogs.length - 1 ? '' : 'mb-80'))))+" data-v-4064c5ee>","</div>",[_vm._ssrNode("<div class=\"img\" data-v-4064c5ee>","</div>",[_c('NuxtLink',{attrs:{"to":"/blog-details/blog-details-dark"}},[_c('img',{attrs:{"src":blogItem.image,"alt":""}})])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"content\" data-v-4064c5ee>","</div>",[_vm._ssrNode("<div class=\"row justify-content-center\" data-v-4064c5ee>","</div>",[_vm._ssrNode("<div class=\"col-10\" data-v-4064c5ee>","</div>",[_c('NuxtLink',{staticClass:"date",attrs:{"to":"/blog/blog-dark"}},[_c('span',{staticClass:"num"},[_vm._v(_vm._s(blogItem.date.day))]),_vm._v(" "),_c('span',[_vm._v(_vm._s(blogItem.date.month))])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"tags\" data-v-4064c5ee>","</div>",_vm._l((blogItem.tags),function(tag,index){return _c('NuxtLink',{key:index,attrs:{"to":""}},[_vm._v("\n                      "+_vm._s(tag)+"\n                    ")])}),1),_vm._ssrNode(" "),_vm._ssrNode("<h4 class=\"title\" data-v-4064c5ee>","</h4>",[_c('NuxtLink',{attrs:{"to":"/blog-details/blog-details-dark"}},[_vm._v("\n                      "+_vm._s(blogItem.title)+"\n                    ")])],1),_vm._ssrNode(" <p data-v-4064c5ee>"+_vm._ssrEscape(_vm._s(blogItem.content))+"</p> "),_c('NuxtLink',{staticClass:"butn bord curve mt-30",attrs:{"to":"/blog-details/blog-details-dark"}},[_vm._v("\n                    Read More\n                  ")])],2)])])],2)}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"pagination\" data-v-4064c5ee>","</div>",[_vm._ssrNode("<span class=\"active\" data-v-4064c5ee>","</span>",[_c('NuxtLink',{attrs:{"to":"/blog/blog-dark"}},[_vm._v("1")])],1),_vm._ssrNode(" "),_vm._ssrNode("<span data-v-4064c5ee>","</span>",[_c('NuxtLink',{attrs:{"to":"/blog/blog-dark"}},[_vm._v("2")])],1),_vm._ssrNode(" "),_vm._ssrNode("<span data-v-4064c5ee>","</span>",[_c('NuxtLink',{attrs:{"to":"/blog/blog-dark"}},[_c('i',{staticClass:"fas fa-angle-right"})])],1)],2)],2)])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Blog-standerd/index.vue?vue&type=template&id=4064c5ee&scoped=true&

// EXTERNAL MODULE: ./data/blogs1.json
var blogs1 = __webpack_require__(72);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Blog-standerd/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Blog_standerdvue_type_script_lang_js_ = ({
  data() {
    return {
      blogs: blogs1
    };
  }

});
// CONCATENATED MODULE: ./components/Blog-standerd/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Blog_standerdvue_type_script_lang_js_ = (Blog_standerdvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Blog-standerd/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Blog_standerdvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4064c5ee",
  "b5817356"
  
)

/* harmony default export */ var Blog_standerd = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=blog-dark.js.map