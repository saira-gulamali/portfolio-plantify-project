import apiFetch from "./apiFetch";

export const creatUser = ({ username, password }) => {
  return apiFetch("POST", "/users", { username, password });
};

export const createSession = ({ username, password }) => {
  return apiFetch("POST", "/users/session", { username, password });
};
