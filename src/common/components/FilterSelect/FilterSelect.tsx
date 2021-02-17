import React from "react";
import { IOptionItem } from "../../models/OptionItem.types";
import styles from "./FilterSelect.module.scss";

interface IProps {
  label: string;
  selectedItem: string;
  options: IOptionItem[];
  onSelectOption: (value: string) => void;
}

const FilterSelect: React.FC<IProps> = ({
  label,
  selectedItem,
  options,
  onSelectOption,
}: IProps) => {
  const items = options.map((option) => {
    return <option value={option.key}>{option.value}</option>;
  });
  return (
    <div className={styles.Wrap}>
      <div className={styles.Select}>
        <select
          className={styles.SelectText}
          value={selectedItem}
          onChange={(e) => onSelectOption(e.target.value)}
          required
        >
          {items}
        </select>
        <span className={styles.SelectHighlight}></span>
        <span className={styles.SelectBar}></span>
        <label className={styles.SelectLabel}>{label}</label>
      </div>
    </div>
  );
};

export default FilterSelect;
