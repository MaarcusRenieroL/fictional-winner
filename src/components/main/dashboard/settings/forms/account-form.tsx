"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import type { FC } from "react";

export const AccountForm: FC = () => {
  return (
    <div className="grid gap-8 mb-20 mt-10">
      <Card className="relative">
        <CardHeader>
          <CardTitle className="text-xl">Avatar</CardTitle>
          <CardDescription className="!mt-4">
            This is your avatar
            <br />
            Click on the avatar to upload a custom one from your files.
          </CardDescription>
        </CardHeader>
        <div className="absolute size-16 rounded-full bg-red-100 right-6 top-6" />
        <CardFooter className="border-t px-6 py-4 bg-secondary text-sm">
          An avatar is optional but strongly recommended.
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Display Name</CardTitle>
          <CardDescription>
            Please enter your full name, or a display name you are comfortable
            with.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <Input placeholder="Name" />
          </form>
        </CardContent>
        <CardFooter className="border-t px-6 py-2 bg-secondary justify-between">
          <div className="text-sm">Please use 32 characters at maximum.</div>
          <div className="ml-auto">
            <Button size="sm">Save</Button>
          </div>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Email</CardTitle>
          <CardDescription>
            Please enter the email address you want to use to log in with Blog
            Vacancy.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <Input
              defaultValue="anonymous@gmail.com"
              placeholder="your email"
            />
          </form>
        </CardContent>
        <CardFooter className="border-t px-6 py-2 bg-secondary justify-between">
          <div className="text-sm">We will email you to verify the change.</div>
          <div className="ml-auto">
            <Button size="sm">Save</Button>
          </div>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Username</CardTitle>
          <CardDescription>
            This is your URL namespace within Task Management App.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="w-full flex">
              <span
                className="w-64 bg-secondary text-sm flex justify-center items-center rounded-sm border text-muted-foreground"
                style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
              >
                task-management-app/
              </span>
              <Input
                placeholder="Name"
                className="focus-visible:ring-0 focus-visible:border-black overflow-hidden"
                style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
              />
            </div>
          </form>
        </CardContent>
        <CardFooter className="border-t px-6 py-2 bg-secondary justify-between">
          <div className="text-sm">Please use 48 characters at maximum.</div>
          <div className="ml-auto">
            <Button size="sm">Save</Button>
          </div>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Password</CardTitle>
          <CardDescription>
            Please enter your current password and a new password.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-5">
            <Input type="password" placeholder="Current password" />
            <Input type="password" placeholder="New password" />
            <Input type="password" placeholder="Confirm new password" />
          </form>
        </CardContent>
        <CardFooter className="border-t px-6 py-2 bg-secondary justify-between">
          <div className="text-sm">
            Please use a password with at least 8 characters.
          </div>
          <div className="ml-auto">
            <Button size="sm">Save</Button>
          </div>
        </CardFooter>
      </Card>
      <Card className="border-red-200">
        <CardHeader>
          <CardTitle className="text-xl">Delete Account</CardTitle>
          <CardDescription>
            Permanently remove your Personal Account and all of its contents
            from the Blog Vacancy platform. This action is not reversible, so
            please continue with caution.
          </CardDescription>
        </CardHeader>
        <CardFooter className="border-t border-red-200 px-6 py-2 bg-red-100/50 justify-end">
          <div className="ml-auto">
            <Button size="sm" variant="destructive">
              Delete Personal Account
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
