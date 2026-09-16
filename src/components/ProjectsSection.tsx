import { Github } from "lucide-react";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

const projects = [
  {
    number: "01",
    title: "Phishing URL Analyzer",
    description:
      "A rule-based phishing URL analysis tool that evaluates 14 security heuristics to identify suspicious URL characteristics and produces a 0–100 risk score, verdict, and explainable findings.",
    bullets: [
      "Built a Flask web interface, CLI, and JSON API supporting single and batch URL analysis",
      "Added optional WHOIS-based domain-age analysis",
      "Designed machine-readable output for scripting and automation",
    ],
    tags: ["Python", "Flask"],
    color: "primary",
    codeUrl: "#",
  },
  {
    number: "02",
    title: "Network Intrusion Detection System",
    description:
      "An intrusion detection system developed using the NSL-KDD dataset to evaluate and compare machine-learning approaches for network attack detection.",
    bullets: [
      "Benchmarked Random Forest, XGBoost, and Logistic Regression models",
      "Applied SMOTE to address class imbalance in the training data",
      "Compared model performance to identify an effective approach for intrusion classification",
    ],
    tags: ["Python", "Machine Learning"],
    color: "secondary",
    codeUrl: "#",
  },
  {
    number: "03",
    title: "RFID-Based Smart Door Lock System",
    description:
      "An embedded access-control system that uses RFID authentication to control a servo-based door lock and provide real-time access feedback.",
    bullets: [
      "Integrated an RFID reader, Arduino Uno, servo motor, and I2C LCD",
      "Implemented UID verification to authenticate registered cards",
      "Built real-time access granted/denied logic with lock control and status display",
    ],
    tags: ["Arduino", "Embedded"],
    color: "accent",
    codeUrl: "#",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className="text-primary font-mono text-sm">&lt;projects&gt;</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
              Not Just <span className="text-gradient">Project Cards</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of things I've built, across security, machine learning, and embedded systems.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="glass rounded-xl overflow-hidden group hover-glow opacity-0 animate-scale-in"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                {/* Header Bar */}
                <div className={`h-1 ${
                  project.color === 'primary' ? 'bg-gradient-primary' :
                  project.color === 'secondary' ? 'bg-gradient-secondary' :
                  'bg-gradient-accent'
                }`} />

                {/* Project Image */}
                <div className="p-4 pb-0">
                  <ImagePlaceholder label="Add project screenshot" ratio="video" />
                </div>

                <div className="p-6">
                  <span className="text-xs font-mono text-primary">project / {project.number}</span>
                  <h3 className="text-xl font-semibold mt-2 mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <ul className="space-y-1.5 text-xs text-muted-foreground list-disc pl-4 mb-4">
                    {project.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-mono bg-muted rounded text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Code Link */}
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    <Github className="h-4 w-4" />
                    View Code
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Closing Tag */}
          <div className="text-center mt-16 opacity-0 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <span className="text-primary font-mono text-sm">&lt;/projects&gt;</span>
          </div>
        </div>
      </div>
    </section>
  );
}
