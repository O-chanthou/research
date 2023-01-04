import { createRouter, createWebHistory } from 'vue-router'
import PushView from '../views/push_manage/PushView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/push-management'
    },
    {
      path: '/push-management',
      name: 'push-management',
      component: PushView
    },
    {
      path: '/push-management/push/:id',
      name: 'details',
      component: () => import('@/views/push_manage/PushDetailsView.vue'),
      props: true
    },
    {
      path: '/push-notification',
      name: 'push-noti',
      component: () => import('@/views/push_noti/PushNotiView.vue')
    }
  ]
})

export default router
