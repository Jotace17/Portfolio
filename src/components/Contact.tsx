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
              <a href="&#x6D;&#x61;&#x69;&#x6C;&#x74;&#x6F;&#x3A;&#x6A;&#x6F;&#x68;&#x6E;&#x61;&#x74;&#x68;&#x61;&#x6E;&#x2E;&#x63;&#x61;&#x73;&#x65;&#x6C;&#x6C;&#x65;&#x73;&#x40;&#x65;&#x75;&#x34;&#x6D;&#x2E;&#x65;&#x75;">
                <Mail className="mr-2 h-5 w-5" />
                Send Me an Email
              </a>
            </Button>
            
            <div className="flex gap-6 justify-center items-center pt-4">
              <span className="text-muted-foreground">Or connect via:</span>
              <a 
                href="https://www.linkedin.com/in/jcaselles/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-70"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="h-8 w-8 text-foreground" />
              </a>
              <a 
                href="https://github.com/Jotace17" 
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
