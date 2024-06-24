"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import type { ColumnDef } from "@tanstack/react-table";
import { Edit, Trash } from "lucide-react";
import React, { type FC, useMemo } from "react";
import { useModal } from "@/components/providers/modal-provider";
import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header";
import { CustomDeleteAlertDailog } from "@/components/custom-delete-alert-dialog";
import { DataTable } from "@/components/data-table";
import type { TEAM_ROLE, User } from "@prisma/client";
import type { Session } from "next-auth";
import { EditTeamMemberModal } from "./edit-team-member-modal";

type Props = {
  teamMembers: User[];
  user: Session;
};

export const TeamMembersTableShell: FC<Props> = ({ teamMembers, user }) => {
  const { setOpen } = useModal();

  const TeamMembersColumnDef = useMemo<ColumnDef<User>[]>(
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
        id: "id",
        header: ({ column }) => (
          <div>
            <DataTableColumnHeader column={column} title="Id" />
          </div>
        ),
        cell: ({ row }) => (
          <div className="min-w-max mr-auto">{row.getValue("id")}</div>
        ),
        accessorKey: "id",
      },
      {
        id: "firstName",
        header: ({ column }) => (
          <div>
            <DataTableColumnHeader column={column} title="First Name" />
          </div>
        ),
        cell: ({ row }) => (
          <div className="min-w-max mr-auto">{row.getValue("firstName")}</div>
        ),
        accessorKey: "firstName",
        enableSorting: true,
        enableHiding: true,
      },
      {
        id: "lastName",
        header: ({ column }) => (
          <div>
            <DataTableColumnHeader column={column} title="Last Name" />
          </div>
        ),
        cell: ({ row }) => (
          <div className="min-w-max mr-auto">{row.getValue("lastName")}</div>
        ),
        accessorKey: "lastName",
        enableSorting: true,
        enableHiding: true,
      },
      {
        id: "role",
        header: ({ column }) => (
          <div>
            <DataTableColumnHeader column={column} title="Role" />
          </div>
        ),
        cell: ({ row }) => {
          <div className="min-w-max mr-auto">{row.getValue("role")}</div>;
        },
        accessorKey: "role",
      },
      {
        id: "email",
        header: ({ column }) => (
          <div>
            <DataTableColumnHeader column={column} title="Email" />
          </div>
        ),
        cell: ({ row }) => (
          <div className="min-w-max">{row.getValue("email")}</div>
        ),
        accessorKey: "email",
        enableSorting: true,
        enableHiding: true,
      },
      {
        id: "actions",
        header: () => (
          <div className="flex min-w-max items-center justify-center">
            {user.user.role === "ADMIN" ? (
              <div className="min-w-max">Actions</div>
            ) : (
              <div className="min-w-max">Role</div>
            )}
          </div>
        ),
        cell: ({ row }) => (
          <>
            {row.getValue("email") === user.user.email ? (
              <div className="h-14 flex items-center justify-evenly min-w-max">
                You
              </div>
            ) : user.user.role === "ADMIN" ? (
              <div className="flex items-center justify-evenly min-w-max space-x-5 h-14">
                <EditTeamMemberModal
                  id={row.getValue("id")}
                  firstName={row.getValue("firstName")}
                  lastName={row.getValue("lastName")}
                  email={row.getValue("email")}
                  role={row.getValue("role") as TEAM_ROLE}
                />
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
            ) : (
              <div className="h-14 flex items-center justify-evenly min-w-max">
                {row.original.role === "ADMIN" ? "Admin" : "Member"}
              </div>
            )}
          </>
        ),
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [teamMembers],
  );

  return (
    <DataTable
      data={teamMembers ?? []}
      columns={TeamMembersColumnDef}
      filterableColumns={[]}
      searchPlaceholder="Search members..."
      messages={{
        filteredDataNotFoundMessage: {
          title: "No members found!",
          description: "Add team members to get started!",
        },
        emptyDataMessage: {
          title: "No members found!",
          description: "Add team members to get started!",
        },
      }}
    />
  );
};
