import { Priority } from "../../models/ITask";
import style from "./PriorityStatus.module.scss";

interface IProps {
  priority: Priority;
}

const PriorityStatus = ({ priority }: IProps) => {
  if (priority === Priority.HIGH) return <div className={style.high} />;
  if (priority === Priority.MEDIUM) return <div className={style.medium} />;
  if (priority === Priority.LOW) return <div className={style.low} />;
  return null;
};

export default PriorityStatus;
