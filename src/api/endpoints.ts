import { api, getAuthHeaders } from "./client";
import { API_PATH } from "./paths";
import type { ColorsResponse } from "./types";

const formatUrl = (url: string, newValue: string) => {
  return url.replace(/(%s)/g, newValue);
};

export const postLogin = async (params: { name: string; email: string }) => {
  const { data } = await api.post(API_PATH.POST_LOGIN, params);
  return data;
};

export const getUsers = async () => {
  const { data } = await api.get(API_PATH.GET_USERS);

  return data;
};
export const getMotivationalPhrase = async () => {
  const { data } = await api.get(API_PATH.GET_MOTIVATIONAL_PHRASE, {
    headers: getAuthHeaders(),
  });

  return data;
};

export const getColors = async () => {
  const { data } = await api.get<ColorsResponse>(API_PATH.GET_COLORS, {
    headers: getAuthHeaders(),
  });

  return data;
};

export const getImages = async (colorId: string) => {
  console.log(colorId);
  const url = formatUrl(API_PATH.GET_COLOR_IMAGES, colorId);
  console.log(url);
  const { data } = await api.get(url, { headers: getAuthHeaders() });

  return data;
};

export const postSaveImage = async (params) => {
  const { data } = await api.post(API_PATH.POST_DAILY_CHOICE, params, {
    headers: getAuthHeaders(),
  });
  return data;
};

export const getRecomendatioms = async () => {
  const { data } = await api.get(API_PATH.GET_RECOMENDATIONS, {
    headers: getAuthHeaders(),
  });
  return data;
};
