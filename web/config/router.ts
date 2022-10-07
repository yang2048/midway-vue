import {
  createRouter as _createRouter,
  createMemoryHistory,
  createWebHistory,
  Router,
} from 'vue-router'
import NProgress from 'nprogress' // progress bar

import DefaultLayoutRoutes from '@/layouts/DefaultLayout/routes'
import DefaultLayout from '@/layouts/DefaultLayout/index.vue'

export const createRouter = (type: RouterType): Router => {
  const router = _createRouter({
    scrollBehavior(/* to, from, savedPosition */) {
      return { top: 0 }
    },
    history: type === 'web' ? createWebHistory() : createMemoryHistory(),
    routes: [
      {
        path: '/',
        name: 'root',
        component: DefaultLayout,
        children: DefaultLayoutRoutes,
      },
      {
        name: 'notfound',
        path: '/:pathMatch(.*)*',
        meta: {
          title: '页面不存在 | Not Found | 404',
          keywords: '页面不存在',
          description: '页面不存在',
        },
        component: () => import('@/views/404/index.vue'),
      },
    ],
  })

  router.beforeEach((/* to, from */) => {
    if (!import.meta.env.SSR) {
      // start progress bar
      NProgress.start()
    }
  })

  router.afterEach(() => {
    if (!import.meta.env.SSR) {
      // finish progress bar
      NProgress.done()
    }
  })

  return router
}
