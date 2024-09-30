import axios from "axios";
import { basePath } from "../constants";

const apiService = axios.create();
apiService.defaults.baseURL = basePath;
apiService.defaults.timeout = 35000;
apiService.interceptors.request.use(
  async (config) => {
    config.headers = {
      Accept: "application/json, text/plain, */*",
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

export default apiService;
