import React from "react";
import styled from "styled-components";
import logo from "../../../assets/img/logo.png";
import i18n from "../../../i18n";
import { headerHeight } from "../../../styles";

const changeLanguage = (lng: string) => {
  i18n.changeLanguage(lng);
};

const Wrap = styled.div`
  width: 100vw;
  height: ${headerHeight};
  padding: 0 30px;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  background: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LogoContainer = styled.div`
  width: calc(100% - 90px);
  display: flex;
  justify-content: center;
  margin-left: 90px;

  @media (max-width: 768px) {
    justify-content: center;
    margin-left: 0;
  }
`;

const Logo = styled.img`
  height: 100px;

  @media (max-width: 768px) {
    height: 70px;
  }
`;

const Btns = styled.div`
  width: 90px;
  display: flex;
  justify-content: space-between;
  padding-right: 20px;

  @media (max-width: 768px) {
    width: 60px;
    padding: 0;
  }
`;

const Btn = styled.div`
  label {
    cursor: pointer;
  }
`;

const Header: React.FC<{}> = () => {
  return (
    <Wrap>
      <LogoContainer>
        <Logo src={logo}></Logo>
      </LogoContainer>
      <Btns>
        <Btn>
          <label onClick={() => changeLanguage("de")}>DE</label>
        </Btn>
        <Btn>
          <label onClick={() => changeLanguage("en")}>EN</label>
        </Btn>
      </Btns>
    </Wrap>
  );
};

export default Header;
