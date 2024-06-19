"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TaskTableShell } from "../tasks/tasks-shell";
import { data } from "@/lib/constants";
import { FC } from "react";

export const TasksTable: FC = () => {
  return (
    <Card className="hover:shadow-xl transition-all duration-500">
      <CardHeader>
        <CardTitle>Pending Tasks</CardTitle>
      </CardHeader>
      <CardContent>
        <TaskTableShell data={data} />
      </CardContent>
    </Card>
  );
};
