import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { PROJECT_LIST } from "@/lib/constants";
import type { FC } from "react";

type Props = {
  id: number;
};

export const ProjectTeam: FC<Props> = ({ id }) => {
  return (
    <div className="mt-5 flex items-center gap-5">
      <div className="flex items-center">
        {PROJECT_LIST.at(id)?.teamMembers.map((member) => (
          <Avatar key={member}>
            <AvatarFallback>{member.at(0)}</AvatarFallback>
          </Avatar>
        ))}
      </div>
      <Button
        className="flex items-center justify-evenly rounded-full space-x-2"
        variant="outline"
      >
        <Icons.teams className="h-4 w-4" />
        <span>Assign Member</span>
      </Button>
    </div>
  );
};
