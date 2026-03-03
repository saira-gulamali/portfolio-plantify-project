// https://static-task-assets.react-formula.com/capstone_logo_light.png
import SessionContext from "context/SessionContext";
import { useContext } from "react";

const Navbar = () => {
  const { username } = useContext(SessionContext);

  return (
    <div className="bg-emerald-600  flex items-center justify-center  ">
      <div className="  flex w-full max-w-5xl items-center justify-between px-4 py-2">
        <div className="flex items-center gap-2 ">
          <img
            className="h-24 object-contain"
            src="https://static-task-assets.react-formula.com/capstone_logo_light.png"
            alt="logo"
          />
          <div className="text-white font-primary text-2xl font-medium">
            Plantify Plants
          </div>
        </div>
        <div className="flex items-center gap-2">
          <i className="fa-light fa-user text-white text-2xl"></i>
          <div className="text-white font-primary ">{username}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
