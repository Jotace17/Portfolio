import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Distributed Task Scheduler",
    description: "A scalable microservices-based task scheduling system with real-time monitoring and fault tolerance. Built with Go, Kubernetes, and Redis.",
    tags: ["Go", "Kubernetes", "Redis", "Docker"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "AI-Powered Analytics Dashboard",
    description: "Real-time analytics platform with machine learning predictions. Features include data visualization, automated reporting, and anomaly detection.",
    tags: ["React", "Python", "TensorFlow", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, inventory management, and order tracking. Handles 100K+ daily transactions.",
    tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "Real-Time Collaboration Tool",
    description: "WebSocket-based collaboration platform enabling real-time document editing, chat, and video conferencing for distributed teams.",
    tags: ["Vue.js", "WebSocket", "WebRTC", "Express"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "IoT Monitoring System",
    description: "Cloud-based IoT platform for monitoring sensor data from industrial equipment. Includes alerting, data aggregation, and predictive maintenance.",
    tags: ["AWS IoT", "Python", "InfluxDB", "Grafana"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "DevOps Automation Suite",
    description: "Comprehensive CI/CD pipeline automation tool with infrastructure as code, automated testing, and deployment orchestration.",
    tags: ["Terraform", "Jenkins", "Ansible", "Docker"],
    github: "https://github.com",
    demo: "https://demo.com"
  }
];

const Projects = () => {
  return (
    <section className="py-24 relative" id="projects">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Featured Projects</h2>
            <div className="h-1 w-20 bg-gradient-primary rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="p-6 bg-card border-border hover:bg-surface-hover transition-all duration-300 hover:-translate-y-1 group"
              >
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 text-xs rounded-md bg-surface border border-border text-primary font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-2">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-border hover:bg-surface"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
