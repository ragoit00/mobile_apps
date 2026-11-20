<!-- src/App.vue -->
<template>
  <div id="app1">
    <router-view></router-view> 
    <!-- <FooterComponent v-if="$route.name !== 'Dashboard'" ></FooterComponent> -->
    <FooterComponent v-if="!['Dashboard', 'Login', 'Registry' , 'Homepage'].includes($route.name)"></FooterComponent>
  </div>
</template>

<script>
import FooterComponent from './components/FooterComponent.vue';
export default {
  name: 'App',
  components: {
    FooterComponent,  // Registriere den HeaderComponent
  },
};
</script>

