import { FC } from "react";
import { Sidebar } from "@/components/main/dashboard/navigation/sidebar";
import { Account } from "@/components/main/dashboard/navigation/account";

export const Navbar: FC = () => {
  return (
    <div className="w-full flex gap-5 h-fit px-10 py-6">
      <Sidebar />
      <div className="flex items-center justify-between w-full">
        <h1 className="text-2xl font-bold">Task Management App</h1>
        <Account />
      </div>
    </div>
  );
};
