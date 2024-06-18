import { TabNav } from "@/components/main/dashboard/settings/tab-nav";

export default function SettingsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Settings</h1>
      <div className="mt-5">
        <TabNav />
      </div>
    </div>
  );
}
