import { Download, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import LogoSlider from "./LogoSlider";
import photo_hero from "@/assets/foto_hero.jpg";


  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16 md:pt-0">

      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-radial" />

      <div className="container mx-auto px-4 relative z-10 flex-1 flex items-center justify-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 items-center justify-center animate-fade-in">
            {/* Profile Photo - Left Side */}
            <div className="flex justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-muted overflow-hidden shadow-lg">
                <img 
                  src={photo_hero} 
                  alt="Johnathan Caselles"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content - Right Side */}
            <div className="space-y-8 text-center lg:-ml-32 flex flex-col justify-center pt-8 md:pt-0">
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground">Hello, I'm</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                  Johnathan Caselles
                </h1>
                <p className="text-xl md:text-2xl bg-gradient-primary bg-clip-text text-transparent font-semibold">
                  MSc. in Mechatronics and Robotics Engineering
                </p>
              </div>

              <div className="flex flex-wrap gap-3 justify-center items-center">
                <Button 
                  size="lg" 
                  variant="secondary" 
                  className="group" 
                  onClick={() =>
                  (window.location.href = "https://drive.google.com/file/d/1h81pI8GACOJKDLFrxuMLxhlMBR_xQLt0/view?usp=drive_link")
                  }
                >
                  <Download className="mr-2 h-4 w-4" />
                  CV in English
                </Button>

                <Button 
                  size="lg" 
                  variant="secondary" 
                  className="group"
                  onClick={() =>
                  (window.location.href = "https://drive.google.com/file/d/12xCQabItwQzRK4zVXYXUMIaubJv8ngoX/view?usp=drive_link")
                  }
                >
                  <Download className="mr-2 h-4 w-4" />
                  CV en français
                </Button>
                <Button size="lg" variant="outline"  onClick={() => scrollToSection("#contact")}>
                  Contact Info
                </Button>
              </div>

              <div className="flex gap-4 justify-center">
                <a 
                  href="https://www.linkedin.com/in/jcaselles/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-70"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin className="h-6 w-6 text-foreground" />
                </a>
                <a 
                  href="https://github.com/Jotace17" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-70"
                  aria-label="Github profile"
                >
                  <Github className="h-6 w-6 text-foreground" />
                </a>
                <a 
                  href="https://orcid.org/0009-0008-2112-1748" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-70"
                  aria-label="ORCID profile"
                >
                  <svg 
                    className="h-6 w-6 text-foreground"
                    xmlns="http://www.w3.org/2000/svg" 
                    width="100em" 
                    height="100em" 
                    viewBox="0 0 512 512" 
                  >
                    <path fill="#333333" d="M 296.258064516129 185.80645161290323 L 248.7741935483871 185.80645161290323 L 296.258064516129 185.80645161290323 L 248.7741935483871 185.80645161290323 L 248.7741935483871 344.7741935483871 L 248.7741935483871 344.7741935483871 L 297.2903225806452 344.7741935483871 L 297.2903225806452 344.7741935483871 Q 348.9032258064516 342.7096774193548 366.4516129032258 314.83870967741933 Q 385.03225806451616 288 382.96774193548384 265.2903225806452 Q 384 232.25806451612902 362.3225806451613 209.5483870967742 Q 340.64516129032256 186.83870967741936 296.258064516129 185.80645161290323 L 296.258064516129 185.80645161290323 Z M 256 0 Q 184.7741935483871 1.032258064516129 126.96774193548387 35.096774193548384 L 126.96774193548387 35.096774193548384 L 126.96774193548387 35.096774193548384 Q 69.16129032258064 69.16129032258064 35.096774193548384 126.96774193548387 L 35.096774193548384 126.96774193548387 L 35.096774193548384 126.96774193548387 Q 1.032258064516129 184.7741935483871 0 256 Q 1.032258064516129 327.2258064516129 35.096774193548384 385.03225806451616 Q 69.16129032258064 442.83870967741933 126.96774193548387 476.9032258064516 Q 184.7741935483871 510.96774193548384 256 512 Q 327.2258064516129 510.96774193548384 385.03225806451616 476.9032258064516 Q 442.83870967741933 442.83870967741933 476.9032258064516 385.03225806451616 Q 510.96774193548384 327.2258064516129 512 256 Q 510.96774193548384 184.7741935483871 476.9032258064516 126.96774193548387 Q 442.83870967741933 69.16129032258064 385.03225806451616 35.096774193548384 Q 327.2258064516129 1.032258064516129 256 0 L 256 0 Z M 172.38709677419354 372.64516129032256 L 141.41935483870967 372.64516129032256 L 172.38709677419354 372.64516129032256 L 141.41935483870967 372.64516129032256 L 141.41935483870967 157.93548387096774 L 141.41935483870967 157.93548387096774 L 172.38709677419354 157.93548387096774 L 172.38709677419354 372.64516129032256 Z M 156.90322580645162 134.19354838709677 Q 138.32258064516128 132.1290322580645 137.29032258064515 113.54838709677419 Q 138.32258064516128 94.96774193548387 156.90322580645162 92.90322580645162 Q 175.48387096774192 94.96774193548387 177.5483870967742 113.54838709677419 Q 175.48387096774192 132.1290322580645 156.90322580645162 134.19354838709677 L 156.90322580645162 134.19354838709677 Z M 301.4193548387097 372.64516129032256 L 217.80645161290323 372.64516129032256 L 301.4193548387097 372.64516129032256 L 217.80645161290323 372.64516129032256 L 217.80645161290323 157.93548387096774 L 217.80645161290323 157.93548387096774 L 301.4193548387097 157.93548387096774 L 301.4193548387097 157.93548387096774 Q 360.258064516129 160 388.1290322580645 193.03225806451613 Q 414.96774193548384 225.03225806451613 414.96774193548384 265.2903225806452 Q 414.96774193548384 308.64516129032256 385.03225806451616 339.61290322580646 Q 355.0967741935484 371.61290322580646 301.4193548387097 372.64516129032256 L 301.4193548387097 372.64516129032256 Z"></path>
                  </svg>
                  
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Logo Slider */}
      <LogoSlider />

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
};

export default Hero;