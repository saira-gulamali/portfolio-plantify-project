import BenefitBox from "./BenefitBox";
import PlantHeader from "./PlantHeader";
import PlantPurchaseOptions from "./PlantPurchaseOptions";

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
        <div className="flex m-8">
          <BenefitBox
            icon="far fa-check-circle"
            title="Guaranteed Healthy"
            description="Guaranteed to arrive healthy or your money back"
          />
          <div className="w-px bg-slate-300 mt-2"></div>
          <BenefitBox
            icon="fa-solid fa-truck-fast"
            title="Guaranteed Healthy"
            description="Guaranteed to arrive healthy or your money back"
          />
        </div>
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
        <PlantPurchaseOptions plant={plant} />
      </div>
    </div>
  );
};

export default PlantDetail;
