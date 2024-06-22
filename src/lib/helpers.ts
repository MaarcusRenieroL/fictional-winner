import { db } from "./db";

export const getProjectData = async (id: string) => {
  try {
    const project = await db.project.findFirst({
      where: {
        id: id,
      },
    });

    if (!project) {
      return {
        data: null,
        message: "Project not found",
      };
    }

    return {
      data: project,
      message: "Project found",
    };
  } catch (error) {
    console.log(error);
  }
};

export const getTasksByProjectId = async (id: string) => {
  try {
    const project = await db.project.findFirst({
      where: {
        id: id,
      },
    });

    if (!project) {
      return;
    }

    const tasks = await db.task.findMany({
      where: {
        projectId: project.id,
      },
    });

    return tasks;
  } catch (error) {
    console.log(error);
  }
};

export const getProjects = async () => {
  try {
    const projects = await db.project.findMany();

    return projects;
  } catch (error) {
    console.log(error);
  }
};

export const getProjectsByUserId = async (id: string) => {
  try {
    const projects = await db.user.findFirst({
      where: {
        id: id,
      },
      include: {
        projects: true,
      },
    });

    if (!projects) {
      return;
    }

    return projects.projects;
  } catch (error) {
    console.log(error);
  }
};
