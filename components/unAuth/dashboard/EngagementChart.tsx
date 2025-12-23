"use client";

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { day: "21 Jan", users: 400, enrollments: 300 },
  { day: "22 Jan", users: 600, enrollments: 500 },
  { day: "23 Jan", users: 300, enrollments: 200 },
  { day: "24 Jan", users: 700, enrollments: 600 },
  { day: "25 Jan", users: 500, enrollments: 400 },
];

export default function EngagementChart() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="font-semibold mb-4">Engagement & Activities</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="users" stroke="#3b82f6" />
          <Line type="monotone" dataKey="enrollments" stroke="#10b981" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
