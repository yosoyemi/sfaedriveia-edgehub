<!-- src/components/EmotionsChart.vue -->
<template>
  <div style="width:100%; height:400px; margin-top: 2rem;">
    <Bar :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
)

// Props: un array con objetos de la tabla emotions + driver_sessions.driver_id
const props = defineProps({
  rawData: {
    type: Array,
    required: true
  }
})

// chartData => para <Bar :data="chartData" />
const chartData = ref({
  labels: [],     // Lista de emociones únicas
  datasets: []    // Cada dataset = un driver distinto
})

// Opciones básicas
const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false
})

function buildChart() {
  // 1. Agrupar datos:  aggregated[driver_id][emotion] = count
  const aggregated = {}
  const allEmotions = new Set()
  const allDrivers = new Set()

  props.rawData.forEach(item => {
    const driver_id = item.driver_sessions?.driver_id
    const emotion = item.emotion

    if(!driver_id) return  // Si no hay driver_id, lo ignoramos
    allDrivers.add(driver_id)
    allEmotions.add(emotion)

    if(!aggregated[driver_id]) aggregated[driver_id] = {}
    if(!aggregated[driver_id][emotion]) aggregated[driver_id][emotion] = 0
    aggregated[driver_id][emotion]++
  })

  // 2. Convertir sets a array
  const uniqueEmotions = Array.from(allEmotions)     // Eje X
  const uniqueDrivers = Array.from(allDrivers)       // Para crear datasets

  // 3. Construir datasets: un dataset por driver
  const datasets = uniqueDrivers.map(driver => {
    return {
      label: `Driver ${driver}`,
      data: uniqueEmotions.map(em => aggregated[driver][em] || 0),
      backgroundColor: 'rgba(81,69,255,0.6)'
    }
  })

  // 4. Asignar a chartData
  chartData.value.labels = uniqueEmotions
  chartData.value.datasets = datasets
}

// Construimos el gráfico al montar el componente
buildChart()
</script>
