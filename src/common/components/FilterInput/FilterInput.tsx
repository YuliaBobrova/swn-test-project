import React from "react";
import styled from "styled-components";

interface IProps {
  label: string;
  onChange: (value: string) => void;
}

const Wrap = styled.div`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  position: relative;
  width: 100%;
`;

const Highlight = styled.span`
  position: absolute;
  height: 60%;
  width: 100%;
  top: 25%;
  left: 0;
  pointer-events: none;
  opacity: 0.5;
`;

const Label = styled.label`
  color: #ffffff;
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
`;

const Input = styled.input`
  color: #ffffff;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid #ffffff;
  background: transparent;

  &:focus {
    outline: none;
  }

  &:focus ~ Highlight {
    -webkit-animation: inputHighlighter 0.3s ease;
    -moz-animation: inputHighlighter 0.3s ease;
    animation: iHighlighter 0.3s ease;
  }

  &:focus ~ Label,
  &:valid ~ Label {
    top: -20px;
    font-size: 14px;
    color: #ffffff;
  }
`;

const FilterInput: React.FC<IProps> = ({ label, onChange }: IProps) => {
  return (
    <Wrap>
      <Input type="text" onChange={(e) => onChange(e.target.value)} required />
      <Highlight></Highlight>
      <Label>{label}</Label>
    </Wrap>
  );
};

export default FilterInput;
