export type Element = {
  id: string;
  type: "heading" | "paragraph" | "image";
  content: string;
  color: string;
  borderRadius?: string;
  imageUrl?: string;
  style?: string;
};
