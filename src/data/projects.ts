export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  fullDescription?: string;
  tags: string[];
  github: string;
  image: string;
  role?: string;
  teamSize?: string;
  startDate?: string;
  duration?: string;
  associatedWith?: string;
  contributions?: string[];
  keyResults?: string[];
  mediaUrls?: string[];
}

export const projects: Project[] = [
  {
    id: "q-air",
    title: "Project Q-Air",
    subtitle: "Indoor and outdoor air quality measurement device for the detection and monitoring of air pollutants with hazardous health effects (Final degree project)",
    description: "A scalable microservices-based task scheduling system with real-time monitoring and fault tolerance. Built with Go, Kubernetes, and Redis.",
    fullDescription: "This project focused on the design, assembly, and programming of a portable 6x6x8cm IoT device for monitoring of 6 types of air pollutants (CO, CO₂, NO₂, O₃, PM₂.₅, PM₁₀) and atmospheric variables such as temperature and humidity, with live location and cloud storage and visualization through blynk. Designed for the measurement of air quality in outdoor and indoor environments.",
    tags: ["IoT", "Air Quality", "Sensors", "Blynk"],
    github: "https://github.com",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop",
    role: "Project co-leader",
    teamSize: "2 people",
    startDate: "10/2022",
    duration: "9 months",
    associatedWith: "Universidad Autónoma del Caribe (Colombia)",
    contributions: [
      "Led the hardware design and sensor integration for the IoT device",
      "Developed the data acquisition and transmission firmware",
      "Implemented real-time data visualization through Blynk platform",
      "Conducted field testing and calibration against fixed monitoring stations"
    ],
    keyResults: [
      "Proceeding paper published in MDPI journal",
      "6 hours of autonomy thanks to battery and mobile network connection",
      "Error rate under 1.2% compared to fixed monitoring stations in the city",
      "Real time cloud storage through MQTT",
      "One software registration was obtained"
    ],
    mediaUrls: []
  },
  {
    id: "analytics-dashboard",
    title: "AI-Powered Analytics Dashboard",
    description: "Real-time analytics platform with machine learning predictions. Features include data visualization, automated reporting, and anomaly detection.",
    tags: ["React", "Python", "TensorFlow", "PostgreSQL"],
    github: "https://github.com",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
  },
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, inventory management, and order tracking. Handles 100K+ daily transactions.",
    tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop"
  },
  {
    id: "collaboration-tool",
    title: "Real-Time Collaboration Tool",
    description: "WebSocket-based collaboration platform enabling real-time document editing, chat, and video conferencing for distributed teams.",
    tags: ["Vue.js", "WebSocket", "WebRTC", "Express"],
    github: "https://github.com",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
  },
  {
    id: "iot-monitoring",
    title: "IoT Monitoring System",
    description: "Cloud-based IoT platform for monitoring sensor data from industrial equipment. Includes alerting, data aggregation, and predictive maintenance.",
    tags: ["AWS IoT", "Python", "InfluxDB", "Grafana"],
    github: "https://github.com",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop"
  },
  {
    id: "devops-suite",
    title: "DevOps Automation Suite",
    description: "Comprehensive CI/CD pipeline automation tool with infrastructure as code, automated testing, and deployment orchestration.",
    tags: ["Terraform", "Jenkins", "Ansible", "Docker"],
    github: "https://github.com",
    image: "https://images.unsplash.com/photo-1667372393086-9d4001d51cf1?w=800&h=600&fit=crop"
  }
];
