import ITask, { TaskStatus } from "../../../../models/ITask";
import getTasks from "./getTasks";

const changeStatusTask = (task: ITask, newStatus: TaskStatus) => {
  const tasks: ITask[] = JSON.parse(localStorage.getItem("tasks"));
  localStorage.setItem(
    "tasks",
    JSON.stringify(
      tasks.map((tsk: ITask) => {
        if (task.id === tsk.id && task.projectId === tsk.projectId) {
          return { ...tsk, status: newStatus };
        }
        return tsk;
      }),
    ),
  );
  getTasks(task.projectId);
};

export default changeStatusTask;
