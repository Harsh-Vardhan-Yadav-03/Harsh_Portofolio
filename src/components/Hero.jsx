import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-background to-accent/5" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Flexbox Layout: Content on Left, Image on Right */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-40 lg:gap-20 animate-fade-in">
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left space-y-6">
              <div className="space-y-4">
                <h2 className="text-lg md:text-xl text-muted-foreground font-medium">
                  Hi, I'm
                </h2>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-linear-to-r from-[hsl(223,69%,32%)] to-accent bg-clip-text text-transparent animate-gradient">
                  Harsh Vardhan Yadav
                </h1>
                <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold text-foreground/80">
                  Frontend Developer
                </h2>
              </div>

              <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Passionate about creating elegant solutions to complex problems.
                I build scalable web applications with modern technologies and
                clean code.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-4">
                <Button size="lg" className="group" asChild>
                  <a href="#projects">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#contact">
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </a>
                </Button>
              </div>
            </div>

            {/* Profile Image (Now on the Right) */}
            <div className="flex-shrink-0 flex justify-center lg:justify-end">
              <img
                src="/images/my_img.png"
                alt="Harsh Vardhan Yadav"
                className="w-56 h-56 lg:w-80 lg:h-80 rounded-full object-cover shadow-lg border-4 border-primary/20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
