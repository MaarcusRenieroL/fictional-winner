import { PRIORITY, STATUS, TEAM_ROLE } from "@prisma/client";
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
  projectId: z.string({
    required_error: "Project is required",
  }),
  userName: z.string({
    required_error: "User required",
  }),
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

export const teamMemberSchema = z.object({
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
});

export const createTeamSchema = z.object({
  teamName: z
    .string({
      required_error: "Team name is required",
    })
    .min(2, {
      message: "Team name must be at least 2 characters long",
    }),
});

export const projectMemberSchema = z.object({
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
  projectId: z.string(),
});

export const editProjectNameSchema = z.object({
  projectName: z
    .string({
      required_error: "Project name is required",
    })
    .min(4, {
      message: "Project name must be at least 4 characters long",
    })
    .max(32, {
      message: "Project name must not exceed a total of 32 characters",
    }),
  projectId: z.string(),
});

export const deleteProjectSchema = z.object({
  projectId: z.string(),
});

export const editTeamMemberSchema = z.object({
  id: z.string(),
  firstName: z
    .string({
      required_error: "First name is required",
    })
    .min(4, {
      message: "First name should be at least 4 characters long",
    }),
  lastName: z
    .string({
      required_error: "Last name is required",
    })
    .min(4, {
      message: "Last name should be at least 4 characters long",
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
  role: z.nativeEnum(TEAM_ROLE, {
    required_error: "Role is required",
  }),
});

export const removeTeamMemberSchema = z.object({
  id: z.string(),
  projectId: z.string(),
});
