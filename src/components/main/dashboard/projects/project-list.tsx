import { FC } from "react";
import { ProjectCard } from "./project-card";
import { Project } from "@prisma/client";

type Props = {
  data: Project[];
};

export const ProjectList: FC<Props> = ({ data }) => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5">
      {data.map((project) => (
        <ProjectCard
          id={project.id}
          key={project.projectName}
          title={project.projectName}
          description={project.description}
          scheduledTaskCount={0}
          ongoingTaskCount={0}
          completedTaskCount={0}
          teamMembers={[]}
        />
      ))}
    </div>
  );
};
