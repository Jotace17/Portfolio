import { motion } from "framer-motion";
import { Globe } from "lucide-react";

const languages = [
  { name: "French", level: "Native", proficiency: 100 },
  { name: "English", level: "Fluent (C1)", proficiency: 90 },
  { name: "Spanish", level: "Intermediate (B1)", proficiency: 60 },
  { name: "German", level: "Basic (A2)", proficiency: 30 },
];

const Languages = () => {
  return (
    <section id="languages" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Languages</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Multilingual communication skills enabling collaboration across international teams
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-6">
          {languages.map((language, index) => (
            <motion.div
              key={language.name}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg p-4 border border-border"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-primary" />
                  <span className="font-semibold">{language.name}</span>
                </div>
                <span className="text-sm text-muted-foreground">{language.level}</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${language.proficiency}%` }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="h-full bg-primary rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;
