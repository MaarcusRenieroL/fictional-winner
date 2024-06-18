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
    title: "Views",
    href: "/dashboard/views",
    icon: Icons.calendar,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Icons.settings,
  },
];

export const data = [
  {
    id: 1,
    title: "Design Homepage Layout",
    description: "Create and finalize the layout for the new homepage.",
    status: "In Progress",
    priority: "High",
    dueDate: "2024-06-20",
  },
  {
    id: 3,
    title: "Set Up CI/CD Pipeline",
    description:
      "Configure continuous integration and delivery for the project.",
    status: "Not Started",
    priority: "High",
    dueDate: "2024-06-25",
  },
  {
    id: 4,
    title: "Write Unit Tests",
    description: "Write and validate unit tests for the new features.",
    status: "In Progress",
    priority: "Low",
    dueDate: "2024-06-22",
  },
  {
    id: 6,
    title: "Optimize Database Queries",
    description: "Improve the performance of database queries.",
    status: "In Progress",
    priority: "High",
    dueDate: "2024-06-24",
  },
  {
    id: 7,
    title: "Design New Icons",
    description: "Create a new set of icons for the mobile app.",
    status: "Not Started",
    priority: "Low",
    dueDate: "2024-06-30",
  },
  {
    id: 8,
    title: "Conduct User Testing",
    description: "Arrange and perform user testing for the beta version.",
    status: "In Progress",
    priority: "Medium",
    dueDate: "2024-06-27",
  },
  {
    id: 10,
    title: "Fix Security Vulnerabilities",
    description: "Identify and fix any security issues in the application.",
    status: "Not Started",
    priority: "Critical",
    dueDate: "2024-06-21",
  },
];
