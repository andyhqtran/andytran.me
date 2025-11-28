"use client";
import { ThemeProvider } from "next-themes";
import { type ReactNode } from "react";
import { RecoilRoot } from "recoil";

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <RecoilRoot>
      <ThemeProvider>{children}</ThemeProvider>
    </RecoilRoot>
  );
};
