import axios from "axios";

const axiosClient = axios.create({
  baseURL: `http://localhost:8080`,
  responseType: "json",
  timeout: 15 * 1000,
});

export default axiosClient;
