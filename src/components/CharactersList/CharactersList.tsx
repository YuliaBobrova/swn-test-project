import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { withNamespaces } from "react-i18next";
import { useHistory } from "react-router-dom";
import Alert from "../../common/components/Alert/Alert";
import Button from "../../common/components/Button/Button";
import CharacterContainer from "../../common/components/CharacterContainer/CharacterContainer";
import FilterInput from "../../common/components/FilterInput/FilterInput";
import FilterSelect from "../../common/components/FilterSelect/FilterSelect";
import Spinner from "../../common/components/Spinner/Spinner";
import { genders, statuses } from "../../common/consts/filters";
import { ICharacter } from "../../common/models/Character.types";
import { GET_EPISODE_BY_ID } from "../../modules/episodes/service";
import { useEpisode } from "../../utils/hooks";
import styles from "./CharactersList.module.scss";

interface IFilter {
  gender: string;
  status: string;
  name: string;
}

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
      <div className={styles.SpinnerWrapper}>
        <Spinner />
      </div>
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
    <div className={styles.Wrap}>
      <div className={styles.BackBtn}>
        <Button
          size="big"
          label={t("BACK")}
          onClick={() => history.push({ pathname: "/episodes" })}
        />
      </div>
      <div className={styles.Filters}>
        <div className={styles.Field}>
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
        </div>
        <div className={styles.Field}>
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
        </div>
        <div className={styles.Field}>
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
        </div>
      </div>
      <div className={styles.CharactersList}>{CharactersList}</div>;
    </div>
  );
};

export default withNamespaces()(CharactersList);
