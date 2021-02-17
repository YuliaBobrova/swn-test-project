import React from "react";
import styles from "./FilterInput.module.scss";

interface IProps {
  label: string;
  onChange: (value: string) => void;
}

const FilterInput: React.FC<IProps> = ({ label, onChange }: IProps) => {
  return (
    <div className={styles.Bar}>
      <input
        className={styles.Input}
        type="text"
        onChange={(e) => onChange(e.target.value)}
        required
      />
      <span className={styles.Highlight}></span>
      <span className={styles.Bar}></span>
      <label className={styles.Label}>{label}</label>
    </div>
  );
};

export default FilterInput;
