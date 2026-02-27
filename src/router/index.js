import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Home', component: () => import('../views/Home.vue'), meta: { title: 'Hot 100 题单' } },
  {
    path: '/category/:name',
    name: 'Category',
    component: () => import('../views/Category.vue'),
    meta: { title: '分类' },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.afterEach((to) => {
  document.title = to.meta.title ? `${to.meta.title} - 力扣刷题记录` : '力扣 Hot 100 刷题记录'
})

export default router
