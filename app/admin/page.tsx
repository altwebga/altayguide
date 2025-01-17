// app/admin/page.tsx
"use client";

import React from "react";
import { useSessionStore } from "@/providers/session-store-provider";

export default function AdminPage() {
  const session = useSessionStore((state) => state.session);

  return (
    <div>
      <h1>Admin Page</h1>
      {session ? (
        <div>
          <p>Добро пожаловать, {session.user.name}!</p>
          <p>Email: {session.user.email}</p>
        </div>
      ) : (
        <p>Вы не авторизованы.</p>
      )}
    </div>
  );
}
