"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type NavigationProps = {
  navLinks: {
    title: string;
    href: string;
  }[];
};

export function Navigation({ navLinks }: NavigationProps) {
  const pathname = usePathname();
  return (
    <nav>
      <ul className="flex gap-4">
        {navLinks.map((link) => (
          <li key={link.title}>
            <Link
              href={link.href}
              className={cn(
                "hover:underline",
                pathname === link.href && "underline"
              )}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
