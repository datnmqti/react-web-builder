import styled from "styled-components";
import Layout from "../components/Layout";
import TemplateList from "../components/TemplateList";
import { useAppSelector } from "../hooks/useAppSelector";

const WrapContent = styled.div`
  margin-top: 50px;
`;

const Message = styled.p`
  margin-bottom: 25px;
  font-size: 25px;
  color: #000;
  text-align: center;
`;

function Home() {
  const allTemplates = useAppSelector((state) => state.templates.allTemplates);

  return (
    <Layout>
      <WrapContent>
        <Message>Choose a template to start</Message>
        <TemplateList templates={allTemplates} />
      </WrapContent>
    </Layout>
  );
}

export default Home;
