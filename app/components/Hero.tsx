export default function Hero() {
  return (
    <section className="flex flex-col items-center sm:items-start gap-4 text-center sm:text-left">
      <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center text-muted-foreground text-sm">
        [Photo]
      </div>
      <h1 className="text-3xl font-semibold tracking-tight">[Name]</h1>
      <p className="text-lg text-muted-foreground">[Title / Role]</p>
      <p className="text-foreground/80 max-w-lg">
        [Bio tagline — a short sentence or two describing what you do and what
        you&apos;re passionate about.]
      </p>
    </section>
  );
}
