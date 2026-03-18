import ThemeToggle from "./ThemeToggle";
import Oneko from "./Oneko";

export default function Header() {
  return (
    <header className="z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
        <Oneko />
        <ThemeToggle />
      </div>
    </header>
  );
}
