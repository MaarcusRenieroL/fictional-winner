import { StatsCard } from "@/components/main/dashboard/home/stats-card";
import { TaskGraph } from "@/components/main/dashboard/home/task-graph";
import { TasksTable } from "@/components/main/dashboard/home/tasks-table";
import { authOptions } from "@/lib/auth";
import { getTasksByUserId } from "@/lib/helpers";
import { getServerSession } from "next-auth";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return;
  }

  const tasks = await getTasksByUserId(session.user.id);
  const completedTasks = tasks?.filter((task) => task.status === "COMPLETED");
  const pendingTasks = tasks?.filter((task) => task.status === "PENDING");

  return (
    <div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
        <StatsCard
          title="Total Tasks"
          count={tasks?.length ?? 0}
          difference={10}
        />
        <StatsCard
          title="Completed"
          count={completedTasks?.length ?? 0}
          difference={5}
        />
        <StatsCard
          title="Overdue"
          count={pendingTasks?.length ?? 0}
          difference={5}
        />
      </div>
      <div className="mt-5 grid xl:grid-cols-2 grid-cols-1 gap-5">
        <TaskGraph />
        <TasksTable tasks={pendingTasks ?? []} />
      </div>
    </div>
  );
}
