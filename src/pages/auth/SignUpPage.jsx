import { Link } from "react-router-dom";
import AuthForm from "./AuthForm";
import FormContainer from "./FormContainer";

const SignUpPage = () => {
  return (
    <FormContainer>
      <div className="flex flex-col items-center justify-center">
        <AuthForm
          fields={[
            { label: "username", type: "text" },
            { label: "password", type: "password" },
            { label: "confirm password", type: "password" },
          ]}
          buttonText="Create Account"
        />
        <Link
          className=" mt-4 underline text-center text-green-700 text-sm"
          to="/"
        >
          sign in
        </Link>
      </div>
    </FormContainer>
  );
};

export default SignUpPage;
