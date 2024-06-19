"use client";

import { TaskTableShell } from "@/components/main/dashboard/tasks/tasks-shell";
import { data } from "@/lib/constants";

export default function TasksPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">All tasks</h1>
      <div className="mt-10">
        <TaskTableShell data={data} />
      </div>
    </div>
  );
}
