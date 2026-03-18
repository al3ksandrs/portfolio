const education = [
  {
    period: "2015 — 2019",
    title: "[B.Sc. Computer Science]",
    organization: "[University]",
    description:
      "[Notable coursework, projects, or achievements during education.]",
  },
  {
    period: "2013 — 2015",
    title: "[Relevant Certification or Diploma]",
    organization: "[Institution]",
    description:
      "[Description of what was studied and key takeaways.]",
  },
];

export default function EducationTimeline() {
  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-semibold tracking-tight">Education</h2>
      <div className="space-y-8">
        {education.map((item) => (
          <div key={item.period} className="relative pl-6 border-l-2 border-accent/40">
            <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent" />
            <p className="font-mono text-sm text-muted-foreground mb-1">
              {item.period}
            </p>
            <h3 className="font-medium">
              {item.title}{" "}
              <span className="text-muted-foreground font-normal">
                @ {item.organization}
              </span>
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
