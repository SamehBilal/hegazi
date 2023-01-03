exports.ids = [94,21,22,23,41];
exports.modules = {

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/contact/contact-dark.vue?vue&type=template&id=4683a4b5&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Navbar',{ref:"navbar"}),_vm._ssrNode(" "),_c('ContactHeader'),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"main-content\" data-v-4683a4b5>","</div>",[_c('ContactForm'),_vm._ssrNode(" <div class=\"map\" data-v-4683a4b5><iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14442.157229527982!2d55.283106663246656!3d25.18502901037026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682def25f457%3A0x3dd4c4097970950e!2z2KfZhNiu2YTZitisINin2YTYqtis2KfYsdmKIC0g2K_YqNmKIC0g2KfZhNil2YXYp9ix2KfYqiDYp9mE2LnYsdio2YrYqSDYp9mE2YXYqtit2K_YqQ!5e0!3m2!1sar!2seg!4v1672747971088!5m2!1sar!2seg\" width=\"100%\" height=\"100%\" loading=\"lazy\" data-v-4683a4b5></iframe></div> "),_c('Footer',{attrs:{"hideBGCOLOR":""}})],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/contact/contact-dark.vue?vue&type=template&id=4683a4b5&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/contact/contact-dark.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var contact_darkvue_type_script_lang_js_ = ({
  layout: "dark",

  head() {
    return {
      titleTemplate: '%s - Contact Dark'
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
// CONCATENATED MODULE: ./pages/contact/contact-dark.vue?vue&type=script&lang=js&
 /* harmony default export */ var contact_contact_darkvue_type_script_lang_js_ = (contact_darkvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/contact/contact-dark.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  contact_contact_darkvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4683a4b5",
  "f344e1e0"
  
)

/* harmony default export */ var contact_dark = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Navbar: __webpack_require__(26).default,ContactHeader: __webpack_require__(88).default,ContactForm: __webpack_require__(89).default,Footer: __webpack_require__(24).default})


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

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const particlesBlackConfig = {
  particles: {
    number: {
      value: 130,
      density: {
        enable: true,
        value_area: 900
      }
    },
    color: {
      value: "#000000"
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
/* harmony default export */ __webpack_exports__["a"] = (particlesBlackConfig);

/***/ }),

/***/ 73:
/***/ (function(module) {

module.exports = JSON.parse("{\"id\":1,\"title\":{\"first\":\"Let's talk\",\"second\":\"about your project.\"},\"content\":\"Feel free to ask me any question or let’s do to talk about our future collaboration.\"}");

/***/ }),

/***/ 74:
/***/ (function(module) {

module.exports = JSON.parse("{\"id\":1,\"title\":\"Let's Talk.\",\"email\":\"mustafa.hegazi08@gmail.com\",\"phone\":{\"first\":\"+20 106 4444 267\",\"second\":\"+971 58 6050 541\"},\"location\":\"Business Bay, Dubai, United Arab Emirates\"}");

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Contact-header/index.vue?vue&type=template&id=745c942b&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"pages-header circle-bg valign position-re"},[_vm._ssrNode("<div class=\"container\" data-v-745c942b><div class=\"row justify-content-center\" data-v-745c942b><div class=\"col-lg-9 col-md-11\" data-v-745c942b><div class=\"capt\" data-v-745c942b><div class=\"text-center\" data-v-745c942b><h1 class=\"color-font mb-10 fw-700\" data-v-745c942b>"+_vm._ssrEscape("\n              "+_vm._s(_vm.contentHeaderData.title.first)+" ")+"<br data-v-745c942b>"+_vm._ssrEscape("\n              "+_vm._s(_vm.contentHeaderData.title.second)+"\n            ")+"</h1> <p data-v-745c942b>"+_vm._ssrEscape(_vm._s(_vm.contentHeaderData.content))+"</p></div></div></div></div></div> "),_c('Particles',{attrs:{"id":"particles-js","options":_vm.theme === 'light' ? _vm.particlesBlackConfig : _vm.particlesConfig}}),_vm._ssrNode(" <div class=\"circle-color\" data-v-745c942b><div class=\"gradient-circle\" data-v-745c942b></div> <div class=\"gradient-circle two\" data-v-745c942b></div></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Contact-header/index.vue?vue&type=template&id=745c942b&scoped=true&

// EXTERNAL MODULE: ./data/contact-header.json
var contact_header = __webpack_require__(73);

// EXTERNAL MODULE: ./config/particle-config.js
var particle_config = __webpack_require__(36);

// EXTERNAL MODULE: ./config/pr-s-black.js
var pr_s_black = __webpack_require__(51);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Contact-header/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Contact_headervue_type_script_lang_js_ = ({
  props: ["theme"],

  data() {
    return {
      contentHeaderData: contact_header,
      particlesConfig: particle_config["a" /* default */],
      particlesBlackConfig: pr_s_black["a" /* default */]
    };
  },

  mounted() {
    setTimeout(() => {
      if (document.querySelector("#particles-js canvas")) {
        document.querySelector("#particles-js canvas").style.position = "unset";
      }
    }, 500);
  }

});
// CONCATENATED MODULE: ./components/Contact-header/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Contact_headervue_type_script_lang_js_ = (Contact_headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Contact-header/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Contact_headervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "745c942b",
  "e88d6de6"
  
)

/* harmony default export */ var Contact_header = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Contact-form/index.vue?vue&type=template&id=0f77b129&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"contact section-padding"},[_vm._ssrNode("<div class=\"container\" data-v-0f77b129><div class=\"row\" data-v-0f77b129><div class=\"col-lg-6\" data-v-0f77b129><div class=\"form md-mb50\" data-v-0f77b129><h4 class=\"fw-700 color-font mb-50\" data-v-0f77b129>Get In Touch.</h4> <form id=\"contact-form\" method=\"get\" data-v-0f77b129><div class=\"messages\" data-v-0f77b129></div> <div class=\"controls\" data-v-0f77b129><div class=\"form-group\" data-v-0f77b129><input id=\"form_name\" type=\"text\" name=\"name\" placeholder=\"Name\" required=\"required\" data-v-0f77b129></div> <div class=\"form-group\" data-v-0f77b129><input id=\"form_email\" type=\"email\" name=\"email\" placeholder=\"Email\" required=\"required\" data-v-0f77b129></div> <div class=\"form-group\" data-v-0f77b129><input id=\"form_subject\" type=\"text\" name=\"subject\" placeholder=\"Subject\" required=\"required\" data-v-0f77b129></div> <div class=\"form-group\" data-v-0f77b129><textarea id=\"form_message\" name=\"message\" placeholder=\"Message\" rows=\"4\" required=\"required\" data-v-0f77b129></textarea></div> <button type=\"submit\""+(_vm._ssrClass(null,("butn " + (_vm.theme === 'light' ? 'dark': 'bord'))))+" data-v-0f77b129><span data-v-0f77b129>Send Message</span></button></div></form></div></div> <div class=\"col-lg-5 offset-lg-1\" data-v-0f77b129><div class=\"cont-info\" data-v-0f77b129><h4 class=\"fw-700 color-font mb-50\" data-v-0f77b129>Contact Info.</h4> <h3 data-splitting class=\"wow\" data-v-0f77b129>"+_vm._ssrEscape(_vm._s(_vm.contentFormData.title))+"</h3> <div class=\"item mb-40\" data-v-0f77b129><h5 data-v-0f77b129><a href=\"mailto:mustafa.hegazi08@gmail.com\" data-v-0f77b129>"+_vm._ssrEscape(_vm._s(_vm.contentFormData.email))+"</a></h5> <h6 data-v-0f77b129>"+_vm._ssrEscape("\n              "+_vm._s(_vm.contentFormData.phone.first)+"\n              ")+"<br data-v-0f77b129>"+_vm._ssrEscape("\n              "+_vm._s(_vm.contentFormData.phone.second)+"\n            ")+"</h6></div> <h3 data-splitting class=\"wow\" data-v-0f77b129>Visit Me.</h3> <div class=\"item\" data-v-0f77b129><h5 data-v-0f77b129>"+_vm._ssrEscape("\n              "+_vm._s(_vm.contentFormData.location)+"\n            ")+"</h5></div> <div class=\"social mt-50\" data-v-0f77b129><a href=\"https://www.facebook.com/mustafa.hegazi.08\" class=\"icon\" data-v-0f77b129><i class=\"fab fa-facebook-f\" data-v-0f77b129></i></a> <a href=\"https://twitter.com/HEGZO08\" class=\"icon\" data-v-0f77b129><i class=\"fab fa-twitter\" data-v-0f77b129></i></a> <a href=\"https://www.instagram.com/mustafahegazi8/\" class=\"icon\" data-v-0f77b129><i class=\"fab fa-instagram\" data-v-0f77b129></i></a> <a href=\"https://www.linkedin.com/in/mustafahegazi08/\" class=\"icon\" data-v-0f77b129><i class=\"fab fa-linkedin\" data-v-0f77b129></i></a></div></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Contact-form/index.vue?vue&type=template&id=0f77b129&scoped=true&

// EXTERNAL MODULE: ./data/contact-form.json
var contact_form = __webpack_require__(74);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Contact-form/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Contact_formvue_type_script_lang_js_ = ({
  props: ["theme"],

  data() {
    return {
      contentFormData: contact_form
    };
  }

});
// CONCATENATED MODULE: ./components/Contact-form/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Contact_formvue_type_script_lang_js_ = (Contact_formvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Contact-form/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Contact_formvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0f77b129",
  "3706ff04"
  
)

/* harmony default export */ var Contact_form = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=contact-dark.js.map