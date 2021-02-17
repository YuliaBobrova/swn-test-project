import React from "react";
import styles from "./EpisodeContainer.module.scss";
import { IEpisode } from "../../models/Episode.types";
import { getSeason, getEisodeNumber } from "../../../utils/episodeHandler";

interface IProps {
  episode: IEpisode;
}

const ItemContainer: React.FC<IProps> = ({ episode }: IProps) => {
  return (
    <div className={styles.Item}>
      <div className={styles.ItemContent}>
        <label className={styles.Title}>{episode.name}</label>
        <div className={styles.Info}>
          <label>{getSeason(episode.episode)}</label>
          <label>{getEisodeNumber(episode.episode)}</label>
        </div>
        <button>View characters</button>
      </div>
    </div>
  );
};

export default ItemContainer;
