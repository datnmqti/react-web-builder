import React from "react";
import styled from "styled-components";
import ControlItem from "../../components/common/ControlItem";
import SliderBar from "../../components/common/Sliderbar";
import ColorPicker from "../../components/common/ColorPicker";
import Label from "../../components/common/Label";
import ControlList from "../../components/common/ControlList";
import { appearVariant } from "../../constants";

const Wrapper = styled.div`
  margin-top: 1rem;
`;

interface Props {
  backgroundColor: string;
  width: number;
  onBackgroundColorChange: (color: string) => void;
  onWidthChange: (width: number) => void;
}

const ContainerSettings: React.FC<Props> = ({
  backgroundColor,
  width,
  onBackgroundColorChange,
  onWidthChange,
}) => {
  return (
    <Wrapper>
      <ControlList variants={appearVariant} initial="hidden" animate="visible">
        <ControlItem>
          <Label>Background Color</Label>
          <ColorPicker
            value={backgroundColor}
            onColorChange={onBackgroundColorChange}
          />
        </ControlItem>
        <SliderBar
          variants={appearVariant}
          label="Width"
          min={375}
          max={1200}
          onChange={onWidthChange}
          step={1}
          value={width}
        />
      </ControlList>
    </Wrapper>
  );
};

export default ContainerSettings;
