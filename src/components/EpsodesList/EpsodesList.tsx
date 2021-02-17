import { useQuery } from "@apollo/client";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import EpisodeContainer from "../../common/components/EpisodeContainer/EpisodeContainer";
import Pagination from "../../common/components/Pagination/Pagination";
import { seasons } from "../../common/consts/seasons";
import { IEpisode } from "../../common/models/Episode.types";
import { IOptionItem } from "../../common/models/OptionItem.types";
import { GET_EPISODES } from "../../modules/episodes/service";
import styles from "./EpisodesList.module.scss";
import qs from "qs";

const EpisodesList: React.FC<{}> = () => {
  const location = useLocation();
  const search = qs.parse(location.search.replace("?", ""));
  const page = typeof search.page === "string" ? parseInt(search.page) : 1;

  const [seasoneFilter, setSeasoneFilter] = useState("");

  const { loading, error, data } = useQuery(GET_EPISODES, {
    variables: { page: page, filter: seasoneFilter },
  });

  if (loading) {
    return <label>dcddsfds</label>;
  }

  const episodesList = data.episodes.results.map((episode: IEpisode) => {
    return <EpisodeContainer key={episode.episode} episode={episode} />;
  });

  const options = seasons.map((season: IOptionItem) => {
    return (
      <option key={season.key} value={season.key}>
        {season.value}
      </option>
    );
  });

  return (
    <div className={styles.Wrapper}>
      <div>
        <select
          value={seasoneFilter}
          onChange={(event) => setSeasoneFilter(event.target.value)}
        >
          <option key={"S0"} value="">
            All seasons
          </option>
          {options}
        </select>
      </div>
      <div className={styles.EpisodesList}>{episodesList}</div>
      <Pagination
        count={data.episodes.info.count}
        limitOnPage={20}
      />
    </div>
  );
};

export default EpisodesList;
