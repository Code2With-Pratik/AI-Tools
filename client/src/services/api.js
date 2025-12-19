// src/services/api.js
import axios from "axios";
import { useAuth } from "@clerk/clerk-react";

export const api = axios.create({
  baseURL: "http://localhost:5000",
});

export function useApi() {
  const { getToken } = useAuth();

  api.interceptors.request.use(async (config) => {
    const token = await getToken();
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  });

  return api;
}
