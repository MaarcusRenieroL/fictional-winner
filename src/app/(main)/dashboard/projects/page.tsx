import { AddNewProject } from "@/components/main/dashboard/projects/add-project-modal";
import { ProjectList } from "@/components/main/dashboard/projects/project-list";
import { getServerAuthSession } from "@/lib/auth";
import { getProjectData, getProjectsByUserId } from "@/lib/helpers";

export default async function ProjectsPage() {
  const session = await getServerAuthSession();
  const assignedProjects = await getProjectsByUserId(session?.user.id ?? "");

  const projects = [];

  if (assignedProjects) {
    for (const p of assignedProjects) {
      const project = await getProjectData(p.projectId);

      if (!project) {
        return;
      }

      projects.push(project.data);
    }
  }

  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-2xl font-bold">Projects</h1>
        <AddNewProject />
      </div>
      <div className="mt-5">
        {/* @ts-ignore */}
        <ProjectList data={projects ?? []} />
      </div>
    </div>
  );
}
