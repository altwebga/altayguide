import { UserSessionClient } from "@/components/user-session-client";

export default function AccountPage() {
  return (
    <div className="px-4">
      <h1>Account</h1>
      <UserSessionClient />
    </div>
  );
}
