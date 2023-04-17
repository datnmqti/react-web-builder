import { Element } from "../types/element";

type ElementSetting = {
  name: string;
  type: "text" | "color";
};

type ElementSettings = {
  [key: string]: string;
};

const getElementSettings = (
  element: Element,
  settings: ElementSettings
): ElementSettings => {
  const elementSettings = {};

  for (const [key, value] of Object.entries(settings)) {
    // if (key in element) {
    //   elementSettings[key] = value;
    // }
  }

  return elementSettings;
};

const getElementSettingInputs = (
  element: Element,
  settings: ElementSetting[],
  onChange: (setting: string, value: string) => void
) => {
  const elementSettings = getElementSettings(element, {});

  return settings.map((setting) => {
    const value = elementSettings[setting.name] || "";

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(setting.name, event.target.value);
    };

    const inputProps = {
      name: setting.name,
      type: setting.type,
      value,
      onChange: handleChange,
    };

    return (
      <div key={setting.name}>
        <label>{setting.name}</label>
        <input {...inputProps} />
      </div>
    );
  });
};

export { getElementSettings, getElementSettingInputs };
