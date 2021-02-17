import React from "react";
import male from "../../../assets/icons/man.svg";
import female from "../../../assets/icons/woman.svg";
import { ICharacter } from "../../models/Character.types";
import styles from "./CharacterContainer.module.scss";

interface IProps {
  character: ICharacter;
}

const CharacterContainer: React.FC<IProps> = ({ character }: IProps) => {
  const indicator =
    character.status === "Alive"
      ? "IndicatorAlive"
      : character.status === "Dead"
      ? "IndicatorDead"
      : "IndicatorUnknown";
  return (
    <div className={styles.Character}>
      <div className={styles.AvatarContaier}>
        <img src={character.image} alt={character.name} />
      </div>
      <div className={styles.InfoContaier}>
        <div className={styles.Title}>{character.name}</div>
        <div className={styles.Item}>
          <div className={styles[indicator]}></div>
          {character.status}
        </div>
        <div className={styles.Item}>
          <img src={character.gender === "Male" ? male : female} className={styles.Icon} alt={"gender"} />
          {character.gender}
        </div>
        <div className={styles.Item}>{character.type}</div>
      </div>
    </div>
  );
};

export default CharacterContainer;
