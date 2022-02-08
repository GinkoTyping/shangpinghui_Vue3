import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pages/Home/index'
import Login from '@/pages/Login/index'
import Register from '@/pages/Register/index'
import Search from '@/pages/Search/index'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/home',
      component: Home,
      meta: { isFooterShow: true }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/search/:keyword?',
      name: 'search',
      component: Search,
      meta: { isFooterShow: true }
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
