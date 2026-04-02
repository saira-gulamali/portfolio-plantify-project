import React, { useEffect, useState } from "react";
import Navbar from "shared-components/Navbar";
import * as plantService from "services/plants";
import { useParams } from "react-router-dom";

const PlantDetailPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { plantId } = useParams();

  useEffect(() => {
    const getPlantDetails = async (id) => {
      setIsLoading(true);
      const res = await plantService.getPlantDetails(id);
      const data = await res.json();
      setIsLoading(false);
      console.log({ data });
    };

    getPlantDetails(plantId);
  }, [plantId]);

  return (
    <div>
      <Navbar />

      <main className="bg-emerald-100 min-h-screen flex justify-center">
        <div className="w-full max-w-5xl border-2 border-red-600"></div>
      </main>
    </div>
  );
};

export default PlantDetailPage;
