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
    title: "Projects",
    href: "/dashboard/projects",
    icon: Icons.projects,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Icons.settings,
  },
];

export const data = [
  {
    id: "1",
    title: "Design Homepage",
    description: "Create the initial design for the new homepage layout.",
    status: "In Progress",
    priority: "High",
    dueDate: "2024-06-25",
  },
  {
    id: "2",
    title: "Database Backup",
    description: "Perform a full backup of the production database.",
    status: "Pending",
    priority: "Medium",
    dueDate: "2024-06-20",
  },
  {
    id: "3",
    title: "User Feedback Review",
    description: "Review user feedback from the recent product launch.",
    status: "Completed",
    priority: "Low",
    dueDate: "2024-06-18",
  },
  {
    id: "4",
    title: "Marketing Campaign Plan",
    description: "Develop a plan for the upcoming marketing campaign.",
    status: "In Progress",
    priority: "High",
    dueDate: "2024-07-01",
  },
  {
    id: "5",
    title: "Code Refactoring",
    description:
      "Refactor the codebase to improve maintainability and performance.",
    status: "Pending",
    priority: "Medium",
    dueDate: "2024-06-30",
  },
  {
    id: "6",
    title: "Team Meeting",
    description:
      "Schedule and conduct a team meeting to discuss project updates.",
    status: "Scheduled",
    priority: "Low",
    dueDate: "2024-06-22",
  },
  {
    id: "7",
    title: "Customer Support Training",
    description: "Organize training sessions for the customer support team.",
    status: "Pending",
    priority: "High",
    dueDate: "2024-07-10",
  },
  {
    id: "8",
    title: "Bug Fix: Login Issue",
    description: "Fix the login issue reported by multiple users.",
    status: "In Progress",
    priority: "High",
    dueDate: "2024-06-19",
  },
  {
    id: "9",
    title: "SEO Optimization",
    description: "Optimize the website for better search engine ranking.",
    status: "Pending",
    priority: "Medium",
    dueDate: "2024-07-05",
  },
  {
    id: "10",
    title: "Content Strategy",
    description: "Develop a content strategy for the next quarter.",
    status: "Completed",
    priority: "Low",
    dueDate: "2024-06-15",
  },
  {
    id: "11",
    title: "Performance Review",
    description: "Conduct performance reviews for all team members.",
    status: "Scheduled",
    priority: "Medium",
    dueDate: "2024-06-27",
  },
  {
    id: "12",
    title: "Product Launch Preparation",
    description: "Prepare all materials and resources for the product launch.",
    status: "In Progress",
    priority: "High",
    dueDate: "2024-06-29",
  },
  {
    id: "13",
    title: "Security Audit",
    description: "Perform a security audit on the current system.",
    status: "Pending",
    priority: "High",
    dueDate: "2024-07-08",
  },
  {
    id: "14",
    title: "New Hire Onboarding",
    description: "Complete the onboarding process for new hires.",
    status: "Scheduled",
    priority: "Medium",
    dueDate: "2024-06-23",
  },
  {
    id: "15",
    title: "API Documentation",
    description: "Update the API documentation to include recent changes.",
    status: "Pending",
    priority: "Low",
    dueDate: "2024-07-02",
  },
  {
    id: "16",
    title: "Email Campaign",
    description: "Plan and execute an email campaign for existing customers.",
    status: "In Progress",
    priority: "Medium",
    dueDate: "2024-06-28",
  },
  {
    id: "17",
    title: "Server Maintenance",
    description: "Schedule and perform maintenance on the main server.",
    status: "Pending",
    priority: "High",
    dueDate: "2024-06-24",
  },
  {
    id: "18",
    title: "Social Media Posts",
    description:
      "Create and schedule social media posts for the upcoming week.",
    status: "In Progress",
    priority: "Medium",
    dueDate: "2024-06-21",
  },
  {
    id: "19",
    title: "Client Meeting",
    description: "Arrange and attend a meeting with a key client.",
    status: "Scheduled",
    priority: "High",
    dueDate: "2024-06-26",
  },
  {
    id: "20",
    title: "Website Bug Fixes",
    description: "Address and fix reported bugs on the website.",
    status: "In Progress",
    priority: "High",
    dueDate: "2024-06-20",
  },
];

export const PROJECT_LIST = [
  {
    title: "E-commerce Platform Upgrade",
    description:
      "Upgrade the e-commerce platform to support new payment methods and enhance security features.",
    scheduledTaskCount: 9,
    ongoingTaskCount: 3,
    completedTaskCount: 11,
    teamMembers: ["Alice Johnson", "Bob Smith", "Charlie Brown", "David White"],
  },
  {
    title: "AI Chatbot Integration",
    description:
      "Integrate an AI chatbot into the customer service system to handle common inquiries and improve response times.",
    scheduledTaskCount: 7,
    ongoingTaskCount: 4,
    completedTaskCount: 10,
    teamMembers: ["Eva Green", "George Martinez", "Hannah Lee", "Ian Thompson"],
  },
  {
    title: "Cloud Migration",
    description:
      "Migrate company data and applications to a cloud-based infrastructure to improve scalability and reduce costs.",
    scheduledTaskCount: 12,
    ongoingTaskCount: 5,
    completedTaskCount: 8,
    teamMembers: ["Jack Wilson", "Karen Davis", "Liam Taylor"],
  },
  {
    title: "New Product Development",
    description:
      "Develop and launch a new product line focusing on sustainability and eco-friendly materials.",
    scheduledTaskCount: 15,
    ongoingTaskCount: 6,
    completedTaskCount: 14,
    teamMembers: ["Mia Anderson", "Noah Harris", "Olivia Moore", "Paul Walker"],
  },
  {
    title: "Cybersecurity Initiative",
    description:
      "Implement a comprehensive cybersecurity program to protect against potential threats and vulnerabilities.",
    scheduledTaskCount: 5,
    ongoingTaskCount: 3,
    completedTaskCount: 7,
    teamMembers: ["Quinn Adams", "Rachel Lewis", "Samuel Clark"],
  },
  {
    title: "Mobile App Redesign",
    description:
      "Redesign the mobile app interface to improve user experience and add new features requested by users.",
    scheduledTaskCount: 10,
    ongoingTaskCount: 4,
    completedTaskCount: 12,
    teamMembers: [
      "Tina Robinson",
      "Umar Khan",
      "Victoria Peterson",
      "William Bell",
    ],
  },
  {
    title: "Global Expansion Strategy",
    description:
      "Develop a strategy for expanding business operations into new international markets.",
    scheduledTaskCount: 8,
    ongoingTaskCount: 2,
    completedTaskCount: 5,
    teamMembers: ["Xander Reed", "Yvonne Collins", "Zara Mitchell"],
  },
  {
    title: "Internal Software Update",
    description:
      "Update internal software tools to the latest versions to enhance performance and security.",
    scheduledTaskCount: 6,
    ongoingTaskCount: 3,
    completedTaskCount: 9,
    teamMembers: ["Alice Johnson", "Bob Smith", "Charlie Brown"],
  },
  {
    title: "Sustainability Program",
    description:
      "Launch a company-wide sustainability program aimed at reducing waste and improving energy efficiency.",
    scheduledTaskCount: 7,
    ongoingTaskCount: 5,
    completedTaskCount: 10,
    teamMembers: ["David White", "Eva Green", "George Martinez", "Hannah Lee"],
  },
  {
    title: "Employee Wellness Initiative",
    description:
      "Introduce a wellness initiative to promote health and well-being among employees.",
    scheduledTaskCount: 4,
    ongoingTaskCount: 2,
    completedTaskCount: 6,
    teamMembers: ["Ian Thompson", "Jack Wilson", "Karen Davis", "Liam Taylor"],
  },
  {
    title: "Customer Experience Enhancement",
    description:
      "Enhance the overall customer experience by streamlining processes and introducing new support channels.",
    scheduledTaskCount: 9,
    ongoingTaskCount: 4,
    completedTaskCount: 11,
    teamMembers: ["Mia Anderson", "Noah Harris", "Olivia Moore"],
  },
  {
    title: "Digital Marketing Optimization",
    description:
      "Optimize digital marketing strategies to increase engagement and conversion rates across all platforms.",
    scheduledTaskCount: 10,
    ongoingTaskCount: 5,
    completedTaskCount: 13,
    teamMembers: ["Paul Walker", "Quinn Adams", "Rachel Lewis", "Samuel Clark"],
  },
  {
    title: "Training Program Development",
    description:
      "Develop a comprehensive training program for new hires to ensure they are fully equipped to perform their roles.",
    scheduledTaskCount: 6,
    ongoingTaskCount: 3,
    completedTaskCount: 8,
    teamMembers: ["Tina Robinson", "Umar Khan", "Victoria Peterson"],
  },
  {
    title: "Website Accessibility Improvements",
    description:
      "Improve website accessibility to meet compliance standards and provide a better experience for all users.",
    scheduledTaskCount: 8,
    ongoingTaskCount: 4,
    completedTaskCount: 10,
    teamMembers: [
      "William Bell",
      "Xander Reed",
      "Yvonne Collins",
      "Zara Mitchell",
    ],
  },
  {
    title: "Inventory Management System",
    description:
      "Implement a new inventory management system to streamline tracking and reduce stock discrepancies.",
    scheduledTaskCount: 7,
    ongoingTaskCount: 3,
    completedTaskCount: 9,
    teamMembers: ["Alice Johnson", "Bob Smith", "Charlie Brown", "David White"],
  },
  {
    title: "Data Analytics Upgrade",
    description:
      "Upgrade data analytics tools to improve insights and support better decision-making.",
    scheduledTaskCount: 5,
    ongoingTaskCount: 2,
    completedTaskCount: 7,
    teamMembers: ["Eva Green", "George Martinez", "Hannah Lee"],
  },
  {
    title: "Customer Loyalty Program",
    description:
      "Create a customer loyalty program to reward repeat business and increase customer retention.",
    scheduledTaskCount: 9,
    ongoingTaskCount: 4,
    completedTaskCount: 12,
    teamMembers: ["Ian Thompson", "Jack Wilson", "Karen Davis"],
  },
  {
    title: "Operational Efficiency Project",
    description:
      "Identify and implement changes to improve operational efficiency and reduce costs.",
    scheduledTaskCount: 6,
    ongoingTaskCount: 3,
    completedTaskCount: 8,
    teamMembers: ["Liam Taylor", "Mia Anderson", "Noah Harris", "Olivia Moore"],
  },
  {
    title: "Social Media Strategy",
    description:
      "Develop and implement a social media strategy to increase brand awareness and engagement.",
    scheduledTaskCount: 8,
    ongoingTaskCount: 5,
    completedTaskCount: 11,
    teamMembers: ["Paul Walker", "Quinn Adams", "Rachel Lewis", "Samuel Clark"],
  },
];
