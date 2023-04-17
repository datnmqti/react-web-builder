import React from "react";
import styled from "styled-components";
import { TemplateOption } from "../../types/templateOption";
import { Link } from 'react-router-dom';

const List = styled.div`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 350px);
  gap: 20px;
  justify-content: center;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const Item = styled(Link)`
  position: relative;
  display: block;
  margin: 1rem;
  cursor: pointer;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transform: translateY(-8px);

    &::before {
      opacity: 1;
    }
  }

  &:before {
    content: "> Customize it";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #e3e3e3d4;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
    color: #333;
    letter-spacing: 0.1em;
  }
`;

const Figure = styled.figure`
  width: 100%;
  height: 210px;
  overflow: hidden;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Name = styled.p`
  color: #333;;
  text-align: center;
  font-size: 18px;
  padding: 18px 20px;
  background-color: #fff;
`;

interface TemplateListProps {
  templates: TemplateOption[];
}

const TemplateList: React.FC<TemplateListProps> = ({
  templates,
}) => {
  return (
    <List>
      {templates.map((template) => (
        <Item key={template.id} to={`design/${template.id}`}>
          <Figure>
            <Image src={template.previewImg} alt={template.name} />
          </Figure>
          <Name>{template.name}</Name>
        </Item>
      ))}
    </List>
  );
};

export default TemplateList;
