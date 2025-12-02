import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Mechatronics Engineer - Master thesis",
    company: "Wandercraft",
    location: "Paris, France",
    period: "Feb 2023 - Aug 2023",
    description: "Developed a modular C++ test bench with EtherCAT to validate medical exoskeleton software, achieving sub-10-minute cycles and instant pass/fail reporting. This included 4,000+ automated checks across core scenarios, supported by a custom web dashboard for real-time monitoring and scalable deployment.",
    technologies: ["C++", "Robotics", "Testbench", "EtherCAT", "Automation", "Medical device", "exoskeleton"],
  },
  {
    id: 2,
    title: "Mechatronics Engineer Junior",
    company: "Relianz Mining Solutions",
    location: "Barranquilla, Colombia",
    period: "Dec 2022 - Apr 2023",
    description: "Programmed FANUC robots to optimize metal spray coating, reducing times by 35% while ensuring quality compliance. Designed SolidWorks mounting devices and protections that cut prep time by 43% and rework rates from 60% to 5% through standardized procedures and documentation.",
    technologies: ["Industrial robots", "FANUC", "SolidWorks", "PLC", "Automation", "Industrial Automation", "Mechanical design"],
  },
  {
    id: 3,
    title: "Junior Researcher",
    company: "GIIM Group - Universidad Autónoma del Caribe",
    location: "Barranquilla, Colombia",
    period: "Feb 2020 - Jun 2023",
    description: "Led prototyping of robotic, biomedical, and IoT systems using Arduino, ESP32, Raspberry Pi, and SolidWorks for real-world applications. Integrated sensors/actuators with I2C, SPI, UART, MQTT protocols and calibration; developed CNN/RNN models in OpenCV/TensorFlow for detection and estimation, securing IP for 6 projects endorsed by Minciencias.",
    technologies: ["Robotics", "SolidWorks" , "Python", "C++", "microcontrollers", "Mechatronic design", "Prototyping", "MATLAB", "OpenCV", "TensorFlow", "Neural Networks"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0, 0, 0.2, 1] as const }
  }
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My journey through the industry, building expertise in robotics and automation
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-[11px] top-8 bottom-0 w-0.5 bg-border" />
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                <Briefcase className="w-3 h-3 text-primary-foreground" />
              </div>

              <div className="bg-card border border-border rounded-lg p-6 ml-4 hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="flex flex-col gap-1 text-sm text-muted-foreground md:text-right">
                    <span className="flex items-center gap-1 md:justify-end">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1 md:justify-end">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
