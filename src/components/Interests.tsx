import { motion } from "framer-motion";
import { 
  Plane, 
  Camera, 
  Music, 
  Dumbbell, 
  Book, 
  Gamepad2,
  Mountain,
  Coffee
} from "lucide-react";

const interests = [
  { name: "Traveling", icon: Plane, description: "Exploring new cultures and places" },
  { name: "Photography", icon: Camera, description: "Capturing moments and landscapes" },
  { name: "Music", icon: Music, description: "Playing guitar and discovering new artists" },
  { name: "Fitness", icon: Dumbbell, description: "Staying active and healthy" },
  { name: "Reading", icon: Book, description: "Science fiction and technical books" },
  { name: "Gaming", icon: Gamepad2, description: "Strategy and simulation games" },
  { name: "Hiking", icon: Mountain, description: "Outdoor adventures and nature" },
  { name: "Coffee", icon: Coffee, description: "Exploring specialty coffee" },
];

const Interests = () => {
  return (
    <section id="interests" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Interests</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Beyond engineering, here's what keeps me curious and inspired
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-card rounded-xl p-5 border border-border text-center group hover:border-primary/50 transition-colors"
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <interest.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-1">{interest.name}</h3>
              <p className="text-xs text-muted-foreground">{interest.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;
