import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

interface Props {
  label?: string;
  spread?: boolean;
  buttons: { name: string; icon: IconDefinition; iconClass?: string }[];
}

const ButtonGroupSwitch = ({ label, spread, buttons }: Props) => {
  const [selected, setSelected] = useState(buttons[0].name);

  const onSelect = (name: string) => {
    setSelected(name);
  };

  return (
    <label
      className={`button-switch flex items-center gap-2 px-2  ${
        spread ? "justify-between" : ""
      }`}
      style={{ cursor: "pointer", userSelect: "none" }}
    >
      {label && <span>{label}</span>}
      <div className="flex rounded-sm">
        {buttons.map((button) => (
          <div key={button.name}>
            <button
              className={`w-[30px] h-[30px] ${
                selected === button.name ? "active" : ""
              }`}
              onClick={() => onSelect(button.name)}
            >
              <FontAwesomeIcon
                icon={button.icon}
                className={`${button.iconClass ? button.iconClass : ""}`}
              />
            </button>
          </div>
        ))}
      </div>
    </label>
  );
};

export default ButtonGroupSwitch;
