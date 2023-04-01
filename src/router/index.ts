import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/th'
  },
  {
    path: '/:lang/',
    children: [
      {
        path: '',
        name: 'home',
        component: HomeView
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('../views/AboutView.vue')
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
