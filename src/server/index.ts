import { inferReactQueryProcedureOptions } from "@trpc/react-query";
import { inferRouterInputs, inferRouterOutputs } from "@trpc/server";
import { router } from "./trpc";
import { userRouter } from "./routers/users";
import { taskRouter } from "./routers/tasks";
import { projectRouter } from "./routers/projects";

export const appRouter = router({
  user: userRouter,
  task: taskRouter,
  project: projectRouter,
});

export type AppRouter = typeof appRouter;
export type ReactQueryOptions = inferReactQueryProcedureOptions<AppRouter>;
export type RouterInputs = inferRouterInputs<AppRouter>;
export type RouterOutputs = inferRouterOutputs<AppRouter>;
