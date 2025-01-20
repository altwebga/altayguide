"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

const navItems = [
  {
    name: "Туры",
    href: "/",
  },
  {
    name: "Экскурсии",
    href: "/",
  },
  {
    name: "Достопримечательности",
    href: "/",
  },
  {
    name: "Отели и турбазы",
    href: "/",
  },
  {
    name: "События",
    href: "/",
  },
];

export function NavMain() {
  const pathname = usePathname();
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {navItems.map((item) => (
          <SidebarMenuItem
            key={item.name}
            className={cn({ "bg-muted": pathname === item.href })}
          >
            <Link href={item.href}>{item.name}</Link>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
