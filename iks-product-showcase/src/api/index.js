import Axios from "axios";

export const api = Axios.create({
  baseURL: "https://iks-backend.onrender.com",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});
