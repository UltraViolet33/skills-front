import { apiUrl } from "./constants";

const getUserData = async () => {
  const url = `${apiUrl}user-data`;
  const response = await fetch(url);
  return response.json();
};

export const userServices = {
  getUserData,
};
