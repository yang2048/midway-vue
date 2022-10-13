import { createSSRApp } from 'vue'
import App from '@/App.vue'
import { createRouter } from '@/config/router'
import { createPinia } from 'pinia'

// 样式初始化
// import 'normalize.css'

// 全局样式
import '@/assets/css/global.scss'

export function createApp(routerType: RouterType) {
  const app = createSSRApp(App)
  const router = createRouter(routerType)
  const pinia = createPinia()

  app.use(router)
  app.use(pinia)

  return { app, router, pinia }
}
