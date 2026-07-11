import { users } from "../../data/dashboardData";

const UserActivity = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-5">
      <h2 className="text-xl font-bold mb-4">
        👥 User Activity
      </h2>

      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left py-2">User</th>
            <th className="text-left py-2">Department</th>
            <th className="text-left py-2">Risk</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="py-3">{user.name}</td>

              <td>{user.department}</td>

              <td>
                <span
                  className={`px-3 py-1 rounded-full text-white text-sm
                  ${
                    user.risk > 80
                      ? "bg-red-500"
                      : user.risk > 50
                      ? "bg-yellow-500"
                      : "bg-green-500"
                  }`}
                >
                  {user.risk}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserActivity;