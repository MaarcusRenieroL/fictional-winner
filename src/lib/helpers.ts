import { db } from "./db";

export const getProjectData = async (id: string) => {
  try {
    const project = await db.project.findFirst({
      where: {
        id: id,
      },
    });

    if (project) {
      return {
        data: project,
        message: "Project found",
      };
    } else {
      return {
        data: null,
        message: "Project not found",
      };
    }
  } catch (error) {
    console.log(error);
  }
};
