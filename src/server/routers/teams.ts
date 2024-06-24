import { TRPCError } from "@trpc/server";
import { privateProcedure, router } from "../trpc";
import { db } from "@/lib/db";
import {
  createTeamSchema,
  removeTeamMemberSchema,
  editTeamMemberSchema,
  projectMemberSchema,
  teamMemberSchema,
} from "@/lib/zod-schema";

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
  addTeamMember: privateProcedure
    .input(teamMemberSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        const { userId } = ctx;
        const { email } = input;

        const team = await db.user.findFirst({
          where: {
            id: userId,
          },
          select: {
            teamId: true,
          },
        });

        if (!team) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "Team not found",
          });
        }

        const user = await db.user.findFirst({
          where: {
            email,
          },
        });

        if (!user) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "User not found",
          });
        }

        await db.team.update({
          where: {
            id: team.teamId ?? "",
          },
          data: {
            teamMembers: {
              connect: {
                id: user.id,
              },
            },
          },
        });
      } catch (error) {
        console.log(error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Something went wrong",
        });
      }
    }),
  createTeam: privateProcedure
    .input(createTeamSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        const { userId } = ctx;
        const { teamName } = input;

        const newTeam = await db.user.update({
          where: {
            id: userId,
          },
          data: {
            role: "ADMIN",
            team: {
              create: {
                teamName: teamName,
              },
            },
          },
        });

        return {
          data: newTeam,
          statusCode: 201,
          message: "Team created successfully",
        };
      } catch (error) {
        console.log(error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Something went wrong",
        });
      }
    }),
  addProjectMember: privateProcedure
    .input(projectMemberSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        const { userId } = ctx;
        const { email, projectId } = input;

        const user = await db.user.findFirst({
          where: {
            email: email,
          },
          include: {
            projects: true,
          },
        });

        console.log(user);

        if (!user) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "User not found",
          });
        }

        await db.usersProject.create({
          data: {
            userId: user.id,
            projectId: projectId,
          },
        });
      } catch (error) {
        console.log(error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Something went wrong",
        });
      }
    }),
  editTeamMember: privateProcedure
    .input(editTeamMemberSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        const { userId } = ctx;
        const { firstName, lastName, email, id, role } = input;

        const adminUser = await db.user.findFirst({
          where: {
            id: userId,
          },
        });

        if (!adminUser) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "User not found",
          });
        }

        if (adminUser.role !== "ADMIN") {
          throw new TRPCError({
            code: "UNAUTHORIZED",
            message: "User should have admin access",
          });
        }

        const existingUser = await db.user.findFirst({
          where: {
            id: id,
          },
        });

        if (!existingUser) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "User not found",
          });
        }

        const updatedUser = await db.user.update({
          where: {
            id: id,
          },
          data: {
            firstName: firstName,
            lastName: lastName,
            role: role,
          },
        });

        return {
          data: updatedUser,
          statusCode: 201,
          message: "User updated",
        };
      } catch (error) {
        console.log(error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Something went wrong",
        });
      }
    }),
  removeTeamMember: privateProcedure
    .input(removeTeamMemberSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        const { userId } = ctx;
        const { id, projectId } = input;

        const adminUser = await db.user.findFirst({
          where: {
            id: userId,
          },
        });

        if (!adminUser) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "User not found",
          });
        }

        if (adminUser.role !== "ADMIN") {
          throw new TRPCError({
            code: "UNAUTHORIZED",
            message: "User should have admin access",
          });
        }

        const existingUser = await db.user.findFirst({
          where: {
            id: id,
          },
        });

        if (!existingUser) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "User not found",
          });
        }

        const relation = await db.usersProject.findFirst({
          where: {
            userId: id,
            projectId: projectId,
          },
        });

        if (!relation) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "Relation not found",
          });
        }

        const removedUser = await db.usersProject.delete({
          where: {
            id: relation.id,
          },
        });

        return {
          data: removedUser,
          statusCode: 201,
          message: "User removed",
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
