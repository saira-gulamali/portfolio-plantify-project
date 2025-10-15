import AuthForm from "./AuthForm";

const SignUpPage = () => {
  return (
    <div className="flex justify-center">
      <AuthForm
        fields={[
          { label: "username", type: "text" },
          { label: "password", type: "password" },
          { label: "confirm password", type: "password" },
        ]}
        buttonText="Create Account"
      />
    </div>
  );
};

export default SignUpPage;
