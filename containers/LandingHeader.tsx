import React from "react";
import Image from "next/image";
import Link from "next/link";
import darkLogo from "../public/img/logos/logo-dark.png";
import lightLogo from "../public/img/logos/logo-light.png";
import useTheme from "@/hooks/useTheme";

const LandingHeader = () => {
  // @ts-ignore
  const { theme } = useTheme();

  return (
    <>
      <div className="flex items-center justify-center">
        <Link href="/">
          <Image
            src={theme === "light" ? lightLogo : darkLogo}
            alt="Fable Zen Logo"
            width={300}
            height={67}
            className="mt-6"
          />
        </Link>
      </div>
    </>
  );
};

export default LandingHeader;
