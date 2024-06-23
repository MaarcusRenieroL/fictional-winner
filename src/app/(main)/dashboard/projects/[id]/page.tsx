import { ProjectHeader } from "@/components/main/dashboard/projects/project-page/project-header";
import { ProjectNavbar } from "@/components/main/dashboard/projects/project-page/project-navbar";
import { ProjectTeam } from "@/components/main/dashboard/projects/project-page/project-team";
import { Separator } from "@/components/ui/separator";
import { authOptions } from "@/lib/auth";
import {
  getProjectData,
  getTasksByProjectId,
  getProjectsByUserId,
  getTasksByProjectIdAndUserId,
} from "@/lib/helpers";
import { getServerSession } from "next-auth";
import { headers } from "next/headers";

export default async function ProjectPage() {
  const headersList = headers();
  const pathname = (headersList.get("X-Pathname") ?? "").split("/");
  const projectData = await getProjectData(pathname[pathname.length - 1]);

  if (!projectData) {
    return;
  }

  const session = await getServerSession(authOptions);

  if (!session) {
    return;
  }

  const projects = await getProjectsByUserId(session.user.id);

  if (!projects) {
    return;
  }

  const tasks = await getTasksByProjectId(projectData.data?.id ?? "");

  const userTasks = await getTasksByProjectIdAndUserId(
    session.user.id,
    projectData.data?.id ?? "",
  );

  return (
    <div>
      <ProjectHeader title={projectData.data?.projectName as string} />
      <ProjectTeam id={1} />
      <Separator className="mt-5" />
      <ProjectNavbar
        tasks={tasks ?? []}
        projects={projects.data ?? []}
        userTasks={userTasks ?? []}
      />
    </div>
  );
}
