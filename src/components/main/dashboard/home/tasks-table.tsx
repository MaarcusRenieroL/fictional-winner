"use client";

import { DataTable } from "@/components/data-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TasksColumn } from "@/lib/columns";
import { data } from "@/lib/constants";
import { FC } from "react";

export const TasksTable: FC = () => {
  return (
    <Card className="hover:shadow-xl transition-all duration-500">
      <CardHeader>
        <CardTitle>Pending Tasks</CardTitle>
      </CardHeader>
      <CardContent>
        <DataTable data={data ?? []} columns={TasksColumn} />
      </CardContent>
    </Card>
  );
};
