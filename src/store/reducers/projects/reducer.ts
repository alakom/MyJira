import { ProjectAction, SET_PROJECTS } from "./actions";
import IProject from "models/IProject";

interface IProjectState {
  projects: IProject[];
}

const initialState: IProjectState = {
  projects: [],
};

const projectReducer = (
  state = initialState,
  action: ProjectAction,
): IProjectState => {
  switch (action.type) {
    case SET_PROJECTS:
      return { ...state, projects: action.payload };
    default:
      return state;
  }
};

export default projectReducer;
