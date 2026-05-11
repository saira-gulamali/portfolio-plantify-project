import SessionContext from "context/SessionContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartModal from "./modals/CartModal";
import MobileMenuModal from "./modals/MobileMenuModal";
import ModalWrapper from "./modals/ModalWrapper";

const Navbar = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { username, signOutUser } = useContext(SessionContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav
        className="bg-emerald-600  flex items-center justify-center  "
        onMouseLeave={() => setIsUserMenuOpen(false)}
      >
        <div className="  flex w-full max-w-5xl items-center justify-between px-4 py-2">
          <div className="flex items-center gap-2 ">
            <Link to="/plants">
              <img
                className="h-24 object-contain"
                src="https://static-task-assets.react-formula.com/capstone_logo_light.png"
                alt="logo"
              />
            </Link>
            <div className="text-white font-primary text-2xl font-medium">
              Plantify Plants
            </div>
          </div>
          <div className="relative flex-1 hidden sm:flex justify-end">
            <button
              onClick={() => {
                setIsCartOpen(true);
              }}
              className="mx-4  text-white text-lg"
            >
              <i className="mr-1 text-white text-2xl fa-regular fa-cart-arrow-down"></i>
              cart
            </button>
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
                <i className="fa-regular fa-arrow-right-from-bracket text-xl mx-1"></i>
                <div>Sign Out</div>
              </button>
            )}
          </div>
          {/* hamburger button */}
          <div className="flex sm:hidden">
            <button onClick={() => setIsMobileMenuOpen(true)}>
              <i className="text-white text-4xl fa-regular fa-bars"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* {isCartOpen && <CartModal setIsCartOpen={setIsCartOpen} />} */}

      <ModalWrapper isOpen={isCartOpen} closeMenu={() => setIsCartOpen(false)}>
        <CartModal />
      </ModalWrapper>

      <ModalWrapper
        isOpen={isMobileMenuOpen}
        closeMenu={() => setIsMobileMenuOpen(false)}
      >
        <MobileMenuModal
          setCartOpen={() => {
            setIsCartOpen(true);
            setIsMobileMenuOpen(false);
          }}
        />
      </ModalWrapper>
    </>
  );
};

export default Navbar;
