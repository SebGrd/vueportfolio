import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/experience',
    name: 'Experience',
    component: () => import(/* webpackChunkName: "experience" */ '../views/Experience.vue')
  },
  {
    path: '/skills',
    name: 'Skills',
    component: () => import(/* webpackChunkName: "skills" */ '../views/Skills.vue')
  },
  {
    path: '/schools',
    name: 'Schools',
    component: () => import(/* webpackChunkName: "schools" */ '../views/Schools.vue')
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import(/* webpackChunkName: "projects" */ '../views/Projects.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
