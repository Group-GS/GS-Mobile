import axios from "axios";

export const api = axios.create({
  baseURL: "http://192.168.15.138:8083",
  timeout: 5000,
});