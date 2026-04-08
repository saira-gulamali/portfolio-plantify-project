import clsx from "clsx";
import { useEffect, useState } from "react";
import { POT_COLORS } from "utils";

const PlantPurchaseOptions = (props) => {
  const { plant, colorIndex, setColorIndex } = props;

  const [quantity, setQuantity] = useState(5);

  useEffect(() => {
    setQuantity(quantity + 1);
  }, []);

  return (
    <>
      <div>
        <div className="mt-6 text-emerald-600 text-2xl flex gap-2 items-center">
          <i className="fa-solid fa-brush "></i>
          <div>Pot Color</div>
        </div>

        <div className=" flex mt-4">
          {plant.images.map((image, idx) => {
            return (
              <div
                key={idx}
                className="flex flex-col justify-center items-center w-14"
              >
                <div
                  onMouseEnter={() => setColorIndex(idx)}
                  className={clsx(
                    "w-8 h-8 rounded-full border-1 border-slate-400",
                    POT_COLORS[image.pot_color],
                    colorIndex === idx &&
                      "outline-2 outline-slate-400 outline-offset-3",
                  )}
                ></div>
                <div className="text-slate-600 text-center">
                  {image.pot_color}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* buttons  */}
      <div className="flex mt-4 ">
        {/* counter button */}
        <div className=" flex border-2 border-slate-400 rounded-full bg-slate-100 px-4 text-slate-600">
          <button
            onClick={() => {
              if (quantity > 1) {
                setQuantity(quantity - 1);
              }
            }}
          >
            <i className="fa-solid fa-minus"></i>
          </button>
          <div className="my-2 text-emerald-700 text-xl w-12 text-center">
            {quantity}
          </div>
          <button
            onClick={() => {
              setQuantity((oldValue) => oldValue + 1);
            }}
          >
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
        {/* add to cart button */}
        <button className="border-2 flex-1 ml-2 bg-emerald-600 text-emerald-100 rounded-full hover:bg-emerald-700">
          <i className="fa-solid fa-cart-arrow-down mr-2"></i>
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default PlantPurchaseOptions;
