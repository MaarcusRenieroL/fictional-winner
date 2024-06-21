"use server";

import { signIn } from "@/lib/auth";

export async function login(data: { email: string; password: string }) {
  await signIn("credentials", data);
}
