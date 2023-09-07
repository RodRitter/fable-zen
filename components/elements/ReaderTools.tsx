import {
  faAlignJustify,
  faClose,
  faFont,
  faGlasses,
  faIndent,
  faOutdent,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { Unstable_Popup as Popup } from "@mui/base/Unstable_Popup";
import ToggleSwitch from "./ToggleSwitch";
import ButtonGroupSwitch from "./ButtonGroupSwitch";

const ReaderTools = () => {
  const [open, setOpen] = useState(false);
  const [anchor, setAnchor] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    console.log(event);
    setAnchor(anchor ? null : event.currentTarget);
    setOpen(open ? false : true);
  };

  return (
    <div className="relative">
      <Button kind="outline" onClick={handleClick}>
        <FontAwesomeIcon icon={faGlasses} />
        <span className="ml-2">Reader Tools</span>
      </Button>

      <Popup open={open} anchor={anchor} placement="bottom">
        <div
          className={`panel w-[300px] p-4 rounded-md z-10 shadow-md grid gap-4 transition-all ${
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
      </Popup>
    </div>
  );
};

export default ReaderTools;
