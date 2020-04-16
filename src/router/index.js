import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AntiMalaria from '../views/products/AntiMalaria'
import Multivitamins from '../views/products/Multivitamins'
import ContactUs from '../views/ContactUs'
import SignUp from '../views/SignUp'
import SignIn from '../views/SignIn'
import AboutUs from '../views/AboutUs'
import PaymentSuccess from '../views/PaymentSuccess'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/products/AntiMalaria',
    name: 'AntiMalaria',
    component: AntiMalaria
  },
  {
    path: '/ContactUs',
    name: 'ContactUs',
    component: ContactUs
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/SignIn',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/AboutUs',
    name: 'AboutUs',
    component: AboutUs
  },
  {
    path: '/PaymentSuccess',
    name: 'PaymentSuccess',
    component: PaymentSuccess
  },
  {
    path: '/products/Multivitamins',
    name: 'Multivitamins',
    component: Multivitamins
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
