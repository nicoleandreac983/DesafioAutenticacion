import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import {auth} from '@/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignUpView.vue'),
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta:{
        login:true
      }

    },
  ],
})

router.beforeEach((to, from, next) => {
  const authRequired = to.meta.login  // vertificar si la ruta necesita autenticacion
  const isAuthenticated = auth.currentUser !== null // verifica si esta autenticado

  if (authRequired && !isAuthenticated) {
    next({name: 'home'})
  }else{
    //dejar pasar al usuario a la ruta solicitada
    next()
  }
})

export default router
