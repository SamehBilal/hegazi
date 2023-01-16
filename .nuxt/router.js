import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7bdcb02d = () => interopDefault(import('..\\pages\\about\\about-dark.vue' /* webpackChunkName: "pages/about/about-dark" */))
const _ccc65122 = () => interopDefault(import('..\\pages\\about\\about-light.vue' /* webpackChunkName: "pages/about/about-light" */))
const _1befd6df = () => interopDefault(import('..\\pages\\blog-details\\blog-details-dark.vue' /* webpackChunkName: "pages/blog-details/blog-details-dark" */))
const _0822f206 = () => interopDefault(import('..\\pages\\blog-details\\blog-details-light.vue' /* webpackChunkName: "pages/blog-details/blog-details-light" */))
const _7a046a2d = () => interopDefault(import('..\\pages\\blog-grid\\blog-grid-dark.vue' /* webpackChunkName: "pages/blog-grid/blog-grid-dark" */))
const _606c5d6f = () => interopDefault(import('..\\pages\\blog-grid\\blog-grid-light.vue' /* webpackChunkName: "pages/blog-grid/blog-grid-light" */))
const _4decd12d = () => interopDefault(import('..\\pages\\blog-list\\blog-list-dark.vue' /* webpackChunkName: "pages/blog-list/blog-list-dark" */))
const _0990d66f = () => interopDefault(import('..\\pages\\blog-list\\blog-list-light.vue' /* webpackChunkName: "pages/blog-list/blog-list-light" */))
const _3b05406e = () => interopDefault(import('..\\pages\\blog\\blog-dark.vue' /* webpackChunkName: "pages/blog/blog-dark" */))
const _07121b53 = () => interopDefault(import('..\\pages\\blog\\blog-light.vue' /* webpackChunkName: "pages/blog/blog-light" */))
const _b58b02e6 = () => interopDefault(import('..\\pages\\contact\\contact-dark.vue' /* webpackChunkName: "pages/contact/contact-dark" */))
const _c80e55e2 = () => interopDefault(import('..\\pages\\contact\\contact-light.vue' /* webpackChunkName: "pages/contact/contact-light" */))
const _3635eba5 = () => interopDefault(import('..\\pages\\homepage\\home1-dark.vue' /* webpackChunkName: "pages/homepage/home1-dark" */))
const _2a6b0af7 = () => interopDefault(import('..\\pages\\homepage\\home1-light.vue' /* webpackChunkName: "pages/homepage/home1-light" */))
const _2a7f5cc4 = () => interopDefault(import('..\\pages\\homepage\\home2-dark.vue' /* webpackChunkName: "pages/homepage/home2-dark" */))
const _81608490 = () => interopDefault(import('..\\pages\\homepage\\home2-light.vue' /* webpackChunkName: "pages/homepage/home2-light" */))
const _1ec8cde3 = () => interopDefault(import('..\\pages\\homepage\\home3-dark.vue' /* webpackChunkName: "pages/homepage/home3-dark" */))
const _54347079 = () => interopDefault(import('..\\pages\\homepage\\home3-light.vue' /* webpackChunkName: "pages/homepage/home3-light" */))
const _13123f02 = () => interopDefault(import('..\\pages\\homepage\\home4-dark.vue' /* webpackChunkName: "pages/homepage/home4-dark" */))
const _2dcdb98c = () => interopDefault(import('..\\pages\\homepage\\home4-light.vue' /* webpackChunkName: "pages/homepage/home4-light" */))
const _075bb021 = () => interopDefault(import('..\\pages\\homepage\\home5-dark.vue' /* webpackChunkName: "pages/homepage/home5-dark" */))
const _7dfdd5fb = () => interopDefault(import('..\\pages\\homepage\\home5-light.vue' /* webpackChunkName: "pages/homepage/home5-light" */))
const _08b5bd80 = () => interopDefault(import('..\\pages\\homepage\\home6-dark.vue' /* webpackChunkName: "pages/homepage/home6-dark" */))
const _12e288bc = () => interopDefault(import('..\\pages\\homepage\\home6-light.vue' /* webpackChunkName: "pages/homepage/home6-light" */))
const _2022db42 = () => interopDefault(import('..\\pages\\homepage\\home7-dark.vue' /* webpackChunkName: "pages/homepage/home7-dark" */))
const _b0718906 = () => interopDefault(import('..\\pages\\homepage\\home7-light.vue' /* webpackChunkName: "pages/homepage/home7-light" */))
const _378ff904 = () => interopDefault(import('..\\pages\\homepage\\home8-dark.vue' /* webpackChunkName: "pages/homepage/home8-dark" */))
const _3cabee3e = () => interopDefault(import('..\\pages\\homepage\\home8-light.vue' /* webpackChunkName: "pages/homepage/home8-light" */))
const _ef4a6f76 = () => interopDefault(import('..\\pages\\project-details2\\project-details2-dark.vue' /* webpackChunkName: "pages/project-details2/project-details2-dark" */))
const _1ce1c257 = () => interopDefault(import('..\\pages\\project-details2\\project-details2-light.vue' /* webpackChunkName: "pages/project-details2/project-details2-light" */))
const _5fca7d9a = () => interopDefault(import('..\\pages\\showcase\\showcase-dark.vue' /* webpackChunkName: "pages/showcase/showcase-dark" */))
const _65be31ae = () => interopDefault(import('..\\pages\\showcase\\showcase-light.vue' /* webpackChunkName: "pages/showcase/showcase-light" */))
const _897cc2a6 = () => interopDefault(import('..\\pages\\showcase2\\showcase2-dark.vue' /* webpackChunkName: "pages/showcase2/showcase2-dark" */))
const _46d5b8ef = () => interopDefault(import('..\\pages\\showcase2\\showcase2-light.vue' /* webpackChunkName: "pages/showcase2/showcase2-light" */))
const _87b7f566 = () => interopDefault(import('..\\pages\\showcase3\\showcase3-dark.vue' /* webpackChunkName: "pages/showcase3/showcase3-dark" */))
const _6240264f = () => interopDefault(import('..\\pages\\showcase3\\showcase3-light.vue' /* webpackChunkName: "pages/showcase3/showcase3-light" */))
const _d3216c66 = () => interopDefault(import('..\\pages\\works\\works-dark.vue' /* webpackChunkName: "pages/works/works-dark" */))
const _5d451c62 = () => interopDefault(import('..\\pages\\works\\works-light.vue' /* webpackChunkName: "pages/works/works-light" */))
const _95f2eba6 = () => interopDefault(import('..\\pages\\works2\\works2-dark.vue' /* webpackChunkName: "pages/works2/works2-dark" */))
const _f4a38522 = () => interopDefault(import('..\\pages\\works2\\works2-light.vue' /* webpackChunkName: "pages/works2/works2-light" */))
const _6de1dd6b = () => interopDefault(import('..\\pages\\works3\\works3-dark.vue' /* webpackChunkName: "pages/works3/works3-dark" */))
const _2f855c1e = () => interopDefault(import('..\\pages\\works3\\works3-light.vue' /* webpackChunkName: "pages/works3/works3-light" */))
const _2038233c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about/about-dark",
    component: _7bdcb02d,
    name: "about-about-dark"
  }, {
    path: "/about/about-light",
    component: _ccc65122,
    name: "about-about-light"
  }, {
    path: "/blog-details/blog-details-dark",
    component: _1befd6df,
    name: "blog-details-blog-details-dark"
  }, {
    path: "/blog-details/blog-details-light",
    component: _0822f206,
    name: "blog-details-blog-details-light"
  }, {
    path: "/blog-grid/blog-grid-dark",
    component: _7a046a2d,
    name: "blog-grid-blog-grid-dark"
  }, {
    path: "/blog-grid/blog-grid-light",
    component: _606c5d6f,
    name: "blog-grid-blog-grid-light"
  }, {
    path: "/blog-list/blog-list-dark",
    component: _4decd12d,
    name: "blog-list-blog-list-dark"
  }, {
    path: "/blog-list/blog-list-light",
    component: _0990d66f,
    name: "blog-list-blog-list-light"
  }, {
    path: "/blog/blog-dark",
    component: _3b05406e,
    name: "blog-blog-dark"
  }, {
    path: "/blog/blog-light",
    component: _07121b53,
    name: "blog-blog-light"
  }, {
    path: "/contact/contact-dark",
    component: _b58b02e6,
    name: "contact-contact-dark"
  }, {
    path: "/contact/contact-light",
    component: _c80e55e2,
    name: "contact-contact-light"
  }, {
    path: "/homepage/home1-dark",
    component: _3635eba5,
    name: "homepage-home1-dark"
  }, {
    path: "/homepage/home1-light",
    component: _2a6b0af7,
    name: "homepage-home1-light"
  }, {
    path: "/homepage/home2-dark",
    component: _2a7f5cc4,
    name: "homepage-home2-dark"
  }, {
    path: "/homepage/home2-light",
    component: _81608490,
    name: "homepage-home2-light"
  }, {
    path: "/homepage/home3-dark",
    component: _1ec8cde3,
    name: "homepage-home3-dark"
  }, {
    path: "/homepage/home3-light",
    component: _54347079,
    name: "homepage-home3-light"
  }, {
    path: "/homepage/home4-dark",
    component: _13123f02,
    name: "homepage-home4-dark"
  }, {
    path: "/homepage/home4-light",
    component: _2dcdb98c,
    name: "homepage-home4-light"
  }, {
    path: "/homepage/home5-dark",
    component: _075bb021,
    name: "homepage-home5-dark"
  }, {
    path: "/homepage/home5-light",
    component: _7dfdd5fb,
    name: "homepage-home5-light"
  }, {
    path: "/homepage/home6-dark",
    component: _08b5bd80,
    name: "homepage-home6-dark"
  }, {
    path: "/homepage/home6-light",
    component: _12e288bc,
    name: "homepage-home6-light"
  }, {
    path: "/homepage/home7-dark",
    component: _2022db42,
    name: "homepage-home7-dark"
  }, {
    path: "/homepage/home7-light",
    component: _b0718906,
    name: "homepage-home7-light"
  }, {
    path: "/homepage/home8-dark",
    component: _378ff904,
    name: "homepage-home8-dark"
  }, {
    path: "/homepage/home8-light",
    component: _3cabee3e,
    name: "homepage-home8-light"
  }, {
    path: "/project-details2/project-details2-dark",
    component: _ef4a6f76,
    name: "project-details2-project-details2-dark"
  }, {
    path: "/project-details2/project-details2-light",
    component: _1ce1c257,
    name: "project-details2-project-details2-light"
  }, {
    path: "/showcase/showcase-dark",
    component: _5fca7d9a,
    name: "showcase-showcase-dark"
  }, {
    path: "/showcase/showcase-light",
    component: _65be31ae,
    name: "showcase-showcase-light"
  }, {
    path: "/showcase2/showcase2-dark",
    component: _897cc2a6,
    name: "showcase2-showcase2-dark"
  }, {
    path: "/showcase2/showcase2-light",
    component: _46d5b8ef,
    name: "showcase2-showcase2-light"
  }, {
    path: "/showcase3/showcase3-dark",
    component: _87b7f566,
    name: "showcase3-showcase3-dark"
  }, {
    path: "/showcase3/showcase3-light",
    component: _6240264f,
    name: "showcase3-showcase3-light"
  }, {
    path: "/works/works-dark",
    component: _d3216c66,
    name: "works-works-dark"
  }, {
    path: "/works/works-light",
    component: _5d451c62,
    name: "works-works-light"
  }, {
    path: "/works2/works2-dark",
    component: _95f2eba6,
    name: "works2-works2-dark"
  }, {
    path: "/works2/works2-light",
    component: _f4a38522,
    name: "works2-works2-light"
  }, {
    path: "/works3/works3-dark",
    component: _6de1dd6b,
    name: "works3-works3-dark"
  }, {
    path: "/works3/works3-light",
    component: _2f855c1e,
    name: "works3-works3-light"
  }, {
    path: "/",
    component: _2038233c,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
