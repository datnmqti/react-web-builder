import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../hooks/useAppSelector';

type PageContentProps = {
  children: React.ReactNode;
};

type ContainerProps = {
  isShowSettingPanel: boolean;
}

const Container = styled.div<ContainerProps>`
  transition: padding .15s ease-in;
  padding-right: ${({isShowSettingPanel}) => isShowSettingPanel ? '340px' : '0'};
  height: 100%;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
`;

const PageContent: React.FC<PageContentProps> = ({ children }) => {
  const isShowSettingPanel = useAppSelector(state => state.templates.selectedElement);

  return (
    <Container isShowSettingPanel={!!isShowSettingPanel}>
      <Content>{children}</Content>
    </Container>
  );
};

export default PageContent;
