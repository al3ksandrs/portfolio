export default function Footer() {
  return (
    <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
      <p>
        &copy; {new Date().getFullYear()} Aleksandrs Soskolainens.
      </p>
    </footer>
  );
}
