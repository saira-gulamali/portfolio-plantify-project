import clsx from "clsx";
import { useState } from "react";
import { Link } from "react-router-dom";
import { POT_COLORS, randomColorIdx } from "utils";

const PlantItem = (props) => {
  const { plant } = props;
  const [color, setColor] = useState(() => {
    return randomColorIdx(plant.images);
  });
  // console.log(plant);

  function handleMouseEnter(idx) {
    setColor(idx);
  }

  return (
    <div className="flex flex-col  w-64 text-emerald-700 font-secondary">
      <Link to={`/plants/${plant.id}`}>
        <img
          className="rounded-lg"
          src={plant.images[color].src}
          alt="plant image"
        />
      </Link>
      <div className="flex justify-between my-2 ">
        <div>{plant.name}</div>
        <div>${plant.price}</div>
      </div>
      <div className="flex justify-between my-2">
        {plant.images[color].pot_color}
        <div className="flex justify-end gap-1">
          {plant.images.map((image, index) => {
            return (
              <div
                key={image.pot_color}
                onMouseEnter={() => handleMouseEnter(index)}
                className={clsx(
                  "h-6 w-6 rounded-full ",
                  POT_COLORS[image.pot_color],
                  color === index
                    ? "outline-2 outline-offset-2 outline-stone-400"
                    : null,
                )}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PlantItem;
