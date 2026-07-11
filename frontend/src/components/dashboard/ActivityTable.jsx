const ThreatSummary = () => {
  const threats = [
    { title: "Critical", count: 4, color: "text-red-600" },
    { title: "High", count: 12, color: "text-orange-500" },
    { title: "Medium", count: 25, color: "text-yellow-500" },
    { title: "Low", count: 83, color: "text-green-600" },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-5">
      <h2 className="text-xl font-bold mb-4">
        Threat Summary
      </h2>

      <div className="space-y-4">
        {threats.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b pb-2"
          >
            <span>{item.title}</span>

            <span className={`font-bold ${item.color}`}>
              {item.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreatSummary;