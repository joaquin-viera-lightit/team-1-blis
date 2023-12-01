import axios from "axios";

import { useUserStore } from "~/store/userStore";

export const api = axios.create({
  baseURL: "https://hackaton.sergs.com.ar/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAuthHeaders = () => {
  const userToken = useUserStore.getState().user?.token;

  return {
    Authorization: `Bearer ${userToken}`,
  };
};

export interface ServiceResponse<T> {
  status: number;
  success: boolean;
  data: T;
  pagination?: {
    count: number;
    total: number;
    perPage: number;
    currentPage: number;
    totalPages: number;
    links: {
      previus: string;
      next: string;
    };
  };
}
