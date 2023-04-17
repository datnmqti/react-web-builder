import React from "react";
import styled from "styled-components";

const ContentInput = styled.input`
  display: block;
  padding: 10px;
  border-radius: 4px;
  font-size: 14px;
  width: 100%;
  border: 1px solid #e7e7e7;

  &:focus-visible {
    outline: none;
  }
`;

interface Props {
  type: string;
  value: string | number;
  placeholder: string;
  onChange: (link: string) => void;
}

const Input: React.FC<Props> = ({ type, value, placeholder, onChange }) => {
  return (
    <ContentInput
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Input;
