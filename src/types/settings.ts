export interface Settings {
  container: {
    id: number;
    type: "container";
    name: string;
    props: {
      backgroundColor: string;
      width: number;
    };
  };
  image: {
    id: number;
    type: "image";
    name: string;
    props: {
      src: string;
      width: number;
      height: number;
    };
  };
  heading: {
    id: number;
    type: "text";
    name: string;
    props: {
      text: string;
      color: string;
      fontSize: number;
      fontWeight: number;
    };
  };
  paragraph: {
    id: number;
    type: "text";
    name: string;
    props: {
      text: string;
      color: string;
      fontSize: number;
      fontWeight: number;
    };
  };
}
