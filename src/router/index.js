import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import CopClass from '@/components/EnterPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/baseshow',
      name: 'Login',
      component: Login
    },
    {
      path: '/enter/',
      name: 'CopName',
      component: CopClass
    }]
})
