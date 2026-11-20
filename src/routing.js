// src/routing.js
import { createRouter, createWebHistory } from "vue-router";
import RegistryComponent from "./components/RegistryComponent.vue";
import DashboardComponent from "./components/DashboardComponent.vue";
import LoginComponent from "@/components/LoginComponent.vue";
import ChatDashboardComponent from "./components/ChatDashboardComponent.vue";
import AchievementsComponent from "./components/AchievementsComponent.vue";
import SettingsComponent from "./components/SettingsComponent.vue";
import ProfileComponent from "./components/ProfileComponent.vue";
import HomepageComponent from "./components/HomepageComponent.vue";

const routes = [
  {
    path: "/profiles",
    name: "Profiles",
    component: ProfileComponent,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginComponent,
  },
  {
    path: "/register",
    name: "Registry",
    component: RegistryComponent,
  },
  {
    path: "/dashboard/:chatid",
    name: "Dashboard",
    component: DashboardComponent,
    props: true, // Pass route params as props
  },
  {
    path: "/chatdashboard",
    name: "ChatDashboard",
    component: ChatDashboardComponent,
  },
  {
    path: "/achievements",
    name: "Achievements",
    component: AchievementsComponent,
  },
  {
    path: "/settings",
    name: "Settings",
    component: SettingsComponent,
  },
  {
    path: "/",
    name: "Homepage",
    component: HomepageComponent,
  },
];

const router = createRouter({
  history: createWebHistory(), // Verwende WebHistory
  routes,
});

router.beforeEach((to, from, next) => {
  // If the route requires authentication, check for the token
  if (to.meta.requiresAuth && !localStorage.getItem("token")) {
    // If no token is found, redirect to login
    next("/");
  } else {
    next();
  }
});

export default router;
