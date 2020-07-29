import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/product/:id',
        name: 'Product',
        component: () => import(/* webpackChunkName: "about" */ '../views/Product.vue')
      },
      {
        path: '/products',
        name: 'Products',
        component: () => import(/* webpackChunkName: "about" */ '../views/Products.vue')
      },
      {
        path: '/cart',
        name: 'Cart',
        component: () => import(/* webpackChunkName: "about" */ '../views/Cart.vue')
      },
      {
        path: '/payment',
        name: 'Payment',
        component: () => import(/* webpackChunkName: "about" */ '../views/Payment.vue')
      },
      {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      },
      {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
      }
    ]
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "about" */ '../views/admin/Dashboard.vue'),
    children: [
      {
        path: 'products',
        name: 'Products',
        component: () => import(/* webpackChunkName: "about" */ '../views/admin/Products.vue')
      },
      {
        path: 'coupons',
        name: 'Coupons',
        component: () => import(/* webpackChunkName: "about" */ '../views/admin/Coupons.vue')
      },
      {
        path: 'orders',
        name: 'Orders',
        component: () => import(/* webpackChunkName: "about" */ '../views/admin/Orders.vue')
      },
      {
        path: 'pictures',
        name: 'Pictures',
        component: () => import(/* webpackChunkName: "about" */ '../views/admin/Pictures.vue')
      },
      {
        path: 'logout',
        name: 'Logout',
        component: () => import(/* webpackChunkName: "about" */ '../views/admin/Logout.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
