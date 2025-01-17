// store/session-store.ts
import { createStore } from "zustand/vanilla";
import { devtools, persist } from "zustand/middleware";
import type { Session } from "next-auth";

export type SessionState = {
  session: Session | null;
  setSession: (session: Session | null) => void;
  clearSession: () => void;
};

export const createSessionStore = () =>
  createStore<SessionState>()(
    devtools(
      persist(
        (set) => ({
          session: null,
          setSession: (session) =>
            set(() => ({
              session,
            })),
          clearSession: () =>
            set(() => ({
              session: null,
            })),
        }),
        {
          name: "session-storage", // ключ в localStorage
        }
      )
    )
  );
