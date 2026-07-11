import { alerts } from "../../data/dashboardData";

const RecentAlerts = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-5">
      <h2 className="text-xl font-bold mb-4">🚨 Recent Alerts</h2>

      <div className="space-y-3">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className="flex justify-between items-center border-b pb-2"
          >
            <div>
              <p className="font-semibold">{alert.user}</p>
              <p className="text-sm text-gray-500">{alert.event}</p>
            </div>

            <span
              className={`px-3 py-1 rounded-full text-white text-sm ${
                alert.severity === "High"
                  ? "bg-red-500"
                  : "bg-yellow-500"
              }`}
            >
              {alert.severity}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentAlerts;