import IProject, { ProjectStatus } from "../../../../models/IProject";
import store from "../../../store";
import { getDate } from "../../../../utils/localStorage";
import getProjects from "./getProjects";

const createProject = (name: string) => {
  try {
    const projects = store.getState().projectReducer?.projects;
    const newProject: IProject = {
      id: projects?.length + 1,
      name,
      status: ProjectStatus.ACTIVE,
      startDate: getDate(new Date()),
    };
    localStorage.setItem("projects", JSON.stringify([...projects, newProject]));
    getProjects();
  } catch (err) {
    getProjects();
  }
};

export default createProject;
