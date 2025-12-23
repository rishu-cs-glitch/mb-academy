import Image from "next/image";

const events = [
  {
    title: "Group Call: Weekly Q&A",
    desc: "Join Coach Emily for a live Q&A session",
    time: "06:00 pm - 07:00 pm April 11, 2025",
    status: "Live",
  },
  {
    title: "Group Call: Weekly Q&A",
    desc: "Join Coach Emily for a live Q&A session",
    time: "06:00 pm - 07:00 pm April 11, 2025",
    status: "Upcoming",
  },
  {
    title: "Group Call: Weekly Q&A",
    desc: "Join Coach Emily for a live Q&A session",
    time: "06:00 pm - 07:00 pm April 11, 2025",
    status: "Upcoming",
  },
];

export default function EventsList() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-5">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-lg">Upcoming Events</h3>
        <button className="text-sm text-blue-600 hover:underline">View all</button>
      </div>

      {/* Event Items */}
      <div className="space-y-4">
        {events.map((event, index) => (
          <div key={index} className="flex items-start gap-4 border-b last:border-none pb-4">
            {/* Avatar */}
            <Image src="/avatar.png" alt="coach" width={48} height={48} className="rounded-full" />

            {/* Content */}
            <div className="flex-1">
              <div className="flex justify-between">
                <h4 className="font-medium">{event.title}</h4>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    event.status === "Live"
                      ? "bg-green-100 text-green-600"
                      : "bg-blue-100 text-blue-600"
                  }`}
                >
                  {event.status}
                </span>
              </div>

              <p className="text-sm text-gray-500">{event.desc}</p>
              <p className="text-xs text-gray-400 mt-1">{event.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
