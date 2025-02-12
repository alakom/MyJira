import store from "../../../store";
import getProjects from "./getProjects";
import IProject, { ProjectStatus } from "../../../../models/IProject";

const deleteProject = (id: number) => {
  try {
    const projects = store.getState().projectReducer?.projects;
    const newProjects = projects?.map((item: IProject) => {
      if (item.id === id) return { ...item, status: ProjectStatus.DELETED };
      return item;
    });
    localStorage.setItem("projects", JSON.stringify(newProjects));
    getProjects();
  } catch (err) {
    getProjects();
  }
};

export default deleteProject;
