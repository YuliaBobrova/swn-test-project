import React from "react";
import { withNamespaces } from "react-i18next";
import { useHistory } from "react-router-dom";
import styles from "./Home.module.scss";

const Home: React.FC<{}> = ({ t }: any) => {
  const history = useHistory();
  return (
    <div className={styles.Container}>
      <div className={styles.Content}>
        <div
          className={styles.Portal}
          onClick={() => {
            history.push({ pathname: "/episodes" });
          }}
        >
          <label>{t("GET_STARTED")}</label>
        </div>
      </div>
    </div>
  );
};

export default withNamespaces()(Home);
