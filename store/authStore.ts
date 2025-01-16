import { create } from "zustand";
import { Session } from "next-auth";

interface AuthState {
  session: Session | null;
  setSession: (session: Session | null) => void;
}

const useAuthStore = create<AuthState>((set) => ({
  session: null, // Начальное состояние
  setSession: (session) => set({ session }),
}));

export default useAuthStore;
