import qs from "qs";
import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../Button/Button";
import styled from "styled-components";

interface IProps {
  id: string;
  name: string;
  season: string;
  episode: string;
  buttonLabel: string;
}

const Episode = styled.div`
  width: 600px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
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

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
`;

const Title = styled.div`
  color: #02b1c8;
  text-align: center;
  font-size: 24px;
  font-weight: 600;
`;

const Info = styled.div`
  display: flex;
  margin: 15px 0;

  label:first-child {
    margin-right: 20px;
  }
`;

const EpisodeContainer: React.FC<IProps> = ({
  id,
  name,
  season,
  episode,
  buttonLabel,
}: IProps) => {
  const history = useHistory();
  return (
    <Episode>
      <Content>
        <Title>{name}</Title>
        <Info>
          <label>{season}</label>
          <label>{episode}</label>
        </Info>
        <Button
          size="small"
          label={buttonLabel}
          onClick={() => {
            const query = { episode: id };

            const searchString = qs.stringify(query);
            history.push({ search: searchString, pathname: "/characters" });
          }}
        />
      </Content>
    </Episode>
  );
};

export default EpisodeContainer;
