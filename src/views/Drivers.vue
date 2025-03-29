<!-- src/views/Drivers.vue -->
<template>
  <div>
    <h1>Conductores</h1>
    <div class="card">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Creado</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="driver in drivers" :key="driver.driver_id">
            <td>{{ driver.driver_id }}</td>
            <td>{{ driver.driver_name }}</td>
            <td>{{ driver.driver_email }}</td>
            <td>{{ formatDate(driver.created_at) }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="card">
      <h2>Agregar nuevo conductor</h2>
      <form @submit.prevent="addDriver">
        <div class="form-group">
          <label for="driver_name">Nombre:</label>
          <input type="text" id="driver_name" v-model="newDriver.driver_name" required />
        </div>
        <div class="form-group">
          <label for="driver_email">Email:</label>
          <input type="email" id="driver_email" v-model="newDriver.driver_email" required />
        </div>
        <button type="submit">Agregar</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../supabase'

const drivers = ref([])

const fetchDrivers = async () => {
  const { data, error } = await supabase
    .from('drivers')
    .select('*')
    .order('driver_id', { ascending: true })
  if (error) {
    console.error('Error al obtener conductores:', error)
  } else {
    drivers.value = data
  }
}

onMounted(() => {
  fetchDrivers()
})

const newDriver = ref({
  driver_name: '',
  driver_email: ''
})

const addDriver = async () => {
  const { error } = await supabase
    .from('drivers')
    .insert([newDriver.value])
  
  if (error) {
    console.error('Error al insertar conductor:', error)
  } else {
    // Reiniciamos el formulario y actualizamos la lista
    newDriver.value = {
      driver_name: '',
      driver_email: ''
    }
    fetchDrivers()
  }
}

// Formatea la fecha
const formatDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleString()
}
</script>

<style scoped>
.form-group {
  margin-bottom: 1rem;
}
label {
  display: inline-block;
  width: 80px;
  font-weight: 500;
}
input[type="text"],
input[type="email"] {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0.4rem;
  width: 200px;
}
</style>
