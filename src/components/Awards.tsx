import { Award } from "lucide-react";

const awards = [
  {
    title: "Best Engineering Project Award",
    organization: "Technical University",
    period: "2022",
    description: "Recognized for outstanding innovation in autonomous robotics systems."
  },
  {
    title: "Research Excellence Grant",
    organization: "National Science Foundation",
    period: "2021",
    description: "Awarded funding for advanced mechatronics research in industrial automation."
  },
  {
    title: "Outstanding Graduate Student",
    organization: "Engineering Department",
    period: "2020",
    description: "Honored for academic excellence and contributions to robotics research."
  },
  {
    title: "Innovation Challenge Winner",
    organization: "International Robotics Competition",
    period: "2019",
    description: "First place in autonomous navigation and control systems category."
  }
];

const Awards = () => {
  return (
    <section className="py-24 relative" id="awards">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-4 mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Awards & Distinctions</h2>
            <div className="h-1 w-20 bg-gradient-primary rounded-full mx-auto" />
          </div>
          
          <div className="space-y-8 max-w-4xl mx-auto">
            {awards.map((item, index) => (
              <div 
                key={index}
                className="relative pl-8 pb-8 border-l-2 border-border last:border-l-0 last:pb-0"
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-surface border border-border">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                      <p className="text-primary font-medium">{item.organization}</p>
                      <p className="text-sm text-muted-foreground mt-1">{item.period}</p>
                      <p className="text-muted-foreground mt-3">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
