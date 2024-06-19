import { FC } from "react";
import { RecentActivity } from "./recent-activity";
import { TaskStatus } from "./task-status";

export const Overview: FC = () => {
  return (
    <div className="w-full flex justify-between gap-5">
      <div className="w-3/4 space-y-5">
        <TaskStatus />
      </div>
      <div className="w-1/4">
        <RecentActivity />
      </div>
    </div>
  );
};
