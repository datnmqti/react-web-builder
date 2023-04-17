import { Settings } from "./settings";

export interface Template {
  id: number;
  name: string;
  imageUrl: string;
  settings?: Settings;
}
