import { auth } from "@/auth";

export async function UserSessionServer() {
  const session = await auth();
  return (
    <div>
      <p>Сессия на сервере</p>
      <pre>{JSON.stringify(session, null, 2)}</pre>;
    </div>
  );
}
