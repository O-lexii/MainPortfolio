import {
  ShieldCheck,
  Network,
  Search,
  BrainCircuit,
  Sparkles,
  Cloud,
  Cpu,
  MessageCircle,
} from "lucide-react";

const skills = [
  {
    icon: ShieldCheck,
    title: "Penetration Testing",
    description: "Assessing systems from an attacker's perspective in lab and practice environments",
    color: "primary",
  },
  {
    icon: Search,
    title: "Web & Network Security",
    description: "Reconnaissance, enumeration, and identifying misconfigurations before someone else does",
    color: "secondary",
  },
  {
    icon: ShieldCheck,
    title: "Vulnerability Assessment",
    description: "Turning findings into explainable, actionable risk assessments",
    color: "accent",
  },
  {
    icon: Network,
    title: "Network Architecture",
    description: "Protocols, troubleshooting, and traffic analysis with Nmap & Wireshark",
    color: "primary",
  },
  {
    icon: BrainCircuit,
    title: "Machine Learning",
    description: "Random Forest, XGBoost, and Logistic Regression for security data",
    color: "secondary",
  },
  {
    icon: Sparkles,
    title: "AI-Assisted Security",
    description: "Applying ML to spot what manual review might miss",
    color: "accent",
  },
  {
    icon: Cloud,
    title: "Cloud Fundamentals",
    description: "Core cloud services, deployment models, and architecture basics",
    color: "primary",
  },
  {
    icon: Cpu,
    title: "Embedded & IoT Security",
    description: "Access-control systems built on Arduino and RFID authentication",
    color: "secondary",
  },
];

const tools = [
  "Python", "Nmap", "Wireshark", "Linux", "Windows", "Git",
  "React", "Node.js", "Flutter", "Burp Suite", "MongoDB",
];

const softSkills = [
  { label: "Analytical Thinking", note: "break it down, investigate" },
  { label: "Problem Solving", note: "logical, practical" },
  { label: "Attention to Detail", note: "small clues, big picture" },
  { label: "Communication", note: "technical → understandable" },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className="text-primary font-mono text-sm">&lt;skills&gt;</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
              Things I Use <span className="text-gradient">to Make Stuff</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Security, networking, AI/ML, and enough full-stack range to take an idea from
              prototype to something real.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="mb-16 opacity-0 animate-fade-in" style={{ animationDelay: "0.15s" }}>
            <h3 className="text-2xl font-bold mb-6 text-center">
              Technical <span className="text-gradient">Skills</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={skill.title}
                  className="glass rounded-xl p-6 hover-glow group cursor-default opacity-0 animate-scale-in"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className={`inline-flex p-3 rounded-lg mb-4 ${
                    skill.color === 'primary' ? 'bg-primary/10 text-primary' :
                    skill.color === 'secondary' ? 'bg-secondary/10 text-secondary' :
                    'bg-accent/10 text-accent'
                  }`}>
                    <skill.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {skill.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="glass rounded-2xl p-8 opacity-0 animate-fade-in mb-8" style={{ animationDelay: "0.8s" }}>
            <h3 className="text-2xl font-bold mb-6 text-center">
              Tools & <span className="text-gradient">Technologies</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 glass rounded-full text-sm font-mono text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="glass rounded-2xl p-8 opacity-0 animate-fade-in mb-8" style={{ animationDelay: "0.9s" }}>
            <div className="flex items-center gap-2 mb-4">
              <MessageCircle className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-bold">How I Work</h3>
            </div>
            <div className="space-y-3 max-w-xl mx-auto">
              {softSkills.map((s) => (
                <div key={s.label} className="flex items-center justify-between text-sm border-b border-border/50 pb-2 last:border-0">
                  <span className="font-medium">{s.label}</span>
                  <span className="text-muted-foreground font-mono text-xs">{s.note}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="glass rounded-2xl p-8 opacity-0 animate-fade-in" style={{ animationDelay: "1s" }}>
            <h3 className="text-xl font-bold mb-4 text-center">Languages</h3>
            <div className="space-y-3 max-w-xl mx-auto">
              <div className="flex items-center justify-between text-sm border-b border-border/50 pb-2">
                <span className="font-medium">Arabic</span>
                <span className="text-muted-foreground font-mono text-xs">native</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">English</span>
                <span className="text-muted-foreground font-mono text-xs">fluent</span>
              </div>
            </div>
          </div>

          {/* Closing Tag */}
          <div className="text-center mt-16 opacity-0 animate-fade-in" style={{ animationDelay: "1.1s" }}>
            <span className="text-primary font-mono text-sm">&lt;/skills&gt;</span>
          </div>
        </div>
      </div>
    </section>
  );
}
