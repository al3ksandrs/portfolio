import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="text-lg font-medium tracking-tight">
          [Name]
        </a>
        <ThemeToggle />
      </div>
    </header>
  );
}
