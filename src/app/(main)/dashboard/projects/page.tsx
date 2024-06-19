import { ProjectList } from "@/components/main/dashboard/projects/project-list";
import { Button } from "@/components/ui/button";

export default function ProjectsPage() {
  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-2xl font-bold">Projects</h1>
        <Button>Add new project</Button>
      </div>
      <div className="mt-5">
        <ProjectList />
      </div>
    </div>
  );
}
