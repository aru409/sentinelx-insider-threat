import MainLayout from "../layouts/MainLayout";

const alerts = [
  {
    id: 1,
    user: "John Smith",
    event: "Privilege Escalation",
    severity: "Critical",
    source: "Windows Event Log",
    status: "Open",
    time: "10:15 AM",
  },
  {
    id: 2,
    user: "Alice Brown",
    event: "USB Device Connected",
    severity: "Medium",
    source: "USB Monitor",
    status: "Investigating",
    time: "09:42 AM",
  },
  {
    id: 3,
    user: "David Wilson",
    event: "Multiple Failed Logins",
    severity: "High",
    source: "VPN Gateway",
    status: "Open",
    time: "08:20 AM",
  },
  {
    id: 4,
    user: "Emma Johnson",
    event: "PowerShell Execution",
    severity: "Critical",
    source: "Sysmon",
    status: "Resolved",
    time: "Yesterday",
  },
];

const getSeverityColor = (severity) => {
  switch (severity) {
    case "Critical":
      return "bg-red-600";
    case "High":
      return "bg-orange-500";
    case "Medium":
      return "bg-yellow-500";
    default:
      return "bg-green-500";
  }
};

const getStatusColor = (status) => {
  switch (status) {
    case "Open":
      return "bg-red-500";
    case "Investigating":
      return "bg-blue-500";
    case "Resolved":
      return "bg-green-500";
    default:
      return "bg-gray-500";
  }
};

const Alerts = () => {
  return (
    <MainLayout>
      <div>
        <h1 className="text-3xl font-bold mb-8">
          Security Alerts
        </h1>

        <div className="bg-white rounded-2xl shadow-lg p-6 overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b">

                <th className="text-left py-3">Time</th>
                <th className="text-left">User</th>
                <th className="text-left">Alert</th>
                <th className="text-left">Source</th>
                <th className="text-left">Severity</th>
                <th className="text-left">Status</th>

              </tr>

            </thead>

            <tbody>

              {alerts.map((alert) => (

                <tr
                  key={alert.id}
                  className="border-b hover:bg-gray-50"
                >

                  <td className="py-4">{alert.time}</td>

                  <td>{alert.user}</td>

                  <td>{alert.event}</td>

                  <td>{alert.source}</td>

                  <td>

                    <span
                      className={`${getSeverityColor(
                        alert.severity
                      )} text-white px-3 py-1 rounded-full text-sm`}
                    >
                      {alert.severity}
                    </span>

                  </td>

                  <td>

                    <span
                      className={`${getStatusColor(
                        alert.status
                      )} text-white px-3 py-1 rounded-full text-sm`}
                    >
                      {alert.status}
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

export default Alerts;