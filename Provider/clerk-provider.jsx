"use client";

import { ClerkProvider as NextClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ClerkProvider({ children, ...props }) {
  const { theme, setTheme } = useTheme();
  const [clerkTheme, setClerkTheme] = useState(dark);

  // Sync Clerk's theme with next-themes
  useEffect(() => {
    console.log(localStorage.getItem("theme"));

    setClerkTheme(theme === "light" ? "" : dark);
  }, [theme]);

  return (
    <NextClerkProvider appearance={{ baseTheme: clerkTheme }} {...props}>
      {children}
    </NextClerkProvider>
  );
}
