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
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type * as z from "zod";
import { client } from "@/lib/trpc/client";
import { toast } from "sonner";
import { Edit } from "lucide-react";
import type { FC } from "react";
import { tasksSchema } from "@/lib/zod-schema";
import type { PRIORITY, Project, STATUS } from "@prisma/client";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandList,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import type { User } from "@prisma/client";

type Props = {
  taskName: string;
  status: STATUS;
  priority: PRIORITY;
  dueDate: Date;
  projects: Project[];
  users: User[];
  role: string;
  user: string;
};

export const EditTaskModal: FC<Props> = ({
  taskName,
  status,
  users,
  priority,
  role,
  dueDate,
  user,
}) => {
  const form = useForm<z.infer<typeof tasksSchema>>({
    resolver: zodResolver(tasksSchema),
    defaultValues: {
      taskName: taskName,
      status: status,
      priority: priority,
      dueDate: dueDate,
      userName: user,
    },
  });
  const { mutateAsync: editTask } = client.task.updateTask.useMutation({
    onSuccess: () => {
      toast("Success", {
        description: "User updated successfully",
      });
    },
    onError: (error) => {
      toast("Error updating User", {
        description: error.message,
      });
    },
  });
  const handleUpdateTask = async (data: z.infer<typeof tasksSchema>) => {
    console.log(data);
    await editTask(data);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon">
          <Edit className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Edit Task</DialogTitle>
          <DialogDescription>
            Fill out the form below to edit task.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleUpdateTask)}>
            <div className="flex flex-col items-center justify-between w-full gap-5">
              <FormField
                name="taskName"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>
                      <Label>Task Name</Label>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Enter task name"
                        className="w-full"
                        {...field}
                        disabled
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex items-center justify-between w-full gap-5">
                <FormField
                  name="status"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>
                        <Label>Status</Label>
                      </FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue
                              defaultValue="NOT_STARTED"
                              placeholder="Select Status"
                            />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup defaultValue="">
                              <SelectLabel>Status</SelectLabel>
                              <SelectItem value="NOT_STARTED">
                                Not Started
                              </SelectItem>
                              <SelectItem value="IN_PROGRESS">
                                In Progress
                              </SelectItem>
                              <SelectItem value="PENDING">Pending</SelectItem>
                              <SelectItem value="COMPLETED">
                                Completed
                              </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="priority"
                  control={form.control}
                  disabled={role === "MEMBER"}
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>
                        <Label>Priority</Label>
                      </FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue
                              defaultValue="LOW"
                              placeholder="Select Priority"
                            />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup defaultValue="LOW">
                              <SelectLabel>Priority</SelectLabel>
                              <SelectItem value="LOW">LOW</SelectItem>
                              <SelectItem value="MEDIUM">MEDIUM</SelectItem>
                              <SelectItem value="HIGH">HIGH</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="dueDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col w-full">
                    <FormLabel className="mb-2">
                      <Label>Due Date</Label>
                    </FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className={`"w-full text-left font-normal ${
                              !field.value && "text-muted-foreground"
                            }`}
                            disabled={role === "MEMBER"}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-full" align="center">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="userName"
                control={form.control}
                disabled={role === "MEMBER"}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>
                      <Label>Assign to</Label>
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
                              disabled={role === "MEMBER"}
                            >
                              {field.value
                                ? users.find(
                                    (user) =>
                                      user.firstName + " " + user.lastName ===
                                      field.value,
                                  )?.firstName
                                : "Select user"}
                              <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-full p-0">
                          <Command>
                            <CommandInput
                              placeholder="Search crew members..."
                              className="h-9"
                            />
                            <CommandEmpty>No users found.</CommandEmpty>
                            <CommandList>
                              {users.map((user) => (
                                <CommandItem
                                  value={user.firstName + " " + user.lastName}
                                  key={user.id}
                                  onSelect={() => {
                                    form.setValue(
                                      "userName",
                                      user.firstName + " " + user.lastName,
                                    );
                                  }}
                                >
                                  {user.firstName + " " + user.lastName}
                                  <CheckIcon
                                    className={cn(
                                      "ml-auto h-4 w-4",
                                      user.firstName + " " + user.lastName ===
                                        field.value
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
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter className="mt-5">
              <Button type="submit">Save Changes</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
