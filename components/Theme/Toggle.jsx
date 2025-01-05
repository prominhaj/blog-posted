"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { themeSetInCookie } from "@/app/actions/action";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = async (theme) => {
    await themeSetInCookie(theme);
    setTheme(theme);
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => handleThemeChange(theme === "light" ? "dark" : "light")}
      className="border-transparent shadow-transparent focus-visible:ring-transparent px-2 rounded-full"
    >
      <Sun className="w-9 h-9 transition-all scale-100 rotate-0 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute w-9 h-9 transition-all scale-0 rotate-90 dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
