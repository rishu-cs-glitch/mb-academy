"use client";

import { PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
  { name: "Subscriptions", value: 863 },
  { name: "Products", value: 625 },
];

const COLORS = ["#3b82f6", "#111827"];

export default function RevenueDonut() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="font-semibold mb-4">Revenue Breakdown</h3>
      <PieChart width={300} height={300}>
        <Pie data={data} innerRadius={80} outerRadius={120} dataKey="value">
          {data.map((_, i) => (
            <Cell key={i} fill={COLORS[i]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}
