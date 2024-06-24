import { FC } from "react";

export const AboutSection: FC = () => {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              About Task Manager
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Task Manager is a powerful task management tool that helps you and
              your team stay organized and productive. With features like task
              scheduling, team collaboration, and progress tracking, Task
              Manager is the ultimate solution for managing your workflow.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Our Mission
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our mission is to help individuals and teams work more efficiently
              and effectively. We believe that by providing the right tools and
              resources, we can empower people to achieve their goals and reach
              new levels of productivity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
