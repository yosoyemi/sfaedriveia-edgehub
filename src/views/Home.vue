<!-- src/views/Home.vue -->
<template>
  <div>
    <h1>Inicio</h1>
    <p>Bienvenido a la nueva aplicación.</p>
    <div class="card">
      <p>Aquí podrás administrar conductores, sus sesiones y eventos.</p>
      <router-link to="/dashboard">
        <button>Ir al Dashboard</button>
      </router-link>
    </div>
  </div>
</template>

<script setup>
// Lógica propia de Home (si la necesitas)
</script>

<style scoped>
/* Estilos específicos de Home (opcionales) */
</style>
