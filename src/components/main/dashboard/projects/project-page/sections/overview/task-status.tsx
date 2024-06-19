import { TaskTableShell } from "@/components/main/dashboard/tasks/tasks-shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MY_TASKS, data } from "@/lib/constants";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { Edit, Trash } from "lucide-react";
import React, { FC, useMemo } from "react";
import { Tasks } from "@/lib/types";
import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header";
import { CustomDeleteAlertDailog } from "@/components/custom-delete-alert-dialog";
import { DataTable } from "@/components/data-table";
import { useModal } from "@/components/providers/modal-provider";

export const TaskStatus: FC = () => {
  const { setOpen } = useModal();
  const TasksColumnDef = useMemo<ColumnDef<Tasks>[]>(
    () => [
      {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={table.getIsAllPageRowsSelected()}
            onCheckedChange={(value) =>
              table.toggleAllPageRowsSelected(!!value)
            }
            aria-label="Select all"
            className="translate-y-[2px]"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
            className="translate-y-[2px]"
          />
        ),
        enableSorting: false,
        enableHiding: false,
      },
      {
        id: "title",
        header: ({ column }) => (
          <div>
            <DataTableColumnHeader column={column} title="Title" />
          </div>
        ),
        cell: ({ row }) => (
          <div className="min-w-max mr-auto">{row.getValue("title")}</div>
        ),
        accessorKey: "title",
        enableSorting: true,
        enableHiding: true,
      },
      {
        id: "status",
        header: ({ column }) => (
          <div>
            <DataTableColumnHeader column={column} title="Status" />
          </div>
        ),
        cell: ({ row }) => (
          <div className="min-w-max">{row.getValue("status")}</div>
        ),
        accessorKey: "status",
        enableSorting: true,
        enableHiding: true,
      },
      {
        id: "priority",
        header: ({ column }) => (
          <div>
            <DataTableColumnHeader column={column} title="Priority" />
          </div>
        ),
        cell: ({ row }) => (
          <div className="min-w-max">{row.getValue("priority")}</div>
        ),
        accessorKey: "priority",
        enableSorting: true,
        enableHiding: true,
      },
      {
        id: "dueDate",
        header: ({ column }) => (
          <div>
            <DataTableColumnHeader column={column} title="Due Date" />
          </div>
        ),
        cell: ({ row }) => (
          <div className="min-w-max">{row.getValue("dueDate")}</div>
        ),
        accessorKey: "dueDate",
        enableSorting: true,
        enableHiding: true,
      },
      {
        id: "actions",
        header: () => (
          <div className="flex min-w-max items-center justify-center">
            Actions
          </div>
        ),
        cell: ({ row }) => (
          <div className="flex items-center justify-evenly min-w-max space-x-5">
            <Button size="icon">
              <Edit className="h-4 w-4" />
            </Button>
            <Button
              variant="destructive"
              size="icon"
              onClick={() => {
                setOpen(
                  <CustomDeleteAlertDailog
                    title="Are you absolutely sure?"
                    description="This action cannot be undone. This will permanently delete your post and remove your data from our servers"
                    onDelete={() => {}}
                    isDeleting={false}
                    actionText="Delete Post"
                  />,
                );
              }}
            >
              <Trash className="h-4 w-4" />
            </Button>
          </div>
        ),
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [data],
  );

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
            <TaskTableShell data={data} />
          </TabsContent>
          <TabsContent value="my-tasks" className="mt-5">
            <DataTable
              data={MY_TASKS ?? []}
              columns={TasksColumnDef}
              filterableColumns={[]}
              searchPlaceholder="Search Posts..."
              messages={{
                filteredDataNotFoundMessage: {
                  title: "No posts Found!",
                  description: "Add some posts to get started!",
                },
                emptyDataMessage: {
                  title: "No posts Found!",
                  description: "Add some posts to get started!",
                },
              }}
            />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
