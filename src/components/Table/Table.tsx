import ITask, { TaskStatus } from "../../models/ITask";
import { useAppSelector } from "../../utils/redux";
import Column from "../Column/Column";
import changeStatusTask from "../../store/reducers/tasks/sagas/changeStatusTask";

const Table = () => {
  const columns = [TaskStatus.Queue, TaskStatus.Development, TaskStatus.Done];
  const tasks: ITask[] | undefined = useAppSelector(
    (state) => state.tasksReducer?.tasks,
  );

  const getTasksByColumn = (column: TaskStatus): ITask[] => {
    return (tasks || []).filter((task: ITask) => task.status === column);
  };

  const moveTask = (task: ITask, to: TaskStatus) => {
    changeStatusTask(task, to);
  };

  return (
    <div style={{ display: "flex" }}>
      {columns.map((column) => (
        <Column
          key={column}
          column={column}
          tasks={getTasksByColumn(column)}
          moveTask={moveTask}
        />
      ))}
    </div>
  );
};
export default Table;
