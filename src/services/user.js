import apiFetch from "./apiFetch";

const CAPSTONE_SESSION_KEY = "capstone-session-key";

export const createUser = ({ username, password }) => {
  return apiFetch("POST", "/users", { username, password });
};

export const createSession = ({ username, password }) => {
  return apiFetch("POST", "/users/session", { username, password });
};

export const setSessionTokenStorage = (sessionToken) => {
  return localStorage.setItem(CAPSTONE_SESSION_KEY, sessionToken);
};

export const getSessionTokenStorage = () => {
  return localStorage.getItem(CAPSTONE_SESSION_KEY);
};

export const removeSessionTokenStorage = () => {
  return localStorage.removeItem(CAPSTONE_SESSION_KEY);
};
