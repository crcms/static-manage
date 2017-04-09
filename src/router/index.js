import Vue from 'vue'
import Router from 'vue-router'
import As from '../components/As'
import Bs from '../components/Bs'
import Cs from '../components/Cs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/as'
    },
    {
      path: '/as',
      name: 'as',
      component: As
    },
    {
      path: '/bs',
      name: 'bs',
      component: Bs
    },
    {
      path: '/cs',
      name: 'cs',
      component: Cs
    }
  ]
})
