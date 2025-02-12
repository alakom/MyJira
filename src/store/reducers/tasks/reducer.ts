import { TasksAction, SET_TASKS } from "./actions";
import ITask from "../../../models/ITask";

interface ITasksState {
  tasks: ITask[];
}

const initialState: ITasksState = {
  tasks: [],
};

const tasksReducer = (
  state = initialState,
  action: TasksAction,
): ITasksState => {
  switch (action.type) {
    case SET_TASKS:
      return { ...state, tasks: action.payload };
    default:
      return state;
  }
};

export default tasksReducer;
