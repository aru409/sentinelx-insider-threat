import { FaHome, FaUsers, FaBell, FaFileAlt, FaChartBar, FaCog } from "react-icons/fa";

const Sidebar = () => {
  const menu = [
    { icon: <FaHome />, label: "Dashboard" },
    { icon: <FaUsers />, label: "Users" },
    { icon: <FaBell />, label: "Alerts" },
    { icon: <FaFileAlt />, label: "Activity Logs" },
    { icon: <FaChartBar />, label: "Analytics" },
    { icon: <FaCog />, label: "Settings" },
  ];

  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-6">
      <h1 className="text-2xl font-bold text-cyan-400 mb-8">
        SentinelX
      </h1>

      {menu.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-cyan-600 cursor-pointer transition"
        >
          {item.icon}
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;