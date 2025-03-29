<!-- src/App.vue -->
<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
</script>

<style scoped>
/* Ajuste para que el contenido no quede debajo del navbar si es sticky */
#app {
  padding-top: 80px; /* Depende de la altura de tu navbar */
}
</style>
