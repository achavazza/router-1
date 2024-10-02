import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/user.js'

import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Editar from "@/views/Editar.vue";
import Register from "@/views/Register.vue";
import Perfil from "@/views/Perfil.vue";


//middleware con una promesa para esperar y chequear el login de usuario
const requireAuth = async (to, from, next) =>{
  const userStore = useUserStore();  
  userStore.loadingSession = true;
  const user = await userStore.currentUser();
  if(user){
    next();
    console.log('entro');
  }else{
    //next('/login');
    console.log('no entro');
  }
  userStore.loadingSession = false;
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: Home, beforeEnter: requireAuth, name:'home' },
    { path: "/editar/:id", component: Editar, beforeEnter: requireAuth, name: 'edit' },
    { path: "/login", component: Login, name: 'login' },
    { path: "/register", component: Register, name: 'register' },
    { path: "/perfil", component: Perfil, beforeEnter: requireAuth, name: 'perfil' },
  ]
})

export default router
