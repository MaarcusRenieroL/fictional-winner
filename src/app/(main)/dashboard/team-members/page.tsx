import { TeamMembersTableShell } from "@/components/main/dashboard/team-members/team-members-shell";
import { Button } from "@/components/ui/button";
import { authOptions } from "@/lib/auth";
import { server } from "@/lib/trpc/server";
import { getServerSession } from "next-auth";

export default async function TeamMembersPage() {
  const teamMembers = await server.team.getTeamMembers();
  const session = await getServerSession(authOptions);

  if (!session) {
    return;
  }

  return (
    <div>
      <div className="w-full flex items-center justify-between">
        <h1 className="text-2xl font-bold">Team Members</h1>
        <Button>Download Team Members</Button>
      </div>
      <div className="mt-5">
        <TeamMembersTableShell
          teamMembers={teamMembers.data ?? []}
          user={session}
        />
      </div>
    </div>
  );
}
