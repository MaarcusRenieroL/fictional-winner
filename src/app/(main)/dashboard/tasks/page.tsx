import { AddNewTask } from "@/components/main/dashboard/tasks/add-task-modal";
import { TaskTableShell } from "@/components/main/dashboard/tasks/tasks-shell";
import { authOptions } from "@/lib/auth";
import { getProjectsByUserId } from "@/lib/helpers";
import { server } from "@/lib/trpc/server";
import { getServerSession } from "next-auth";

export const dynamic = "force-dynamic";

export default async function TasksPage() {
  const { data: tasks } = await server.task.getTasks();
  const session = await getServerSession(authOptions);

  if (!session) {
    return;
  }

  const projects = await getProjectsByUserId(session.user.id);

  if (!projects) {
    return;
  }

  return (
    <div>
      <div className="flex items-center justify-between w-full">
        <h1 className="text-2xl font-bold">All tasks</h1>
        <AddNewTask projects={projects.data ?? []} />
      </div>
      <div className="mt-10">
        <TaskTableShell tasks={tasks ?? []} />
      </div>
    </div>
  );
}
