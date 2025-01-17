import { UserSessionClient } from "@/components/user-session-client";
import { UserSessionServer } from "@/components/user-session-server";
export default function DashboardPage() {
  return (
    <div>
      <h1>Dashboard</h1>
      <UserSessionClient />
      <UserSessionServer />
    </div>
  );
}
