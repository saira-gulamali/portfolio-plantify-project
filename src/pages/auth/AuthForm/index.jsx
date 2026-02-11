import { useState } from "react";
import Field from "./Field";

const AuthForm = (props) => {
  const { fields, buttonText, onSubmit } = props;

  const [formData, setFormData] = useState(() => {
    const initialState = {};
    for (let field of fields) {
      initialState[field.label] = "";
    }
    return initialState;
  });

  const [loading, setLoading] = useState(false);

  return (
    <div className="bg-white border-2 border-slate-200 rounded-md w-68 p-4 shadow-lg font-secondary">
      <form
        className="rounded-md"
        onSubmit={async (e) => {
          setLoading(true);
          e.preventDefault();
          await onSubmit(formData);
          setLoading(false);
        }}
      >
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
        <button
          className={`relative bg-emerald-700 text-white w-full py-1 rounded-md mt-4  `}
        >
          {buttonText}
          {loading && (
            <div className="absolute text-black top-0 right-5 h-full flex items-center animate-spin ">
              <i class="fa-solid fa-spinner text-emerald-100 text-sm"></i>
            </div>
          )}
        </button>
      </form>
    </div>
  );
};
export default AuthForm;
