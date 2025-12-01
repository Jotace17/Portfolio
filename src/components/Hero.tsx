import { Download, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import LogoSlider from "./LogoSlider";
import photo_hero from "@/assets/foto_hero.jpg";

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
                  MSc. in Mechatronic and Robotics Engineering
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
                <Button size="lg" variant="outline">
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
                  <svg className="h-6 w-6 text-foreground" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 8.24c.507 0 .919-.412.919-.919 0-.506-.412-.918-.919-.918-.506 0-.918.412-.918.918 0 .507.412.919.918.919zm-.424 1.548v6.856h1.716v-6.856H6.945zm3.684 0v6.856h1.716v-3.77c0-1.442.85-2.235 2.057-2.235 1.077 0 1.674.673 1.674 1.893v4.112h1.716v-4.473c0-2.052-1.164-3.259-3.061-3.259-1.222 0-2.078.615-2.386 1.317h-.034v-1.441h-1.682z"/>
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