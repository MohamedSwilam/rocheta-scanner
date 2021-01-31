import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
      meta: {
        pageTitle: 'Prescriptions',
        breadcrumb: [
          {
            text: 'Prescriptions',
            active: true,
          },
        ],
      },
    },
    {
      path: '/:id/results',
      name: 'result',
      component: () => import('@/views/result.vue'),
      meta: {
        pageTitle: 'Results',
        breadcrumb: [
          {
            text: 'Prescriptions',
            to: '/',
          },
          {
            text: 'Results',
            active: true,
          },
        ],
      },
    },
    {
      path: '/error-404',
      name: 'error-404',
      component: () => import('@/views/error/Error404.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '*',
      redirect: 'error-404',
    },
  ],
})

export default router
