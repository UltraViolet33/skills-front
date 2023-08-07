import { apiUrl } from "./constants";

const addAction = async (action) => {
  const url = `${apiUrl}actions/add`;
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(action),
  });

  return response.json();
};

export const actionsServices = {
  addAction,
};
