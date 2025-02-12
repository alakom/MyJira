import cn from "classnames";
import style from "./TextBox.module.scss";
import React from "react";

interface IProps {
  title: string;
  text: string;
  setText: (t: string) => void;
  className?: string;
}

const TextBox: React.FC<IProps> = ({ title, text, setText, className }) => {
  return (
    <div className={cn(className, style.inputContainer)}>
      <div className={style.title}>{title}</div>
      <input
        className={style.input}
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
    </div>
  );
};

export default TextBox;
