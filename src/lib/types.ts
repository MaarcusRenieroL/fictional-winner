import { LucideIcon } from "lucide-react";
import { ComponentType } from "react";

export type SidebarItemsType = {
  title: string;
  href: string;
  icon?: LucideIcon | ComponentType<{ className?: string }>;
};

export type Tasks = {
  id: number;
  title: string;
  status: string;
  priority: string;
  dueDate: string;
};
