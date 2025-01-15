import { LoginForm } from "@/components/login-form";
export default function LoginPage() {
  return (
    <div className="flex h-[80vh] w-full flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Войти</h1>
      <LoginForm />
    </div>
  );
}
