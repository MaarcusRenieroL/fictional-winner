import { AddNewProject } from "@/components/main/dashboard/projects/add-project-modal";
import { ProjectList } from "@/components/main/dashboard/projects/project-list";
import { server } from "@/lib/trpc/server";

export default async function ProjectsPage() {
  const { data: projects } = await server.project.getProjects();
  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-2xl font-bold">Projects</h1>
        <AddNewProject />
      </div>
      <div className="mt-5">
        <ProjectList data={projects} />
      </div>
    </div>
  );
}
