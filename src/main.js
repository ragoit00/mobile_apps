import { createApp } from 'vue'; // Ändere hier
import { createPinia } from "pinia";
import App from './App.vue';
import router from './routing.js'; // Achte auf den korrekten Pfad zu deiner routing.js
import './styles/style.css'

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router); // Verwenden des Routers
app.use(createPinia()); // Initialize Pinia
app.mount('#app');
