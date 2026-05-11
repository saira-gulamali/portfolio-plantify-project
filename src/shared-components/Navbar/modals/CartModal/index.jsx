import { clsx } from "clsx";
import { useCallback, useEffect, useState } from "react";
import * as cartService from "services/cart";
import Spinner from "shared-components/Spinner";
import CartItem from "./CartItem";

const CartModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [cartData, setCartData] = useState([]);

  const fetchCart = useCallback(async () => {
    setIsLoading(true);
    const response = await cartService.getCart();
    const data = await response.json();
    setCartData(data);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  let totalItem = 0;
  let totalPrice = 0;

  for (let item of cartData) {
    totalItem += item.quantity;
    totalPrice += item.quantity * item.price_per_unit;
  }

  return (
    <div className="bg-emerald-50 max-w-lg  w-full h-full absolute top-0 right-0 flex flex-col">
      {/* ---------------------- header ----------------------  */}
      <header className="bg-emerald-700 p-8 shadow-lg font-primary text-3xl text-emerald-100 text-center">
        <div>Plantify Plants</div>
      </header>
      {/* ---------------------- main ----------------------  */}
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
      {/* ---------------------- footer ----------------------  */}
      <footer className="p-6 border-t border-slate-300 mt-4">
        <div className="flex justify-between text-slate-600 text-xl">
          <div>{totalItem} items: </div>
          <div>
            subtotal:{" "}
            <span className="text-slate-800 text-xl">${totalPrice}</span>
          </div>
        </div>
        <div className="mt-6 p-2">
          <button className=" text-white font-secondary w-full py-2 rounded-full bg-emerald-700 text-xl">
            Checkout
          </button>
        </div>
      </footer>
    </div>
  );
};

export default CartModal;
