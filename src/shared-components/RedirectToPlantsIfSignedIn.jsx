import SessionContext from "context/SessionContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RedirectToPlantsIfSignedIn = ({ children }) => {
  const { username } = useContext(SessionContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (username !== null) {
      navigate("/plants");
    }
  }, [username, navigate]);

  return <div>{children}</div>;
};

export default RedirectToPlantsIfSignedIn;
