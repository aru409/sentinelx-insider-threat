import {
  FaUsers,
  FaExclamationTriangle,
  FaBell,
  FaUserShield,
} from "react-icons/fa";

import MainLayout from "../layouts/MainLayout";
import StatCard from "../components/dashboard/StatCard";
import RiskChart from "../components/dashboard/RiskChart";
import RecentAlerts from "../components/dashboard/RecentAlerts";
import UserActivity from "../components/dashboard/UserActivity";
import ThreatSummary from "../components/dashboard/ThreatSummary";
import LiveIncidentFeed from "../components/dashboard/LiveIncidentFeed";
import AIRiskScore from "../components/dashboard/AIRiskScore";

const Dashboard = () => {
  return (
    <MainLayout>
      <div>
        <h1 className="text-3xl font-bold mb-8">
          Insider Threat Dashboard
        </h1>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <StatCard
            title="Total Users"
            value="250"
            color="bg-gradient-to-r from-blue-600 to-cyan-500"
            icon={<FaUsers />}
            change="+8%"
          />

          <StatCard
            title="High Risk"
            value="15"
            color="bg-gradient-to-r from-red-600 to-red-400"
            icon={<FaExclamationTriangle />}
            change="+2%"
          />

          <StatCard
            title="Alerts"
            value="27"
            color="bg-gradient-to-r from-yellow-500 to-orange-400"
            icon={<FaBell />}
            change="+5%"
          />

          <StatCard
            title="Active Sessions"
            value="48"
            color="bg-gradient-to-r from-green-600 to-emerald-400"
            icon={<FaUserShield />}
            change="+12%"
          />
        </div>

        {/* Risk Chart + Alerts */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">
          <div className="xl:col-span-2">
            <RiskChart />
          </div>

          <RecentAlerts />
        </div>

        {/* User Activity + Threat Summary */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">
          <div className="xl:col-span-2">
            <UserActivity />
          </div>

          <ThreatSummary />
        </div>

        {/* AI Panel + Live Feed */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">
          <AIRiskScore />
          <LiveIncidentFeed />
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;