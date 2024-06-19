"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardTitle,
  CardHeader,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

export function AppearanceForm() {
  return (
    <div className="mt-10">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Font</CardTitle>
          <CardDescription>Choose the font you want to use</CardDescription>
        </CardHeader>
        <CardContent>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a font" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fonts</SelectLabel>
                <SelectItem value="jetbrains-mono">JetBrains Mono</SelectItem>
                <SelectItem value="times-new-roman">Times New Roman</SelectItem>
                <SelectItem value="arial">Arial</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </CardContent>
        <CardFooter className="border-t px-6 py-2 bg-secondary justify-between">
          <div className="text-sm">Please select any one font</div>
          <div className="ml-auto">
            <Button size="sm">Save</Button>
          </div>
        </CardFooter>
      </Card>
      <Card className="mt-10">
        <div className="flex items-center justify-between">
          <CardHeader>
            <CardTitle className="text-xl">Dark Mode</CardTitle>
            <CardDescription>
              Change theme to dark or light mode
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Switch />
          </CardContent>
        </div>
        <CardFooter className="border-t px-6 py-2 bg-secondary justify-between">
          <div className="ml-auto">
            <Button size="sm">Save</Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
