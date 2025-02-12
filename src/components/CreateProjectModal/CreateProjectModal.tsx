import Modal from "../Modal/Modal";
import { useState } from "react";
import style from "./CreateProjectModal.module.scss";

interface IProps {
  readonly isVisible: boolean;
  readonly setIsVisible: (data: boolean) => void;
  readonly onSubmit: (text: string) => void;
}
const CreateProjectModal = ({ isVisible, setIsVisible, onSubmit }: IProps) => {
  const [text, setText] = useState<string>("");

  const onClear = () => setText("");

  return (
    <Modal
      isOpen={isVisible}
      onClose={() => {
        setIsVisible(false);
        onClear();
      }}
    >
      <div className={style.container}>
        <h1>Создание проекта</h1>
        <div className={style.inputContainer}>
          <h6>Введите название:</h6>
          <input
            type="text"
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder="Имя проекта"
          />
        </div>
        <button
          className={style.createButton}
          onClick={() => {
            onSubmit(text);
            onClear();
            setIsVisible(false);
          }}
        >
          Создать
        </button>
      </div>
    </Modal>
  );
};

export default CreateProjectModal;
