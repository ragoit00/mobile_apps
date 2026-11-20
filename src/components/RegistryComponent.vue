<template>
  <div class="background" style="height: 100vh; margin: 0; display: flex; justify-content: center; align-items: center;">
    <div class="circle" style="position: absolute; top: 25%; left: 37%; width: 120px; height: 120px; border-radius: 50%; background-color: #141D26; border: 2px solid rgb(49, 57, 67)">
      <img src="../images/Relay-sheet-smaller.png" alt="Logo" width="122px" height="122px" >
    </div>
    <div class="login_box" style="text-align: center; width: 300px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
      <h1>Registrieren</h1>
      <div>
        <input class="login" type="text" 
          v-model="userid" placeholder="Enter User ID"  @input="checkInput"/>
      </div>
      <div>
        <input class="login" type="text" 
          v-model="fullname" placeholder="Enter Full Name"/>
      </div>
      <div>
        <input class="login" type="text" 
          v-model="nickname" placeholder="Enter Nickname"/>
      </div>
      <div>
        <input class="login" type="text" 
          v-model="password" placeholder="Enter Password"  @input="checkInput"/>
      </div>
      <button class="login-btn"  
        @click="register" 
        :class="{ 'disabled-btn': !isFormValid, 'enabled-btn': isFormValid }" 
        :disabled="!isFormValid"
        style="box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);"
        >
        Register
      </button>
      <router-link to="/">
        <button class="login-btn" style="box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          Zurück
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { registerUser } from '@/api/apiService.js'; // Importiere die API-Funktion

export default {
  name: 'RegistryComponent', // Mehrteiliges Komponentennamen
  data() {
    return {
      userid: '',
      password: '',
      fullname: '',
      nickname: '',
      message: '',    // Fehlermeldung oder Erfolgsmeldung
      isFormValid: false,
    };
  },
  methods: {
    async register() {
      try {
        const response = await registerUser(this.userid, this.password, this.nickname, this.fullname);
        console.log('Registration successful:', response.data);
        this.message = 'Registration successful! Redirecting...';  // Erfolgsmeldung
        // Add delay for user acknowledgment
        setTimeout(() => {
          this.$router.push('/');
        }, 2000); // Redirect after 2 seconds
      } catch (error) {
        console.error('Registrierung fehlgeschlagen:', error.response);
        this.message = 'Registrierung fehlgeschlagen. Versuche es erneut.';  // Fehlermeldung
      }
    },
    checkInput(){
      this.isFormValid = this.userid.length >= 8 && this.fullname !== '' && this.nickname !== '' && this.password.length >= 8;
    }
  }
};
</script>

