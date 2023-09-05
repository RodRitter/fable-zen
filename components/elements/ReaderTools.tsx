import {
  faAlignJustify,
  faClose,
  faFont,
  faGlasses,
  faIndent,
  faOutdent,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Button from "./Button";
import ToggleSwitch from "./ToggleSwitch";
import ButtonGroupSwitch from "./ButtonGroupSwitch";

const ReaderTools = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <Button kind="outline" onClick={() => setOpen(!open)}>
        <div className="flex gap-2 items-center justify-center">
          {open ? (
            <FontAwesomeIcon icon={faClose} />
          ) : (
            <FontAwesomeIcon icon={faGlasses} />
          )}
          <span>{open ? "Close" : "Reader Tools"}</span>
        </div>
      </Button>
      <div
        className={`absolute right-0 panel w-[300px] p-4 rounded-md z-10 shadow-md grid gap-4 transition-all ${
          !open ? "pointer-events-none opacity-0 top-[35px]" : "top-[45px]"
        }`}
      >
        <div>
          <ToggleSwitch
            label="Book Indent"
            onToggle={(toggled: boolean) => {}}
            spread
          />
        </div>
        <div>
          <ButtonGroupSwitch
            label="Font Size"
            buttons={[
              { name: "14pt", icon: faFont, iconClass: "h-[14px]" },
              { name: "16pt", icon: faFont, iconClass: "h-[16px]" },
              { name: "18pt", icon: faFont, iconClass: "h-[18px]" },
            ]}
            spread
          />
        </div>
      </div>
    </div>
  );
};

export default ReaderTools;
