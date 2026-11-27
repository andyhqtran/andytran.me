"use client";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { IconButton } from "./IconButton";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <IconButton
      appearance="ghost"
      icon={isDark ? SunIcon : MoonIcon}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    />
  );
};
