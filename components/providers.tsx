"use client";
import useTheme, { ThemeHook } from "@/hooks/useTheme";
import React, { useEffect } from "react";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  //@ts-ignore
  const { theme } = useTheme<ThemeHook>();

  useEffect(() => {
    useTheme.persist.rehydrate();
  }, []);

  return <main data-theme={theme}>{children}</main>;
};
