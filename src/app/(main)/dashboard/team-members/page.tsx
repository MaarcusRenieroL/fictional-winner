import { TeamMembersTableShell } from "@/components/main/dashboard/team-members/team-members-shell";
import { Button } from "@/components/ui/button";
import { teamMembers } from "@/lib/constants";

export default function TeamMembersPage() {
  return (
    <div>
      <div className="w-full flex items-center justify-between">
        <h1 className="text-2xl font-bold">Team Members</h1>
        <Button>Download Team Members</Button>
      </div>
      <div className="mt-5">
        <TeamMembersTableShell data={teamMembers} />
      </div>
    </div>
  );
}
