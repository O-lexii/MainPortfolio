import { ArrowDown, Terminal, Lock, Bug } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="cover" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "-1.5s" }} />
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Photo with Neon Circle */}
            <div className="relative flex-shrink-0 order-1 lg:order-2">
              <div className="relative w-56 h-56 md:w-64 md:h-64">
                {/* Outer glow rings */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan opacity-75 blur-xl animate-pulse-glow" />
                <div className="absolute inset-2 rounded-full bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-pink opacity-60 blur-lg animate-pulse-glow" style={{ animationDelay: "-1s" }} />
                
                {/* Neon border */}
                <div className="absolute inset-0 rounded-full p-1 bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan animate-gradient">
                  <div className="w-full h-full rounded-full bg-background p-1">
                    {/* Photo placeholder */}
                    <div className="w-full h-full rounded-full bg-muted flex items-center justify-center overflow-hidden border-2 border-border">
                    <img 
                    src="/imgs/photo ph.jpg"
                    alt="Your photo"
                    className="w-full h-full object-cover" />                    
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
              {/* Floating Icons */}
              <div className="flex justify-center lg:justify-start gap-6 mb-6">
                <div className="p-3 glass rounded-xl animate-float glow-pink">
                  <Terminal className="h-6 w-6 text-primary" />
                </div>
                <div className="p-3 glass rounded-xl animate-float" style={{ animationDelay: "-2s" }}>
                  <Lock className="h-6 w-6 text-secondary" />
                </div>
                <div className="p-3 glass rounded-xl animate-float glow-purple" style={{ animationDelay: "-4s" }}>
                  <Bug className="h-6 w-6 text-accent" />
                </div>
              </div>

              <div className="space-y-5 opacity-0 animate-fade-in">
                <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm font-mono text-muted-foreground">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Available for Security Assessments
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="text-foreground">Hi, I'm </span>
                  <span className="text-gradient">Ola Zaher</span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 font-mono">
                  <span className="text-primary">&gt;</span> Penetration Tester
                </p>

                <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
                  Cybersecurity, penetration testing, and the occasional Python script that started
                  as a rabbit hole.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                  <Button variant="neon" size="xl" onClick={scrollToAbout}>
                    Explore My Work
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <button onClick={scrollToAbout} className="text-muted-foreground hover:text-primary transition-colors">
              <ArrowDown className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}