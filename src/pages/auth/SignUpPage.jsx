import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Users from "services/user";
import AuthForm from "./AuthForm";
import FormContainer from "./FormContainer";

const SignUpPage = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (value) => {
    setError("");

    if (value.username.length < 4) {
      setError("username is too short");
      return;
    }
    if (value.password.length < 6) {
      setError("password too short");
      return;
    }
    if (value.password !== value["confirm password"]) {
      setError("password must match!");
      return;
    }

    try {
      const res = await Users.creatUser({
        username: value.username,
        password: value.password,
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error);
      } else {
        navigate("/", { state: { newAccount: true } });
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <FormContainer>
      <div className="flex flex-col items-center justify-center">
        {error && <p className="text-red-700 text-sm mb-2 ">{error}</p>}
        <AuthForm
          fields={[
            { label: "username", type: "text" },
            { label: "password", type: "password" },
            { label: "confirm password", type: "password" },
          ]}
          buttonText="Create Account"
          onSubmit={submitHandler}
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
