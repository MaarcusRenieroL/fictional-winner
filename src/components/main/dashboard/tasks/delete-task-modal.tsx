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
  id: string;
};

export const DeleteTaskModal: FC<Props> = ({ id }) => {
  const { mutateAsync: deleteTask } = client.task.deleteTask.useMutation({
    onSuccess: () => {
      toast("Success", {
        description: "Task created successfully",
      });
    },
    onError: (error) => {
      toast("Error", {
        description: "Error creating task",
      });
      console.log(error);
    },
  });

  const handleDeleteTask = async () => {
    await deleteTask(id);
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
            {id}
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
