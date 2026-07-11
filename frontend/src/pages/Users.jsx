import MainLayout from "../layouts/MainLayout";

const users = [
  {
    id: 1,
    name: "John Smith",
    department: "Finance",
    risk: 91,
    status: "High",
  },
  {
    id: 2,
    name: "Alice Brown",
    department: "HR",
    risk: 64,
    status: "Medium",
  },
  {
    id: 3,
    name: "David Wilson",
    department: "IT",
    risk: 24,
    status: "Low",
  },
  {
    id: 4,
    name: "Emma Johnson",
    department: "Admin",
    risk: 82,
    status: "High",
  },
];

const Users = () => {
  return (
    <MainLayout>
      <div>

        <h1 className="text-3xl font-bold mb-8">
          Users Management
        </h1>

        <div className="bg-white rounded-2xl shadow-lg p-6">

          <table className="w-full">

            <thead>

              <tr className="border-b">

                <th className="text-left py-3">Employee</th>

                <th className="text-left">Department</th>

                <th className="text-left">Risk Score</th>

                <th className="text-left">Status</th>

              </tr>

            </thead>

            <tbody>

              {users.map((user) => (

                <tr
                  key={user.id}
                  className="border-b hover:bg-gray-50"
                >

                  <td className="py-4">
                    {user.name}
                  </td>

                  <td>{user.department}</td>

                  <td>{user.risk}</td>

                  <td>

                    <span
                      className={`px-3 py-1 rounded-full text-white
                      ${
                        user.status === "High"
                          ? "bg-red-500"
                          : user.status === "Medium"
                          ? "bg-yellow-500"
                          : "bg-green-500"
                      }`}
                    >
                      {user.status}
                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>
    </MainLayout>
  );
};

export default Users;