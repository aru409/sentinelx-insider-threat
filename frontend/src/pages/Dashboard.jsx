import MainLayout from "../layouts/MainLayout";
import StatCard from "../components/dashboard/StatCard";
import RiskChart from "../components/dashboard/RiskChart";
import RecentAlerts from "../components/dashboard/RecentAlerts";
import UserActivity from "../components/dashboard/UserActivity";
import ThreatSummary from "../components/dashboard/ThreatSummary";

const Dashboard = () => {
  return (
    <MainLayout>
      <div>
        <h1 className="text-3xl font-bold mb-6">
          Insider Threat Dashboard
        </h1>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <StatCard title="Total Users" value="250" color="bg-blue-600" />
          <StatCard title="High Risk" value="15" color="bg-red-600" />
          <StatCard title="Alerts" value="27" color="bg-yellow-500" />
          <StatCard title="Active Sessions" value="48" color="bg-green-600" />
        </div>

        {/* Risk Chart + Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          <div className="lg:col-span-2">
            <RiskChart />
          </div>

          <RecentAlerts />
        </div>

        {/* User Activity + Threat Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          <div className="lg:col-span-2">
            <UserActivity />
          </div>

          <ThreatSummary />
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;