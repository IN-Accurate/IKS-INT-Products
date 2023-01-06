import Axios from "axios";

export const api = Axios.create({
  baseURL: "https://iks-backend.onrender.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
