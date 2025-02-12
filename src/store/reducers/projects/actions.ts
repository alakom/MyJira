import IProject from "../../../models/IProject";

export const SET_PROJECTS = "SET_PROJECTS";

interface SetProjectsAction {
  type: typeof SET_PROJECTS;
  payload: IProject[];
}

export type ProjectAction = SetProjectsAction;

export const setProjects = (projects: IProject[]): SetProjectsAction => ({
  type: SET_PROJECTS,
  payload: projects,
});
