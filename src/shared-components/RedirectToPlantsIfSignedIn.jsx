import SessionContext from "context/SessionContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RedirectToPlantsIfSignedIn = ({ children }) => {
  const { username } = useContext(SessionContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (username !== null) {
      console.log("redirecting to plants page");
      navigate("/plants");
    }
  }, [username]);

  return <div>{children}</div>;
};

export default RedirectToPlantsIfSignedIn;
