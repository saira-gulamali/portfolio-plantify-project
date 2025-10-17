//
//
const FormContainer = (props) => {
  const { children } = props;
  return (
    <div className="flex bg-emerald-50 h-screen">
      <div className="hidden md:flex relative">
        <img
          className="h-screen object-cover"
          src="https://static-task-assets.react-formula.com/capstone_sign_in_scene.png"
          alt=""
        />
        <div className="bg-black/10 absolute top-0 left-0 w-full h-full"></div>
        <div className="bg-green-700/20 absolute top-0 left-0 w-full h-full"></div>
      </div>
      <div className=" flex flex-col justify-center items-center gap-4 flex-1">
        <img
          className="w-24"
          src="https://static-task-assets.react-formula.com/capstone_logo_dark.png"
        />
        <div className="text-4xl font-primary text-green-800 ">
          Plantify Plants
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default FormContainer;
