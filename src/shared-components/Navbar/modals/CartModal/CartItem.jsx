import * as cartService from "services/cart";

const CartItem = (props) => {
  const { data, fetchCart } = props;

  return (
    <div className="font-secondary flex text-slate-600 ">
      {/* first child */}
      <img className="w-24 mr-4 rounded-md" src={data.image_src} />

      {/* 2nd child */}
      <div className="flex-1 ">
        <div className="flex justify-between font-primary text-xl mb-2 ">
          <div className=" text-emerald-700">{data.plant_name}</div>
          <div className="text-slate-600">
            ${data.quantity * data.price_per_unit}
          </div>
        </div>
        <div>
          <span className=" text-slate-400 w-12 inline-block">qty:</span>{" "}
          {data.quantity}
        </div>
        <div>
          <span className=" text-slate-400 w-12 inline-block ">color:</span>
          {data.pot_color}
        </div>
        <div className="flex justify-end">
          <button
            className=" text-slate-500 hover:text-red-700"
            onClick={async () => {
              await cartService.removePlantFromCart({ cartId: data.id });
              await fetchCart();
            }}
          >
            remove{" "}
            <span>
              <i className="fa-regular fa-trash"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
