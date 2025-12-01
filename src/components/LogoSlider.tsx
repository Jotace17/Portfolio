const logos = [
  { name: "VS Code", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Ubuntu", url: "https://cdn.worldvectorlogo.com/logos/ubuntu-1.svg" },
  { name: "Git", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Fanuc", url: "https://static.spacecrafted.com/fb60cc3d39b74f0786cc14078ce866c7/i/bdd8c488aace43b58e15fe8460df8ae1/1/4SoifmQp45JMgBnHp7ed2/FANUC%20logo.png" },
  { name: "Notion", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg" },
  { name: "SolidWorks", url: "https://cdn.worldvectorlogo.com/logos/solidworks-logo-1.svg" },
  { name: "C++", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "Staubli", url: "https://www.eproject4.com/wp-content/uploads/2018/06/staubli-black.png" },
  { name: "Python", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Universal Robots", url: "https://www.robotics247.com/images/logos/universal-robots-logo-555.png" },
  { name: "Raspberry Pi", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg" },
  { name: "Cura Ultimaker", url: "https://itsmeadmade.com/wp-content/uploads/2023/04/Screenshot-2023-04-01-at-1.30.26-PM.png" },
  { name: "Visual Studio", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg" },
  { name: "EtherCAT", url: "https://guideautomation.com/wp-content/uploads/2014/11/Ethercat-logo.png" },
  { name: "Arduino", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" },
  
  { name: "VS Code", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Ubuntu", url: "https://cdn.worldvectorlogo.com/logos/ubuntu-1.svg" },
  { name: "Git", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Fanuc", url: "https://static.spacecrafted.com/fb60cc3d39b74f0786cc14078ce866c7/i/bdd8c488aace43b58e15fe8460df8ae1/1/4SoifmQp45JMgBnHp7ed2/FANUC%20logo.png" },
  { name: "Notion", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg" },
  { name: "SolidWorks", url: "https://cdn.worldvectorlogo.com/logos/solidworks-logo-1.svg" },
  { name: "C++", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "Staubli", url: "https://www.eproject4.com/wp-content/uploads/2018/06/staubli-black.png" },
  { name: "Python", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Universal Robots", url: "https://www.robotics247.com/images/logos/universal-robots-logo-555.png" },
  { name: "Raspberry Pi", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg" },
  { name: "Cura Ultimaker", url: "https://itsmeadmade.com/wp-content/uploads/2023/04/Screenshot-2023-04-01-at-1.30.26-PM.png" },
  { name: "Visual Studio", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg" },
  { name: "EtherCAT", url: "https://guideautomation.com/wp-content/uploads/2014/11/Ethercat-logo.png" },
  { name: "Arduino", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" },
  
];


const LogoSlider = () => {
  return (
    <div className="w-full overflow-hidden py-8 relative">
      {/* Left gradient overlay */}
      <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 lg:w-64 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
      
      {/* Right gradient overlay */}
      <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 lg:w-64 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />
      
      <div className="flex animate-scroll">
        {/* First set of logos */}
        {logos.map((logo, index) => (
          <div 
            key={`first-${index}`}
            className="flex-shrink-0 mx-8 grayscale hover:grayscale-0 transition-all duration-600"
          >
            <img 
              src={logo.url} 
              alt={logo.name}
              className="h-12 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
