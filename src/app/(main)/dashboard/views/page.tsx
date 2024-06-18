import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";

export default function ViewsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Views Page</h1>
      <div className="mt-5">
        <Tabs defaultValue="calendar" className="w-full">
          <TabsList>
            <TabsTrigger value="calendar">Calendar View</TabsTrigger>
            <TabsTrigger value="kanban">Kanban View</TabsTrigger>
            <TabsTrigger value="timeline">Timeline View</TabsTrigger>
          </TabsList>
          <TabsContent className="mt-5" value="calendar">
            Calendar view here
          </TabsContent>
          <TabsContent className="mt-5" value="kanban">
            Kanban view here
          </TabsContent>
          <TabsContent className="mt-5" value="timeline">
            Timeline view here
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
