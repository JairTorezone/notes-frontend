import axios from "axios";

export const api = axios.create({
  baseURL: "https://notes-backend-nkdb.onrender.com",
});
