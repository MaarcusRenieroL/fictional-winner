import {
  deleteProjectSchema,
  editProjectNameSchema,
  projectSchema,
} from "@/lib/zod-schema";
import { privateProcedure, router } from "../trpc";
import { TRPCError } from "@trpc/server";
import { db } from "@/lib/db";

export const projectRouter = router({
  getProjects: privateProcedure.query(async () => {
    try {
      const tasks = await db.project.findMany();

      return {
        data: tasks,
        statusCode: 200,
        message: "Tasks fetched successfully",
      };
    } catch (error) {
      console.log(error);
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Something went wrong",
      });
    }
  }),
  addProject: privateProcedure
    .input(projectSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        const { userId } = ctx;
        const { projectName, description } = input;

        const existingProject = await db.project.findFirst({
          where: {
            projectName: projectName,
          },
        });

        if (!existingProject) {
          const newProject = await db.project.create({
            data: {
              projectName: projectName,
              description: description,
            },
          });

          await db.user.update({
            where: {
              id: userId,
            },
            data: {
              role: "ADMIN",
            },
          });

          await db.usersProject.create({
            data: {
              userId: userId,
              projectId: newProject.id,
            },
          });

          return {
            data: newProject,
            statusCode: 200,
            message: "Project created succesfully",
          };
        }
        throw new TRPCError({
          code: "CONFLICT",
          message: "Project already exists",
        });
      } catch (error) {
        console.log(error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Something went wrong",
        });
      }
    }),
  updateProjectName: privateProcedure
    .input(editProjectNameSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        const { userId } = ctx;
        const { projectName, projectId } = input;

        const existingUser = await db.user.findFirst({
          where: {
            id: userId,
          },
        });

        if (!existingUser) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "User not found",
          });
        }

        if (existingUser.role === "MEMBER") {
          throw new TRPCError({
            code: "UNAUTHORIZED",
            message:
              "Member of the project is not allowed to update project settings",
          });
        }

        const existingProject = await db.project.findFirst({
          where: {
            id: projectId,
          },
        });

        if (!existingProject) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "Project not found",
          });
        }

        const updatedProject = await db.project.update({
          where: {
            id: existingProject.id,
          },
          data: {
            projectName: projectName,
          },
        });

        return {
          data: updatedProject,
          statusCode: 201,
          message: "Project name updated",
        };
      } catch (error) {
        console.log(error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Something went wrong",
        });
      }
    }),
  deleteProject: privateProcedure
    .input(deleteProjectSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        const { userId } = ctx;
        const { projectId } = input;

        const existingUser = await db.user.findFirst({
          where: {
            id: userId,
          },
        });

        if (!existingUser) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "User not found",
          });
        }

        if (existingUser.role === "MEMBER") {
          throw new TRPCError({
            code: "UNAUTHORIZED",
            message:
              "Member of the project is not allowed to update project settings",
          });
        }

        const existingProject = await db.project.findFirst({
          where: {
            id: projectId,
          },
        });

        if (!existingProject) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "Project not found",
          });
        }

        await db.usersProject.deleteMany({
          where: {
            projectId: existingProject.id,
          },
        });

        const deletedProject = await db.project.delete({
          where: {
            id: existingProject.id,
          },
        });

        return {
          data: deletedProject,
          statusCode: 201,
          message: "Project deleted",
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
