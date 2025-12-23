"use client";

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { day: "21 Jan", orders: 400, subs: 600 },
  { day: "22 Jan", orders: 600, subs: 500 },
  { day: "23 Jan", orders: 900, subs: 1100 },
  { day: "24 Jan", orders: 500, subs: 450 },
];

export default function RevenueChart() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="font-semibold mb-4">Revenue Trend</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line dataKey="orders" stroke="#3b82f6" />
          <Line dataKey="subs" stroke="#111827" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
