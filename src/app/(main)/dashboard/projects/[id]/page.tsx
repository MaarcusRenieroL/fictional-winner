"use client";

import { ProjectHeader } from "@/components/main/dashboard/projects/project-page/project-header";
import { ProjectNavbar } from "@/components/main/dashboard/projects/project-page/project-navbar";
import { ProjectTeam } from "@/components/main/dashboard/projects/project-page/project-team";
import { Separator } from "@/components/ui/separator";
import { useParams } from "next/navigation";

export default function ProjectPage() {
  return (
    <div>
      <ProjectHeader number={Number(useParams().id) - 1} />
      <ProjectTeam id={Number(useParams().id) - 1} />
      <Separator className="mt-5" />
      <ProjectNavbar />
    </div>
  );
}
