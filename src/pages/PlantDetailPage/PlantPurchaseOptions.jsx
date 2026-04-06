// {
//     "pot_color": "stone",
//     "src": "https://static-task-assets.react-formula.com/kimberly_queen_fern_stone.jpeg"
// }

const PlantPurchaseOptions = (props) => {
  const { plant } = props;
  console.log(plant);
  return (
    <div>
      <div className="mt-6 text-emerald-600 text-2xl flex gap-2 items-center">
        <i className="fa-solid fa-brush "></i>
        <div>Pot Color</div>
      </div>
      {/* <div>{plant.images[0].pot_color}</div> */}
      <div className="border-2 border-red-400 flex mt-4">
        {plant.images.map((image, idx) => {
          return (
            <div
              key={idx}
              className="flex flex-col justify-center items-center w-14"
            >
              <div className="w-8 h-8 rounded-full bg-black"></div>
              <div className="text-slate-600 text-center">
                {image.pot_color}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlantPurchaseOptions;
