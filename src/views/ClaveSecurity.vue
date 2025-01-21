<template>
  <div class="step">
    <div class="logo-container">
      <img src="/bynerdlogo.png" alt="By Nerd Logo" class="logo" />
    </div>
    <h1>Acceso Seguro</h1>
    <p>Ingrese la clave de seguridad para continuar:</p>
    <input v-model="clave" type="password" placeholder="Clave de seguridad" />
    <br /><br />
    <button @click="validarClave">Ingresar</button>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const clave = ref('')
const error = ref('')
const router = useRouter()

function validarClave() {
  const claveCorrecta = 'TuClaveEspecial123!' // Cambia esto por la clave que necesites
  if (clave.value === claveCorrecta) {
    sessionStorage.setItem('accessGranted', true)
    router.push('/datos')
  } else {
    error.value = 'Clave incorrecta. Intente de nuevo.'
  }
}
</script>

<style scoped>
.step {
  padding: 2rem;
  text-align: center;
}
.logo-container {
  background-color: white;
  padding: 1rem;
  border-radius: 16px; /* Esquinas redondeadas para el contenedor */
  display: inline-block;
  margin-bottom: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra opcional para destacar */
}
.logo {
  width: 150px; /* Ajusta el tamaño del logo */
  height: auto;
  border-radius: 16px; /* Esquinas redondeadas para el logo */
}
.error {
  color: red;
}
</style>
