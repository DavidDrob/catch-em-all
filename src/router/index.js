import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import MyCards from '../views/MyCards.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)
Vue.use(Vuex)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/mycards',
    name: 'My Cards',
    component: MyCards
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
] 

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
