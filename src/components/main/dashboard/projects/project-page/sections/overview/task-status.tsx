"use client";

import { TaskTableShell } from "@/components/main/dashboard/tasks/tasks-shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import type { FC } from "react";
import type { Project, Task } from "@prisma/client";

type Props = {
  tasks: Task[];
  projects: Project[];
  userTasks: Task[];
};

export const TaskStatus: FC<Props> = ({ tasks, projects, userTasks }) => {
  return (
    <Card className="hover:shadow-xl transition-all duration-500">
      <CardHeader>
        <CardTitle>Task Status</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all-tasks">
          <TabsList>
            <TabsTrigger value="all-tasks">All tasks</TabsTrigger>
            <TabsTrigger value="my-tasks">My tasks</TabsTrigger>
          </TabsList>
          <TabsContent value="all-tasks" className="mt-5">
            <TaskTableShell tasks={tasks ?? []} projects={projects ?? []} />
          </TabsContent>
          <TabsContent value="my-tasks" className="mt-5">
            <TaskTableShell tasks={userTasks ?? []} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
