const About = () => {
  return (
    <section className="py-24 relative" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">About Me</h2>
            <div className="h-1 w-20 bg-gradient-primary rounded-full" />
          </div>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm a passionate engineer dedicated to creating innovative solutions that make a difference. 
              With a strong foundation in software development and systems engineering, I specialize in 
              building scalable, efficient, and user-centric applications.
            </p>
            
            <p>
              My journey in engineering began with a curiosity for how things work and evolved into a 
              commitment to excellence in every project I undertake. I believe in continuous learning, 
              collaboration, and pushing the boundaries of what's possible with technology.
            </p>
            
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
              projects, or sharing knowledge with the developer community. I'm always excited to take on 
              new challenges and work on projects that have a meaningful impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
