// src/stores/session-store.ts
import { createStore } from "zustand/vanilla";
import type { Session } from "next-auth";

export type SessionState = {
  session: Session | null;
  setSession: (session: Session | null) => void;
  clearSession: () => void; // Для очистки данных
};

export const createSessionStore = () =>
  createStore<SessionState>()((set) => ({
    session: null,
    setSession: (session) => set(() => ({ session })),
    clearSession: () => set(() => ({ session: null })), // Сбрасывает сессию
  }));
