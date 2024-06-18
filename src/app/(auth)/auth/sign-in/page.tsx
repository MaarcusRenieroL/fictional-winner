import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Logo from "../../../favicon.ico";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { FaGoogle, FaGithub, FaApple } from "react-icons/fa";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <Card className="p-10">
        <CardHeader className="flex flex-col justify-center items-center space-y-4 text-center">
          <Image src={Logo} alt="Logo" width={25} height={25} />
          <CardTitle>Sign in to your task management app</CardTitle>
          <CardDescription>
            Welcome back! Please sign in to continue
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="flex items-center justify-evenly gap-5">
            <Button size="icon" className="w-full" variant="outline">
              <FaGoogle className="h-5 w-5" />
            </Button>
            <Button size="icon" className="w-full" variant="outline">
              <FaGithub className="h-5 w-5" />
            </Button>
            <Button size="icon" className="w-full" variant="outline">
              <FaApple className="h-5 w-5" />
            </Button>
          </div>
          <div className="flex items-center justify-center space-x-2 my-5">
            <div className="flex-grow h-px bg-gray-300" />
            <span className="text-sm text-gray-600">or</span>
            <div className="flex-grow h-px bg-gray-300" />
          </div>
          <form>
            <div className="space-y-2">
              <Label>Email</Label>
              <Input type="email" placeholder="Enter your email" />
            </div>
            <div className="mt-5 space-y-2">
              <Label>Password</Label>
              <Input type="password" placeholder="Enter your password" />
            </div>
            <Button className="w-full mt-5">Sign in</Button>
          </form>
        </CardContent>
        <CardFooter className="p-0 flex items-center justify-center w-full mt-5">
          Don't have an account?{" "}
          <span className="ml-3">
            <Link href="/sign-up">
              <Button variant="link" className="hover:underline">
                Sign up
              </Button>
            </Link>
          </span>
        </CardFooter>
      </Card>
    </div>
  );
}
