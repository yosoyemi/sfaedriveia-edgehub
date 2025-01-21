<!-- src/views/Proyecto.vue -->
<template>
  <div class="project-container" @contextmenu.prevent>
    <!-- ENCABEZADO / LOGOS -->
    <div class="logo-wrapper fade-in">
      <img src="/bynerdlogo.png" alt="By Nerd Logo" class="logo" />
      <img src="/logicallogo.png" alt="Logical Logo" class="logo" />
    </div>
    
    <!-- SELECTOR DE IDIOMA (ANIMACIÓN) -->
    <div class="language-switch fade-in">
      <label>{{ currentLang === 'es' ? 'Idioma:' : 'Language:' }}</label>
      <select v-model="currentLang" @change="animarSwitch">
        <option value="es">Español</option>
        <option value="en">English</option>
      </select>
    </div>

    <!-- TÍTULO PRINCIPAL -->
    <h1 class="fade-in-title">{{ t('title') }}</h1>

    <!-- SECCIONES (con animaciones y contenido) -->
    <section
      v-for="(sec, idx) in sections"
      :key="idx"
      class="fade-in-section contenido"
    >
      <h2>{{ t(sec.titleKey) }}</h2>
      <div v-if="sec.isList">
        <ul>
          <li
            v-for="(item, i) in sec.items"
            :key="i"
          >
            {{ t(item) }}
          </li>
        </ul>
      </div>
      <div v-else>
        <p v-if="sec.descriptionKey">{{ t(sec.descriptionKey) }}</p>
        <ul v-if="sec.extraList && sec.extraList.length">
          <li v-for="(ex, j) in sec.extraList" :key="j">
            <strong v-if="ex.startsWith('**') && ex.endsWith('**')">
              {{ ex.replace(/\*/g, '') }}
            </strong>
            <span v-else>{{ t(ex) }}</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- PRESENTACIÓN DE CANVA (SIN DESCARGA) -->
    <section class="fade-in-section contenido">
      <h2>{{ currentLang === 'es' ? 'Presentación de Canva' : 'Canva Presentation' }}</h2>
      <p>
        {{
          currentLang === 'es'
            ? 'A continuación se muestra la presentación en Canva. No se puede descargar ni copiar fácilmente.'
            : 'Below is the Canva presentation. It cannot be easily downloaded or copied.'
        }}
      </p>

      <div class="canva-embed" @contextmenu.prevent>
        <iframe
          loading="lazy"
          style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; pointer-events: none;"
          src="https://www.canva.com/design/DAGY77y6XqI/IHskQk3YmpPTFD7MK_1GmA/view?embed"
          allowfullscreen="allowfullscreen"
          allow="fullscreen"
        ></iframe>
      </div>

      <!-- CRÉDITOS DE AUTORÍA (OPCIONAL) -->
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
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const currentLang = ref('es');

/**
 * Diccionario de textos en ambos idiomas.
 * Se ha unificado la descripción de la sección "Oferta Directa" en un solo bloque.
 */
const messages = {
  es: {
    title: "Información del Proyecto",

    /* 1. SECCIONES ORIGINALES */
    sectionIaByNerd: "I.A. By Nerd",
    descIaByNerd:
      "I.A. By Nerd es una comunidad de estudiantes multidisciplinarios que piensan diferente y creen que quienes no encajan son quienes revolucionan el mundo...",

    sectionVision: "Visión Futuro",
    visionItem1: "Comunidad de estudiantes multidisciplinarios",
    visionItem2: "Creencia en el pensamiento revolucionario de inconformes",
    visionItem3: "Contribución de las PyMEs a la economía mexicana",
    visionItem4: "Contribuyen con 52% del PIB nacional",
    visionItem5: "Representan 99.8% de los establecimientos en México",
    visionItem6: "Generan 70% del empleo formal",

    sectionWhatWeDo: "¿Qué hacemos?",
    descWhatWeDo:
      "Ofrecemos aplicaciones web y sistemas personalizados para PyMEs, planes mensuales accesibles, tecnología avanzada y actualizaciones continuas.",

    sectionHistory: "Nuestra Historia",
    descHistory:
      "Comenzamos ayudando a una familia con un sistema obsoleto, desarrollando un punto de venta que digitalizó sus operaciones.",

    sectionUniqueValue: "Nuestro Valor Único",
    descUniqueValue:
      "Comparando con Soft Restaurant o Square POS, ofrecemos soluciones personalizadas, conectividad, CRM, análisis mensual, apps responsivas, tecnología moderna, contratos de confidencialidad y soluciones digitales para cualquier sector.",

    sectionCallToAction: "Llamado a la Acción",
    descCallToAction:
      "Buscamos $X de capital semilla para expandir el equipo y desarrollar IA más robustas. Invertir en innovación, mentoría y networking.",

    sectionMainIdeas: "Ideas Principales",
    mainIdeasItem1: "Legal: protección para clientes y empresa",
    mainIdeasItem2: "Capital semilla: proyectos de aplicación innovadora",
    mainIdeasItem3: "Búsqueda de PyMEs con grandes problemas a resolver",
    mainIdeasItem4: "Impacto tecnológico en la comunidad global",

    sectionSlogan: "Slogan",
    descSlogan: "\"Si puedes imaginarlo, podemos crearlo\"",

    sectionCollabProposal: "Propuesta de Colaboración",
    descCollabProposal1:
      "Proponemos una colaboración entre Goji y By Nerd basada en la integración de datos en el punto de venta y los sistemas de By Nerd.",
    descCollabProposal2:
      "IA que se conecte directamente a la data para atención automatizada y personalizada a los clientes.",
    descCollabProposal3:
      "Asista en logística y coordinación entre departamentos con información centralizada.",
    descCollabProposal4:
      "Para validar la tecnología, sugerimos comenzar con dos proyectos piloto:",
    collabObelie:
      "Sistema instalado en todas las sucursales, fábrica y administración.",
    collabApapacho:
      "Integración de WhatsApp Business para crear un e-commerce privado.",

    /* 2. SECCIÓN UNIFICADA: Oferta Directa By Nerd */
    sectionDirectOffer: "Oferta Directa: Características y Alcance",
    descDirectOffer: `
      By Nerd ofrece presencia completa en línea (administración de negocio, contacto directo con clientes y usuarios) 
      y un Punto de Venta (POS) integrado con inventario, tickets y dispositivos externos (escáner de códigos). 
      Trabajamos con metodologías industriales avaladas por Six Sigma para la correcta capacitación 
      y optimización de toda la cadena de suministro. Nuestro software es totalmente adaptable y, 
      con un enfoque minimalista y funcional, brinda una plataforma centralizada donde el cliente administra su negocio, 
      ve reportes, genera tickets y conecta hardware local, todo desde la nube o en instalaciones locales. 
      Estamos familiarizados con desarrollo en Astro, Next.js, React, React Native (TypeScript), Angular, Vue; 
      sistemas basados en Supabase, MongoDB, SQL, Docker, SQLite, PostgreSQL; 
      frontend con Tailwind CSS, CSS y uso de Figma; 
      y para análisis de datos e IA empleamos Python, Anaconda, TensorFlow, APIs de ChatGPT, modelos de Meta (Ollama) y Gemini 1.5. 
      Además, podemos implementar procesos de mejora continua y metodologías industriales para una capacitación completa de los operarios en 3 meses, 
      estimando 2 semanas para adecuar o programar nuestro CRM. 
      La sinergia con Goji nos interesa por su experiencia en IA, 
      buscando integrar su API o modelo de inteligencia como prueba piloto en algún punto de venta a través de WhatsApp Business, 
      de modo que dicha IA se conecte directamente a la base de datos de la empresa y responda con inteligencia generativa, 
      agilizando la interacción con clientes y mejorando la eficiencia en toda la operación.
    `,
  },
  en: {
    title: "Project Information",

    /* 1. Original sections in English */
    sectionIaByNerd: "I.A. By Nerd",
    descIaByNerd:
      "I.A. By Nerd is a community of multidisciplinary students who think differently and believe those who don't fit in are the ones who revolutionize the world...",

    sectionVision: "Future Vision",
    visionItem1: "Community of multidisciplinary students",
    visionItem2: "Belief in revolutionary thinking by non-conformists",
    visionItem3: "Contribution of SMEs to the Mexican economy",
    visionItem4: "Contribute 52% of national GDP",
    visionItem5: "Represent 99.8% of establishments in Mexico",
    visionItem6: "Generate 70% of formal employment",

    sectionWhatWeDo: "What do we do?",
    descWhatWeDo:
      "We offer web applications and personalized systems for SMEs, affordable monthly plans, cutting-edge technology and continuous updates.",

    sectionHistory: "Our History",
    descHistory:
      "We began by helping a family with an outdated system, developing a POS that digitalized their operations.",

    sectionUniqueValue: "Our Unique Value",
    descUniqueValue:
      "Compared to Soft Restaurant or Square POS, we provide custom solutions, connectivity, CRM, monthly analysis, responsive apps, modern tech, confidentiality agreements, and digital solutions for any sector.",

    sectionCallToAction: "Call to Action",
    descCallToAction:
      "We seek $X in seed capital to expand the team and develop more robust AIs. Invest in innovation, mentorship, and networking.",

    sectionMainIdeas: "Main Ideas",
    mainIdeasItem1: "Legal: Provide protection for clients and the company",
    mainIdeasItem2: "Seed capital: Innovative application projects",
    mainIdeasItem3:
      "Search for SMEs with major problems to be solved with technology",
    mainIdeasItem4: "Technological impact on the global community",

    sectionSlogan: "Slogan",
    descSlogan: "\"If you can imagine it, we can create it\"",

    sectionCollabProposal: "Collaboration Proposal",
    descCollabProposal1:
      "We propose a collaboration between Goji and By Nerd based on integrating data from the point of sale and By Nerd's systems.",
    descCollabProposal2:
      "An AI that directly connects to the company's data to provide automatic and personalized customer service.",
    descCollabProposal3:
      "Assists with logistics and cross-department coordination using centralized information.",
    descCollabProposal4:
      "To validate and test this combined technology, we suggest starting with two pilot projects:",
    collabObelie:
      "System fully installed in all branches, factory, and administration.",
    collabApapacho:
      "Integration of WhatsApp Business to create a private online store.",

    /* 2. UNIFIED SECTION: Direct Offer By Nerd */
    sectionDirectOffer: "Direct Offer: Main Features and Scope",
    descDirectOffer: `
      By Nerd provides complete online presence (business management, direct contact with clients and users) 
      and an integrated Point of Sale (POS) with inventory, tickets, and external hardware devices (barcode scanners). 
      We adopt Six Sigma-backed industrial methodologies for proper training and end-to-end supply chain optimization. 
      Our software, built with a minimalist and functional approach, offers a centralized platform 
      where the client can administer their business, view reports, generate tickets, and connect local hardware, 
      either from the cloud or on-premise installations. 
      We develop in Astro, Next.js, React, React Native (TypeScript), Angular, Vue; 
      rely on Supabase, MongoDB, SQL, Docker, SQLite, PostgreSQL; 
      use Tailwind CSS, standard CSS, and Figma for frontend design; 
      and employ Python, Anaconda, TensorFlow, ChatGPT APIs, Meta models (Ollama), and Gemini 1.5 for data analysis and AI solutions. 
      We can implement continuous improvement processes and industrial methodologies to fully train operators within 3 months, 
      with an estimated 2 weeks to adapt or code our CRM solution. 
      We find Goji’s AI expertise compelling and aim to integrate its API or intelligence model as a pilot test in a point-of-sale environment 
      via WhatsApp Business, so that Goji’s AI connects directly to the company database and responds with generative intelligence, 
      streamlining customer interactions and enhancing overall operational efficiency.
    `,
  },
};

/** Función auxiliar de traducción. */
function t(key) {
  return messages[currentLang.value][key] || key;
}

/** Definimos las secciones, incluyendo la sección “Oferta Directa” en un solo bloque. */
const sections = [
  {
    titleKey: 'sectionIaByNerd',
    descriptionKey: 'descIaByNerd',
    isList: false,
  },
  {
    titleKey: 'sectionVision',
    isList: true,
    items: ['visionItem1','visionItem2','visionItem3','visionItem4','visionItem5','visionItem6']
  },
  {
    titleKey: 'sectionWhatWeDo',
    descriptionKey: 'descWhatWeDo',
    isList: false
  },
  {
    titleKey: 'sectionHistory',
    descriptionKey: 'descHistory',
    isList: false
  },
  {
    titleKey: 'sectionUniqueValue',
    descriptionKey: 'descUniqueValue',
    isList: false
  },
  {
    titleKey: 'sectionCallToAction',
    descriptionKey: 'descCallToAction',
    isList: false
  },
  {
    titleKey: 'sectionMainIdeas',
    isList: true,
    items: ['mainIdeasItem1','mainIdeasItem2','mainIdeasItem3','mainIdeasItem4']
  },
  {
    titleKey: 'sectionSlogan',
    descriptionKey: 'descSlogan',
    isList: false
  },
  {
    titleKey: 'sectionCollabProposal',
    descriptionKey: 'descCollabProposal1',
    isList: false,
    extraList: ['descCollabProposal2','descCollabProposal3']
  },
  // NUEVA SECCIÓN: todo en un solo bloque de texto
  {
    titleKey: 'sectionDirectOffer',
    descriptionKey: 'descDirectOffer',
    isList: false
  },
];

/** Animación al cambiar idioma (zoom breve). */
function animarSwitch() {
  const switchEl = document.querySelector('.language-switch');
  if (!switchEl) return;

  switchEl.classList.remove('switch-anim');
  void switchEl.offsetWidth; // Forzamos reflow
  switchEl.classList.add('switch-anim');
}
</script>

<style scoped>
/* =============== COLORES PRINCIPALES ==================
   - Fondo TOTALMENTE BLANCO (#fff)
   - Acentos en #7538d4, #c8bbde, #230b49, #9464d6
   - Diseño minimalista y profesional
========================================================*/

.project-container {
  background-color: #fff; /* Fondo blanco puro */
  color: #230b49;        /* Texto principal */
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(117,56,212, 0.15);
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  user-select: none;    /* Dificulta copiar texto */
  position: relative;
  overflow: hidden;
  min-height: 100vh;    /* Para lucir el fondo */
}

/* LOGOS */
.logo-wrapper {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1.5rem;
  animation: fadeInUp 1s ease both;
}
.logo {
  width: 120px;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.15);
}

/* SELECTOR DE IDIOMA */
.language-switch {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  color: #230b49;
  animation: fadeInUp 1s ease both;
}
.language-switch label {
  font-weight: bold;
  color: #7538d4; /* Morado medio */
}
.language-switch select {
  padding: 0.3rem 0.5rem;
  font-size: 1rem;
  border: 1px solid #9464d6;
  background-color: #c8bbde; /* Lavanda claro */
  color: #230b49;
  border-radius: 6px;
  cursor: pointer;
  transition: box-shadow 0.3s, transform 0.3s;
}
.language-switch select:hover,
.language-switch select:focus {
  box-shadow: 0 0 8px rgba(148,100,214,0.5);
}
.language-switch.switch-anim {
  animation: switchScale .4s ease-in-out;
}
@keyframes switchScale {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}

/* TÍTULO PRINCIPAL */
.fade-in-title {
  text-align: center;
  margin-bottom: 2rem;
  animation: fadeInScale 1s ease both;
  color: #7538d4; /* Morado */
  font-size: 2rem;
  font-weight: bold;
}

/* SECCIONES (FADE-IN) */
.fade-in-section {
  animation: fadeInUp 1.2s ease both;
}
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeInScale {
  0% {
    opacity: 0;
    transform: scale(0.6);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
.contenido h2 {
  color: #230b49;
  margin-bottom: 1rem;
  letter-spacing: 1px;
  text-shadow: 0.5px 0.5px 1px rgba(117,56,212,0.2);
}
.contenido p,
.contenido li {
  color: #230b49;
  line-height: 1.5;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}
.contenido ul {
  margin-left: 1.5rem;
  list-style-type: disc;
}

/* EMBED DE CANVA */
.canva-embed {
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* Relación 16:9 */
  margin-top: 1em;
  margin-bottom: 1em;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(117,56,212,0.2);
  overflow: hidden;
}
.canva-embed iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none; /* Bloquea interacción (descarga/clic) */
}

/* CRÉDITOS CANVA */
.canva-credits {
  font-size: 0.9rem;
  color: #9464d6;
  text-align: center;
  margin-top: 0.5rem;
}
.canva-credits a {
  color: #7538d4;
  text-decoration: none;
  transition: color 0.3s;
}
.canva-credits a:hover {
  color: #230b49;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .logo {
    width: 90px;
  }
  .canva-embed {
    padding-top: 60%;
  }
  .fade-in-title {
    font-size: 1.5rem;
  }
}
</style>
