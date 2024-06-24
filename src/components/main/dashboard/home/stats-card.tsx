import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { FC } from "react";

type Props = {
  title: string;
  count: number;
  difference: number;
};

export const StatsCard: FC<Props> = ({ title, count, difference }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardFooter className="flex flex-col space-y-2 items-start">
        <h1 className="text-2xl font-bold">{count}</h1>
        <CardDescription>+{difference} from last week</CardDescription>
      </CardFooter>
    </Card>
  );
};
