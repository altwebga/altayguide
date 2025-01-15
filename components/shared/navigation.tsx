"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type NavigationProps = {
  navLinks: {
    title: string;
    href: string;
  }[];
  className?: string;
};

export function Navigation({ navLinks, className }: NavigationProps) {
  const pathname = usePathname();
  return (
    <nav className={className}>
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
