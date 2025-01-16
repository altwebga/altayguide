"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import useAuthStore from "./authStore";

export const useSyncSession = () => {
  const { data: session } = useSession();
  const setSession = useAuthStore((state) => state.setSession);

  useEffect(() => {
    // Устанавливаем данные сессии в Zustand
    setSession(session || null);
  }, [session, setSession]);
};
