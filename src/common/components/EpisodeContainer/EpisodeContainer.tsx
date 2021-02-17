import React from "react";
import styles from "./EpisodeContainer.module.scss";
import { IEpisode } from "../../models/Episode.types";
import { getSeason, getEisodeNumber } from "../../../utils/episodeHandler";
import { useHistory } from "react-router-dom";
import qs from "qs";

interface IProps {
  episode: IEpisode;
}

const EpisodeContainer: React.FC<IProps> = ({ episode }: IProps) => {
  const history = useHistory();
  return (
    <div className={styles.Item}>
      <div className={styles.ItemContent}>
        <label className={styles.Title}>{episode.name}</label>
        <div className={styles.Info}>
          <label>{getSeason(episode.episode)}</label>
          <label>{getEisodeNumber(episode.episode)}</label>
        </div>
        <button onClick={()=>{
          const query = { episode: episode.id };

          const searchString = qs.stringify(query);
      history.push({search:searchString, pathname: "/characters"})
    }}>View characters</button>
      </div>
    </div>
  );
};

export default EpisodeContainer;
