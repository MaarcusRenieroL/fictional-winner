import { AddNewProject } from "@/components/main/dashboard/projects/add-project-modal";
import { ProjectList } from "@/components/main/dashboard/projects/project-list";
import { authOptions } from "@/lib/auth";
import { getProjectsByUserId } from "@/lib/helpers";
import { getServerSession } from "next-auth";

export default async function ProjectsPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return;
  }

  const projects = await getProjectsByUserId(session.user.id);

  if (!projects) {
    return;
  }

  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-2xl font-bold">Projects</h1>
        <AddNewProject />
      </div>
      <div className="mt-5">
        <ProjectList data={projects.data} />
      </div>
    </div>
  );
}
