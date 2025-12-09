import DashboardHeader from "./header";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#F8F7F2] p-6">
      <DashboardHeader />

      <div className="mt-8 p-6 bg-white rounded-xl shadow-md">
        <h2 className="text-lg font-semibold text-[#0F1828]">Your Dashboard 👇</h2>
        <p className="text-sm text-neutral-600 mt-2">Show your courses, stats and more.</p>
      </div>
    </div>
  );
}
