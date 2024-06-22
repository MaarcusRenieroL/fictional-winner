import { FC } from "react";
import { RecentActivity } from "./recent-activity";
import { TaskStatus } from "./task-status";
import { Project, Task } from "@prisma/client";

type Props = {
  tasks: Task[];
  projects: Project[];
  userTasks: Task[];
};

export const Overview: FC<Props> = ({ tasks, projects, userTasks }) => {
  return (
    <div className="w-full flex justify-between gap-5">
      <div className="w-3/4 space-y-5">
        <TaskStatus tasks={tasks} projects={projects} userTasks={userTasks} />
      </div>
      <div className="w-1/4">
        <RecentActivity />
      </div>
    </div>
  );
};
