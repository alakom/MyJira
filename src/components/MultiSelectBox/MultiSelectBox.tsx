import React, { useState } from "react";

interface Option {
  value: number;
  label: string;
}

interface IProps {
  options: Option[];
  selectedOptions: string[];
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const MultiSelectBox: React.FC<IProps> = ({
  options,
  selectedOptions,
  handleChange,
}) => {
  return (
    <div>
      <div>
        <label htmlFor="multiSelect">Выберите опции:</label>
        <select
          id="multiSelect"
          multiple
          value={selectedOptions}
          onChange={handleChange}
          style={{ width: "200px", height: "100px" }}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div>
          <strong>Выбранные опции:</strong> {selectedOptions.join(", ")}
        </div>
      </div>
    </div>
  );
};

export default MultiSelectBox;
