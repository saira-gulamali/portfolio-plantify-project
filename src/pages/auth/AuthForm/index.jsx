import { useState } from "react";
import Field from "./Field";

const AuthForm = (props) => {
  const { fields, buttonText } = props;

  const [formData, setFormData] = useState(() => {
    const initialState = {};
    for (let field of fields) {
      initialState[field.label] = "";
    }
    return initialState;
  });
  console.log(formData);
  return (
    <div className="border-2 border-slate-200 rounded-md w-68 p-4 shadow-lg">
      <form className="  rounded-md  ">
        {fields.map((field) => (
          <Field
            key={field.label}
            label={field.label}
            type={field.type}
            value={formData[field.label]}
            onChange={(e) =>
              setFormData({ ...formData, [field.label]: e.target.value })
            }
          />
        ))}
        <button className="bg-emerald-700 text-white w-full py-1 rounded-md mt-4 ">
          {buttonText}
        </button>
      </form>
    </div>
  );
};
export default AuthForm;
