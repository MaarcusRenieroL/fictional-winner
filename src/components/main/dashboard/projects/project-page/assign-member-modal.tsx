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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandItem,
  CommandList,
  CommandEmpty,
  CommandInput,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { client } from "@/lib/trpc/client";
import { projectMemberSchema } from "@/lib/zod-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import type { FC } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type { z } from "zod";
import { User } from "@prisma/client";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { CheckIcon } from "lucide-react";

type Props = {
  projectId: string;
  users: User[];
};

export const AssignMemberModal: FC<Props> = ({ projectId, users }) => {
  const form = useForm<z.infer<typeof projectMemberSchema>>({
    resolver: zodResolver(projectMemberSchema),
    defaultValues: {
      email: "",
      projectId: projectId,
    },
  });

  const { mutateAsync: addNewProject } =
    client.team.addProjectMember.useMutation({
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

  const handleAddNewTask = async (
    data: z.infer<typeof projectMemberSchema>,
  ) => {
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
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              role="combobox"
                              className={cn(
                                "w-full justify-between",
                                !field.value && "text-muted-foreground",
                              )}
                            >
                              {field.value
                                ? users.find(
                                    (user) => user.email === field.value,
                                  )?.firstName
                                : "Select user"}
                              <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-full p-0">
                          <Command>
                            <CommandInput
                              placeholder="Search members members..."
                              className="h-9"
                            />
                            <CommandEmpty>No users found.</CommandEmpty>
                            <CommandList>
                              {users.map((user) => (
                                <CommandItem
                                  value={user.email}
                                  key={user.id}
                                  onSelect={() => {
                                    form.setValue("email", user.email);
                                  }}
                                >
                                  {user.email}
                                  <CheckIcon
                                    className={cn(
                                      "ml-auto h-4 w-4",
                                      user.email === field.value
                                        ? "opacity-100"
                                        : "opacity-0",
                                    )}
                                  />
                                </CommandItem>
                              ))}
                            </CommandList>
                          </Command>
                        </PopoverContent>
                      </Popover>
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
