import { useCallback, useEffect, useState } from "react";
import { RemoveScroll } from "react-remove-scroll";
import * as cartService from "services/cart";
import Spinner from "shared-components/Spinner";
import CartItem from "./CartItem";
import { clsx } from "clsx";

const CartModal = (props) => {
  const { setIsCartOpen } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [cartData, setCartData] = useState([]);

  const fetchCart = useCallback(async () => {
    setIsLoading(true);
    const response = await cartService.getCart();
    const data = await response.json();
    console.log(data);
    setCartData(data);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  return (
    <div
      // onClick={() => setIsCartOpen(false)}
      className=" bg-black/50 h-full  w-full fixed   top-0 left-0 "
    >
      <RemoveScroll>
        <div className="bg-emerald-50 max-w-lg  w-full h-full absolute top-0 right-0 flex flex-col">
          {/* modal navbar */}
          <div className="bg-emerald-700 p-8 shadow-lg font-primary text-3xl text-emerald-100 text-center">
            <div>Plantify Plants</div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="absolute top-0 right-0 p-4"
            >
              <i className="fa-regular fa-circle-xmark "></i>
            </button>{" "}
          </div>
          {/* main section */}
          <main className="flex-col p-6 flex-1 overflow-y-scroll">
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
                    <CartItem data={item} fetchCart={fetchCart} />
                  </div>
                );
              })}
          </main>
          {/* footer */}
          <footer className="p-6 border-t border-slate-300 mt-4">
            <div className="flex justify-between text-slate-600 text-xl">
              <div>7 items: </div>
              <div>
                subtotal:{" "}
                <span className="text-slate-800 text-xl"> $185 </span>{" "}
              </div>
            </div>
            <div className="mt-6 p-2">
              <button className=" text-white font-secondary w-full py-2 rounded-full bg-emerald-700 text-xl">
                Checkout
              </button>
            </div>
          </footer>
        </div>
      </RemoveScroll>
    </div>
  );
};

export default CartModal;
