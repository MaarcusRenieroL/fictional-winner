"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TaskTableShell } from "../tasks/tasks-shell";
import type { FC } from "react";
import type { Task } from "@prisma/client";

type Props = {
  tasks: Task[]
}

export const TasksTable: FC<Props> = ({ tasks }) => {
  return (
    <Card className="hover:shadow-xl transition-all duration-500">
      <CardHeader>
        <CardTitle>Pending Tasks</CardTitle>
      </CardHeader>
      <CardContent>
        <TaskTableShell tasks={tasks ?? []} />
      </CardContent>
    </Card>
  );
};
