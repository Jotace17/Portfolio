import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-24 relative" 
      id="about"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4 mb-12 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">About Me</h2>
            <div className="h-1 w-20 bg-gradient-primary rounded-full mx-auto" />
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-lg text-muted-foreground leading-relaxed text-justify"
            >
              <p>
                I'm a mechatronics engineer with a deep-rooted drive for innovation and over five years of hands-on R&D experience. 
                My work spans robotics, industrial automation, and embedded systems. 
                Fueled by curiosity and built on real-world impact.
              </p>
              
              <p>
                Originally from Cúcuta, a city in eastern Colombia. I received a B.Sc. 
                in Mechatronics Engineering from Universidad Autónoma del Caribe and an M.Sc. also in Mechatronics Engineering, 
                but this time from University of Oviedo in Spain.
              </p>
              
              <p>
                Throughout my academic and professional journey, I've had the chance to study and collaborate with 
                multicultural teams on a wide range of projects. These diverse experiences have not only sharpened my 
                technical expertise but also expanded my approach to innovation and problem-solving.
              </p>

              <p>
                I thrive on challenges and aspire to achieve impactful milestones in my career. 
                I'm excited to bring my skills and passion to your team and contribute to your company's success. 
                Let's create something remarkable together!
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-center"
            >
              <div className="w-full max-w-md aspect-[3/4] rounded-lg overflow-hidden shadow-lg bg-muted">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=800&fit=crop" 
                  alt="About Johnathan Caselles"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
