import { signIn, providerMap } from "@/auth";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";

import { Button } from "./ui/button";

export function LoginForm() {
  return (
    <div className="flex flex-col gap-2 mt-2">
      {Object.values(providerMap).map((provider) => (
        <form
          key={provider.id}
          action={async () => {
            "use server";
            try {
              await signIn(provider.id);
            } catch (error) {
              if (error instanceof AuthError) {
                return redirect(`${"/auth/error"}?error=${error.type}`);
              }
              throw error;
            }
          }}
        >
          <Button type="submit" className="w-full">
            <span>Войти через {provider.name}</span>
          </Button>
        </form>
      ))}
    </div>
  );
}
