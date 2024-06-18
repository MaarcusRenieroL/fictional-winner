import { StatsCard } from "@/components/main/dashboard/home/stats-card";
import { TaskGraph } from "@/components/main/dashboard/home/task-graph";
import { TasksTable } from "@/components/main/dashboard/home/tasks-table";

export default function DashboardPage() {
  return (
    <div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
        <StatsCard title="Total Tasks" count={123} difference={10} />
        <StatsCard title="Completed" count={98} difference={5} />
        <StatsCard title="Overdue" count={12} difference={5} />
      </div>
      <div className="mt-5 grid md:grid-cols-2 grid-cols-1 gap-5">
        <TaskGraph />
        <TasksTable />
      </div>
    </div>
  );
}
