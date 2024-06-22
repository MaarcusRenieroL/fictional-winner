import { FC } from "react";
import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs";
import { AccountForm } from "./forms/account-form";
import { NotificationsForm } from "./forms/notifications-form";

export const TabNav: FC = () => {
  return (
    <Tabs className="w-full" defaultValue="account">
      <TabsList className="w-full">
        <TabsTrigger className="w-full" value="account">
          Account
        </TabsTrigger>
        <TabsTrigger className="w-full" value="notifications">
          Notifications
        </TabsTrigger>
      </TabsList>
      <TabsContent className="mt-5" value="account">
        <AccountForm />
      </TabsContent>
      <TabsContent className="mt-5" value="notifications">
        <NotificationsForm />
      </TabsContent>
    </Tabs>
  );
};
