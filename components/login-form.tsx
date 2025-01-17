import { providerMap, signIn } from "@/auth";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";
export function LoginForm() {
  return (
    <div className="flex flex-col gap-4">
      {Object.values(providerMap).map((provider) => (
        <form
          key={provider.id}
          action={async () => {
            "use server";
            try {
              await signIn(provider.id, {
                redirectTo: "/dashboard",
              });
            } catch (error) {
              if (error instanceof AuthError) {
                return redirect(`${"/error"}?error=${error.type}`);
              }
              throw error;
            }
          }}
        >
          <button type="submit" className="w-full">
            <span>Войти через {provider.name}</span>
          </button>
        </form>
      ))}
    </div>
  );
}
