import React from 'react';
import styled from 'styled-components';

type ElementProps = {
  id: string;
  backgroundColor: string;
  width: string;
  onClick: (id: string) => void;
  isSelected: boolean;
  children?: React.ReactNode
};

type ElementContainerProps = {
  isSelected: boolean;
};

const ElementContainer = styled.div<ElementContainerProps>`
  border: ${(props) => (props.isSelected ? '2px solid red' : 'none')};
`;

const Element: React.FC<ElementProps> = ({
  id,
  backgroundColor,
  width,
  onClick,
  isSelected,
  children,
}) => {
  return (
    <ElementContainer
      isSelected={isSelected}
      style={{ backgroundColor, width }}
      onClick={() => onClick(id)}
    >
      {children}
    </ElementContainer>
  );
};

export default Element;
