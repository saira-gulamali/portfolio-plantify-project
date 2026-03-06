import { useEffect } from "react";
import * as PlantsService from "services/plants";
import Navbar from "shared-components/Navbar";

const PlantsListPage = () => {
  useEffect(() => {
    const getPlants = async () => {
      const response = await PlantsService.getPlants();
      const data = await response.json();
      console.log(data);
    };
    getPlants();
  }, []);

  return (
    <div>
      <Navbar />
    </div>
  );
};

export default PlantsListPage;
