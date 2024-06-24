"use client";

import { TaskTableShell } from "@/components/main/dashboard/tasks/tasks-shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import type { FC } from "react";
import type { Project, Task, User } from "@prisma/client";
import { AddNewTask } from "@/components/main/dashboard/tasks/add-task-modal";
import { Session } from "next-auth";

type Props = {
  tasks: Task[];
  projects: Project[];
  userTasks: Task[];
  id: string;
  session: Session;
  users: User[];
};

export const TaskStatus: FC<Props> = ({
  tasks,
  projects,
  userTasks,
  id,
  session,
  users,
}) => {
  return (
    <Card className="hover:shadow-xl transition-all duration-500">
      <CardHeader>
        <div className="w-full flex items-center justify-between">
          <CardTitle>Task Status</CardTitle>
          {session && session.user.role === "ADMIN" && (
            <AddNewTask users={users} id={id} />
          )}
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all-tasks">
          <TabsList>
            <TabsTrigger value="all-tasks">All tasks</TabsTrigger>
            <TabsTrigger value="my-tasks">My tasks</TabsTrigger>
          </TabsList>
          <TabsContent value="all-tasks" className="mt-5">
            <TaskTableShell
              role={session && session.user.role}
              users={users}
              tasks={tasks.filter((task) => task.status !== "COMPLETED") ?? []}
              projects={projects ?? []}
            />
          </TabsContent>
          <TabsContent value="my-tasks" className="mt-5">
            <TaskTableShell
              tasks={
                userTasks.filter(
                  (task) =>
                    task.status !== "COMPLETED" &&
                    session &&
                    task.userId === session.user.id,
                ) ?? []
              }
            />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
