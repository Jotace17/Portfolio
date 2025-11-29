import sw_logo from "@/assets/logos/solidworks-logo-1.svg";
const logos = [
  { name: "SolidWorks", url: sw_logo },
  { name: "Arduino", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" },
  { name: "Raspberry Pi", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg" },
  { name: "VS Code", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Ubuntu", url: "" },
  { name: "Fanuc", url: "" },
  { name: "Staubli", url: "" },
  { name: "Universal Robots", url: "" },
  { name: "Cura Ultimaker", url: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Ultimaker_Cura_Logo.svg" },
  { name: "Python", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Visual Studio", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg" },
  { name: "C++", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "Notion", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg" },
  { name: "Git", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "EtherCAT", url: "" },
  
];


const LogoSlider = () => {
  return (
    <div className="w-full overflow-hidden py-8">
      <div className="flex animate-scroll">
        {/* First set of logos */}
        {logos.map((logo, index) => (
          <div 
            key={`first-${index}`}
            className="flex-shrink-0 mx-8 grayscale hover:grayscale-0 transition-all duration-3000"
          >
            <img 
              src={logo.url} 
              alt={logo.name}
              className="h-12 w-12 object-contain"
              
              
            />
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {logos.map((logo, index) => (
          <div 
            key={`second-${index}`}
            className="flex-shrink-0 mx-8 grayscale hover:grayscale-0 transition-all duration-3000"
          >
            <img 
              src={logo.url} 
              alt={logo.name}
              className="h-12 w-12 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
