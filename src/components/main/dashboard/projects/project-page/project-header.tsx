import type { FC } from "react";

type Props = {
  title: string;
};

export const ProjectHeader: FC<Props> = ({ title }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center w-full gap-5">
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>
    </div>
  );
};
