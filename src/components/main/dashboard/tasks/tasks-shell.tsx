"use client";

import { Checkbox } from "@/components/ui/checkbox";
import type { ColumnDef } from "@tanstack/react-table";
import React, { type FC, useMemo } from "react";
import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header";
import { DataTable } from "@/components/data-table";
import { DeleteTaskModal } from "./delete-task-modal";
import { EditTaskModal } from "./edit-task-modal";
import type { Project, Task } from "@prisma/client";

type TaskTableShellProps = {
  tasks: Task[];
  projects?: Project[];
};

export const TaskTableShell: FC<TaskTableShellProps> = ({
  tasks,
  projects,
}) => {
  const getProjectName = (id: string) => {
    return projects?.find((project) => project.id === id)?.projectName;
  };
  const TasksColumnDef = useMemo<ColumnDef<Task>[]>(
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
        id: "uniqueId",
        cell: ({ row }) => (
          <div className="min-w-max">{row.getValue("id")}</div>
        ),
        accessorKey: "id",
        enableHiding: true,
      },
      {
        id: "taskName",
        header: ({ column }) => (
          <div>
            <DataTableColumnHeader column={column} title="Task Name" />
          </div>
        ),
        cell: ({ row }) => (
          <div className="min-w-max mr-auto">{row.getValue("taskName")}</div>
        ),
        accessorKey: "taskName",
        enableSorting: true,
        enableHiding: true,
      },
      {
        id: "projectId",
        header: ({ column }) => (
          <div>
            <DataTableColumnHeader column={column} title="Project Name" />
          </div>
        ),
        cell: ({ row }) => (
          <div className="min-w-max mr-auto">
            {getProjectName(row.getValue("projectId"))}
          </div>
        ),
        accessorKey: "projectId",
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
          <div className="min-w-max">
            {new Date(row.getValue("dueDate")).toDateString()}
          </div>
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
            <EditTaskModal
              projects={projects ?? []}
              taskName={row.getValue("taskName")}
              status={row.getValue("status")}
              priority={row.getValue("priority")}
              dueDate={row.getValue("dueDate")}
            />
            <DeleteTaskModal id={row.getValue("uniqueId")} />
          </div>
        ),
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [tasks],
  );
  return (
    <DataTable
      data={tasks ?? []}
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
  );
};
