import { auth } from "@/auth";
export default async function AdminPage() {
  const session = await auth();
  if (!session) {
    return null;
  }
  return (
    <div>
      <h1>Admin</h1>
      <pre>{JSON.stringify(session.user, null, 2)}</pre>
    </div>
  );
}
