import { AddTeamMemberModal } from "@/components/main/dashboard/team-members/add-member-modal";
import { CreateTeamModal } from "@/components/main/dashboard/team-members/create-team-modal";
import { TeamMembersTableShell } from "@/components/main/dashboard/team-members/team-members-shell";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { server } from "@/lib/trpc/server";
import { getServerSession } from "next-auth";

export default async function TeamMembersPage() {
  const teamMembers = await server.team.getTeamMembers();
  const session = await getServerSession(authOptions);

  if (!session) {
    return;
  }

  const user = await db.user.findUnique({
    where: {
      id: session?.user?.id,
    },
    include: {
      team: true,
    },
  });

  return (
    <div>
      <div className="w-full flex items-center justify-between">
        <h1 className="text-2xl font-bold">Team Members</h1>
        <AddTeamMemberModal />
      </div>
      <div className="mt-5">
        {user?.teamId && teamMembers.data && teamMembers?.data?.length ? (
          <TeamMembersTableShell
            teamMembers={teamMembers?.data ?? []}
            user={session}
          />
        ) : (
          <CreateTeamModal />
        )}
      </div>
    </div>
  );
}
