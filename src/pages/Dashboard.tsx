
import DashboardSidebar from "@/components/DashboardSidebar";
import DashboardHeader from "@/components/DashboardHeader";
import DashboardMetrics from "@/components/DashboardMetrics";
import DashboardCharts from "@/components/DashboardCharts";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-[#f7f8fa]">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col min-h-screen">
        <DashboardHeader />
        <main className="flex-1 p-6 md:p-10 bg-[#f7f8fa]">
          <DashboardMetrics />
          <DashboardCharts />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
