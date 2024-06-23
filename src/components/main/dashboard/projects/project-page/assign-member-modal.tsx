"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { client } from "@/lib/trpc/client";
import { projectMemberSchema } from "@/lib/zod-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import type { FC } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type { z } from "zod";

type Props = {
  projectId: string;
}

export const AssignMemberModal: FC<Props> = ({ projectId }) => {
  const form = useForm<z.infer<typeof projectMemberSchema>>({
    resolver: zodResolver(projectMemberSchema),
    defaultValues: {
      email: "",
      projectId: projectId,
    },
  });

  const { mutateAsync: addNewProject } = client.team.addProjectMember.useMutation({
    onSuccess: () => {
      toast("Success", {
        description: "Team member added successfully",
      });
    },
    onError: (error) => {
      toast("Error", {
        description: "Error adding team member",
      });
      console.log(error);
    },
  });

  const handleAddNewTask = async (data: z.infer<typeof projectMemberSchema>) => {
    await addNewProject(data);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add new member</Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Add New Task</DialogTitle>
          <DialogDescription>
            Fill in the form below to add a new project to your list.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleAddNewTask)}>
            <div className="flex flex-col items-center justify-between w-full gap-5">
              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>
                      <Label>Email</Label>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter email"
                        className="w-full"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="projectId"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="w-full hidden">
                    <FormLabel>
                      <Label>Project Id</Label>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Enter project id"
                        className="w-full"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter className="mt-5">
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
