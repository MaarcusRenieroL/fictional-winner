import type { FC } from "react";
import { Sidebar } from "@/components/main/dashboard/navigation/sidebar";
import { Account } from "@/components/main/dashboard/navigation/account";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";

type Props = {
  name: string;
  email: string;
};

export const Navbar: FC<Props> = ({ name, email }) => {
  return (
    <div className="w-full flex gap-5 h-fit px-10 py-6 border-b">
      <Sidebar />
      <div className="flex items-center justify-between w-full">
        <Link href="/dashboard">
          <h1 className="text-2xl font-bold">Task Management App</h1>
        </Link>
        <div className="flex items-center justify-between space-x-5">
          <ThemeToggle />
          <Account name={name} email={email} />
        </div>
      </div>
    </div>
  );
};
