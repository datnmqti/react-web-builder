import React from "react";
import styled from "styled-components";
import SliderBar from "../../components/common/Sliderbar";
import ControlList from "../../components/common/ControlList";
import { appearVariant } from "../../constants";
import ControlItem from "../../components/common/ControlItem";
import Label from "../../components/common/Label";
import Input from "../../components/common/Input";

const Wrapper = styled.div`
  margin-top: 1rem;
`;

interface Props {
  width: number;
  height: number;
  src: string;
  onWidthChange: (width: number) => void;
  onHeightChange: (height: number) => void;
  onSrcChange: (link: string) => void;
}

const ImageSettings: React.FC<Props> = ({
  width,
  height,
  src,
  onWidthChange,
  onHeightChange,
  onSrcChange,
}) => {
  return (
    <Wrapper>
      <ControlList variants={appearVariant} initial="hidden" animate="visible">
        <ControlItem>
          <Label>Image URL</Label>
          <Input
            type="text"
            placeholder="Input image link"
            value={src}
            onChange={onSrcChange}
          />
        </ControlItem>
        <SliderBar
          variants={appearVariant}
          label="Width"
          min={50}
          max={500}
          onChange={onWidthChange}
          step={1}
          value={width}
        />
        <SliderBar
          variants={appearVariant}
          label="Height"
          min={50}
          max={500}
          onChange={onHeightChange}
          step={1}
          value={height}
        />
      </ControlList>
    </Wrapper>
  );
};

export default ImageSettings;
