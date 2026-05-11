import { RemoveScroll } from "react-remove-scroll";

const ModalWrapper = (props) => {
  const { children, isOpen, closeMenu } = props;
  if (!isOpen) {
    return;
  }

  return (
    <div className=" bg-black/50 h-full  w-full fixed   top-0 left-0 ">
      <RemoveScroll>
        {/* ---------------------- modal ----------------------  */}
        <button onClick={closeMenu} className="absolute z-10 top-0 right-0 p-4">
          <i className="fa-regular fa-circle-xmark text-white text-4xl "></i>
        </button>{" "}
        {children}
      </RemoveScroll>
    </div>
  );
};

export default ModalWrapper;
