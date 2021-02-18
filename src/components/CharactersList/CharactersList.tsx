import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { withNamespaces } from "react-i18next";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Alert from "../../common/components/Alert/Alert";
import Button from "../../common/components/Button/Button";
import CharacterContainer from "../../common/components/CharacterContainer/CharacterContainer";
import FilterInput from "../../common/components/FilterInput/FilterInput";
import FilterSelect from "../../common/components/FilterSelect/FilterSelect";
import Spinner from "../../common/components/Spinner/Spinner";
import { genders, statuses } from "../../common/consts/filters";
import { ICharacter } from "../../common/models/Character.types";
import { GET_EPISODE_BY_ID } from "../../modules/episodes/service";
import { contentHeight } from "../../styles";
import { useEpisode } from "../../utils/hooks";

interface IFilter {
  gender: string;
  status: string;
  name: string;
}

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
  justify-content: space-between;

  @media (max-width: 768px) {
    height: 300px;
    flex-direction: column;
    padding: 0;
  }
`;

const Field = styled.div`
  width: 20%;
  max-width: 350px;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const BackBtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 30px;
`;

const CharactersList: React.FC<{}> = ({ t }: any) => {
  const episode = useEpisode();

  const history = useHistory();

  const [filter, setFilter] = useState<IFilter>({
    gender: "",
    status: "",
    name: "",
  });

  const { loading, error, data } = useQuery(GET_EPISODE_BY_ID, {
    variables: { id: episode },
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

  const CharactersList = data.episode.characters
    .filter((character: ICharacter) => character.gender.includes(filter.gender))
    .filter((character: ICharacter) => character.status.includes(filter.status))
    .filter((character: ICharacter) =>
      character.name.toLowerCase().includes(filter.name.toLowerCase())
    )
    .map((character: ICharacter) => {
      return <CharacterContainer key={character.id} character={character} />;
    });

  const statusOptions = statuses.map((status) => {
    return {
      key: status.key,
      value: `${t(status.value)}`,
    };
  });

  const genderOptions = genders.map((gender) => {
    return {
      key: gender.key,
      value: `${t(gender.value)}`,
    };
  });

  return (
    <Wrapper>
      <BackBtn>
        <Button
          size="big"
          label={t("BACK")}
          onClick={() => history.push({ pathname: "/episodes" })}
        />
      </BackBtn>
      <Filters>
        <Field>
          <FilterSelect
            label={t("STATUS")}
            selectedItem={filter.status}
            options={statusOptions}
            onSelectOption={(value) =>
              setFilter({
                gender: filter.gender,
                status: value,
                name: filter.name,
              })
            }
          />
        </Field>
        <Field>
          <FilterSelect
            label={t("GENDER")}
            selectedItem={filter.gender}
            options={genderOptions}
            onSelectOption={(value) =>
              setFilter({
                gender: value,
                status: filter.status,
                name: filter.name,
              })
            }
          />
        </Field>
        <Field>
          <FilterInput
            label={t("NAME")}
            onChange={(value: string) =>
              setFilter({
                gender: filter.gender,
                status: filter.status,
                name: value,
              })
            }
          />
        </Field>
      </Filters>
      <List>{CharactersList}</List>;
    </Wrapper>
  );
};

export default withNamespaces()(CharactersList);
