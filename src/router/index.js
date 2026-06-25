import { createRouter, createWebHistory } from 'vue-router'
import UserList from '../views/UserList.vue'
import UserDetail from '../views/UserDetail.vue'
import CreateUser from '../views/CreateUser.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'userlist',
      component: UserList,
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: UserDetail,
    },
    {
      path: '/create',
      name: 'create',
      component: CreateUser,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
  ]
})

export default router
