import React from "react";
import portal from "../../../assets/img/portal.png";
import styles from "./Spinner.module.scss";

const Spinner: React.FC<{}> = () => {
  return <img className={styles.Rotate} src={portal}></img>;
};

export default Spinner;
