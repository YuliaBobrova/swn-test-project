import React from "react";
import { ICharacter } from "../../models/Character.types";
import styles from "./CharacterContainer.module.scss";

interface IProps {
  character: ICharacter;
}

const CharacterContainer: React.FC<IProps> = ({ character }: IProps) => {
  return (
    <div className={styles.Item}>
      <div className={styles.AvatarContaier}>
        <img src={character.image} alt={character.name} />
      </div>
      <div className={styles.InfoContaier}>
        <div className={styles.Title}>{character.name}</div>
        <div>{character.status}</div>
        <div>{character.gender}</div>
        <div>{character.type}</div>
      </div>
    </div>
  );
};

export default CharacterContainer;
