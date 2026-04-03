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
      try {
        setIsLoading(true);
        const res = await plantService.getPlantDetails(id);
        const data = await res.json();
        setplant(data);

        if (!res.ok) {
          console.log("api call failed!");
        }
      } catch (error) {
        console.log("network error");
        console.log({ error });
      } finally {
        setIsLoading(false);
      }
    };

    getPlantDetails(plantId);
  }, [plantId]);

  if (isLoading) {
    return (
      <div className="h-screen bg-emerald-100 ">
        <Navbar />
        <main className="  flex justify-center">
          <div className="w-full max-w-5xl border-2 border-red-600 flex justify-center">
            <Spinner />
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="h-screen bg-emerald-100">
      <Navbar />

      <main className="  flex justify-center">
        <div className="w-full max-w-5xl border-2 border-red-600 flex justify-center">
          <PlantDetail plant={plant} />
        </div>
      </main>
    </div>
  );
};

export default PlantDetailPage;
