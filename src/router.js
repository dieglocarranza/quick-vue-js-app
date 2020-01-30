import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Error from '@/views/Error'
import Axios from '@/views/Axios'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/axios',
      name: 'Axios',
      component: Axios
    },
    {
      path: '*',
      name: 'error',
      component: Error
    }
  ]
})
