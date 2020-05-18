import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Menu from '../views/Menu.vue'
import store from '../store/index.js'
Vue.use(VueRouter)

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters['user/isLoggedIn']) {
    next()
    return
  }
  next('/')
}

const ifAuthenticated = (to, from, next) => {
  if (store.getters['user/isLoggedIn']) {
    next()
    return
  }
  next('/')
}
  const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/menu',
    name: 'menu',
    component: Menu
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: function () {
      return import('../views/Checkout.vue')
    }
  },
  {
    path: '/login',
    name: 'login',
    beforeEnter: ifNotAuthenticated,

    component: function () {
      return import('../views/Login.vue')
    }
  },
  {
    path: '/account',
    name: 'account',
    beforeEnter: ifAuthenticated,
    component: function () {
      return import('../views/Account.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// router.beforeEach((to, from, next) => {
//   console.log(store.getters['user/isLoggedIn'])
//   if(to.meta.requiresAuth){
//     if (store.getters['user/isLoggedIn']) {
//       next()
//     }
//     next('/') 
//   }
//   next()
// });

// router.beforeEach((to, from, next) => {
//   console.log(to.meta.requiresAuth)
//   // if(to.matched.some(record => record.meta.requiresAuth)) {
//   //   if (store.getters.isLoggedIn) {
//   //     next()
//   //     return
//   //   }
//   //   next('/') 
//   // } else {
//   //   next() 
//   // }
// })
// router.beforeEach((to, from, next) => {
//   console.log(to.meta.requiresAuth)
//   if(to.meta.requiresAuth){
//     console.log('as')
//     if (store.getters.isLoggedIn) {
//     console.log('ad')

//     }
//   }
//   // if(to.meta.requiresAuth) {
//   //   if (store.getters.isLoggedIn) {
//   //     next()
//   //     return
//   //   }
//   //   next('/') 
//   // } else {
//   //   next() 
//   // }
// })

export default router
