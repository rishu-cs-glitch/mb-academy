import ActivityList from "@/components/unAuth/dashboard/activityList";
import EngagementChart from "@/components/unAuth/dashboard/EngagementChart";
import EventsList from "@/components/unAuth/dashboard/eventList";
import RevenueChart from "@/components/unAuth/dashboard/revenueChart";
import RevenueDonut from "@/components/unAuth/dashboard/revenueDonut";
import StatCard from "@/components/unAuth/dashboard/starCard";

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <StatCard title="Total Users" value="12474" />
        <StatCard title="Total Products" value="92" />
        <StatCard title="Total Revenue" value="€14900" />
        <StatCard title="Published Courses" value="52" />
        <StatCard title="Channels" value="32" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <EventsList />
        <ActivityList />
      </div>

      <EngagementChart />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <RevenueDonut />
        <RevenueChart />
      </div>
    </div>
  );
}
