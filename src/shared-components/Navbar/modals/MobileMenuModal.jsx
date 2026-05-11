import SessionContext from "context/SessionContext";
import { useContext } from "react";

const MobileMenuModal = (props) => {
  const { username, signOutUser } = useContext(SessionContext);
  const { setCartOpen } = props;
  return (
    <div className=" flex justify-end">
      <div className="text-white text-xl font-secondary flex flex-col justify-start items-start gap-4 bg-emerald-700 w-64 p-12 rounded-bl-2xl">
        <div className="text-start w-full p-4 ">
          <i className="fa-light fa-user text-white text-xl mr-2"></i>
          {username}
        </div>
        <button onClick={setCartOpen} className="text-start w-full p-4 ">
          <i className="mr-2 text-white text-xl fa-regular fa-cart-arrow-down"></i>
          cart
        </button>
        <button onClick={signOutUser} className=" text-start w-full p-4 ">
          <i className="fa-regular fa-arrow-right-from-bracket text-xl mr-2"></i>
          signout
        </button>
      </div>
    </div>
  );
};

export default MobileMenuModal;
