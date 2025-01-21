// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// Importa las vistas (componentes) para cada paso
import ClaveSecurity from '../views/ClaveSecurity.vue'
import DatosPersonales from '../views/DatosPersonales.vue'
import AcuerdoConfidencialidad from '../views/AcuerdoConfidencialidad.vue'
import Proyecto from '../views/Proyecto.vue'
import VistaCanva from '../views/VistaCanva.vue';


const routes = [
  { path: '/', name: 'ClaveSecurity', component: ClaveSecurity },
  { path: '/datos', name: 'DatosPersonales', component: DatosPersonales },
  { path: '/acuerdo', name: 'AcuerdoConfidencialidad', component: AcuerdoConfidencialidad },
  { path: '/proyecto', name: 'Proyecto', component: Proyecto },
  { path: '/vista-canva', name: 'VistaCanva', component: VistaCanva },

  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Guard de navegación para asegurar que se complete el proceso
router.beforeEach((to, from, next) => {
  const accessGranted = sessionStorage.getItem('accessGranted')
  // Si se intenta acceder a rutas intermedias sin la clave
  if (to.name !== 'ClaveSecurity' && !accessGranted) {
    next({ name: 'ClaveSecurity' })
  } else {
    // Puedes agregar más validaciones en función del paso (por ejemplo, que el nombre esté guardado o que se haya aceptado el acuerdo)
    next()
  }
})

export default router
