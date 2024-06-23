import type { FC } from "react";
import { RecentActivity } from "./recent-activity";
import { TaskStatus } from "./task-status";
import type { Project, Task, User } from "@prisma/client";

type Props = {
  tasks: Task[];
  users: User[];
  projects: Project[];
  userTasks: Task[];
  id: string;
  role: string;
};

export const Overview: FC<Props> = ({
  tasks,
  users,
  projects,
  userTasks,
  id,
  role,
}) => {
  return (
    <div className="w-full flex justify-between gap-5">
      <div className="w-3/4 space-y-5">
        <TaskStatus
          users={users}
          role={role}
          tasks={tasks}
          projects={projects}
          userTasks={userTasks}
          id={id}
        />
      </div>
      <div className="w-1/4">
        <RecentActivity />
      </div>
    </div>
  );
};
