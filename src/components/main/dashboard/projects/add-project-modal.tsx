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
import { projectSchema } from "@/lib/zod-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import type { FC } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type { z } from "zod";

export const AddNewProject: FC = () => {
  const form = useForm<z.infer<typeof projectSchema>>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      projectName: "",
      description: "",
    },
  });

  const { mutateAsync: addNewProject } = client.project.addProject.useMutation({
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

  const handleAddNewTask = async (data: z.infer<typeof projectSchema>) => {
    await addNewProject(data);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add New Project</Button>
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
                name="projectName"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>
                      <Label>Project Name</Label>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Enter project name"
                        className="w-full"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="description"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>
                      <Label>Description</Label>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Enter description"
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
