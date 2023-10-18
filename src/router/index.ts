import { createRouter, createWebHistory, RouteRecordRaw ,createWebHashHistory} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component:()=>import('@/views/Home.vue')
  },
  {
    path:'/About',
    name:'About',
    component:()=>import('@/views/About.vue')
  },
  {
    path:'/ScratcDemo',
    name:'ScratcDemo',
    component:()=>import('@/views/ScratchDemo.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_BASE_URL as string),
  // history:createWebHashHistory(),
  routes
})
export default router
