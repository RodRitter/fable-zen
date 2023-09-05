import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const WIDTH = 60;
const HEIGHT = 30;
const LG_WIDTH = 60;
const LG_HEIGHT = 36;

interface Props {
  label?: string;
  iconStart?: IconProp;
  iconEnd?: IconProp;
  large?: boolean;
  onToggle?: Function;
  value?: boolean;
  spread?: boolean;
}

const ToggleSwitch = ({
  label,
  iconStart,
  iconEnd,
  large,
  onToggle,
  value,
  spread,
}: Props) => {
  const [ready, setReady] = useState(false);
  const [toggled, setToggled] = useState(value || false);
  const [width, setWidth] = useState(WIDTH);
  const [height, setHeight] = useState(HEIGHT);

  useEffect(() => {
    if (large) {
      setWidth(LG_WIDTH);
      setHeight(LG_HEIGHT);
    }
  }, [large]);

  useEffect(() => {
    setReady(true);
  }, []);

  useEffect(() => {
    if (value !== undefined) setToggled(value);
  }, [value]);

  const handleCheckboxChange = () => {
    if (onToggle && ready) {
      if (value === undefined) {
        setToggled(!toggled);
        onToggle(!toggled);
      } else {
        setToggled(!value);
        onToggle(!value);
      }
    }
  };

  return (
    <label
      className={`toggle-switch ${
        toggled ? "toggled" : ""
      } flex items-center gap-2 px-2 ${spread ? "justify-between" : ""}`}
      style={{ cursor: "pointer", userSelect: "none" }}
    >
      {label && <span>{label}</span>}
      <input
        type="checkbox"
        checked={toggled}
        onChange={handleCheckboxChange}
        className="sr-only"
      />
      <div
        className={`rounded-full relative`}
        style={{ height: `${height}px`, width: `${width}px` }}
      >
        <div
          className={`pill bg-white rounded-full absolute top-1/2 -translate-y-1/2`}
          style={{
            height: `${height - 10}px`,
            width: `${height - 10}px`,
            left: toggled ? `${width - (height - 10) - 5}px` : `5px`,
            transition: "left ease-out 0.1s",
          }}
        ></div>

        {/* Icons */}
        {(iconStart || iconEnd) && (
          <div className="absolute left-2 right-2 top-0 bottom-0 flex items-center justify-between">
            <div
              className={`icon-start w-[${height - 10}px] h-[${
                height - 10
              }px] transition-all ${!toggled ? "opacity-0" : ""}`}
            >
              {iconStart && <FontAwesomeIcon icon={iconStart} />}
            </div>
            <div
              className={`icon-end w-[${height - 10}px] h-[${
                height - 10
              }px] transition-all ${toggled ? "opacity-0" : ""}`}
            >
              {iconEnd && <FontAwesomeIcon icon={iconEnd} />}
            </div>
          </div>
        )}
      </div>
    </label>
  );
};

export default ToggleSwitch;
