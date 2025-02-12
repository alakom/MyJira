import style from "./Projects.module.scss";
import IProject from "../../models/IProject";
import Project from "../../components/Project/Project";
import CreateProjectModal from "../../components/CreateProjectModal/CreateProjectModal";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../utils/redux";
import getProjects from "../../store/reducers/projects/sagas/getProjects";
import createProject from "../../store/reducers/projects/sagas/createProject";
import { setIsOpenBack } from "../../store/reducers/app/actions";

const Projects = () => {
  const dispatch = useAppDispatch();
  const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false);
  const projects = useAppSelector((state) => state.projectReducer?.projects);

  useEffect(() => {
    dispatch(setIsOpenBack(false));
    getProjects();
  }, []);

  const onCreateProject = (name: string) => {
    createProject(name);
  };

  return (
    <>
      <CreateProjectModal
        isVisible={isVisibleModal}
        setIsVisible={setIsVisibleModal}
        onSubmit={onCreateProject}
      />
      <div className={style.container}>
        <div className={style.containerProjects}>
          <div className={style.title}>
            <b>Ваши проекты</b>
            <button
              className={style.createButton}
              onClick={() => setIsVisibleModal(true)}
            >
              Создать проект
            </button>
          </div>
          {projects?.map((project: IProject) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
