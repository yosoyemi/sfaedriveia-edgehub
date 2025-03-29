// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import Drivers from '../views/Drivers.vue'
import Sessions from '../views/Sessions.vue'
import FatigueEvents from '../views/FatigueEvents.vue'
import Emotions from '../views/Emotions.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/drivers', name: 'Drivers', component: Drivers },
  { path: '/sessions', name: 'Sessions', component: Sessions },
  { path: '/fatigue-events', name: 'FatigueEvents', component: FatigueEvents },
  { path: '/emotions', name: 'Emotions', component: Emotions },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
