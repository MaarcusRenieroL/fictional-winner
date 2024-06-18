import { FC } from "react";
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

export const Sidebar: FC = () => {
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
          {SIDEBAR_ITEMS.map((item) => (
            <Button variant="link" className="justify-start" key={item.title}>
              <Link href={item.href} className="flex items-center space-x-5">
                {item.icon ? <item.icon className="h-6 w-6" /> : null}
                <span>{item.title}</span>
              </Link>
            </Button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};
