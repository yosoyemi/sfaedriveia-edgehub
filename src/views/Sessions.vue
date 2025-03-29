<!-- src/views/Sessions.vue -->
<template>
  <div>
    <h1>Sesiones</h1>
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>Session ID</th>
            <th>Driver ID</th>
            <th>Inicio</th>
            <th>Fin</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="session in sessions" :key="session.session_id">
            <td>{{ session.session_id }}</td>
            <td>{{ session.driver_id }}</td>
            <td>{{ formatDate(session.session_start) }}</td>
            <td>{{ formatDate(session.session_end) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../supabase'

const sessions = ref([])

const fetchSessions = async () => {
  const { data, error } = await supabase
    .from('driver_sessions')
    .select('*')
    .order('session_id', { ascending: true })
  if (error) {
    console.error('Error al obtener sesiones:', error)
  } else {
    sessions.value = data
  }
}

onMounted(() => {
  fetchSessions()
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
