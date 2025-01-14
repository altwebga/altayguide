import { ThemeToggle } from "./theme-toggle";
export function Footer() {
  return (
    <footer className="bg-background">
      <div className="container mx-auto h-14 grid grid-cols-3 gap-4 items-center">
        <div>1</div>
        <div>2</div>
        <div>
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
}
