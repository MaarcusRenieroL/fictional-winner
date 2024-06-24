import Link from "next/link";
import Placeholder from "../../../../public/placeholder.svg";
import { FC } from "react";
import Image from "next/image";

export const HeroSection: FC = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Streamline Your Workflow with Task Manager
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Effortlessly manage your tasks, collaborate with your team, and
                track your progress. Task Manager is the ultimate solution for
                productivity.
              </p>
            </div>
            <div className="flex flex-col gap-2 md:w-[200px] w-full">
              <Link
                href="/auth/sign-up"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Sign Up
              </Link>
            </div>
          </div>
          <Image
            src={Placeholder}
            width="550"
            height="550"
            alt="Hero"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
          />
        </div>
      </div>
    </section>
  );
};
