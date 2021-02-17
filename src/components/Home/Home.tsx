import React from "react";
import styles from "./Home.module.scss";
import { useHistory } from "react-router-dom";

const Home: React.FC<{}> = ({}) => {
  const history=useHistory();
  return (
    <div className={styles.Wrapper}>
    <button onClick={()=>{
      history.push({pathname: "/episodes"})
    }}>Get started</button>
    </div>
  );
};

export default Home;