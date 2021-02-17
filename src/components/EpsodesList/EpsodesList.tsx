import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { withNamespaces } from "react-i18next";
import Alert from "../../common/components/Alert/Alert";
import EpisodeContainer from "../../common/components/EpisodeContainer/EpisodeContainer";
import FilterSelect from "../../common/components/FilterSelect/FilterSelect";
import Pagination from "../../common/components/Pagination/Pagination";
import Spinner from "../../common/components/Spinner/Spinner";
import { seasons } from "../../common/consts/filters";
import { IEpisode } from "../../common/models/Episode.types";
import { GET_EPISODES } from "../../modules/episodes/service";
import { getEisodeNumber, getSeason } from "../../utils/episodeHandler";
import { usePage } from "../../utils/hooks";
import styles from "./EpisodesList.module.scss";

const EpisodesList: React.FC<{}> = ({ t }: any) => {
  const page = usePage();

  const maxCountItemsPerPage = 20;

  const [seasoneFilter, setSeasoneFilter] = useState<string>("");

  const { loading, error, data } = useQuery(GET_EPISODES, {
    variables: { page: page, filter: seasoneFilter },
  });

  if (loading) {
    return (
      <div className={styles.SpinnerWrapper}>
        <Spinner />
      </div>
    );
  }

  if (error) {
    return <Alert text={error.message} />;
  }

  const episodesList = data.episodes.results.map((episode: IEpisode) => {
    return (
      <EpisodeContainer
        key={episode.episode}
        id={episode.id}
        name={episode.name}
        season={`${getSeason(episode.episode)} ${t("SEASON")}`}
        episode={`${getEisodeNumber(episode.episode)} ${t("EPISODE")}`}
        buttonLabel={`${t("VIEW_CHARACTERS")}`}
      />
    );
  });

  const seasonsOptions = [
    { key: "", value: "" },
    ...seasons.map((season) => {
      return { key: season.key, value: `${season.value} ${t("SEASON")}` };
    }),
  ];

  return (
    <div className={styles.Wrap}>
      <div className={styles.Filters}>
        <div className={styles.Field}>
          <FilterSelect
            label={t("SEASON_FILTER")}
            selectedItem={seasoneFilter}
            options={seasonsOptions}
            onSelectOption={(value) => setSeasoneFilter(value)}
          />
        </div>
      </div>
      <div className={styles.EpisodesList}>{episodesList}</div>
      {data.episodes.info.count > maxCountItemsPerPage ? (
        <div className={styles.Pagination}>
          <Pagination count={data.episodes.info.count} limitOnPage={20} />
        </div>
      ) : null}
    </div>
  );
};

export default withNamespaces()(EpisodesList);
