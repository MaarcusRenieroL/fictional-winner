"use client";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { client } from "@/lib/trpc/client";
import { TrashIcon } from "lucide-react";
import type { FC } from "react";
import { toast } from "sonner";

type Props = {
  userId: string;
  projectId: string;
};

export const RemoveTeamMemberModal: FC<Props> = ({ userId, projectId }) => {
  const { mutateAsync: removeTeamMember } =
    client.team.removeTeamMember.useMutation({
      onSuccess: () => {
        toast("Success", {
          description: "User removed from team successfully",
        });
      },
      onError: (error) => {
        toast("Error", {
          description: "Error removing user",
        });
        console.log(error);
      },
    });

  const handleDeleteTask = async () => {
    await removeTeamMember({ id: userId, projectId });
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" size="icon">
          <TrashIcon className="h-4 w-4" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete task</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete this task?
            <br />
            {userId}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => handleDeleteTask()}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
