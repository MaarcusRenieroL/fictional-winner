import { PRIORITY, STATUS } from "@prisma/client";
import { z } from "zod";

export const registerSchema = z
  .object({
    firstName: z.string({
      required_error: "Name is required",
    }),
    lastName: z.string({
      required_error: "Name is required",
    }),
    email: z
      .string({
        required_error: "Email is required",
      })
      .email({
        message: "Invalid email",
      })
      .min(2, {
        message: "Email must be at least 2 characters long",
      }),
    password: z
      .string({
        required_error: "Password is required",
      })
      .min(6, {
        message: "Password must be at least 6 characters long",
      }),
    confirmPassword: z
      .string({
        required_error: "Confirm Password is required",
      })
      .min(6, {
        message: "Confirm Password must be at least 6 characters long",
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const loginSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email()
    .min(2, {
      message: "Email must be at least 2 characters long",
    }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, {
      message: "Password must be at least 6 characters long",
    }),
});

export const tasksSchema = z.object({
  taskName: z
    .string({
      required_error: "Task name is required",
    })
    .min(4, {
      message: "Task name should be at least 4 characters long",
    }),
  priority: z.nativeEnum(PRIORITY, {
    required_error: "Priority is required",
  }),
  status: z.nativeEnum(STATUS, {
    required_error: "Status is required",
  }),
  dueDate: z.preprocess(
    (args) => (args === "" ? undefined : args),
    z.coerce.date({
      required_error: "Due Date is required",
    }),
  ),
});

export const projectSchema = z.object({
  projectName: z
    .string({
      required_error: "Project name is required",
    })
    .min(4, {
      message: "Project name should be at least 4 characters long",
    }),
  description: z
    .string({
      required_error: "Description is required",
    })
    .min(4, {
      message: "Description should be at least 4 characters long",
    }),
});
