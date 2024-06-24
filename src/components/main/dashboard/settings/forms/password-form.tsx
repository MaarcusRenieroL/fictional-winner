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
import { useForm } from "react-hook-form";
import { z } from "zod";
import { changePasswordSchema } from "@/lib/zod-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { client } from "@/lib/trpc/client";
import { toast } from "sonner";
import { signOut } from "next-auth/react";

export const PasswordForm: FC = () => {
  const form = useForm<z.infer<typeof changePasswordSchema>>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      password: "",
      newPassword: "",
      confirmNewPassword: "",
    },
  });

  const { mutateAsync: changePassword } =
    client.user.changePassword.useMutation({
      onSuccess: () => {
        toast("success", {
          description: "Password changed",
          duration: 1000,
        });
      },
      onError: () => {
        toast("Error", {
          description: "Error changing password",
          duration: 1000,
        });
      },
    });

  const handleChangePassword = async (
    data: z.infer<typeof changePasswordSchema>,
  ) => {
    await changePassword(data);
    await signOut();
  };

  return (
    <Card>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleChangePassword)}>
          <CardHeader>
            <CardTitle className="text-xl">Password</CardTitle>
            <CardDescription>
              Please enter your current password and a new password.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <Label>Password</Label>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter old password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="newPassword"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <Label>New Password</Label>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter new password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="confirmNewPassword"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <Label>Confirm New Password</Label>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Re-enter new password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="border-t px-6 py-2 bg-secondary justify-between">
            <div className="text-sm">
              Please use a password with at least 6 characters.
            </div>
            <div className="ml-auto">
              <Button size="sm">Save</Button>
            </div>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};
