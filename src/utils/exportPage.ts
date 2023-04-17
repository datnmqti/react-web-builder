import { Element } from "../types/element";

type ExportPageProps = {
  elements: Element[];
  backgroundColor: string;
  contentWidth: string;
};

const exportPage = ({
  elements,
  backgroundColor,
  contentWidth,
}: ExportPageProps) => {
  const html = `
    <html>
      <head>
        <title>My Static Web Page</title>
        <style>
          body {
            background-color: ${backgroundColor};
            margin: 0;
            padding: 0;
          }
          .container {
            width: ${contentWidth}px;
            margin: 0 auto;
          }
        </style>
      </head>
      <body>
        <div class="container">
          ${elements
            .map(
              (element) =>
                `<${element.type} style="${element.style}">
                  ${element.content}
                </${element.type}>`
            )
            .join("")}
        </div>
      </body>
    </html>
  `;

  const blob = new Blob([html], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "my-static-web-page.html";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

export default exportPage;
