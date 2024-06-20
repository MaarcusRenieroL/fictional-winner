import { publicProcedure, router } from "../trpc";

export const projectRouter = router({
  getTest: publicProcedure.query(async ({}) => {
    const data = "Hello World";
    return data;
  }),
});
