import React from "react";
import PlantHeader from "./PlantHeader";

const PlantDetail = (props) => {
  const { plant } = props;
  console.log({ plant });
  return (
    <div className="flex flex-col md:flex-row pt-8 p-4">
      {/* plant-header for mobile */}
      <div className="block md:hidden pb-6">
        <PlantHeader plant={plant} />
      </div>

      {/* right side */}
      <div className="flex-1">
        <img className="rounded-lg" src={plant?.images[0]?.src} />
      </div>
      {/* left side  */}
      <div className="flex-1 p-2 font-secondary md:ml-4 ">
        {/* plant-header for desktop */}
        <div className="hidden md:block">
          <PlantHeader plant={plant} />
        </div>
        <p className="leading-relaxed mt-4 text-slate-600">
          {plant.description}
        </p>
      </div>
    </div>
  );
};

export default PlantDetail;
