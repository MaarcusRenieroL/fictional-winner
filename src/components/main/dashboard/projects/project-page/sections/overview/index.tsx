import type { FC } from "react";
import { TaskStatus } from "./task-status";
import type { Project, Task, User } from "@prisma/client";
import { Session } from "next-auth";

type Props = {
  tasks: Task[];
  users: User[];
  projects: Project[];
  userTasks: Task[];
  id: string;
  session: Session;
};

export const Overview: FC<Props> = ({
  tasks,
  users,
  projects,
  userTasks,
  id,
  session,
}) => {
  return (
    <TaskStatus
      users={users}
      session={session}
      tasks={tasks}
      projects={projects}
      userTasks={userTasks}
      id={id}
    />
  );
};
