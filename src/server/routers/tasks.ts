import { tasksSchema } from "@/lib/zod-schema";
import { privateProcedure, router } from "../trpc";
import { TRPCError } from "@trpc/server";
import { db } from "@/lib/db";

export const taskRouter = router({
  addTask: privateProcedure.input(tasksSchema).mutation(async ({ input }) => {
    try {
      const { taskName, priority, status, dueDate } = input;

      const existingTask = await db.task.findFirst({
        where: {
          taskName: taskName,
        },
      });

      if (existingTask) {
        throw new TRPCError({
          code: "CONFLICT",
          message: "Task already exist",
        });
      }

      const newTask = await db.task.create({
        data: {
          taskName: taskName,
          priority: priority,
          status: status,
          dueDate: dueDate !== undefined ? new Date(dueDate) : dueDate,
        },
      });

      return {
        data: newTask,
        statusCode: 200,
        message: "Task created successfully",
      };
    } catch (error) {
      console.log(error);
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Error adding a task",
      });
    }
  }),
});
