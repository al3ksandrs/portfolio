import Image from "next/image";

interface Skill {
  name: string;
  icon?: string;
}

const categories: { name: string; skills: Skill[]; colorClass: string }[] = [
  {
    name: "Languages",
    colorClass: "bg-primary/15 text-primary",
    skills: [
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "Python" },
      { name: "Go" },
      { name: "SQL" },
    ],
  },
  {
    name: "Frameworks",
    colorClass: "bg-accent/15 text-accent",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Node.js" },
      { name: "Tailwind CSS" },
      { name: "Express" },
    ],
  },
  {
    name: "Tools",
    colorClass: "bg-muted text-muted-foreground",
    skills: [
      { name: "Git" },
      { name: "Docker" },
      { name: "PostgreSQL" },
      { name: "Linux" },
      { name: "VS Code" },
    ],
  },
];

export default function SkillsGrid() {
  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>
      <div className="space-y-6">
        {categories.map((category) => (
          <div key={category.name} className="space-y-3">
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill.name}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-mono ${category.colorClass}`}
                >
                  {skill.icon && (
                    <Image
                      src={skill.icon}
                      alt=""
                      width={16}
                      height={16}
                      className="inline-block"
                    />
                  )}
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
