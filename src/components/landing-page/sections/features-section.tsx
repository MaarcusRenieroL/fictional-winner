import { CalendarIcon, PieChartIcon } from "@radix-ui/react-icons";
import { UsersIcon } from "lucide-react";
import { FC } from "react";

export const FeatureSection: FC = () => {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <CalendarIcon className="h-12 w-12 text-primary" />
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Task Scheduling</h3>
              <p className="text-muted-foreground">
                Easily schedule and manage your tasks with our intuitive
                calendar view.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <UsersIcon className="h-12 w-12 text-primary" />
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Team Collaboration</h3>
              <p className="text-muted-foreground">
                Collaborate with your team, assign tasks, and track progress in
                real-time.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <PieChartIcon className="h-12 w-12 text-primary" />
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Progress Tracking</h3>
              <p className="text-muted-foreground">
                Monitor your team&apos;s progress and stay on top of your
                project&apos;s status.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
