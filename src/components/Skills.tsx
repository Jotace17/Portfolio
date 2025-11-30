import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming",
    skills: ["C++", "Python", "Arduino", "Matlab", "OOP", "ROS2", "Ladder", "Assembly"]
  },
  {
    title: "Software and Tools",
    skills: ["OpenCV", "Jupiter", "Visual Studio", "MPlab", "FLuidSim", "Studio5000"]
  },
  {
    title: "Industrial Robots",
    skills: ["FANUC", "Universal Robots", "Staubli", "Epson"]
  },
  {
    title: "Mechanical Design",
    skills: ["SolidWorks", "Cura", "EdgeCam", "Abaqus"]
  },
  {
    title: "Collaboration tools",
    skills: ["Git", "Notion", "Overleaf", "Trello"]
  },
  {
    title: "Electronic Design",
    skills: ["Proteus", "EasyEDA", "Altium"]
  },
  {
    title: "COM Protocols",
    skills: ["Wi-Fi", "Bluetooth", "SPI/I2C", "MQTT", "UART", "EtherCAT"]
  },
  {
    title: "Development",
    skills: ["Rapid prototyping", "Microcontrollers", "Data adquisition", "Embedded systems", "Sensor/actuator integration", "PCB design", "Computer vision", "3D printing"]
  },
  {
    title: "Soft Skills",
    skills: ["Problem-solving", "Critical thinking", "Adaptability", "Proactivity"]
  }
];

const Skills = () => {
  return (
    <section className="py-24 relative" id="skills">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4 mb-12 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Skills & Expertise</h2>
            <div className="h-1 w-20 bg-gradient-primary rounded-full mx-auto" />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
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
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
