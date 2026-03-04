import SessionContext from "context/SessionContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RedirectToSignInIfSignOut = ({ children }) => {
  const { username } = useContext(SessionContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (username === null) {
      navigate("/");
    }
  }, [username]);

  return <div>{children}</div>;
};

export default RedirectToSignInIfSignOut;
