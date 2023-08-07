import { apiUrl } from "./constants";

const getAllSkills = async () => {
  const url = `${apiUrl}all-skills`;
  const response = await fetch(url);
  return response.json();
};

export const skillsServices = {
  getAllSkills,
};
