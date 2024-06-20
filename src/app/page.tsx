import { Button } from "@/components/ui/button";
import { server } from "@/lib/trpc/server";

export default function Home() {
  const data = server.project.getTest();
  return (
    <div className="flex flex-col space-y-5 items-center justify-center h-screen w-screen">
      <h1 className="text-4xl font-bold">Task Management App</h1>
      <br />
      <Button>Click me</Button>
      {data}
    </div>
  );
}
