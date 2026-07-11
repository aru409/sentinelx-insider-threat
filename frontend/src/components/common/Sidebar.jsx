import {
  FaHome,
  FaUsers,
  FaBell,
  FaFileAlt,
  FaChartBar,
  FaCog,
  FaShieldAlt,
} from "react-icons/fa";

const Sidebar = () => {
  const menu = [
    { icon: <FaHome />, title: "Dashboard" },
    { icon: <FaUsers />, title: "Users" },
    { icon: <FaBell />, title: "Alerts" },
    { icon: <FaFileAlt />, title: "Activity Logs" },
    { icon: <FaChartBar />, title: "Analytics" },
    { icon: <FaCog />, title: "Settings" },
  ];

  return (
    <aside className="w-72 min-h-screen bg-slate-900 text-white shadow-xl">

      {/* Logo */}
      <div className="p-8 border-b border-slate-700">

        <div className="flex items-center gap-3">

          <FaShieldAlt
            size={35}
            className="text-cyan-400"
          />

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

      {/* Menu */}

      <div className="mt-6 px-4">

        {menu.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-4 rounded-xl cursor-pointer
            hover:bg-cyan-500 hover:text-white transition duration-300
            mb-2"
          >
            {item.icon}

            <span className="font-medium">
              {item.title}
            </span>

          </div>
        ))}

      </div>

    </aside>
  );
};

export default Sidebar;