<!-- src/views/Emotions.vue -->
<template>
  <div>
    <h1>Emociones</h1>
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>Emotion ID</th>
            <th>Session ID</th>
            <th>Event Time</th>
            <th>Emotion</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="emotion in emotions" :key="emotion.emotion_id">
            <td>{{ emotion.emotion_id }}</td>
            <td>{{ emotion.session_id }}</td>
            <td>{{ formatDate(emotion.event_time) }}</td>
            <td>{{ emotion.emotion }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../supabase'

const emotions = ref([])

const fetchEmotions = async () => {
  const { data, error } = await supabase
    .from('emotions')
    .select('*')
    .order('emotion_id', { ascending: true })
  if (error) {
    console.error('Error al obtener emociones:', error)
  } else {
    emotions.value = data
  }
}

onMounted(() => {
  fetchEmotions()
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
