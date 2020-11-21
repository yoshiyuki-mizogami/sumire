import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import ManageSchedules from '../views/ManageSchedules.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/ManageSchedules',
    name: 'ManageSchedules',
    component: ManageSchedules
  },
  {
    path: '/ManageWorkers',
    name: 'ManageWorkers',
    component: () => import(/* webpackChunkName: "about" */ '../views/ManageWorkers.vue')
  },
  {
    path: '/ManageChildren',
    name: 'ManageChildren',
    component: () => import(/* webpackChunkName: "about" */ '../views/ManageChildren.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router
