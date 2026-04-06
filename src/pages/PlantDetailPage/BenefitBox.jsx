import clsx from "clsx";

const BenefitBox = (props) => {
  const { icon, title, description } = props;
  return (
    <div className="text-center flex-1 mx-2">
      <i className={clsx("text-green-600 text-3xl", icon)}></i>
      <h3 className="text-slate-600 ">{title}</h3>
      <p className="text-slate-500 ">{description}</p>
    </div>
  );
};

export default BenefitBox;
