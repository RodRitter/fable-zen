import { IconDefinition, faParagraph } from "@fortawesome/free-solid-svg-icons";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import React from "react";

interface Props {
  options: {
    icon: IconDefinition;
    name: string;
  }[];
}

const SelectGroup = ({ options }: Props) => {
  return (
    <div className="flex">
      {options.map((option) => (
        <button key={option.name} className="relative w-[30px] h-[50px]">
          <FontAwesomeIcon icon={option.icon} size="lg" />
          <div className="absolute bottom-0 left-0 right-0 h-[5px] bg-secondary"></div>
        </button>
      ))}
    </div>
  );
};

export default SelectGroup;
