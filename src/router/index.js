import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/UserView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: '首頁'
    }
  },
  {
    path: '/login',
    component: () => import('../views/Login-LG.vue'),
    meta: {
      title: 'Login'
    }
  },
  {
    path: '/dashboard',
    component: () => import('../views/DashboardView.vue'),
    meta: {
      title: '後台管理'
    },
    children: [
      {
        path: 'products',
        component: () => import('../views/ProductsView.vue'),
        meta: {
          title: '新增商品'
        }
      },
      {
        path: 'order',
        component: () => import('../views/OrderView.vue'),
        meta: {
          title: '查看訂單'
        }
      },
      {
        path: 'temp',
        component: () => import('../views/DiscountView.vue')
      }
    ]
  },
  {
    path: '/user',
    component: () => import('../views/HomeUserView.vue'),
    children: [
      {
        path: 'cart',
        component: () => import('../views/UsercartView.vue'),
        meta: {
          title: '商品列表'
        }
      },
      {
        path: 'product/:productId',
        component: () => import('../views/UserproductView.vue'),
        meta: {
          title: '商品資訊'
        }
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
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title
  next()
})

export default router
