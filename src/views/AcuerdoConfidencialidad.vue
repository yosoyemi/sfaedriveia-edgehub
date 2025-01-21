<template>
  <div class="acuerdo-container">
    <!-- LOGO / ENCABEZADO -->
    <div class="logo-container">
      <img src="/bynerdlogo.png" alt="By Nerd Logo" class="logo" />
    </div>
    
    <!-- TÍTULO PRINCIPAL -->
    <h1 class="titulo-principal">ACUERDO DE CONFIDENCIALIDAD</h1>
    
    <!-- CAJA DE CONTENIDO -->
    <div class="acuerdo-contenido">

      <!-- IDENTIFICACIÓN DE LAS PARTES -->
      <p>
        <strong>Entre:</strong><br/>
        <strong>Roberto Emiliano Gonzalez Velazquez</strong>, CEO de <strong>By Nerd</strong>, 
        con domicilio en <em>Jardines del Lago Jazmín 106</em>, (en lo sucesivo “<strong>El Divulgador</strong>”),  
        y <strong>{{ nombreCompleto }}</strong>, con domicilio en 
        <em>{{ domicilio }}</em> (en adelante, “<strong>El Receptor</strong>”).
      </p>

      <p>
        Dirección IP del Receptor: <strong>{{ ipUsuario }}</strong>.
      </p>

      <p>
        Ambas partes, en conjunto, “<strong>Las Partes</strong>”, convienen en suscribir el presente
        <strong>Acuerdo de Confidencialidad</strong> (en adelante, el “<strong>Acuerdo</strong>”), 
        con el objetivo de regular el uso y divulgación de la información confidencial intercambiada
        o a la que tenga acceso El Receptor, de conformidad con las siguientes cláusulas:
      </p>

      <ol>
        <!-- 1. OBJETO DEL ACUERDO -->
        <li>
          <strong>Objeto del Acuerdo</strong><br/>
          El presente Acuerdo tiene como finalidad proteger toda información de carácter
          confidencial y/o propietaria que “El Divulgador” comparta con “El Receptor” en el
          contexto de proyectos, estudios, desarrollos, colaboraciones comerciales, investigaciones,
          propuestas y cualquier otra interacción relacionada con “By Nerd”. Esta información incluye,
          de manera enunciativa pero no limitativa: algoritmos, planes de negocio, secretos comerciales,
          información financiera, metodologías, códigos fuente, diseños, especificaciones técnicas,
          estrategias de mercado y cualquier otro contenido protegido por derechos de propiedad
          intelectual o industrial.
        </li>

        <!-- 2. VERACIDAD DE LOS DATOS Y VERIFICACIÓN DE IDENTIDAD -->
        <li>
          <strong>Veracidad de los Datos y Verificación de Identidad</strong><br/>
          <ul>
            <li>El Receptor declara que los datos personales (nombre, domicilio, dirección IP, y 
            cualquier otro dato que El Divulgador solicite) son <strong>verídicos</strong> y 
            corresponden a su identidad real.</li>
            <li>El Receptor reconoce que El Divulgador puede realizar verificaciones adicionales, 
            incluida la <strong>autenticación biométrica</strong> (huella dactilar, reconocimiento 
            facial) o cualquier otro método de seguridad para confirmar su identidad y autorizar 
            el acceso a la Información Confidencial.</li>
            <li>En caso de detectarse falsedad o suplantación de identidad, El Divulgador podrá 
            denunciar los hechos ante las autoridades competentes y ejercer las acciones legales 
            que procedan, incluyendo la rescisión inmediata de cualquier relación comercial.</li>
          </ul>
        </li>

        <!-- 3. RESTRICCIÓN DE ACCESO -->
        <li>
          <strong>Restricción de Acceso</strong><br/>
          Queda <strong>terminantemente prohibido</strong> que cualquier persona que no haya 
          aceptado este Acuerdo de Confidencialidad y no haya verificado su identidad acceda, 
          consulte o utilice de forma alguna la Información Confidencial. El Receptor se compromete 
          a no compartir ni permitir el acceso a la Información Confidencial con terceros 
          no autorizados. 
        </li>

        <!-- 4. DEFINICIÓN DE INFORMACIÓN CONFIDENCIAL -->
        <li>
          <strong>Definición de Información Confidencial</strong><br/>
          <p>
            A efectos de este Acuerdo, se entenderá por “<strong>Información Confidencial</strong>”
            toda aquella información, en cualquier soporte o formato (oral, escrito, electrónico,
            visual, digital u otro), que sea señalada como confidencial o que por su naturaleza
            deba considerarse confidencial. 
          </p>
          <!-- ... resto del texto que ya teníamos, si se desea repetirlo ... -->
        </li>

        <!-- ... CONTINÚA CON EL RESTO DE CLÁUSULAS (OBLIGACIONES, CONFIDENCIALIDAD INDEFINIDA, ETC.) ... -->
        
        <!-- SANCIONES POR INCUMPLIMIENTO y ACEPTACIÓN TOTAL, etc. -->
        <!-- (Reutiliza el contenido previo con tus cláusulas específicas) -->
        
        <!-- EJEMPLO DE CLAUSULA FINAL DE ACEPTACIÓN -->
        <li>
          <strong>Aceptación y Vigencia</strong><br/>
          Al marcar la casilla “<strong>Acepto los términos</strong>” y hacer clic en
          “<strong>Continuar</strong>”, El Receptor reconoce expresamente que:
          <ul>
            <li>Ha leído, comprendido y aceptado íntegramente este Acuerdo de Confidencialidad.</li>
            <li>Confirma la veracidad de los datos proporcionados y reconoce que cualquier falsedad 
            puede ser perseguida legalmente.</li>
            <li>Acepta que el acceso a la Información Confidencial puede ser condicionado a 
            la verificación biométrica o de identidad que El Divulgador disponga.</li>
            <li>Reconoce que el presente Acuerdo no tiene límite de vigencia y que, en todo caso, 
            la confidencialidad subsistirá de forma indefinida.</li>
          </ul>
        </li>
      </ol>
      
      <div class="aceptacion">
        <label>
          <input type="checkbox" v-model="aceptado" />
          Acepto los términos del Acuerdo de Confidencialidad y la política de privacidad
        </label>
        <br/><br/>
        <button :disabled="!aceptado" @click="continuar">Continuar</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const nombreCompleto = ref('');
const domicilio = ref('');
const ipUsuario = ref('');
const aceptado = ref(false);
const router = useRouter();

onMounted(() => {
  // Cargamos los datos de sessionStorage
  nombreCompleto.value = sessionStorage.getItem('nombreCompleto') || 'No especificado';
  domicilio.value = sessionStorage.getItem('domicilio') || 'No especificado';
  ipUsuario.value = sessionStorage.getItem('ipUsuario') || 'IP no disponible';

  // Opcional: podrías checar que sessionStorage.getItem('biometricoVerificado') == true
  // si quieres obligar a que el usuario haya pasado la verificación.
  // if (!sessionStorage.getItem('biometricoVerificado')) {
  //   // Redirigir o mostrar advertencia
  // }
});

function continuar() {
  if (aceptado.value) {
    sessionStorage.setItem('acuerdoAceptado', true);
    router.push('/proyecto');
  }
}
</script>

<style scoped>
.acuerdo-container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: #f9f9f9;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: 'Helvetica Neue', sans-serif;
  color: #333;
}

.logo-container {
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.logo {
  width: 150px;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.titulo-principal {
  text-align: center;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #2c3e50;
}

.acuerdo-contenido {
  text-align: justify;
  line-height: 1.6;
  font-size: 1rem;
  margin-bottom: 2rem;
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 8px;
}

/* Listas */
.acuerdo-contenido ol {
  margin-left: 1.5rem;
}

.acuerdo-contenido ul {
  margin-left: 1.5rem;
  list-style-type: disc;
}

.acuerdo-contenido li > strong {
  font-size: 1.05rem;
  color: #34495e;
}

/* Bloque de Aceptación */
.aceptacion {
  margin-top: 2rem;
  text-align: center;
}

.aceptacion input[type="checkbox"] {
  margin-right: 0.5rem;
}

.aceptacion button {
  background-color: #2c3e50;
  color: #fff;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.aceptacion button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.aceptacion button:hover:not(:disabled) {
  background-color: #1a242f;
}
</style>
