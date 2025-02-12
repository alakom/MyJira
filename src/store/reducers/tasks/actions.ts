import ITask from "../../../models/ITask";

export const SET_TASKS = "SET_TASKS";

interface SetTasksAction {
  type: typeof SET_TASKS;
  payload: ITask[];
}

export type TasksAction = SetTasksAction;

export const setTasks = (tasks: ITask[]): SetTasksAction => ({
  type: SET_TASKS,
  payload: tasks,
});
