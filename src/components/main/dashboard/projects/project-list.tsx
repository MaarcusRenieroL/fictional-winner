import type { FC } from "react";
import { ProjectCard } from "./project-card";
import type { Project, Task } from "@prisma/client";

type Props = {
  data: Project[];
  tasks: Task[];
};

export const ProjectList: FC<Props> = ({ data, tasks }) => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
      {data.map((project) => (
        <ProjectCard
          id={project.id}
          key={project.projectName}
          title={project.projectName}
          description={project.description}
          scheduledTaskCount={
            tasks.filter(
              (task) =>
                task.projectId === project.id && task.status === "NOT_STARTED",
            ).length
          }
          ongoingTaskCount={
            tasks.filter(
              (task) =>
                task.projectId === project.id && task.status === "IN_PROGRESS",
            ).length
          }
          completedTaskCount={
            tasks.filter(
              (task) =>
                task.projectId === project.id && task.status === "COMPLETED",
            ).length
          }
          teamMembers={[]}
        />
      ))}
    </div>
  );
};
