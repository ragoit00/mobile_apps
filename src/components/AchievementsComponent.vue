<template>
  <section class="achievements">
    <h2 class="achievements-title">Achievements</h2>
    <div class="achievements-list">
      <!-- Loop through the achievements array -->
      <div class="achievement-card" v-for="(achievement, index) in achievements" :key="index" :class="{ 
          'achievement-achieved': achievement.achieved,
          'achievement-unachieved': !achievement.achieved
        }">
        <!-- Icon -->
        <div class="achievement-icon" v-html="achievement.icon"></div>
        <div class="achievement-text">
          <!-- Title -->
          <h1 class="achievement-title" :class="{ 
              'title-achieved': achievement.achieved, 
              'title-unachieved': !achievement.achieved 
            }">
            {{ achievement.title }}
          </h1>
          <!-- Description -->
          <p class="achievement-description">{{ achievement.description }}</p>
        </div>
        <!-- Toggle Achievement Button -->
        <!-- <button 
          @click="toggleAchievement(index)" 
          class="toggle-achievement"
        >
          {{ achievement.achieved ? "Revoke" : "Achieve" }}
        </button> -->
      </div>
    </div>
  </section>
</template>


<script>
import { useAchievementsStore } from "@/stores/achievements";
export default {
  name: "AchievementsComponent",
  data() {
    return {
      
    };
  },
  setup() {
    const store = useAchievementsStore();
    return {
      achievements: store.achievements,
      toggleAchievement: store.toggleAchievement,
    };
  },
};
</script>
