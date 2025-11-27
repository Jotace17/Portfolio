import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 relative" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Let's Connect</h2>
            <div className="h-1 w-20 bg-gradient-primary rounded-full mx-auto" />
            <p className="text-xl text-muted-foreground">
              Interested in working together? Let's discuss your project
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6 rounded-lg bg-card border border-border">
              <div className="inline-flex p-3 rounded-lg bg-surface border border-border mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <a 
                href="mailto:contact@example.com" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                contact@example.com
              </a>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-card border border-border">
              <div className="inline-flex p-3 rounded-lg bg-surface border border-border mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <a 
                href="tel:+1234567890" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                +1 (234) 567-890
              </a>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-card border border-border">
              <div className="inline-flex p-3 rounded-lg bg-surface border border-border mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground">
                San Francisco, CA
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              asChild
            >
              <a href="mailto:contact@example.com">
                Get In Touch
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
};

export default Contact;
