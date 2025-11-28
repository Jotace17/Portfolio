const logos = [
  { name: "Python", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "MATLAB", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg" },
  { name: "C++", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "ROS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ros/ros-original.svg" },
  { name: "Docker", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Git", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Linux", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  { name: "Arduino", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" },
];

const LogoSlider = () => {
  return (
    <div className="w-full overflow-hidden py-8">
      <div className="flex animate-scroll">
        {/* First set of logos */}
        {logos.map((logo, index) => (
          <div 
            key={`first-${index}`}
            className="flex-shrink-0 mx-8 grayscale hover:grayscale-0 transition-all duration-300"
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
            className="flex-shrink-0 mx-8 grayscale hover:grayscale-0 transition-all duration-300"
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
