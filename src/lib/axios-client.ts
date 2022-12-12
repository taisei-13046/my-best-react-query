import axios from "axios";
import { API_URL } from "../config";

/**
 * アプリ全体で使用するHTTP Client
 */
export const axiosClient = axios.create({
  baseURL: API_URL,
});
