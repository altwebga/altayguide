// components/AppProvider.tsx
"use client";

import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { SessionStoreProvider } from "@/providers/session-store-provider";

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <SessionStoreProvider>{children}</SessionStoreProvider>
    </NextThemesProvider>
  );
};
