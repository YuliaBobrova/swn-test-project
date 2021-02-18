import React from "react";
import portal from "../../../assets/img/portal.png";
import styled, { keyframes } from "styled-components";

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.img`
  position: absolute;
  margin: auto;
  animation: ${rotation} 8s infinite linear;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

const Spinner: React.FC<{}> = () => {
  return <Rotate src={portal}></Rotate>;
};

export default Spinner;
