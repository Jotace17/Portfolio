export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  fullDescription?: string;
  tags: string[];
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
    id: "stylet3d",
    title: "Stylet 3D",
    subtitle: "Motion capture and gesture recognition of a pen for high-precision manipulation and real-time control of a 6DOF industrial robot",
    description: "Motion-capture pen tracked with depth sensing to control a 6DOF industrial robot through high-precision gestures and scaled movements.",
    fullDescription: "This project focused on the development of a motion capture and gesture recognition system based on an Intel RealSense depth camera, designed to track a custom ergonomic pen with high spatial accuracy. The system transforms the pen’s trajectory, orientation, and gesture inputs into precise robotic commands for the real-time control of a 6DOF industrial robot. It also supports scaled manipulation in both micro and standard workspaces, which significantly enhances fine motor control during intricate tasks. These capabilities enable applications in micro-assembly, precision manufacturing, and other environments that require accurate and adaptable human–robot interaction.",
    tags: ["Motion Capture", "Gesture Recognition", "Robotics", "Intel RealSense"],
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop",
    role: "Software leader",
    teamSize: "4 people",
    startDate: "10/2024",
    duration: "01/2025",
    associatedWith: "SUPMICROTECH-ENSMM (France)",
    contributions: [
      "Led the development of the real-time software architecture for pen tracking and gesture interpretation",
      "Implemented high-precision trajectory extraction using depth sensing data from Intel RealSense",
      "Designed algorithms for path recognition and movement scaling in different manipulation modes",
      "Developed communication protocols for seamless control of the 6DOF industrial robot",
      "Conducted systematic testing to evaluate accuracy, responsiveness, and user interaction"
    ],
    keyResults: [
      "CAD design of the ergonomic pen",
      "Development of a simple and intuitive user interface",
      "High precision tracking and path recognition using custom software",
      "Reliable real-time control and communication with the Universal Robot platform",
      "Implementation of multiple operational modes including scale mode, real-time mode, and path imitation mode"
    ],
    mediaUrls: []
  },
  {
    id: "q-air",
    title: "Q-Air",
    subtitle: "Indoor and outdoor air quality measurement device for the detection and monitoring of air pollutants with hazardous health effects (Final degree project)",
    description: "Portable IoT device for multi-pollutant air quality monitoring with real-time cloud visualization and geolocated environmental data acquisition.",
    fullDescription: "This project focused on the design, assembly, and programming of a portable 6x6x8cm IoT device for monitoring of 6 types of air pollutants (CO, CO₂, NO₂, O₃, PM₂.₅, PM₁₀) and atmospheric variables such as temperature and humidity, with live location and cloud storage and visualization through blynk. Designed for the measurement of air quality in outdoor and indoor environments.",
    tags: ["IoT", "Air Quality", "Sensors", "Blynk"],
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
    id: "rocco",
    title: "ROCCO",
    subtitle: "Set of tele-manipulated 6DOF robotic arms for handling biological agents in pharmaceutical and scientific applications",
    description: "Telemanipulated dual 6DOF robotic arms designed to replicate human motion for safe handling of biological agents in controlled environments.",
    fullDescription: "This project focused on the design, construction, and programming of a dual-arm telemanipulation system intended for the safe and precise handling of biological agents in pharmaceutical and scientific environments. The pair of robotic arms was conceived to emulate the kinematic behavior and dexterity of the human upper limbs, enabling operators to perform delicate procedures from a protected location. The system integrated custom mechanical design, embedded electronics, and software for accurate movement replication, thereby supporting high-precision manipulation under stringent biosafety constraints.",
    tags: ["Robotics", "Telemanipulation", "Biomedical Engineering", "6DOF", "Embedded Systems"],
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop",
    role: "Project leader in charge of software",
    teamSize: "4 people",
    startDate: "08/2022",
    duration: "5 months",
    associatedWith: "Universidad Autónoma del Caribe (Colombia)",
    contributions: [
      "Led the development of the control software for telemanipulated movement replication",
      "Implemented algorithms for joint coordination and human–robot motion mapping",
      "Designed the communication architecture for real-time wireless operation through Bluetooth and Arduino",
      "Supervised integration of custom PCB designs with mechanical and embedded subsystems",
      "Conducted performance testing to evaluate precision, latency, and operator usability"
    ],
    keyResults: [
      "CAD prototype designed following human arm morphology",
      "Functional software for control and data acquisition",
      "Stable real-time wireless communication via Bluetooth",
      "Custom PCBs designed and integrated into the robotic system",
      "Two software registrations were obtained"
    ],
    mediaUrls: []
  },

  {
    id: "robot3t",
    title: "Robot3T",
    subtitle: "3-DOF anthropomorphic robot with computer vision capable of autonomously playing tic-tac-toe",
    description: "Anthropomorphic 3DOF robot with computer vision for autonomous and real-time Tic Tac Toe gameplay against users.",
    fullDescription: "This project involved the complete design, fabrication, assembly, and evaluation of an anthropomorphic robot endowed with three degrees of freedom, conceived to autonomously play Tic Tac Toe against a human opponent. The work encompassed detailed CAD modelling, component selection for mechanical and electronic subsystems, the development of a custom PCB, and the implementation of computer vision algorithms that enabled the robot to perceive the game board and execute strategic movements. The resulting system demonstrates the integration of mechanical design, embedded electronics, and intelligent software for autonomous interactive behavior.",
    tags: ["Robotics", "Computer Vision", "3DOF", "Embedded Systems", "Human–Robot Interaction"],
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop",
    role: "Design and software leader",
    teamSize: "6 people",
    startDate: "01/2024",
    duration: "5 months",
    associatedWith: "Universidad de Oviedo (Spain)",
    contributions: [
      "Led the design of the 3DOF anthropomorphic robotic architecture",
      "Developed the embedded software for movement control and game logic execution",
      "Implemented the computer vision pipeline for board detection and opponent move recognition",
      "Designed the custom PCB and supervised its integration with mechanical and electronic systems",
      "Conducted comprehensive testing to validate precision, stability, and autonomous decision making"
    ],
    keyResults: [
      "CAD prototype completed",
      "Fabrication and assembly guide produced",
      "Computer vision software capable of autonomous gameplay",
      "Custom PCBs designed and integrated",
      "Successful communication between multiple microcontrollers"
    ],
    mediaUrls: []
  },
  {
    id: "fillbo",
    title: "FILLBO",
    subtitle: "Flexible manufacturing system for plastic bottle filling",
    description: "Automated flexible manufacturing system for detecting, filling, sealing, verifying, and classifying plastic bottles.",
    fullDescription: "This project focused on the design, assembly, and programming of a fully automated flexible manufacturing system for the filling of plastic bottles. The system comprised six stations organized into five sequential phases, which included detection, filling, sealing, verification, and classification. The design aimed to achieve autonomous operation with an output capacity of two bottles per minute, integrating mechanical, electrical, and software subsystems into a coherent production line. The work involved component selection, actuator design, sensor integration, and the development of control software that coordinated all stages of the process with precision and repeatability.",
    tags: ["Automation", "FMS", "Industrial Control", "Embedded Systems", "Mechatronics"],
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop",
    role: "Team leader, in charge of design and software",
    teamSize: "4 people",
    startDate: "03/2022",
    duration: "4 months",
    associatedWith: "Universidad Autónoma del Caribe (Colombia)",
    contributions: [
      "Led the mechanical and software design of the flexible manufacturing system",
      "Selected and specified components for all stations throughout the production line",
      "Designed oleopneumatic actuators for controlled movement and bottle handling",
      "Developed the electrical architecture and integrated sensors across all phases",
      "Programmed the control logic to synchronize detection, filling, sealing, and classification processes"
    ],
    keyResults: [
      "Component selection completed",
      "Oleopneumatic actuator design developed",
      "Full FMS designed and assembled",
      "Electrical design and sensor integration achieved",
      "One software registration was obtained"
    ],
    mediaUrls: []
  },

  {
    id: "grab-las",
    title: "GRAB-LAS",
    subtitle: "Low-cost laser engraving machine",
    description: "Low-cost laser engraving machine designed for precise engraving, printing, and cutting through soft materials.",
    fullDescription: "This project involved the design and construction of a low-cost laser engraving machine intended to improve engraving, printing, and cutting processes across a range of materials. The system exploited the precision and adaptability of laser technology to achieve finer detail and greater versatility when compared to conventional mechanical engraving methods. The work included mechanical design, the selection and integration of sensors and actuators, safety considerations through the implementation of a protective enclosure, and the development of comprehensive documentation for user operation.",
    tags: ["Laser Systems", "Mechatronics", "Automation", "Fabrication", "Embedded Systems"],
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop",
    role: "Design leader",
    teamSize: "4 people",
    startDate: "04/2022",
    duration: "3 months",
    associatedWith: "Universidad Autónoma del Caribe (Colombia)",
    contributions: [
      "Led the mechanical design of the laser engraving system",
      "Developed the protective enclosure with integrated eye-safety features",
      "Selected and integrated sensors and actuators for operational reliability",
      "Supervised prototype assembly and functional testing",
      "Prepared user documentation and ensured compliance with safety requirements"
    ],
    keyResults: [
      "Protective enclosure designed with an eye-protection system",
      "Sensors and actuators selected and integrated",
      "Prototype successfully assembled",
      "User manual and documentation completed",
      "One software registration was obtained"
    ],
    mediaUrls: []
  },
];
