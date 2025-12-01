import { Award } from "lucide-react";
import { motion } from "framer-motion";

const awards = [
  {
    title: "Published Research Paper",
    organization: "MDPI Journal",
    period: "January 2025",
    description: "Published a paper on the development of an innovative device for indoor and outdoor air quality measurement, enabling detection and monitoring of hazardous air pollutants impacting health."
  },
  {
    title: "Speaker",
    organization: "III Congress of Technology and Innovation in Engineering and Computing, Lima, Peru",
    period: "November 2023",
    description: "Presented a technical talk on the Q-Air device, an innovative system for indoor and outdoor air quality monitoring."
  },
  {
    title: "Outstanding Final Degree Project Award",
    organization: "Universidad Autónoma del Caribe",
    period: "July 2023",
    description: "Recognized for excellence in final year project: development of the Q-Air* device for comprehensive indoor and outdoor air quality monitoring focusing on health-related pollutants."
  },
  {
    title: "Outstanding Graduate Student",
    organization: "Universidad Autónoma del Caribe",
    period: "July 2023",
    description: "Honored for exceptional academic achievement and consistent excellence throughout the degree program."
  },
  {
    title: "Full Scholarship Recipient",
    organization: "European Union",
    period: "May 2023",
    description: "Awarded a full scholarship for the Joint Master Degree in Robotics and Mechatronics Engineering (EU4M)."
  },
  {
    title: "Software and Prototype Registrations",
    organization: "Universidad Autónoma del Caribe - Ministry of Science, Technology, and Innovation, Colombia",
    period: "2020-2023",
    description: "Secured intellectual property rights for 6 innovative software solutions and prototypes, officially registered with Colombia's Ministry of Science, Technology, and Innovation."
  },
  {
    title: "Honor Roll",
    organization: "Universidad Autónoma del Caribe",
    period: "2019-2023",
    description: "Consistently ranked in the top 5 for academic performance each semester throughout the entire degree."
  }
];

const Awards = () => {
  return (
    <section className="py-24 relative" id="awards">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4 mb-12 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Awards & Distinctions</h2>
            <div className="h-1 w-20 bg-gradient-primary rounded-full mx-auto" />
          </motion.div>
          
          <div className="space-y-8 max-w-4xl mx-auto">
            {awards.map((item, index) => (
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
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                      <p className="text-primary font-medium">{item.organization}</p>
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

export default Awards;
