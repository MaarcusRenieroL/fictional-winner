// @typescript-eslint/no-unused-vars
import { TEAM_ROLE } from "@prisma/client";
import type { Session, User } from "next-auth";
import type { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
  interface JWT {
    userId: string;
    role: TEAM_ROLE;
  }
}

declare module "next-auth" {
  interface Session {
    user: User & {
      id: string;
      role: TEAM_ROLE;
    };
  }
}
