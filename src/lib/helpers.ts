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

export const getProjectsByUserId = async (id: string) => {
  try {
    const data = await db.user.findFirst({
      where: {
        id: id,
      },
      include: {
        projects: true,
      },
    });

    if (!data) {
      return;
    }

    const projects = [];
    const assignedProjects = data.projects;

    if (assignedProjects) {
      for (let i = 0; i < assignedProjects.length; i++) {
        const project = await db.project.findFirst({
          where: {
            id: assignedProjects[i].projectId,
          },
        });

        if (project) {
          projects.push(project);
        }
      }
    }

    if (!projects) {
      return;
    }

    return { data: projects, message: "Projects found" };
  } catch (error) {
    console.log(error);
  }
};

export const getTasksByProjectIdAndUserId = async (
  userId: string,
  projectId: string,
) => {
  try {
    const tasks = await db.task.findMany({
      where: {
        userId: userId,
        projectId: projectId,
      },
    });

    return tasks;
  } catch (error) {}
};

export const getTasksByUserId = async (id: string) => {
  try {
    const tasks = await db.task.findMany({
      where: {
        userId: id,
      },
    });

    return tasks;
  } catch (error) {
    console.log(error);
  }
};
