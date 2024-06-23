import type { Metadata } from "next";
import { Navbar } from "@/components/main/dashboard/navigation/navbar";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";

export const metadata: Metadata = {
  title: "Task Management App",
  description: "Built using Next.js",
};

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return;
  }

  const user = await db.user.findFirst({
    where: {
      id: session.user.id,
    },
  });
  return (
    <section>
      <Navbar
        name={user?.firstName + " " + user?.lastName}
        email={user?.email ?? ""}
      />
      <main className="p-10">{children}</main>
    </section>
  );
}
