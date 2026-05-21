import { useEffect, useState } from "react";
import * as PlantsService from "services/plants";
import Navbar from "shared-components/Navbar";
import Spinner from "shared-components/Spinner";
import PlantItem from "./PlantItem";
import { motion } from "motion/react";

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
    <div className="bg-emerald-100">
      <Navbar />
      <h1 className="text-3xl font-primary font-bold text-emerald-700 m-8">
        Plants In Stock
      </h1>
      <div className="flex justify-center min-h-screen">
        {isLoading && <Spinner />}
        <div className="flex justify-center items-center flex-wrap gap-6 max-w-5xl ">
          {plants.map((plant, index) => (
            //  0 index % 3 = 0 * 0.3 = 0
            //  1 index % 3 = 1 * 0.3 = 0.3
            //  2 index % 3 = 2 * 0.3 = 0.6
            //  3 index % 3 = 0 * 0.3 = 0
            //  4 index % 3 = 1 * 0.3 = 0.3
            //  5 index % 3 = 2 * 0.3 = 0.6
            //  6 index % 3 = 0 * 0.3
            //  7 index % 3 = 1 * 0.3
            //  8 index % 3 = 2 * 0.3

            <motion.div
              key={plant.id}
              initial={{ opacity: 0, translateY: "100px" }}
              whileInView={{ opacity: 1, translateY: "0" }}
              viewport={{ once: true }}
              transition={{ delay: (index % 3) * 0.2, duration: 0.4 }}
            >
              <PlantItem plant={plant} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlantsListPage;
