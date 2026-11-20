<template>
    <div 
        class="backgroundHomepage" 
        style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 75vh; margin: 0;">
        
        <div class="Logo" style="width: 100%; display: flex; justify-content: center;">
            <img src="../images/Relay-sheet.png" alt="Logo" class="fade-in" width="300px" height="300px" style="max-width: 100%; height: auto;">
        </div>
        
        <h1 class="fade-in-text" style="text-align: center; margin-top: 10px;">Gemacht, um Gamer zu verbinden</h1>
        <h3 class="fade-in-text-h3" style="text-align: center;">Finde mit Relay in einer breiten Spiele-Auswahl Freunde und Mitspieler weltweit.</h3>
        <h3 class="fade-in-text-h3" style="text-align: center;">Tausche dich innerhalb deiner Community über etwaige Theorien aus, dokumentiere dein Spielerlebnis oder suche nach Tipps.</h3>
        <h3 class="fade-in-text-h3" style="text-align: center;">Deine Möglichkeiten sind grenzenlos. Registriere dich jetzt!</h3>
        <button class="fade-in-text-button pulsate" @click="navigateToLogin('register')" style="margin-top: 30px;">Kostenlos Registrieren</button>
        <h3 class="fade-in-text-h3" style="text-align: center;">Du hast bereits einen Account?</h3>
        <button class="fade-in-text-button pulsate" @click="navigateToLogin('login')" style="margin-top: 30px;">Login</button>
    </div>
</template>


<script>
export default {
  name: "HomepageComponent",
  data() {
    return {};
  },
  methods: {
    navigateToLogin(choice) {
      this.$router.push("/" + choice); // Uses Vue Router to navigate
    },
  }
};
</script>

<style scoped>
.fade-in {
    opacity: 0; /* Start transparent */
    animation: fadeIn 2s ease-in-out forwards; /* Animation einfügen */
    animation-delay: 0.5s;
}

.fade-in-text {
    opacity: 0; /* Start transparent */
    animation: fadeIn 2s ease-in-out forwards; /* Animation einfügen */
    animation-delay: 1.5s;
}

.fade-in-text-h3 {
    opacity: 0; /* Start transparent */
    animation: fadeIn 3s ease-in-out forwards; /* Animation einfügen */
    animation-delay: 2.5s;
}

.fade-in-text-button {
    opacity: 0; /* Start transparent */
    animation: fadeIn 3s ease-in-out forwards, pulsate 1.5s infinite 3.5s; /* Animation einfügen */
    animation-fill-mode: forwards;
}

.fade-in-text-button {
    display: inline-block; /* Ensures the button remains visible */
    padding: 10px 20px;
    font-size: 16px;
    color: white;
    background-color: #C51F5D;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
    transition: all 0.3s ease; /* Smooth hover effects */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}


.pulsate {
    animation: pulsate 1.5s infinite; /* Run animation indefinitely */
}

@keyframes pulsate {
    0%, 100% {
        transform: scale(1); /* Normal size */
        opacity: 1; /* Fully visible */
    }
    50% {
        transform: scale(1.1); /* Slightly larger */
        opacity: 1; /* Fully visible */
    }
}

@keyframes fadeIn {
    from {
        opacity: 0; /* Startwert */
    }
    to {
        opacity: 1; /* Endwert */
    }
}
</style>


