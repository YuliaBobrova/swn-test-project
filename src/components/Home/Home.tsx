import React from "react";
import { withNamespaces } from "react-i18next";
import { useHistory } from "react-router-dom";
import portal from "../../assets/img/portalHome.png";
import background from "../../assets/img/background.jpg";
import styled, { keyframes } from "styled-components";

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: center / cover no-repeat url(${background});
`;

const Content = styled.div`
  width: 100%;
  max-width: 930px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000000;
  box-shadow: 0 0 30px 35px #000000;
`;

const Portal = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: center / cover no-repeat url(${portal});
  animation: ${rotation} 8s infinite linear;
  color: #ffffff;
  font-size: 18px;
  font-weight: 600px;

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

const Home: React.FC<{}> = ({ t }: any) => {
  const history = useHistory();
  return (
    <Wrapper>
      <Content>
        <Portal
          onClick={() => {
            history.push({ pathname: "/episodes" });
          }}
        >
          <label>{t("GET_STARTED")}</label>
        </Portal>
      </Content>
    </Wrapper>
  );
};

export default withNamespaces()(Home);
