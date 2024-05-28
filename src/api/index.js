import axios from "axios";

const instance = axios.create({
  baseURL: "https://task-react-auth-backend.eapi.joincoded.com/api",
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    console.log("first");
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
