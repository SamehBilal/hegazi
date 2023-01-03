exports.ids = [72];
exports.modules = {

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
//# sourceMappingURL=works-style2.js.map