import { GraduationCap } from "lucide-react";
import WorldMap from "./WorldMap";

const education = [
  {
    degree: "Master of Science in Computer Engineering",
    institution: "Technical University",
    period: "2020 - 2022",
    description: "Specialized in Software Architecture and Distributed Systems. GPA: 3.9/4.0"
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "State University",
    period: "2016 - 2020",
    description: "Focus on Algorithms, Data Structures, and Software Development. Dean's List all semesters."
  },
  {
    degree: "Relevant Certifications",
    institution: "Various Platforms",
    period: "2019 - Present",
    description: "AWS Solutions Architect, Google Cloud Professional, Kubernetes Administrator (CKA)"
  }
];

const Education = () => {
  return (
    <section className="py-24 relative" id="education">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-4 mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Academic Path</h2>
            <div className="h-1 w-20 bg-gradient-primary rounded-full mx-auto" />
          </div>

          {/* World Map */}
          <div className="mb-16">
            <WorldMap />
          </div>
          
          <div className="space-y-8 max-w-4xl mx-auto">
            {education.map((item, index) => (
              <div 
                key={index}
                className="relative pl-8 pb-8 border-l-2 border-border last:border-l-0 last:pb-0"
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-surface border border-border">
                      <GraduationCap className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground">{item.degree}</h3>
                      <p className="text-primary font-medium">{item.institution}</p>
                      <p className="text-sm text-muted-foreground mt-1">{item.period}</p>
                      <p className="text-muted-foreground mt-3">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
