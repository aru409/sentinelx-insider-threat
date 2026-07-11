import { FaArrowUp } from "react-icons/fa";

const StatCard = ({
  title,
  value,
  color,
  icon,
  change = "+12%",
}) => {
  return (
    <div
      className={`
        ${color}
        rounded-2xl
        p-6
        text-white
        shadow-xl
        hover:scale-105
        hover:shadow-2xl
        transition-all
        duration-300
      `}
    >
      <div className="flex justify-between items-center">

        <div>

          <h3 className="text-lg font-medium opacity-90">
            {title}
          </h3>

          <h1 className="text-4xl font-bold mt-3">
            {value}
          </h1>

        </div>

        <div className="text-5xl opacity-80">
          {icon}
        </div>

      </div>

      <div className="flex items-center gap-2 mt-6 text-sm">

        <FaArrowUp />

        <span>{change}</span>

        <span className="opacity-80">
          from yesterday
        </span>

      </div>

    </div>
  );
};

export default StatCard;