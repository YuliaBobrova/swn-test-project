import qs from "qs";
import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./EpisodeContainer.module.scss";

interface IProps {
  id: string;
  name: string;
  season: string;
  episode: string;
  buttonLabel: string;
}

const EpisodeContainer: React.FC<IProps> = ({
  id,
  name,
  season,
  episode,
  buttonLabel,
}: IProps) => {
  const history = useHistory();
  return (
    <div className={styles.Item}>
      <div className={styles.ItemContent}>
        <label className={styles.Title}>{name}</label>
        <div className={styles.Info}>
          <label>{season}</label>
          <label>{episode}</label>
        </div>
        <Button
          size="small"
          label={buttonLabel}
          onClick={() => {
            const query = { episode: id };

            const searchString = qs.stringify(query);
            history.push({ search: searchString, pathname: "/characters" });
          }}
        />
      </div>
    </div>
  );
};

export default EpisodeContainer;
