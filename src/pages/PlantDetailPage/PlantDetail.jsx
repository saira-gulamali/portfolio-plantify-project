import React from "react";

const PlantDetail = (props) => {
  const { plant } = props;
  console.log({ plant });
  return (
    <div className="flex pt-8 p-4">
      <div className="flex-1">
        <img className="rounded-lg" src={plant?.images[0]?.src} />
      </div>
      <div className="flex-1 p-2 font-secondary ml-4">
        <h1 className="font-primary text-3xl text-emerald-600">{plant.name}</h1>
        <h2 className="text-slate-600 italic text-sm ">
          {plant.botanical_name}
        </h2>
        <p className="leading-relaxed mt-4 text-slate-600">
          {plant.description}
        </p>
      </div>
    </div>
  );
};

export default PlantDetail;
