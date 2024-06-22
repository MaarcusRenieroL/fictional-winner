import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { FC } from "react";

export const ActivityCard: FC = () => {
  return (
    <div className="py-3 border-b">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center space-x-3">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>S</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-lg font-medium">Test</h1>
            <p className="text-sm">Description</p>
          </div>
        </div>
        <p>14:45 pm</p>
      </div>
    </div>
  );
};
