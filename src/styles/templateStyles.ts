import styled from "styled-components";

export const TemplateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: #f5f5f5;
`;

export const TemplateHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: #ffffff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const TemplateLogo = styled.img`
  height: 40px;
  margin-right: 10px;
`;

export const TemplateTitle = styled.h1`
  font-size: 24px;
`;

export const TemplateMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding: 20px;
`;

export const TemplateSidebar = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 300px;
  margin-right: 20px;
`;

export const TemplateSettingsTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const TemplateSettingsSection = styled.div`
  margin-bottom: 20px;
`;

export const TemplateContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: calc(100% - 320px);
`;

export const TemplateSection = styled.section`
  margin-bottom: 20px;
`;

export const TemplateSectionTitle = styled.h2`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const TemplateSectionContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const TemplateElementWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 33.33%;
  padding: 10px;
`;

export const TemplateElementImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 10px;
`;

export const TemplateElementHeading = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const TemplateElementParagraph = styled.p`
  font-size: 14px;
`;
