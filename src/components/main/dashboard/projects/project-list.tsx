import { PROJECT_LIST } from "@/lib/constants";
import { FC } from "react";
import { ProjectCard } from "./project-card";

export const ProjectList: FC = () => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5">
      {PROJECT_LIST.map((project) => (
        <ProjectCard
          key={project.title}
          title={project.title}
          description={project.description}
          scheduledTaskCount={project.scheduledTaskCount}
          ongoingTaskCount={project.ongoingTaskCount}
          completedTaskCount={project.completedTaskCount}
          teamMembers={project.teamMembers}
        />
      ))}
    </div>
  );
};
