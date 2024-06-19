import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

type Props = {
  id: string;
  title: string;
  description: string;
  scheduledTaskCount: number;
  ongoingTaskCount: number;
  completedTaskCount: number;
  teamMembers: string[];
};

export const ProjectCard: FC<Props> = ({
  title,
  description,
  scheduledTaskCount,
  ongoingTaskCount,
  completedTaskCount,
  teamMembers,
  id,
}) => {
  return (
    <Link href={`/dashboard/projects/${id}`}>
      <Card className="flex flex-col justify-between  w-full hover:shadow-2xl transition-all duration-500">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="w-full">
          <h1 className="text-lg font-medium">Test Runs Overview</h1>
          <div className="flex items-center justify-between w-full mt-5">
            <div>
              <p className="text-xl font-semibold">{scheduledTaskCount}</p>
              <h1>Scheduled</h1>
            </div>
            <div>
              <p className="text-xl font-semibold">{ongoingTaskCount}</p>
              <h1>Ongoing</h1>
            </div>
            <div>
              <p className="text-xl font-semibold">{completedTaskCount}</p>
              <h1>Completed</h1>
            </div>
          </div>
        </CardContent>
        <CardFooter className="w-full">
          <div className="w-full flex items-center justify-between">
            <div className="flex">
              {teamMembers.map((member) => (
                <Avatar key={member}>
                  <AvatarFallback>{member.at(0)}</AvatarFallback>
                </Avatar>
              ))}
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};
