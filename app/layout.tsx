"use client";

import { ThemeProvider } from "@/components/providers";
import "./styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider>
        <div>{children}</div>
      </ThemeProvider>
    </html>
  );
}
