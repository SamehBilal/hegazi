import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _f04f7dae = () => interopDefault(import('..\\pages\\about\\about-dark.vue' /* webpackChunkName: "pages/about/about-dark" */))
const _0d1365f3 = () => interopDefault(import('..\\pages\\about\\about-light.vue' /* webpackChunkName: "pages/about/about-light" */))
const _1728024a = () => interopDefault(import('..\\pages\\blog-details\\blog-details-dark.vue' /* webpackChunkName: "pages/blog-details/blog-details-dark" */))
const _32f75e81 = () => interopDefault(import('..\\pages\\blog-details\\blog-details-light.vue' /* webpackChunkName: "pages/blog-details/blog-details-light" */))
const _666581ae = () => interopDefault(import('..\\pages\\blog-grid\\blog-grid-dark.vue' /* webpackChunkName: "pages/blog-grid/blog-grid-dark" */))
const _66be27f3 = () => interopDefault(import('..\\pages\\blog-grid\\blog-grid-light.vue' /* webpackChunkName: "pages/blog-grid/blog-grid-light" */))
const _be94b3ae = () => interopDefault(import('..\\pages\\blog-list\\blog-list-dark.vue' /* webpackChunkName: "pages/blog-list/blog-list-dark" */))
const _0fe2a0f3 = () => interopDefault(import('..\\pages\\blog-list\\blog-list-light.vue' /* webpackChunkName: "pages/blog-list/blog-list-light" */))
const _0e3e0076 = () => interopDefault(import('..\\pages\\blog\\blog-dark.vue' /* webpackChunkName: "pages/blog/blog-dark" */))
const _85bb0a52 = () => interopDefault(import('..\\pages\\blog\\blog-light.vue' /* webpackChunkName: "pages/blog/blog-light" */))
const _36cd3189 = () => interopDefault(import('..\\pages\\contact\\contact-dark.vue' /* webpackChunkName: "pages/contact/contact-dark" */))
const _3cbc8193 = () => interopDefault(import('..\\pages\\contact\\contact-light.vue' /* webpackChunkName: "pages/contact/contact-light" */))
const _b37a2dae = () => interopDefault(import('..\\pages\\homepage\\home1-dark.vue' /* webpackChunkName: "pages/homepage/home1-dark" */))
const _8804841a = () => interopDefault(import('..\\pages\\homepage\\home1-light.vue' /* webpackChunkName: "pages/homepage/home1-light" */))
const _cae74b70 = () => interopDefault(import('..\\pages\\homepage\\home2-dark.vue' /* webpackChunkName: "pages/homepage/home2-dark" */))
const _50e270b4 = () => interopDefault(import('..\\pages\\homepage\\home2-light.vue' /* webpackChunkName: "pages/homepage/home2-light" */))
const _e2546932 = () => interopDefault(import('..\\pages\\homepage\\home3-dark.vue' /* webpackChunkName: "pages/homepage/home3-dark" */))
const _3471b916 = () => interopDefault(import('..\\pages\\homepage\\home3-light.vue' /* webpackChunkName: "pages/homepage/home3-light" */))
const _f9c186f4 = () => interopDefault(import('..\\pages\\homepage\\home4-dark.vue' /* webpackChunkName: "pages/homepage/home4-dark" */))
const _7aabd636 = () => interopDefault(import('..\\pages\\homepage\\home4-light.vue' /* webpackChunkName: "pages/homepage/home4-light" */))
const _7768ada5 = () => interopDefault(import('..\\pages\\homepage\\home5-dark.vue' /* webpackChunkName: "pages/homepage/home5-dark" */))
const _0f9088f7 = () => interopDefault(import('..\\pages\\homepage\\home5-light.vue' /* webpackChunkName: "pages/homepage/home5-light" */))
const _6bb21ec4 = () => interopDefault(import('..\\pages\\homepage\\home6-dark.vue' /* webpackChunkName: "pages/homepage/home6-dark" */))
const _b7158890 = () => interopDefault(import('..\\pages\\homepage\\home6-light.vue' /* webpackChunkName: "pages/homepage/home6-light" */))
const _5ffb8fe3 = () => interopDefault(import('..\\pages\\homepage\\home7-dark.vue' /* webpackChunkName: "pages/homepage/home7-dark" */))
const _3959ee79 = () => interopDefault(import('..\\pages\\homepage\\home7-light.vue' /* webpackChunkName: "pages/homepage/home7-light" */))
const _54450102 = () => interopDefault(import('..\\pages\\homepage\\home8-dark.vue' /* webpackChunkName: "pages/homepage/home8-dark" */))
const _6382bd8c = () => interopDefault(import('..\\pages\\homepage\\home8-light.vue' /* webpackChunkName: "pages/homepage/home8-light" */))
const _f5c5977e = () => interopDefault(import('..\\pages\\project-details2\\project-details2-dark.vue' /* webpackChunkName: "pages/project-details2/project-details2-dark" */))
const _8f26544a = () => interopDefault(import('..\\pages\\project-details2\\project-details2-light.vue' /* webpackChunkName: "pages/project-details2/project-details2-light" */))
const _47cca52f = () => interopDefault(import('..\\pages\\showcase\\showcase-dark.vue' /* webpackChunkName: "pages/showcase/showcase-dark" */))
const _4bab82ad = () => interopDefault(import('..\\pages\\showcase\\showcase-light.vue' /* webpackChunkName: "pages/showcase/showcase-light" */))
const _0e0a73a9 = () => interopDefault(import('..\\pages\\showcase2\\showcase2-dark.vue' /* webpackChunkName: "pages/showcase2/showcase2-dark" */))
const _4d278373 = () => interopDefault(import('..\\pages\\showcase2\\showcase2-light.vue' /* webpackChunkName: "pages/showcase2/showcase2-light" */))
const _0eecda49 = () => interopDefault(import('..\\pages\\showcase3\\showcase3-dark.vue' /* webpackChunkName: "pages/showcase3/showcase3-dark" */))
const _6891f0d3 = () => interopDefault(import('..\\pages\\showcase3\\showcase3-light.vue' /* webpackChunkName: "pages/showcase3/showcase3-light" */))
const _bb2a4a6e = () => interopDefault(import('..\\pages\\works\\works-dark.vue' /* webpackChunkName: "pages/works/works-dark" */))
const _44d40053 = () => interopDefault(import('..\\pages\\works\\works-light.vue' /* webpackChunkName: "pages/works/works-light" */))
const _9f3c67ae = () => interopDefault(import('..\\pages\\works2\\works2-dark.vue' /* webpackChunkName: "pages/works2/works2-dark" */))
const _14898a1a = () => interopDefault(import('..\\pages\\works2\\works2-light.vue' /* webpackChunkName: "pages/works2/works2-light" */))
const _693d1f67 = () => interopDefault(import('..\\pages\\works3\\works3-dark.vue' /* webpackChunkName: "pages/works3/works3-dark" */))
const _584a4f75 = () => interopDefault(import('..\\pages\\works3\\works3-light.vue' /* webpackChunkName: "pages/works3/works3-light" */))
const _4c284e38 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _f04f7dae,
    name: "about"
  }, {
    path: "/about/about-light",
    component: _0d1365f3,
    name: "about-about-light"
  }, {
    path: "/blog-details/blog-details-dark",
    component: _1728024a,
    name: "blog-details-blog-details-dark"
  }, {
    path: "/blog-details/blog-details-light",
    component: _32f75e81,
    name: "blog-details-blog-details-light"
  }, {
    path: "/blog-grid/blog-grid-dark",
    component: _666581ae,
    name: "blog-grid-blog-grid-dark"
  }, {
    path: "/blog-grid/blog-grid-light",
    component: _66be27f3,
    name: "blog-grid-blog-grid-light"
  }, {
    path: "/blog-list/blog-list-dark",
    component: _be94b3ae,
    name: "blog-list-blog-list-dark"
  }, {
    path: "/blog-list/blog-list-light",
    component: _0fe2a0f3,
    name: "blog-list-blog-list-light"
  }, {
    path: "/blog/blog-dark",
    component: _0e3e0076,
    name: "blog-blog-dark"
  }, {
    path: "/blog/blog-light",
    component: _85bb0a52,
    name: "blog-blog-light"
  }, {
    path: "/contact",
    component: _36cd3189,
    name: "contact"
  }, {
    path: "/contact/contact-light",
    component: _3cbc8193,
    name: "contact-contact-light"
  }, {
    path: "/homepage/home1-dark",
    component: _b37a2dae,
    name: "homepage-home1-dark"
  }, {
    path: "/homepage/home1-light",
    component: _8804841a,
    name: "homepage-home1-light"
  }, {
    path: "/homepage/home2-dark",
    component: _cae74b70,
    name: "homepage-home2-dark"
  }, {
    path: "/homepage/home2-light",
    component: _50e270b4,
    name: "homepage-home2-light"
  }, {
    path: "/homepage/home3-dark",
    component: _e2546932,
    name: "homepage-home3-dark"
  }, {
    path: "/homepage/home3-light",
    component: _3471b916,
    name: "homepage-home3-light"
  }, {
    path: "/homepage/home4-dark",
    component: _f9c186f4,
    name: "homepage-home4-dark"
  }, {
    path: "/homepage/home4-light",
    component: _7aabd636,
    name: "homepage-home4-light"
  }, {
    path: "/homepage/home5-dark",
    component: _7768ada5,
    name: "homepage-home5-dark"
  }, {
    path: "/homepage/home5-light",
    component: _0f9088f7,
    name: "homepage-home5-light"
  }, {
    path: "/homepage/home6-dark",
    component: _6bb21ec4,
    name: "homepage-home6-dark"
  }, {
    path: "/homepage/home6-light",
    component: _b7158890,
    name: "homepage-home6-light"
  }, {
    path: "/homepage/home7-dark",
    component: _5ffb8fe3,
    name: "homepage-home7-dark"
  }, {
    path: "/homepage/home7-light",
    component: _3959ee79,
    name: "homepage-home7-light"
  }, {
    path: "/homepage/home8-dark",
    component: _54450102,
    name: "homepage-home8-dark"
  }, {
    path: "/homepage/home8-light",
    component: _6382bd8c,
    name: "homepage-home8-light"
  }, {
    path: "/project-details2/project-details2-dark",
    component: _f5c5977e,
    name: "project-details2-project-details2-dark"
  }, {
    path: "/project-details2/project-details2-light",
    component: _8f26544a,
    name: "project-details2-project-details2-light"
  }, {
    path: "/showcase/showcase-dark",
    component: _47cca52f,
    name: "showcase-showcase-dark"
  }, {
    path: "/showcase/showcase-light",
    component: _4bab82ad,
    name: "showcase-showcase-light"
  }, {
    path: "/showcase2/showcase2-dark",
    component: _0e0a73a9,
    name: "showcase2-showcase2-dark"
  }, {
    path: "/showcase2/showcase2-light",
    component: _4d278373,
    name: "showcase2-showcase2-light"
  }, {
    path: "/showcase3/showcase3-dark",
    component: _0eecda49,
    name: "showcase3-showcase3-dark"
  }, {
    path: "/showcase3/showcase3-light",
    component: _6891f0d3,
    name: "showcase3-showcase3-light"
  }, {
    path: "/works/works-dark",
    component: _bb2a4a6e,
    name: "works-works-dark"
  }, {
    path: "/works/works-light",
    component: _44d40053,
    name: "works-works-light"
  }, {
    path: "/works/all",
    component: _9f3c67ae,
    name: "works-all"
  }, {
    path: "/works2/works2-light",
    component: _14898a1a,
    name: "works2-works2-light"
  }, {
    path: "/works3/works3-dark",
    component: _693d1f67,
    name: "works3-works3-dark"
  }, {
    path: "/works3/works3-light",
    component: _584a4f75,
    name: "works3-works3-light"
  }, {
    path: "/",
    component: _4c284e38,
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
