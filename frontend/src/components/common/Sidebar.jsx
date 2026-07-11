import {
  FaHome,
  FaUsers,
  FaBell,
  FaFileAlt,
  FaChartBar,
  FaCog,
  FaShieldAlt,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menu = [
    { icon: <FaHome />, title: "Dashboard", path: "/" },
    { icon: <FaUsers />, title: "Users", path: "/users" },
    { icon: <FaBell />, title: "Alerts", path: "/alerts" },
    { icon: <FaFileAlt />, title: "Activity Logs", path: "/activity-logs" },
    { icon: <FaChartBar />, title: "Analytics", path: "/analytics" },
    { icon: <FaCog />, title: "Settings", path: "/settings" },
  ];

  return (
    <aside className="w-72 min-h-screen bg-slate-900 text-white">

      <div className="p-8 border-b border-slate-700">
        <div className="flex items-center gap-3">
          <FaShieldAlt size={35} className="text-cyan-400" />

          <div>
            <h1 className="text-2xl font-bold">
              SentinelX
            </h1>

            <p className="text-xs text-gray-400">
              Insider Threat Detection
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 px-4">

        {menu.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 p-4 rounded-xl mb-2 transition ${
                isActive
                  ? "bg-cyan-500"
                  : "hover:bg-slate-700"
              }`
            }
          >
            {item.icon}

            <span>{item.title}</span>

          </NavLink>
        ))}

      </div>

    </aside>
  );
};

export default Sidebar;