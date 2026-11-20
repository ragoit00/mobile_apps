<template>
  <div class="background">
    <div v-if="loading" class="loading">Loading chats...</div>

    <div v-if="chats.length === 0 && !loading" class="no-chats">
      <p>No chats available. You can create a new chat.</p>
    </div>

    <div v-else>
      <div class="title space">
        <span>
          <img src="../images/Relay-sheet-smaller.png" alt="Logo" style="max-width: auto; height: 64px" />
        </span>
        <h2 class="chats-title">Chats</h2>
        <span @click="togglePopup">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="16" fill="#243447" style="
                fill: #243447;
                fill: color(display-p3 0.1412 0.2039 0.2784);
                fill-opacity: 1;
              " />
            <circle cx="16" cy="8" r="2" fill="#C51F5D" style="
                fill: #c51f5d;
                fill: color(display-p3 0.7725 0.1216 0.3647);
                fill-opacity: 1;
              " />
            <circle cx="16" cy="16" r="2" fill="#C51F5D" style="
                fill: #c51f5d;
                fill: color(display-p3 0.7725 0.1216 0.3647);
                fill-opacity: 1;
              " />
            <circle cx="16" cy="24" r="2" fill="#C51F5D" style="
                fill: #c51f5d;
                fill: color(display-p3 0.7725 0.1216 0.3647);
                fill-opacity: 1;
              " />
          </svg>
        </span>
      </div>

      <div v-if="isPopupVisible" id="overlay">
        <div class="popup">
          <div class="popup-content">
            <span @click="toggleCreateChatForm">Create new Chat</span>
            <span @click="selectChats">Select Chats
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="11.5" stroke="white" style="stroke: white; stroke-opacity: 1" />
                <path d="M18 6L11 18L6 13.6364" stroke="white" style="stroke: white; stroke-opacity: 1" />
              </svg>
            </span>
          </div>
        </div>
      </div>

      <!-- Create Chat Popup -->
      <div v-if="showCreateForm" id="overlay">
        <div class="create-chat">
        <!-- <button @click="toggleCreateChatForm">Create New Chat</button> -->
        <div class="create-chat-form">
          <input v-model="newChatName" placeholder="Enter chat name" />
          <button class="buttons-create" @click="createChat">Create</button>
          <button class="buttons-create" @click="cancelChat">Cancel</button>
        </div>
      </div>
      </div>

      <div v-if="isSelectingChats">
        <div class="action_button">
          <button class="buttons" @click="cancelSelectedChats" v-if="selectedChats.length >= 0">
            Cancel
          </button>
          <button class="buttons" @click="deleteSelectedChats" v-if="selectedChats.length >= 0"
            style="background-color: rgb(197, 31, 93)">
            Delete
          </button>
        </div>
        <ul class="chat-list2">
          <li v-for="chat in chats" :key="chat.chatid" class="chat-item">
            <div class="chat-info2">
              <span class="chat-name">{{ chat.chatname }}</span>
              <div class="chat-actions">
                <!-- Select chat checkbox for deletion -->
                <input type="checkbox" v-model="selectedChats" :value="chat.chatid" v-if="isSelectingChats" />
                <button @click="deleteChat(chat.chatid)" v-if="!isSelectingChats">
                  Delete
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <ul v-if="!isSelectingChats" class="chat-list">
        <li v-for="chat in chats" :key="chat.chatid" class="chat-item">
          <div class="chat-info">
            <span class="chat-logo">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="28" viewBox="0 0 50 28" fill="none">
                <path
                  d="M37.0371 0H42.5926V1.85185H44.4445V3.7037H46.2963V9.25926H44.4445V11.1111H42.5926V12.963H37.0371V11.1111H35.1852V9.25926H33.3334V3.7037H35.1852V1.85185H37.0371V0Z"
                  fill="url(#paint0_linear_145_24)" style="" />
                <path d="M37.037 1.85187H40.7407V3.70372H38.8889H37.037V7.40742H35.1852V3.70372H37.037V1.85187Z"
                  fill="#587FAD" style="
                    fill: #587fad;
                    fill: color(display-p3 0.344 0.4969 0.6784);
                    fill-opacity: 1;
                  " />
                <path
                  d="M33.3333 14.8148H46.2963V16.6667H48.1482V18.5185H50V24.0741H48.1482V25.9259H31.4815V24.0741H29.6296V18.5185H31.4815V16.6667H33.3333V14.8148Z"
                  fill="url(#paint1_linear_145_24)" style="" />
                <path d="M33.3333 16.6667H38.8889V18.5185H33.3333V20.3704H31.4814V18.5185H33.3333V16.6667Z"
                  fill="url(#paint2_linear_145_24)" style="" />
                <path
                  d="M12.9629 0H7.40737V1.85185H5.55552V3.7037H3.70366V9.25926H5.55552V11.1111H7.40737V12.963H12.9629V11.1111H14.8148V9.25926H16.6666V3.7037H14.8148V1.85185H12.9629V0Z"
                  fill="url(#paint3_linear_145_24)" style="" />
                <path d="M7.40739 1.85187H11.1111V3.70372H9.25925H7.40739V7.40742H5.55554V3.70372H7.40739V1.85187Z"
                  fill="#587FAD" style="
                    fill: #587fad;
                    fill: color(display-p3 0.344 0.4969 0.6784);
                    fill-opacity: 1;
                  " />
                <path
                  d="M16.6667 14.8148H3.70369V16.6667H1.85184V18.5185H-1.00136e-05V24.0741H1.85184V25.9259H18.5185V24.0741H20.3704V18.5185H18.5185V16.6667H16.6667V14.8148Z"
                  fill="url(#paint4_linear_145_24)" style="" />
                <path d="M3.70366 16.6667H9.25921V18.5185H3.70366V20.3704H1.85181V18.5185H3.70366V16.6667Z"
                  fill="url(#paint5_linear_145_24)" style="" />
                <path
                  d="M22.2223 1.85187H27.7778V3.70372H29.6297V5.55557H31.4815V11.1111H29.6297V12.963H27.7778V14.8148H22.2223V12.963H20.3704V11.1111H18.5186V5.55557H20.3704V3.70372H22.2223V1.85187Z"
                  fill="#243447" style="
                    fill: #243447;
                    fill: color(display-p3 0.1412 0.2039 0.2784);
                    fill-opacity: 1;
                  " />
                <path d="M22.2222 3.70367H25.9259V5.55553H24.0741H22.2222V9.25923H20.3704V5.55553H22.2222V3.70367Z"
                  fill="#587FAD" style="
                    fill: #587fad;
                    fill: color(display-p3 0.344 0.4969 0.6784);
                    fill-opacity: 1;
                  " />
                <path
                  d="M18.5185 16.6667H31.4815V18.5185H33.3333V20.3704H35.1852V25.9259H33.3333V27.7778H16.6667V25.9259H14.8148V20.3704H16.6667V18.5185H18.5185V16.6667Z"
                  fill="#243447" style="
                    fill: #243447;
                    fill: color(display-p3 0.1412 0.2039 0.2784);
                    fill-opacity: 1;
                  " />
                <path d="M18.5185 18.5185H24.074V20.3703H18.5185V22.2222H16.6666V20.3703H18.5185V18.5185Z"
                  fill="#587FAD" style="
                    fill: #587fad;
                    fill: color(display-p3 0.344 0.4969 0.6784);
                    fill-opacity: 1;
                  " />
                <defs>
                  <linearGradient id="paint0_linear_145_24" x1="43.5186" y1="3.7037" x2="29.6297" y2="15.7407"
                    gradientUnits="userSpaceOnUse">
                    <stop offset="0.155" stop-color="#243447" style="
                        stop-color: #243447;
                        stop-color: color(display-p3 0.1412 0.2039 0.2784);
                        stop-opacity: 1;
                      " />
                    <stop offset="1" stop-color="#141D26" style="
                        stop-color: #141d26;
                        stop-color: color(display-p3 0.0784 0.1137 0.149);
                        stop-opacity: 1;
                      " />
                  </linearGradient>
                  <linearGradient id="paint1_linear_145_24" x1="48.1482" y1="20.3704" x2="31.4815" y2="22.2222"
                    gradientUnits="userSpaceOnUse">
                    <stop offset="0.415" stop-color="#243447" style="
                        stop-color: #243447;
                        stop-color: color(display-p3 0.1412 0.2039 0.2784);
                        stop-opacity: 1;
                      " />
                    <stop offset="1" stop-color="#141D26" style="
                        stop-color: #141d26;
                        stop-color: color(display-p3 0.0784 0.1137 0.149);
                        stop-opacity: 1;
                      " />
                  </linearGradient>
                  <linearGradient id="paint2_linear_145_24" x1="39.8148" y1="15.7408" x2="30.5555" y2="21.2963"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#587FAD" style="
                        stop-color: #587fad;
                        stop-color: color(display-p3 0.344 0.4969 0.6784);
                        stop-opacity: 1;
                      " />
                    <stop offset="1" stop-color="#243447" style="
                        stop-color: #243447;
                        stop-color: color(display-p3 0.1412 0.2039 0.2784);
                        stop-opacity: 1;
                      " />
                  </linearGradient>
                  <linearGradient id="paint3_linear_145_24" x1="6.48144" y1="3.7037" x2="20.3703" y2="15.7407"
                    gradientUnits="userSpaceOnUse">
                    <stop offset="0.155" stop-color="#243447" style="
                        stop-color: #243447;
                        stop-color: color(display-p3 0.1412 0.2039 0.2784);
                        stop-opacity: 1;
                      " />
                    <stop offset="1" stop-color="#141D26" style="
                        stop-color: #141d26;
                        stop-color: color(display-p3 0.0784 0.1137 0.149);
                        stop-opacity: 1;
                      " />
                  </linearGradient>
                  <linearGradient id="paint4_linear_145_24" x1="1.85184" y1="20.3704" x2="18.5185" y2="22.2222"
                    gradientUnits="userSpaceOnUse">
                    <stop offset="0.415" stop-color="#243447" style="
                        stop-color: #243447;
                        stop-color: color(display-p3 0.1412 0.2039 0.2784);
                        stop-opacity: 1;
                      " />
                    <stop offset="1" stop-color="#141D26" style="
                        stop-color: #141d26;
                        stop-color: color(display-p3 0.0784 0.1137 0.149);
                        stop-opacity: 1;
                      " />
                  </linearGradient>
                  <linearGradient id="paint5_linear_145_24" x1="10.1851" y1="15.7408" x2="0.92588" y2="21.2963"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#587FAD" style="
                        stop-color: #587fad;
                        stop-color: color(display-p3 0.344 0.4969 0.6784);
                        stop-opacity: 1;
                      " />
                    <stop offset="1" stop-color="#243447" style="
                        stop-color: #243447;
                        stop-color: color(display-p3 0.1412 0.2039 0.2784);
                        stop-opacity: 1;
                      " />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span @click="
                console.log(chat.chatid);
                openChat(chat.chatname, chat.chatid);
              " class="chat-name">{{ chat.chatname }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {
  getChats,
  joinChat,
  deleteChat,
  createChat,
} from "@/api/apiService.js";

export default {
  data() {
    return {
      isPopupVisible: false,
      chats: [],
      token: "",
      loading: true,
      showCreateForm: false,
      newChatName: "",
      isSelectingChats: false, // Flag to toggle selection mode
      selectedChats: [], // Array to hold selected chat IDs
    };
  },
  async mounted() {
    // Fetch the token from localStorage or Vuex
    this.token = localStorage.getItem("token");
    if (!this.token) {
      console.error("No token found.");
      this.$router.push("/");
      return;
    }
    console.log("Token on mount:", this.token);

    // Fetch the chats when the component mounts
    await this.fetchChats();
  },
  methods: {
    togglePopup() {
      this.isPopupVisible = !this.isPopupVisible;
    },
    async fetchChats() {
      if (!this.token) return;
      try {
        const response = await getChats(this.token); // Fetch the chats from the API
        console.log("Fetched chats:", response.data.chats); // Log chats
        console.log("Response data:", response.data);
        this.chats = response.data.chats || [];
      } catch (error) {
        console.error("Error fetching chats:", error);
      } finally {
        this.loading = false;
      }
    },
    async prof() {
      this.$router.push("/profiles");
    },
    async openChat(chatname, chatid) {
      localStorage.setItem("chatname", chatname);
      this.$router.push({ name: "Dashboard", params: { chatid } });
    },
    async joinChat(chatid) {
      console.log("Joining chat with chatid:", chatid); // Debug log
      console.log(
        "Entire chat object:",
        this.chats.find((c) => c.chatid === chatid)
      );

      if (chatid === null || chatid === undefined) {
        console.error("Invalid chatid:", chatid);
        alert("Invalid chat ID");
        return;
      }

      try {
        const response = await joinChat(this.token, chatid); // Call joinChat API
        if (response.data.success) {
          console.log("Successfully joined the chat with chatid:", chatid);
          // Navigate to the Dashboard with chatid as a route parameter
          this.$router.push({ name: "Dashboard", params: { chatid } });
        } else {
          console.error("Failed to join chat:", response.data.error);
          alert("Failed to join chat");
        }
      } catch (error) {
        if (chatid === 0) {
          this.$router.push({ name: "Dashboard", params: { chatid: 0 } });
        } else {
          console.error("Error joining chat:", error);
          alert("An error occurred while joining the chat.");
        }
      }
    },

    async deleteChat(chatid) {
      if (!this.token) {
        alert("Authentication token is missing.");
        return;
      }
      const chat = this.chats.find((c) => c.chatid === chatid);
      if (chat || chat.role !== "owner") {
        alert("You are not the owner of this chat.");
        return;
      }
      // Use the correct chatid
      try {
        console.log("Token being sent:", this.token);
        console.log("Attempting to delete chat with ID:", chatid);
        const response = await deleteChat(this.token, chatid);
        console.log("Delete response:", response.data);
        this.chats = this.chats.filter((chat) => chat.chatid !== chatid);
        // Remove chat from list
      } catch (error) {
        const errorMessage =
          error.response?.data?.message || "Something went wrong!";
        console.error("Error deleting chat:", errorMessage);
        alert(errorMessage);
      }
    },
    toggleCreateChatForm() {
      this.isPopupVisible = false; // Close popup
      this.showCreateForm = true;
    },
    async createChat() {
      if (!this.newChatName.trim()) {
        alert("Please enter a chat name.");
        return;
      }
      try {
        const response = await createChat(this.token, this.newChatName);
        if (response.data.status === "ok" && response.data.code === 200) {
          await this.fetchChats();
          const newChat = {
            chatid: response.data.chatid, // Chat ID returned from the API
            chatname: this.newChatName, // Chat name entered by the user
          };
          this.chats.push(newChat); // Add new chat to the list
          this.showCreateForm = false;
          this.newChatName = ""; // Reset the input
        } else {
          alert("Failed to create chat.");
          console.error("Error in API response:", response.data.message);
        }
      } catch (error) {
        console.error("Error creating chat:", error);
      }
    },
    cancelChat() {
      this.showCreateForm = false;
    },
    selectChats() {
      this.isPopupVisible = false; // Close popup
      this.isSelectingChats = true;
      this.selectedChats = []; // Clear selected chats when toggling selection mode
    },
    cancelSelectedChats() {
      this.isSelectingChats = false;
    },
    deleteSelectedChats() {
      if (this.selectedChats.length === 0) {
        alert("No chats selected for deletion.");
        return;
      }
      try {
        this.selectedChats.forEach(async (chatid) => {
          await this.deleteChat(chatid);
        });
        this.selectedChats = []; // Clear selection after deletion
      } catch (error) {
        console.error("Error deleting selected chats:", error);
      }
    },
  },
};
</script>

<style scoped>
/*.chat-dashboard {
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
}*/

.loading {
  text-align: center;
  font-size: 18px;
}

.no-chats {
  text-align: center;
}

.chat-list {
  padding: 0;
  max-height: 690px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.chat-list2 {
  padding: 0;
  max-height: 647px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.chat-item {
  background-color: rgb(20, 29, 38);
  border-radius: 10px;
  margin-bottom: 8px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.chat-info {
  padding: 10px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
}

.chat-info2 {
  padding: 10px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.chat-name {
  font-weight: bold;
}

.action_button {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.create-chat {
  position: absolute;
  top: 130px;
  width: 270px;
  padding: 8px;
  background-color: #313943;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

body.light-mode .create-chat {
  background-color: rgb(228, 229, 241);
}

.create-chat-form {
  margin-top: 10px;
}

.create-chat-form input {
  width: 250px;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 16px;
}

.create-chat-form button {
  margin-top: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

body.light-mode .create-chat-form button {
  background-color: rgb(36, 52, 71);
}

.popup {
  position: absolute;
  top: 130px;
  height: auto;
  padding: 0;
  width: 233px;
  background-color: #313943;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}
body.light-mode .popup {
  background-color: rgb(228, 229, 241);
}

.popup-content span {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  font-size: 16px;
  border-bottom: 1px solid #ccc;
  border-radius: 8px;
}


.buttons-create {
  background-color: rgb(36, 52, 71);
  border-radius: 24px;
  border: none;
  color: white;
  width: 100%;
  padding: 10px;
  margin: 4px 0;
  box-sizing: border-box;
  max-width: 300px;
}

.buttons {
  background-color: rgb(36, 52, 71);
  border-radius: 24px;
  border: none;
  color: white;
  width: 100%;
  padding: 10px;
  margin: 4px 0;
  box-sizing: border-box;
  max-width: 100px;
}
</style>
