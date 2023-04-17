import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Layout from "../components/Layout";
import PageContent from "../components/PageContent";
import PageSettings from "../components/PageSettings";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import {
  changeTemplateMode,
  resetTemplateData,
  setSelectedTemplate,
} from "../store/slices/templatesSlice";

import ReactDOMServer from "react-dom/server";
import { saveAs } from "file-saver";
import { Provider } from "react-redux";
import store from "../store";
import { ServerStyleSheet } from "styled-components";
import GlobalStyle from "../styles/globalStyles";
import { TEMPLATES_MAP } from "../constants";

const breadcrumbs = [
  { title: "Home", path: "/" },
  { title: "Design", path: "/design" },
];

const PageBuilder = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

const PageContentInner = styled.div`
  height: 100%;
  width: 100%;
  overflow-x: auto;
`;

const PageContentFrame = styled.div`
  width: 100%;
  min-width: 900px;
  height: 100%;
`;

function Design() {
  const { templateID } = useParams();
  const dispatch = useAppDispatch();
  const currentTemplate = useAppSelector(
    (state) => state.templates.selectedTemplate
  );

  useEffect(() => {
    if (templateID) dispatch(setSelectedTemplate(templateID));

    return () => {
      dispatch(resetTemplateData());
    };
  }, []);

  const Template: React.FC<any> =
    TEMPLATES_MAP[currentTemplate?.id as keyof typeof TEMPLATES_MAP];

  // TODO: Find another solution to make it better
  const handleExport = () => {
    if (currentTemplate) {
      dispatch(changeTemplateMode({ isEditorMode: false }));

      const html = ReactDOMServer.renderToStaticMarkup(
        <Provider store={store}>
          <Template settings={currentTemplate.settings} />
        </Provider>
      );

      const sheet = new ServerStyleSheet();
      ReactDOMServer.renderToStaticMarkup(
        sheet.collectStyles(
          <Provider store={store}>
            <GlobalStyle />
            <Template settings={currentTemplate.settings} />
          </Provider>
        )
      );
      const styles = sheet.getStyleTags();
      const blob = new Blob(
        [
          `
            <!DOCTYPE html>
            <htmllang="en">
            <head>
              <title>Index</title>
              <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500;700&display=swap" rel="stylesheet" >
              ${styles}
            </head>
            <body>${html}</body>
            </html>
          `,
        ],
        { type: "text/html" }
      );

      saveAs(blob, "index.html");
      dispatch(changeTemplateMode({ isEditorMode: true }));
    }
  };

  return (
    <Layout breadcrumbs={breadcrumbs} onExport={handleExport}>
      {currentTemplate ? (
        <PageBuilder>
          <PageContent>
            <PageContentInner>
              <PageContentFrame className="view-frame">
                {currentTemplate && Template ? (
                  <Template settings={currentTemplate.settings} />
                ) : null}
              </PageContentFrame>
            </PageContentInner>
          </PageContent>
          <PageSettings template={currentTemplate} />
        </PageBuilder>
      ) : null}
    </Layout>
  );
}

export default Design;
