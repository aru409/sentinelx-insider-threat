const ThreatSummary = () => {
  const threats = [
    {
      title: "Critical Threats",
      count: 4,
      color: "bg-red-500",
    },
    {
      title: "High Threats",
      count: 12,
      color: "bg-orange-500",
    },
    {
      title: "Medium Threats",
      count: 25,
      color: "bg-yellow-500",
    },
    {
      title: "Low Threats",
      count: 83,
      color: "bg-green-500",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-5">
      <h2 className="text-xl font-bold mb-5">
        Threat Summary
      </h2>

      <div className="space-y-4">
        {threats.map((threat, index) => (
          <div
            key={index}
            className="flex items-center justify-between"
          >
            <span className="font-medium">
              {threat.title}
            </span>

            <span
              className={`${threat.color} text-white px-3 py-1 rounded-full text-sm`}
            >
              {threat.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreatSummary;