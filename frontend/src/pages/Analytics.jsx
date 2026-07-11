import MainLayout from "../layouts/MainLayout";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const pieData = [
  { name: "Critical", value: 12 },
  { name: "High", value: 28 },
  { name: "Medium", value: 45 },
  { name: "Low", value: 60 },
];

const barData = [
  { day: "Mon", alerts: 12 },
  { day: "Tue", alerts: 19 },
  { day: "Wed", alerts: 15 },
  { day: "Thu", alerts: 27 },
  { day: "Fri", alerts: 32 },
  { day: "Sat", alerts: 18 },
  { day: "Sun", alerts: 10 },
];

const COLORS = [
  "#ef4444",
  "#f97316",
  "#facc15",
  "#22c55e",
];

const Analytics = () => {
  return (
    <MainLayout>
      <div>

        <h1 className="text-3xl font-bold mb-8">
          Threat Analytics
        </h1>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

          {/* Pie Chart */}

          <div className="bg-white rounded-2xl shadow-xl p-6">

            <h2 className="text-xl font-bold mb-6">
              Threat Distribution
            </h2>

            <ResponsiveContainer width="100%" height={350}>

              <PieChart>

                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={120}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index]}
                    />
                  ))}
                </Pie>

                <Tooltip />

              </PieChart>

            </ResponsiveContainer>

          </div>

          {/* Bar Chart */}

          <div className="bg-white rounded-2xl shadow-xl p-6">

            <h2 className="text-xl font-bold mb-6">
              Weekly Alerts
            </h2>

            <ResponsiveContainer width="100%" height={350}>

              <BarChart data={barData}>

                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="day" />

                <YAxis />

                <Tooltip />

                <Bar
                  dataKey="alerts"
                  fill="#06b6d4"
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>

      </div>
    </MainLayout>
  );
};

export default Analytics;