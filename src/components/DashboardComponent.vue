<template>
  <div class="background">
    <div v-if="showAchievementPopup" class="achievement-popup">
      <p>Achievement Unlocked!</p>
    </div>
    <div class="title space" v-show="cam">
      <span @click="activateCam(false)">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle xmlns="http://www.w3.org/2000/svg" cx="16" cy="16" r="16" fill="#243447"
            style="fill: color(display-p3 0.1412 0.2039 0.2784); fill-opacity: 1;"></circle>
          <rect x="6.38336" y="22.2225" width="22.4" height="4.8" transform="rotate(-45 6.38336 22.2225)" fill="#C51F5D"
            style="fill: color(display-p3 0.7725 0.1216 0.3647); fill-opacity: 1;"></rect>
          <rect x="9.77747" y="6.3833" width="22.4" height="4.8" transform="rotate(45 9.77747 6.3833)" fill="#C51F5D"
            style="fill: color(display-p3 0.7725 0.1216 0.3647); fill-opacity: 1;"></rect>
        </svg>
      </span>
    </div>
    <div class="title space" v-show="!cam">
      <span @click="goBack">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="16" fill="#243447" style="
              fill: #243447;
              fill: color(display-p3 0.1412 0.2039 0.2784);
              fill-opacity: 1;
            " />
          <path d="M20 8L12 16L20 24" stroke="#C51F5D" style="
              stroke: #c51f5d;
              stroke: color(display-p3 0.7725 0.1216 0.3647);
              stroke-opacity: 1;
            " stroke-width="2" />
        </svg>
      </span>
      <h2>{{ chatname }}</h2>
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

    <div v-if="isPopupVisible" id="overlay1">
      <div class="popup1">
        <div class="popup-content">
          <span @click="toggleInvitePopup">Invite to Chat</span>
          <span @click="leaveChat">Leave Chat</span>
        </div>
      </div>
    </div>

    <!-- Invite Popup -->
    <div v-if="isInvitePopupVisible" id="overlay1">
      <div class="popup-contacts">
        <div class="popup-content">
          <div class="title space">
            <h2>Invite User to Chat</h2>
            <div @click="close_popup" style="padding-right: 10px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle xmlns="http://www.w3.org/2000/svg" cx="16" cy="16" r="16" fill="#243447"
                  style="fill:#243447;fill:color(display-p3 0.1412 0.2039 0.2784);fill-opacity:1;" />
                <rect x="6.38336" y="22.2225" width="22.4" height="4.8" transform="rotate(-45 6.38336 22.2225)"
                  fill="#C51F5D" style="fill:#C51F5D;fill:color(display-p3 0.7725 0.1216 0.3647);fill-opacity:1;" />
                <rect x="9.77747" y="6.3833" width="22.4" height="4.8" transform="rotate(45 9.77747 6.3833)"
                  fill="#C51F5D" style="fill:#C51F5D;fill:color(display-p3 0.7725 0.1216 0.3647);fill-opacity:1;" />
              </svg>
            </div>
          </div>
          <!-- Integrate ProfileComponent -->
          <UserProfiles @profile-selected="inviteUser" />
        </div>
      </div>
    </div>

    <!-- Leave Popup -->
    <div v-if="showLeaveConfirmation" id="overlay1">
      <div class="confirmation-popup">
        <div class="popup-content">
          <h2>Leave chat?</h2>
          <p>Are you sure you want to leave the chat?</p>
          <div class="button-group">
            <button @click="cancelLeaveChat" class="cancel-button">Cancel</button>
            <button @click="confirmLeaveChat" class="confirm-button">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="cam" class="video-container"
      style="display: flex; flex-direction: column; align-items: center; margin-top: 20px;">
      <video autoplay width="90%" ref="webcamStream" class="video" />
      <canvas ref="canvasElement" style="display: none;"></canvas>
      <button class="circle" @click="takePhoto"
        style="position: absolute; top: 30%; left: 37%; width: 120px; height: 120px; border-radius: 50%; background-color: #141D26; border: 2px solid rgb(49, 57, 67); margin-top: 90%;">
        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="26" viewBox="0 0 24 16" fill="none">
          <rect y="2" width="24" height="14" rx="2" fill="#C51F5D"
            style="fill:#C51F5D;fill:color(display-p3 0.7725 0.1216 0.3647);fill-opacity:1;" />
          <circle cx="12" cy="9" r="4" fill="#D9D9D9"
            style="fill:#D9D9D9;fill:color(display-p3 0.8510 0.8510 0.8510);fill-opacity:1;" />
          <circle cx="17" cy="5" r="1" fill="#D9D9D9"
            style="fill:#D9D9D9;fill:color(display-p3 0.8510 0.8510 0.8510);fill-opacity:1;" />
          <rect x="8" width="8" height="4" rx="1" fill="#C51F5D"
            style="fill:#C51F5D;fill:color(display-p3 0.7725 0.1216 0.3647);fill-opacity:1;" />
        </svg>
      </button>
      <!-- <button class="photo-icon-imp" @click="takePhoto" style="margin-top: 200px;">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16" fill="none">
          <rect y="2" width="24" height="14" rx="2" fill="#C51F5D"
                style="fill:#C51F5D;fill:color(display-p3 0.7725 0.1216 0.3647);fill-opacity:1;"/>
          <circle cx="12" cy="9" r="4" fill="#D9D9D9"
                  style="fill:#D9D9D9;fill:color(display-p3 0.8510 0.8510 0.8510);fill-opacity:1;"/>
          <circle cx="17" cy="5" r="1" fill="#D9D9D9"
                  style="fill:#D9D9D9;fill:color(display-p3 0.8510 0.8510 0.8510);fill-opacity:1;"/>
          <rect x="8" width="8" height="4" rx="1" fill="#C51F5D"
                style="fill:#C51F5D;fill:color(display-p3 0.7725 0.1216 0.3647);fill-opacity:1;"/>
        </svg>
      </button> -->
    </div>
    <div class="chatbox">
      <div :hidden="cam" v-for="item in reversedChats" :key="item.id" :class="[
          'messages',
          item.userid === userid ? 'my-message' : 'other-message',
        ]">
        <p>{{ item.usernick }}</p>

        <img v-if="item.photoUrl" :src="item.photoUrl" alt="Attached" class="message-photo"
          style="max-width: 100%; height: auto; border-radius: 5px; margin-top: 5px;" />
        <p>{{ item.text }}</p>
        <p>{{ formatTime(item.time) }}</p>
        <!-- Render photo if available -->
      </div>
    </div>

    <div v-if="capturedImage" class="preview">
      <img :src="capturedImage" class="photo-preview" alt="Captured Image" />
      <div class="delete-preview" @click="capturedImage = null; sendingImage = null">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle xmlns="http://www.w3.org/2000/svg" cx="16" cy="16" r="16" fill="#243447"
            style="fill:#243447;fill:color(display-p3 0.1412 0.2039 0.2784);fill-opacity:1;" />
          <rect x="6.38336" y="22.2225" width="22.4" height="4.8" transform="rotate(-45 6.38336 22.2225)" fill="#C51F5D"
            style="fill:#C51F5D;fill:color(display-p3 0.7725 0.1216 0.3647);fill-opacity:1;" />
          <rect x="9.77747" y="6.3833" width="22.4" height="4.8" transform="rotate(45 9.77747 6.3833)" fill="#C51F5D"
            style="fill:#C51F5D;fill:color(display-p3 0.7725 0.1216 0.3647);fill-opacity:1;" />
        </svg>
      </div>
    </div>

    <div v-show="!cam">
      <div class="input-group">
        <button class="photo-icon" @click="capturedImage = null; sendingImage = null; activateCam(true)">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16" fill="none">
            <rect y="2" width="24" height="14" rx="2" fill="#C51F5D"
              style="fill:#C51F5D;fill:color(display-p3 0.7725 0.1216 0.3647);fill-opacity:1;" />
            <circle cx="12" cy="9" r="4" fill="#D9D9D9"
              style="fill:#D9D9D9;fill:color(display-p3 0.8510 0.8510 0.8510);fill-opacity:1;" />
            <circle cx="17" cy="5" r="1" fill="#D9D9D9"
              style="fill:#D9D9D9;fill:color(display-p3 0.8510 0.8510 0.8510);fill-opacity:1;" />
            <rect x="8" width="8" height="4" rx="1" fill="#C51F5D"
              style="fill:#C51F5D;fill:color(display-p3 0.7725 0.1216 0.3647);fill-opacity:1;" />
          </svg>
        </button>

        <input class="form-control" type="text" placeholder="Neue Nachricht" v-model="newMessage"
          @keyup.enter="sendMessage" />
        <button @click="sendMessage" class="send-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M5.69231 10.3478L2 2L18 10.3478L2 18L5.69231 10.3478Z" fill="#C51F5D"
              style="fill:#C51F5D;fill:color(display-p3 0.7725 0.1216 0.3647);fill-opacity:1;" />
            <path d="M5.69231 10.3478L2 2L18 10.3478M5.69231 10.3478H18M5.69231 10.3478L2 18L18 10.3478" stroke="white"
              style="stroke:white;stroke-opacity:1;" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
// import { mapActions } from 'pinia';
// Importiere die API-Funktion für das Einloggen
import {getMessages, getPhoto, inviteToChat, leaveChat, postMessage,} from "@/api/apiService.js";
import {useAchievementsStore} from "@/stores/achievements";
import UserProfiles from "./ProfileComponent.vue";

export default {
  name: "DashboardComponent",
  components: {
    UserProfiles, // Register InviteComponent
  },
  props: {
    chatid: {
      type: [String, Number],
      required: true,
    },
    token: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      userhash: localStorage.getItem('token'),
      userid: localStorage.getItem('userid'),
      isPopupVisible: false,
      isInvitePopupVisible: false, // To toggle invite popup
      showLeaveConfirmation: false,
      chats: [],
      /* localToken: "", */
      fromid: 0,
      newMessage: "", // Erfolgsmeldung oder Fehlermeldung
      photo: null,
      cam: false,
      capturedImage: null,
      sendingImage: null,
      chatname: localStorage.getItem('chatname'),

      stream: null,
      nickname: '', // You can replace this with a dynamic value if needed
      timerid: null,
      sendMessgAchiev: 2,
      showAchievementPopup: false,
      participants: [], // Store participants here
      allUserIds: new Set(), // Set to store unique user IDs
      localToken: this.token,
      localChatid: this.chatid,
    };
  },
  computed: {
    // Compute reversed messages list without altering the original array
    reversedChats() {
      return [...this.chats].reverse();
    },
  },
  async mounted() {
    this.localToken = localStorage.getItem("token");
    console.log("localToken: ", this.localToken);
    console.log("Userhash: ", this.userhash);
    
    this.cam = false;
    //this.localChatid = this.$route.params.localChatid;
    if (!this.localToken) {
      console.error("No token found.");
      this.$router.push("/");
      return;
    }

    console.log("Chatroom ID:", this.localChatid);
    console.log("Token on mount:", this.localToken);
    console.log("Message:", this.messages);

    // Nachrichten des aktuellen Chats abrufen
    this.showMessages("mounted");
    this.timerid = setInterval(() => {
      this.showMessages("interval");
    }, 5000);
  },
  beforeUnmount() {
    this.activateCam(false);
    this.capturedImage = null;
    this.sendingImage = null;
    clearInterval(this.timerid);
  },
  methods: {
    togglePopup() {
      this.isPopupVisible = !this.isPopupVisible;
    },
    goBack() {
      this.$router.push("/chatdashboard");
    },
    formatTime(timestamp) {
      if (!timestamp) return "";
      const [datePart, timePart] = timestamp.split("_"); // Split into date and time
      const [year, month, day] = datePart.split("-"); // Extract year, month, day
      const [hours, minutes] = timePart.split("-"); // Extract hours and minutes
      return `${hours}:${minutes} ${day}.${month}.${year}`;
    },
    toggleInvitePopup() {
      this.isPopupVisible = false;
      this.isInvitePopupVisible = true;
    },
    close_popup() {
      this.isInvitePopupVisible = false;
    },
    async inviteUser(profile) {
      // Handle user invitation logic here
      console.log("Inviting user:", profile.nickname);
      try {
        const response = await inviteToChat(
            this.localToken,
            this.chatid,
            profile.hash
        );
        console.log("User invited:", response);
        this.isInvitePopupVisible = false; // Close the popup after sending the invite
      } catch (error) {
        console.error("Error inviting user:", error);
      }
    },
    async showMessages(origin) {
      if (!this.localToken) return;

      this.isLoading = true; // Show loading state while fetching messages
      this.errorMessage = ""; // Reset error message

      console.log(
          `Fetching messages (origin: ${origin}) with fromid: ${this.fromid} for chatid: ${this.chatid}`
      );
      try {
        const response = await getMessages(
            this.localToken,
            this.chatid,
            this.fromid
        );
        console.log("API response data:", response.data);
        // Safely check if messages exist in the response data
        const messages =
            response.data && response.data.messages ? response.data.messages : [];
        // this.chats = [...messages];
        console.log("Fetched messages:", messages); // Log the fetched messages
        console.log("Token: ", this.localToken);
        console.log("Chats: ", this.chats);
        console.log("Fromid: ", this.fromid);

        for (const msg of messages) {
          if (!this.chats.some((chat) => chat.id === msg.id)) {
            // Add photoUrl if the message contains a photoid
            if (msg.photoid) {
              try {
                const photoResponse = await getPhoto(
                    this.localToken,
                    msg.photoid
                );
                const photoBlob = photoResponse.data;
                msg.photoUrl = URL.createObjectURL(photoBlob); // Attach photo URL to the message
              } catch (error) {
                console.error(
                    `Error fetching photo for message ${msg.id}:`,
                    error
                );
              }
            }

            this.chats.push(msg); // Add the message to chats
          }
        }

        // Update `fromid` to the highest message ID
        const latestMessageId = Math.max(
            ...messages.map((msg) => msg.id),
            this.fromid
        );
        if (latestMessageId > this.fromid) {
          this.fromid = latestMessageId;
          console.log("Updated fromid:", this.fromid);
        }
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    },
    leaveChat() {
      this.isPopupVisible = false; // Close popup
      this.showLeaveConfirmation = true; // Show confirmation box
    },
    cancelLeaveChat() {
      this.showLeaveConfirmation = false; // Hide the confirmation popup
    },
    async confirmLeaveChat() {
      this.showLeaveConfirmation = false; // Hide the confirmation popup
      try {
        const response = await leaveChat(this.localToken, this.chatid);
        this.responseMessage = `Left the chat successfully: ${response.data}`;
        this.$router.push("/chatdashboard"); // Navigate back to chat dashboard
      } catch (error) {
        console.error("Error leaving chat:", error);
        this.responseMessage = "Failed to leave the chat. Please try again.";
      }
    },


    async sendMessage() {
      const itemStore = useAchievementsStore();
      if (!this.newMessage.trim() && this.capturedImage === null) return;

      this.isLoading = true; // Set loading state while sending message
      this.errorMessage = ""; // Reset error message

      if (
          this.sendMessgAchiev == 0 &&
          itemStore.achievements[1].achieved != true
      ) {
        itemStore.toggleAchievement(1);
        this.showAchievementPopup = true;
        setTimeout(() => {
          this.showAchievementPopup = false;
        }, 2000);
      }

      try {

        console.log("CAPTURED IMAGE", this.sendingImage)

        await postMessage(this.localToken, this.newMessage, this.chatid, this.sendingImage);

        if (this.sendMessgAchiev > 0) {
          this.sendMessgAchiev--;
        }


        this.newMessage = ""; // Clear input field

        // Optional: Refresh chat by fetching messages again to ensure it's up-to-date
        setTimeout(() => this.showMessages("sendMessage"), 500); // Small delay to ensure latest messages
        this.activateCam(false);
        this.sendingImage = null;
        this.capturedImage = null;
      } catch (error) {
        console.error("Error sending message:", error);
        this.errorMessage = "Error sending message. Please try again later.";
      } finally {
        this.isLoading = false; // Hide loading indicator
      }
    },
    scrollToBottom() {
      const chatBox = this.$el.querySelector(".chatbox");
      chatBox.scrollTop = chatBox.scrollHeight;
    },

    activateCam(camActive) {
      console.log(camActive)
      this.cam = camActive;

      if (this.cam) {
        const constraints = {
          video: {
            width: 600,
            height: 800,

          }
        }

        navigator.mediaDevices
            .getUserMedia(constraints)
            .then((stream) => {
              this.stream = stream;
              this.$refs.webcamStream.srcObject = stream;
            })
            .catch((error) => console.error("Permission denied", error));
      } else {
        if (this.stream) {
          // Stop each track (video and audio) in the stream

          this.stream.getTracks().forEach((track) => track.stop());
          const webcamStream = this.$refs.webcamStream;
          webcamStream.srcObject = null;
          // Disconnect the video element from the stream
          if (
              navigator.mediaDevices &&
              navigator.mediaDevices.enumerateDevices
          ) {
            navigator.mediaDevices.enumerateDevices();
          }

          console.log("Video stream stopped and disconnected."); // Debugging step

          // Clear the stored stream
          this.stream = null;
        } else {
          console.log("No stream to stop."); // Debugging step
        }
      }

    },

    takePhoto() {
      const webcamStream = this.$refs.webcamStream
      const canvasElement = this.$refs.canvasElement;


      if (webcamStream && canvasElement) {
        // Set canvas size to match video dimensions
        canvasElement.width = webcamStream.videoWidth;
        canvasElement.height = webcamStream.videoHeight;

        // Draw the current video frame onto the canvas
        const context = canvasElement.getContext("2d");
        context.drawImage(webcamStream, 0, 0, canvasElement.width, canvasElement.height);

        // Convert canvas content to a data URL (base64 image string)
        this.capturedImage = canvasElement.toDataURL("image/png");
        this.sendingImage = canvasElement.toDataURL("image/png").split(",")[1];
        console.log("photo taken", this.capturedImage);

        this.activateCam(false);
      }
    },

  },

  updated() {
    console.log("Achievements: ", this.achievements);
    this.$nextTick(() => {
      this.scrollToBottom(); // Ensure the view scrolls to the latest message after every update
    });
  },
};
</script>

<style>
h2 {
  padding: 10px;
}
.achievement-popup {
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #c51f5d;
  color: white;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
  z-index: 1000;
  animation: fadeInOut 2s ease-out;
}

@keyframes fadeInOut {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.popup1 {
  position: absolute;
  height: auto;
  top: 130px;
  padding: 0;
  width: 233px;
  background-color: #313943;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

body.light-mode .popup1 {
  background-color: rgb(228, 229, 241);
}

.popup-contacts {
  position: absolute;
  padding: 0;
  background-color: rgb(36, 52, 71);
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

body.light-mode .popup-contacts {
  background-color: rgb(228, 229, 241);
}

.popup-content span {
  display: flex;
  padding: 8px;
  font-size: 16px;
  border-bottom: 1px solid #ccc;
  border-radius: 8px;
}


.confirmation-popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #313943;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  width: 300px;
  text-align: center;
}

.confirmation-popup p {
  margin-bottom: 20px;
  color: white;
  font-size: 18px;
}

.button-group {
  display: flex;
  justify-content: space-around;
}

.confirm-button {
  background-color: #c51f5d;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.cancel-button {
  background-color: #555;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

</style>
