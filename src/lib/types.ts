import { LucideIcon } from "lucide-react";

export type SidebarItemsType = {
  title: string;
  href: string;
  icon?: LucideIcon | React.ComponentType<{ className?: string }>;
};
