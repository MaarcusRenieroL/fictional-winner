import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header";
import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { Tasks } from "./types";

export const TasksColumn: ColumnDef<Tasks>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
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
    cell: ({ row }) => <div className="min-w-max">{row.getValue("title")}</div>,
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
];
