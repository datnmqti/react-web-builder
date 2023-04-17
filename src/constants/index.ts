import Template1 from "../templates/Template1";
import Template2 from "../templates/Template2";

export const FONT_WEIGHTS = [
  {
    name: "Light",
    value: 100,
  },
  {
    name: "Medium",
    value: 500,
  },
  {
    name: "Bold",
    value: 700,
  },
];

export const appearVariant = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.5,
      delayChildren: 0.4,
      staggerChildren: 0.08,
    },
  },
  hidden: { opacity: 0, y: 20 },
};

export const TEMPLATES_MAP = {
  simple: Template1,
  basic: Template2,
};
