import { useQuery } from "@apollo/client";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import EpisodeContainer from "../../common/components/EpisodeContainer/EpisodeContainer";
import Pagination from "../../common/components/Pagination/Pagination";
import { seasons } from "../../common/consts/seasons";
import { IEpisode } from "../../common/models/Episode.types";
import { IOptionItem } from "../../common/models/OptionItem.types";
import {
  GET_EPISODES,
  GET_EPISODE_BY_ID,
} from "../../modules/episodes/service";
import styles from "./CharactersList.module.scss";
import qs from "qs";
import CharacterContainer from "../../common/components/CharacterContainer/CharacterContainer";
import { ICharacter } from "../../common/models/Character.types";

interface IFilter {
  gender: string;
  status: string;
  name: string;
}

const CharactersList: React.FC<{}> = () => {
  const location = useLocation();
  const search = qs.parse(location.search.replace("?", ""));
  const episode =
    typeof search.episode === "string" ? parseInt(search.episode) : null;

  const [filter, setFilter] = useState<IFilter>({
    gender: "",
    status: "",
    name: "",
  });

  const { loading, error, data } = useQuery(GET_EPISODE_BY_ID, {
    variables: { id: episode },
  });

  if (loading) {
    return <label>dcddsfds</label>;
  }

  const CharactersList = data.episode.characters
    .filter((character: ICharacter) => character.gender.includes(filter.gender))
    .filter((character: ICharacter) => character.status.includes(filter.status))
    .filter((character: ICharacter) => character.name.toLowerCase().includes(filter.name.toLowerCase()))
    .map((character: ICharacter) => {
      return <CharacterContainer key={character.id} character={character} />;
    });

  return (
    <div className={styles.Wrapper}>
      <div>
        <select
          value={filter.gender}
          onChange={(event) => setFilter({gender: event.target.value, status: filter.status, name: filter.name})}
        >
          <option key={"none"} value=""></option>
          <option key={"Male"} value="Male">
            Male
          </option>
          <option key={"Female"} value="Female">
            Female
          </option>
        </select>

        <select
          value={filter.status}
          onChange={(event) => setFilter({gender: filter.gender, status: event.target.value, name: filter.name})}
        >
          <option key={"none"} value=""></option>
          <option key={"Alive"} value="Alive">
            Alive
          </option>
          <option key={"Dead"} value="Dead">
            Dead
          </option>
          <option key={"unknown"} value="unknown">
            unknown
          </option>
        </select>
        <input
          value={filter.name}
          onChange={(event) => setFilter({gender: filter.gender, status: filter.status, name: event.target.value})}
        />
      </div>
      <div className={styles.CharactersList}>{CharactersList}</div>;
    </div>
  );
};

export default CharactersList;
