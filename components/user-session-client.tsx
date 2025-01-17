"use client";

import { useSession, signOut } from "next-auth/react";

export function UserSessionClient() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div>
      <div>
        <pre>{JSON.stringify(session, null, 2)}</pre>
        <button onClick={() => signOut({ redirectTo: "/" })}>Sign out</button>
      </div>
    </div>
  );
}
