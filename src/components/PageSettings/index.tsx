import React from "react";
import styled from "styled-components";
import { TemplateOption } from "../../types/templateOption";
import { useAppSelector } from "../../hooks/useAppSelector";
import TextSettings from "../../settings/TextSettings";
import ImageSettings from "../../settings/ImageSettings";
import { Settings } from "../../types";
import ContainerSettings from "../../settings/ContainerSettings";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { changeSettings } from "../../store/slices/templatesSlice";

type Props = {
  template: TemplateOption;
};

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 340px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const SettingTitle = styled.p`
  font-size: 14px;
  text-align: center;
  border-bottom: 1px solid #ddd;
  padding: 15px 20px;
`;

const SettingContent = styled.div`
  padding: 20px;
`;

type SettingChangeProps = {
  elementName: string;
  id: number;
  name: string;
  value: string | number;
};

const PageSettings: React.FC<Props> = ({ template }) => {
  const dispatch = useAppDispatch();
  const type = useAppSelector((state) => state.templates.selectedElement?.type);
  const selectedTemplate = useAppSelector(
    (state) => state.templates.selectedTemplate
  );
  const elementName: string =
    useAppSelector((state) => state.templates.elementName) || "";

  const data = selectedTemplate?.settings[elementName as keyof Settings];
  const props: any = data?.props;

  const handleSettingChange = ({
    elementName,
    id,
    name,
    value,
  }: SettingChangeProps) => {
    dispatch(changeSettings({ elementName, id, name, value }));
  };

  const renderSettings = ({ type }: { type: string | undefined }) => {
    switch (type) {
      case "image":
        return (
          <ImageSettings
            width={props.width}
            height={props.height}
            src={props.src}
            onWidthChange={(value) => {
              handleSettingChange({
                elementName,
                id: data?.id || 0,
                name: "width",
                value,
              });
            }}
            onHeightChange={(value) => {
              handleSettingChange({
                elementName,
                id: data?.id || 0,
                name: "height",
                value,
              });
            }}
            onSrcChange={(value) => {
              handleSettingChange({
                elementName,
                id: data?.id || 0,
                name: "src",
                value,
              });
            }}
          />
        );
      case "text":
        return (
          <TextSettings
            text={props.text}
            color={props.color}
            fontSize={props.fontSize}
            fontWeight={props.fontWeight}
            onColorChange={(value) => {
              handleSettingChange({
                elementName,
                id: data?.id || 0,
                name: "color",
                value,
              });
            }}
            onFontSizeChange={(value) => {
              handleSettingChange({
                elementName,
                id: data?.id || 0,
                name: "fontSize",
                value,
              });
            }}
            onFontWeightChange={(value) => {
              handleSettingChange({
                elementName,
                id: data?.id || 0,
                name: "fontWeight",
                value,
              });
            }}
            onTextChange={(value) =>
              handleSettingChange({
                elementName,
                id: data?.id || 0,
                name: "text",
                value,
              })
            }
          />
        );
      case "container":
        return (
          <ContainerSettings
            width={props.width}
            backgroundColor={props.backgroundColor}
            onBackgroundColorChange={(value) => {
              handleSettingChange({
                elementName,
                id: data?.id || 0,
                name: "backgroundColor",
                value,
              });
            }}
            onWidthChange={(value) => {
              handleSettingChange({
                elementName,
                id: data?.id || 0,
                name: "width",
                value,
              });
            }}
          />
        );
      default:
        return <p>Default settings</p>;
    }
  };

  if (!type) return null;
  return (
    <Container>
      <SettingTitle>{data?.name} Settings</SettingTitle>
      <SettingContent>{renderSettings({ type: type })}</SettingContent>
    </Container>
  );
};

export default PageSettings;
