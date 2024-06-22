import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { FC } from "react";
import { Overview } from "./sections/overview";
import { Project, Task } from "@prisma/client";

type Props = {
  tasks: Task[];
  projects: Project[];
};

export const ProjectNavbar: FC<Props> = ({ tasks, projects }) => {
  return (
    <Tabs className="mt-5" defaultValue="overview">
      <TabsList className="w-full">
        <TabsTrigger className="w-full" value="overview">
          Overview
        </TabsTrigger>
        <TabsTrigger className="w-full" value="list">
          List
        </TabsTrigger>
        <TabsTrigger className="w-full" value="board">
          Board
        </TabsTrigger>
        <TabsTrigger className="w-full" value="timeline">
          Timeline
        </TabsTrigger>
        <TabsTrigger className="w-full" value="calendar">
          Calendar
        </TabsTrigger>
        <TabsTrigger className="w-full" value="files">
          Files
        </TabsTrigger>
        <TabsTrigger className="w-full" value="settings">
          Settings
        </TabsTrigger>
      </TabsList>
      <TabsContent className="mt-5" value="overview">
        <Overview tasks={tasks} projects={projects} />
      </TabsContent>
      <TabsContent className="mt-5" value="list">
        List
      </TabsContent>
      <TabsContent className="mt-5" value="board">
        Board
      </TabsContent>
      <TabsContent className="mt-5" value="timeline">
        Timeline
      </TabsContent>
      <TabsContent className="mt-5" value="calendar">
        Calendar
      </TabsContent>
      <TabsContent className="mt-5" value="files">
        Files
      </TabsContent>
      <TabsContent className="mt-5" value="settings">
        Settings
      </TabsContent>
    </Tabs>
  );
};
