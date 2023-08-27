import UsersListView from '@/views/UsersListView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'users-list',
      component: UsersListView
    },
    {
      path: '/user/:id',
      name: 'user-detail',
      component: () => import('../views/UserView.vue')
    }
  ]
})

export default router
