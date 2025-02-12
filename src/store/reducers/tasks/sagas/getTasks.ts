import store from "../../../store";
import getProjects from "../../projects/sagas/getProjects";
import ITask from "../../../../models/ITask";
import { setTasks } from "../actions";

const getTasks = (projectId: number) => {
  const projects = store.getState().projectReducer?.projects;
  if (projects?.length === 0) {
    getProjects();
  }
  const tasks: ITask[] = JSON.parse(localStorage.getItem("tasks") || "[]");
  if (tasks)
    store.dispatch(
      setTasks(tasks.filter((task) => task.projectId === projectId)),
    );
};

export default getTasks;
