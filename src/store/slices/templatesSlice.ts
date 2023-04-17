import { createSlice } from "@reduxjs/toolkit";
import { TemplateOption } from "../../types/templateOption";
import { DEFAULT_TEMPLATE_SETTINGS } from "./defaultTemplateSettings";
import { Settings } from "../../types";

type SelectedElement = {
  id: number;
  type: "image" | "container" | "text";
  props: {
    [key: string]: string | number;
  };
};

interface TemplatesState {
  allTemplates: TemplateOption[];
  selectedTemplate: TemplateOption | null;
  selectedElement: SelectedElement | null;
  elementName: string | null;
  isEditorMode: Boolean;
}

const initialState: TemplatesState = {
  allTemplates: DEFAULT_TEMPLATE_SETTINGS,
  selectedTemplate: null,
  selectedElement: null,
  elementName: null,
  isEditorMode: true,
};

type KeyValuePair = {
  [key: string]: number | string;
};

export const templatesSlice = createSlice({
  name: "templates",
  initialState,
  reducers: {
    selectElement: (state, action) => {
      state.elementName = action.payload.name;
      state.selectedElement = action.payload.element;
    },
    setSelectedTemplate: (state, action) => {
      const template = state.allTemplates.find((t) => t.id === action.payload);
      if (template) state.selectedTemplate = template;
    },
    changeSettings: (state, action) => {
      const { elementName, name, value } = action.payload;
      const props = state.selectedTemplate?.settings[
        elementName as keyof Settings
      ].props as KeyValuePair;
      props[name] = value;
    },
    resetTemplateData: (state) => {
      if (state.selectedElement) return { ...initialState };
    },
    changeTemplateMode: (state, action) => {
      state.isEditorMode = action.payload.isEditorMode;
    },
  },
});

export const {
  selectElement,
  changeSettings,
  setSelectedTemplate,
  resetTemplateData,
  changeTemplateMode,
} = templatesSlice.actions;

export default templatesSlice.reducer;
