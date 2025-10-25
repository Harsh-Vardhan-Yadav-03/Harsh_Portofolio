import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Bansiwale Technical",
      description: "A comprehensive technical solutions platform built with modern web technologies. Features include service showcase, project portfolio, and client management system with responsive design.",
      image: "/images/bansitech_img.png",
      technologies: ["React", "JavaScript", "CSS", "HTML"],
      githubUrl: "https://github.com/Harsh-Vardhan-Yadav-03/Bansiwale-Technical",
      liveUrl: "https://bansi-tech.vercel.app/",
      featured: true
    },
    {
      title: "E-commerce Platform",
      description: "A modern e-commerce frontend featuring product catalogs, shopping cart functionality, and user-friendly interface. Built with responsive design principles for seamless mobile experience.",
      image: "/images/EcommerceSS.png",
      technologies: ["React", "TypeScript", "TailwindCSS"],
      githubUrl: "https://github.com/Harsh-Vardhan-Yadav-03/e-commerce",
      liveUrl: "https://e-commerce-eight-pi-38.vercel.app/",
      featured: true
    },
    {
      title: "Netflix Clone",
      description: "A feature-rich streaming platform clone built with HTML, CSS. Includes responsive layout.",
      image: "/images/NetflixClone.png",
      technologies: ["HTML", "CSS"],
      githubUrl: "https://github.com/Harsh-Vardhan-Yadav-03/Netflix_Clone",
      liveUrl: "https://netflix-clone-rho-virid-16.vercel.app/",
      featured: false
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my skills in full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 animate-slide-in-up flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {project.image && (
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
                <Button size="sm" className="flex-1" asChild>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
