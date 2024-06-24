import { FC } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { client } from "@/lib/trpc/client";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { changeNameSchema } from "@/lib/zod-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { User } from "@prisma/client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

type Props = {
  user: User;
};

export const NameForm: FC<Props> = ({ user }) => {
  const router = useRouter();
  const { mutateAsync: changeName } = client.user.changeName.useMutation({
    onSuccess: () => {
      toast("Success", {
        description: "Name changed successfully",
        duration: 1000,
      });
    },
    onError: () => {
      toast("Error", {
        description: "Error changing name",
        duration: 1000,
      });
    },
  });

  const form = useForm<z.infer<typeof changeNameSchema>>({
    resolver: zodResolver(changeNameSchema),
    defaultValues: {
      firstName: user.firstName,
      lastName: user.lastName,
    },
  });

  const handleChangeName = async (data: z.infer<typeof changeNameSchema>) => {
    await changeName(data);
    router.refresh();
  };

  return (
    <Card>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleChangeName)}>
          <CardHeader>
            <CardTitle className="text-xl">Display Name</CardTitle>
            <CardDescription>
              Please enter your full name, or a display name you are comfortable
              with.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-between w-full gap-5">
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
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="border-t px-6 py-2 bg-secondary justify-between">
            <div className="text-sm">Please use 32 characters at maximum.</div>
            <div className="ml-auto">
              <Button size="sm">Save</Button>
            </div>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};
