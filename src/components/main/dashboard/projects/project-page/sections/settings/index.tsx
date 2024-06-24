import type { FC } from "react";
import { EditProjectNameForm } from "./forms/edit-project-name-form";
import { DeleteProjectForm } from "./forms/delete-project-form";
import { EditTeamMembersForm } from "./forms/edit-team-members-form";
import type { User } from "@prisma/client";
import { Session } from "next-auth";

type Props = {
  title: string;
  id: string;
  users: User[];
  session: Session;
};

export const Settings: FC<Props> = ({ users, title, id, session }) => {
  return (
    <div className="space-y-10">
      <EditProjectNameForm title={title} id={id} />
      <EditTeamMembersForm projectId={id} users={users} session={session} />
      <DeleteProjectForm id={id} />
    </div>
  );
};
