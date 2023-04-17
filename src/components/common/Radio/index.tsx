import styled from "styled-components";

const RadioContainer = styled.div`
  display: flex;
  align-items: center;

  &:not(:last-of-type) {
    margin-bottom: 5px;
  }
`;

const RadioLabel = styled.label`
  margin-left: 8px;
  font-size: 14px;
  cursor: pointer;
`;

const RadioInput = styled.input`
  color: #000;
  cursor: pointer;
`;

interface Props {
  id: string;
  name: string;
  value: number;
  group: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Radio: React.FC<Props> = ({
  id,
  name,
  value,
  group,
  checked,
  onChange,
}) => {
  return (
    <RadioContainer>
      <RadioInput
        type="radio"
        id={id}
        name={group}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <RadioLabel htmlFor={id}>{name}</RadioLabel>
    </RadioContainer>
  );
};

export default Radio;
