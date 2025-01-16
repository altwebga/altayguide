"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { SessionStoreProvider } from "@/providers/session-store-provider";

export function AppProvider({
  children,
}: React.ComponentProps<typeof NextThemesProvider>) {
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
}
