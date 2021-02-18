import { useQuery } from "@apollo/client";
import qs from "qs";
import React, { useState } from "react";
import { withNamespaces } from "react-i18next";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Alert from "../../common/components/Alert/Alert";
import EpisodeContainer from "../../common/components/EpisodeContainer/EpisodeContainer";
import FilterSelect from "../../common/components/FilterSelect/FilterSelect";
import Pagination from "../../common/components/Pagination/Pagination";
import Spinner from "../../common/components/Spinner/Spinner";
import { seasons } from "../../common/consts/filters";
import { IEpisode } from "../../common/models/Episode.types";
import { GET_EPISODES } from "../../modules/episodes/service";
import { contentHeight } from "../../styles";
import { getEisodeNumber, getSeason } from "../../utils/episodeHandler";
import { usePage } from "../../utils/hooks";

const Wrapper = styled.div`
  width: 100%;
  min-height: ${contentHeight};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${(props) => props.theme.main};
  padding: 10px;
`;

Wrapper.defaultProps = {
  theme: {
    main: "flex-start",
  },
};

const theme = {
  main: "center",
};

const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  color: #ffffff;
`;

const Filters = styled.div`
  width: 80%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Field = styled.div`
  width: 100%;
  max-width: 350px;
`;

const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 20px 0;
  justify-content: center;
  align-items: center;
`;

const EpisodesList: React.FC<{}> = ({ t }: any) => {
  const page = usePage();

  const history = useHistory();

  const maxCountItemsPerPage = 20;

  const [seasoneFilter, setSeasoneFilter] = useState<string>("");

  const { loading, error, data } = useQuery(GET_EPISODES, {
    variables: { page: page, filter: seasoneFilter },
  });

  if (loading) {
    return (
      <Wrapper theme={theme}>
        <Spinner />
      </Wrapper>
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

  const sesonsOptions = [
    { key: "", value: "" },
    ...seasons.map((season) => {
      return { key: season.key, value: `${season.value} ${t("SEASON")}` };
    }),
  ];

  return (
    <Wrapper>
      <Filters>
        <Field>
          <FilterSelect
            label={t("SEASON_FILTER")}
            selectedItem={seasoneFilter}
            options={sesonsOptions}
            onSelectOption={(value) => {
              const query = { page: 1 };

              const searchString = qs.stringify(query);
              history.push({
                search: `?${searchString}`,
              });
              setSeasoneFilter(value);
            }}
          />
        </Field>
      </Filters>
      <List>{episodesList}</List>
      {data.episodes.info.count > maxCountItemsPerPage ? (
        <PaginationContainer>
          <Pagination count={data.episodes.info.count} limitOnPage={20} />
        </PaginationContainer>
      ) : null}
    </Wrapper>
  );
};

export default withNamespaces()(EpisodesList);
