<template>
  <div class="background1">
    <div class="title space">
      <div></div>
    </div>
    <div v-if="loading">Loading profiles...</div>
    <div v-else-if="error">
      Error: {{ error }}
      <button v-if="error" @click="fetchProfiles">Retry</button>
    </div>
    <div v-else>
      <!-- Search Bar -->
      <input
        v-model="searchQuery"
        type="text"
        class="search-input"
        placeholder="Search contacts..."
      />
      <div class="contact-list">
        <div
          v-for="(group, letter) in groupedProfiles"
          :key="letter"
          class="group"
        >
          <h2 class="group-header">{{ letter }}</h2>
          <ul class="profile-list">
            <li
              v-for="profile in group"
              :key="profile.hash"
              class="profile-card"
              @click="selectProfile(profile)"
            >
              <div class="profile-info">
                <p class="profile-name">{{ profile.nickname }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getProfiles } from "@/api/apiService.js"; // Adjust the path as necessary

export default {
  name: "UserProfiles",
  data() {
    return {
      profiles: [],
      loading: false,
      error: null,
      token: "",
      searchQuery: "",
    };
  },
  computed: {
    // Computed property for filtered profiles based on the search query
    filteredProfiles() {
      const lowercasedQuery = this.searchQuery.toLowerCase();
      return this.profiles.filter((profile) =>
        profile.nickname.toLowerCase().includes(lowercasedQuery)
      );
    },
    // Computed property to group profiles by the first letter of the nickname
    groupedProfiles() {
      const groups = this.filteredProfiles.reduce((groups, profile) => {
        const firstLetter = profile.nickname[0].toUpperCase();
        if (!groups[firstLetter]) {
          groups[firstLetter] = [];
        }
        groups[firstLetter].push(profile);
        return groups;
      }, {});
      // Sortieren der Gruppen nach Schlüssel (Buchstaben)
      return Object.keys(groups)
        .sort()
        .reduce((sortedGroups, letter) => {
          sortedGroups[letter] = groups[letter].sort((a, b) =>
            a.nickname.localeCompare(b.nickname) // Sortieren der Profile innerhalb der Gruppe
          );
          return sortedGroups;
        }, {});
    },
  },
  async mounted() {
    this.token = localStorage.getItem("token");
    if (!this.token) {
      console.error("No token found.");
      this.$router.push("/");
    } else {
      this.fetchProfiles();
    }
  },
  methods: {
    /* goBack() {
      this.$router.push("/dashboard");
    }, */
    async fetchProfiles() {
      if (!this.token) {
        console.error("Token is missing. Cannot fetch profiles.");
        return;
      }
      console.log("Token retrieved:", this.token);
      this.loading = true;
      this.error = null;
      try {
        const response = await getProfiles(this.token);
        this.profiles = response.data.profiles;
        console.log("profiles retrieved:", this.profiles);
      } catch (err) {
        this.error = err.response ? err.response.data.message : err.message;
      } finally {
        this.loading = false;
      }
    },
    selectProfile(profile) {
      // Emit the selected profile to the parent component
      this.$emit("profile-selected", profile);
    },
  },
};
</script>

<style scoped>

.background1 {
  height: 700px;
  border-radius: 16px;
  padding: 8px;
  background-color: rgb(36, 52, 71);
}
body.light-mode .background1 {
  background-color: rgb(228, 229, 241);
}
/* Search Bar */
.search-input {
  position: relative;
  flex: auto;
  width: 332px;
  padding: 12px 16px; /* Match padding with the profile cards */
  margin-bottom: 20px;
  border-radius: 24px; /* Match profile card's border radius */
  border: 1px solid #ccc;
  font-size: 16px;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); /* Match profile card's shadow */
}

/* Loading & Error */
.loading,
.error {
  text-align: center;
  font-size: 18px;
}

/* Contact List */
.contact-list {
  max-height: 634px;
  overflow-y: auto;
}

.group {
  margin-bottom: 20px;
}

.group-header {
  font-size: 18px;
  font-weight: bold;
  color: white;
  margin-top: 10px;
}
body.light-mode .group-header{
  color:rgb(36, 52, 71);
}
/* Profile Card */
.profile-list {
  list-style: none;
  padding: 0;
}

.profile-card {
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: rgb(36, 52, 71);
  border-radius: 10px;
  margin-bottom: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.3s ease;
}
body.light-mode .profile-card {
  background-color: rgb(228, 229, 241);
}
.profile-avatar {
  color: white;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  margin-right: 15px;
}

.profile-info .profile-name {
  font-size: 18px;
  font-weight: 600;
  margin: 0;
}
</style>
