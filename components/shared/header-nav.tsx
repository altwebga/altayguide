"use client";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const navLinks = {
  explore: [
    {
      title: "Достопримечательности",
      href: "/places",
    },
    {
      title: "Проживание",
      href: "/hotels",
    },
    {
      title: "Туры",
      href: "/tours",
    },
    {
      title: "Экскурсии",
      href: "/excursions",
    },
  ],
  about: [
    {
      title: "Услуги и цены",
      href: "/pricing",
    },
    {
      title: "О проекте",
      href: "/about",
    },
    {
      title: "Контакты",
      href: "/contact",
    },
  ],
};

export default function HeaderNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Найти</NavigationMenuTrigger>
          <NavigationMenuContent className="flex flex-col gap-2">
            {navLinks.explore.map((link) => (
              <Link href={link.href} key={link.title}>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {link.title}
                </NavigationMenuLink>
              </Link>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>Вопрос - Ответ</NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>О проекте</NavigationMenuTrigger>
          <NavigationMenuContent className="flex flex-col gap-2 ml-4">
            {navLinks.about.map((link) => (
              <Link href={link.href} key={link.title}>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {link.title}
                </NavigationMenuLink>
              </Link>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuIndicator />
      </NavigationMenuList>
    </NavigationMenu>
  );
}
