"use client";

import React, { createContext, useContext, useRef } from "react";
import { useStore } from "zustand";

import { createSessionStore, SessionState } from "@/store/session-store";

type SessionStoreApi = ReturnType<typeof createSessionStore>;

export const SessionStoreContext = createContext<SessionStoreApi | undefined>(
  undefined
);

export const SessionStoreProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const storeRef = useRef<SessionStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createSessionStore();
  }

  return (
    <SessionStoreContext.Provider value={storeRef.current}>
      {children}
    </SessionStoreContext.Provider>
  );
};

export const useSessionStore = <T,>(
  selector: (store: SessionState) => T
): T => {
  const store = useContext(SessionStoreContext);

  if (!store) {
    throw new Error(
      "useSessionStore must be used within a SessionStoreProvider"
    );
  }

  return useStore(store, selector);
};
