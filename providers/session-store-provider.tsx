// providers/session-store-provider.tsx
"use client";

import React, { createContext, useContext, useRef } from "react";
import { useStore } from "zustand";
import { createSessionStore, SessionState } from "@/store/session-store";

export type SessionStoreApi = ReturnType<typeof createSessionStore>;

const SessionStoreContext = createContext<SessionStoreApi | undefined>(
  undefined
);

export const SessionStoreProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const storeRef = useRef<SessionStoreApi>();
  if (!storeRef.current) {
    // Lazily initializes the session store only once
    storeRef.current = createSessionStore();
  }

  return (
    <SessionStoreContext.Provider value={storeRef.current}>
      {children}
    </SessionStoreContext.Provider>
  );
};

export const useSessionStore = <T,>(
  selector: (state: SessionState) => T
): T => {
  const store = useContext(SessionStoreContext);

  if (!store) {
    // Ensures the hook is used within a provider context
    throw new Error(
      "useSessionStore must be used within a SessionStoreProvider"
    );
  }

  // Subscribes to a specific part of the state using the provided selector
  return useStore(store, selector);
};
