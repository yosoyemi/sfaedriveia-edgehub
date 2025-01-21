<!-- src/views/DatosPersonales.vue -->
<template>
  <div class="step">
    <div class="logo-container">
      <img src="/bynerdlogo.png" alt="By Nerd Logo" class="logo" />
    </div>

    <h1>Datos Personales</h1>
    
    <p class="instrucciones">
      Por favor, ingresa tus datos de manera verídica y completa. Estos datos serán
      utilizados en el Acuerdo de Confidencialidad y para verificar tu identidad
      con los métodos de seguridad disponibles (como huella dactilar o reconocimiento facial).
      Al continuar, aceptas que tus datos personales son auténticos y que su falsedad
      puede conllevar consecuencias legales.
    </p>

    <label>
      Nombre completo:
      <input v-model="nombre" type="text" placeholder="Nombre completo" />
    </label>
    
    <label>
      Domicilio completo:
      <input v-model="domicilio" type="text" placeholder="Domicilio completo" />
    </label>

    <div class="biometrico" v-if="soportaBiometrico">
      <p>
        Tu dispositivo admite verificación biométrica (Touch ID, Face ID u otra). 
        ¿Deseas habilitar la autenticación biométrica para reforzar la seguridad?
      </p>
      <button @click="iniciarBiometrico" :disabled="biometricoEnProceso">
        {{ biometricoEnProceso ? 'Verificando...' : 'Habilitar Biométrico' }}
      </button>
      <p v-if="biometricoError" class="error">{{ biometricoError }}</p>
    </div>

    <br /><br />
    <button @click="guardarDatos">Siguiente</button>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

// Refs para datos del usuario
const nombre = ref('');
const domicilio = ref('');
const error = ref('');
const ip = ref('');
const router = useRouter();

// Refs para manejo de autenticación biométrica
const soportaBiometrico = ref(false);
const biometricoEnProceso = ref(false);
const biometricoError = ref('');

/**
 * Obtiene la IP del usuario haciendo un fetch a un servicio externo.
 */
async function obtenerIP() {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    ip.value = data.ip;
  } catch (err) {
    console.error('Error al obtener la IP:', err);
    ip.value = 'No disponible'; // fallback
  }
}

/**
 * Verifica si el navegador/ dispositivo soporta WebAuthn o algún método 
 * de autenticación biométrica (ej.: Touch ID, Face ID).
 * Nota: Esto es un check simplificado; la implementación real requiere 
 *       llamadas a navigator.credentials.create / get con autenticadores.
 */
function checkBiometricoSoportado() {
  // Ejemplo muy básico:
  if (window.PublicKeyCredential) {
    soportaBiometrico.value = true;
  }
}

/**
 * Inicia un proceso de autenticación biométrica (conceptual).
 * En una implementación real, harías:
 * 1. navigator.credentials.create(...) o navigator.credentials.get(...)
 * 2. Envío de challenge a tu servidor
 * 3. Validación del challenge en el backend
 */
async function iniciarBiometrico() {
  biometricoEnProceso.value = true;
  biometricoError.value = '';

  try {
    // Simulación de proceso
    // Por ejemplo, usando WebAuthn: 
    // const credential = await navigator.credentials.get({
    //   publicKey: { /* challenge, ... */ }
    // });

    // Para demo, simulamos que pasa 2 segundos
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Si llega aquí, "exitoso"
    biometricoEnProceso.value = false;
    alert('Verificación biométrica exitosa. Tus datos quedarán vinculados a esta autenticación.');
    // Podrías guardar un token o marca en sessionStorage/localStorage
    sessionStorage.setItem('biometricoVerificado', true);
  } catch (err) {
    biometricoError.value = 'No se pudo completar la autenticación biométrica.';
    biometricoEnProceso.value = false;
  }
}

onMounted(() => {
  // Obtenemos la IP del usuario
  obtenerIP();
  // Chequeamos si se soporta la autenticación biométrica
  checkBiometricoSoportado();
});

function guardarDatos() {
  if (nombre.value.trim() === '' || domicilio.value.trim() === '') {
    error.value = 'Todos los campos son requeridos.';
    return;
  }

  // Guardamos en sessionStorage
  sessionStorage.setItem('nombreCompleto', nombre.value.trim());
  sessionStorage.setItem('domicilio', domicilio.value.trim());
  sessionStorage.setItem('ipUsuario', ip.value);

  // En la lógica real, podrías obligar a la verificación biométrica antes de continuar.
  // if (soportaBiometrico.value && !sessionStorage.getItem('biometricoVerificado')) {
  //   error.value = 'Debes completar la autenticación biométrica antes de continuar.';
  //   return;
  // }

  router.push('/acuerdo');
}
</script>

<style scoped>
.step {
  padding: 2rem;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.logo-container {
  background-color: white;
  padding: 1rem;
  border-radius: 16px;
  display: inline-block;
  margin-bottom: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.logo {
  width: 150px;
  height: auto;
  border-radius: 16px;
}

.instrucciones {
  font-style: italic;
  margin-bottom: 1rem;
  text-align: justify;
}

label {
  display: block;
  text-align: left;
  margin: 1rem auto;
  max-width: 300px;
}

input[type="text"] {
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.25rem;
  box-sizing: border-box;
}

.biometrico {
  margin-top: 2rem;
  text-align: center;
}

.error {
  color: red;
  margin-top: 1rem;
}

button {
  background-color: #2c3e50;
  color: #fff;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
}

button:hover {
  background-color: #1a242f;
}
</style>
