import AuthForm from "./AuthForm";

const SignInPage = () => {
  return (
    <div className="flex justify-center ">
      <AuthForm
        fields={[
          { label: "username", type: "text" },
          { label: "password", type: "password" },
        ]}
        buttonText="Sign In"
      />
    </div>
  );
};

export default SignInPage;
