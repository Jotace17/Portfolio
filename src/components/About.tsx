import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import about_photo from "@/assets/photo_about.jpg";

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
                I'm a mechatronics engineer with over five years of R&D experience in robotics, industrial automation, 
                and embedded systems. I currently work in R&D on electric forklifts, where I contribute on the product 
                development and validation of new trucks following EU compliances.
              </p>
              
              <p>
                I grew up in Cúcuta, Colombia. I earned a B.Sc. in Mechatronics Engineering at Universidad Autónoma del Caribe, 
                then an M.Sc. in the same field at the University of Oviedo in Spain and SUPMICROTECH in France.
              </p>
              
              <p>
                Along the way I've worked with international, multicultural teams, which has taught me to communicate clearly 
                across languages and to approach problems from more than one angle.
              </p>

              <p>
                I like building things.
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
                  src={about_photo} 
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
