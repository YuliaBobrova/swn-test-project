import React from "react";
import error from "../../../assets/img/error.png";
import styles from "./Alert.module.scss";

interface IProps {
  text: string;
}

const Alert: React.FC<IProps> = ({ text }: IProps) => {
  return (
    <div className={styles.Error}>
      <img src={error}></img>
      <div>{text}</div>
    </div>
  );
};

export default Alert;
