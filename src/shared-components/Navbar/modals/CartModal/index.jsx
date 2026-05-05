import { useEffect, useState } from "react";
import { RemoveScroll } from "react-remove-scroll";
import * as cartService from "services/cart";
import Spinner from "shared-components/Spinner";
import CartItem from "./CartItem";
import { clsx } from "clsx";

const CartModal = (props) => {
  const { setIsCartOpen } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      setIsLoading(true);
      const response = await cartService.getCart();
      const data = await response.json();
      console.log(data);
      setCartData(data);
      setIsLoading(false);
    };
    fetchCart();
  }, []);

  return (
    <div
      // onClick={() => setIsCartOpen(false)}
      className=" bg-black/50 h-full  w-full fixed   top-0 left-0 "
    >
      <RemoveScroll>
        <div className="bg-emerald-50 max-w-lg  w-full h-full absolute top-0 right-0 overflow-auto">
          <div className="bg-emerald-700 p-8 shadow-lg font-primary text-3xl text-emerald-100 text-center">
            <div>Plantify Plants</div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="absolute top-0 right-0 p-4"
            >
              <i className="fa-regular fa-circle-xmark "></i>
            </button>{" "}
          </div>
          <div className="flex justify-center flex-col p-6">
            {isLoading && <Spinner />}

            {!isLoading &&
              cartData.map((item, index) => {
                return (
                  <div
                    key={item.id}
                    className={clsx(
                      `py-6`,
                      index !== 0 && "border-t border-slate-400",
                    )}
                  >
                    <CartItem data={item} />
                  </div>
                );
              })}
          </div>
        </div>
      </RemoveScroll>
    </div>
  );
};

export default CartModal;
