import { User, ShoppingCart, GraduationCap, AlertCircle } from "lucide-react";

const activities = [
  {
    icon: <ShoppingCart size={18} />,
    title: "New order placed by Sarah Johnson",
    subtitle: "Premium Course Bundle - $299",
    time: "2 minutes ago",
  },
  {
    icon: <User size={18} />,
    title: "New user registration",
    subtitle: "michael.chen@mail.com",
    time: "5 minutes ago",
  },
  {
    icon: <GraduationCap size={18} />,
    title: "Course enrollment",
    subtitle: "Emma Wilson enrolled",
    time: "18 minutes ago",
  },
  {
    icon: <AlertCircle size={18} />,
    title: "New report submitted",
    subtitle: "Spam content in #announcements",
    time: "12 minutes ago",
  },
];

export default function ActivityList() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-5">
      <h3 className="font-semibold text-lg mb-4">Recent Activities</h3>

      <div className="space-y-4 max-h-[420px] overflow-y-auto pr-2">
        {activities.map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            {/* Icon */}
            <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
              {item.icon}
            </div>

            {/* Content */}
            <div className="flex-1">
              <p className="text-sm font-medium">{item.title}</p>
              <p className="text-xs text-gray-500">{item.subtitle}</p>
            </div>

            {/* Time */}
            <span className="text-xs text-gray-400 whitespace-nowrap">{item.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
