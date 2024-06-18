import { SidebarItemsType } from "./types";
import { Icons } from "@/components/icons";

export const SIDEBAR_ITEMS: SidebarItemsType[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: Icons.dashboard,
  },
  {
    title: "Tasks",
    href: "/dashboard/tasks",
    icon: Icons.tasks,
  },
  {
    title: "Calendar",
    href: "/dashboard/calendar",
    icon: Icons.calendar,
  },
  {
    title: "Activity",
    href: "/dashboard/activity",
    icon: Icons.activity,
  },
  {
    title: "Notifications",
    href: "/dashboard/notifications",
    icon: Icons.notifications,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Icons.settings,
  },
  {
    title: "Profile",
    href: "/dashboard/profile",
    icon: Icons.profile,
  },
];
