exports.ids = [57];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=services3.js.map