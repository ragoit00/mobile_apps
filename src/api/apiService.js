// src/apiService.js

import axios from "axios";

// Set up the base URL for your API requests
const API_BASE_URL = "https://www2.hs-esslingen.de/~melcher/map/chat/api/";

// Function to register a new user
export const registerUser = (userid, password, nickname, fullname) => {
  return axios.get(`${API_BASE_URL}`, {
    params: {
      request: "register",
      userid,
      password,
      nickname,
      fullname,
    },
  });
};

export const deregisterUser = (token) => {
  return axios.get(`${API_BASE_URL}`, {
    params: {
      request: "deregister",
      token,
    },
  });
};

// Function to login a user
export const loginUser = (userid, password) => {
  const random = Math.random() * 1500;
  return axios.get(`${API_BASE_URL}`, {
    params: {
      request: "login",
      userid,
      password,
      random
    },
  });
};

// Function to logout a user
export const logoutUser = (token) => {
  return axios.get(`${API_BASE_URL}`, {
    params: {
      request: "logout",
      token,
    },
  });
};

// Function to get User profiles
export const getProfiles = (token) => {
  /* const random = Math.random() * 1500; */
  return axios.get(`${API_BASE_URL}`, {
    params: {
      request: "getprofiles",
      token,
      /* random */
    },
  });
};

// Funktion to get Chats
export const getChats = (token) => {
  return axios.get(`${API_BASE_URL}`, {
    params: {
      request: "getchats",
      token,
    },
  });
};

// Funktion to create a chat
export const createChat = (token, chatname) => {
  const random = Math.random() * 1500;
  return axios.get(`${API_BASE_URL}`, {
    params: {
      request: "createchat",
      token,
      chatname,
      random
    },
  });
};

// Funktion to delete a chat
export const deleteChat = (token, chatid) => {
  const random = Math.random() * 1500;
  return axios.get(`${API_BASE_URL}`, {
    params: {
      request: "deletechat",
      token,
      chatid,
      random
    },
  });
};

// Funktion to invite
export const inviteToChat = (token, chatid, invitedhash) => {
  return axios.get(`${API_BASE_URL}`, {
    params: {
      request: "invite",
      token,
      chatid,
      invitedhash,
    },
  });
};

// Funktion to join a chat
export const joinChat = (token, chatid) => {
  console.log("API call to joinChat - Token:", token, "ChatID:", chatid);

  if (chatid < 0) {
    console.error("Invalid chatid detected:", chatid);
    return Promise.reject(new Error("Invalid chat ID"));
  }
  return axios.get(`${API_BASE_URL}`, {
    params: {
      request: "joinchat",
      token,
      chatid,
    },
  });
};

// Funktion to leave a chat
export const leaveChat = (token, chatid) => {
  return axios.get(`${API_BASE_URL}`, {
    params: {
      request: "leavechat",
      token,
      chatid,
    },
  });
};

// Funktion to get Messages
export const getMessages = (token, chatid, fromid) => {
  const random = Math.random() * 1500;
  return axios.get(`${API_BASE_URL}`, {
    params: {
      request: "getmessages",
      token,
      chatid,
      fromid,
      random,
    },
  });
};

// Funktion to get photo
export const getPhoto = (token, photoid) => {
  return axios.get(`${API_BASE_URL}`, {
    params: {
      request: "getphoto",
      token,
      photoid,
    },
    responseType: "blob", // To handle image file response
  });
};

// Funktion to post Message
export const postMessage = (token, text, chatid, photo = null) => {
  return axios.post(`${API_BASE_URL}`, {
    request: "postmessage",
    token,
    text,
    chatid,
    photo,
  });
};

//Validate the token
export const validateToken = (token) => {
  return axios.get(`${API_BASE_URL}`, {
    params: {
      request: "validatetoken",
      token,
    },
  });
};
