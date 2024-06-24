"use client";

import { CalendarIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { FC } from "react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { CgMenuLeftAlt } from "react-icons/cg";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NAVBAR_ITEMS } from "@/lib/constants";

export const Navbar: FC = () => {
  const pathname = usePathname();
  return (
    <>
      <header className="px-10 lg:px-6 h-20 py-6 items-center hidden md:block border-b">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center justify-center gap-5"
            prefetch={false}
          >
            <CalendarIcon className="h-6 w-6" />
            <h1 className="text-2xl font-bold">Task Management App</h1>
          </Link>
          <nav className="ml-auto flex items-center gap-8 sm:gap-6">
            <Link
              href="#about"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              About
            </Link>
            <Link
              href="#features"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Features
            </Link>
            <Link
              href="#get-started"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Contact
            </Link>
            <Link href="/auth/sign-in">
              <Button variant="outline">Sign In</Button>
            </Link>
            <Link href="/auth/sign-up">
              <Button>Sign Up</Button>
            </Link>
          </nav>
        </div>
      </header>
      <div className="flex md:hidden px-10 py-6 border-b items-center gap-5">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="flex items-center justify-center"
            >
              <CgMenuLeftAlt className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <div className="mt-10 flex items-center gap-5 w-full">
                <CalendarIcon className="h-6 w-6" />
                <SheetTitle>Task Management App</SheetTitle>
              </div>
            </SheetHeader>
            <div className="flex flex-col space-y-5 mt-10">
              {NAVBAR_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className={cn(
                      "flex justify-start items-center gap-3 hover:bg-secondary border-transparent border py-2 px-4 rounded-md hover:border-border hover:border transition-all duration-200 ease-in-out",
                      isActive &&
                        "text-primary font-semibold border-border bg-secondary",
                    )}
                  >
                    {item.icon && <item.icon className="size-5" />}
                    <p
                      className={`${cn("text-sm transition-all duration-200 ")}`}
                    >
                      {item.title}
                    </p>
                  </Link>
                );
              })}
              <Link className="w-full" href="/auth/sign-in">
                <Button className="w-full" variant="outline">
                  Sign In
                </Button>
              </Link>
              <Link className="w-full" href="/auth/sign-up">
                <Button className="w-full">Sign Up</Button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
        <h1 className="md:text-2xl text-xl font-bold">Task Management App</h1>
      </div>
    </>
  );
};
