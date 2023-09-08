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
import { useOutsideClick } from "@/hooks/useOutsideClick";

const ReaderTools = () => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const popupRef = useRef(null);

  useOutsideClick(() => setOpen(false), popupRef);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    console.log(event);
    setOpen(open ? false : true);
  };

  const PopupContent = () => (
    <div
      className={`panel w-[300px] p-4 rounded-md z-10 shadow-md grid gap-4 transition-all`}
      ref={popupRef}
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
  );

  return (
    <div className="relative" ref={anchorRef}>
      <Button kind="outline" onClick={handleClick}>
        <FontAwesomeIcon icon={faGlasses} />
        <span className="ml-2">Reader Tools</span>
      </Button>

      <Popup
        open={open}
        anchor={anchorRef.current}
        offset={10}
        placement="bottom"
      >
        <PopupContent />
      </Popup>
    </div>
  );
};

export default ReaderTools;
