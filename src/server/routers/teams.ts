import { TRPCError } from "@trpc/server";
import { privateProcedure, router } from "../trpc";
import { db } from "@/lib/db";

export const teamRouter = router({
  getTeamMembers: privateProcedure.query(async ({ ctx }) => {
    try {
      const { userId } = ctx;

      const user = await db.user.findFirst({
        where: {
          id: userId,
        },
        include: {
          team: true,
        },
      });

      if (!user) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "User not found",
        });
      }

      const team = await db.team.findFirst({
        where: {
          id: user.teamId ?? "",
        },
        include: {
          teamMembers: true,
        },
      });

      return {
        data: team?.teamMembers,
        statusCode: 200,
        message: "Team members fetched successfully",
      };
    } catch (error) {
      console.log(error);
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Something went wrong",
      });
    }
  }),
});
