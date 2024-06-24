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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { client } from "@/lib/trpc/client";
import { editTeamMemberSchema } from "@/lib/zod-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { TEAM_ROLE } from "@prisma/client";
import { Edit } from "lucide-react";
import type { FC } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type { z } from "zod";

type Props = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: TEAM_ROLE;
};

export const EditTeamMemberModal: FC<Props> = ({
  id,
  firstName,
  lastName,
  email,
  role,
}) => {
  const form = useForm<z.infer<typeof editTeamMemberSchema>>({
    resolver: zodResolver(editTeamMemberSchema),
    defaultValues: {
      id: id,
      firstName: firstName,
      lastName: lastName,
      email: email,
      role: role,
    },
  });

  const { mutateAsync: editTeamMember } =
    client.team.editTeamMember.useMutation({
      onSuccess: () => {
        toast("Success", {
          description: "Team member updated successfully",
        });
      },
      onError: (error) => {
        toast("Error", {
          description: "Error updating team member",
        });
        console.log(error);
      },
    });

  const handleEditTeamMember = async (
    data: z.infer<typeof editTeamMemberSchema>,
  ) => {
    await editTeamMember(data);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon">
          <Edit className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Edit Task</DialogTitle>
          <DialogDescription>
            Fill in the form below to edit {firstName + " " + lastName + "'s"}{" "}
            details.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleEditTeamMember)}>
            <div className="flex flex-col items-center justify-between w-full gap-5">
              <FormField
                name="id"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="w-full" hidden>
                    <FormLabel>
                      <Label>id</Label>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Enter first name"
                        className="w-full"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex items-center justify-between w-full gap-5">
                <FormField
                  name="firstName"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>
                        <Label>First Name</Label>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter first name"
                          className="w-full"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="lastName"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>
                        <Label>Last Name</Label>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter last name"
                          className="w-full"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
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
                        disabled
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="role"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>
                      <Label>Role</Label>
                    </FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue
                            defaultValue={role}
                            placeholder="Select Role"
                          />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup defaultValue="">
                            <SelectLabel>Role</SelectLabel>
                            <SelectItem value="ADMIN">ADMIN</SelectItem>
                            <SelectItem value="MEMBER">MEMBER</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
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
