import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  if (session && session.user.role === "ADMIN") {
    redirect("/admin");
    return null;
  }
  if (session) {
    redirect("/dashboard");
    return null;
  }

  return <>{children}</>;
}
