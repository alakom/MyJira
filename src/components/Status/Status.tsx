import { ProjectStatus } from "../../models/IProject";
import style from "./Status.module.scss";
import cn from "classnames";

interface IProps {
  readonly status: ProjectStatus;
}

const Status = ({ status }: IProps) => {
  if (status === ProjectStatus.ACTIVE)
    return <div className={cn(style.container, style.active)}>Активный</div>;

  if (status === ProjectStatus.PAUSED)
    return (
      <div className={cn(style.container, style.paused)}>Приостановлен</div>
    );

  if (status === ProjectStatus.DELETED)
    return <div className={cn(style.container, style.deleted)}>Удалён</div>;

  return null;
};

export default Status;
