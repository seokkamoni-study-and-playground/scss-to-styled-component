import axios from "axios";

export const customAxios = axios.create({
  baseURL: "https://api.openai.com/v1/",
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
    "Content-Type": "application/json",
  },
});
