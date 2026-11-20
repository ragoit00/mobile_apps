<template>
  <header>
    <div>
      <button @click="logout" class="logout-button">Ausloggen</button>
    </div>
  </header>
</template>

<script>
  import { logoutUser } from '@/api/apiService';

  export default {
    async mounted() {
      this.token = localStorage.getItem('token');
      if (!this.token) {
        console.error("No token found.");
        this.$router.push('/');
        return;
      }
      console.log("Token on mount:", this.token);
    },
    async logout() {
      if (!this.token) {
        console.error("No token found in local storage.");
        return; // If there's no token, do not proceed
      }
      try {  
        // Attempt to logout with the token
        const response = await logoutUser(this.token);
  
        // Handle response
        console.log(response);
  
        this.token = null;
  
        // Clear the token from local storage on successful logout
        localStorage.removeItem('token');
  
        this.$router.push("/");
      } catch (error) {
        console.error("Error logging out:", error);
      }
    },
  }
</script>
