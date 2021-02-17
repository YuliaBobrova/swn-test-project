import React from "react";
import logo from "../../../assets/img/logo.png";
import i18n from "../../../i18n";
import styles from "./Header.module.scss";

const changeLanguage = (lng: string) => {
  i18n.changeLanguage(lng);
};

const Header: React.FC<{}> = () => {
  return (
    <div className={styles.Header}>
      <div className={styles.LogoContainer}>
        <img className={styles.Logo} src={logo}></img>
      </div>
      <div className={styles.Btns}>
        <div className={styles.Btn}>
          <label onClick={() => changeLanguage("de")}>DE</label>
        </div>
        <div className={styles.Btn}>
          <label onClick={() => changeLanguage("en")}>EN</label>
        </div>
      </div>
    </div>
  );
};

export default Header;
