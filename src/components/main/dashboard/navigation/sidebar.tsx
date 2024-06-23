"use client";

import type { FC } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CgMenuLeftAlt } from "react-icons/cg";
import { SIDEBAR_ITEMS } from "@/lib/constants";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export const Sidebar: FC = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <CgMenuLeftAlt className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Task Management App</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col space-y-5 mt-10">
          {SIDEBAR_ITEMS.map((item) => {
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
                <p className={`${cn("text-sm transition-all duration-200 ")}`}>
                  {item.title}
                </p>
              </Link>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
};
