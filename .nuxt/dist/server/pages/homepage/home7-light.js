exports.ids = [109,6,13,23,25,27,41,53,59,77];
exports.modules = {

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/About-us5/index.vue?vue&type=template&id=11bf9138&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"about-cr"},[_vm._ssrNode("<div class=\"container-fluid\" data-v-11bf9138><div class=\"row\" data-v-11bf9138><div class=\"col-lg-6 img md-mb50\" data-v-11bf9138><img src=\"/img/intro/4.jpg\" alt data-v-11bf9138></div> <div class=\"col-lg-5 valign\" data-v-11bf9138><div class=\"cont full-width\" data-v-11bf9138><h3 class=\"color-font\" data-v-11bf9138>UI / UX Designer</h3> <h5 class=\"co-tit mb-15\" data-v-11bf9138>We help to create visual strategies.</h5> <p data-v-11bf9138>\n            We are Vie. We create award-winning websites, remarkable brands\n            and cutting-edge apps.Nullam imperdie.\n          </p> <div class=\"skills-box mt-40\" data-v-11bf9138><div class=\"skill-item\" data-v-11bf9138><h5 class=\"fz-14 mb-15\" data-v-11bf9138>UI / UX Design</h5> <div class=\"skill-progress\" data-v-11bf9138><div data-value=\"90%\" class=\"progres\" data-v-11bf9138></div></div></div> <div class=\"skill-item\" data-v-11bf9138><h5 class=\"fz-14 mb-15\" data-v-11bf9138>Apps Development</h5> <div class=\"skill-progress\" data-v-11bf9138><div data-value=\"80%\" class=\"progres\" data-v-11bf9138></div></div></div></div></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/About-us5/index.vue?vue&type=template&id=11bf9138&scoped=true&

// CONCATENATED MODULE: ./common/aboutSkillsProgress.js
const aboutSkillsProgress = () => {
  let skillInAbout = document.querySelector(".about-cr .skills-box");

  if (skillInAbout) {
    window.addEventListener("scroll", () => {
      document.querySelectorAll(".skill-progress .progres").forEach(item => {
        let myVal = item.getAttribute("data-value");

        if (window.pageYOffset > document.querySelector(".about-cr").offsetTop - 200) {
          item.style.width = myVal;
        }
      });
    });
  }
};

/* harmony default export */ var common_aboutSkillsProgress = (aboutSkillsProgress);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/About-us5/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var About_us5vue_type_script_lang_js_ = ({
  mounted() {
    common_aboutSkillsProgress();
  }

});
// CONCATENATED MODULE: ./components/About-us5/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_About_us5vue_type_script_lang_js_ = (About_us5vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/About-us5/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_About_us5vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "11bf9138",
  "aed67cc0"
  
)

/* harmony default export */ var About_us5 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Services5/index.vue?vue&type=template&id=5327169a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"services box lficon section-padding position-re"},[_vm._ssrNode("<div class=\"container\" data-v-5327169a><div class=\"row justify-content-center\" data-v-5327169a><div class=\"col-lg-8 col-md-10\" data-v-5327169a><div class=\"sec-head text-center\" data-v-5327169a><h6 data-wow-delay=\".5s\" class=\"wow fadeIn\" data-v-5327169a>Best Features</h6> <h3 class=\"wow color-font\" data-v-5327169a>\n            We are a new digital product development agency\n          </h3></div></div></div> <div class=\"row\" data-v-5327169a>"+(_vm._ssrList((_vm.featuresData),function(item,index){return ("<div"+(_vm._ssrAttr("data-wow-delay",index == 0
            ? '.5s'
            : index == 1
            ? '.7s'
            : index === 2
            ? '.9s'
            : '.5s'))+" class=\"col-lg-6 wow fadeInLeft\" data-v-5327169a><div class=\"item-box no-curve\" data-v-5327169a><div data-v-5327169a><span"+(_vm._ssrClass(null,("icon color-font " + (item.icon))))+" data-v-5327169a></span></div> <div class=\"cont\" data-v-5327169a><h6 data-v-5327169a>"+_vm._ssrEscape(_vm._s(item.title))+"</h6> <p data-v-5327169a>"+_vm._ssrEscape(_vm._s(item.content))+"</p></div></div></div>")}))+"</div></div> <div class=\"line bottom right\" data-v-5327169a></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Services5/index.vue?vue&type=template&id=5327169a&scoped=true&

// EXTERNAL MODULE: ./data/features.json
var features = __webpack_require__(32);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Services5/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Services5vue_type_script_lang_js_ = ({
  data() {
    return {
      featuresData: features
    };
  }

});
// CONCATENATED MODULE: ./components/Services5/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Services5vue_type_script_lang_js_ = (Services5vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Services5/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Services5vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5327169a",
  "1fff4e20"
  
)

/* harmony default export */ var Services5 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Works5/index.vue?vue&type=template&id=401b0c17&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"portfolio-frl section-padding pb-70"},[_vm._ssrNode("<div class=\"container\" data-v-401b0c17><div class=\"row justify-content-center\" data-v-401b0c17><div class=\"col-lg-8 col-md-10\" data-v-401b0c17><div class=\"sec-head text-center\" data-v-401b0c17><h6 data-wow-delay=\".5s\" class=\"wow fadeIn\" data-v-401b0c17>Portfolio</h6> <h3 class=\"wow color-font\" data-v-401b0c17>\n            Our Recent Web Design &amp; <br data-v-401b0c17>\n            Some Past Projects.\n          </h3></div></div></div></div> "),_vm._ssrNode("<div class=\"container\" data-v-401b0c17>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-401b0c17>","</div>",[_vm._ssrNode("<div class=\"filtering col-12\" data-v-401b0c17><div data-wow-delay=\".5s\" class=\"filter wow fadeIn\" data-v-401b0c17><span data-filter=\"*\" class=\"active\" data-v-401b0c17> All </span> <span data-filter=\".brand\" data-v-401b0c17>Branding</span> <span data-filter=\".web\" data-v-401b0c17>Mobile App</span> <span data-filter=\".graphic\" data-v-401b0c17>Creative</span></div></div> "),_vm._ssrNode("<div class=\"gallery full-width\" data-v-401b0c17>","</div>",[_vm._ssrNode("<div data-wow-delay=\".4s\" class=\"col-md-6 items graphic lg-mr wow fadeInUp\" data-v-401b0c17>","</div>",[_vm._ssrNode("<div class=\"item-img\" data-v-401b0c17>","</div>",[_vm._ssrNode("<div class=\"cont\" data-v-401b0c17><h6 data-v-401b0c17>Creative Mobile App</h6> <p data-v-401b0c17>Ui / Ux creative mobile app design</p></div> "),_c('NuxtLink',{staticClass:"rota",attrs:{"to":"project-details2/project-details2-dark"}},[_c('img',{attrs:{"src":"/img/portfolio/freelancer/1.jpg","alt":"image"}}),_vm._v(" "),_c('div',{staticClass:"item-img-overlay"})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"tags\" data-v-401b0c17>","</div>",[_vm._ssrNode("<span data-v-401b0c17>","</span>",[_c('NuxtLink',{attrs:{"to":"#0"}},[_vm._v("App")])],1),_vm._ssrNode(" "),_vm._ssrNode("<span data-v-401b0c17>","</span>",[_c('NuxtLink',{attrs:{"to":"#0"}},[_vm._v("Fitnes")])],1),_vm._ssrNode(" "),_vm._ssrNode("<span data-v-401b0c17>","</span>",[_c('NuxtLink',{attrs:{"to":"#0"}},[_vm._v("Creative")])],1)],2)],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div data-wow-delay=\".4s\" class=\"col-md-6 items web wow fadeInUp\" data-v-401b0c17>","</div>",[_vm._ssrNode("<div class=\"item-img\" data-v-401b0c17>","</div>",[_vm._ssrNode("<div class=\"cont\" data-v-401b0c17><h6 data-v-401b0c17>Creative Mobile App</h6> <p data-v-401b0c17>Ui / Ux creative mobile app design</p></div> "),_c('NuxtLink',{staticClass:"rota",attrs:{"to":"project-details2/project-details2-dark"}},[_c('img',{attrs:{"src":"/img/portfolio/freelancer/2.jpg","alt":"image"}}),_vm._v(" "),_c('div',{staticClass:"item-img-overlay"})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"tags\" data-v-401b0c17>","</div>",[_vm._ssrNode("<span data-v-401b0c17>","</span>",[_c('NuxtLink',{attrs:{"to":"#0"}},[_vm._v("App")])],1),_vm._ssrNode(" "),_vm._ssrNode("<span data-v-401b0c17>","</span>",[_c('NuxtLink',{attrs:{"to":"#0"}},[_vm._v("Fitnes")])],1),_vm._ssrNode(" "),_vm._ssrNode("<span data-v-401b0c17>","</span>",[_c('NuxtLink',{attrs:{"to":"#0"}},[_vm._v("Creative")])],1)],2)],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div data-wow-delay=\".4s\" class=\"col-md-6 items web wow fadeInUp\" data-v-401b0c17>","</div>",[_vm._ssrNode("<div class=\"item-img\" data-v-401b0c17>","</div>",[_vm._ssrNode("<div class=\"cont\" data-v-401b0c17><h6 data-v-401b0c17>Creative Mobile App</h6> <p data-v-401b0c17>Ui / Ux creative mobile app design</p></div> "),_c('NuxtLink',{staticClass:"rota",attrs:{"to":"project-details2/project-details2-dark"}},[_c('img',{attrs:{"src":"/img/portfolio/freelancer/3.jpg","alt":"image"}}),_vm._v(" "),_c('div',{staticClass:"item-img-overlay"})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"tags\" data-v-401b0c17>","</div>",[_vm._ssrNode("<span data-v-401b0c17>","</span>",[_c('NuxtLink',{attrs:{"to":"#0"}},[_vm._v("App")])],1),_vm._ssrNode(" "),_vm._ssrNode("<span data-v-401b0c17>","</span>",[_c('NuxtLink',{attrs:{"to":"#0"}},[_vm._v("Fitnes")])],1),_vm._ssrNode(" "),_vm._ssrNode("<span data-v-401b0c17>","</span>",[_c('NuxtLink',{attrs:{"to":"#0"}},[_vm._v("Creative")])],1)],2)],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div data-wow-delay=\".4s\" class=\"col-md-6 items web graphic wow fadeInUp\" data-v-401b0c17>","</div>",[_vm._ssrNode("<div class=\"item-img\" data-v-401b0c17>","</div>",[_vm._ssrNode("<div class=\"cont\" data-v-401b0c17><h6 data-v-401b0c17>Creative Mobile App</h6> <p data-v-401b0c17>Ui / Ux creative mobile app design</p></div> "),_c('NuxtLink',{staticClass:"rota",attrs:{"to":"project-details2/project-details2-dark"}},[_c('img',{attrs:{"src":"/img/portfolio/freelancer/4.jpg","alt":"image"}}),_vm._v(" "),_c('div',{staticClass:"item-img-overlay"})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"tags\" data-v-401b0c17>","</div>",[_vm._ssrNode("<span data-v-401b0c17>","</span>",[_c('NuxtLink',{attrs:{"to":"#0"}},[_vm._v("App")])],1),_vm._ssrNode(" "),_vm._ssrNode("<span data-v-401b0c17>","</span>",[_c('NuxtLink',{attrs:{"to":"#0"}},[_vm._v("Fitnes")])],1),_vm._ssrNode(" "),_vm._ssrNode("<span data-v-401b0c17>","</span>",[_c('NuxtLink',{attrs:{"to":"#0"}},[_vm._v("Creative")])],1)],2)],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div data-wow-delay=\".4s\" class=\"col-md-6 items brand wow fadeInUp\" data-v-401b0c17>","</div>",[_vm._ssrNode("<div class=\"item-img\" data-v-401b0c17>","</div>",[_vm._ssrNode("<div class=\"cont\" data-v-401b0c17><h6 data-v-401b0c17>Creative Mobile App</h6> <p data-v-401b0c17>Ui / Ux creative mobile app design</p></div> "),_c('NuxtLink',{staticClass:"rota",attrs:{"to":"project-details2/project-details2-dark"}},[_c('img',{attrs:{"src":"/img/portfolio/freelancer/5.jpg","alt":"image"}}),_vm._v(" "),_c('div',{staticClass:"item-img-overlay"})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"tags\" data-v-401b0c17>","</div>",[_vm._ssrNode("<span data-v-401b0c17>","</span>",[_c('NuxtLink',{attrs:{"to":"#0"}},[_vm._v("App")])],1),_vm._ssrNode(" "),_vm._ssrNode("<span data-v-401b0c17>","</span>",[_c('NuxtLink',{attrs:{"to":"#0"}},[_vm._v("Fitnes")])],1),_vm._ssrNode(" "),_vm._ssrNode("<span data-v-401b0c17>","</span>",[_c('NuxtLink',{attrs:{"to":"#0"}},[_vm._v("Creative")])],1)],2)],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div data-wow-delay=\".4s\" class=\"col-md-6 items brand wow fadeInUp\" data-v-401b0c17>","</div>",[_vm._ssrNode("<div class=\"item-img\" data-v-401b0c17>","</div>",[_vm._ssrNode("<div class=\"cont\" data-v-401b0c17><h6 data-v-401b0c17>Creative Mobile App</h6> <p data-v-401b0c17>Ui / Ux creative mobile app design</p></div> "),_c('NuxtLink',{staticClass:"rota",attrs:{"to":"project-details2/project-details2-dark"}},[_c('img',{attrs:{"src":"/img/portfolio/freelancer/6.jpg","alt":"image"}}),_vm._v(" "),_c('div',{staticClass:"item-img-overlay"})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"tags\" data-v-401b0c17>","</div>",[_vm._ssrNode("<span data-v-401b0c17>","</span>",[_c('NuxtLink',{attrs:{"to":"#0"}},[_vm._v("App")])],1),_vm._ssrNode(" "),_vm._ssrNode("<span data-v-401b0c17>","</span>",[_c('NuxtLink',{attrs:{"to":"#0"}},[_vm._v("Fitnes")])],1),_vm._ssrNode(" "),_vm._ssrNode("<span data-v-401b0c17>","</span>",[_c('NuxtLink',{attrs:{"to":"#0"}},[_vm._v("Creative")])],1)],2)],2)])],2)],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Works5/index.vue?vue&type=template&id=401b0c17&scoped=true&

// EXTERNAL MODULE: ./common/initIsotope.js
var initIsotope = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Works5/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Works5vue_type_script_lang_js_ = ({
  mounted() {
    setTimeout(() => {
      Object(initIsotope["a" /* default */])();
    }, 1000);
  }

});
// CONCATENATED MODULE: ./components/Works5/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Works5vue_type_script_lang_js_ = (Works5vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Works5/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Works5vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "401b0c17",
  "b2347a34"
  
)

/* harmony default export */ var Works5 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/homepage/home7-light.vue?vue&type=template&id=36ca477e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Navbar',{ref:"navbar",attrs:{"theme":"light"}}),_vm._ssrNode(" "),_c('FreelancreIntro'),_vm._ssrNode(" "),_c('Services5'),_vm._ssrNode(" "),_c('Works5'),_vm._ssrNode(" "),_c('AboutUs5'),_vm._ssrNode(" "),_c('FullTestimonials',{attrs:{"showHead":""}}),_vm._ssrNode(" "),_c('Blogs2'),_vm._ssrNode(" "),_c('SContactForm',{attrs:{"noLine":""}}),_vm._ssrNode(" "),_c('Footer')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/homepage/home7-light.vue?vue&type=template&id=36ca477e&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/homepage/home7-light.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var home7_lightvue_type_script_lang_js_ = ({
  layout: "light",

  head() {
    return {
      titleTemplate: '%s - Freelancer Light'
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
// CONCATENATED MODULE: ./pages/homepage/home7-light.vue?vue&type=script&lang=js&
 /* harmony default export */ var homepage_home7_lightvue_type_script_lang_js_ = (home7_lightvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/homepage/home7-light.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  homepage_home7_lightvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "36ca477e",
  "35166d24"
  
)

/* harmony default export */ var home7_light = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Navbar: __webpack_require__(26).default,FreelancreIntro: __webpack_require__(68).default,Services5: __webpack_require__(137).default,Works5: __webpack_require__(138).default,AboutUs5: __webpack_require__(135).default,FullTestimonials: __webpack_require__(34).default,Blogs2: __webpack_require__(55).default,SContactForm: __webpack_require__(56).default,Footer: __webpack_require__(24).default})


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

/***/ 32:
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"icon\":\"pe-7s-paint-bucket\",\"title\":\"Graphic Design\",\"content\":\"Tempore corrupti temporibus fuga earum asperiores fugit laudantium.\"},{\"id\":2,\"icon\":\"pe-7s-phone\",\"title\":\"Web & Mobile Design\",\"content\":\"Tempore corrupti temporibus fuga earum asperiores fugit.\"},{\"id\":3,\"icon\":\"pe-7s-display1\",\"title\":\"Social Media Marketing\",\"content\":\"Tempore corrupti temporibus fuga earum asperiores fugit.\"},{\"id\":4,\"icon\":\"pe-7s-diskette\",\"title\":\"Document Legal Policy\",\"content\":\"Tempore corrupti temporibus fuga earum asperiores fugit laudantium.\"}]");

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

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const particlesConfig = {
  particles: {
    number: {
      value: 130,
      density: {
        enable: true,
        value_area: 900
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "/img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.2,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.3,
        sync: false
      }
    },
    size: {
      value: 1.8,
      random: true,
      anim: {
        enable: false,
        speed: 4,
        size_min: 0.4,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 600
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble"
      },
      onclick: {
        enable: true,
        mode: "repulse"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 250,
        size: 0,
        duration: 2,
        opacity: 0,
        speed: 3
      },
      repulse: {
        distance: 400,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
};
/* harmony default export */ __webpack_exports__["a"] = (particlesConfig);

/***/ }),

/***/ 52:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


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

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/S-contact-form/index.vue?vue&type=template&id=109b8a8c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"contact-sec section-padding position-re"},[_vm._ssrNode("<div class=\"container\" data-v-109b8a8c><div class=\"row justify-content-center\" data-v-109b8a8c><div class=\"col-lg-8 col-md-10\" data-v-109b8a8c><div class=\"sec-head text-center\" data-v-109b8a8c><h6 data-wow-delay=\".5s\" class=\"wow fadeIn\" data-v-109b8a8c>Contact Us</h6> <h3 class=\"wow color-font\" data-v-109b8a8c>\n            Let's Get in Touch And Make Magic Together.\n          </h3></div></div></div> <div class=\"row justify-content-center\" data-v-109b8a8c><div class=\"col-lg-10\" data-v-109b8a8c><div data-wow-delay=\".5s\" class=\"form wow fadeInUp\" data-v-109b8a8c><form id=\"contact-form\" method=\"get\" data-v-109b8a8c><div class=\"messages\" data-v-109b8a8c></div> <div class=\"controls\" data-v-109b8a8c><div class=\"row\" data-v-109b8a8c><div class=\"col-lg-4\" data-v-109b8a8c><div class=\"form-group\" data-v-109b8a8c><input id=\"form_name\" type=\"text\" name=\"name\" placeholder=\"Name\" required=\"required\" data-v-109b8a8c></div></div> <div class=\"col-lg-4\" data-v-109b8a8c><div class=\"form-group\" data-v-109b8a8c><input id=\"form_email\" type=\"email\" name=\"email\" placeholder=\"Email\" required=\"required\" data-v-109b8a8c></div></div> <div class=\"col-lg-4\" data-v-109b8a8c><div class=\"form-group\" data-v-109b8a8c><input id=\"form_subject\" type=\"text\" name=\"subject\" placeholder=\"Subject\" required=\"required\" data-v-109b8a8c></div></div> <div class=\"col-12\" data-v-109b8a8c><div class=\"form-group\" data-v-109b8a8c><textarea id=\"form_message\" name=\"message\" placeholder=\"Message\" rows=\"4\" required=\"required\" data-v-109b8a8c></textarea></div></div> <div class=\"col-12\" data-v-109b8a8c><div class=\"text-center\" data-v-109b8a8c><a onclick=\"document.getElementById('contact-form').submit();\" id=\"submitContactForm\" class=\"butn bord curve mt-30\" style=\"cursor:pointer\" data-v-109b8a8c><span data-v-109b8a8c>Send Massege</span></a></div></div></div></div></form></div></div></div></div> "+((!_vm.noLine)?("<div class=\"line bottom left\" data-v-109b8a8c></div>"):"<!---->"))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/S-contact-form/index.vue?vue&type=template&id=109b8a8c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/S-contact-form/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var S_contact_formvue_type_script_lang_js_ = ({
  props: ["noLine"]
});
// CONCATENATED MODULE: ./components/S-contact-form/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_S_contact_formvue_type_script_lang_js_ = (S_contact_formvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/S-contact-form/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_S_contact_formvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "109b8a8c",
  "0c31985e"
  
)

/* harmony default export */ var S_contact_form = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Freelancre-intro/index.vue?vue&type=template&id=bfac3426&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"freelancre valign"},[_c('Particles',{attrs:{"id":"particles-js","options":_vm.particlesOption}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-lg-4\"><div class=\"img\"><img src=\"/img/hero.jpg\" alt></div></div> "),_vm._ssrNode("<div class=\"col-lg-8 valign\">","</div>",[_vm._ssrNode("<div class=\"cont\">","</div>",[_vm._ssrNode("<h1 class=\"cd-headline clip\">","</h1>",[_vm._ssrNode("\n            Hello, I’m Mustafa Hegazi, a multimedia professional, I can guarantee that I will create the best environment you wish for. Including \n            "),_vm._ssrNode("<span class=\"cd-words-wrapper\">","</span>",[_c('VueTyper',{staticClass:"color-font fw-600",attrs:{"text":['Video Production.', 'Motion Graphics.', 'Video Editing.', 'Videography.', 'Photography.', 'Live Streams.'],"repeat":Infinity,"initial-action":"erasing","pre-type-delay":50,"type-delay":50,"pre-erase-delay":1000,"erase-delay":50,"erase-style":"backspace","caret-animation":"smooth"}})],1)],2)])])],2),_vm._ssrNode(" <div class=\"states\"><div class=\"container\"><ul class=\"flex\"><li class=\"flex\"><div class=\"numb valign\"><h3>+5</h3></div> <div class=\"text valign\"><p>\n                Years <br>\n                Of Experience\n              </p></div></li> <li class=\"flex\"><div class=\"numb valign\"><h3>174</h3></div> <div class=\"text valign\"><p>\n                Projects Completed <br>\n                In 5 Countries\n              </p></div></li> <li class=\"mail-us\"><a href=\"mailto:mustafa.hegazi08@gmail.com?subject=New Project\"><div class=\"flex\"><div class=\"text valign\"><div class=\"full-width\"><p>Get In Touch</p> <h6>mustafa.hegazi08@gmail.com</h6></div></div> <div class=\"mail-icon\"><div class=\"icon-box\"><span class=\"icon color-font pe-7s-mail\"></span></div></div></div></a></li></ul></div></div>")],2),_vm._ssrNode(" <div class=\"line bottom left\"></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Freelancre-intro/index.vue?vue&type=template&id=bfac3426&

// EXTERNAL MODULE: ./config/particle-config.js
var particle_config = __webpack_require__(36);

// EXTERNAL MODULE: ./common/initIsotope.js
var initIsotope = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Freelancre-intro/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Freelancre_introvue_type_script_lang_js_ = ({
  name: "demos",
  layout: "dark",

  head() {
    return {
      titleTemplate: "%s - Demos"
    };
  },

  data() {
    return {
      particlesOption: particle_config["a" /* default */]
    };
  },

  mounted() {
    setTimeout(() => {
      Object(initIsotope["a" /* default */])();

      if (document.querySelector("#particles-js canvas")) {
        document.querySelector("#particles-js canvas").style.position = "unset";
      }
    }, 1000);
  }

});
// CONCATENATED MODULE: ./components/Freelancre-intro/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Freelancre_introvue_type_script_lang_js_ = (Freelancre_introvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Freelancre-intro/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(66)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Freelancre_introvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "a1b9cfca"
  
)

/* harmony default export */ var Freelancre_intro = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=home7-light.js.map