import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="py-24 relative" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6 mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Let's Connect</h2>
            <div className="h-1 w-20 bg-gradient-primary rounded-full mx-auto" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              For professional inquiries or collaboration opportunities, you’re welcome to reach out.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-12"
              asChild
            >
              <a href="mailto:contact@example.com">
                <Mail className="mr-2 h-5 w-5" />
                Send Me an Email
              </a>
            </Button>
            
            <div className="flex gap-6 justify-center items-center pt-4">
              <span className="text-muted-foreground">Or connect via:</span>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-70"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="h-8 w-8 text-foreground" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-70"
                aria-label="Github profile"
              >
                <Github className="h-8 w-8 text-foreground" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
};

export default Contact;
