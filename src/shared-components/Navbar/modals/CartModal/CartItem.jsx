// {
//     "id": 1405,
//     "image_src": "https://static-task-assets.react-formula.com/summer_bromeliad_black.jpeg",
//     "plant_name": "Summer Bromeliad",
//     "pot_color": "black",
//     "price_per_unit": 37,
//     "quantity": 5
// }

const CartItem = (props) => {
  const { data } = props;

  return (
    <div className="font-secondary flex text-slate-600 mb-8 ">
      <img className="w-24 mr-4 rounded-md" src={data.image_src} />
      <div className="flex-1">
        <div className="flex justify-between font-primary text-xl mb-2">
          <div className=" text-emerald-700">{data.plant_name}</div>
          <div className="text-slate-600">
            ${data.quantity * data.price_per_unit}
          </div>
        </div>
        <div className="">
          <span className=" text-slate-400 w-12 inline-block">qty:</span>{" "}
          {data.quantity}
        </div>
        <div>
          <span className=" text-slate-400 w-12 inline-block">color:</span>{" "}
          {data.pot_color}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
