import { useEffect, useState } from "react";
import * as PlantsService from "services/plants";
import Navbar from "shared-components/Navbar";
import PlantItem from "./PlantItem";

const PlantsListPage = () => {
  const [plants, setPlants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getPlants = async () => {
      setIsLoading(true);
      const response = await PlantsService.getPlants();
      const data = await response.json();
      setPlants(data);
      setIsLoading(false);
      // console.log(data);
    };
    getPlants();
  }, []);

  return (
    <div>
      <Navbar />
      <h1 className="text-3xl font-primary font-bold text-emerald-700 m-8">
        Plants In Stock
      </h1>
      <div className="flex justify-center items-center min-h-screen">
        {isLoading && (
          <i className="fa-solid fa-spinner animate-spin text-3xl text-emerald-700 mt-48"></i>
        )}{" "}
        <div className="flex  justify-center items-center flex-wrap gap-6 max-w-5xl ">
          {plants.map((plant) => (
            <div key={plant.id}>
              <PlantItem plant={plant} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlantsListPage;
