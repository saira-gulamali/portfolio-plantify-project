import apiFetch from "./apiFetch";

export const creatUser = ({ username, password }) => {
  return apiFetch("POST", "/users", { username, password });
};
