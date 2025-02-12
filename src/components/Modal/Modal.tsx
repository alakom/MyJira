import style from "./Modal.module.scss";
import { useEffect } from "react";
import cn from "classnames";

interface IProps {
  readonly children?: any;
  readonly isOpen: boolean;
  readonly onClose: () => void;
  readonly className?: string;
}

const Modal = ({ children, isOpen, onClose, className = "" }: IProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  if (isOpen)
    return (
      <div className={cn(style.modal)} onClick={onClose}>
        <div
          className={cn(style.modalContent, className)}
          onClick={(ev) => {
            ev.stopPropagation();
          }}
        >
          {children}
        </div>
      </div>
    );
};
export default Modal;
