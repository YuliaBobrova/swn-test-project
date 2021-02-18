import React from "react";
import { IOptionItem } from "../../models/OptionItem.types";
import styled from "styled-components";

interface IProps {
  label: string;
  selectedItem: string;
  options: IOptionItem[];
  onSelectOption: (value: string) => void;
}

const Wrap = styled.div`
  right: 0;
  width: 100%;
  left: 0;
`;

const Select = styled.div`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  position: relative;
  width: 100%;
  appearance: none;
  -webkit-appearance: none;

  &:after {
    position: absolute;
    top: 18px;
    right: 10px;
    width: 0;
    height: 0;
    padding: 0;
    content: "";
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid #ffffff;
    pointer-events: none;
  }
`;

const Highlight = styled.span`
  position: absolute;
  height: 60%;
  width: 100px;
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
  left: 0;
  top: 10px;
  transition: 0.2s ease all;
`;

const SelectText = styled.select`
  position: relative;
  font-family: inherit;
  background-color: transparent;
  width: 100%;
  padding: 10px 10px 10px 0;
  font-size: 18px;
  color: #ffffff;
  border-radius: 0;
  border: none;
  border-bottom: 1px solid #ffffff;
  appearance: none;
  -webkit-appearance: none;

  &:focus {
    outline: none;
    border-bottom: 1px solid #ffffff;
  }

  &:focus ~ Label,
  &:valid ~ Label {
    color: #ffffff;
    top: -20px;
    transition: 0.2s ease all;
    font-size: 14px;
  }
`;

const FilterSelect: React.FC<IProps> = ({
  label,
  selectedItem,
  options,
  onSelectOption,
}: IProps) => {
  const items = options.map((option) => {
    return <option value={option.key}>{option.value}</option>;
  });
  return (
    <Wrap>
      <Select>
        <SelectText
          value={selectedItem}
          onChange={(e) => onSelectOption(e.target.value)}
          required
        >
          {items}
        </SelectText>
        <Highlight></Highlight>
        <Label>{label}</Label>
      </Select>
    </Wrap>
  );
};

export default FilterSelect;
