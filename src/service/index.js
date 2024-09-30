import axios from "axios";
import { contentPath } from "../constants.js";
import { auth } from '../config/firebase.js'
const apiService = axios.create();
apiService.defaults.baseURL = contentPath;
apiService.defaults.timeout = 350000;

// Function to refresh the token from Firebase
async function refreshToken() {
  const user = auth.currentUser;
  if (user) {
    const newToken = await user.getIdToken(true);
    return newToken;
  }
  return null;
}

// Add request interceptor
apiService.interceptors.request.use(
  async (config) => {
    let token = JSON.parse(localStorage.getItem("app-access-token"));

    // Set headers with token
    config.headers = {
      Accept: "application/json, text/plain, */*",
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "access-control-allow-headers": "*",
      "access-control-allow-methods": "*",
      "access-control-allow-origin": "*",
    };

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor
apiService.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Refresh the token
        const newToken = await refreshToken();

        // Update token in local storage
        localStorage.setItem("app-access-token", newToken);

        // Set the new token in the request headers
        originalRequest.headers.Authorization = `Bearer ${newToken}`;

        // Retry the original request
        return apiService(originalRequest);
      } catch (error) {
        // Handle error while refreshing token
        console.error("Error refreshing token:", error);
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export default apiService;
