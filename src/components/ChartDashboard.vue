<!-- src/components/ChartDashboard.vue -->
<template>
  <div class="chart-container">
    <!-- Fíjate que la prop se llama :data, no :chart-data -->
    <Bar :data="propsData" :options="propsOptions" />
  </div>
</template>

<script setup>
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

// Registramos los componentes que usaremos en Chart.js
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
)

// Definimos las props que recibiremos del padre
const props = defineProps({
  chartData: {
    type: Object,
    required: true
  },
  chartOptions: {
    type: Object,
    required: true
  }
})

// Para “traducir” nuestras props a las que <Bar> espera: data y options
const propsData = props.chartData
const propsOptions = props.chartOptions
</script>

<style scoped>
.chart-container {
  width: 100%;
  height: 400px; /* Ajusta el alto a tu gusto */
  margin-top: 2rem;
}
</style>
