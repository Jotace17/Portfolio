import stylet_cover from "@/assets/projects/stylet/cover.png";
import stylet_photo1 from "@/assets/projects/stylet/setup.png";
import stylet_photo2 from "@/assets/projects/stylet/sketch_structure.png";
import stylet_photo3 from "@/assets/projects/stylet/sketch_elements.png";
import stylet_video1 from "@/assets/projects/stylet/test.mp4";
import stylet_video2 from "@/assets/projects/stylet/tracking.mp4";
import stylet_video3 from "@/assets/projects/stylet/aruco.mp4";

import qair_cover from "@/assets/projects/qair/cover.png";
import qair_video1 from "@/assets/projects/qair/test.mp4";
import qair_photo1 from "@/assets/projects/qair/pcb.png";
import qair_photo2 from "@/assets/projects/qair/pcb_2d.png";


import robot_cover from "@/assets/projects/Robot3t/cover.png";
import robot_video1 from "@/assets/projects/Robot3t/test.mp4";
import robot_photo1 from "@/assets/projects/Robot3t/side_view.png";
import robot_photo2 from "@/assets/projects/Robot3t/sagital_view.png";
import robot_photo3 from "@/assets/projects/Robot3t/explosion_transmision.png";
import robot_photo4 from "@/assets/projects/Robot3t/explosion_gripper.png";
import robot_photo5 from "@/assets/projects/Robot3t/top_view.png";
import robot_photo6 from "@/assets/projects/Robot3t/base_focus.png";

import rocco_cover from "@/assets/projects/rocco/cover.png";
import rocco_video1 from "@/assets/projects/rocco/demo.mp4";
import rocco_photo1 from "@/assets/projects/rocco/photo.png";

import fillbo_cover from "@/assets/projects/fillbo/cover.png";
import fillbo_video1 from "@/assets/projects/fillbo/test.mp4";

import moai_cover from "@/assets/projects/moai/cover.png";
import moai_video1 from "@/assets/projects/moai/video.mp4";
import moai_video2 from "@/assets/projects/moai/point_cloud.mp4";
import moai_photo1 from "@/assets/projects/moai/post_scan.png";

import meye_cover from "@/assets/projects/meye/cover.png";
import meye_photo1 from "@/assets/projects/meye/rnn-leaves.png";
import meye_photo2 from "@/assets/projects/meye/ropa.png";
import meye_photo3 from "@/assets/projects/meye/rice.png";
import meye_photo4 from "@/assets/projects/meye/rice_results.png";

import grablas_cover from "@/assets/projects/grablas/cover.png";
import grablas_photo1 from "@/assets/projects/grablas/perspective.png";

import industrial_cover from "@/assets/projects/industrial/cover.png";
import industrial_video1 from "@/assets/projects/industrial/epson.mp4";
import industrial_video2 from "@/assets/projects/industrial/mir.mp4";
import industrial_video3 from "@/assets/projects/industrial/fanuc3.mp4";
import industrial_video4 from "@/assets/projects/industrial/fanuc2.mp4";
import industrial_video5 from "@/assets/projects/industrial/fanuc1.mp4";
import industrial_video6 from "@/assets/projects/industrial/staubli.mp4";

import coming from "@/assets/projects/cs.png";

export interface MediaItem {
  url: string;
  type: "image" | "video";
}

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
  media?: MediaItem[];
}

export const projects: Project[] = [
  {
    id: "stylet3d",
    title: "Stylet 3D",
    subtitle: "Motion capture and gesture recognition of a pen for high-precision manipulation and real-time control of a 6DOF industrial robot",
    description: "Motion-capture pen tracked with depth sensing to control a 6DOF industrial robot through high-precision gestures and scaled movements.",
    fullDescription: "This project focused on the development of a motion capture and gesture recognition system based on an Intel RealSense depth camera, designed to track a custom ergonomic pen with high spatial accuracy. The system transforms the pen’s trajectory, orientation, and gesture inputs into precise robotic commands for the real-time control of a 6DOF industrial robot. It also supports scaled manipulation in multiple workspaces, which significantly enhances fine motor control during intricate tasks. These capabilities could enable applications in micro-assembly, precision manufacturing, and other environments that require accurate and adaptable human–robot interaction.",
    tags: ["Motion Capture", "Gesture Recognition", "Robotics", "Intel RealSense", "LiDAR"],
    image: stylet_cover,
    role: "Software leader",
    teamSize: "4 people",
    startDate: "10/2024",
    duration: "01/2025",
    associatedWith: "SUPMICROTECH-ENSMM (France)",
    contributions: [
      "Designed and led the software architecture for high-frequency pen tracking and gesture decoding",
      "Implemented precision trajectory extraction and pose estimation using Intel RealSense depth data",
      "Developed multi-mode manipulation algorithms, including scaling, direct teleoperation, and path imitation",
      "Supported communication protocols for robust, low-latency control of a Universal Robots arm",
      "Built a rotation and position pen emulator to conduct systematic accuracy validation",
      "Executed controlled testing campaigns evaluating precision, responsiveness, and interaction usability"
    ],
    keyResults: [
      "High precision trajectory accuracy achieved through optimized depth filtering and spatial reconstruction",
      "Multiple interaction modes implemented, including scaled manipulation, real-time teleoperation, and path imitation",
      "Gesture-recognition module enabling command triggering and mode switching",
      "Stable real-time control of a UR robot validated across varying workspace configurations",
      "Fully functional ergonomic pen prototype designed with reliable 6DOF pose estimation"
    ],
    media: [
      { url: stylet_photo2, type: "image" },
      { url: stylet_photo3, type: "image" },
      { url: stylet_photo1, type: "image" },
      { url: stylet_video1, type: "video" },
      { url: stylet_video2, type: "video" },
      { url: stylet_video3, type: "video" },
    ]
  },

  {
    id: "robot3t",
    title: "Robot3T",
    subtitle: "3-DOF anthropomorphic robot with computer vision capable of autonomously playing tic-tac-toe",
    description: "Anthropomorphic 3DOF robot with computer vision for autonomous and real-time Tic Tac Toe gameplay against human users.",
    fullDescription: "This project involved the complete design, fabrication, assembly, and evaluation of an anthropomorphic robot endowed with three degrees of freedom, conceived to autonomously play Tic Tac Toe against a human opponent. The work encompassed detailed CAD modelling, component selection for mechanical and electronic subsystems, the development of a custom PCB, and the implementation of computer vision algorithms that enabled the robot to perceive the game board and execute strategic movements.",
    tags: ["Robotics", "Computer Vision", "3DOF", "Embedded Systems", "Human–Robot Interaction"],
    image: robot_cover,
    role: "Design and software leader",
    teamSize: "5 people",
    startDate: "01/2024",
    duration: "5 months",
    associatedWith: "Universidad de Oviedo (Spain)",
    contributions: [
      "Designed and led the mechanical prototype and assembly of the robot’s 3DOF anthropomorphic architecture",
      "Developed embedded motion-control software and turn-based game-logic execution",
      "Co-authored the vision pipeline for board detection, perspective correction, and symbol recognition",
      "Supported the design and integration of a custom PCB for motor, sensor, and logic coordination",
      "Conducted stability, precision, and autonomy tests across full game cycles",
      "Collaborated in the creation of documentation, user manuals, and detailed engineering drawings"
    ],
    keyResults: [
      "Fully validated mechanical design enabling stable 3DOF anthropomorphic motion with minimal backlash", 
      "Vision pipeline achieved reliable symbol detection and board-state reconstruction under variable lighting",
      "Autonomous gameplay module executed full game cycles with strategic move planning",
      "Custom PCB and distributed-control architecture ensured synchronized motion and sensor acquisition",
      "Robot demonstrated consistent end-effector accuracy sufficient for drawing within the game grid"
    ],
    media: [
      { url: robot_video1, type: "video" },
      { url: robot_photo1, type: "image" },
      { url: robot_photo2, type: "image" },
      { url: robot_photo6, type: "image" },
      { url: robot_photo5, type: "image" },
      { url: robot_photo3, type: "image" },
      { url: robot_photo4, type: "image" },
    ]
  },

  {
    id: "rocco",
    title: "ROCCO",
    subtitle: "Set of tele-manipulated 6DOF robotic arms for handling biological agents in pharmaceutical and scientific applications",
    description: "Telemanipulated dual 6DOF robotic arms designed to replicate human motion for safe handling of biological agents in controlled environments.",
    fullDescription: "This project focused on the design, construction, and programming of a pair of tele-manipulable robotic arms that replicate human arm movements for handling biological agents. These robotic arms are equipped with the flexibility and precision necessary to mimic human dexterity while ensuring safety and efficiency in environments requiring precision handling.",
    tags: ["Robotics", "Telemanipulation", "6DOF", "Biomedical Engineering", "Embedded Systems"],
    image: rocco_cover,
    role: "Project leader in charge of software",
    teamSize: "4 people",
    startDate: "08/2022",
    duration: "5 months",
    associatedWith: "Universidad Autónoma del Caribe (Colombia)",
    contributions: [
      "Developed joint-level control software enabling smooth replication of human arm motion",
      "Implemented algorithms for coordinated multi-joint mapping and operator input filtering",
      "Designed real-time wireless communication architecture using Bluetooth and microcontrollers",
      "Supervised integration of custom PCBs and mechanical subsystems into the tele-operation system",
      "Conducted performance testing to evaluate precision, latency, and operator usability"
    ],
    keyResults: [
      "Human-motion replication achieved through smooth joint interpolation with low perceived latency",
      "Reliable wireless teleoperation link established with consistent real-time command delivery",
      "Biomechanically inspired dual-arm CAD model completed following human arm kinematics",
      "Custom PCBs integrated for multi-joint coordination and data acquisition",
      "Functional prototypes capable of manipulating delicate materials safely and repeatably",
      "Two software registrations were obtained"
    ],
      
    media: [
      { url: rocco_video1, type: "video" },
      { url: rocco_photo1, type: "image" },
    ] // TODO: ADD PHOTOS AND VIDEOS
  },
  
  {
    id: "q-air",
    title: "Q-Air",
    subtitle: "Indoor and outdoor air quality measurement device for the detection and monitoring of air pollutants with hazardous health effects (Final degree project)",
    description: "Portable IoT device for multi-pollutant air quality monitoring with real-time data acquisition and cloud visualization.",
    fullDescription: "This project focused on the design, assembly, and programming of a portable 6x6x8cm IoT device for monitoring of 6 types of air pollutants (CO, CO₂, NO₂, O₃, PM₂.₅, PM₁₀) and atmospheric variables such as temperature and humidity, with live location and cloud storage and visualization through blynk. Designed for the measurement of air quality in outdoor and indoor environments.",
    tags: ["IoT", "Air Quality", "Sensors", "MQTT", "Blynk", "Real-time","Data adquisition"],
    image: qair_cover,
    role: "Project co-leader",
    teamSize: "2 people",
    startDate: "10/2022",
    duration: "9 months",
    associatedWith: "Universidad Autónoma del Caribe (Colombia)",
    contributions: [
      "Co-led the hardware design and integration of six pollutant sensors and environmental variables",
      "Developed firmware for data acquisition, filtering, and mobile-network transmission",
      "Implemented dashboards and real-time telemetry using MQTT and Blynk",
      "Performed field calibration and benchmarking against certified monitoring stations"
    ],
    keyResults: [
      "Proceeding paper published in MDPI journal documenting device architecture and accuracy validation",
      "6-hour autonomous operation via onboard battery and mobile network connectivity",
      "Under 1.2% error compared to certified city monitoring stations",
      "Real-time cloud storage and visualization via MQTT and Blynk",
      "Successfully deployed in multiple field-measurement scenarios",
      "One software registration was obtained"
    ],
    media: [
      { url: qair_photo1, type: "image" },
      { url: qair_photo2, type: "image" },
      { url: qair_video1, type: "video" },
    ]
  },

  {
    id: "fillbo",
    title: "FILLBO",
    subtitle: "Flexible manufacturing system for plastic bottle filling",
    description: "Automated flexible manufacturing system for detecting, filling, sealing, verifying, and classifying plastic bottles.",
    fullDescription: "This project focused on the design, assembly, and programming of a fully automated flexible manufacturing system for the filling of plastic bottles. The system comprised six stations organized into five sequential phases, which included detection, filling, sealing, verification, and classification. The design aimed to achieve autonomous operation with an output capacity of two bottles per minute, integrating mechanical, electrical, and software subsystems into a coherent production line. The work involved component selection, actuator design, sensor integration, and the development of control software that coordinated all stages of the process with precision and repeatability.",
    tags: ["Automation", "FMS", "Industrial Control", "Embedded Systems", "Mechatronics"],
    image: fillbo_cover,
    role: "Team leader, in charge of design and software",
    teamSize: "4 people",
    startDate: "03/2022",
    duration: "4 months",
    associatedWith: "Universidad Autónoma del Caribe (Colombia)",
    contributions: [
      "Led the mechanical and software design of the flexible manufacturing system",
      "Selected and specified components for all s for all production stages",
      "Developed control logic to synchronize detection, filling, sealing, and final classification",
      "Integrated all electromechanical subsystems and conducted throughput validation"
    ],
    keyResults: [
      "Fully integrated electromechanical system enabling end-to-end automated bottle processing",
      "Pneumatic actuators validated and integrated for consistent motion and force control",
      "Control logic synchronizing six stations with deterministic, reliable timing",
      "Proven throughput of two bottles per minute during validation trials",
      "Comprehensive documentation completed and software registration obtained"
    ],
    media: [
      { url: fillbo_video1, type: "video" },
    ]
  },

  {
    id: "moai",
    title: "Moái",
    subtitle: "Automatic rotation base for 3D object digitalization",
    description: "Rotatory platform for object digitalization through 3D scan and pointcloud generation using an iPhone camera.",
    fullDescription: "This project focused on the design, assembly, and programming of a rotatory platform with adjustable camera holder (to choose the right angle) for any object digitalization troght poincloud using python and an iPhone's built in depth camera, from which the cloudpoint are cleaned and ready to be alligned", //FIX
    tags: ["3D scan", "Solidworks", "iPhone", "Point cloud","Mesh", "Mechatronics"],
    image: moai_cover,
    role: "Team member - flat hierarchy",
    teamSize: "3 people",
    startDate: "02/2024",
    duration: "2 months",
    associatedWith: "Universidad de Oviedo (Spain)",
    contributions: [
      "Designed and modelled the automated rotatory base",
      "Co-implemented the point-cloud acquisition pipeline using iPhone depth data and Python",
      "Assisted in preprocessing routines including noise filtering, cropping, and alignment preparation"
    ],
    keyResults: [
      "Automated rotation and adjustable camera system enabling full 360° scanning workflows",
      "High-density point-cloud acquisition using iPhone depth sensing and custom Python pipeline",
      "Robust preprocessing tools implemented for noise reduction, cropping, and outlier removal",
      "Consistent point clouds generated for downstream alignment and mesh reconstruction",
      "Modular design adaptable to objects of different size and geometry"
    ],
    media: [
      { url: moai_video1, type: "video" },
      { url: moai_video2, type: "video" },
      { url: moai_photo1, type: "image" },
    ]
  },

  {
    id: "grab-las",
    title: "GRAB-LAS",
    subtitle: "Low-cost laser engraving machine",
    description: "Low-cost laser engraving machine designed for precise engraving, printing, and cutting through soft materials.",
    fullDescription: "This project involved the design and construction of a low-cost laser engraving machine intended to improve engraving, printing, and cutting processes across a range of materials. The system exploited the precision and adaptability of laser technology to achieve finer detail and greater versatility when compared to conventional mechanical engraving methods.",
    tags: ["Laser Systems", "Mechatronics", "Automation", "Embedded Systems"],
    image: grablas_cover,
    role: "Design leader",
    teamSize: "3 people",
    startDate: "04/2022",
    duration: "3 months",
    associatedWith: "Universidad Autónoma del Caribe (Colombia)",
    contributions: [
      "Led mechanical design of the laser-engraving structure and linear-motion system",
      "Selected and integrated sensors, actuators, and driver electronics for reliable operation",
      "Supervised assembly, calibration, and functional validation of the prototype",
      "Produced full user documentation and ensured compliance with safety requirements"
    ],
    keyResults: [
      "Consistent engraving precision achieved across wood, cardboard, and soft materials",
      "Protective enclosure engineered with optical shielding and interlock safety mechanisms",
      "Motion-control architecture enabling repeatable XY positioning with fine resolution",
      "Prototype fully assembled, calibrated, and validated in functional tests",
      "User documentation delivered and software registration obtained"
    ],
    media: [
      { url: grablas_photo1, type: "image" },
      { url: coming, type: "image" },
    ]
  },
  {
    id: "meye",
    title: "M-Eye",
    subtitle: "Collection of computer-vision solutions for automated grading, object identification, measurement, and defect analysis.",
    description: "Set of independent computer-vision tools developed to automate test grading, object classification, measurement, and visual inspection tasks.",
    fullDescription: "This project aggregates multiple standalone computer-vision solutions built for academic, industrial, and research use cases. The suite includes: an automated multiple-choice test evaluator; classification models trained to identify leaves, clothing garments, and general household objects; dimensional-measurement tools calibrated to extract real-world metrics from pixel data; and analytical modules for segmentation and defect detection in granular materials. One of the key systems is a rice-grain analyzer capable of categorizing grain types and computing geometric characteristics such as length, area, and aspect ratio.",
    tags: ["OpenCV", "Python", "Computer Vision", "Machine learning", "Image processing"],
    image: meye_cover,
    role: "Creator",
    teamSize: "1 person",
    startDate: "N/A",
    duration: "N/A",
    associatedWith: "Universidad Autónoma del Caribe (Colombia), SUPMICROTECH-ENSMM (France)",
    keyResults: [
      "Automated grading system capable of processing full exam sheets with high accuracy and providing real-time feedback",
      "Custom-trained neural networks for classification of leaves, clothing items, and general objects",
      "Dimension-measurement tool with calibrated millimetric precision",
      "Grain-analysis pipeline able to segment, classify, and compute geometric metrics for thousands of rice grains",
      "Modular architecture enabling rapid addition of new models and segmentation workflows"
    ],
    media: [
      { url: meye_photo1, type: "image" },
      { url: meye_photo2, type: "image" },
      { url: meye_photo3, type: "image" },
      { url: meye_photo4, type: "image" }, // TODO: ADD MORE PHOTOS
      { url: coming, type: "image" },
    ]
  },
    {
    id: "industrial",
    title: "INDROS",
    subtitle: "Collection of industrial-robot programming solutions for automation, manipulation, and trajectory design",
    description: "Tailored trajectories and automations for object manipulation using industrial and collaborative robots.",
    fullDescription: "This collection encompasses multiple standalone industrial-robot programming tasks delivered across different manufacturing environments. Solutions included configuring coordinate systems, designing custom trajectories, integrating end-effectors, optimizing cycle times, and automating processes previously carried out manually. Robots programmed covered FANUC, Universal Robots, Staubli, and Epson platforms, each requiring adaptation to specific tooling, process constraints, and production requirements.", 
    tags: ["Industrial Robots", "Pick & Place", "Sorting", "Automation", "Metal Spray", "Trajectories"],
    image: industrial_cover,
    role: "Programmer",
    teamSize: "1 person",
    startDate: "N/A",
    duration: "N/A",
    associatedWith: "N/A",
    keyResults: [
      "Successful deployment of automation programs across FANUC, Universal Robots, Staubli, and Epson platforms",
      "High-precision trajectories developed for metal spraying, sorting, and object manipulation",
      "Cycle-time reductions achieved through motion-planning and path-optimization strategies",
      "Custom grippers and tooling integrated with stable I/O communication and safety compliance",
      "Production-ready automation scripts created for rapid adaptation to new industrial workflows"
    ],
    media: [
      { url: industrial_video1, type: "video" },
      { url: industrial_video2, type: "video" },
      { url: industrial_video3, type: "video" },
      { url: industrial_video4, type: "video" },
      { url: industrial_video5, type: "video" },
      { url: industrial_video6, type: "video" },
    ]
  },
];
