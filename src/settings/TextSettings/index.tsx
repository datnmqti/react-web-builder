import React from "react";
import styled from "styled-components";
import Textarea from "../../components/common/Textarea";
import ControlItem from "../../components/common/ControlItem";
import Label from "../../components/common/Label";
import ColorPicker from "../../components/common/ColorPicker";
import SliderBar from "../../components/common/Sliderbar";
import RadioGroup from "../../components/common/RadioGroup";
import Radio from "../../components/common/Radio";
import { FONT_WEIGHTS, appearVariant } from "../../constants";
import ControlList from "../../components/common/ControlList";

const Wrapper = styled.div`
  margin-top: 14px;
  padding: 0 10px;
`;

interface Props {
  text: string;
  fontSize: number;
  fontWeight: number;
  color: string;
  onTextChange: (value: string) => void;
  onFontSizeChange: (fontSize: number) => void;
  onFontWeightChange: (fontWeight: number) => void;
  onColorChange: (color: string) => void;
}

const TextSettings: React.FC<Props> = ({
  text,
  fontSize,
  fontWeight,
  color,
  onTextChange,
  onFontSizeChange,
  onFontWeightChange,
  onColorChange,
}) => {
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    onTextChange(value);
  };

  const handleFontWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onFontWeightChange(Number(value));
  };

  return (
    <Wrapper>
      <ControlList variants={appearVariant} initial="hidden" animate="visible">
        <ControlItem>
          <Label>Color</Label>
          <ColorPicker value={color} onColorChange={onColorChange} />
        </ControlItem>
        <SliderBar
          variants={appearVariant}
          label="Font Size"
          min={10}
          max={200}
          onChange={onFontSizeChange}
          step={1}
          value={fontSize}
        />
        <ControlItem variants={appearVariant}>
          <Label>Font Weight</Label>
          <RadioGroup>
            {FONT_WEIGHTS.map((item, idx) => (
              <Radio
                checked={item.value === fontWeight}
                key={idx}
                group="fontWeight"
                id={item.name}
                onChange={handleFontWeightChange}
                {...item}
              />
            ))}
          </RadioGroup>
        </ControlItem>
        <ControlItem variants={appearVariant}>
          <Label>Content</Label>
          <Textarea name="content" value={text} onChange={handleTextChange} />
        </ControlItem>
      </ControlList>
    </Wrapper>
  );
};

export default TextSettings;
