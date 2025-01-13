import Link from "next/link";
import { Navigation } from "./navigation";
import { Button } from "../ui/button";

const navLinks = [
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
];

export function Header() {
  return (
    <header>
      <div className="h-16 flex items-center justify-between px-4">
        <Link href="/">
          <span>Logo</span>
        </Link>

        <div className="flex items-center gap-8">
          <Navigation navLinks={navLinks} />
          <Button>Войти</Button>
        </div>
      </div>
    </header>
  );
}
