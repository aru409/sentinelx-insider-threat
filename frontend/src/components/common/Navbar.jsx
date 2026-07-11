import {
  FaBell,
  FaSearch,
  FaUserCircle,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-white shadow-md px-8 py-5 flex justify-between items-center">

      <div>

        <h2 className="text-3xl font-bold text-slate-800">
          Security Operations Center
        </h2>

        <p className="text-gray-500">
          Monitor insider activities in real time
        </p>

      </div>

      <div className="flex items-center gap-6">

        <div className="flex items-center bg-slate-100 rounded-lg px-4 py-2">

          <FaSearch className="text-gray-500" />

          <input
            className="bg-transparent outline-none ml-2"
            placeholder="Search..."
          />

        </div>

        <div className="relative">

          <FaBell
            size={22}
            className="cursor-pointer"
          />

          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            5
          </span>

        </div>

        <div className="flex items-center gap-2">

          <FaUserCircle
            size={40}
            className="text-cyan-600"
          />

          <div>

            <p className="font-semibold">
              Admin
            </p>

            <small className="text-gray-500">
              Security Analyst
            </small>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Navbar;