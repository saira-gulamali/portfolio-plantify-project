import clsx from "clsx";
import { POT_COLORS } from "utils";

const PlantPurchaseOptions = (props) => {
  const { plant, colorIndex, setColorIndex } = props;

  return (
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
  );
};

export default PlantPurchaseOptions;
