import React from "react";
import styled from "styled-components";

interface IProps {
  size: "big" | "small";
  label: string;
  disabled?: boolean;
  onClick?: () => void;
}

const ButtonComponent = styled.button<IProps>`
  padding: ${(props) => (props.size === "big" ? "10px 30px" : "5px 15px")};
  min-height: ${(props) => (props.size === "big" ? "44px" : "32px")};
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  color: #000000;
  border: none;
  border-radius: 6px;
  min-height: 32px;
  font-size: 13px;
  line-height: 17px;

  &:focus {
    outline: none;
  }

  &:hover {
    &:not([disabled]) {
      box-shadow: 0 0 20px rgba(256, 256, 256, 0.5);
    }
  }
`;

const Button: React.FC<IProps> = (props: IProps) => {
  const { label } = props;
  return (
    <ButtonComponent {...props}>
      {label}
    </ButtonComponent>
  );
};


export default Button;
