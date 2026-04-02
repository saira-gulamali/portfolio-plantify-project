import React from "react";

const PlantHeader = (props) => {
  const { plant } = props;

  return (
    <>
      <div className="flex items-center text-2xl font-primary  text-emerald-600 justify-between">
        <h1 className="">{plant.name}</h1>
        <div>${plant.price}</div>
      </div>
      <h2 className="text-slate-600 italic text-sm ">{plant.botanical_name}</h2>
    </>
  );
};

export default PlantHeader;
