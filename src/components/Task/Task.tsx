import ITask from "../../models/ITask";
import style from "./Task.module.scss";
import { useDrag } from "react-dnd";
import PriorityStatus from "../PriorityStatus/PriorityStatus";
interface IProps {
  task: ITask;
}

const Task = ({ task }: IProps) => {
  const [{ isDragging }, drag] = useDrag({
    type: "TASK",
    item: task,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const combinedRef = (node: HTMLDivElement | null) => {
    drag(node);
    // if (drop) {
    //   if (typeof drop === "function") {
    //     drop(node);
    //   } else {
    //     return drop;
    //   }
    // }
  };

  return (
    <div
      ref={combinedRef}
      style={{
        opacity: isDragging ? 0.5 : 1,
      }}
      className={style.container}
    >
      <div>{task.title}</div>
      <PriorityStatus priority={task.priority} />
    </div>
  );
};

export default Task;
