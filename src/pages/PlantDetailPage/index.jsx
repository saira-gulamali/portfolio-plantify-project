import React, { useEffect, useState } from "react";
import Navbar from "shared-components/Navbar";
import * as plantService from "services/plants";
import { useParams } from "react-router-dom";
import Spinner from "shared-components/Spinner";
import PlantDetail from "./PlantDetail";

const PlantDetailPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [plant, setplant] = useState(null);
  const { plantId } = useParams();

  useEffect(() => {
    const getPlantDetails = async (id) => {
      const res = await plantService.getPlantDetails(id);
      const data = await res.json();
      setIsLoading(false);
      setplant(data);
    };

    getPlantDetails(plantId);
  }, [plantId]);

  return (
    <div className="h-screen bg-emerald-100">
      <Navbar />

      <main className="  flex justify-center">
        <div className="w-full max-w-5xl border-2 border-red-600 flex justify-center">
          {isLoading && <Spinner />}

          <PlantDetail plant={plant} />
        </div>
      </main>
    </div>
  );
};

export default PlantDetailPage;
