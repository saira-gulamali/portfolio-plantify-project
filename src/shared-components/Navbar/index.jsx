import SessionContext from "context/SessionContext";
import { useContext, useState } from "react";

const Navbar = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { username, signOutUser } = useContext(SessionContext);

  return (
    <nav
      className="bg-emerald-600  flex items-center justify-center  "
      onMouseLeave={() => setIsUserMenuOpen(false)}
    >
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
        <div className="relative flex-1 flex justify-end">
          <button
            className=" flex items-center gap-2"
            onClick={() => setIsUserMenuOpen(true)}
          >
            <i className="fa-light fa-user text-white text-2xl"></i>
            <div className="text-white font-primary ">{username}</div>
          </button>
          {isUserMenuOpen && (
            <button
              className="absolute -bottom-8 w-22 h-7 -right-1  bg-white rounded-md shadow-md text-slate-500 hover:text-emerald-700 flex items-center text-sm"
              onClick={signOutUser}
            >
              <i className="fa-regular fa-arrow-right-from-bracket mx-1"></i>
              <div>Sign Out</div>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
