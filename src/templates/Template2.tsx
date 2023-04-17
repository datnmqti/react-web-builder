import React from "react";
import styled from "styled-components";
import { Settings } from "../types";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { selectElement } from "../store/slices/templatesSlice";
import SelectableElement from "../components/SelectableElement";

type Template2Props = {
  settings: Settings;
};

type Template2ContainerProps = {
  backgroundColor: string;
};

type ContentContainerProps = {
  contentWidth: number;
};

type ImageContainerProps = {
  imageWidth: number;
  imageHeight: number;
};

type HeadingProps = {
  headingFontSize: number;
  headingColor: string;
  headingFontWeight: number;
};

type ParagraphProps = {
  paragraphFontSize: number;
  paragraphColor: string;
  paragraphFontWeight: number;
};

const Template2Container = styled.div<Template2ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.backgroundColor};
  overflow: hidden;
`;

const ContentContainer = styled.div<ContentContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: ${(props) => props.contentWidth + "px"};
  padding: 80px 50px;
`;

const Article = styled.div`
  display: flex;
`;

const Content = styled.div`
  margin-top: 20px;
  margin-left: 40px;
`;

const ImageContainer = styled.figure<ImageContainerProps>`
  flex-shrink: 0;
  width: ${(props) => props.imageWidth + "px"};
  height: ${(props) => props.imageHeight + "px"};
  border-radius: 0 9999px 9999px 0;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Heading = styled.h1<HeadingProps>`
  font-size: ${(props) => props.headingFontSize + "px"};
  font-weight: ${(props) => props.headingFontWeight};
  color: ${(props) => props.headingColor};
  margin-bottom: 12px;
`;

const Paragraph = styled.p<ParagraphProps>`
  font-size: ${(props) => props.paragraphFontSize + "px"};
  color: ${(props) => props.paragraphColor};
  font-weight: ${(props) => props.paragraphFontWeight};
  margin-bottom: 1rem;
`;

const Template2: React.FC<Template2Props> = ({ settings }) => {
  const { container, image, heading, paragraph } = settings;
  const dispatch = useAppDispatch();
  const selectedID = useAppSelector(
    (state) => state.templates.selectedElement?.id
  );

  const handleElementChoose = (obj: any) => {
    dispatch(selectElement(obj));
  };

  return (
    <Template2Container
      backgroundColor={container.props.backgroundColor}
      onClick={() => {
        handleElementChoose({ element: container, name: "container" });
      }}
    >
      <ContentContainer contentWidth={container.props.width}>
        <Article>
          <SelectableElement
            isSelected={selectedID === image.id}
            onClick={() => {
              handleElementChoose({ element: image, name: "image" });
            }}
          >
            <ImageContainer
              imageWidth={image.props.width}
              imageHeight={image.props.height}
            >
              <Image src={image.props.src} />
            </ImageContainer>
          </SelectableElement>
          <Content>
            <SelectableElement
              isSelected={selectedID === heading.id}
              onClick={() =>
                handleElementChoose({ element: heading, name: "heading" })
              }
            >
              <Heading
                headingFontSize={heading.props.fontSize}
                headingColor={heading.props.color}
                headingFontWeight={heading.props.fontWeight}
              >
                {heading.props.text}
              </Heading>
            </SelectableElement>
            <SelectableElement
              isSelected={selectedID === paragraph.id}
              onClick={() =>
                handleElementChoose({ element: paragraph, name: "paragraph" })
              }
            >
              <Paragraph
                paragraphFontWeight={paragraph.props.fontWeight}
                paragraphFontSize={paragraph.props.fontSize}
                paragraphColor={paragraph.props.color}
              >
                {paragraph.props.text}
              </Paragraph>
            </SelectableElement>
          </Content>
        </Article>
      </ContentContainer>
    </Template2Container>
  );
};

export default Template2;
