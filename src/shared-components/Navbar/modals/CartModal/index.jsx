import { RemoveScroll } from "react-remove-scroll";

const CartModal = (props) => {
  const { setIsCartOpen } = props;
  return (
    <div
      onClick={() => setIsCartOpen(false)}
      className=" bg-black/50 h-full  w-full fixed  border-6 border-red-500 top-0 left-0 "
    >
      <RemoveScroll>
        <div className="bg-white max-w-lg  w-full h-full absolute top-0 right-0 ">
          <div className="bg-emerald-700 p-8 shadow-lg font-primary text-3xl text-emerald-100 text-center">
            <div>Plantify Plants</div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="absolute top-0 right-0 p-4"
            >
              <i className="fa-regular fa-circle-xmark "></i>
            </button>{" "}
          </div>
        </div>
      </RemoveScroll>
    </div>
  );
};

export default CartModal;
