"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
} from "recharts";
import type { FC } from "react";

export const TaskGraph: FC = () => {
  const data = [
    { date: "2024-06-01", tasksCompleted: 5 },
    { date: "2024-06-02", tasksCompleted: 10 },
    { date: "2024-06-03", tasksCompleted: 7 },
    { date: "2024-06-04", tasksCompleted: 14 },
    { date: "2024-06-05", tasksCompleted: 12 },
    { date: "2024-06-06", tasksCompleted: 9 },
    { date: "2024-06-07", tasksCompleted: 16 },
  ];
  return (
    <Card className="hover:shadow-xl transition-all duration-500 h-fit">
      <CardHeader>
        <CardTitle>Total tasks done</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="tasksCompleted" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
