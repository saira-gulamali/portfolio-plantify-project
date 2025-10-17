import { Link } from "react-router-dom";
import AuthForm from "./AuthForm";
import FormContainer from "./FormContainer";

const SignInPage = () => {
  return (
    <FormContainer>
      <div className="flex flex-col items-center justify-center">
        <AuthForm
          fields={[
            { label: "username", type: "text" },
            { label: "password", type: "password" },
          ]}
          buttonText="Sign In"
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
