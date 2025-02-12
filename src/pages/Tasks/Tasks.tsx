import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch } from "../../utils/redux";
import getTasks from "../../store/reducers/tasks/sagas/getTasks";
import { setIsOpenBack } from "../../store/reducers/app/actions";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import Table from "../../components/Table/Table";
import CreateTaskModal from "../../components/CreateTaskModal/CreateTaskModal";

const Tasks = () => {
  const dispatch = useAppDispatch();
  const { projectId } = useParams();

  useEffect(() => {
    if (projectId) {
      getTasks(+projectId);
    }
    dispatch(setIsOpenBack(!!projectId));
  }, [projectId]);

  return (
    <>
      <CreateTaskModal />
      <DndProvider backend={HTML5Backend}>
        <Table />
      </DndProvider>
    </>
  );
};
export default Tasks;
