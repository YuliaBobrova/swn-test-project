import React from "react";
import male from "../../../assets/icons/man.svg";
import female from "../../../assets/icons/woman.svg";
import { ICharacter } from "../../models/Character.types";
import styled from "styled-components";

interface IProps {
  character: ICharacter;
}

const Character = styled.div`
  width: 600px;
  height: 250px;
  display: flex;
  justify-content: center;
  overflow: hidden;
  background: rgb(60, 62, 68);
  border-radius: 0.5rem;
  margin: 0.75rem;
  box-shadow: rgb(0 0 0 / 10%) 0px 4px 6px -1px,
    rgb(0 0 0 / 6%) 0px 2px 4px -1px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: initial;
    width: 100%;
  }
`;

const AvatarContainer = styled.div`
  flex: 2 1 0%;
  width: 100%;
`;

const Avatar = styled.img`
  width: 100%;
  height: 100%;
  margin: 0px;
  opacity: 1;
  transition: opacity 0.5s ease 0s;
  object-position: center center;
  object-fit: cover;
`;

const InfoContaier = styled.div`
  flex: 3 1 0%;
  position: relative;
  padding: 0.75rem;
  color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 30px;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Indicator = styled.div<IProps>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 10px;
  background: ${(props) =>
    props.character.status === "Alive"
      ? "greenyellow"
      : props.character.status === "Dead"
      ? "red"
      : "khaki"};
`;

const Icon = styled.img`
  width: 15px;
  height: 15px;
  margin-left: -2px;
  margin-right: 10px;
`;

const CharacterContainer: React.FC<IProps> = ({ character }: IProps) => {
  const indicator =
    character.status === "Alive"
      ? "IndicatorAlive"
      : character.status === "Dead"
      ? "IndicatorDead"
      : "IndicatorUnknown";
  return (
    <Character>
      <AvatarContainer>
        <Avatar src={character.image} alt={character.name} />
      </AvatarContainer>
      <InfoContaier>
        <Title>{character.name}</Title>
        <Info>
          <Indicator character={character}></Indicator>
          {character.status}
        </Info>
        <Info>
          {character.gender === "Male" ? (
            <Icon src={male} alt={"gender"} />
          ) : (
            <Icon src={female} alt={"gender"} />
          )}
          {character.gender}
        </Info>
        <Info>{character.type}</Info>
      </InfoContaier>
    </Character>
  );
};

export default CharacterContainer;
