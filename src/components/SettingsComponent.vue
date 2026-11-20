<template>
  <h2 class="title">{{ translations.settingsTitle }}</h2>
  <div :class="['settings-container', darkMode ? 'dark' : 'light']">
    <!-- Dark Mode Toggle -->
    <div class="settings-option">
      <label for="dark-mode-toggle">{{ translations.darkModeLabel }}</label>
      <ToggleSwitch v-model="darkMode" @update:modelValue="toggleDarkMode" />
    </div>
  </div>
  <!-- Language Selector -->
  <div :class="['settings-container', darkMode ? 'dark' : 'light']">
    <div class="settings-option">
      <label for="language-select">{{ translations.languageLabel }} </label>
      <select
        id="language-select"
        v-model="selectedLanguage"
        @change="changeLanguage"
      >
        <option v-for="(lang, code) in languages" :key="code" :value="code">
          {{ lang }}
        </option>
      </select>
    </div>
  </div>

  <!-- Deregister -->
  <div class="settings-option">
    <button @click="deregisterUser" class="deregister-button">{{ translations.deregister }}</button>
  </div>

  <!-- Logout -->
  <div class="settings-option">
    <button @click="logout" class="logout-button">{{ translations.logout }}</button>
  </div>
</template>

<script>
import ToggleSwitch from "./ToggleSwitch.vue";
import { logoutUser, deregisterUser } from "@/api/apiService"; // Import logout API

export default {
  components: {
    ToggleSwitch,
  },
  data() {
    return {
      darkMode: true, // Dark mode state
      selectedLanguage: "en", // Language selection
      languages: {
        // Language options
        en: "English",
        es: "Español",
        fr: "Français",
        de: "Deutsch",
      },
      translations: {  // Default translations for English
        settingsTitle: 'Settings',
        darkModeLabel: 'Dark Mode',
        languageLabel: 'Language',
        deregister: 'Delete Account',
        logout: 'Logout',
      },
      token: null, // Store token from localStorage
    };
  },
  watch: {
    // Watch for dark mode changes and update body class
    darkMode(newValue) {
      document.body.className = newValue ? "dark-mode" : "light-mode";
    },
    // Watch for language selection change
    selectedLanguage(newLang) {
      this.changeLanguage(newLang);
    },
  },
  mounted() {
    this.token = localStorage.getItem("token");
    if (!this.token) {
      console.error("No token found.");
      this.$router.push("/"); // Redirect if no token is found
      return;
    }
    console.log("Token on mount:", this.token);
  },
  methods: {
    toggleDarkMode() {
      document.body.className = this.darkMode ? "dark-mode" : "light-mode";
    },
    changeLanguage() {
        this.updateTranslations(this.selectedLanguage);
    },
    updateTranslations(lang) {
      const languageData = {
        en: {
          settingsTitle: 'Settings',
          darkModeLabel: 'Dark Mode',
          languageLabel: 'Language',
          deregister: 'Delete Account',
          logout: 'Logout',
        },
        es: {
          settingsTitle: 'Configuración',
          darkModeLabel: 'Modo oscuro',
          languageLabel: 'Idioma',
          deregister: 'Eliminar cuenta',
          logout: 'Cerrar sesión',
        },
        fr: {
          settingsTitle: 'Paramètres',
          darkModeLabel: 'Mode sombre',
          languageLabel: 'Langue',
          deregister: 'Supprimer le compte',
          logout: 'Se déconnecter',
        },
        de: {
          settingsTitle: 'Einstellungen',
          darkModeLabel: 'Dunkelmodus',
          languageLabel: 'Sprache',
          deregister: 'Konto Löschen',
          logout: 'Abmelden',
        },
      };
      
      // Update translations based on the selected language
      this.translations = languageData[lang] || languageData.en;  // Default to English if language is not found
    },
    async logout() {
      try {
        if (!this.token) {
          console.error("No token found in local storage.");
          return; // If there's no token, do not proceed
        }
        // Attempt to logout with the token
        const response = await logoutUser(this.token);

        // Check for a successful response
        if (response.status === 200 || response.status === 204) {
          console.log("Logout successful:", response.data);
          // Clear the token from local storage on successful logout
          localStorage.removeItem("token");

          this.token = null;

          // Redirect to home page after successful logout
          this.$router.push("/");
        } else {
          console.error("Unexpected response during logout:", response);
          alert("Logout failed. Please try again.");
        }
      } catch (error) {
        console.error("Error logging out:", error);
        alert("An error occurred during logout. Please try again.");  
        localStorage.removeItem("token"); // Ensure token is cleared on error
        this.$router.push('/');
      }
    },
    async deregisterUser() {
      try {
        // Ensure token exists before proceeding
        if (!this.token) {
          console.error("No token found in local storage.");
          alert("You need to log in to delete your account.");
          this.$router.push("/");
          return;
        }
        const response = await deregisterUser(this.token);

        if (response.status === 200) {
          alert("Account deleted successfully.");
          localStorage.removeItem("token");
          // Clear the token from the component state
          this.token = null;
          // Optionale Weiterleitung oder weitere Aktionen
          this.$router.push("/");
        } else {
          console.error("Unexpected response during deregistration:", response);
          alert("Account deletion failed. Please try again.");
        }
      } catch (error) {
        console.error("Error during account deletion:", error);
        alert("An error occurred while deleting your account. Please try again.");
      }
    },
  },
};
</script>


