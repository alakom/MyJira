import Modal from "../Modal/Modal";
import { useAppDispatch, useAppSelector } from "../../utils/redux";
import { setIsOpenCreateModal } from "../../store/reducers/app/actions";
import style from "./CreateTaskModal.module.scss";
import TextBox from "../TextBox/TextBox";
import { useState } from "react";
import SelectBox from "../SelectBox/SelectBox";
import TextArea from "../TextArea/TextArea";
import { useParams } from "react-router-dom";
import createTask from "../../store/reducers/tasks/sagas/createTask";
interface IOption {
  value: number;
  label: string;
}
const CreateTaskModal = () => {
  const { projectId } = useParams();
  const dispatch = useAppDispatch();
  const isOpenCreateModal = useAppSelector(
    (state) => state.appReducer?.isOpenCreateModal,
  );
  // const tasks = useAppSelector((state) => state.tasksReducer?.tasks);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [selectedPriority, setSelectedPriority] = useState<number>(1);
  // const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  // const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   const selectedValues = Array.from(
  //     event.target.selectedOptions,
  //     (option) => option.value,
  //   );
  //   setSelectedOptions(selectedValues);
  // };

  const optionsPriority: IOption[] = [
    { value: 0, label: "Высокий приоритет" },
    { value: 1, label: "Средний приоритет" },
    { value: 2, label: "Низкий приоритет" },
  ];

  // const getOptionsTasks = (): IOption[] => {
  //   return (tasks || []).map((task) => ({
  //     value: task.id,
  //     label: task.id.toString(),
  //   }));
  // };

  const isDisabledButton = (): boolean =>
    title.length === 0 || description.length === 0;

  const getClassNameOptionsPriority = (): string => {
    switch (selectedPriority) {
      case 0:
        return style.high;
      case 1:
        return style.medium;
      case 2:
        return style.low;
      default:
        return "";
    }
  };

  const onClear = () => {
    setTitle("");
    setDescription("");
    setSelectedPriority(0);
  };

  const onClose = () => {
    onClear();
    dispatch(setIsOpenCreateModal(false));
  };

  const onCreateTask = () => {
    if (projectId)
      createTask({
        title,
        projectId: +projectId,
        description: JSON.stringify(description),
        priority: selectedPriority,
      });
    onClose();
  };

  return (
    <Modal isOpen={!!isOpenCreateModal} onClose={onClose}>
      <h1 className={style.title}>Создание задачи</h1>
      <div className={style.container}>
        <div className={style.containerSelectBox}>
          <SelectBox
            options={optionsPriority}
            selectedValue={selectedPriority}
            onSelect={setSelectedPriority}
            className={getClassNameOptionsPriority()}
          />
        </div>
        <TextBox title={"Заголовок"} text={title} setText={setTitle} />
        <div className={style.containerDescription}>
          <div>Описание</div>
          <TextArea value={description} onChange={setDescription} />
        </div>
      </div>
      <div className={style.createButton}>
        <button onClick={onCreateTask} disabled={isDisabledButton()}>
          Создать
        </button>
      </div>
    </Modal>
  );
};
export default CreateTaskModal;
