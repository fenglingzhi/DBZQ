import Vue from 'vue'
import Router from 'vue-router'
import warning from './components/warning.vue'
import home from './components/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/warning',
      name: 'warning',
      component: warning
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
