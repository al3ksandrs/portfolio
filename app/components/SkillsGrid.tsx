import Image from "next/image";

interface Skill {
  name: string;
  icon: string;
}

const categories: { name: string; skills: Skill[]; colorClass: string }[] = [
  {
    name: "Languages",
    colorClass: "bg-primary/15 text-primary",
    skills: [
      { name: "TypeScript", icon: "/icons/TypeScript.svg" },
      { name: "JavaScript", icon: "/icons/JavaScript.svg" },
      { name: "Java", icon: "/icons/Java.svg" },
      { name: "Go", icon: "/icons/Go.svg" },
      { name: "SQL", icon: "/icons/SQL.svg" },
      { name: "Kotlin", icon: "/icons/Kotlin.svg" },
      { name: "HTML", icon: "/icons/HTML5.svg" },
      { name: "CSS", icon: "/icons/CSS3.svg" },
    ],
  },
  {
    name: "Frameworks",
    colorClass: "bg-accent/15 text-accent",
    skills: [
      { name: "React", icon: "/icons/React.svg" },
      { name: "Next.js", icon: "/icons/Next.js.svg" },
      { name: "Vue.js", icon: "/icons/Vue.js.svg" },
      { name: "Electron", icon: "/icons/Electron.svg" },
      { name: "Capacitor", icon: "/icons/Capacitor.svg" },
    ],
  },
  {
    name: "Tools",
    colorClass: "bg-muted text-muted-foreground",
    skills: [
      { name: "Git", icon: "/icons/Git.svg" },
      { name: "NPM", icon: "/icons/NPM.svg" },
      { name: "Docker", icon: "/icons/Docker.svg" },
      { name: "PostgreSQL", icon: "/icons/PostgresSQL.svg" },
      { name: "Kubernetes", icon: "/icons/Kubernetes.svg" },
      { name: "Claude Code", icon: "/icons/ClaudeCode.svg" },
      { name: "Vite", icon: "/icons/Vite.js.svg" },
      { name: "Figma", icon: "/icons/Figma.svg" },
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
                  <Image
                    src={skill.icon}
                    alt=""
                    width={16}
                    height={16}
                    className="inline-block"
                  />
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
