import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/rating',
      name: 'Rating',
      component: () => import('../views/Rating.vue')
    },
    {
      path: '/dropdownNav',
      name: 'DropdownNav',
      component: () => import('../views/DropdownNav.vue')
    }
  ]
})

export default router
