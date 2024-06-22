import { ProjectHeader } from "@/components/main/dashboard/projects/project-page/project-header";
import { ProjectNavbar } from "@/components/main/dashboard/projects/project-page/project-navbar";
import { ProjectTeam } from "@/components/main/dashboard/projects/project-page/project-team";
import { Separator } from "@/components/ui/separator";
import { getProjectData } from "@/lib/helpers";
import { headers } from "next/headers";

export default async function ProjectPage() {
  const headersList = headers();
  const pathname = (headersList.get("X-Pathname") ?? "").split("/");
  const projectData = await getProjectData(pathname[pathname.length - 1]);

  if (!projectData) {
    return;
  }

  return (
    <div>
      <ProjectHeader title={projectData.data?.projectName as string} />
      <ProjectTeam id={1} />
      <Separator className="mt-5" />
      <ProjectNavbar />
    </div>
  );
}
