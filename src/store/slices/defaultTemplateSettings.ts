import PreviewImg1 from "../../images/template1.png";
import PreviewImg2 from "../../images/template2.png";
import { TemplateOption } from "../../types/templateOption";

export const DEFAULT_TEMPLATE_SETTINGS: TemplateOption[] = [
  {
    id: "simple",
    name: "Simple Template",
    previewImg: PreviewImg1,
    settings: {
      container: {
        id: 1,
        type: "container",
        name: "Page",
        props: {
          backgroundColor: "#f6f1ea",
          width: 768,
        },
      },
      image: {
        id: 2,
        type: "image",
        name: "Image",
        props: {
          src: "https://i.ibb.co/5rCps01/photo.jpg",
          width: 430,
          height: 230,
        },
      },
      heading: {
        id: 3,
        type: "text",
        name: "Title",
        props: {
          text: "Da Nang City, Vietnam",
          color: "#676767",
          fontSize: 30,
          fontWeight: 500,
        },
      },
      paragraph: {
        id: 4,
        type: "text",
        name: "Paragraph",
        props: {
          text: "Da Nang is a coastal city in central Vietnam known for its sandy beaches and history as a French colonial port. It's a popular base for visiting the inland Bà Nà hills to the west of the city",
          color: "#8b8b8b",
          fontSize: 24,
          fontWeight: 100,
        },
      },
    },
  },
  {
    id: "basic",
    name: "Basic Template",
    previewImg: PreviewImg2,
    settings: {
      container: {
        id: 1,
        type: "container",
        name: "Page",
        props: {
          backgroundColor: "#feeaad",
          width: 979,
        },
      },
      image: {
        id: 2,
        type: "image",
        name: "Image",
        props: {
          src: "https://i.ibb.co/GRjpRzp/photo2.jpg",
          width: 330,
          height: 230,
        },
      },
      heading: {
        id: 3,
        type: "text",
        name: "Title",
        props: {
          text: "San Francisco, CA, United States",
          color: "#333",
          fontSize: 30,
          fontWeight: 500,
        },
      },
      paragraph: {
        id: 4,
        type: "text",
        name: "Paragraph",
        props: {
          text: "San Francisco is a major city located in Northern California, United States. It is known for its iconic landmarks such as the Golden Gate Bridge, Alcatraz Island, and Fisherman's Wharf.",
          color: "#676767",
          fontSize: 20,
          fontWeight: 100,
        },
      },
    },
  },
];
