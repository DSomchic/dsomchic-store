import Vue from 'vue'
import Router from 'vue-router'
import Transfer from './views/Transfer.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/transfer',
      name: 'transfer',
      component: Transfer
    },
    {
      path: '/trade',
      name: 'trade',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Trade.vue')
    }
  ]
})
