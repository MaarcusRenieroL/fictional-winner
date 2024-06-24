import { ProjectHeader } from "@/components/main/dashboard/projects/project-page/project-header";
import { ProjectNavbar } from "@/components/main/dashboard/projects/project-page/project-navbar";
import { ProjectTeam } from "@/components/main/dashboard/projects/project-page/project-team";
import { Separator } from "@/components/ui/separator";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import {
  getProjectData,
  getTasksByProjectId,
  getProjectsByUserId,
  getTasksByProjectIdAndUserId,
} from "@/lib/helpers";
import { getServerSession } from "next-auth";

export const dynamic = "force-dynamic";

export default async function ProjectPage({
  params,
}: {
  params: { id: string };
}) {
  const projectData = await getProjectData(params.id);

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

  const users = await db.usersProject.findMany({
    where: {
      projectId: projectData.data?.id,
    },
    include: {
      user: true,
    },
  });

  return (
    <div>
      <div className="flex items-center justify-between w-full">
        <ProjectHeader title={projectData.data?.projectName as string} />
        <ProjectTeam
          role={session.user.role ?? ""}
          id={params.id}
          users={users.map((user) => user.user)}
        />
      </div>
      <Separator className="mt-5" />
      <ProjectNavbar
        title={projectData.data?.projectName as string}
        users={users.map((user) => user.user) ?? []}
        session={session}
        id={params.id}
        tasks={tasks ?? []}
        projects={projects.data ?? []}
        userTasks={userTasks ?? []}
      />
    </div>
  );
}
