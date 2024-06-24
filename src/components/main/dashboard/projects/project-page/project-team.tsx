import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import type { FC } from "react";
import { AssignMemberModal } from "./assign-member-modal";
import { User } from "@prisma/client";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

type Props = {
  id: string;
  users: User[];
  role: string;
};

export const ProjectTeam: FC<Props> = ({ id, users, role }) => {
  return (
    <div className="flex items-center gap-5">
      <div className="flex items-center space-x-5">
        {users.map((user) => (
          <HoverCard key={user.id}>
            <HoverCardTrigger asChild>
              <Avatar>
                <AvatarFallback>
                  {user.firstName.charAt(0) + " " + user.lastName.charAt(0)}
                </AvatarFallback>
              </Avatar>
            </HoverCardTrigger>
            <HoverCardContent>
              {user.firstName + " " + user.lastName}
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>
      {role && role === "ADMIN" && (
        <AssignMemberModal projectId={id} users={users} />
      )}
    </div>
  );
};
