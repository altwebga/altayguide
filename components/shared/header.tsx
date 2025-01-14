import Link from "next/link";
import { Navigation } from "./navigation";
import { Button } from "../ui/button";
import { CompassIcon } from "lucide-react";

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
    <header className="bg-background/50 backdrop-blur-md sticky top-0 z-40 w-full border-b">
      <div className="h-16 flex items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <CompassIcon className="w-6 h-6 text-primary" />
          <span>АлтайГид</span>
        </Link>

        <div className="flex items-center gap-8">
          <Navigation navLinks={navLinks} />
          <Button>Войти</Button>
        </div>
      </div>
    </header>
  );
}
