import IProject, { ProjectStatus } from "../../models/IProject";
import style from "./Project.module.scss";
import Status from "../Status/Status";
import deleteProject from "../../store/reducers/projects/sagas/deleteProject";
import RemoveIcon from "../../../public/icons/removeIcon";
import { useNavigate } from "react-router-dom";

interface IProps {
  readonly project: IProject;
}

const Project = ({ project }: IProps) => {
  const navigate = useNavigate();
  return (
    <div
      className={style.container}
      style={{
        cursor:
          project.status !== ProjectStatus.DELETED ? "pointer" : "default",
      }}
      onClick={() => {
        if (project.status !== ProjectStatus.DELETED)
          navigate(`/MyJira/${project.id}`);
      }}
    >
      <div>
        <span>id:</span> {project.id}
      </div>
      <div className={style.containerStatus}>
        <Status status={project.status} />
      </div>
      <div className={style.titleProject}>
        <span>Название:</span> <span>{project.name}</span>
      </div>
      <div>
        <span>Дата создания:</span> {project.startDate}
      </div>
      {project.status !== ProjectStatus.DELETED && (
        <div
          onClick={(event) => {
            event.stopPropagation();
            deleteProject(project.id);
          }}
        >
          <RemoveIcon className={style.removeButton} />
        </div>
      )}
    </div>
  );
};

export default Project;
