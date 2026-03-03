import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import {
  getSessionTokenStorage,
  removeSessionTokenStorage,
  setSessionTokenStorage,
} from "services/user";
import SessionContext from "./SessionContext";

export const SessionProvider = ({ children }) => {
  const [sessionToken, setSessionToken] = useState(() =>
    getSessionTokenStorage(),
  );

  const signInUser = (token) => {
    setSessionToken(token);
    setSessionTokenStorage(token);
  };

  const signOutUser = () => {
    setSessionToken(null);
    removeSessionTokenStorage();
  };

  const decodedToken = sessionToken && jwtDecode(sessionToken);

  return (
    <SessionContext.Provider
      value={{
        signInUser,
        signOutUser,
        username: decodedToken?.username || null,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};
