const StatCard = ({ title, value, color }) => {
  return (
    <div
      className={`${color} text-white rounded-xl p-6 shadow-lg hover:scale-105 transition duration-300`}
    >
      <h3 className="text-lg font-medium">
        {title}
      </h3>

      <p className="text-4xl font-bold mt-3">
        {value}
      </p>

      <p className="text-sm mt-2 opacity-80">
        Updated just now
      </p>
    </div>
  );
};

export default StatCard;