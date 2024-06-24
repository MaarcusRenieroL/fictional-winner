import {
  changeNameSchema,
  changePasswordSchema,
  deleteUserSchema,
  registerSchema,
} from "@/lib/zod-schema";
import { privateProcedure, publicProcedure, router } from "../trpc";
import { TRPCError } from "@trpc/server";
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";

export const userRouter = router({
  addUser: publicProcedure.input(registerSchema).mutation(async ({ input }) => {
    try {
      const { email, password, confirmPassword, firstName, lastName } = input;

      if (!email || !password || !confirmPassword || !firstName || !lastName) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Missing required fields",
        });
      }

      const existingUser = await db.user.findFirst({
        where: {
          email: email,
        },
      });

      if (existingUser) {
        throw new TRPCError({
          code: "CONFLICT",
          message: "User already exists",
        });
      }

      const newUser = await db.user.create({
        data: {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: await bcrypt.hash(password, 10),
        },
      });

      return {
        data: newUser,
        statusCode: 200,
        message: "User created succesfully",
      };
    } catch (error) {
      console.log(error);
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Error creating user",
      });
    }
  }),
  deleteUser: privateProcedure
    .input(deleteUserSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        const { userId } = ctx;
        const { id } = input;

        const loggedInUser = await db.user.findFirst({
          where: {
            id: userId,
          },
        });

        if (!loggedInUser) {
          throw new TRPCError({
            code: "UNAUTHORIZED",
            message: "User must be logged in",
          });
        }

        const deletedUser = await db.user.delete({
          where: {
            id: id,
          },
          include: {
            tasks: true,
            projects: true,
            team: true,
          },
        });

        return {
          data: deletedUser,
          status: 200,
          message: "User deleted",
        };
      } catch (error) {
        console.log(error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Something went wrong",
        });
      }
    }),
  changePassword: privateProcedure
    .input(changePasswordSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        const { userId } = ctx;
        const { password, newPassword, confirmNewPassword } = input;

        const loggedInUser = await db.user.findFirst({
          where: {
            id: userId,
          },
        });

        if (!loggedInUser) {
          throw new TRPCError({
            code: "UNAUTHORIZED",
            message: "User must be logged in",
          });
        }

        if (password === newPassword) {
          throw new TRPCError({
            code: "CONFLICT",
            message: "Old and new passwords can't be the same",
          });
        }

        if (newPassword !== confirmNewPassword) {
          throw new TRPCError({
            code: "CONFLICT",
            message: "Passowrds don't match",
          });
        }

        const updatedUser = await db.user.update({
          where: {
            id: loggedInUser.id,
          },
          data: {
            password: await bcrypt.hash(newPassword, 10),
          },
        });

        return {
          data: updatedUser,
          statusCode: 200,
          message: "Password updated",
        };
      } catch (error) {
        console.log(error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Something went wrong",
        });
      }
    }),
  changeName: privateProcedure
    .input(changeNameSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        const { userId } = ctx;
        const { firstName, lastName } = input;

        const loggedInUser = await db.user.findFirst({
          where: {
            id: userId,
          },
        });

        if (!loggedInUser) {
          throw new TRPCError({
            code: "UNAUTHORIZED",
            message: "User must be logged in",
          });
        }

        const updatedUser = await db.user.update({
          where: {
            id: loggedInUser.id,
          },
          data: {
            firstName: firstName,
            lastName: lastName,
          },
        });

        return {
          data: updatedUser,
          statusCode: 200,
          message: "Password updated",
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
