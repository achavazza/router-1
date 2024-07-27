import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/user.js'

import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: Home,},
    { path: "/login", component: Login },
    { path: "/register", component: Register },
  ]
})

export default router
