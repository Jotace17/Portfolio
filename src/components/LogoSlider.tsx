const LogoSlider = () => {
  const tools = [
    { name: "Python", icon: "🐍" },
    { name: "MATLAB", icon: "📊" },
    { name: "C++", icon: "⚙️" },
    { name: "ROS", icon: "🤖" },
    { name: "SolidWorks", icon: "🔧" },
    { name: "AutoCAD", icon: "📐" },
    { name: "Arduino", icon: "⚡" },
    { name: "Raspberry Pi", icon: "🥧" },
    { name: "LabVIEW", icon: "🔬" },
    { name: "Git", icon: "📦" },
  ];

  return (
    <div className="relative py-8 overflow-hidden border-t border-border">
      <div className="flex gap-12 animate-scroll">
        {/* First set */}
        {tools.map((tool, index) => (
          <div
            key={`first-${index}`}
            className="flex items-center gap-3 px-6 py-3 bg-surface rounded-lg border border-border whitespace-nowrap"
          >
            <span className="text-2xl">{tool.icon}</span>
            <span className="font-medium text-foreground">{tool.name}</span>
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {tools.map((tool, index) => (
          <div
            key={`second-${index}`}
            className="flex items-center gap-3 px-6 py-3 bg-surface rounded-lg border border-border whitespace-nowrap"
          >
            <span className="text-2xl">{tool.icon}</span>
            <span className="font-medium text-foreground">{tool.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
