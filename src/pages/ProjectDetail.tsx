import { useParams, Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, Calendar, Users, Building, Lightbulb } from "lucide-react";
import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { useEffect } from "react";
import { HashLink } from 'react-router-hash-link'

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  useEffect(() => {
  window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/">
            <Button variant="secondary">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            {/* Back Button */}
            <HashLink smooth to="/#projects">
              <Button variant="ghost" className="mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Button>
            </HashLink>

            {/* Hero Carousel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 max-w-3xl mx-auto"
            >
              <Carousel className="w-full">
                <CarouselContent>
                  <CarouselItem>
                    <div className="aspect-video overflow-hidden rounded-lg bg-muted">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                  {project.mediaUrls && project.mediaUrls.map((url, index) => (
                    <CarouselItem key={index}>
                      <div className="aspect-video overflow-hidden rounded-lg bg-muted">
                        <img 
                          src={url} 
                          alt={`${project.title} - Image ${index + 2}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
            </motion.div>

            {/* Title Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4 mb-8"
            >
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{project.title}</h1>
              {project.subtitle && (
                <p className="text-xl text-muted-foreground italic">{project.subtitle}</p>
              )}
              <div className="h-1 w-20 bg-gradient-primary rounded-full" />
            </motion.div>

            {/* Tags */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {project.tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1 text-sm rounded-md bg-surface border border-border text-primary font-medium"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Description */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="prose max-w-none mb-12"
            >
              <h2 className="text-2xl font-semibold mb-4">Description</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.fullDescription || project.description}
              </p>
            </motion.div>

            {/* General Information */}
            {(project.role || project.teamSize || project.startDate || project.duration || project.associatedWith) && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-card border border-border rounded-lg p-6 mb-12"
              >
                <h2 className="text-2xl font-semibold mb-6">General Information</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.role && (
                    <div className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-semibold">Role</p>
                        <p className="text-muted-foreground">{project.role}</p>
                      </div>
                    </div>
                  )}
                  {project.teamSize && (
                    <div className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-semibold">Team Size</p>
                        <p className="text-muted-foreground">{project.teamSize}</p>
                      </div>
                    </div>
                  )}
                  {project.startDate && (
                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-semibold">Start Date</p>
                        <p className="text-muted-foreground">{project.startDate}</p>
                      </div>
                    </div>
                  )}
                  {project.duration && (
                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-semibold">Duration</p>
                        <p className="text-muted-foreground">{project.duration}</p>
                      </div>
                    </div>
                  )}
                  {project.associatedWith && (
                    <div className="flex items-start gap-3 md:col-span-2">
                      <Building className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-semibold">Associated With</p>
                        <p className="text-muted-foreground">{project.associatedWith}</p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* My Contributions */}
            {project.contributions && project.contributions.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-semibold mb-6">My Contributions</h2>
                <div className="space-y-3">
                  {project.contributions.map((contribution, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Lightbulb className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">{contribution}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Key Results */}
            {project.keyResults && project.keyResults.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-semibold mb-6">Key Results</h2>
                <div className="space-y-3">
                  {project.keyResults.map((result, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">{result}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex gap-4 pt-8 border-t border-border"
            >
              
            <HashLink smooth to="/#projects">
              <Button variant="ghost" className="mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Button>
            </HashLink>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 Johnathan's Engineering Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ProjectDetail;
