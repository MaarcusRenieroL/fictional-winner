import type { User } from "@prisma/client";
import type { FC } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { TeamMembersTableShell } from "@/components/main/dashboard/team-members/team-members-shell";
import { Session } from "next-auth";

type Props = {
  users: User[];
  session: Session;
};

export const EditTeamMembersForm: FC<Props> = ({ users, session }) => {
  return (
    <Card className="relative">
      <CardHeader>
        <CardTitle className="text-xl">Team Members</CardTitle>
      </CardHeader>
      <CardContent>
        <TeamMembersTableShell teamMembers={users ?? []} user={session} />
      </CardContent>
    </Card>
  );
};
