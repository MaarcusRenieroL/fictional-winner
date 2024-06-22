import { projectSchema } from "@/lib/zod-schema";
import { privateProcedure, router } from "../trpc";
import { TRPCError } from "@trpc/server";
import { db } from "@/lib/db";

export const projectRouter = router({
  getProjects: privateProcedure.query(async ({}) => {
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
        } else {
          throw new TRPCError({
            code: "CONFLICT",
            message: "Project already exists",
          });
        }
      } catch (error) {
        console.log(error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Something went wrong",
        });
      }
    }),
});
