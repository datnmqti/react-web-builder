import React from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 30px;
  height: 30px;
  padding: 1px;
  border: 1px solid #ccc;
  border-radius: 2px;
`;

interface Props {
  value: string;
  onColorChange: (color: string) => void;
}

const ColorPicker: React.FC<Props> = ({
  value, onColorChange,
}) => {
  return (
    <Input type="color" value={value} onChange={(e) => onColorChange(e.target.value)} />
  );
};

export default ColorPicker;
