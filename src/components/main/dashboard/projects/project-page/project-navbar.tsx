import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import type { FC } from "react";
import { Overview } from "./sections/overview";
import type { Project, Task, User } from "@prisma/client";
import { Session } from "next-auth";
import { Settings } from "./sections/settings";

type Props = {
  tasks: Task[];
  projects: Project[];
  userTasks: Task[];
  id: string;
  session: Session;
  users: User[];
  title: string;
};

export const ProjectNavbar: FC<Props> = ({
  tasks,
  title,
  projects,
  userTasks,
  id,
  users,
  session,
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
          session={session}
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
        <Settings title={title} id={id} users={users} session={session} />
      </TabsContent>
    </Tabs>
  );
};
