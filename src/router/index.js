import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    component: () => import('../views/Login-LG.vue')
  },
  {
    path: '/dashboard',
    component: () => import('../views/DashboardView.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/ProductsView.vue')
      },
      {
        path: 'order',
        component: () => import('../views/OrderView.vue')
      },
      {
        path: 'temp',
        component: () => import('../views/DiscountView.vue')
      }
    ]
  },
  {
    path: '/',
    component: () => import('../views/HomeUserView.vue'),
    children: [
      {
        path: 'frontpage',
        component: () => import('../views/UserView.vue')
      },
      {
        path: 'cart',
        component: () => import('../views/UsercartView.vue')
      },
      {
        path: 'product/:productId',
        component: () => import('../views/UserproductView.vue')
      }
    ]
  },
  {
    path: '/test',
    component: () => import('../components/OffcanceView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
