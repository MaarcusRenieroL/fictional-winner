"use client";

import { AddNewTask } from "@/components/main/dashboard/tasks/add-task-modal";
import { TaskTableShell } from "@/components/main/dashboard/tasks/tasks-shell";
import { data } from "@/lib/constants";

export default function TasksPage() {
  return (
    <div>
      <div className="flex items-center justify-between w-full">
        <h1 className="text-2xl font-bold">All tasks</h1>

        <AddNewTask />
      </div>
      <div className="mt-10">
        <TaskTableShell data={data} />
      </div>
    </div>
  );
}
