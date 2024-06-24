import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { FC } from "react";

type Props = {
  title: string;
  count: number;
};

export const StatsCard: FC<Props> = ({ title, count }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardFooter className="flex flex-col space-y-2 items-start">
        <h1 className="text-2xl font-bold">{count}</h1>
      </CardFooter>
    </Card>
  );
};
