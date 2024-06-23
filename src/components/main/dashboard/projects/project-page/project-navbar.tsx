import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import type { FC } from "react";
import { Overview } from "./sections/overview";
import type { Project, Task, User } from "@prisma/client";

type Props = {
  tasks: Task[];
  projects: Project[];
  userTasks: Task[];
  id: string;
  role: string;
  users: User[];
};

export const ProjectNavbar: FC<Props> = ({
  tasks,
  projects,
  userTasks,
  id,
  users,
  role,
}) => {
  return (
    <Tabs className="mt-5" defaultValue="overview">
      <TabsList className="w-full">
        <TabsTrigger className="w-full" value="overview">
          Overview
        </TabsTrigger>
        <TabsTrigger className="w-full" value="board">
          Board
        </TabsTrigger>
        <TabsTrigger className="w-full" value="settings">
          Settings
        </TabsTrigger>
      </TabsList>
      <TabsContent className="mt-5" value="overview">
        <Overview
          users={users}
          role={role}
          id={id}
          tasks={tasks}
          projects={projects}
          userTasks={userTasks}
        />
      </TabsContent>
      <TabsContent className="mt-5" value="board">
        Board
      </TabsContent>
      <TabsContent className="mt-5" value="settings">
        Settings
      </TabsContent>
    </Tabs>
  );
};
