/*
 * @Author: Jarvis 823867852@qq.com
 * @Date: 2022-05-06 21:33:38
 * @LastEditors: Jarvis 823867852@qq.com
 * @LastEditTime: 2022-05-08 20:17:49
 * @FilePath: \beautiful-language\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/layouts/Home.vue'

export const constantRouterMap = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: 'beautiful-language'
    },
    redirect: '/highQuality',
    children: [
      {
        path: '/highQuality',
        meta: {
          title: '高质量生成器'
        },
        component: () => import('@/views/highQuality/index.vue')
      }
    ]
  },
  {
    path: '/404',
    meta: {
      title: '404'
    },
    component: {
      template: '<div>404</div>'
    }
  },
  { path: '/:pathMatch(.*)*', name: 'not-found', redirect: '/404' }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRouterMap
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})
export default router
