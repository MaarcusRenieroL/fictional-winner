import { projectSchema } from "@/lib/zod-schema";
import { privateProcedure, router } from "../trpc";
import { TRPCError } from "@trpc/server";
import { db } from "@/lib/db";

export const projectRouter = router({
  addProject: privateProcedure
    .input(projectSchema)
    .mutation(async ({ input }) => {
      try {
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
