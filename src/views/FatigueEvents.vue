<!-- src/views/FatigueEvents.vue -->
<template>
  <div>
    <h1>Eventos de Fatiga</h1>
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>Event ID</th>
            <th>Session ID</th>
            <th>Event Time</th>
            <th>Alert Type</th>
            <th>Eye Closed (s)</th>
            <th>Alarm Triggered</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="event in fatigueEvents" :key="event.event_id">
            <td>{{ event.event_id }}</td>
            <td>{{ event.session_id }}</td>
            <td>{{ formatDate(event.event_time) }}</td>
            <td>{{ event.alert_type }}</td>
            <td>{{ event.eye_closed_seconds }}</td>
            <td>{{ event.alarm_triggered ? 'Sí' : 'No' }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../supabase'

const fatigueEvents = ref([])

const fetchFatigueEvents = async () => {
  const { data, error } = await supabase
    .from('fatigue_events')
    .select('*')
    .order('event_id', { ascending: true })
  if (error) {
    console.error('Error al obtener eventos de fatiga:', error)
  } else {
    fatigueEvents.value = data
  }
}

onMounted(() => {
  fetchFatigueEvents()
})

const formatDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleString()
}
</script>

<style scoped>
.table-container {
  margin-top: 1rem;
  overflow-x: auto;
  text-align: left;
}
table {
  width: 100%;
  border-collapse: collapse;
  min-width: 600px;
}
th, td {
  padding: 0.8rem;
  border: 1px solid #ccc;
}
th {
  background-color: #f3f3f3;
}
</style>
