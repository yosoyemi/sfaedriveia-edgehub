<!-- src/App.vue -->
<template>
  <div id="app">
    <!-- Renderiza las rutas -->
    <router-view />
  </div>
</template>

<script setup>
// No es necesario importar nada aquí para el router-view
</script>

<style scoped>
#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}
</style>
