import axios from "axios";

const debug = process.env.VUE_APP_NODE_ENV !== "production";

const baseURL = debug
  ? "http://localhost:5000/api/v1/"
  : "https://travel-blog-api-muharrem-sait-coktass-projects.vercel.app/api/v1/"; // production/deployed api url

let api = axios.create({ baseURL });

export default api;