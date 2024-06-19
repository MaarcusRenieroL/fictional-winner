import { FC } from "react";
import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { PROJECT_LIST } from "@/lib/constants";

type Props = {
  number: number;
};

export const ProjectHeader: FC<Props> = ({ number }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center w-full gap-5">
        <h1 className="text-2xl font-bold">{PROJECT_LIST.at(number)?.title}</h1>
        <Select>
          <SelectTrigger className="w-48">
            <SelectValue
              defaultValue="not-started"
              placeholder="Select Progress"
            />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup defaultValue="not-started">
              <SelectLabel>Progress</SelectLabel>
              <SelectItem value="not-started">Not Started</SelectItem>
              <SelectItem value="in-progress">In Progress</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <p className="text-sm">Last updated on: 21 December 2023</p>
      </div>
      <Input className="w-96" placeholder="Search" />
    </div>
  );
};
