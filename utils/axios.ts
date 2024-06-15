import axios from "axios";

const http = axios.create({
  baseURL: 'http://localhost:8081',
  withCredentials: true,
  withXSRFToken: true,
});

export default http;