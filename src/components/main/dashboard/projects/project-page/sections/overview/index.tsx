import type { FC } from "react";
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
    <TaskStatus
      users={users}
      role={role}
      tasks={tasks}
      projects={projects}
      userTasks={userTasks}
      id={id}
    />
  );
};
