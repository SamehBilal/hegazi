import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _606da6dc = () => interopDefault(import('..\\pages\\about\\about-dark.vue' /* webpackChunkName: "pages/about/about-dark" */))
const _798030ac = () => interopDefault(import('..\\pages\\about\\about-light.vue' /* webpackChunkName: "pages/about/about-light" */))
const _443782f8 = () => interopDefault(import('..\\pages\\blog-details\\blog-details-dark.vue' /* webpackChunkName: "pages/blog-details/blog-details-dark" */))
const _788713f8 = () => interopDefault(import('..\\pages\\blog-details\\blog-details-light.vue' /* webpackChunkName: "pages/blog-details/blog-details-light" */))
const _72969cdc = () => interopDefault(import('..\\pages\\blog-grid\\blog-grid-dark.vue' /* webpackChunkName: "pages/blog-grid/blog-grid-dark" */))
const _ac75faac = () => interopDefault(import('..\\pages\\blog-grid\\blog-grid-light.vue' /* webpackChunkName: "pages/blog-grid/blog-grid-light" */))
const _cac5cedc = () => interopDefault(import('..\\pages\\blog-list\\blog-list-dark.vue' /* webpackChunkName: "pages/blog-list/blog-list-dark" */))
const _52e97baa = () => interopDefault(import('..\\pages\\blog-list\\blog-list-light.vue' /* webpackChunkName: "pages/blog-list/blog-list-light" */))
const _c8909d24 = () => interopDefault(import('..\\pages\\blog\\blog-dark.vue' /* webpackChunkName: "pages/blog/blog-dark" */))
const _7521fe4e = () => interopDefault(import('..\\pages\\blog\\blog-light.vue' /* webpackChunkName: "pages/blog/blog-light" */))
const _07cf7f1c = () => interopDefault(import('..\\pages\\contact\\contact-dark.vue' /* webpackChunkName: "pages/contact/contact-dark" */))
const _20d34fca = () => interopDefault(import('..\\pages\\contact\\contact-light.vue' /* webpackChunkName: "pages/contact/contact-light" */))
const _f9544dc0 = () => interopDefault(import('..\\pages\\homepage\\home1-dark.vue' /* webpackChunkName: "pages/homepage/home1-dark" */))
const _fd6e6648 = () => interopDefault(import('..\\pages\\homepage\\home1-light.vue' /* webpackChunkName: "pages/homepage/home1-light" */))
const _779f4a3f = () => interopDefault(import('..\\pages\\homepage\\home2-dark.vue' /* webpackChunkName: "pages/homepage/home2-dark" */))
const _162d7f9d = () => interopDefault(import('..\\pages\\homepage\\home2-light.vue' /* webpackChunkName: "pages/homepage/home2-light" */))
const _6be8bb5e = () => interopDefault(import('..\\pages\\homepage\\home3-dark.vue' /* webpackChunkName: "pages/homepage/home3-dark" */))
const _a9db9b44 = () => interopDefault(import('..\\pages\\homepage\\home3-light.vue' /* webpackChunkName: "pages/homepage/home3-light" */))
const _60322c7d = () => interopDefault(import('..\\pages\\homepage\\home4-dark.vue' /* webpackChunkName: "pages/homepage/home4-dark" */))
const _3ff6e51f = () => interopDefault(import('..\\pages\\homepage\\home4-light.vue' /* webpackChunkName: "pages/homepage/home4-light" */))
const _547b9d9c = () => interopDefault(import('..\\pages\\homepage\\home5-dark.vue' /* webpackChunkName: "pages/homepage/home5-dark" */))
const _5648d040 = () => interopDefault(import('..\\pages\\homepage\\home5-light.vue' /* webpackChunkName: "pages/homepage/home5-light" */))
const _48c50ebb = () => interopDefault(import('..\\pages\\homepage\\home6-dark.vue' /* webpackChunkName: "pages/homepage/home6-dark" */))
const _69c04aa1 = () => interopDefault(import('..\\pages\\homepage\\home6-light.vue' /* webpackChunkName: "pages/homepage/home6-light" */))
const _3d0e7fda = () => interopDefault(import('..\\pages\\homepage\\home7-dark.vue' /* webpackChunkName: "pages/homepage/home7-dark" */))
const _02b6053c = () => interopDefault(import('..\\pages\\homepage\\home7-light.vue' /* webpackChunkName: "pages/homepage/home7-light" */))
const _3157f0f9 = () => interopDefault(import('..\\pages\\homepage\\home8-dark.vue' /* webpackChunkName: "pages/homepage/home8-dark" */))
const _d8ec9fba = () => interopDefault(import('..\\pages\\homepage\\home8-light.vue' /* webpackChunkName: "pages/homepage/home8-light" */))
const _2f13baea = () => interopDefault(import('..\\pages\\project-details2\\project-details2-dark.vue' /* webpackChunkName: "pages/project-details2/project-details2-dark" */))
const _4d472452 = () => interopDefault(import('..\\pages\\project-details2\\project-details2-light.vue' /* webpackChunkName: "pages/project-details2/project-details2-light" */))
const _32e0c450 = () => interopDefault(import('..\\pages\\showcase\\showcase-dark.vue' /* webpackChunkName: "pages/showcase/showcase-dark" */))
const _f570c1b8 = () => interopDefault(import('..\\pages\\showcase\\showcase-light.vue' /* webpackChunkName: "pages/showcase/showcase-light" */))
const _07f1e612 = () => interopDefault(import('..\\pages\\showcase2\\showcase2-dark.vue' /* webpackChunkName: "pages/showcase2/showcase2-dark" */))
const _dfa343ac = () => interopDefault(import('..\\pages\\showcase2\\showcase2-light.vue' /* webpackChunkName: "pages/showcase2/showcase2-light" */))
const _08d44cb2 = () => interopDefault(import('..\\pages\\showcase3\\showcase3-dark.vue' /* webpackChunkName: "pages/showcase3/showcase3-dark" */))
const _a8ce68ec = () => interopDefault(import('..\\pages\\showcase3\\showcase3-light.vue' /* webpackChunkName: "pages/showcase3/showcase3-light" */))
const _2b48739c = () => interopDefault(import('..\\pages\\works\\works-dark.vue' /* webpackChunkName: "pages/works/works-dark" */))
const _09fefbec = () => interopDefault(import('..\\pages\\works\\works-light.vue' /* webpackChunkName: "pages/works/works-light" */))
const _8074fd5c = () => interopDefault(import('..\\pages\\works2\\works2-dark.vue' /* webpackChunkName: "pages/works2/works2-dark" */))
const _5a63aa2c = () => interopDefault(import('..\\pages\\works2\\works2-light.vue' /* webpackChunkName: "pages/works2/works2-light" */))
const _78a0d490 = () => interopDefault(import('..\\pages\\works3\\works3-dark.vue' /* webpackChunkName: "pages/works3/works3-dark" */))
const _355d3f6c = () => interopDefault(import('..\\pages\\works3\\works3-light.vue' /* webpackChunkName: "pages/works3/works3-light" */))
const _06d84f21 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _606da6dc,
    name: "about-about-dark"
  }, {
    path: "/about/about-light",
    component: _798030ac,
    name: "about-about-light"
  }, {
    path: "/blog-details/blog-details-dark",
    component: _443782f8,
    name: "blog-details-blog-details-dark"
  }, {
    path: "/blog-details/blog-details-light",
    component: _788713f8,
    name: "blog-details-blog-details-light"
  }, {
    path: "/blog-grid/blog-grid-dark",
    component: _72969cdc,
    name: "blog-grid-blog-grid-dark"
  }, {
    path: "/blog-grid/blog-grid-light",
    component: _ac75faac,
    name: "blog-grid-blog-grid-light"
  }, {
    path: "/blog-list/blog-list-dark",
    component: _cac5cedc,
    name: "blog-list-blog-list-dark"
  }, {
    path: "/blog-list/blog-list-light",
    component: _52e97baa,
    name: "blog-list-blog-list-light"
  }, {
    path: "/blog/blog-dark",
    component: _c8909d24,
    name: "blog-blog-dark"
  }, {
    path: "/blog/blog-light",
    component: _7521fe4e,
    name: "blog-blog-light"
  }, {
    path: "/contact/contact-dark",
    component: _07cf7f1c,
    name: "contact-contact-dark"
  }, {
    path: "/contact/contact-light",
    component: _20d34fca,
    name: "contact-contact-light"
  }, {
    path: "/homepage/home1-dark",
    component: _f9544dc0,
    name: "homepage-home1-dark"
  }, {
    path: "/homepage/home1-light",
    component: _fd6e6648,
    name: "homepage-home1-light"
  }, {
    path: "/homepage/home2-dark",
    component: _779f4a3f,
    name: "homepage-home2-dark"
  }, {
    path: "/homepage/home2-light",
    component: _162d7f9d,
    name: "homepage-home2-light"
  }, {
    path: "/homepage/home3-dark",
    component: _6be8bb5e,
    name: "homepage-home3-dark"
  }, {
    path: "/homepage/home3-light",
    component: _a9db9b44,
    name: "homepage-home3-light"
  }, {
    path: "/homepage/home4-dark",
    component: _60322c7d,
    name: "homepage-home4-dark"
  }, {
    path: "/homepage/home4-light",
    component: _3ff6e51f,
    name: "homepage-home4-light"
  }, {
    path: "/homepage/home5-dark",
    component: _547b9d9c,
    name: "homepage-home5-dark"
  }, {
    path: "/homepage/home5-light",
    component: _5648d040,
    name: "homepage-home5-light"
  }, {
    path: "/homepage/home6-dark",
    component: _48c50ebb,
    name: "homepage-home6-dark"
  }, {
    path: "/homepage/home6-light",
    component: _69c04aa1,
    name: "homepage-home6-light"
  }, {
    path: "/homepage/home7-dark",
    component: _3d0e7fda,
    name: "homepage-home7-dark"
  }, {
    path: "/homepage/home7-light",
    component: _02b6053c,
    name: "homepage-home7-light"
  }, {
    path: "/homepage/home8-dark",
    component: _3157f0f9,
    name: "homepage-home8-dark"
  }, {
    path: "/homepage/home8-light",
    component: _d8ec9fba,
    name: "homepage-home8-light"
  }, {
    path: "/project-details2/project-details2-dark",
    component: _2f13baea,
    name: "project-details2-project-details2-dark"
  }, {
    path: "/project-details2/project-details2-light",
    component: _4d472452,
    name: "project-details2-project-details2-light"
  }, {
    path: "/showcase/showcase-dark",
    component: _32e0c450,
    name: "showcase-showcase-dark"
  }, {
    path: "/showcase/showcase-light",
    component: _f570c1b8,
    name: "showcase-showcase-light"
  }, {
    path: "/showcase2/showcase2-dark",
    component: _07f1e612,
    name: "showcase2-showcase2-dark"
  }, {
    path: "/showcase2/showcase2-light",
    component: _dfa343ac,
    name: "showcase2-showcase2-light"
  }, {
    path: "/showcase3/showcase3-dark",
    component: _08d44cb2,
    name: "showcase3-showcase3-dark"
  }, {
    path: "/showcase3/showcase3-light",
    component: _a8ce68ec,
    name: "showcase3-showcase3-light"
  }, {
    path: "/works/works-dark",
    component: _2b48739c,
    name: "works-works-dark"
  }, {
    path: "/works/works-light",
    component: _09fefbec,
    name: "works-works-light"
  }, {
    path: "/works2/works2-dark",
    component: _8074fd5c,
    name: "works2-works2-dark"
  }, {
    path: "/works2/works2-light",
    component: _5a63aa2c,
    name: "works2-works2-light"
  }, {
    path: "/works3/works3-dark",
    component: _78a0d490,
    name: "works3-works3-dark"
  }, {
    path: "/works3/works3-light",
    component: _355d3f6c,
    name: "works3-works3-light"
  }, {
    path: "/",
    component: _06d84f21,
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
