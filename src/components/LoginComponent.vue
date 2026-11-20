<template>
  <div class="background"
    style="height: 100vh; margin: 0; display: flex; justify-content: center; align-items: center;">
    <div class="circle">
      <img src="../images/Relay-sheet-smaller.png" alt="Logo" width="122px" height="122px">
    </div>
    <div class="login_box" style="text-align: center; width: 300px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
      <h1>Login</h1>
      <div>
        <input class="login" type="text" v-model="userid" placeholder="Gib userid ein" @input="checkInput"
          @keyup.enter="login" />
      </div>
      <div style="position: relative;">
        <input class="login" :type="passwordVisible ? 'text' : 'password'" v-model="password"
          placeholder="Gib passwort ein" @input="checkInput" @keyup.enter="login" />
        <span class="password-toggle" @click="togglePasswordVisibility">
          <svg v-if="passwordVisible" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye"
            width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
            stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 4.5c-4.5 0 -8 3.5 -8 7.5s3.5 7.5 8 7.5 8 -3.5 8 -7.5 -3.5 -7.5 -8 -7.5z" />
            <path d="M12 9.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0 -5z" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye-off" width="24"
            height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
            stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 3l18 18" />
            <path d="M12 5c4.5 0 8 3.5 8 7.5s-3.5 7.5 -8 7.5a8 8 0 0 1 -8 -7.5c0 -1.5 .5 -3 1.5 -4.5" />
            <path d="M12 9.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0 -5z" />
          </svg>
        </span>
      </div>
      <!-- Disable the button if the name or password is empty -->
      <button class="login-btn" @click="login" :class="{ 'disabled-btn': !isFormValid, 'enabled-btn': isFormValid }"
        :disabled="!isFormValid" style="box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); ">
        Login
      </button>
      <router-link to="/register">
        <button class="login-btn" style="box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          Registrieren
        </button>
      </router-link>

      <p v-if="message" style="color: red;">{{ message }}</p> <!-- Zeigt Fehler oder Erfolgsmeldungen an -->
    </div>
  </div>
</template>

<script>
import { loginUser } from '@/api/apiService.js'; // Importiere die API-Funktion für das Einloggen

export default {
  name: 'HomeComponent',
  data() {
    return {
      userid: '',
      password: '',
      passwordVisible: false, // Control for showing/hiding password
      message: '', // Erfolgsmeldung oder Fehlermeldung
      isFormValid: false,

    };
  },
  methods: {
    async login() {
      try {
        // API-Aufruf zum Einloggen
        const response = await loginUser(this.userid, this.password);
        console.log('Login erfolgreich:', response.data);

        // Token oder Erfolgsmeldung verarbeiten
        this.message = 'Login erfolgreich!';

        // Optional: Token im lokalen Speicher speichern
        localStorage.setItem('userid', this.userid);
        localStorage.setItem('token', response.data.token);

        // Optional: Nutzer weiterleiten (z.B. zu einem Dashboard)
        this.$router.push('/chatdashboard');
      } catch (error) {
        console.error('Login fehlgeschlagen:', error.response);
        this.message = 'Login fehlgeschlagen. Überprüfe deine Anmeldedaten.';
      }
    },
    togglePasswordVisibility() {
      this.passwordVisible = !this.passwordVisible; // Toggle password visibility
    },
    checkInput() {
      this.isFormValid = this.userid.length >= 8 && this.password.length >= 8;
    }
  }
};
</script>
