import {
  FaExclamationCircle,
  FaUsb,
  FaSignInAlt,
  FaUserShield,
} from "react-icons/fa";

const incidents = [
  {
    icon: <FaExclamationCircle />,
    title: "Privilege Escalation",
    user: "John Smith",
    time: "2 min ago",
    color: "text-red-500",
  },
  {
    icon: <FaUsb />,
    title: "USB Device Connected",
    user: "Alice",
    time: "5 min ago",
    color: "text-orange-500",
  },
  {
    icon: <FaSignInAlt />,
    title: "Multiple Failed Login",
    user: "Bob",
    time: "9 min ago",
    color: "text-yellow-500",
  },
  {
    icon: <FaUserShield />,
    title: "VPN Login",
    user: "David",
    time: "15 min ago",
    color: "text-green-500",
  },
];

const LiveIncidentFeed = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6">
      <h2 className="text-xl font-bold mb-5">
        🚨 Live Incident Feed
      </h2>

      <div className="space-y-4">
        {incidents.map((incident, index) => (
          <div
            key={index}
            className="flex items-center gap-4 border-b pb-3"
          >
            <div className={`text-2xl ${incident.color}`}>
              {incident.icon}
            </div>

            <div className="flex-1">
              <h3 className="font-semibold">
                {incident.title}
              </h3>

              <p className="text-sm text-gray-500">
                {incident.user}
              </p>
            </div>

            <span className="text-xs text-gray-400">
              {incident.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveIncidentFeed;