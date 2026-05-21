import { useRef } from "react";
import { RemoveScroll } from "react-remove-scroll";
import { motion } from "motion/react";

const ModalWrapper = (props) => {
  const modalRef = useRef(null);
  const { children, isOpen, closeMenu } = props;
  if (!isOpen) {
    return;
  }

  return (
    <div
      ref={modalRef}
      onClick={(e) => {
        if (e.target === modalRef.current) {
          closeMenu();
        }
      }}
      className=" bg-black/50 backdrop-blur  h-full  w-full fixed   top-0 left-0 "
    >
      <RemoveScroll>
        {/* ---------------------- modal ----------------------  */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          onClick={closeMenu}
          className="absolute z-10 top-0 right-0 p-4"
        >
          <i className="fa-regular fa-circle-xmark text-white text-4xl "></i>
        </motion.button>{" "}
        {children}
      </RemoveScroll>
    </div>
  );
};

export default ModalWrapper;
