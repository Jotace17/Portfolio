import { Card } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript/TypeScript", "Java", "C++", "Go", "SQL"]
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Vue.js", "Tailwind CSS", "HTML/CSS", "Redux"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Django", "FastAPI", "REST APIs", "GraphQL"]
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Firebase", "Supabase"]
  },
  {
    title: "DevOps & Tools",
    skills: ["Docker", "Kubernetes", "AWS", "Git", "CI/CD", "Linux"]
  },
  {
    title: "Other",
    skills: ["Machine Learning", "System Design", "Agile", "TDD", "Microservices", "API Design"]
  }
];

const Skills = () => {
  return (
    <section className="py-24 relative" id="skills">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Skills & Expertise</h2>
            <div className="h-1 w-20 bg-gradient-primary rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => (
              <Card 
                key={category.title}
                className="p-6 bg-card border-border hover:bg-surface-hover transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold mb-4 text-primary">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 text-sm rounded-md bg-surface border border-border text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
