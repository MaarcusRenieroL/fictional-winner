import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import type { FC } from "react";
import { AssignMemberModal } from "./assign-member-modal";
import { User } from "@prisma/client";

type Props = {
  id: string;
  users: User[];
  role: string;
};

export const ProjectTeam: FC<Props> = ({ id, users, role }) => {
  return (
    <div className="mt-5 flex items-center gap-5">
      <div className="flex items-center">
        {users.map((user) => (
          <Avatar key={user.id}>
            <AvatarFallback>
              {user.firstName.charAt(0) + " " + user.lastName.charAt(0)}
            </AvatarFallback>
          </Avatar>
        ))}
      </div>
      {role && role === "ADMIN" && <AssignMemberModal projectId={id} />}
    </div>
  );
};
