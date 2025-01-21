<template>
  <div class="canva-container" @contextmenu.prevent>
    <h2>Presentación By Nerd (Canva Embed)</h2>
    <p>
      Esta sección muestra una presentación de Canva incrustada. 
      No se permitirá la descarga ni la copia del contenido de manera directa.
    </p>

    <!-- Contenedor responsivo para el iframe de Canva -->
    <div class="canva-embed" @contextmenu.prevent>
      <iframe
        loading="lazy"
        src="https://www.canva.com/design/DAGY77y6XqI/IHskQk3YmpPTFD7MK_1GmA/view?embed"
        allowfullscreen="allowfullscreen"
        allow="fullscreen"
        frameborder="0"
      ></iframe>
    </div>

    <!-- Texto opcional para créditos/autoría -->
    <p class="canva-credits">
      <a 
        href="https://www.canva.com/design/DAGY77y6XqI/IHskQk3YmpPTFD7MK_1GmA/view?utm_content=DAGY77y6XqI&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" 
        target="_blank" 
        rel="noopener"
      >
        by nerd
      </a> 
      de Roberto Emiliano
    </p>
  </div>
</template>

<script setup>
// No es necesaria lógica adicional, es solo un embed.
</script>

<style scoped>
.canva-container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  font-family: 'Helvetica Neue', sans-serif;
  color: #333;
  /* Deshabilita selección de texto en todo este contenedor */
  user-select: none;
}

.canva-container h2 {
  text-align: center;
}

/* Contenedor responsivo con proporción 16:9 (56.25%). 
   Ajusta si tu diseño de Canva tiene otra relación de aspecto. */
.canva-embed {
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(63,69,81,0.16);
  margin-top: 1.6em;
  margin-bottom: 1em;
}

/* Iframe ocupa todo el contenedor y se evita interacción */
.canva-embed iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  pointer-events: none; /* Bloquea la interacción para dificultar descarga/copiar */
}

.canva-credits {
  text-align: center;
  font-size: 0.9rem;
}

/* Deshabilita menú contextual clic derecho en todo el contenedor */
.canva-container {
  -webkit-touch-callout: none; /* iOS Safari */
}

/* Opcional: se puede también bloquear arrastre de imágenes, etc. */
.canva-embed img {
  pointer-events: none;
  user-drag: none;
}
</style>
