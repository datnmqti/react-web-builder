import styled from "styled-components";
import { useAppSelector } from "../../hooks/useAppSelector";

interface Props {
  children: React.ReactNode,
  isSelected?: Boolean,
  onClick: () => void
}

interface SelectableProps {
  isSelected: Boolean
}

const Selectable = styled.div<SelectableProps>`
  outline-offset: 2px;
  
  &:hover {
    outline: 1px dashed blue;
  }

  ${props => props.isSelected && `
    outline: 2px solid blue!important;
  `}
`

const SelectableElement = ({ children, isSelected, onClick }: Props) => {
  const isEditorMode = useAppSelector(state => state.templates.isEditorMode)
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onClick();
  }
  
  if (isEditorMode) {
    return (
      <Selectable
        isSelected={!!isSelected}
        onClick={handleClick}
      >
        {children}
      </Selectable>
    );
  }

  // Render the children in export mode
  return <>{children}</>;
};

export default SelectableElement;
