import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SessionContext from "context/SessionContext";
import { createSession } from "services/user";
import AuthForm from "./AuthForm";
import FormContainer from "./FormContainer";

const SignInPage = () => {
  const [error, setError] = useState("");
  const location = useLocation();
  const SessionData = useContext(SessionContext);
  console.log({ SessionData });
  // const navigate = useNavigate();

  return (
    <FormContainer>
      <div className="flex flex-col items-center justify-center">
        {error && <p className="text-red-700 text-sm mb-2 ">{error}</p>}
        {location.state?.newAccount && (
          <p className="text-green-700 border shadow border-emerald-700  p-2 rounded-md mb-4 bg-green-200 ">
            Account created successfully! Please sign in.
          </p>
        )}

        <AuthForm
          fields={[
            { label: "username", type: "text" },
            { label: "password", type: "password" },
          ]}
          buttonText="Sign In"
          onSubmit={async (values) => {
            setError("");
            const response = await createSession({
              username: values.username,
              password: values.password,
            });
            const data = await response.json();
            if (response.status === 201) {
              SessionData.signInUser(data.capstone_session_token);
              // navigate("/plants");
            } else {
              setError(data.error);
            }
          }}
        />
        <Link
          className=" mt-4 underline text-center text-green-700 text-sm"
          to="/sign-up"
        >
          create an account
        </Link>
      </div>
    </FormContainer>
  );
};

export default SignInPage;
