import axios from "axios";
import { API_BASE_URL } from "./components/constants/apiroute";

export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});
