const Field = (props) => {
  const { label, type, value, onChange } = props;
  return (
    <div className="flex flex-col my-4 ">
      <label className="text-slate-500 ml-2 mb-1" htmlFor={label}>
        {label}
      </label>
      <input
        id={label}
        type={type}
        value={value}
        onChange={onChange}
        className="w-full rounded-md py-1  bg-slate-100 px-2 shadow-inner focus:outline-emerald-600 "
      />
    </div>
  );
};

export default Field;
