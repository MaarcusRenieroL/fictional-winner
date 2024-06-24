"use client";

import { FC } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { editProjectNameSchema } from "@/lib/zod-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { client } from "@/lib/trpc/client";
import { toast } from "sonner";

type Props = {
  title: string;
  id: string;
};

export const EditProjectNameForm: FC<Props> = ({ title, id }) => {
  const { mutateAsync: updateProjectName } =
    client.project.updateProjectName.useMutation({
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

  const form = useForm<z.infer<typeof editProjectNameSchema>>({
    resolver: zodResolver(editProjectNameSchema),
    defaultValues: {
      projectName: title,
      projectId: id,
    },
  });

  const handleEditProjectName = async (
    data: z.infer<typeof editProjectNameSchema>,
  ) => {
    console.log(data);
    await updateProjectName(data);
  };

  return (
    <Card>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleEditProjectName)}>
          <CardHeader>
            <CardTitle className="text-xl">Project Name</CardTitle>
            <CardDescription>Please enter a new project name </CardDescription>
          </CardHeader>
          <CardContent>
            <FormField
              name="projectName"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <Label>Project Name</Label>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Enter project name" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="projectId"
              control={form.control}
              render={({ field }) => (
                <FormItem hidden>
                  <FormLabel>
                    <Label>Project Id</Label>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Enter project id" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="border-t px-6 py-2 bg-secondary justify-between">
            <div className="text-sm">Please use 32 characters at maximum.</div>
            <div className="ml-auto">
              <Button type="submit" size="sm">
                Save
              </Button>
            </div>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};
