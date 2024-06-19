import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FC } from "react";
import { ActivityCard } from "./activity-card";
import { Button } from "@/components/ui/button";

export const RecentActivity: FC = () => {
  return (
    <Card className="hover:shadow-xl transition-all duration-500 w-full h-full">
      <CardHeader className="w-full ">
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-96 p-4">
          <ActivityCard />
          <ActivityCard />
          <ActivityCard />
          <ActivityCard />
          <ActivityCard />
          <ActivityCard />
          <ActivityCard />
          <ActivityCard />
          <ActivityCard />
        </ScrollArea>
      </CardContent>
      <CardFooter className="w-full justify-end">
        <Button variant="outline">See All</Button>
      </CardFooter>
    </Card>
  );
};
