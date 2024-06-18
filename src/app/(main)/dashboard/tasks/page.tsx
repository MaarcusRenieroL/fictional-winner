"use client";

import { DataTable } from "@/components/data-table";
import { TasksColumn } from "@/lib/columns";
import { data } from "@/lib/constants";

export default function TasksPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">All tasks</h1>
      <DataTable data={data ?? []} columns={TasksColumn} />
    </div>
  );
}
