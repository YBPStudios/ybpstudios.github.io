import { createRouter, createWebHistory } from 'vue-router'
import CustomMusic from '@/views/CustomMusic.vue'
import Contact from '@/views/Contact.vue'
import About from '@/views/About.vue'
import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/custom_music',
      name: 'custom_music',
      component: CustomMusic
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})

export default router
