<!-- src/components/NavBar.vue -->
<template>
  <nav class="navbar">
    <router-link to="/">Home</router-link>
    <router-link to="/dashboard">Dashboard</router-link>
    <router-link to="/drivers">Drivers</router-link>
    <router-link to="/sessions">Sessions</router-link>
    <router-link to="/fatigue-events">Fatigue Events</router-link>
    <router-link to="/emotions">Emotions</router-link>
  </nav>
</template>

<script setup>
  // Sin lógica por ahora
</script>

<!-- 
  No inline CSS acá, todo está centralizado en main.css:
  .navbar { ... }
-->
