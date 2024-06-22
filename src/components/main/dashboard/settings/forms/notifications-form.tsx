"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { FC } from "react";
import { useForm } from "react-hook-form";

export const NotificationsForm: FC = () => {
  const form = useForm({});

  return (
    <Card className="mb-20 mt-10">
      <CardHeader>
        <CardTitle className="text-xl">Notifications Settings</CardTitle>
        <CardDescription>Please notify me about.</CardDescription>
      </CardHeader>
      <Form {...form}>
        <form className="space-y-8">
          <CardContent>
            <div>
              <h4 className="mb-2 text-medium font-medium">
                Blog Notifications
              </h4>
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="following_blog_notify"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4 bg-default-100">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">
                          Blogs From Users I Follow
                        </FormLabel>
                        <FormDescription>
                          Receive notifications from users you follow.
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div>
              <h4 className="mt-4  mb-2 text-medium font-medium">
                Email Notifications
              </h4>
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="social_emails"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4 bg-default-100">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">
                          Social emails
                        </FormLabel>
                        <FormDescription>
                          Receive emails for friend requests, follows, and more.
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="security_emails"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4 bg-default-100">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">
                          Security emails
                        </FormLabel>
                        <FormDescription>
                          Receive emails about your account activity and
                          security.
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="border-t px-6 py-2 bg-secondary justify-between">
            <div className="ml-auto">
              <Button size="sm" type="submit">
                Update notifications
              </Button>
            </div>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};
