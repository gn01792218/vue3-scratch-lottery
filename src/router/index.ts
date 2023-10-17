import { createRouter, createWebHistory, RouteRecordRaw ,createWebHashHistory} from 'vue-router'
import ScratchLotteryDemo from '@/views/ScratchLotteryDemo.vue'

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
    path:'/ScratchLotteryDemo',
    name:'ScratchLotteryDemo',
    component:ScratchLotteryDemo
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_BASE_URL as string),
  // history:createWebHashHistory(),
  routes
})
export default router
