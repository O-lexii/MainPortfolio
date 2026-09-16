import { BookOpen, Award, Code2, Presentation } from "lucide-react";

const stats = [
  { icon: Code2, label: "Projects Built", value: "10+" },
  { icon: Award, label: "Certifications", value: "3+" },
  { icon: BookOpen, label: "Training Hours", value: "280+" },
  { icon: Presentation, label: "Conference Talk", value: "IUGRC-10" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className="text-primary font-mono text-sm">&lt;about&gt;</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
              A Few Things <span className="text-gradient">About Me</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I got into cybersecurity through curiosity.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6 opacity-0 animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At first, I was simply interested in understanding how technology works — how systems
                communicate, how applications are built, and what happens behind the things we use
                every day. That curiosity gradually led me to cybersecurity, where I found myself
                especially drawn to understanding how systems can be tested, where weaknesses come
                from, and how they can be made more secure.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Since then, I've been building my experience across cybersecurity, software,
                networking, and hands-on technical projects. Each one has taught me to look at
                problems from different angles, investigate before making assumptions, and pay
                attention to the details that are easy to overlook.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'd say my strongest qualities are{" "}
                <span className="text-foreground font-medium">
                  curiosity, analytical thinking, problem-solving, and attention to detail
                </span>
                . They help me approach a security problem methodically, understand what is
                actually happening, and turn what I find into something useful rather than simply
                identifying a problem.
              </p>

              {/* Code Block */}
              <div className="glass rounded-lg p-4 font-mono text-sm">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-3 h-3 rounded-full bg-destructive" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <code className="text-muted-foreground">
                  <span className="text-secondary">const</span>{" "}
                  <span className="text-accent">olaZaher</span> = {"{"}
                  <br />
                  <span className="pl-4">focus:</span>{" "}
                  <span className="text-primary">"cybersecurity + AI"</span>,
                  <br />
                  <span className="pl-4">mindset:</span>{" "}
                  <span className="text-primary">"questions before commands"</span>
                  <br />
                  {"}"};
                </code>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 opacity-0 animate-scale-in" style={{ animationDelay: "0.3s" }}>
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="glass rounded-xl p-6 text-center hover-glow group cursor-default"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-bold text-gradient mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Closing Tag */}
          <div className="text-center mt-16 opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <span className="text-primary font-mono text-sm">&lt;/about&gt;</span>
          </div>
        </div>
      </div>
    </section>
  );
}
