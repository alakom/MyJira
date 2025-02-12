import IProject from "../../../../models/IProject";
import store from "../../../store";
import { setProjects } from "../actions";
import {
  generateProjects,
  generateTasks,
} from "../../../../utils/localStorage";

const getProjects = () => {
  try {
    let projects: IProject[] | null = JSON.parse(
      localStorage.getItem("projects"),
    );
    if (!projects) {
      projects = generateProjects();
      localStorage.setItem("projects", JSON.stringify(projects));
      const tasks = generateTasks(projects);
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    store.dispatch(setProjects(projects));
  } catch (err) {}
};

export default getProjects;
