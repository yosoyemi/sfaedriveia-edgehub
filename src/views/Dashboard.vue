<!-- src/views/Dashboard.vue -->
<template>
  <div>
    <h1>Dashboard</h1>
    <div class="card">
      <h2>Resumen de datos</h2>
      <ul>
        <li>Drivers: {{ driverCount }}</li>
        <li>Sessions: {{ sessionCount }}</li>
        <li>Fatigue Events: {{ fatigueCount }}</li>
        <li>Emotions: {{ emotionCount }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../supabase'

// Contadores
const driverCount = ref(0)
const sessionCount = ref(0)
const fatigueCount = ref(0)
const emotionCount = ref(0)

const fetchCounts = async () => {
  try {
    // Contar Drivers
    let { count: driversCount } = await supabase
      .from('drivers')
      .select('*', { count: 'exact', head: true })
    driverCount.value = driversCount ?? 0

    // Contar Sessions
    let { count: sessionsCount } = await supabase
      .from('driver_sessions')
      .select('*', { count: 'exact', head: true })
    sessionCount.value = sessionsCount ?? 0

    // Contar Fatigue Events
    let { count: fatigueEventsCount } = await supabase
      .from('fatigue_events')
      .select('*', { count: 'exact', head: true })
    fatigueCount.value = fatigueEventsCount ?? 0

    // Contar Emotions
    let { count: emotionsCount } = await supabase
      .from('emotions')
      .select('*', { count: 'exact', head: true })
    emotionCount.value = emotionsCount ?? 0

  } catch (error) {
    console.error('Error al obtener conteos:', error)
  }
}

onMounted(() => {
  fetchCounts()
})
</script>

<style scoped>
.card {
  margin-top: 2rem;
  text-align: left;
  display: inline-block;
  padding: 1rem 2rem;
}
h2 {
  margin-bottom: 1rem;
}
ul {
  list-style: none;
  padding: 0;
}
</style>