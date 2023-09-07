import React from "react";
import Image from "next/image";
import Link from "next/link";
import darkLogo from "../public/img/logos/logo-dark.png";
import lightLogo from "../public/img/logos/logo-light.png";
import useTheme from "@/hooks/useTheme";
import ToggleSwitch from "@/components/elements/ToggleSwitch";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import Avatar from "@/components/elements/Avatar";
import ReaderTools from "@/components/elements/ReaderTools";

interface Props {
  readerTools?: boolean;
}

const LoggedHeader = ({ readerTools }: Props) => {
  // @ts-ignore
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center py-4 justify-between">
      <Link href="/app/">
        <Image
          src={theme === "light" ? lightLogo : darkLogo}
          alt="Fable Zen Logo"
          width={200}
          height={44}
        />
      </Link>

      <div className="flex items-center justify-end gap-2">
        {readerTools && <ReaderTools />}
        <div>
          {theme && (
            <ToggleSwitch
              iconStart={faMoon}
              iconEnd={faSun}
              onToggle={(toggled: boolean) =>
                setTheme(toggled ? "light" : "dark")
              }
              value={theme === "light"}
            />
          )}
        </div>

        <div className="flex-1">
          <Avatar />
        </div>
      </div>
    </div>
  );
};

export default LoggedHeader;
