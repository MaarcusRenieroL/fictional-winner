import { AccountForm } from "@/components/main/dashboard/settings/forms/account-form";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";

export default async function SettingsPage() {
  const session = await getServerSession(authOptions);

  const user = await db.user.findFirst({
    where: {
      id: session?.user.id,
    },
  });

  if (!user) {
    return;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Settings</h1>
      <div className="mt-5">
        <AccountForm user={user} />
      </div>
    </div>
  );
}
