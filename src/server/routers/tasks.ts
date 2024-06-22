import { tasksSchema } from "@/lib/zod-schema";
import { privateProcedure, router } from "../trpc";
import { TRPCError } from "@trpc/server";
import { db } from "@/lib/db";
import { z } from "zod";

export const taskRouter = router({
  getTasks: privateProcedure.query(async ({}) => {
    try {
      const data = await db.task.findMany();
      return {
        data: data,
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
  updateTask: privateProcedure
    .input(tasksSchema)
    .mutation(async ({ input }) => {
      try {
        const { taskName, priority, status, dueDate } = input;

        const existingTask = await db.task.findFirst({
          where: {
            taskName: taskName,
          },
        });

        if (existingTask) {
          const updatedTask = await db.task.update({
            where: {
              id: existingTask.id,
            },
            data: {
              status: status,
              priority: priority,
              dueDate: dueDate,
            },
          });

          return {
            data: updatedTask,
            statusCode: 200,
            message: "Task updated successfully",
          };
        } else {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "Task not found",
          });
        }
      } catch (error) {
        console.log(error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Error updating task",
        });
      }
    }),
  deleteTask: privateProcedure.input(z.string()).mutation(async ({ input }) => {
    try {
      const deletedTask = await db.task.delete({
        where: {
          id: input,
        },
      });

      return {
        success: true,
        status: 200,
        message: "User Deleted Successfully",
        data: deletedTask.id,
      };
    } catch (error) {
      console.log(error);

      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
      });
    }
  }),
});
