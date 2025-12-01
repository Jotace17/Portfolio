import { GraduationCap } from "lucide-react";
import WorldMap from "./WorldMap";
import { motion } from "framer-motion";

const education = [
  {
    degree: "EU4M Master in Robotics and Mechatronics Engineering (2nd year)",
    institution: "Supmicrotech ENSMM",
    city: "Besançon, France",
    period: "2024 - 2025",
    description: "Specialized in Software Architecture and Distributed Systems. GPA: 16/20"
  },
  {
    degree: "EU4M Master in Robotics and Mechatronics Engineering (1st year)",
    institution: "Universidad de Oviedo",
    period: "2023 - 2024",
    city: "Gijón, Spain",
    description: "Specialized in Software Architecture and Distributed Systems. GPA: 7.6/10.0"
  },
  {
    degree: "Bachelor of Science in Mechatronics Engineering",
    institution: "Universidad Autónoma del Caribe",
    period: "2016 - 2020",
    city: "Barranquilla, Colombia",
    description: "Focus on Algorithms, Data Structures, and Software Development. Dean's List all semesters. GPA: 4.5/5.0"
  },
];

const Education = () => {
  return (
    <section className="py-24 relative" id="education">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4 mb-12 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Academic Path</h2>
            <div className="h-1 w-20 bg-gradient-primary rounded-full mx-auto" />
          </motion.div>

          {/* World Map */}
          <div className="mb-16">
            <WorldMap />
          </div>
          
          <div className="space-y-8 max-w-4xl mx-auto">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
                      <p className="text-sm text-muted-foreground mt-1">{item.city}</p>
                      <p className="text-sm text-muted-foreground mt-1">{item.period}</p>
                      <p className="text-muted-foreground mt-3">{item.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
