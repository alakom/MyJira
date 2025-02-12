import ITask, { TaskStatus } from "../../models/ITask";
import { useDrop } from "react-dnd";
import Task from "../Task/Task";
import style from "./Column.module.scss";

interface IProps {
  column: TaskStatus;
  tasks: ITask[];
  moveTask: (item: ITask, to: TaskStatus) => void;
}

const Column = ({ column, tasks, moveTask }: IProps) => {
  const [, drop] = useDrop({
    accept: "TASK",
    drop: (item: ITask) => {
      moveTask(item, column);
    },
  });

  const combinedRef = (node: HTMLDivElement | null) => {
    drop(node);
    // if (drop) {
    //   if (typeof drop === "function") {
    //     drop(node);
    //   } else {
    //     return drop;
    //   }
    // }
  };

  const getColumnName = (): string => {
    if (column === TaskStatus.Queue) return "Backlog";
    if (column === TaskStatus.Development) return "В работе";
    if (column === TaskStatus.Done) return "Готово";
    return "";
  };

  const getColumnColor = (): string => {
    if (column === TaskStatus.Queue) return "#FDF3C2";
    if (column === TaskStatus.Development) return "#F1DAEE";
    if (column === TaskStatus.Done) return "#E4F2D9";
    return "";
  };

  return (
    <div
      ref={combinedRef}
      style={{ backgroundColor: getColumnColor() }}
      className={style.columnContainer}
    >
      <div className={style.titleColumn}>{getColumnName()}</div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default Column;
