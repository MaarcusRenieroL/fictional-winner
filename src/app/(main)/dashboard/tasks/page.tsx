import { AddNewTask } from "@/components/main/dashboard/tasks/add-task-modal";
import { TaskTableShell } from "@/components/main/dashboard/tasks/tasks-shell";
import { server } from "@/lib/trpc/server";

export const dynamic = "force-dynamic";

export default async function TasksPage() {
  const { data: tasks } = await server.task.getTasks();
  return (
    <div>
      <div className="flex items-center justify-between w-full">
        <h1 className="text-2xl font-bold">All tasks</h1>
        <AddNewTask />
      </div>
      <div className="mt-10">
        <TaskTableShell data={tasks} />
      </div>
    </div>
  );
}
