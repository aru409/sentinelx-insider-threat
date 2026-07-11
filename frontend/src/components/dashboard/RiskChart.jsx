import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

import { riskData } from "../../data/dashboardData";

const RiskChart = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-5">
      <h2 className="text-xl font-bold mb-4">Weekly Risk Trend</h2>

      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={riskData}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="day" />

          <YAxis />

          <Tooltip />

          <Legend />

          <Line
            type="monotone"
            dataKey="high"
            stroke="#ef4444"
            strokeWidth={3}
          />

          <Line
            type="monotone"
            dataKey="medium"
            stroke="#f59e0b"
            strokeWidth={3}
          />

          <Line
            type="monotone"
            dataKey="low"
            stroke="#22c55e"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RiskChart;