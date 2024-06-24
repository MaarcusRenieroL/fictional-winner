"use client";

import type { FC } from "react";
import { DeleteAccountForm } from "./delete-account-form";
import { PasswordForm } from "./password-form";
import { NameForm } from "./name-form";
import { User } from "@prisma/client";

type Props = {
  user: User;
};

export const AccountForm: FC<Props> = ({ user }) => {
  return (
    <div className="grid gap-8 mb-20 mt-10">
      <NameForm user={user} />
      <PasswordForm />
      <DeleteAccountForm user={user} />
    </div>
  );
};
