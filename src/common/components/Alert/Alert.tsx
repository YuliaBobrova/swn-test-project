import React from "react";
import styled from "styled-components";
import error from "../../../assets/img/error.png";
import { contentHeight } from "../../../styles";

interface IProps {
  text: string;
}

const Error = styled.div`
  width: 100%;
  height: ${contentHeight};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6px 16px;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.43;
  border-radius: 4px;
  color: #d4f15b;
  font-size: 20px;
`;

const Poster = styled.img`
  width: 500px;
  margin-left: 80px;

  @media (max-width: 768px) {
    width: 200px;
    margin-left: 30px;
  }
`;

const Text = styled.div`
  text-align: center;
`;

const Alert: React.FC<IProps> = ({ text }: IProps) => {
  return (
    <Error>
      <Poster src={error}></Poster>
      <Text>{text}</Text>
    </Error>
  );
};

export default Alert;
