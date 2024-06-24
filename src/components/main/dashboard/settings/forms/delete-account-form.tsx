"use client";

import { FC } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import {
  AlertDialogTrigger,
  AlertDialog,
  AlertDialogTitle,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { client } from "@/lib/trpc/client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { User } from "@prisma/client";

type Props = {
  user: User;
};

export const DeleteAccountForm: FC<Props> = ({ user }) => {
  const router = useRouter();
  const { mutateAsync: deleteUser } = client.user.deleteUser.useMutation({
    onSuccess: () => {
      toast("Success", {
        description: "User created successfully",
      });
    },
    onError: (error) => {
      toast("Error", {
        description: "Error creating user",
      });
      console.log(error);
    },
  });

  const handleDeleteUser = async (id: string) => {
    await deleteUser({ id });
    router.push("/");
  };

  return (
    <Card className="border-red-200 w-full">
      <CardHeader>
        <CardTitle className="text-xl">Delete Account</CardTitle>
        <CardDescription>
          Permanently remove your Personal Account and all of its contents from
          the Blog Vacancy platform. This action is not reversible, so please
          continue with caution.
        </CardDescription>
      </CardHeader>
      <CardFooter className="border-t border-red-200 px-6 py-2 bg-red-100/50 flex items-center justify-end w-full">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button size="sm" variant="destructive">
              Delete Personal Account
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete task</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to delete your account?
                <br />
                {user.id}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={() => handleDeleteUser(user.id)}>
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </CardFooter>
    </Card>
  );
};
