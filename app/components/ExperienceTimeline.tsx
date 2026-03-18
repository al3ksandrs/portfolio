const experiences = [
  {
    period: "2025 — Present",
    title: "Software Engineer",
    organization: "Digitect",
    description:
      "IDE application development using Theia, React and Go.",
  },
];

export default function ExperienceTimeline() {
  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp) => (
          <div key={exp.period} className="relative pl-6 border-l-2 border-primary/30">
            <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary" />
            <p className="font-mono text-sm text-muted-foreground mb-1">
              {exp.period}
            </p>
            <h3 className="font-medium">
              {exp.title}{" "}
              <span className="text-muted-foreground font-normal">
                @ {exp.organization}
              </span>
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
