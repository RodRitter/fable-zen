"use client";
import { Inter } from "next/font/google";
import useTheme, { ThemeHook } from "@/hooks/useTheme";
import React, { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  //@ts-ignore
  const { theme } = useTheme<ThemeHook>();

  useEffect(() => {
    useTheme.persist.rehydrate();
  }, []);

  return (
    <body data-theme={theme} className={inter.className}>
      <main>{children}</main>
    </body>
  );
};
