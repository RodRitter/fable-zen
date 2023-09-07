import React from "react";
import { Button as MuiButton } from "@mui/base";

interface Props {
  children?: React.ReactElement | React.ReactElement[] | string;
  kind?: string;
  onClick?: Function;
}

const Button = ({ children, kind, onClick }: Props) => {
  return (
    <MuiButton
      className={`button ${kind ? kind : ""} h-[36px] px-2 rounded-sm`}
      onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
        if (onClick) onClick(event);
      }}
    >
      <span>{children}</span>
    </MuiButton>
  );
};

export default Button;
