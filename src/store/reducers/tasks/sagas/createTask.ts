import ITask, { Priority, TaskStatus } from "../../../../models/ITask";
import getTasks from "./getTasks";
import { getCurrentTimeFormatted } from "../../../../utils/localStorage";

interface IProps {
  title: string;
  projectId: number;
  description: string;
  priority: Priority;
}

const createTask = (task: IProps) => {
  const tasks: ITask[] = JSON.parse(localStorage.getItem("tasks"));
  const newTask = task as ITask;
  newTask.id = tasks.length + 1;
  newTask.createDate = getCurrentTimeFormatted();
  newTask.status = TaskStatus.Queue;
  localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));
  getTasks(task.projectId);
};

export default createTask;
