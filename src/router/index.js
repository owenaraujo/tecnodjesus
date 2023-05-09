import { createRouter, createWebHistory } from 'vue-router'
import index from '../views/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/taller',
      name: 'taller',
      component: index
    },
    {
      path: '/',
      name: 'tienda',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/tienda.vue')
    },
    

  ],
  
})
router.beforeEach((to, from, next) => {
  
  router.options.routes.forEach((route) => {
    
  
    if (to.matched == 0) {
      
     return next("/")
    }
  })
  // curso normal del proceso
  next()
})

export default router
