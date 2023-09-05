import React from "react";

interface Props {
  children?: React.ReactElement | string;
  kind?: string;
  onClick?: Function;
}

const Button = ({ children, kind, onClick }: Props) => {
  return (
    <button
      className={`button ${kind ? kind : ""} h-[36px] px-2 rounded-sm`}
      onClick={() => {
        if (onClick) onClick();
      }}
    >
      {children}
    </button>
  );
};

export default Button;
