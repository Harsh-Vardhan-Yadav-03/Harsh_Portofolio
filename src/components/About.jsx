import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const skills = [
    "JavaScript", "TypeScript", "Java",
    "React", "Node.js", "Express", "MongoDB",
    "Git", "REST APIs","TailwindCSS"
  ];

  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-linear-to-r from-primary to-accent mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <Card className="animate-slide-in-left">
            <CardContent className="p-6 space-y-4">
              <h3 className="text-2xl font-semibold">Who I Am</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a Full Stack Developer from Bhubaneswar with a passion for building 
                innovative web applications. I specialize in creating scalable, user-friendly 
                solutions that solve real-world problems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With expertise in both frontend and backend technologies, I bring ideas to 
                life through clean code and thoughtful design. I'm constantly learning and 
                exploring new technologies to stay at the forefront of web development.
              </p>
              <div className="pt-4">
                <h4 className="font-semibold mb-2">Contact Information</h4>
                <div className="space-y-2 text-muted-foreground">
                  <p>📧 yvtharsh11@gamil.com</p>
                  <p>📱 7906414804</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="animate-slide-in-right">
            <CardContent className="p-6 space-y-4">
              <h3 className="text-2xl font-semibold">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary"
                    className="hover:scale-105 transition-transform cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
