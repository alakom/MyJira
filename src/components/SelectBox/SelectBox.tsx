import React, { useState } from "react";
import style from "./SelectBox.module.scss";
import cn from "classnames";

interface Option {
  value: number;
  label: string;
}

interface IProps {
  options: Option[];
  selectedValue: number;
  onSelect: (value: number) => void;
  className?: string;
}

const SelectBox: React.FC<IProps> = ({
  options,
  onSelect,
  selectedValue,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value: number) => {
    onSelect(value);
    setIsOpen(false);
  };

  const getSelectedLabel = (): string => {
    const opt = options.find((it) => it.value === selectedValue);
    return opt?.label || "";
  };

  return (
    <div className={cn(style.container, className)}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={style.label}
        style={{ borderRadius: isOpen ? "5px 5px 0 0" : "5px" }}
      >
        {getSelectedLabel()}
      </div>
      {isOpen && (
        <ul className={style.list}>
          {options.map((option) => (
            <li key={option.value} onClick={() => handleSelect(option.value)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectBox;
