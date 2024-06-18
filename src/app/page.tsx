"use client";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col space-y-5 items-center justify-center h-screen w-screen">
      <h1 className="text-4xl font-bold">Task Management App</h1>
      <br />
      <Button onClick={() => alert("Clicked")}>Click me</Button>
    </div>
  );
}
