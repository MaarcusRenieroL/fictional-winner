"use client";

import { FC } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { client } from "@/lib/trpc/client";
import { toast } from "sonner";
import { z } from "zod";
import { deleteProjectSchema } from "@/lib/zod-schema";
import { useRouter } from "next/navigation";

type Props = {
  id: string;
};

export const DeleteProjectForm: FC<Props> = ({ id }) => {
  const router = useRouter();
  const { mutateAsync: deleteProject } =
    client.project.deleteProject.useMutation({
      onSuccess: () => {
        toast("Success", {
          description: "Updated project name successfully",
        });
      },
      onError: (error) => {
        toast("Error", {
          description: "Error updating project name",
        });
        console.log(error);
      },
    });

  const handleDelete = async (data: z.infer<typeof deleteProjectSchema>) => {
    await deleteProject(data);
    router.push("/dashboard/projects");
  };

  return (
    <Card className="border-red-200">
      <CardHeader>
        <CardTitle className="text-xl">Delete Account</CardTitle>
        <CardDescription>
          Permanently remove your Personal Account and all of its contents from
          the Blog Vacancy platform. This action is not reversible, so please
          continue with caution.
        </CardDescription>
      </CardHeader>
      <CardFooter className="border-t border-red-200 px-6 py-2 bg-red-100/50 justify-end">
        <div className="ml-auto">
          <Button
            size="sm"
            variant="destructive"
            onClick={() => handleDelete({ projectId: id })}
          >
            Delete Personal Account
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
